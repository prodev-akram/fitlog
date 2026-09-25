"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo.jsx";
import { usePlan } from "@/context/PlanContext.jsx";
import { MenuIcon, XIcon } from "./icons.jsx";

const NAV_LINKS = [
  { label: "Workout", href: "/" },
  { label: "My Plan", href: "/my-plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { planIds, savedIds } = usePlan();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-border bg-base-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring rounded-lg" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "bg-accent text-base-bg"
                      : "text-ink-400 hover:text-ink-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="focus-ring flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-base-bg"
          >
            Plan
            <span className="grid h-5 w-5 place-items-center rounded-full bg-base-bg text-[11px] text-accent">
              {planIds.length}
            </span>
          </Link>
          <Link
            href="/my-plan"
            className="focus-ring flex items-center gap-1.5 rounded-full border border-base-border px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink-100"
          >
            Saved
            <span className="grid h-5 w-5 place-items-center rounded-full bg-base-raised text-[11px] text-ink-100">
              {savedIds.length}
            </span>
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="focus-ring grid h-9 w-9 place-items-center rounded-lg text-ink-100 md:hidden"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-base-border bg-base-bg px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`focus-ring block rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide ${
                    isActive ? "bg-accent text-base-bg" : "text-ink-400"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
