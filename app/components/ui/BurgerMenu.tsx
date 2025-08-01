"use client";

import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { sections, SectionId } from "@/app/lib/navigation";

interface BurgerMenuProps {
  className?: string;
}

export default function BurgerMenu({ className = "" }: BurgerMenuProps) {
  const [activeSection, setActiveSection] = useState("accueil");
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
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-20% 0px -20% 0px", // Adjust the trigger zone
      }
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    setShowBurgerMenu(false);
  }, [activeSection]);

  const getContainerClasses = () => {
    const baseClasses =
      "w-dvw h-[15dvh] fixed top-0 z-50 flex flex-col items-center drop-shadow-gray-600 drop-shadow-md transition-transform duration-500 ease-in-out";
    const transformClasses = showBurgerMenu
      ? "transform translate-y-0"
      : "transform -translate-y-[11dvh]";
    const visibilityClasses = activeSection === "accueil" ? "lg:hidden" : "";

    return `${baseClasses} ${transformClasses} ${visibilityClasses}`;
  };

  return (
    <div className={getContainerClasses()}>
      <nav className="h-full w-full flex justify-evenly items-center bg-background-burger">
        <a href="#accueil" className=" flex justify-center items-center">
          <img src="/image/logo_black.svg" alt="Logo" className="w-auto h-8" />
        </a>
        <NavLinks
          className="h-full flex items-center gap-1 text-primary text-3xl font-sofia "
          variant="burger menu"
          activeSection={activeSection}
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
          className="w-50 h-10"
        />
      </button>
    </div>
  );
}
