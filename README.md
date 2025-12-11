# Skibookers

React + Vite scaffold for the ski trip customization experience.

## Features
- Desktop-first two-column layout with trip configurator and sticky price summary sidebar.
- Editable trip package rows (resort, hotel, room & board, skipass, transfer, flight, insurance) plus multi-select add ons.
- Recommended resort and “Recommended for you” guidance cards with quick context.
- Pricing helpers that calculate per-category totals, add-on rollups, and the overall trip total.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Smoke test
- Start the dev server with `npm run dev` and open the provided URL.
- Change several select inputs (e.g., switch hotels and skipass duration) and confirm prices update in the sidebar.
- Add and remove add-ons; verify chips appear and totals adjust.
- Click “Reset to defaults” to ensure the trip resets and pricing recalculates.
