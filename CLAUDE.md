# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16** project using the App Router with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/layout/` - Layout components (Header with scroll effects)
- `src/components/sections/` - Page section components (Hero, Services, Contact)
- `src/components/ui/` - Reusable UI primitives (Button, ScrollReveal)
- `src/lib/` - Utility functions (cn class merger using clsx + tailwind-merge)

### Key Patterns

**Component Variants**: Uses Radix UI primitives with Class Variance Authority (CVA) for type-safe component variants. See `components/ui/button.tsx` for the pattern.

**Scroll Animations**: Framer Motion-based `ScrollReveal` component wraps content for scroll-triggered animations. Client components use `"use client"` directive.

**Styling**: Tailwind CSS v4 with CSS custom properties for theming. Colors defined in `globals.css` support light/dark modes via `.dark` class.

**Path Alias**: `@/*` maps to `./src/*` for imports.

## Tech Stack

- Next.js 16.1.1 / React 19.2.3 / TypeScript
- Tailwind CSS 4.x with tailwind-animate
- Framer Motion 12.x for animations
- Radix UI for headless UI primitives
- Lucide React for icons
