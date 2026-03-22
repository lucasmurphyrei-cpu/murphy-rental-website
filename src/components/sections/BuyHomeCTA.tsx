import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BuyHomeCTA() {
  return (
    <section className="py-16 lg:py-20 bg-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber/20 bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_4px_14px_rgba(212,168,83,0.08)]">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl">
              Thinking About Buying?
            </h3>
            <p className="text-body text-sm leading-relaxed">
              When you&rsquo;re ready to stop renting and start owning, Lucas is a
              licensed Wisconsin Realtor&reg; who can help you get there.
              No pressure. Just a conversation.
            </p>
          </div>
          <Link
            href="/buy"
            className="shrink-0 inline-flex h-10 items-center justify-center bg-navy hover:bg-navy-light text-white font-semibold rounded-full px-8 text-sm shadow-[0_4px_14px_rgba(27,42,74,0.2)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
