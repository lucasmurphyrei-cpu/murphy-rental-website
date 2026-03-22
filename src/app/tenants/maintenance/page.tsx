import type { Metadata } from "next";
import { EmergencyBanner } from "@/components/shared/EmergencyBanner";
import { MaintenanceForm } from "@/components/forms/MaintenanceForm";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance Requests",
  description: "Submit a maintenance request for your Murphy rental unit. Emergency and routine repair support.",
};

export default function MaintenancePage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Maintenance Request</h1>
      <p className="text-body mb-8">Report an issue and we&rsquo;ll get it handled. Non-emergency requests receive a response within 24 hours.</p>

      <EmergencyBanner />

      <div className="rounded-2xl border border-border/50 bg-section/30 p-6 sm:p-8 mb-8">
        <MaintenanceForm />
      </div>

      {/* Rent stability reminder */}
      <div className="rounded-xl bg-success/5 border border-success/10 p-4 flex items-start gap-3">
        <Shield className="h-5 w-5 text-success shrink-0 mt-0.5" />
        <p className="text-sm text-body">
          <span className="font-semibold text-heading">Rent Stability Reminder:</span>{" "}
          Proactively reporting issues like leaks, drips, or anything unusual helps keep your rent stable. We reward good communication — not penalize it.
        </p>
      </div>
    </div>
  );
}
