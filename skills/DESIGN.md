---
name: design-system
description: "Visual identity and style rules for the portfolio. Trigger: designing, styling, UI/UX changes, or applying mockup aesthetics."
---

# Design System — Visual Rules

## Visual Identity
Inspired by the "Backend Architect & AI Orchestrator" mockup. The aesthetic is tech-focused, premium, and vibrant.

## Color Palette
- **Background**: `bg-zinc-950` (#09090b) - Deep black for high contrast.
- **Primary**: `text-purple-500` (#a855f7) - Vibrant neon purple for main highlights.
- **Secondary**: `text-magenta-500` (#ec4899) - Accent neon for secondary details.
- **Text**: `text-zinc-100` for high legibility on dark backgrounds.

## Typography
- **Headings**: `font-outfit` (Sans-serif, bold, tight tracking).
- **Body**: `font-inter` (Modern sans-serif).
- **Monospace**: `font-mono` (For technical status, logs, or "SYSTEM STATUS" elements).

## UI Patterns
1. **Offset Shadows**: Buttons and cards should have a solid 4px/8px offset shadow in purple or magenta.
   - Example: `shadow-[8px_8px_0px_0px_rgba(168,85,247,1)]`
2. **System Status Boxes**: Small blocks with monospace text and subtle borders to simulate terminal/system outputs.
3. **Glassmorphism**: Use `bg-white/5` or `bg-purple-500/10` with `backdrop-blur-md` for overlays and cards.
4. **Vibrant Gradients**: Use `from-purple-500 to-magenta-500` for primary backgrounds or text masks.

## Critical Rules
- NEVER use generic red, blue, or green. Stick to the purple/magenta/zinc palette.
- ALWAYS ensure high contrast for accessibility.
- Animations should be snappy and minimal (micro-interactions).
