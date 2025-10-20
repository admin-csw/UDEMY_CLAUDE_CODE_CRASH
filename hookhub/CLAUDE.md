# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 15 application built with TypeScript, React 19, and Tailwind CSS v4. It uses the App Router architecture.

## Development Commands

```bash
# Start development server on http://localhost:3000
npm run dev

# Build production bundle
npm run build

# Start production server (requires build first)
npm start

# Run ESLint
npm run lint
```

## Technology Stack

- **Framework**: Next.js 15.5.6 with App Router
- **React**: 19.1.0
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4 (PostCSS-based)
- **Fonts**: Geist Sans and Geist Mono (next/font/google)
- **Linting**: ESLint with next/core-web-vitals and next/typescript configs

## Project Structure

```
src/
  app/              # App Router directory
    layout.tsx      # Root layout with font configuration
    page.tsx        # Home page
    globals.css     # Global styles with Tailwind directives
    favicon.ico
public/             # Static assets (SVG icons)
```

## Key Architectural Patterns

### Path Aliases
- Use `@/*` to import from `src/*` (configured in tsconfig.json)
- Example: `import Component from "@/app/components/Component"`

### Styling Approach
- Tailwind CSS v4 uses the PostCSS plugin architecture
- Global styles are in `src/app/globals.css`
- Font variables are set in root layout: `--font-geist-sans` and `--font-geist-mono`

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Module resolution: bundler
- Next.js TypeScript plugin included for enhanced IntelliSense

### ESLint Configuration
- Uses flat config format (eslint.config.mjs)
- Extends next/core-web-vitals and next/typescript
- Ignores: node_modules, .next, out, build, next-env.d.ts

## Development Notes

- The development server supports hot module replacement
- Pages auto-update when editing files
- TypeScript types are automatically generated in `.next/types/`
