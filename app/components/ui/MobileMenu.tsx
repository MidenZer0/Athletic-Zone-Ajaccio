'use client';

import { useState } from 'react';
import { SectionId } from '@/app/lib/navigation';
import NavLinks from './NavLinks';

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
        className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-lg lg:hidden"
      >
        <img src="/image/logo_black.svg" alt="Menu" className="h-8 w-8" />
      </button>

      {/* Slide-up menu from bottom */}
      {showMobileMenu && (
        <div className="fixed bottom-0 left-0 z-40 h-dvh w-full space-y-2 bg-background text-5xl lg:hidden">
          {/* Vertical navigation list */}
          <nav className="flex h-full flex-col items-center justify-end bg-amber-400">
            <NavLinks
              activeSection={activeSection}
              variant="mobile"
              className="flex h-full flex-col items-center justify-center bg-red-400 font-sofia"
            />
          </nav>
        </div>
      )}
    </>
  );
}
