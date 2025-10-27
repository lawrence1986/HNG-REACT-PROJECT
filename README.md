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
| **Vue.js**     | [HNG-VUE-PROJECT](https://github.com/lawrence1986/HNG-VUE-PROJECT) | [ticketingsystem-vue.netlify.app](https://ticketingsystem-vue.netlify.app/)                   |
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

- Semantic HTML elements with meaningful headings and sections.
- Form controls are paired with `<Label>` components and inline error messages.
- Clear focus states inherited from shadcn/ui
- Decorative elements marked with aria-hidden
- Status badges include both color and text labels.

Known improvements:

- No skip-link or landmark navigation yet.
- Sonner’s ARIA handling not yet independently verified
- 
## Error Handling

- Inline validation for all form inputs
- Auth errors (duplicate or invalid credentials) surfaced via toast notifications
- Ticket dialogs enforce required fields and valid status values (open, in_progress, closed)
- Unauthorized route access triggers redirect and feedback toast

## Known Issues / TODOs
- Keep improving the asthetics and layout - Continum
- Publish Vue.js and Twig versions, then link them here.
- Optionally persist tickets with localStorage or a mock API

## License

This project was developed as part of the HNG Stage 2 task for Frontend Dev.
No explicit license has been defined at this time.
