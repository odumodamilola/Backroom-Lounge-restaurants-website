<<<<<<< HEAD

# Choplife Bistro Website

_A premium restaurant web app built with React, Vite, and Tailwind CSS._

---

### ![React](https://img.shields.io/badge/React-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript) ![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## Tech Stack

| Technology                           | Reason for Choice                                                                                               |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **React**                            | Component-based architecture for reusable UI elements, efficient state management, and smooth page transitions. |
| **Vite**                             | Lightning-fast dev server and optimized production builds with hot module replacement.                          |
| **Tailwind CSS**                     | Utility-first CSS framework for rapid UI development, consistent design system, and small bundle size.          |
| **TypeScript**                       | Type safety and better developer experience with autocomplete and compile-time error checking.                  |
| **Motion (Framer Motion)**           | Smooth, declarative animations for page transitions and scroll reveals.                                         |
| **Responsive Design (Mobile‑First)** | Guarantees optimal experience across phones, tablets, and desktops using fluid layouts and media queries.       |

---

## Features

- [x] **Custom Animated Cursor** – unique, performant cursor effects using CSS transforms.
- [x] **Sticky Category Navigation** – anchor‑based scroll routing with a persistent navigation bar.
- [x] **Scroll‑Reveal Animations** – lazy‑load animations for sections as they enter the viewport.
- [x] **Glassmorphism UI Components** – frosted‑glass cards and modals built with backdrop‑filter.
- [x] **Dark/Light Theme Toggle** – user-selectable theme with persistent preferences.
- [x] **Mobile‑First Responsive Layout** – fluid grid and adaptive breakpoints for all devices.
- [x] **Full Digital Menu** – 8 categories, 50+ dishes; each dish includes image, description, and price.
- [x] **Food Details Page** – detailed view for each dish with nutritional information.

---

## Project Structure

```
choplife/
├─ src/
│  ├─ assets/
│  │  └─ images/         # Dish photos, UI icons, backgrounds
│  ├─ components/
│  │  ├─ Cursor.tsx       # Custom animated cursor
│  │  ├─ DetailsPage.tsx # About/Contact page
│  │  ├─ DishCard.tsx    # Menu item card component
│  │  ├─ Hero.tsx        # Hero section
│  │  ├─ Navbar.tsx      # Navigation bar
│  │  ├─ ThemeToggle.tsx # Theme switcher
│  │  └─ FoodDetailsPage.tsx # Food detail view
│  ├─ App.tsx            # Main app component
│  ├─ constants.ts      # Menu data
│  ├─ types.ts           # TypeScript interfaces
│  ├─ index.css          # Tailwind imports & custom styles
│  └─ main.tsx           # Entry point
├─ index.html            # HTML entry point
├─ vite.config.ts        # Vite configuration
├─ tsconfig.json         # TypeScript configuration
└─ README.md             # This file
```

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/choplife-bistro-website.git
   cd choplife-bistro-website
   ```

2. **Open the site**

   Simply open `index.html` in any modern browser—no package manager, no build step:
   - Double‑click `index.html`, or
   - Run `start index.html` (Windows) / `open index.html` (macOS) from the terminal.

That’s it! The site will load instantly because it contains only static assets.

---

## Performance Notes

- **Zero JavaScript bundle size** – only a few kilobytes of hand‑written code.
- **No framework overhead** – no React, Vue, or heavy runtime.
- **No build pipeline** – eliminates transpilation, minification, and source‑map generation steps.
- **Native browser APIs** – `IntersectionObserver`, `requestAnimationFrame`, and CSS `backdrop-filter` are hardware‑accelerated, giving buttery‑smooth animations.

---

## Browser Compatibility

| Browser | Version\* | Status             |
| ------- | --------- | ------------------ |
| Chrome  | 80+       | ✅ Fully supported |
| Edge    | 80+       | ✅ Fully supported |
| Firefox | 78+       | ✅ Fully supported |
| Safari  | 14+       | ✅ Fully supported |
| Opera   | 67+       | ✅ Fully supported |

\*Versions indicate the first release that includes the required APIs (e.g., `backdrop-filter`, `IntersectionObserver`).

---

## Contributing

We welcome contributions of any kind—bug fixes, UI enhancements, new dishes, or documentation updates.

1. **Fork the repository** and create a new branch for your changes.
2. Ensure you **do not introduce external dependencies**; keep the project framework‑free.
3. Follow the existing code style (semantic HTML, BEM‑like CSS class naming, and clear JavaScript modular functions).
4. **Open a Pull Request** with a concise description of what you changed and why.
5. All PRs will be reviewed for **accessibility**, **performance**, and **responsiveness** before merging.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for full details.

---

# _Happy coding and enjoy serving up the Choplife experience!_

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4fa0ad05-d4db-42bf-83c4-afde6ae7330d

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
   > > > > > > > 4d9626b973700e92a42fe38f46dc12a8bbae86f3
