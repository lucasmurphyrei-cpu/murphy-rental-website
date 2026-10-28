import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PhotoGallery } from "@/components/units/PhotoGallery";
import { getUnit, getVacantUnits } from "@/lib/units";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Only vacant units are pre-rendered. dynamicParams stays true on purpose: with false,
// Next answers an unknown slug from the root not-found and never reaches this segment's
// not-found.tsx. Every other slug still 404s, because getVacantOrNotFound() calls
// notFound() before anything is read or rendered.
export const dynamicParams = true;

export function generateStaticParams() {
  return getVacantUnits().map((u) => ({ slug: u.slug }));
}

/** Resolve a slug to a vacant unit, or 404. Occupied units never render. */
function getVacantOrNotFound(slug: string) {
  const unit = getUnit(slug);
  if (!unit || unit.status !== "vacant") notFound();
  return unit;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // Not notFound() here: thrown from streamed metadata it leaves the 404 response with an
  // empty server-rendered body. The page itself throws notFound() and Next marks it noindex.
  const unit = getUnit(slug);
  if (!unit || unit.status !== "vacant") return {};
  const rent = unit.rent ? `${unit.rent}/mo. ` : "";
  const title = `${unit.unit_label} for Rent, ${unit.address}`;
  const description =
    `${unit.beds} bed, ${unit.baths} bath, ${unit.sqft} sq ft rental at ` +
    `${unit.address}, ${unit.city}, ${unit.state}. ${rent}Available ${unit.available_long}.`;
  return {
    title,
    description,
    alternates: { canonical: `/available/${unit.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: unit.hero.src, width: unit.hero.width, height: unit.hero.height, alt: unit.hero.alt }],
    },
  };
}

const primaryButton =
  "inline-flex h-11 w-full items-center justify-center rounded-full bg-amber px-8 text-sm font-semibold text-navy " +
  "shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none";

const sectionHeading = "text-2xl sm:text-3xl mb-4";

export default async function UnitPage({ params }: PageProps) {
  const { slug } = await params;
  const unit = getVacantOrNotFound(slug);

  const stats = [
    { label: "Beds", value: unit.beds },
    { label: "Baths", value: unit.baths },
    { label: "Sq Ft", value: unit.sqft },
    ...(unit.deposit ? [{ label: "Deposit", value: unit.deposit }] : []),
  ];

  // `note` carries the assistance-animal carve-out that has to travel with the pet
  // policy. Both strings come from unit.json, the same source the packet prints.
  const terms: { label: string; value: string; note?: string }[] = [
    { label: "Lease term", value: unit.lease_term },
    { label: "Tenant pays", value: unit.utilities_tenant },
    { label: "Included", value: unit.utilities_landlord },
    { label: "Pets", value: unit.pet_policy, note: unit.assistance_animal_notice },
    { label: "Application fee", value: `${unit.app_fee} per applicant, paid through Apartments.com` },
    ...(unit.move_in_total
      ? [{ label: "Due at move-in", value: unit.move_in_total, note: unit.move_in_funds_notice }]
      : []),
  ];

  return (
    <>
      <section className="bg-white pt-4 sm:pt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <PhotoGallery photos={unit.photos} />
        </div>
      </section>

      {/* Heading */}
      <section className="bg-white pt-8 lg:pt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                {unit.available_label} {unit.available_long}
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em]">{unit.unit_label}</h1>
              <p className="mt-1 text-body">
                {unit.address}, {unit.city}, {unit.state} {unit.zip}
              </p>
            </div>
            {unit.rent && (
              <p className="font-heading text-4xl tracking-[-0.03em] text-navy sm:text-right">
                {unit.rent}
                <span className="ml-1 font-sans text-base text-body">/ month</span>
              </p>
            )}
          </div>

          <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-2xl border border-border/50 bg-section sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-5 text-center ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""} ${i > 0 ? "sm:border-l" : ""} border-border/50`}
              >
                <dd className="font-heading text-2xl text-navy">{s.value}</dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-wide text-body">{s.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-relaxed text-muted-text">{unit.measurement_notice}</p>
        </div>
      </section>

      {/* Details + apply */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className={sectionHeading}>Features</h2>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {unit.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-body">
                <span className="font-semibold text-navy">Nearby: </span>
                {unit.nearby}
              </p>
            </div>

            <div>
              <h2 className={sectionHeading}>Terms</h2>
              <dl className="divide-y divide-border/50 rounded-2xl border border-border/50">
                {terms.map((t) => (
                  <div key={t.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-navy">{t.label}</dt>
                    <dd className="text-sm leading-relaxed text-body">
                      {t.value}
                      {t.note && (
                        <span className="mt-2.5 block rounded-lg bg-section px-3.5 py-2.5 text-xs leading-relaxed">
                          <span className="font-semibold text-navy">Assistance animals. </span>
                          {t.note}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
            <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-[0_1px_2px_rgba(27,42,74,0.06),0_8px_24px_rgba(27,42,74,0.08)]">
              <h2 className="text-2xl mb-2">Apply for this unit</h2>
              <p className="mb-5 text-sm leading-relaxed text-body">
                Applications, the background check and the credit check all run through Apartments.com.
                The {unit.app_fee} application fee is paid there. See the steps from inquiry to move-in.
              </p>
              <Link href="/how-to-apply" className={primaryButton}>
                How to apply
              </Link>
            </div>

            {unit.floorplan && (
              <div className="rounded-2xl border border-border/50 bg-white p-4 shadow-[0_1px_2px_rgba(27,42,74,0.06),0_8px_24px_rgba(27,42,74,0.08)]">
                <h2 className="mb-3 px-2 pt-2 text-xl">Floor plan</h2>
                <Image
                  src={unit.floorplan.src}
                  alt={`Floor plan of the ${unit.unit_label.toLowerCase()} at ${unit.address}`}
                  width={unit.floorplan.width}
                  height={unit.floorplan.height}
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* Qualification standards */}
      <section className="bg-section py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className={sectionHeading}>Qualification standards</h2>
          <ul className="max-w-3xl space-y-4 rounded-2xl border border-border/50 bg-white p-6 sm:p-8">
            {unit.quals.map((q) => (
              <li key={q} className="flex items-start gap-3 text-sm leading-relaxed text-body">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" aria-hidden="true" />
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-3xl text-xs leading-relaxed text-body">
            {unit.uniform_application_notice}
          </p>
        </div>
      </section>

      {/* Not a <footer>: the site Footer is the page's one footer landmark, and it
          already prints the licence number. This is just the licensee disclosure. */}
      <aside className="bg-white py-8">
        <p className="mx-auto max-w-6xl px-4 text-xs leading-relaxed text-body sm:px-6 lg:px-8">
          Owner Lucas Murphy is a licensed Wisconsin real estate agent.
        </p>
      </aside>
    </>
  );
}
