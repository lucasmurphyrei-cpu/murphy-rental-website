"use client";

import Link from "next/link";
import { FormspreeForm } from "./FormspreeForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FORMSPREE } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

/**
 * Only five fields, and every one maps to a standard already published: move-in date against
 * availability, occupant counts against two-per-bedroom and "every adult 18+ applies". Nothing
 * else is asked — a sign-in sheet is not the place to collect anything a denial could be
 * questioned over.
 */
export function ShowingSignInForm({
  unitLabel,
  address,
  applyUrl,
  listingPath,
}: {
  unitLabel: string;
  address: string;
  applyUrl?: string | null;
  listingPath: string;
}) {
  return (
    <FormspreeForm
      formId={FORMSPREE.signIn}
      submitLabel="Sign in"
      successMessage="Signed in — thanks for coming."
      className="space-y-4"
      successContent={
        <div className="rounded-2xl border border-amber/30 bg-amber/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="h-5 w-5 text-navy" aria-hidden="true" />
            <h2 className="text-xl">Thanks for coming</h2>
          </div>
          <p className="text-body mb-6">
            You&rsquo;re signed in. Here&rsquo;s what happens next.
          </p>
          <ol className="space-y-4 mb-6">
            <li className="text-sm text-body">
              <span className="font-semibold text-heading">1. Have a proper look at everything.</span>{" "}
              All the photos, the floor plan and the full screening standards are on the
              listing page.{" "}
              <Link
                href={listingPath}
                className="font-medium text-navy underline underline-offset-2 hover:text-amber"
              >
                Open the listing
              </Link>
            </li>
            <li className="text-sm text-body">
              <span className="font-semibold text-heading">2. Check the standards before you apply.</span>{" "}
              They&rsquo;re published in full, applied the same way to everyone, and reading
              them first saves you an application fee if it isn&rsquo;t a fit.
            </li>
            <li className="text-sm text-body">
              <span className="font-semibold text-heading">3. Apply when you&rsquo;re ready.</span>{" "}
              Applications, the background check and the credit report all run through
              Apartments.com. Every adult 18 or older applies separately. The credit check is a
              soft pull and won&rsquo;t affect your score.
            </li>
          </ol>
          {applyUrl ? (
            <a
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-amber px-8 text-sm font-semibold text-navy shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-dark active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber motion-reduce:transition-none"
            >
              Apply on Apartments.com &#x2197;
            </a>
          ) : (
            <Link
              href="/how-to-apply"
              className="inline-flex h-11 items-center justify-center rounded-full bg-amber px-8 text-sm font-semibold text-navy shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-dark active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber motion-reduce:transition-none"
            >
              How to apply
            </Link>
          )}
          <p className="mt-5 text-xs text-muted-text">
            Questions are free and they save you an application fee &mdash; just ask.
          </p>
        </div>
      }
    >
      <p className="text-sm text-body mb-2">
        {unitLabel} &middot; {address}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="signin-name">Name *</Label>
          <Input id="signin-name" name="name" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signin-email">Email *</Label>
          <Input id="signin-email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="signin-phone">Phone *</Label>
          <Input id="signin-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(414) 555-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signin-movein">Target move-in date *</Label>
          <Input id="signin-movein" name="move_in_date" type="date" required />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="signin-people">How many people would live here? *</Label>
          <Input id="signin-people" name="occupants" type="number" min={1} required placeholder="2" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="signin-adults">How many are 18 or older? *</Label>
          <Input id="signin-adults" name="adults_18_plus" type="number" min={1} required placeholder="2" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="signin-source">How did you hear about the unit?</Label>
        <select
          id="signin-source"
          name="heard_from"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Prefer not to say</option>
          <option value="zillow">Zillow / Trulia / HotPads</option>
          <option value="apartments">Apartments.com</option>
          <option value="facebook">Facebook</option>
          <option value="craigslist">Craigslist</option>
          <option value="sign">Yard sign / drove past</option>
          <option value="referral">Someone told me</option>
          <option value="other">Other</option>
        </select>
      </div>
      <input type="hidden" name="_subject" value={`Showing sign-in — ${unitLabel}, ${address}`} />
    </FormspreeForm>
  );
}
