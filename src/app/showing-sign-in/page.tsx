import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShowingSignInForm } from "@/components/forms/ShowingSignInForm";
import { getVacantUnits } from "@/lib/units";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Showing Sign-In",
  description: "Sign in for today's showing at 3463 N 98th Street, Milwaukee.",
  // A sign-in page has no business in search results; it is for the QR on the door.
  robots: { index: false, follow: false },
};

export default function ShowingSignInPage() {
  // Whichever unit is currently being shown. If nothing is vacant there is no showing.
  const unit = getVacantUnits()[0];
  if (!unit) notFound();

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="text-3xl sm:text-4xl mb-2">Welcome &mdash; please sign in</h1>
      <p className="text-body mb-8 leading-relaxed">
        Takes about thirty seconds. It is how I keep track of who came through, and it means I
        can send you the details rather than you writing them down.
      </p>

      <ShowingSignInForm
        unitLabel={unit.unit_label}
        address={`${unit.address}, ${unit.city}, ${unit.state} ${unit.zip}`}
        applyUrl={unit.apply_url}
        listingPath={`/available/${unit.slug}`}
      />

      <p className="mt-8 text-xs text-muted-text leading-relaxed">
        Owner Lucas Murphy is a licensed Wisconsin real estate agent. {SITE.license}. Equal
        Housing Opportunity. Your information is used only to respond about this unit and is
        never sold or shared.
      </p>
    </div>
  );
}
