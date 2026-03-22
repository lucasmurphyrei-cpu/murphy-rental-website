"use client";

import { FormspreeForm } from "./FormspreeForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE } from "@/lib/constants";

export function WaitlistForm() {
  return (
    <FormspreeForm
      formId={FORMSPREE.waitlist}
      submitLabel="Join Waitlist"
      successMessage="You're on the list! We'll contact you when a unit becomes available."
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="waitlist-name">Full Name *</Label>
          <Input id="waitlist-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="waitlist-email">Email *</Label>
          <Input id="waitlist-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="waitlist-phone">Phone</Label>
          <Input id="waitlist-phone" name="phone" type="tel" placeholder="(414) 555-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="waitlist-movein">Desired Move-In</Label>
          <Input id="waitlist-movein" name="move_in_date" type="date" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="waitlist-unit">Unit Size Preference</Label>
        <select
          id="waitlist-unit"
          name="unit_preference"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">No preference</option>
          <option value="upper">Upper Unit</option>
          <option value="lower">Lower Unit</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="waitlist-message">Message (optional)</Label>
        <Textarea id="waitlist-message" name="message" rows={3} placeholder="Anything else we should know?" />
      </div>
    </FormspreeForm>
  );
}
