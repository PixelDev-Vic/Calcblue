# Calc Blue

A clean, responsive bald calculator website built with **React** and **Tailwind CSS v4**.

> **DCIT 26: Application Development and Emerging Technologies**
> Laboratory 1 · SY 2026–2027

## Live URL

🔗 **https://calcblue.vercel.app** 
## Features

- Standard 4-function calculator (+, −, ×, ÷) with percent
- Operation chaining (left-to-right evaluation)
- Floating-point precision fix (0.1 + 0.2 = 0.3)
- Division-by-zero error handling with auto-recovery
- Full keyboard support (digits, operators, Enter, Backspace, Escape)
- Responsive layout (mobile-first, side-by-side on large screens)
- Accessible (aria-labels, role="status", focus-visible rings, WCAG AA contrast)
- All icons are inline SVGs — no icon libraries, no emojis
- Blue-and-white theme with gradient background

## Tech Stack

- [Vite](https://vite.dev/) — fast build tool
- [React 19](https://react.dev/) — UI library (functional components + hooks)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS via `@tailwindcss/vite`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```



## File Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # App shell with layout
├── index.css             # Tailwind v4 import + theme
├── components/
│   ├── Header.jsx        # Logo + title + tagline
│   ├── Calculator.jsx    # State management + calculation logic
│   ├── Display.jsx       # Expression + current value display
│   ├── Keypad.jsx        # Button grid layout
│   ├── CalcButton.jsx    # Reusable button component
│   ├── UserGuide.jsx     # Instructions + operations + shortcuts
│   ├── Footer.jsx        # Course info
│   └── icons/
│       └── icons.jsx     # All SVG icon components
└── utils/
    └── calculate.js      # compute() + formatNumber() — no eval()
```
