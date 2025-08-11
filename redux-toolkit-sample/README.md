# Redux Toolkit Sample Project

This project demonstrates how to use Redux Toolkit in a React application with two examples:

1. **Counter Example**: A simple counter using Redux Toolkit slice and hooks.
2. **Todo List Example**: A todo list using a different slice and pattern.

## Usage

- Increment, decrement, and increment by amount using the counter buttons.
- Add and remove todos using the todo list example.

## References
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)

## Quick Start

```sh
npm install
npm run dev
```

## Examples

- Counter: `src/features/counter/counterSlice.js`
- Todo: `src/features/todo/todoSlice.js`, `src/TodoExample.jsx`

# Redux Toolkit Example

This project demonstrates global state management in React using Redux Toolkit.

## Key Files & Structure

- `src/`
  - `App.jsx` – Main app component, connects to Redux store.
  - `main.jsx` – Entry point for React and Vite.
  - `store.js` – Configures Redux store and combines slices.
  - `features/`
    - `counter/counterSlice.js` – Redux slice for counter state.
    - `todo/todoSlice.js` – Redux slice for todo state.
    - `weather/weatherSlice.js` – Redux slice for weather state.
    - `activity/cartSlice.js` – Redux slice for activity/cart state.
    - `activity/ReduxConsExamples.jsx` – Visualizes Redux Toolkit boilerplate and cons.
  - `TodoExample.jsx`, `WeatherExample.jsx` – Visual demos for todos and weather.
  - `assets/` – Static images (e.g., React logo).
  - `App.css`, `index.css` – Styles.

## How It Works
- Uses Redux Toolkit's `createSlice` for each feature's state and logic.
- `store.js` combines all slices and provides the Redux store to the app.
- Visual examples show Redux usage, boilerplate, and best practices.

## Run the App
```sh
npm install
npm run dev
```

Open the local URL shown in your terminal to view the app.
