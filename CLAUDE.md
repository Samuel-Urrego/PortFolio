# CLAUDE.md — Agent Instructions

## Project Overview
This is a Single Page Application (SPA) built with Astro and Tailwind CSS. The design is inspired by high-end "Cyber-Architect" aesthetics: dark mode, vibrant purple accents, and sleek typography.

## Architecture
- **Framework**: Astro 4
- **Styling**: Tailwind CSS
- **Skills Architecture**: Capabilities are modularized in the `skills/` directory and routed via `AGENTS.md`.

## Implementation Rules
1. **Design Consistency**: All UI changes MUST follow the rules defined in [DESIGN.md](file:///c:/Proyectos/portfolio/skills/DESIGN.md).
2. **Atomic Components**: Prefer small, reusable components in `src/components/`.
3. **Conventional Commits**: Use the `branch-pr` skill for commit messages and PRs.
4. **No Placeholders**: Use `generate_image` for missing assets.

## Quick Commands
- `npm run dev`: Start development server.
- `npm run build`: Build production bundle.
- `npx astro add <integration>`: Add new Astro integrations.
