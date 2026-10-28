import type { Metadata } from "next";
import Link from "next/link";
import { Trash2, Zap, Shield, Building2, FileText } from "lucide-react";
import { EMERGENCY_CONTACTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Resources & Local Info",
  description: "Local resources for Murphy rental tenants: utilities, garbage schedule, renters insurance, Milwaukee city services.",
};

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Resources & Local Info</h1>
      <p className="text-body mb-8">Everything you need for life at 3463 N 98th Street.</p>

      <div className="space-y-8">
        {/* Garbage & Recycling */}
        <div className="rounded-2xl border border-border/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Trash2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Garbage & Recycling</h2>
          </div>
          <ul className="space-y-2 text-sm text-body">
            <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Look up your collection days by address at <a href="https://city.milwaukee.gov/sanitation/GarbageRecyclingSchedules" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">city.milwaukee.gov</a></li>
            <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Carts go out the night before; bring them back in the same day</li>
            <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />Bulk item pickup: call Milwaukee 311 ({EMERGENCY_CONTACTS.city311.phone}) to schedule</li>
          </ul>

          <p className="mt-5 mb-3 text-xs font-semibold uppercase tracking-wide text-muted-text">City Collection Calendars · 2026 – March 2027</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Garbage Cart Collection", file: "/documents/milwaukee-garbage-cart-collection-2026-2027.pdf" },
              { label: "Recycling Cart Schedule", file: "/documents/milwaukee-recycling-cart-schedule-2026-2027.pdf" },
            ].map((doc) => (
              <div key={doc.file} className="rounded-lg bg-section/50 p-4">
                <div className="flex items-start gap-2.5 mb-2">
                  <FileText className="h-4 w-4 text-navy shrink-0 mt-0.5" />
                  <p className="font-semibold text-heading leading-snug">{doc.label}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">View</a>
                  <span className="text-border">|</span>
                  <a href={doc.file} download className="text-navy font-medium hover:text-amber transition-colors duration-200">Download PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Utility Setup */}
        <div className="rounded-2xl border border-border/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Utility Setup Guide</h2>
          </div>
          <div className="space-y-3 text-sm text-body">
            <div className="rounded-lg bg-section/50 p-4">
              <p className="font-semibold text-heading mb-1">We Energies (Gas + Electric)</p>
              <p>Phone: 800-242-9137</p>
              <p>Set up service at <a href="https://www.we-energies.com" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">we-energies.com</a></p>
            </div>
            <div className="rounded-lg bg-section/50 p-4">
              <p className="font-semibold text-heading mb-1">Water &amp; Sewer — no account needed</p>
              <p>We cover water, sewer, and trash/recycling. Do not open a Milwaukee Water Works account.</p>
              <p>For a leak, no water, or a water-quality concern, call Milwaukee Water Works at {EMERGENCY_CONTACTS.waterWorks.phone} and tell Lucas.</p>
            </div>
            <div className="rounded-lg bg-section/50 p-4">
              <p className="font-semibold text-heading mb-1">Internet Providers (53222)</p>
              <div className="flex items-start gap-2 mb-1">
                <span className="shrink-0 rounded-md bg-amber/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-navy">Our pick</span>
                <p>AT&T Fiber: <a href="https://www.att.com/internet/fiber/" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">att.com/internet/fiber</a> — best experience we&rsquo;ve had at this property</p>
              </div>
              <p>Spectrum: <a href="https://www.spectrum.com" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">spectrum.com</a></p>
            </div>
          </div>
        </div>

        {/* Renters Insurance */}
        <div className="rounded-2xl border border-border/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Shield className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Renters Insurance</h2>
          </div>
          <div className="text-sm text-body space-y-2">
            <p>Renters insurance covers your personal belongings, liability, and temporary living expenses if something goes wrong. It typically costs <span className="font-semibold text-heading">$10–$20/month</span>.</p>
            <p>Your lease recommends (but does not require) renters insurance. We strongly encourage it.</p>
            <p className="text-muted-text">Compare options:</p>
            <ul className="space-y-1">
              <li><a href="https://www.nerdwallet.com/article/insurance/best-renters-insurance" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">NerdWallet — Best Renters Insurance</a></li>
              <li><a href="https://www.policygenius.com/renters-insurance/" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">Policygenius — Renters Insurance</a></li>
            </ul>
          </div>
        </div>

        {/* City Resources */}
        <div className="rounded-2xl border border-border/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <Building2 className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">City of Milwaukee Resources</h2>
          </div>
          <ul className="space-y-2 text-sm text-body">
            <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" /><span><span className="font-medium text-heading">Milwaukee 311</span> — non-emergency city services: {EMERGENCY_CONTACTS.city311.phone} or <a href="https://city.milwaukee.gov/311" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">milwaukee.gov/311</a></span></li>
            <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" /><span><span className="font-medium text-heading">Snow emergency parking</span> — <a href="https://city.milwaukee.gov/dpw/infrastructure/operations/winterops" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">City winter operations page</a></span></li>
            <li className="flex items-start gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" /><span><span className="font-medium text-heading">Neighborhood Services</span> — <a href="https://city.milwaukee.gov/DNS" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:text-amber transition-colors duration-200">city.milwaukee.gov/DNS</a></span></li>
          </ul>
        </div>

        {/* Documents */}
        <div className="rounded-2xl border border-border/50 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold">Documents & Checklists</h2>
          </div>
          <p className="text-xs font-medium text-navy uppercase tracking-wider mb-2">Wisconsin Tenant Rights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <a href="/documents/atcp-134-residential-rental-practices.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-section/50 p-3 text-sm font-medium text-heading hover:bg-section transition-colors duration-200">
              <FileText className="h-4 w-4 text-navy/40" />
              ATCP 134 — Rental Practices
              <span className="text-xs text-muted-text ml-auto">PDF</span>
            </a>
            <a href="/documents/wisconsin-landlord-tenant-laws.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-section/50 p-3 text-sm font-medium text-heading hover:bg-section transition-colors duration-200">
              <FileText className="h-4 w-4 text-navy/40" />
              WI Landlord-Tenant Laws (23-24)
              <span className="text-xs text-muted-text ml-auto">PDF</span>
            </a>
          </div>
          <p className="text-xs font-medium text-navy uppercase tracking-wider mb-2">Checklists & Lease</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="/documents/residential-lease.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-section/50 p-3 text-sm font-medium text-heading hover:bg-section transition-colors duration-200">
              <FileText className="h-4 w-4 text-navy/40" />
              Lease Agreement
              <span className="text-xs text-muted-text ml-auto">PDF</span>
            </a>
            {["Move-In Checklist", "Move-Out Checklist", "Pet Addendum"].map((doc) => (
              <a key={doc} href="#" className="flex items-center gap-2 rounded-lg bg-section/50 p-3 text-sm font-medium text-heading hover:bg-section transition-colors duration-200">
                <FileText className="h-4 w-4 text-navy/40" />
                {doc}
                <span className="text-xs text-muted-text ml-auto">PDF</span>
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-text mt-3">Checklist PDFs — placeholders to be uploaded</p>
        </div>
      </div>
    </div>
  );
}
