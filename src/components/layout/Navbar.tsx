"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white font-bold text-sm">
            M
          </div>
          <span className="hidden sm:block text-lg font-semibold text-heading tracking-tight">
            {SITE.shortName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-body rounded-md transition-colors duration-200 hover:text-navy hover:bg-section focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/how-to-apply"
            className="inline-flex h-9 items-center justify-center bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-6 text-sm shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button variant="ghost" size="icon" aria-label="Open menu" />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-12">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base text-body rounded-lg transition-colors duration-200 hover:text-navy hover:bg-section focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link
                  href="/how-to-apply"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-full items-center justify-center bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full text-sm shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
