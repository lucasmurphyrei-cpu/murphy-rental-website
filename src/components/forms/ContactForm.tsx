"use client";

import { FormspreeForm } from "./FormspreeForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FORMSPREE } from "@/lib/constants";

export function ContactForm() {
  return (
    <FormspreeForm
      formId={FORMSPREE.contact}
      submitLabel="Send Message"
      successMessage="Message sent! We'll get back to you within 24 hours."
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input id="contact-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input id="contact-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
        />
      </div>
    </FormspreeForm>
  );
}
