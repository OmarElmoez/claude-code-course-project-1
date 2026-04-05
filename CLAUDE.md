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
- **Components**:
  - `src/App.jsx` — root component, holds shared `transactions` state
  - `src/Summary.jsx` — displays income, expenses, and balance summary cards (calculates totals from transactions)
  - `src/TransactionForm.jsx` — form to add new transactions (description, amount, type, category)
  - `src/TransactionList.jsx` — displays filtered transactions table with type/category filters
- **Data model**: Transactions are `{ id, description, amount, type, category, date }`
  - `type`: `"income"` or `"expense"`
  - `category`: `food`, `housing`, `utilities`, `transport`, `entertainment`, `salary`, `other`
  - `amount`: number
- **Styling**: `src/App.css` and `src/index.css`
- **No backend** — data stored in component state only (resets on refresh)

## Notes

- No persistence layer — future work may add localStorage or API integration
