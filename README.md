# Smart Calendar

## Overview
This project is a high-fidelity React component developed for the Frontend Engineering Challenge. The objective was to translate a static physical calendar design into a functional, responsive, and interactive web application. The implementation focuses on modular architecture, performance optimization, and a "physical-first" user interface.

## Key Features
The component meets all baseline requirements and includes several advanced engineering enhancements to improve user experience and product depth:

* **Wall Calendar Aesthetic:** Features a custom spiral-bound wire effect (matte black), paper-stacking depth layers, and a geometric hero section with high-contrast typography.
* **3D Page-Flip Animation:** Implements a realistic 3D transition when switching months, mimicking the physical action of flipping a wall calendar page.
* **Dynamic Theme Engine:** The UI automatically adapts its color palette (primary and accent colors) based on the specific imagery and theme of the active month.
* **Intelligent Range Selection:** A custom-built selection engine allows users to define a start and end date with clear visual indicators and real-time "Trip Duration" insights.
* **Smart Event Markers:** Integrated support for holidays and personal events with hover-active tooltips for detailed information.
* **Persistent Notes System:** A markdown-style notes section utilizing lazy state initialization and localStorage to ensure user data persists across browser sessions.
* **Fully Responsive:** A mobile-first design that transitions from a vertical stack on mobile to a balanced 50/50 layout on desktop.

## Technical Stack
* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript (Strict Type Safety)
* **Styling:** Tailwind CSS (Utility-first approach with custom CSS variables for theming)
* **Animations:** Framer Motion (3D transformations and layout transitions)
* **Date Logic:** date-fns (Immutable date manipulation)

## Architecture Decisions

### 1. Separation of Concerns (Logic Abstraction)
To maintain a clean and testable codebase, all calendar logic—including range calculations, boundary handling, and selection states—is abstracted into a custom `useCalendarRange` hook. This ensures the UI components remain purely presentational.

### 2. Hydration and Performance
The application utilizes "Lazy State Initialization" for data persistence. By wrapping the `localStorage` access in a state initializer, the project avoids unnecessary cascading renders and eliminates Next.js hydration mismatch errors during the server-to-client transition.

### 3. Client-Side Rendering Strategy
Components relying on browser-only APIs (like `window` or `localStorage`) are loaded using Next.js Dynamic Imports with SSR disabled. This ensures a stable environment for physical UI elements and prevents flickering during initial load.

### 4. Semantic UI/UX
All calendar dates are rendered as semantic `<button>` elements. This maintains accessibility standards, ensuring the component is keyboard-navigable and screen-reader friendly.

## Installation and Setup

### Prerequisites
* Node.js 18.x or higher
* npm or yarn

### Steps
1.  **Clone the repository:**
    ```bash
    git clone [your-repository-link]
    ```
2.  **Install dependencies:**
    ```bash
    npm install --legacy-peer-deps
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **View the project:**
    Navigate to `http://localhost:3000` in your browser.

## Submission Details

### Project Links
* **Live Demo:** [[Click Here]](https://smart-calendar-seven.vercel.app/)
* **Video Walkthrough:** [[Click Here]](https://drive.google.com/file/d/1GIVgOGiK_8IWL0XhCCp6d3gSAlseBxXR/view?usp=sharing)

### Directory Overview
* **/app/components/calendar:** Modular UI components (Hero, DateGrid, Spiral, etc.).
* **/app/hooks:** Custom logic for range selection and duration calculation.
* **/app/components/calendar/CalendarData.ts:** Centralized store for month themes, images, and events.
