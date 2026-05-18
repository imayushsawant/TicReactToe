# ✨ Tic-React-Toe

A classic Tic-Tac-Toe game reimagined with a **Cosmic Neon** aesthetic — built with React and styled with hand-crafted CSS animations.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Custom_Properties-1572B6?logo=css3&logoColor=white)

---

## 🎮 Features

- **Two-player local gameplay** — take turns placing X and O on a 3×3 grid
- **Instant win detection** — recognizes all 8 winning patterns (rows, columns, diagonals)
- **Turn indicator** — glowing status bar shifts between **cyan** (Player 1) and **pink** (Player 2)
- **Colour-coded marks** — X glows neon cyan, O glows neon pink for instant visual distinction
- **Win celebration** — pulsing neon green status bar with bounce animation on game over
- **Client-side routing** — homepage → game board navigation via React Router

---

## 🎨 Design — Cosmic Neon Theme

The UI is built around a dark space-inspired aesthetic with glassmorphism and neon accents:

| Element | Details |
|---|---|
| **Background** | Deep black (`#06060e`) with animated radial gradient nebula + drifting star particles |
| **Typography** | [Outfit](https://fonts.google.com/specimen/Outfit) (display) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (body) |
| **Title** | Animated gradient text cycling cyan → purple → pink with expanding underline on hover |
| **Game Board** | Glassmorphic card with backdrop blur, edge shine, and ambient floating orb |
| **Cells** | Staggered pop-in entrance, stamp-in animation on mark placement, turn-aware hover glow |
| **Start Button** | Glass button with pulsing ring animation and lift-on-hover shadow |
| **Status Bar** | Colour-reactive — cyan/pink per turn, neon green on win with pulsing glow |

---

## 🛠️ Tech Stack

- **React 19** — UI components with hooks (`useState`)
- **React Router 7** — client-side routing (`createBrowserRouter`)
- **Vite 8** — dev server & build tooling
- **Vanilla CSS** — custom properties, `@keyframes`, glassmorphism, `data-*` attribute selectors

---

## 📁 Project Structure

```
TicReactToe/
├── index.html              # Entry HTML with font preconnects
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx            # Router setup & app mount
    ├── App.jsx             # Layout shell — title + <Outlet />
    ├── App.css             # Component styles (board, cells, status, button)
    ├── index.css           # Global theme tokens, reset, background animations
    └── components/
        ├── homepage.jsx    # Start Game landing page
        └── game.jsx        # Game board, turn logic, win detection
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/imayushsawant/TicReactToe.git
cd TicReactToe

# Install dependencies
pnpm install

# Start the dev server
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
pnpm run build
pnpm run preview
```

---

## 🧩 How It Works

1. **Homepage** — A single "Start Game" button navigates to `/game`
2. **Game Board** — A 3×3 grid of buttons. Player 1 places **X**, Player 2 places **O**
3. **Win Detection** — After each move, all 8 winning patterns are checked against the current board state
4. **Data Attributes** — `data-mark`, `data-turn`, and `data-over` attributes on DOM elements bridge React state to CSS for colour-coded styling without any CSS-in-JS

---

## 📄 License

This project is open source and available for personal and educational use.
