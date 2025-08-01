"use client";

import { useState } from "react";
import { SectionId } from "@/app/lib/navigation";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  className?: string;
  activeSection: SectionId;
}

// Floating Action Button (FAB) approach
export default function MobileMenu({ activeSection }: MobileMenuProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Floating round button - bottom right */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={showMobileMenu}
        aria-controls="mobile-menu"
        className="fixed bottom-6 right-6 w-12 h-12 bg-background rounded-full shadow-lg z-50 flex items-center justify-center lg:hidden"
      >
        <img src="/image/logo_black.svg" alt="Menu" className="w-8 h-8" />
      </button>

      {/* Slide-up menu from bottom */}
      {showMobileMenu && (
        <div className="fixed bottom-0 left-0 w-full h-dvh bg-background z-40 lg:hidden text-5xl space-y-2">
          {/* Vertical navigation list */}
          <nav className="flex flex-col h-full items-center justify-end bg-amber-400">
            <NavLinks
              activeSection={activeSection}
              variant="mobile"
              className="h-full flex flex-col items-center justify-center font-sofia bg-red-400"
            />
          </nav>
        </div>
      )}
    </>
  );
}
