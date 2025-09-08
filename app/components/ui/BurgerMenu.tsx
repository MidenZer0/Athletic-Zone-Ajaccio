'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';
import NavigationLinksV2 from './NavigationLinksV2';
import { sections, SectionId, NavigationLink } from '@/app/lib/navigation';
import Link from 'next/link';

interface BurgerMenuV2Props {
  _className?: string;
}

export default function BurgerMenuV2({ _className = '' }: BurgerMenuV2Props) {
  const [activeSection, setActiveSection] = useState('accueil');
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        threshold: 0.1,
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

  useEffect(() => {
    setShowBurgerMenu(false);
  }, [activeSection]);

  const getContainerClasses = () => {
    return cn(
      // Layout
      'fixed top-0 z-50 h-[130px] w-dvw',
      'flex flex-col items-center max-lg:hidden',

      // Style
      'drop-shadow-sm drop-shadow-gray-400',

      // Transition
      'transition-transform duration-500 ease-in-out',

      // Transform state
      showBurgerMenu ? 'translate-y-0' : '-translate-y-[92px]',

      // Visibility
      activeSection === 'accueil' && 'lg:hidden'
    );
  };

  // Custom render function for burger menu links with active state borders
  const renderBurgerLink = (link: NavigationLink, _index: number) => {
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
        <Link
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
        </Link>
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
        <Link
          href="#accueil"
          className={cn('flex items-center justify-center')}
        >
          <Image
            src="/image/logo_black.svg"
            alt="Logo"
            width={32}
            height={32}
            className={cn('h-8 w-auto')}
          />
        </Link>
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
        <Image
          src="/image/burger_button.svg"
          alt="burger button"
          width={50}
          height={40}
          className={cn('h-10 w-50 cursor-pointer')}
        />
      </button>
    </div>
  );
}
