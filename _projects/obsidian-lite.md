---
layout: project
title: "Obsidian-Lite — Local Markdown Note App"
excerpt: "A minimalist, privacy-focused markdown notes app inspired by Obsidian, built in vanilla JavaScript with localStorage, autosave, and linkable note structure."
technologies: ["JavaScript", "TailwindCSS", "Markdown", "localStorage"]
image: /assets/images/projects/obsidian-lite.png
---

## Project Overview

Obsidian-Lite is a browser-based markdown note-taking app inspired by Obsidian Note, designed for simplicity, local data security, and offline-first writing. Built with vanilla JavaScript, it supports split-pane editing, autosave recovery, and local note linking—all stored entirely in the user's browser.

This project serves as a proof-of-concept for building secure, distraction-free writing tools using only frontend technologies—ideal for digital minimalists or developers who want to build on a portable, modular markdown editing core.

## Key Features

- **Split-View Markdown Editor**: Live preview alongside an editable markdown pane
- **Autosave & Draft Recovery**: Automatic draft saving with prompts to restore or discard changes
- **Sidebar Navigation**: Clean, toggleable sidebar listing all saved notes
- **Note Title Parsing**: Extracts first-level `#` headings to label notes
- **Unsaved Change Detection**: Asterisk indicator for modified notes
- **Distraction-Free Writing**: Optional hiding of both preview and sidebar panes
- **LocalStorage Only**: All data remains on the user's device—no server involved

## UI Design & UX Considerations

This app features a responsive layout with TailwindCSS and carefully considered editor states:

- **Four Layout Modes**: Users can toggle the sidebar and preview pane independently to suit different writing tasks.
- **Dual Sidebar Lists**: An “Active Note” section prevents shifting lists when switching files.
- **Toast Feedback System**: Saves, restores, and warnings are delivered through corner toasts instead of blocking modals.

## Technical Details

Obsidian-Lite is fully frontend and framework-free:

- **Markdown Parsing**: Handled with `marked.js`, with future plans to support `markdown-it` for extended syntax (e.g., footnotes)
- **Data Layer Abstraction**: A modular `Note` class and `NoteSession` manager handle all content storage and autosave logic, making future migration to cloud or IndexedDB seamless
- **UI Components**: Custom modal and toast system avoids native browser dialogs for a smoother UX
- **Session Persistence**: Tracks the last active note and preserves state between reloads

## My Contributions

This is a solo project. My responsibilities included:

- Designing the modular file and data structure
- Writing all core JavaScript for editing, saving, restoring, and rendering markdown content
- Styling the application layout with TailwindCSS
- Creating user-friendly interactions with keyboard-safe modals and feedback messages
- Structuring the app to support scalable future features (tags, backlinks, sync)

## Roadmap & Stretch Goals

- [ ] Backlink parsing from `[[linked notes]]`
- [ ] Search by content or tag
- [ ] Export notes as `.md` or `.zip`
- [ ] Dark/light themes
- [ ] Graph view of note relationships
- [ ] Installable via PWA

## Impact & Use Cases

- **Educational Tool**: Great for teaching basic markdown and note structure
- **Private Journal or Drafting Space**: Useful for offline journaling or initial writing drafts
- **Extendable Core**: Serves as a foundation for more advanced editors with plugin support or cloud sync

Obsidian-Lite is designed for users who want a clean, secure place to write—without handing their data to a server, and without relying on complex frameworks. Its simplicity is its strength.
