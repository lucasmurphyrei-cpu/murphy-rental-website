import type { Metadata } from "next";
import { Car, Trash2, AlertCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Parking & Trash",
  description: "Parking assignments, trash pickup schedule, and recycling info for Murphy rental tenants.",
};

export default function ParkingPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Parking & Trash</h1>
      <p className="text-body mb-8">Parking assignments and waste collection details for your unit.</p>

      {/* Parking */}
      <div className="rounded-2xl border border-border/50 p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <Car className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Parking</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="rounded-lg bg-section/50 p-4">
            <p className="text-sm font-semibold text-heading mb-1">Unit A (Upper)</p>
            <p className="text-sm text-body">1 garage spot + 1 slab spot (off-street)</p>
          </div>
          <div className="rounded-lg bg-section/50 p-4">
            <p className="text-sm font-semibold text-heading mb-1">Unit B (Lower)</p>
            <p className="text-sm text-body">1 garage spot + 1 slab spot (off-street)</p>
          </div>
        </div>
        <div className="rounded-lg bg-amber/10 border border-amber/25 p-4 mb-4">
          <p className="text-sm font-semibold text-heading mb-1">The driveway is a shared lane, not a parking spot</p>
          <p className="text-sm text-body">It is how everyone reaches the garage and the slab. Never park in it, even briefly — a car left there blocks your neighbor from getting in or out.</p>
        </div>
        <ul className="space-y-2 text-sm text-body">
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Guest parking: street only, never the driveway</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />No overnight street parking during snow emergencies</li>
        </ul>
      </div>

      {/* Snow emergency alert */}
      <div className="rounded-xl bg-navy/5 border border-navy/10 p-4 mb-8 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-navy shrink-0 mt-0.5" />
        <div className="text-sm text-body">
          <p className="font-semibold text-heading mb-1">Snow Emergency Parking</p>
          <p>
            During declared snow emergencies, no parking is allowed on designated snow emergency routes.
            Check the{" "}
            <a href="https://city.milwaukee.gov/dpw/infrastructure/operations/winterops" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">
              City of Milwaukee winter operations page
            </a>{" "}
            for current status and alternate side parking rules.
          </p>
        </div>
      </div>

      {/* Trash */}
      <div className="rounded-2xl border border-border/50 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
            <Trash2 className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-semibold">Trash & Recycling</h2>
        </div>
        <div className="rounded-lg bg-section/50 p-4 mb-4">
          <p className="text-sm font-semibold text-heading mb-1">Find your collection days</p>
          <p className="text-sm text-body">Milwaukee sets garbage and recycling days by address. Look yours up at <a href="https://city.milwaukee.gov/sanitation/GarbageRecyclingSchedules" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">city.milwaukee.gov/sanitation</a>, or use the calendars below.</p>
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-text">City Collection Calendars · 2026 – March 2027</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {[
            { label: "Garbage Cart Collection", file: "/documents/milwaukee-garbage-cart-collection-2026-2027.pdf" },
            { label: "Recycling Cart Schedule", file: "/documents/milwaukee-recycling-cart-schedule-2026-2027.pdf" },
          ].map((doc) => (
            <div key={doc.file} className="rounded-lg bg-section/50 p-4">
              <div className="flex items-start gap-2.5 mb-2">
                <FileText className="h-4 w-4 text-navy shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-heading leading-snug">{doc.label}</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">View</a>
                <span className="text-border">|</span>
                <a href={doc.file} download className="text-navy font-medium hover:text-amber transition-colors duration-200">Download PDF</a>
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-2 text-sm text-body">
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Place bins at the curb by 7:00 AM on pickup day</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Bring bins back in by end of day</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Bulk item pickup: schedule through Milwaukee 311 (414-286-2489)</li>
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />No furniture, appliances, or electronics in regular trash</li>
        </ul>
      </div>
    </div>
  );
}
