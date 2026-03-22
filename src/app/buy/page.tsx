import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { BuyerConsultForm } from "@/components/forms/BuyerConsultForm";
import { CheckmarkList } from "@/components/shared/CheckmarkList";
import { SITE } from "@/lib/constants";
import { ArrowRight, ExternalLink, Home, DollarSign, Search, FileCheck, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Buy a Home",
  description:
    "Ready to stop renting? Lucas Murphy is a licensed Wisconsin Realtor\u00AE helping tenants become homeowners in Milwaukee and Waukesha Counties.",
};

const whyLucas = [
  "Already knows your situation, timeline, and financial goals",
  "Can coordinate your lease transition if timing aligns",
  "No pressure \u2014 education and planning first",
  "Experienced with first-time buyers and small multi-family",
];

const buyingSteps = [
  { icon: DollarSign, title: "Get Pre-Approved", description: "Connect with a lender to understand your budget and lock in your rate." },
  { icon: Search, title: "Search for Homes", description: "Lucas helps you find the right home based on your needs, budget, and timeline." },
  { icon: FileCheck, title: "Make an Offer", description: "Submit a competitive offer with guidance on pricing, contingencies, and negotiation." },
  { icon: Home, title: "Inspection & Due Diligence", description: "Professional inspection, appraisal, and review of all disclosures." },
  { icon: Key, title: "Close & Move In", description: "Sign closing documents, get your keys, and welcome to homeownership." },
];

export default function BuyPage() {
  return (
    <>
      <PageHeader
        title="Your Next Step: From Renter to Homeowner"
        subtitle="When you\u2019re ready, Lucas is ready to help."
        badge="Licensed Wisconsin Realtor\u00AE"
      />

      {/* Why work with Lucas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl mb-4">
                Why Work With Your Landlord as Your Buyer&rsquo;s Agent?
              </h2>
              <p className="text-body mb-6 leading-relaxed">
                Lucas Murphy is a licensed Wisconsin Realtor&reg; serving Milwaukee and Waukesha Counties.
                As your landlord, he already understands your living situation and can help you transition
                from renting to owning on your terms.
              </p>
              <CheckmarkList items={whyLucas} />
              <div className="mt-6">
                <a
                  href="https://www.lucasmurphyrealestate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-amber transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Visit LucasMurphyRealEstate.com <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-section/50 border border-border/50 p-8">
              <div className="text-center mb-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 text-navy mb-4">
                  <Home className="h-8 w-8" />
                </div>
                <p className="text-lg font-semibold text-heading">Tenant-to-Buyer Success</p>
                <p className="text-sm text-body mt-2 leading-relaxed">
                  &ldquo;Many great tenants become great homeowners. The skills are the same &mdash;
                  pay on time, take care of the property, communicate early.
                  If that&rsquo;s you, you&rsquo;re already ahead.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buying process */}
      <section className="py-16 lg:py-20 bg-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2 text-center">
            What to Expect
          </h2>
          <p className="text-body text-center mb-10">A brief overview of the home buying process.</p>

          <div className="space-y-0">
            {buyingSteps.map((step, i) => (
              <div key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
                {i < buyingSteps.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-px bg-border" />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white relative z-10">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="pt-1.5">
                  <h3 className="text-base font-semibold text-heading mb-1">{step.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First-time buyer programs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2">
            Milwaukee First-Time Buyer Programs
          </h2>
          <p className="text-body mb-8">Financial assistance programs that may help with your purchase.</p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border/50 p-5 hover:border-navy/10 transition-colors duration-200">
              <h3 className="text-base font-semibold text-heading mb-1">WHEDA (Wisconsin Housing and Economic Development Authority)</h3>
              <p className="text-sm text-body leading-relaxed mb-2">
                Offers affordable mortgage loans, down payment assistance, and tax credits for first-time buyers in Wisconsin.
              </p>
              <a href="https://www.wheda.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-amber transition-colors duration-200">
                wheda.com <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="rounded-xl border border-border/50 p-5 hover:border-navy/10 transition-colors duration-200">
              <h3 className="text-base font-semibold text-heading mb-1">City of Milwaukee HOME Down Payment Assistance</h3>
              <p className="text-sm text-body leading-relaxed mb-2">
                Provides forgivable loans for down payment and closing costs to income-eligible first-time buyers purchasing in Milwaukee.
              </p>
              <a href="https://city.milwaukee.gov/DCD/NIDC/homebuyer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-amber transition-colors duration-200">
                City of Milwaukee homebuyer page <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="rounded-xl border border-border/50 p-5 hover:border-navy/10 transition-colors duration-200">
              <h3 className="text-base font-semibold text-heading mb-1">Milwaukee County First-Time Buyer Resources</h3>
              <p className="text-sm text-body leading-relaxed mb-2">
                County-level programs for homebuyer education, financial counseling, and assistance.
              </p>
              <a href="https://county.milwaukee.gov" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-amber transition-colors duration-200">
                Milwaukee County resources <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://www.lucasmurphyrealestate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-amber transition-colors duration-200"
            >
              Learn more at LucasMurphyRealEstate.com <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section className="py-16 lg:py-20 bg-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2">
            Schedule a Free Buyer Consultation
          </h2>
          <p className="text-body mb-8">
            No pressure, no commitment. Just a conversation about your goals and timeline.
            You can also reach Lucas directly at{" "}
            <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
              {SITE.phone}
            </a>{" "}
            or{" "}
            <a href={`mailto:${SITE.email}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
              {SITE.email}
            </a>.
          </p>
          <div className="rounded-2xl border border-border/50 bg-white p-6 sm:p-8">
            <BuyerConsultForm />
          </div>
        </div>
      </section>
    </>
  );
}
