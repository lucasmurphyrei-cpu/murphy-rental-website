import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { UnitCard } from "@/components/cards/UnitCard";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { BuyHomeCTA } from "@/components/sections/BuyHomeCTA";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Available Units",
  description:
    "View available rental units at 3463 N 98th Street, Milwaukee, WI. Well-maintained duplex with rent stability promise.",
};

const units = [
  {
    name: "Unit A — Upper",
    status: "occupied" as const,
    rent: "$1,100",
    bedrooms: 2,
    bathrooms: 1,
    sqft: "~900 (approx.)",
    imageUrl: "/images/unit-a-kitchen.jpg",
    features: [
      "Updated kitchen with stainless steel appliances (no dishwasher)",
      "Luxury vinyl plank flooring throughout",
      "1 garage spot + 1 off-street parking spot included",
      "Private storage room in basement",
      "Washer/dryer hookups (on site)",
      "Smart thermostat (save on energy bills)",
      "Pets: cats only (up to 2), no dogs",
    ],
  },
  {
    name: "Unit B — Lower",
    status: "occupied" as const,
    rent: "$1,500",
    bedrooms: 3,
    bathrooms: 1,
    sqft: "962",
    imageUrl: "/images/unit-b-floorplan.png",
    features: [
      "Updated kitchen with dishwasher & stainless steel appliances",
      "Luxury vinyl plank flooring throughout",
      "1 garage spot + 1 off-street parking spot included",
      "Private storage room in basement",
      "Washer/dryer hookups (on site)",
      "Smart thermostat (save on energy bills)",
      "Smart lock + Ring camera",
      "Pets: cats only (up to 2), no dogs",
    ],
  },
];

export default function AvailableUnitsPage() {
  return (
    <>
      <PageHeader
        title="Available Units"
        subtitle="Quality living at 3463 N 98th Street, Milwaukee, WI 53222. A well-maintained duplex in a quiet neighborhood."
        badge="3463 N 98th St, Milwaukee"
      />

      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Rent stability callout */}
          <div className="flex items-center gap-3 rounded-xl bg-success/5 border border-success/10 p-4 mb-10">
            <Shield className="h-5 w-5 text-success shrink-0" />
            <p className="text-sm text-body">
              <span className="font-semibold text-heading">Fair Rent Promise:</span>{" "}
              We price our units fairly and keep increases reasonable. Good tenants who take care of the property will always pay below what similar units in the area are charging.
            </p>
          </div>

          {/* Unit cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {units.map((unit) => (
              <UnitCard key={unit.name} {...unit} />
            ))}
          </div>

          {/* Links */}
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a
              href="/lease"
              className="text-navy font-medium hover:text-amber transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Preview the lease &rarr;
            </a>
            <a
              href="/how-to-apply"
              className="text-navy font-medium hover:text-amber transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              How to apply &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps placeholder */}
      <section className="py-12 bg-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl mb-6">Location</h2>
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5!2d-88.0278!3d43.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880512e0d1f1f1f1%3A0x0!2s3463+N+98th+St%2C+Milwaukee%2C+WI+53222!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="3463 N 98th Street, Milwaukee, WI 53222"
            />
          </div>
        </div>
      </section>

      {/* Waitlist form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-2">
            Join the Waitlist
          </h2>
          <p className="text-body mb-8">
            No unit available right now? Get notified when one opens up. No commitment — just a heads up.
          </p>
          <div className="rounded-2xl border border-border/50 bg-section/30 p-6 sm:p-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <BuyHomeCTA />
    </>
  );
}
