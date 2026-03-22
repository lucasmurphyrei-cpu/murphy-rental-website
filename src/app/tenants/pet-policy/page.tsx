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

        <div className="rounded-xl bg-amber/5 border border-amber/15 p-5 mb-6">
          <p className="text-sm text-body leading-relaxed">
            <span className="font-semibold text-heading">[Placeholder]</span> — This section will be customized based on the actual lease terms.
            The policy will clearly state whether pets are permitted, and if so, under what conditions.
          </p>
        </div>

        <div className="space-y-4 text-sm text-body">
          <div>
            <h3 className="font-semibold text-heading mb-2">If pets are permitted, conditions typically include:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Non-refundable pet deposit (amount TBD)</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Approved species and size limits</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Current vaccination records required</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Tenant is fully liable for any pet-related damage</li>
              <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Written pet addendum required prior to move-in</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-heading mb-2">If pets are not permitted:</h3>
            <p className="leading-relaxed">
              We understand this limits some applicants and appreciate your understanding.
              This policy exists to protect the property and ensure all tenants have a comfortable living environment.
              Service animals and emotional support animals with proper documentation are always accommodated per federal law.
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
