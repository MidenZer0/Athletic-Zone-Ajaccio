'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';
import { sections, SectionId, NavigationLink } from '@/app/lib/navigation';
import NavigationLinksV2 from './NavigationLinksV2';

interface MobileMenuProps {
  className?: string;
}

// Floating Action Button (FAB) approach
export default function MobileMenu({
  className: _className = '',
}: MobileMenuProps) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const renderMobileLink = (link: NavigationLink, _index: number) => {
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
        <Link
          href={link.href}
          onClick={() => handleLinkClick(link)}
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
            <Image
              src={link.icon}
              alt="arrow"
              width={12}
              height={12}
              className="relative bottom-0.5 h-3 w-3"
            />
          )}
        </Link>
      </div>
    );
  };

  // Handle link clicks to manually close menu and update active section
  const handleLinkClick = (link: NavigationLink) => {
    const sectionId = link.href.replace('#', '');
    if (sections.includes(sectionId as SectionId)) {
      setActiveSection(sectionId as SectionId);
    }
    setShowMobileMenu(false);
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // More lenient detection for better section recognition
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        // Lower threshold for better detection
        threshold: [0.1, 0.3, 0.5],
        // Less restrictive margins
        rootMargin: '-10% 0px -10% 0px',
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
        className={cn(
          // Position & Size
          'fixed right-6 bottom-6 z-50 h-12 w-12',
          // Layout
          'flex items-center justify-center',
          // Style
          'cursor-pointer rounded-full bg-background shadow-lg',
          // Responsive
          'min-lg:hidden'
        )}
      >
        <Image
          src="/image/logo_black.svg"
          alt="Menu"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </button>

      {/* Slide-up menu from bottom */}
      <div
        className={cn(
          // Position & Size
          'fixed bottom-0 left-0 z-40 h-dvh w-full',

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
            // Position & Size
            'h-2/5 w-full',
            // Layout
            'flex items-center justify-center',
            // Style
            'bg-[url("/image/logo_woodV3.webp")] bg-cover bg-center'
          )}
        />

        {/* Navigation section - takes remaining space */}
        <nav
          className={cn(
            // Position & Size
            'h-3/5 w-full pt-5 pb-5',
            // Layout
            'flex flex-col justify-center'
          )}
        >
          <NavigationLinksV2
            className={cn(
              // Position & Size
              'h-full w-full',

              // Layout
              'flex flex-col text-4xl',

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
