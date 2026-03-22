import Link from "next/link";
import { SITE, PROPERTY, NAV_LINKS, TENANT_NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber text-navy font-bold text-sm">
                M
              </div>
              <span className="text-lg font-semibold text-white tracking-tight">
                {SITE.shortName}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Quality rentals with fair prices in Milwaukee.
              Fair prices from day one. Good tenants always pay below market rate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tenant Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Tenant Resources
            </h3>
            <ul className="space-y-2">
              {TENANT_NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{SITE.owner}</li>
              <li>{PROPERTY.fullAddress}</li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors duration-200 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors duration-200 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <div className="flex items-center gap-4">
              <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
              <span>{SITE.owner} | {SITE.license}</span>
            </div>
            <div className="flex items-center gap-4 text-center sm:text-right">
              <span>Equal Housing Opportunity</span>
              <span>&bull;</span>
              <span>This site is for informational purposes only and does not constitute legal advice.</span>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="/buy"
              className="text-xs text-amber/70 transition-colors duration-200 hover:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
            >
              Thinking about buying? Lucas can help. &rarr;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
