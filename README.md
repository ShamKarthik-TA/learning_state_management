# React State Management Workshop

This workspace contains three separate projects demonstrating different global state management approaches in React:

- **react-context-api/** – Uses React Context API
- **redux-toolkit-sample/** – Uses Redux Toolkit
- **zustand-latest-sample/** – Uses Zustand

---

## 🚀 Detailed Setup Guide

### 1. Prerequisites
- Node.js v18 or above ([Download Node.js](https://nodejs.org/))
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### 2. Clone the Repository
If you haven't already, clone this workspace:
```sh
git clone <repo-url>
cd <repo-folder>
```

### 3. Install Dependencies
For each project, run:
```sh
cd <project-folder>
npm install
```
Replace `<project-folder>` with one of:
- `react-context-api`
- `redux-toolkit-sample`
- `zustand-latest-sample`

### 4. Start the Dev Server
Inside the chosen project folder, run:
```sh
npm run dev
```
This will start the Vite development server. Open the local URL shown in your terminal (usually http://localhost:5173) to view the app.

### 5. Explore the Code
- Each project has a `README.md` explaining its structure and key files.
- Try editing components or stores to see how state management works.

### 6. Troubleshooting
- If you see errors about missing packages, run `npm install` again in the project folder.
- If the dev server port is in use, try `npm run dev -- --port=3000` to use a different port.
- For issues with Node.js versions, check with `node -v` and update if needed.

### 7. Using Online Editors
- You can also open each project in [StackBlitz](https://stackblitz.com/) or [CodeSandbox](https://codesandbox.io/) for instant online editing (no install needed).

---

## Setting Up Your Development Environment

### Recommended Editor
- **Visual Studio Code (VS Code)** – Free, fast, and feature-rich for JavaScript/React development.
  - [Download VS Code](https://code.visualstudio.com/)

### Useful VS Code Extensions
- **ES7+ React/Redux/React-Native snippets** – Fast React code snippets
- **Prettier** – Code formatter for consistent style
- **ESLint** – Linting for JavaScript/React
- **Vite** – Vite support for fast dev server
- **Marp for VS Code** – For viewing/editing Marp slides

### Node.js & npm
- Install [Node.js](https://nodejs.org/) (v18+ recommended)
- npm comes bundled with Node.js
- Check versions:
  ```sh
  node -v
  npm -v
  ```

### Project Setup Steps
1. Clone the repo and open in VS Code
2. Open a terminal in the project folder
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the Vite dev server
5. Open the local URL in your browser

### Tips
- Use VS Code's integrated terminal for all commands
- Use the "Go Live" or "Preview" extensions for live browser reloads
- Use the Marp extension to preview slides (`global-state-comparison.marp.md`)
- Use Prettier and ESLint to keep code clean and consistent

---

## 📚 Additional Learning & Guides

- [Context API: Add to Cart Guide](./react-context-api/features/activity/add-to-cart-guide.md)
- [Workshop Slides (Marp)](./global-state-comparison.marp.md)

---

## 🗂️ Branches in This Repo

- **main** – The default branch with all stable, working examples and slides.
- **cons-and-fix** – Contains examples and demos focused on common pitfalls (cons) and fixes for each state management approach.
- **add-to-cart-implemented** – Implements the activity context and cart functionality with a step-by-step guide for Context API.

Switch branches using:
```sh
git checkout <branch-name>
```

---

## What Each Folder Shows

- **react-context-api/**: Visualizes Context API usage, common pitfalls, and best practices.
- **redux-toolkit-sample/**: Demonstrates Redux Toolkit setup, usage, and typical boilerplate.
- **zustand-latest-sample/**: Shows Zustand's minimal API, selectors, and async caveats.

Each project contains hands-on examples and visual demos for learning and comparison.

## License
MIT
