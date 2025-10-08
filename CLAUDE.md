# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Athletic Zone Ajaccio is a Next.js 15 (App Router) website for a fitness center in Ajaccio, Corsica. The site is a single-page application with multiple sections (hero, about, method, gallery, pricing, contact) composed into the main page.

## Commands

### Development

```bash
pnpm run dev              # Start development server at localhost:3000
pnpm run build           # Production build
pnpm start               # Start production server
```

### Code Quality

```bash
pnpm run lint            # Run ESLint
pnpm run format          # Format all files with Prettier
pnpm run format:check    # Check formatting without modifying files
```

⚠️ Always use `pnpm`.

## Architecture

### Page Structure

The site uses a **composite page pattern** where `app/page.tsx` imports and renders individual section pages:

- `app/accueil/page.tsx` - Hero section
- `app/about/page.tsx` - About section
- `app/method/page.tsx` - Method section
- `app/galerie/page.tsx` - Gallery section
- `app/tarifs/page.tsx` - Pricing section
- `app/contact/page.tsx` - Contact section

Each section is a full page component that can be developed independently.

### Component Organization

**UI Components** (`app/components/ui/`)

- Organized by feature: `decoration/`, `icon/`, `tarifs/`
- Base components: `Button.tsx`, `ButtonV2.tsx`, `ButtonV3.tsx` (iterative versions)
- Navigation: `BurgerMenu.tsx`, `MobileMenu.tsx`, `HeroNavigationV2.tsx`, `NavigationLinksV2.tsx`

**Shared Data** (`app/lib/`)

- `pricing-data.ts` - Pricing configuration and types (`smallGroupPricing`, `coachingPrivePricing`)
- `navigation.ts` - Navigation links configuration
- `utils.ts` - Shared utilities (`cn()` for class merging, formatters)

### Styling System

**Tailwind v4 (CSS-first)**

- Custom properties defined in `app/globals.css` using `@theme inline`
- No `tailwind.config.ts` file (Tailwind v4 uses CSS-first approach)
- Custom utilities in `@layer utilities`: `bg-stripes-yellow`, `bg-stripes-red`, `bg-stripes-black`
- Global utilities: `.column`, `.gutter`

**CSS Custom Properties**
Extensive design tokens in `app/globals.css`:

- Typography scales: `--text-h1-base`, `--text-h2`, `--text-coordinates-*`
- Spacing: `--gap-*`, `--spacing-*`, `--space-section-*`
- Colors: `--color-button-*`, `--color-highlight`, `--color-overlay-*`
- Fonts: `--font-sans`, `--font-mono`, `--font-sofia`, `--font-anton`
- Breakpoints: `--breakpoint-*`

**Design Patterns**

- Uses `class-variance-authority` (CVA) for component variants
- `cn()` utility (clsx + tailwind-merge) for conditional classes
- Responsive design with mobile-first approach

### Font Configuration

Multiple Google Fonts loaded in `app/layout.tsx`:

- Roboto (sans): weights 200-600
- Roboto Mono: weights 400-500
- Sofia Sans Extra Condensed: weight 600
- Anton: weight 400

Each font exposed as CSS variable (`--font-roboto-sans`, etc.)

### TypeScript Configuration

- Path alias `@/*` maps to project root
- Strict mode enabled
- Target: ES2017

## Development Guidelines

### Component Patterns

1. **Variant-based styling**: Use CVA for components with multiple visual variants
2. **Compound variants**: Leverage CVA's compound variants for complex styling logic (see `CornerBorder.tsx`)
3. **Animation hooks**: Use Intersection Observer for scroll-triggered animations (see `ButtonV2.tsx:70-86`)
4. **Client components**: Mark interactive components with `'use client'`

### Styling Conventions

- Use custom properties from `globals.css` instead of hardcoded values
- Leverage utility classes (`.gutter` for horizontal padding, `.column` for flex-col)
- Prefer design tokens for consistency: `text-button-yellow` over arbitrary colors
- Use `cn()` for conditional/merged classes

### Data Management

- Pricing data centralized in `app/lib/pricing-data.ts`
- Types exported alongside data (e.g., `PricingCard`, `PricingOption`)
- Navigation configuration in `app/lib/navigation.ts`

### Code Formatting

- Prettier with Tailwind plugin (sorts classes automatically)
- Single quotes, 2-space tabs, trailing commas (ES5)
- ESLint configured with `better-tailwindcss` plugin
- Tailwind CSS entrypoint: `app/globals.css` (required for v4)

## Important Notes

- **Tailwind v4**: Uses CSS-first configuration via `@theme inline` in `globals.css`. Do not create a `tailwind.config.ts` file.
- **Component versioning**: Multiple button versions exist (`Button.tsx`, `ButtonV2.tsx`, `ButtonV3.tsx`). Check recent usage before adding new variants.
- **French content**: Site is in French (`lang="fr"`, French date/number formatters in `utils.ts`)
- **SEO metadata**: Comprehensive metadata in `app/layout.tsx` for Ajaccio fitness center
- **Image optimization**: All images in `public/image/` directory
