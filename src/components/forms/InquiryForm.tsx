"use client";

import { FormspreeForm } from "./FormspreeForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE } from "@/lib/constants";

export function InquiryForm() {
  return (
    <FormspreeForm
      formId={FORMSPREE.inquiry}
      submitLabel="Submit Inquiry"
      successMessage="Inquiry received! We respond to all inquiries within 24 hours."
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="inquiry-name">Full Name *</Label>
          <Input id="inquiry-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry-email">Email *</Label>
          <Input id="inquiry-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="inquiry-phone">Phone *</Label>
          <Input id="inquiry-phone" name="phone" type="tel" required placeholder="(414) 555-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry-address">Current Address</Label>
          <Input id="inquiry-address" name="current_address" placeholder="Your current address" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="inquiry-movein">Desired Move-In Date *</Label>
          <Input id="inquiry-movein" name="move_in_date" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry-occupants">Number of Occupants *</Label>
          <Input id="inquiry-occupants" name="occupants" type="number" min="1" required placeholder="1" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry-pets">Do you have pets?</Label>
        <select
          id="inquiry-pets"
          name="pets"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inquiry-message">Message</Label>
        <Textarea
          id="inquiry-message"
          name="message"
          rows={4}
          placeholder="Tell us about yourself — employment, why you're interested in this property, etc."
        />
      </div>
    </FormspreeForm>
  );
}
