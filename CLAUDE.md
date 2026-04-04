# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Finance/expense tracker app built with React 19 and Vite. This is a learning project from a Claude Code course — it intentionally contains bugs and messy code to be fixed during development.

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

- **Entry point**: `src/main.jsx` — renders `<App />` into `#root`
- **Main component**: `src/App.jsx` — single-file app with all logic
  - Uses `useState` for transactions list and form state
  - Transactions: array of `{ id, description, amount, type, category, date }`
  - Categories: `food`, `housing`, `utilities`, `transport`, `entertainment`, `salary`, `other`
  - Computes income/expense totals and balance
  - Supports filtering by type and category
- **Styling**: `src/App.css` and `src/index.css`
- **No backend** — data stored in component state only (resets on refresh)

## Notes

- Bug intentionally present: one transaction has `type: "expense"` but should be `"income"` (Freelance Work, id: 4)
- No persistence layer — future work may add localStorage or API integration
