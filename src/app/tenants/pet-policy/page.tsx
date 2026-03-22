import type { Metadata } from "next";
import Link from "next/link";
import { PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "Pet Policy",
  description: "Pet policy for Murphy rental properties in Milwaukee, WI. Review before applying.",
};

export default function PetPolicyPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Pet Policy</h1>
      <p className="text-body mb-8">Please review this policy carefully before applying or bringing a pet into your unit.</p>

      <div className="rounded-2xl border border-border/50 p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10 text-amber-dark">
            <PawPrint className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Current Policy</h2>
            <p className="text-sm text-muted-text">Subject to lease terms</p>
          </div>
        </div>

        <div className="rounded-xl bg-success/5 border border-success/10 p-5 mb-6">
          <p className="text-sm text-body leading-relaxed">
            <span className="font-semibold text-heading">Cats are welcome</span> — up to 2 cats per unit. Dogs are not permitted.
          </p>
        </div>

        <div className="space-y-4 text-sm text-body">
          <div>
            <h3 className="font-semibold text-heading mb-2">Conditions</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Cats only — maximum of 2 per unit</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />No dogs permitted</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Current vaccination records required</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Tenant is fully liable for any pet-related damage</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Written pet addendum required prior to move-in</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-heading mb-2">Service & Support Animals</h3>
            <p className="leading-relaxed">
              Service animals and emotional support animals with proper documentation are always accommodated per federal law, regardless of the pet policy above.
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-body">
        The full lease agreement controls all pet-related terms.{" "}
        <Link href="/lease" className="text-navy font-medium hover:text-amber transition-colors duration-200">
          Review the lease &rarr;
        </Link>
      </p>
    </div>
  );
}
