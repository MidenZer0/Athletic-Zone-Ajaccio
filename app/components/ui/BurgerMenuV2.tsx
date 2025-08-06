'use client';

import { useState, useEffect } from 'react';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import NavigationLinksV2 from './NavigationLinksV2';
import {
  sections,
  SectionId,
  navigationLinks,
  NavigationLink,
} from '@/app/lib/navigation';

// Utility function for combining classes
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

interface BurgerMenuV2Props {
  className?: ClassValue;
}

export default function BurgerMenuV2({ className = '' }: BurgerMenuV2Props) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

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

  useEffect(() => {
    setShowBurgerMenu(false);
  }, [activeSection]);

  const getContainerClasses = () => {
    return cn(
      // Layout
      'w-dvw h-[15dvh] fixed top-0 z-50',
      'flex flex-col items-center max-lg:hidden',

      // Style
      'drop-shadow-md drop-shadow-gray-600',

      // Transition
      'transition-transform duration-500 ease-in-out',

      // Transform state
      showBurgerMenu ? 'translate-y-0' : '-translate-y-[11dvh]',

      // Visibility
      activeSection === 'accueil' && 'lg:hidden'
    );
  };

  // Custom render function for burger menu links with active state borders
  const renderBurgerLink = (link: NavigationLink, index: number) => {
    const isActive = activeSection === link.href.replace('#', '');

    return (
      <div
        key={link.name}
        className={cn(
          // Layout
          'flex h-full flex-1 items-center',

          // Border & Animation
          'border-t-[4px] transition-all duration-300',

          // Conditional border color
          {
            'border-highlight': isActive,
            'border-gray-300 hover:border-gray-400': !isActive,
          }
        )}
      >
        <a
          href={link.href}
          className={cn(
            // Layout
            'flex h-full w-full items-center pl-2',

            // Animation
            'transition-all duration-300',

            // Interactive effects
            'hover:scale-105 hover:text-highlight',

            // Special link styling
            link.isSpecial && 'flex gap-1 text-highlight hover:text-highlight'
          )}
          aria-label={`Navigate to ${link.name} section`}
        >
          {link.name}
        </a>
      </div>
    );
  };

  return (
    <div className={getContainerClasses()}>
      <nav
        className={cn(
          // Layout
          'flex h-full w-full items-center justify-evenly',
          // Style
          'bg-background-burger'
        )}
      >
        <a href="#accueil" className={cn('flex items-center justify-center')}>
          <img
            src="/image/logo_black.svg"
            alt="Logo"
            className={cn('h-8 w-auto')}
          />
        </a>
        <NavigationLinksV2
          className={cn(
            // Layout
            'flex h-full w-[80%] items-center justify-evenly gap-1',
            // Style
            'font-sofia text-3xl text-primary'
          )}
          renderLink={renderBurgerLink}
        />
      </nav>
      <button
        onClick={toggleBurgerMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={showBurgerMenu}
        aria-controls="burger-navigation"
      >
        <img
          src="/image/burger_button.svg"
          alt="burger button"
          className={cn('h-10 w-50 cursor-pointer')}
        />
      </button>
    </div>
  );
}
