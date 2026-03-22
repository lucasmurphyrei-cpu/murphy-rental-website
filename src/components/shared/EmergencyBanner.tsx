import { AlertTriangle } from "lucide-react";
import { SITE, EMERGENCY_CONTACTS } from "@/lib/constants";

export function EmergencyBanner() {
  return (
    <div className="rounded-xl bg-destructive/5 border border-destructive/10 p-4 mb-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="text-sm font-semibold text-heading">Emergency Contacts</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs text-body">
            <p><span className="font-medium">Gas leak:</span> Leave immediately, call We Energies {EMERGENCY_CONTACTS.gasLeak.phone}</p>
            <p><span className="font-medium">Fire:</span> Call {EMERGENCY_CONTACTS.fire.phone}</p>
            <p><span className="font-medium">Burst pipe/flooding:</span> Shut main water valve, call Lucas</p>
            <p><span className="font-medium">Power outage:</span> We Energies {EMERGENCY_CONTACTS.powerOutage.phone}</p>
            <p><span className="font-medium">Urgent maintenance:</span> Call Lucas at {SITE.phone}</p>
            <p><span className="font-medium">Non-emergency:</span> Use the maintenance request form</p>
          </div>
        </div>
      </div>
    </div>
  );
}
