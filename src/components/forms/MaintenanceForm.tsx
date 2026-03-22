"use client";

import { FormspreeForm } from "./FormspreeForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE } from "@/lib/constants";

export function MaintenanceForm() {
  return (
    <FormspreeForm
      formId={FORMSPREE.maintenance}
      submitLabel="Submit Request"
      successMessage="Maintenance request received! Lucas will follow up within 24 hours for non-emergency issues."
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="maint-name">Full Name *</Label>
          <Input id="maint-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="maint-unit">Unit *</Label>
          <select
            id="maint-unit"
            name="unit"
            required
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select unit</option>
            <option value="Unit A (Upper)">Unit A (Upper)</option>
            <option value="Unit B (Lower)">Unit B (Lower)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="maint-category">Issue Category *</Label>
          <select
            id="maint-category"
            name="category"
            required
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select category</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="HVAC/Heat">HVAC / Heat</option>
            <option value="Appliance">Appliance</option>
            <option value="Exterior/Roof">Exterior / Roof</option>
            <option value="Pest">Pest</option>
            <option value="Snow/Ice">Snow / Ice</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="maint-urgency">Urgency *</Label>
          <select
            id="maint-urgency"
            name="urgency"
            required
            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select urgency</option>
            <option value="Emergency">Emergency — immediate safety risk</option>
            <option value="Urgent">Urgent — needs attention within 24-48 hours</option>
            <option value="Routine">Routine — can be scheduled</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="maint-description">Description of Issue *</Label>
        <Textarea
          id="maint-description"
          name="description"
          required
          rows={4}
          placeholder="Please describe the issue in detail — what's happening, where exactly, and any relevant context."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="maint-duration">How long has this been occurring?</Label>
          <Input id="maint-duration" name="duration" placeholder="e.g., 2 days, since last week" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="maint-contact-time">Best time to contact</Label>
          <Input id="maint-contact-time" name="contact_time" placeholder="e.g., weekday mornings" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="maint-entry">Permission to enter if you&rsquo;re not home? *</Label>
        <select
          id="maint-entry"
          name="entry_permission"
          required
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select</option>
          <option value="Yes">Yes, you may enter</option>
          <option value="Yes with notice">Yes, with advance notice</option>
          <option value="No">No, I need to be present</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="maint-photo">Photo (optional)</Label>
        <Input id="maint-photo" name="photo" type="file" accept="image/*" className="cursor-pointer" />
        <p className="text-xs text-muted-text">Upload a photo of the issue if possible. Max 10MB.</p>
      </div>
    </FormspreeForm>
  );
}
