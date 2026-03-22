import Link from "next/link";
import { CheckmarkList } from "@/components/shared/CheckmarkList";
import { ArrowRight } from "lucide-react";

const heroFeatures = [
  "Rent Stability Promise \u2014 no surprise increases for good tenants",
  "Responsive, 24/7 maintenance support",
  "Licensed Wisconsin Realtor\u00AE owner",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-hero-gradient to-section">
      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(27,42,74,0.05),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-navy-light bg-navy/5 rounded-full px-4 py-1.5 tracking-wide">
                Milwaukee&rsquo;s Fairest Landlord
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1]">
              Quality Rentals.{" "}
              <span className="text-navy">Fair Prices.</span>{" "}
              <span className="text-amber">Milwaukee Roots.</span>
            </h1>

            <p className="text-lg text-body max-w-xl">
              A well-maintained duplex in a quiet Milwaukee neighborhood,
              managed by a landlord who believes in transparency, fair rents,
              and taking care of the people who live in his properties.
            </p>

            <CheckmarkList items={heroFeatures} />

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/available"
                className="inline-flex h-11 items-center justify-center bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-8 text-sm shadow-[0_4px_14px_rgba(212,168,83,0.35)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                View Available Units
              </Link>
              <Link
                href="/how-to-apply"
                className="inline-flex h-11 items-center justify-center rounded-full px-8 text-sm font-medium border border-navy/20 text-navy hover:bg-navy/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                How to Apply <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Property image (40%) */}
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(27,42,74,0.2)]">
              <img
                src="/images/hero-duplex.jpg"
                alt="Murphy duplex property at 3463 N 98th Street, Milwaukee — side profile exterior view"
                className="w-full h-[450px] object-cover"
                width={600}
                height={450}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
            </div>

            {/* Floating card overlay */}
            <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-xl p-4 shadow-[0_10px_25px_-3px_rgba(27,42,74,0.12),0_4px_6px_-4px_rgba(27,42,74,0.06)] border border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <svg className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">Rent Stability</p>
                  <p className="text-xs text-muted-text">No surprise increases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
