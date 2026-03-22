import type { Metadata } from "next";
import { Users, Volume2 } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Community Standards",
  description: "Quiet hours, neighbor courtesy, and shared space expectations for Murphy rental tenants.",
};

export default function QuietHoursPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Community Standards</h1>
      <p className="text-body mb-8">
        We want this to be a place both tenants are proud to live. These aren&rsquo;t rules for rules&rsquo; sake &mdash; they protect everyone&rsquo;s quality of life.
      </p>

      {/* Quiet hours */}
      <div className="rounded-2xl border border-border/50 p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <Volume2 className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Quiet Hours</h2>
        </div>
        <div className="rounded-xl bg-navy/5 border border-navy/10 p-5 mb-4 text-center">
          <p className="text-3xl font-bold text-navy">10:00 PM &ndash; 8:00 AM</p>
          <p className="text-sm text-muted-text mt-1">Nightly quiet hours (or per lease)</p>
        </div>
        <p className="text-sm text-body leading-relaxed">
          During quiet hours, keep noise to a level that cannot be heard from other units.
          This includes music, television, conversations, and any activities that could disturb your neighbor.
        </p>
      </div>

      {/* Expectations */}
      <div className="rounded-2xl border border-border/50 p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Neighbor Courtesy</h2>
        </div>
        <ul className="space-y-3 text-sm text-body">
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />No excessive noise at any hour</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Keep common areas clean &mdash; hallways, entryways, laundry areas (if shared)</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />No smoking inside units or within 25 feet of the building</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Guests are the tenant&rsquo;s responsibility</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Report neighbor concerns to Lucas directly &mdash; do not confront</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="rounded-xl bg-section/50 border border-border/50 p-4">
        <p className="text-sm text-body">
          Have a concern about noise or a neighbor issue? Contact Lucas directly at{" "}
          <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
            {SITE.phone}
          </a>{" "}
          or{" "}
          <a href={`mailto:${SITE.email}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
            {SITE.email}
          </a>.
          All concerns are handled discreetly.
        </p>
      </div>
    </div>
  );
}
