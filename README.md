# TicketingSystem (React Implementation)

A demo ticket management system built with React, TypeScript, and Vite, providing a smooth experience for managing tickets — including authentication, dashboard overview, and complete CRUD operations.
This project is part of the multi-framework TicketingSystem suite.



## Tech Stack

- React 19 + TypeScript
- Vite (rolldown build) for bundling and dev server
- Tailwind CSS 4 for utility styling
- shadcn/ui components (button, input, dialog, alert dialog, select, card)
- Lucide icons
- Sonner for toast notifications

## Key Features

- Responsive landing page with hero wave SVG, decorative circles, feature boxes, and global footer
- Authentication flow (Login / Signup / Logout) using localStorage
- Protected routes with context-based access control
- Dashboard showcasing ticket statistics and recent activities
- Full CRUD (Create, Read, Update, Delete) for ticket management
- Dialog-driven forms with inline validation and accessible labeling

## Project Structure

```
src/
  components/
    context/        → Auth & Ticket providers
    Navbar.tsx      → Responsive navigation with session-aware links
    Footer.tsx      → Shared footer component
    TicketCard.tsx  → Ticket display card with status badge
    TicketDialog.tsx→ CRUD dialog with form validation
    circle.tsx      → Decorative background helper
  pages/
    Home.tsx        → Landing page
    AuthPage.tsx    → Login/Signup form (toggle mode)
    Dashboard.tsx   → Overview with quick actions
    Tickets.tsx     → Ticket CRUD screen
  App.tsx           → Routing, providers & protected routes
  main.tsx          → App bootstrap with BrowserRouter

```

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview

```

The development server defaults runs at http://localhost:5173/ by default.

### Multi-Framework Implementations

| Framework      | Repository                                                         | Live URL                                                                                       |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **React**      | *This repository*                                                  | [ticketingsystem-react.netlify.app](https://ticketingsystem-react.netlify.app/)                |
| **Vue.js**     | [HNG-VUE-PROJECT](https://github.com/lawrence1986/HNG-VUE-PROJECT) | [ticketingsystem-vue](https://app.netlify.com/projects/ticketingsystem-vue/)                   |
| **Twig (PHP)** | [TwigProject](https://github.com/lawrence1986/TwigProject)         | [twigproject-production-e03.up.railway.app](https://twigproject-production-e03.up.railway.app) |



## Authentication & State

- `AuthContext stores`  the active user and registered users in `localStorage` under `ticketapp_user` and `ticketapp_session`.
- `TicketContext` manages ticket state in memory seeded with mock data. CRUD operations update the context and drive the UI.
- Protected routes live in `App.tsx`; unauthenticated access triggers a toast and redirect to `/auth/login`.

### Demo Credentials

- Email: `test@ticketsystem.build`
- Password: `LawrenceM`

> Sign-up also works—accounts created via the form persist in `localStorage`.

## Accessibility Notes

- Semantic HTML with clear headings, sections, and button elements.
- Form controls are paired with `<Label>` components and inline error messages.
- Focus states inherit from shadcn/ui, ensuring visible outlines.
- Decorative elements (wave SVG, circles) are non-interactive and marked with `aria-hidden` where applicable.
- Status badges combine color with text labels to avoid color-only meaning.

Known improvements:

- No skip-link or landmark navigation yet.
- Toast notifications rely on Sonner's built-in ARIA handling; independent verification is pending.

## Error Handling

- Forms validate required fields and minimum password length before submission.
- Auth failures (duplicate email, incorrect credentials) surface descriptive toast errors.
- Ticket dialogs enforce required title/description and restrict status to `open`, `in_progress`, or `closed`.
- Protected route guard redirects unauthorized users and displays a “Please login” toast.

## Known Issues / TODOs

- Update logout flow to navigate back to `/` per requirement.
- Publish Vue.js and Twig versions, then link them here.
- Persist tickets via storage or API mock if longer-lived data is desired.

## License

Project prepared for the HNG Stage 2 task. No explicit license at this time.
