# Zustand Example

This project demonstrates global state management in React using Zustand.

## Key Files & Structure

- `src/`
  - `App.jsx` – Main app component, uses Zustand stores.
  - `main.jsx` – Entry point for React and Vite.
  - `store/`
    - `counterStore.js` – Zustand store for counter state.
    - `todoStore.js` – Zustand store for todo state.
    - `weatherStore.js` – Zustand store for weather state.
    - `activityStore.js` – Zustand store for activity state.
  - `features/`
    - `counter/CounterExample.jsx` – Visual demo of counter using Zustand.
    - `todo/TodoExample.jsx` – Visual demo of todo list using Zustand.
    - `weather/WeatherExample.jsx` – Visual demo of weather using Zustand.
    - `activity/ZustandConsExamples.jsx` – Visualizes Zustand pitfalls and solutions.
  - `assets/` – Static images (e.g., React logo).
  - `App.css`, `index.css` – Styles.

## How It Works
- Each feature has its own Zustand store for isolated state.
- Visual examples show how Zustand is used, and demonstrate common pitfalls (like stale closures) and best practices (like selectors).

## Run the App
```sh
npm install
npm run dev
```

Open the local URL shown in your terminal to view the app.
