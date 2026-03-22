import { Shield } from "lucide-react";

export function RentStabilityBanner() {
  return (
    <section className="py-16 lg:py-20 bg-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-navy p-10 sm:p-14 overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(45,74,122,0.3),transparent_60%)]" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber/20">
              <Shield className="h-8 w-8 text-amber" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl text-white">
                The Fair Rent Promise
              </h2>
              <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                We price our units fairly from day one, and we keep rent increases reasonable
                for good tenants. You&rsquo;ll never be penalized for reporting maintenance issues &mdash;
                we actually encourage it. If you take care of the property, pay on time, and
                communicate openly, we&rsquo;ll always aim to keep your rent below what similar
                units in the area are charging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
