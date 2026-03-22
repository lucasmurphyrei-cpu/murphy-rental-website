"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  Wrench,
  Home,
  BookOpen,
  PawPrint,
  Car,
  Users,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TENANT_NAV_LINKS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Wrench,
  Home,
  BookOpen,
  PawPrint,
  Car,
  Users,
  HelpCircle,
};

export function TenantSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-20 space-y-1">
          <Link
            href="/tenants"
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
              pathname === "/tenants"
                ? "bg-navy text-white font-medium"
                : "text-body hover:text-navy hover:bg-section"
            )}
          >
            <Home className="h-4 w-4" />
            Tenant Hub
          </Link>
          {TENANT_NAV_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
                  isActive
                    ? "bg-navy text-white font-medium"
                    : "text-body hover:text-navy hover:bg-section"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile horizontal scroll nav */}
      <nav className="lg:hidden overflow-x-auto border-b border-border/50 bg-white -mx-4 sm:-mx-6 px-4 sm:px-6">
        <div className="flex items-center gap-1 py-2 min-w-max">
          <Link
            href="/tenants"
            className={cn(
              "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
              pathname === "/tenants"
                ? "bg-navy text-white"
                : "text-body hover:bg-section"
            )}
          >
            Hub
          </Link>
          {TENANT_NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
                  isActive
                    ? "bg-navy text-white"
                    : "text-body hover:bg-section"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
