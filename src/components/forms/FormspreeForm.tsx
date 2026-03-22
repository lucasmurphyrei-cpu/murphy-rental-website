"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormspreeFormProps {
  formId: string;
  children: ReactNode;
  submitLabel?: string;
  successMessage?: string;
  className?: string;
}

export function FormspreeForm({
  formId,
  children,
  submitLabel = "Submit",
  successMessage = "Thank you! We\u2019ll be in touch within 24 hours.",
  className,
}: FormspreeFormProps) {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success(successMessage);
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      <div className="mt-6">
        <Button
          type="submit"
          disabled={submitting}
          className="bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-8 shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {submitLabel}
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted-text">
        Your information is used only to respond to your inquiry and is never sold or shared.
      </p>
    </form>
  );
}
