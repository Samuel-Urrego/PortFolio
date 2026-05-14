---
name: atomic-components
description: "Documentation and usage rules for the portfolio's atomic components. Trigger: adding components, refactoring UI, or using Button, Modal, ProjectCard, etc."
---

# Atomic Components — Usage Guide

## Components Overview
All components are located in `src/components/` and use TypeScript for property validation.

## 1. Button
Standard button with offset shadow.
```astro
<Button 
  label="Click Me" 
  variant="primary" 
  href="/link" 
  size="md" 
/>
```
- **Variants**: `primary` (purple), `secondary` (magenta), `outline`.
- **Note**: If `href` is provided, it renders an `<a>` tag; otherwise, a `<button>`.

## 2. Modal
Native `<dialog>` based modal with system styling.
```astro
<Modal id="my-modal" title="TITLE.EXE">
  <p>Content goes here</p>
</Modal>

<!-- Trigger -->
<button onclick="document.getElementById('my-modal').showModal()">Open</button>
```
- **IDs**: Must be unique within the page.
- **Methods**: Use `.showModal()` to open and `.close()` (built-in via X button) to close.

## 3. ProjectCard
Card for showcasing projects.
```astro
<ProjectCard 
  id="PRJ_01"
  name="Name"
  description="Desc"
  tags={['TAG1']}
  repoUrl="..."
  variant="detailed" 
/>
```
- **Variants**: `detailed` (with side deco) and `compact` (with preview image).

## 4. CredentialCard
Specialized card for diplomas with a ripped edge effect.
```astro
<CredentialCard 
  title="Cert Name"
  institution="Org"
  actionLabel="[ VIEW ]"
  actionUrl="..."
/>
```

## Critical Rules
- ALWAYS use components instead of raw HTML for repetitive UI elements.
- DO NOT modify component internals for one-off styles; use the `class` prop or add a new variant.
- Maintain the "Cyber-Architect" aesthetic: monospace fonts for data, bold sans-serif for titles.
