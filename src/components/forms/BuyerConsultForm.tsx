"use client";

import { FormspreeForm } from "./FormspreeForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE } from "@/lib/constants";

export function BuyerConsultForm() {
  return (
    <FormspreeForm
      formId={FORMSPREE.buyer}
      submitLabel="Request Free Consultation"
      successMessage="Consultation request received! Lucas will reach out within 48 hours to schedule a conversation."
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="buyer-name">Full Name *</Label>
          <Input id="buyer-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyer-email">Email *</Label>
          <Input id="buyer-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="buyer-phone">Phone *</Label>
          <Input id="buyer-phone" name="phone" type="tel" required placeholder="(414) 555-0000" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyer-unit">Current Unit (if tenant)</Label>
          <select
            id="buyer-unit"
            name="current_unit"
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Not a current tenant</option>
            <option value="Unit A (Upper)">Unit A (Upper)</option>
            <option value="Unit B (Lower)">Unit B (Lower)</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="buyer-timeline">Estimated Timeline</Label>
          <select
            id="buyer-timeline"
            name="timeline"
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select timeline</option>
            <option value="0-3 months">0–3 months</option>
            <option value="3-6 months">3–6 months</option>
            <option value="6-12 months">6–12 months</option>
            <option value="12+ months">12+ months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="buyer-budget">Approximate Budget</Label>
          <select
            id="buyer-budget"
            name="budget"
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select range</option>
            <option value="Under $150K">Under $150K</option>
            <option value="$150K-$250K">$150K–$250K</option>
            <option value="$250K-$350K">$250K–$350K</option>
            <option value="$350K-$500K">$350K–$500K</option>
            <option value="$500K+">$500K+</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="buyer-message">Message (optional)</Label>
        <Textarea
          id="buyer-message"
          name="message"
          rows={4}
          placeholder="Tell us about your situation — what are you looking for, any questions about the buying process, etc."
        />
      </div>
    </FormspreeForm>
  );
}
