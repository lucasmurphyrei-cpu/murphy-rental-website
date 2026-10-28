import type { ReactNode } from "react";
import { getScreeningStandards } from "@/lib/units";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PawPrint } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Apply",
  description:
    "How to apply for 3463 N 98th Street, Milwaukee: read the qualification standards, apply through Apartments.com, and what the $29 fee covers.",
};

const APPLY_ADDRESS = "3463 N 98TH ST, MILWAUKEE, WI 53222";

const steps: {
  number: number;
  title: string;
  body: ReactNode;
  link?: { label: string; href: string };
}[] = [
  {
    number: 1,
    title: "Read the qualification standards",
    body: (
      <p>
        Every applicant is measured against the same published standards, listed below. Read them
        first so you know whether the unit is a fit before you pay anything.
      </p>
    ),
    link: { label: "Jump to the standards", href: "#qualification-standards" },
  },
  {
    number: 2,
    title: "Create an Apartments.com account and apply",
    body: (
      <p>
        Applications run through Apartments.com. Create an account there and apply for{" "}
        <span className="font-semibold text-heading">{APPLY_ADDRESS}</span>. Every adult 18 or older
        applies separately.
      </p>
    ),
  },
  {
    number: 3,
    title: "Pay the $29 application fee",
    body: (
      <>
        <p>
          The <span className="font-semibold text-heading">$29</span> covers the application, the
          background check and the credit report.
        </p>
        <p className="mt-2">
          The credit check is a soft inquiry. It will not lower your credit score. You receive your
          own copies of the reports for 30 days.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: "Or supply your own credit report",
    body: (
      <p>
        If you already have a credit report that is less than 30 days old from a nationwide consumer
        reporting agency, you may supply that instead, and you will not be charged again for a credit
        report. This is your choice to make.
      </p>
    ),
  },
  {
    number: 5,
    title: "You will hear back either way",
    body: (
      <>
        <p>Every applicant gets a response, whether the answer is yes or no.</p>
        <p className="mt-2">
          If a consumer report (credit or background) was the reason for a denial, we tell you which
          reporting agency supplied it, that the agency did not make the decision, and how to get a
          free copy and dispute anything inaccurate.
        </p>
      </>
    ),
  },
];

export default function HowToApplyPage() {
  return (
    <>
      <PageHeader
        title="How to Apply"
        subtitle="Five steps from reading the standards to hearing back, the same ones printed in the property packet."
      />

      {/* Steps */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ol className="space-y-0">
            {steps.map((step, i) => (
              <li key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-border" aria-hidden="true" />
                )}
                {/* Number circle */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-bold relative z-10"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                {/* Content */}
                <div className="pt-1.5">
                  <h2 className="text-lg font-semibold mb-1">
                    <span className="sr-only">Step {step.number}: </span>
                    {step.title}
                  </h2>
                  <div className="text-sm text-body leading-relaxed">{step.body}</div>
                  {step.link && (
                    <a
                      href={step.link.href}
                      className="inline-block mt-2 text-sm font-medium text-navy hover:text-amber active:opacity-80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                    >
                      {step.link.label} &darr;
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-body">
            Want the full lease first?{" "}
            <Link
              href="/lease"
              className="font-medium text-navy hover:text-amber active:opacity-80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Preview the lease
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Qualification standards */}
      <section id="qualification-standards" className="py-16 lg:py-20 bg-section scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2">
            Qualification Standards
          </h2>
          <p className="text-body mb-6">
            We believe in a structured, fair selection process. Your application will be denied if you do not meet the following standards.
          </p>
          <div className="rounded-2xl border border-border/50 bg-white p-6 sm:p-8">
            <ul className="space-y-4">
              {getScreeningStandards().map((item) => (
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
            Have a question before you apply? Fill out the form below and Lucas will get back to you within 24 hours.
          </p>
          <div className="rounded-2xl border border-border/50 bg-section/30 p-6 sm:p-8">
            <InquiryForm />
          </div>
          <p className="mt-8 text-xs text-muted-text">
            Owner Lucas Murphy is a licensed Wisconsin real estate agent.
          </p>
        </div>
      </section>
    </>
  );
}
