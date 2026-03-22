import type { Metadata } from "next";
import { CreditCard, Clock, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pay Rent",
  description: "Pay your rent online through our secure Apartments.com portal. Due on the 1st, late after the 5th.",
};

export default function PayRentPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Pay Rent</h1>
      <p className="text-body mb-8">Rent is paid online through the Apartments.com tenant portal.</p>

      {/* Payment button */}
      <div className="rounded-2xl border border-border/50 bg-section/30 p-8 mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
            <CreditCard className="h-7 w-7" />
          </div>
        </div>
        <h2 className="text-xl mb-2">Online Payment Portal</h2>
        <p className="text-sm text-body mb-6 max-w-md mx-auto">
          Click below to access the Apartments.com tenant portal where you can make one-time or recurring payments.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-8 text-sm shadow-[0_4px_14px_rgba(212,168,83,0.35)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
        >
          Pay Rent on Apartments.com
        </a>
        <p className="text-xs text-muted-text mt-3">Placeholder — actual payment portal URL to be added</p>
      </div>

      {/* Key dates */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl border border-border/50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-navy/40" />
            <h3 className="text-sm font-semibold text-heading">Due Date</h3>
          </div>
          <p className="text-2xl font-bold text-navy">1st</p>
          <p className="text-xs text-muted-text">of each month</p>
        </div>
        <div className="rounded-xl border border-border/50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-amber-dark" />
            <h3 className="text-sm font-semibold text-heading">Late After</h3>
          </div>
          <p className="text-2xl font-bold text-amber-dark">5th</p>
          <p className="text-xs text-muted-text">of each month</p>
        </div>
        <div className="rounded-xl border border-border/50 p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <h3 className="text-sm font-semibold text-heading">Late Fee</h3>
          </div>
          <p className="text-2xl font-bold text-destructive">$35</p>
          <p className="text-xs text-muted-text">if not received by the 5th</p>
        </div>
      </div>

      {/* Communication note */}
      <div className="rounded-xl bg-success/5 border border-success/10 p-4">
        <p className="text-sm text-body">
          <span className="font-semibold text-heading">Communication matters:</span>{" "}
          If you anticipate a late payment, contact Lucas before the 5th at{" "}
          <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="text-navy font-medium hover:text-amber transition-colors duration-200">
            {SITE.phone}
          </a>. Proactive communication is always appreciated.
        </p>
      </div>
    </div>
  );
}
