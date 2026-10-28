import Link from "next/link";

// Scoped to /available/[slug]. Still a real 404, so a dead listing drops out of search.
// It deliberately knows nothing about which slug was asked for: the request may be a
// unit that has since rented or a mistyped URL, and the wording has to be true for both.
export default function UnitNotListed() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em]">
          That unit isn&apos;t listed right now
        </h1>
        <p className="mt-4 text-body leading-relaxed">
          It may have been rented. See what&apos;s available now, or read how applying works so
          you&apos;re ready when the next unit opens.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/available"
            className="inline-flex h-11 items-center justify-center rounded-full bg-amber px-8 text-sm font-semibold text-navy shadow-[0_4px_14px_rgba(212,168,83,0.35)] transition-transform duration-200 hover:scale-[1.02] hover:bg-amber-dark active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber motion-reduce:transition-none"
          >
            See available units
          </Link>
          <Link
            href="/how-to-apply"
            className="inline-flex h-11 items-center justify-center rounded-full border border-navy/20 px-8 text-sm font-medium text-navy transition-transform duration-200 hover:scale-[1.02] hover:bg-navy/5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy motion-reduce:transition-none"
          >
            How to apply
          </Link>
        </div>
      </div>
    </section>
  );
}
