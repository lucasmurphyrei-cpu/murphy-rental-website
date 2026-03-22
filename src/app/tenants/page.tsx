import type { Metadata } from "next";
import { TenantHubCard } from "@/components/cards/TenantHubCard";
import { EmergencyBanner } from "@/components/shared/EmergencyBanner";
import { BuyHomeCTA } from "@/components/sections/BuyHomeCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tenant Hub",
  description: "Current tenant portal for Murphy Rental Property Management. Pay rent, submit maintenance requests, access resources.",
};

const hubCards = [
  { label: "Pay Rent", href: "/tenants/pay-rent", icon: "CreditCard", description: "Make your monthly rent payment through our secure online portal." },
  { label: "Maintenance", href: "/tenants/maintenance", icon: "Wrench", description: "Submit a maintenance request with photos and track its status." },
  { label: "Property Care", href: "/tenants/property-care", icon: "Home", description: "Seasonal tips and guidelines to keep your unit in great shape." },
  { label: "Resources", href: "/tenants/resources", icon: "BookOpen", description: "Local utilities, city services, renters insurance, and move-in/out info." },
  { label: "Pet Policy", href: "/tenants/pet-policy", icon: "PawPrint", description: "Current pet policy, conditions, and documentation requirements." },
  { label: "Parking & Trash", href: "/tenants/parking", icon: "Car", description: "Parking assignments, trash pickup schedule, and recycling info." },
  { label: "Community Standards", href: "/tenants/quiet-hours", icon: "Users", description: "Quiet hours, shared space expectations, and neighbor courtesy." },
  { label: "FAQ", href: "/tenants/faq", icon: "HelpCircle", description: "Answers to common questions about rent, maintenance, and more." },
];

export default function TenantHubPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Welcome, Tenant</h1>
      <p className="text-body mb-8">
        Everything you need in one place. Questions? Reach Lucas at{" "}
        <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
          {SITE.phone}
        </a>{" "}
        or{" "}
        <a href={`mailto:${SITE.email}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
          {SITE.email}
        </a>
      </p>

      <EmergencyBanner />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {hubCards.map((card) => (
          <TenantHubCard key={card.href} {...card} />
        ))}
      </div>

      <div className="mt-12">
        <BuyHomeCTA />
      </div>
    </div>
  );
}
