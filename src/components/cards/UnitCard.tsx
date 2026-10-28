import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize } from "lucide-react";
import type { Photo } from "@/components/units/PhotoGallery";

interface UnitCardProps {
  slug: string;
  name: string;
  status: "vacant" | "occupied";
  /** Absent on an occupied unit: no price element is rendered at all. */
  rent?: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  /** Badge text from the data, e.g. "11/7" or "Rented". */
  badge: string;
  /** Badge label from the data, e.g. "Available". Shown for vacant units only. */
  badgeLabel: string;
  features: string[];
  image: Photo;
}

const cardBase =
  "block rounded-2xl border border-border/50 bg-white overflow-hidden shadow-[0_4px_14px_rgba(27,42,74,0.06)]";

// Vacant: the whole card is the link. The outline sits on the card itself with a
// negative offset, so neither overflow-hidden nor the full-bleed image hides it.
const cardLink =
  "transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-3px_rgba(27,42,74,0.1),0_4px_6px_-4px_rgba(27,42,74,0.05)] " +
  "active:translate-y-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none";

export function UnitCard({
  slug,
  name,
  status,
  rent,
  bedrooms,
  bathrooms,
  sqft,
  badge,
  badgeLabel,
  features,
  image,
}: UnitCardProps) {
  const vacant = status === "vacant";

  const body = (
    <>
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
        <span
          className={`absolute top-4 left-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
            vacant
              ? "border-success/20 bg-white text-success"
              : "border-border bg-white text-body"
          }`}
        >
          {vacant ? `${badgeLabel} ${badge}` : badge}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          {vacant && rent && (
            <div className="text-right">
              <p className="text-2xl font-bold text-navy">{rent}</p>
              <p className="text-xs text-muted-text">/month</p>
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 text-sm text-body">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-navy/40" aria-hidden="true" />
            <span>{bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-navy/40" aria-hidden="true" />
            <span>{bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-navy/40" aria-hidden="true" />
            <span>{sqft} sq ft</span>
          </div>
        </div>

        {vacant && (
          <ul className="space-y-1.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-body">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  if (!vacant) return <div className={cardBase}>{body}</div>;

  return (
    <Link href={`/available/${slug}`} className={`${cardBase} ${cardLink}`}>
      {body}
    </Link>
  );
}
