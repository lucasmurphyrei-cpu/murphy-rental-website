import type { Metadata } from "next";
import { Car, Trash2, AlertCircle } from "lucide-react";

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
            <p className="text-sm text-body">[Parking assignment placeholder]</p>
          </div>
          <div className="rounded-lg bg-section/50 p-4">
            <p className="text-sm font-semibold text-heading mb-1">Unit B (Lower)</p>
            <p className="text-sm text-body">[Parking assignment placeholder]</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm text-body">
          <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Guest parking: street only, do not block driveway or neighbor access</li>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="rounded-lg bg-section/50 p-4">
            <p className="text-sm font-semibold text-heading mb-1">Trash Pickup</p>
            <p className="text-sm text-body">[Day placeholder — per Milwaukee DPW zone]</p>
          </div>
          <div className="rounded-lg bg-section/50 p-4">
            <p className="text-sm font-semibold text-heading mb-1">Recycling Pickup</p>
            <p className="text-sm text-body">[Day placeholder — typically same as trash]</p>
          </div>
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
