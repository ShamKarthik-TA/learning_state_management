# Adding a New Global State: Activity (Context API)

This guide will walk you through adding a new global state called `activity` using React Context API. Each step includes code snippets and explanations.

---

## 1. Create the Activity Context

**Why:** Context provides a way to share state across components without prop drilling.

**How:** Create a new file `src/features/activity/ActivityContext.jsx`.

```jsx
import React, { createContext, useContext, useState } from 'react';

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
	const [activities, setActivities] = useState([]);

	// Add a new activity
	const addActivity = (activity) => {
		setActivities((prev) => [...prev, activity]);
	};

	// Remove an activity by index
	const removeActivity = (index) => {
		setActivities((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<ActivityContext.Provider value={{ activities, addActivity, removeActivity }}>
			{children}
		</ActivityContext.Provider>
	);
};

export const useActivity = () => useContext(ActivityContext);
```

**What this does:**
- Creates a context for activities.
- Provides state and functions to add/remove activities.
- Exposes a custom hook for easy access.

---

## 2. Wrap Your App with the Provider

**Why:** To make the activity state available throughout your app.

**How:** In `src/App.jsx`:

```jsx
import { ActivityProvider } from './features/activity/ActivityContext';
// ...existing imports...

function App() {
	return (
		<ActivityProvider>
			{/* ...existing app code... */}
		</ActivityProvider>
	);
}

export default App;
```

**What this does:**
- Wraps your app in the provider so all components can access the activity state.

---

## 3. Use the Activity Context in a Component

**Why:** To read and update the global activity state from any component.

**How:**

```jsx
import React, { useState } from 'react';
import { useActivity } from './ActivityContext';

const ActivityExample = () => {
	const { activities, addActivity, removeActivity } = useActivity();
	const [input, setInput] = useState('');

	return (
		<div>
			<h2>Activities</h2>
			<input value={input} onChange={e => setInput(e.target.value)} />
			<button onClick={() => { addActivity(input); setInput(''); }}>Add</button>
			<ul>
				{activities.map((act, idx) => (
					<li key={idx}>
						{act} <button onClick={() => removeActivity(idx)}>Remove</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ActivityExample;
```

**What this does:**
- Shows a list of activities.
- Lets you add and remove activities using the global state.

---

Repeat similar steps for Redux Toolkit and Zustand, using their respective patterns.
