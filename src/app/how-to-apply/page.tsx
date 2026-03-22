import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "Step-by-step guide to renting at 3463 N 98th Street, Milwaukee. Submit an inquiry, schedule a showing, and apply.",
};

const steps = [
  {
    number: 1,
    title: "Read the Lease",
    description: "Review the full lease terms so there are no surprises. We believe in transparency.",
    link: { label: "Preview the lease", href: "/lease" },
  },
  {
    number: 2,
    title: "Review the Property",
    description: "Check the property details, photos, and neighborhood to confirm it's a good fit for you.",
    link: { label: "View available units", href: "/available" },
  },
  {
    number: 3,
    title: "Submit an Inquiry",
    description: "Fill out the form below to express interest. We'll respond within 24 hours.",
  },
  {
    number: 4,
    title: "Schedule a Showing",
    description: "Lucas will coordinate a time for you to tour the unit in person.",
  },
  {
    number: 5,
    title: "Submit Application & Screening Fee",
    description: "Complete the rental application with background and credit check authorization.",
  },
  {
    number: 6,
    title: "Receive Approval Decision",
    description: "We'll review your application and let you know the outcome promptly.",
  },
  {
    number: 7,
    title: "Sign Lease & Pay Deposits",
    description: "Sign the lease agreement and pay first month's rent plus security deposit.",
  },
  {
    number: 8,
    title: "Move In",
    description: "Get your keys, complete the move-in checklist, and welcome home.",
  },
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHeader
        title="How to Apply"
        subtitle="A straightforward, transparent process from inquiry to move-in. We respond to all inquiries within 24 hours."
      />

      {/* Steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                )}
                {/* Number circle */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-bold relative z-10">
                  {step.number}
                </div>
                {/* Content */}
                <div className="pt-1.5">
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{step.description}</p>
                  {step.link && (
                    <Link
                      href={step.link.href}
                      className="inline-block mt-2 text-sm font-medium text-navy hover:text-amber transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                    >
                      {step.link.label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification standards */}
      <section className="py-16 lg:py-20 bg-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2">
            Qualification Standards
          </h2>
          <p className="text-body mb-6">
            We believe in a structured, fair selection process. Your application will be denied if you do not meet the following standards.
          </p>
          <div className="rounded-2xl border border-border/50 bg-white p-6 sm:p-8">
            <ul className="space-y-4">
              {[
                "Applicant must have current photo identification and a valid social security number.",
                "Applicant\u2019s monthly household income must exceed three times the rent. All income must be from a verifiable source. Unverifiable income will not be considered.",
                "Applicants must receive positive references from all previous landlords for the previous 5 years.",
                "Applicant may not have any evictions or unpaid judgments from previous landlords.",
                "Applicant must exhibit a responsible financial life. Credit score must be a minimum of 600.",
                "A background check will be conducted on all applicants over 18. Applicant\u2019s background must exhibit a pattern of responsibility.",
                "Applicant must be a non-smoker.",
                "Occupancy is limited to 2 people per bedroom.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-muted-text mt-4">
            These standards are applied equally to all applicants in compliance with Fair Housing laws.
          </p>
        </div>
      </section>

      {/* Pet policy notice */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-xl bg-white border border-border/50 p-4">
            <PawPrint className="h-5 w-5 text-amber shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-heading mb-1">Pet Policy</p>
              <p className="text-sm text-body">
                Please review our{" "}
                <Link href="/tenants/pet-policy" className="text-navy font-medium hover:text-amber transition-colors duration-200">
                  pet policy
                </Link>{" "}
                before applying if you have pets. This helps ensure a smooth process for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2">
            Submit an Inquiry
          </h2>
          <p className="text-body mb-8">
            Interested in renting? Fill out the form below and Lucas will get back to you within 24 hours.
          </p>
          <div className="rounded-2xl border border-border/50 bg-section/30 p-6 sm:p-8">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
