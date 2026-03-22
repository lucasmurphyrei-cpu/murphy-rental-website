import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { FileText, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Lease Preview",
  description:
    "Review key lease terms for Murphy rental properties in Milwaukee, WI. Transparent, plain-language summary of tenant responsibilities.",
};

const leaseTerms = [
  {
    title: "Rent Amount & Due Date",
    content: "Rent is due on the 1st of each month. The exact amount is specified in your signed lease agreement.",
  },
  {
    title: "Late Fee",
    content: "A $35 late fee applies if rent is not received by the 5th of the month. If you anticipate a late payment, contact Lucas before the 5th — communication matters.",
  },
  {
    title: "Notice to Vacate",
    content: "28 days written notice is required before the end of your lease term if you intend to move out.",
  },
  {
    title: "Security Deposit",
    content: "A security deposit equal to one month's rent is required at move-in. The deposit is returned within 21 days of move-out, minus any deductions for damages beyond normal wear and tear, per Wisconsin law (ATCP 134).",
  },
  {
    title: "Maintenance Requests",
    content: "Submit maintenance requests through the online form on the Tenant Hub. Emergency issues should be reported by phone immediately. Proactively reporting issues helps keep your rent stable.",
  },
  {
    title: "Tenant Responsibilities",
    content: "Tenants are responsible for keeping the unit clean and in good condition, reporting maintenance issues promptly, following trash and recycling schedules, and adhering to community standards.",
  },
  {
    title: "Pet Policy",
    content: "See the full pet policy for details on whether pets are permitted, any applicable deposits, and conditions.",
    link: { label: "View pet policy", href: "/tenants/pet-policy" },
  },
  {
    title: "Sublease Policy",
    content: "Subleasing is not permitted without prior written consent from the landlord.",
  },
];

export default function LeasePage() {
  return (
    <>
      <PageHeader
        title="Lease Preview"
        subtitle="A plain-language summary of key lease terms. We believe you should understand every part of your agreement before signing."
      />

      {/* PDF download */}
      <section className="py-10 bg-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 rounded-2xl bg-white border border-border/50 p-6 shadow-[0_4px_14px_rgba(27,42,74,0.04)]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-heading">Full Lease Document</h3>
              <p className="text-sm text-muted-text">Download or view the complete lease agreement (PDF)</p>
            </div>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-full bg-navy text-white font-medium text-sm px-6 hover:bg-navy-light transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Key terms */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">
            Key Terms Summary
          </h2>
          <div className="space-y-6">
            {leaseTerms.map((term) => (
              <div
                key={term.title}
                className="rounded-xl border border-border/50 p-6 transition-colors duration-200 hover:border-navy/10"
              >
                <h3 className="text-base font-semibold text-heading mb-2">{term.title}</h3>
                <p className="text-sm text-body leading-relaxed">{term.content}</p>
                {term.link && (
                  <Link
                    href={term.link.href}
                    className="inline-block mt-2 text-sm font-medium text-navy hover:text-amber transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    {term.link.label} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Wisconsin tenant rights */}
          <div className="mt-10">
            <h2 className="text-2xl sm:text-3xl mb-4">
              Know Your Rights
            </h2>
            <p className="text-sm text-body mb-4 leading-relaxed">
              We believe in full transparency. These are the Wisconsin laws that govern your tenancy &mdash; we want you to have access to them directly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/documents/atcp-134-residential-rental-practices.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/50 p-4 hover:border-navy/10 hover:shadow-[0_4px_14px_rgba(27,42,74,0.04)] transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">ATCP 134 — Residential Rental Practices</p>
                  <p className="text-xs text-muted-text">Wisconsin administrative code governing landlord-tenant practices</p>
                </div>
              </a>
              <a
                href="/documents/wisconsin-landlord-tenant-laws.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/50 p-4 hover:border-navy/10 hover:shadow-[0_4px_14px_rgba(27,42,74,0.04)] transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">Wisconsin Landlord-Tenant Laws</p>
                  <p className="text-xs text-muted-text">Updated 2023–2024 state statutes</p>
                </div>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 flex items-start gap-3 rounded-xl bg-amber/5 border border-amber/15 p-4">
            <AlertTriangle className="h-5 w-5 text-amber-dark shrink-0 mt-0.5" />
            <p className="text-sm text-body leading-relaxed">
              <span className="font-semibold text-heading">Important:</span>{" "}
              This summary is for reference only. The full signed lease governs your tenancy.
              This is not legal advice. Consult an attorney if you have legal questions about your lease terms.
            </p>
          </div>

          {/* Next steps */}
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <Link
              href="/how-to-apply"
              className="inline-flex h-10 items-center justify-center bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-8 shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Ready to Apply
            </Link>
            <Link
              href="/available"
              className="text-navy font-medium hover:text-amber transition-colors duration-200 flex items-center h-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              View available units &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
