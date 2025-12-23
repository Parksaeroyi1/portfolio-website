Portfolio Website

A modern, production-ready developer portfolio built with Next.js, TypeScript, and Tailwind CSS, designed to showcase real projects, clean architecture, and strong UI/UX fundamentals.

🔗 Live Demo: (add link)
📂 Projects: Real-world full-stack and frontend applications

🧠 Engineering Focus

This portfolio was built with an emphasis on:

Scalable frontend architecture

Clean separation of concerns

Design-token–driven styling

Performance and maintainability

Professional UI/UX and animations

No unnecessary backend or over-engineering — only what’s needed for a fast, reliable, and maintainable site.

🛠 Tech Stack

Framework: Next.js (App Router)

Language: TypeScript

Styling: Tailwind CSS v4 + CSS variables

Animations: Framer Motion

Icons: Lucide React

Fonts: Inter (Google Fonts)

Deployment: Vercel

📁 Architecture Overview
app/
 ├─ layout.tsx        # Global layout & font setup
 ├─ page.tsx          # Section composition only
 └─ globals.css       # Design tokens & theming

components/
 ├─ sections/         # Page sections (Hero, Projects, Contact, etc.)
 └─ ui/               # Reusable UI primitives

Why this matters

sections/ handle layout and content

ui/ components are reusable and scalable

page.tsx stays clean and declarative

Easy to extend without refactoring

🎨 Design System

Centralized design tokens (colors, spacing, typography)

Light/Dark mode via CSS variables

Global UI scaling through root font size

No hard-coded colors or magic values

This allows fast theme changes and consistent styling across the app.

✨ UX & Animations

Scroll-based animations using Framer Motion

Subtle hover and transition effects

Accessibility-aware components

Smooth, professional interaction patterns

📂 Projects

Projects are:

Data-driven and easy to extend

Linked directly to GitHub

Structured to support “Coming Soon” states

Built to reflect real-world development experience

🔒 Backend Decision

This portfolio intentionally uses no backend:

Static content only

Faster load times

Lower complexity

Easier maintenance

A backend (contact forms, analytics, CMS) can be added later without architectural changes.

🌍 Internationalization (Planned)

The structure supports future multilingual expansion (e.g. English / French) without refactoring layouts or components.

📌 Takeaway

This project reflects how I build real applications:

Clean, scalable structure

Thoughtful UI/UX

Modern tooling

Production-ready code