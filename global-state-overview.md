# Global State: High-Level & Mental Model

## What is Global State?
Shared data used by many components (e.g., cart, user, theme).

---

## How to Implement

### Context API
- Make a context and provider.
- Put state and actions in provider.
- Wrap your app with provider.
- Use the context in any component.

### Redux Toolkit
- Make a slice for each feature.
- Add slices to a Redux store.
- Use hooks to read/update state.

### Zustand
- Make a store with state and actions.
- Use the store's hook in any component.

---

## Mental Model
- **Context API:** Like a radio station—broadcasts state to all listeners.
- **Redux Toolkit:** Like a central database—strict, predictable, and debuggable.
- **Zustand:** Like a notepad—simple, direct, and flexible.

---

---

## Pros, Cons, and Common Issues


### Context API
- **Pros:**
	- Built-in, simple, no extra dependencies.
- **Cons:**
	- Can cause unnecessary re-renders if used for large or frequently changing state.
- **Common Issues:**
	- Forgetting to wrap your app with the provider (context is undefined).
	- Performance drops with deeply nested or large state.
- **How to Avoid:**
	- Only use for simple, app-wide state.
	- Split contexts for unrelated data.
	- Memoize context values if needed.


### Redux Toolkit
- **Pros:**
	- Scalable, powerful devtools, predictable state, middleware support.
- **Cons:**
	- More boilerplate, steeper learning curve.
- **Common Issues:**
	- Forgetting to add a slice to the store (state is undefined).
	- Accidentally mutating state outside reducers.
- **How to Avoid:**
	- Use the Redux Toolkit patterns and always use reducers for state changes.
	- Use TypeScript for better safety.


### Zustand
- **Pros:**
	- Minimal code, easy to use, fast, no provider needed.
- **Cons:**
	- Smaller ecosystem, less structure for very large apps.
- **Common Issues:**
	- Accidentally creating multiple stores (state not shared).
	- Overusing selectors, causing unnecessary re-renders.
- **How to Avoid:**
	- Always import and use the same store instance.
	- Use selectors to pick only the state you need.

---

Pick the tool that fits your app's needs and your team's comfort.
