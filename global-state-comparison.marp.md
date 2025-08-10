---
marp: true
theme: gaia
class: lead
backgroundColor: '#181c24'
color: '#e0e6f0'
style: |
  section {
    background: linear-gradient(135deg, #181c24 60%, #232946 100%);
    color: #e0e6f0;
  }
  h1, h2, h3, h4 {
    color: #ffb400;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px #23294699;
  }
  table {
    background: #232946;
    color: #e0e6f0;
    border-radius: 8px;
    border: 2px solid #ffb400;
    box-shadow: 0 2px 12px #0008;
  }
  th {
    background: #232946;
    color: #ffb400;
  }
  td {
    background: #232946;
    color: #e0e6f0;
  }
  strong {
    color: #ffb400;
  }
---

# 🚀 Global State Management in React
## 3-Day Workshop: Context API, Redux Toolkit, Zustand

---

## 🗓️ Workshop Agenda

- **Day 1:** Context API Deep Dive
- **Day 2:** Redux Toolkit in Practice
- **Day 3:** Modern State with Zustand
- Hands-on Labs, Tech Pitfalls, Q&A
- Real-world patterns & best practices

---

# 🚀 Workshop Setup

---

## Online Setup

- Use [StackBlitz](https://stackblitz.com/) or [CodeSandbox](https://codesandbox.io/)
- No install needed, just open and code!

## Local Setup

- Install Node.js (v18+)
- `npm create vite@latest` for React app
- `npm install` & `npm run dev`

---
# When to Use Global State Management

## ✅ When to Use
- Shared state across many components
- Complex state logic (e.g., async, derived state)
- Need for debugging tools (e.g., Redux DevTools)

## ❌ When NOT to Use
- Simple state (e.g., local UI toggles)
- State used by a single component
- Avoid over-engineering for small apps

## Caveats
- Increased complexity
- Performance issues (e.g., unnecessary re-renders)
- Learning curve for tools like Redux

---
# Why Global State Management?

![width:180px](https://api.memegen.link/images/iw/Passing%20props%20through%205%20components.../Should%27ve%20used%20global%20state%20management!.jpg)
*Passing props through 5 components... Should've used global state management!*

![width:40px](https://cdn-icons-png.flaticon.com/512/1828/1828817.png)

- Avoid prop drilling
- Share data across app
- Easier debugging & scaling

---
# Day 1: Context API Deep Dive

![width:40px](https://raw.githubusercontent.com/facebook/react/main/fixtures/attribute-behavior/public/react-logo.png)

## 🌈 What is Context API?
- Built-in React global state
- Avoids prop drilling
- Good for theme, auth, user

## ⚡ Pitfalls
- Extra re-renders (unless split/memoized)
- No built-in devtools

---
## "The State of React Props"

![width:350px](https://raw.githubusercontent.com/reactjs/reactjs.org/main/static/share.png)
*Props drilling: The path of pain*

![width:200px](https://raw.githubusercontent.com/facebook/react/main/fixtures/attribute-behavior/public/react-logo.png)
*Context API: Prop drilling savior*

---
## 🛠️ Hands-on: Context API
- Make a context for theme/user
- Show re-renders visually
- Try splitting contexts

---
## Dev Facts: Context API

![width:40px](https://cdn-icons-png.flaticon.com/512/5968/5968672.png)

- Introduced in React 16.3
- No extra dependencies
- Used by React for themes/localization
- Not for high-frequency updates

---
# Day 2: Redux Toolkit Deep Dive

![width:40px](https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png)

## 🏢 Why Redux Toolkit?
- Predictable, scalable
- Devtools, middleware, async
- Central state

## ⚡ Pitfalls
- Boilerplate for simple cases
- Verbose for small apps

---
## "The Redux Experience"

![width:300px](https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png)
*Redux: State time machine*

![width:350px](https://redux.js.org/img/redux-devtools-extension.png)
*Redux DevTools: Debugging power*

---
## 🛠️ Hands-on: Redux Toolkit
- Make a slice for todos/counter
- Use Redux DevTools
- Refactor to reduce boilerplate

---
## Dev Facts: Redux Toolkit

![width:40px](https://cdn-icons-png.flaticon.com/512/5968/5968705.png)

- Official Redux way since 2019
- DevTools: time-travel state
- Middleware out of the box
- Used by Twitter, Instagram, Discord

---
# Day 3: Zustand Deep Dive

![width:40px](https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg)

## 🦄 Why Zustand?
- Minimal API, no boilerplate
- Fast, uses hooks
- Selectors for fine updates

## ⚡ Pitfalls
- Async/stale closure issues
- No built-in devtools/middleware

---
## "Zustand Magic"

![width:200px](https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg)
*Zustand: Bear state magic*

![width:350px](https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560)
*Zustand: Less code, more power*

---
## 🛠️ Hands-on: Zustand
- Build a store for counter/todos
- Use selectors for fewer re-renders
- Add async actions, fix stale closure
- Compare with Context/Redux

---
## Dev Facts: Zustand

![width:40px](https://cdn-icons-png.flaticon.com/512/616/616408.png)

- "Zustand" means state (German)
- By PMNDRS (Jotai, Drei, R3F)
- No provider, just hooks
- Tiny bundle (~1KB)

---
# ⚔️ Comparison Table

| Feature         | <span style="color:#ffb400">Context API</span> | <span style="color:#00d8ff">Redux Toolkit</span> | <span style="color:#ff61a6">Zustand</span> |
|----------------|:----------------------:|:----------------------:|:----------------------:|
| Boilerplate    | Low                    | High                   | Very Low               |
| Devtools       | No                     | Yes                    | Optional               |
| Async Support  | Manual                 | Built-in               | Manual                 |
| Re-render Ctrl | Poor (default)         | Good                   | Excellent              |
| Ecosystem      | Built-in               | Huge                   | Growing                |

---

# 🧠 Key Takeaways

- No one-size-fits-all: choose based on app size, team, and needs.
- Know each tool's tech pitfalls to avoid bugs and perf issues.
- Try each in a small project to see what fits your style!

---

# 🎉 Let's Build!

- Each day: code-along, live demos, Q&A
- End of workshop: build a mini-app with your favorite tool
- Share your learnings and questions!

---

# More Global State Memes

![width:180px](https://api.memegen.link/images/country/Props%20going%20round%20and%20round.../Global%20state%20makes%20life%20easy!.jpg)
*Props going round and round... Global state makes life easy!*

![width:180px](https://api.memegen.link/images/success/Redux%20code%20is%20too%20much!/Zustand%20is%20so%20simple!.jpg)
*Redux code is too much! Zustand is so simple!*

---
# References

![width:40px](https://cdn-icons-png.flaticon.com/512/545/545705.png)

## Official Docs
- [React Context API](https://react.dev/learn/context)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

## More
- [React State Management](https://react.dev/learn/state-management)
- [State Management Comparison](https://medium.com/)

