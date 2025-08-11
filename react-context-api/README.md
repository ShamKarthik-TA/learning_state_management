# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Context API Example

This project demonstrates global state management in React using the Context API.

## Key Files & Structure

- `src/`
  - `App.jsx` – Main app component, wires together all features.
  - `main.jsx` – Entry point for React and Vite.
  - `features/`
    - `counter/CounterContext.jsx` – Context and provider for counter state.
    - `counter/CounterExample.jsx` – Visual demo of counter using context.
    - `todo/TodoContext.jsx` – Context and provider for todo state.
    - `todo/TodoExample.jsx` – Visual demo of todo list using context.
    - `weather/WeatherContext.jsx` – Context and provider for weather state.
    - `weather/WeatherExample.jsx` – Visual demo of weather using context.
    - `activity/ActivityContext.jsx` – Context for activity state.
    - `activity/ContextConsExamples.jsx` – Visualizes Context API pitfalls and solutions.
  - `assets/` – Static images (e.g., React logo).
  - `App.css`, `index.css` – Styles.

## How It Works
- Each feature (counter, todo, weather, activity) has its own context for isolated state.
- Visual examples show how context is used, and demonstrate common pitfalls (like unnecessary re-renders) and best practices (like split contexts).

## Run the App
```sh
npm install
npm run dev
```

Open the local URL shown in your terminal to view the app.
