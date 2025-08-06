'use client';

import { useState, useEffect } from 'react';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  sections,
  SectionId,
  navigationLinks,
  NavigationLink,
} from '@/app/lib/navigation';
import NavLinks from './NavLinks';
import NavigationLinksV2 from './NavigationLinksV2';

// Utility function for combining classes
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface MobileMenuProps {
  className?: string;
}

// Floating Action Button (FAB) approach
export default function MobileMenu({ className = '' }: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const renderMobileLink = (link: NavigationLink, index: number) => {
    const isActive = activeSection === link.href.replace('#', '');

    return (
      <div
        key={link.name}
        className={cn(
          // Layout
          'flex h-full w-full flex-col items-center justify-center',

          // Border & Animation
          'border-l-[6px] transition-all duration-300',

          // Conditional border color
          {
            'border-highlight': isActive,
            'border-gray-300 hover:border-gray-400 hover:bg-gray-200':
              !isActive,
          }
        )}
      >
        <a
          href={link.href}
          className={cn(
            // Layout
            'flex h-full w-full items-center justify-center',

            // Animation
            'transition-all duration-300',

            // Interactive effects
            // 'hover:scale-105 hover:text-highlight',

            // Special link styling
            link.isSpecial && 'flex gap-1 text-highlight hover:text-highlight'
          )}
          aria-label={`Navigate to ${link.name} section`}
        >
          {link.name}
          {link.icon && (
            <img
              src={link.icon}
              alt="arrow"
              className="relative bottom-0.5 h-3 w-3"
            />
          )}
        </a>
      </div>
    );
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close menu when active section changes (user scrolled)
  useEffect(() => {
    setShowMobileMenu(false);
  }, [activeSection]);

  return (
    <>
      {/* Floating round button - bottom right */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={showMobileMenu}
        aria-controls="mobile-menu"
        className="fixed right-6 bottom-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-background shadow-lg min-lg:hidden"
      >
        <img src="/image/logo_black.svg" alt="Menu" className="h-8 w-8" />
      </button>

      {/* Slide-up menu from bottom */}
      <div
        className={cn(
          // Position & Size
          'fixed bottom-0 left-0 z-40',
          'h-dvh w-full',

          // Layout
          'flex flex-col items-center justify-evenly',

          // Style
          'bg-background p-2',

          // Responsive
          'lg:hidden',

          // Animation
          'transition-all duration-600 ease-in-out',

          // Transform state
          showMobileMenu
            ? 'translate-y-0 opacity-100'
            : 'translate-y-[100%] opacity-0'
        )}
      >
        {/* Logo section - fixed at top */}
        <div
          className={cn(
            // Layout
            'flex h-2/5 w-full flex-col items-center justify-center bg-[url("/image/logo_woodV3.webp")] bg-cover bg-center'
          )}
        >
          {/* <img src="/image/logo_wood.webp" alt="logo" className={cn('')} /> */}
        </div>

        {/* Navigation section - takes remaining space */}
        <nav
          className={cn(
            // Layout
            'flex h-3/5 w-full flex-col justify-center pt-5 pb-5'
          )}
        >
          <NavigationLinksV2
            className={cn(
              // Layout
              'flex h-full w-full flex-col text-4xl',

              // Spacing
              'gap-2',

              // Style
              'font-sofia'
            )}
            renderLink={renderMobileLink}
          />
        </nav>
      </div>
    </>
  );
}
