# Adding a New Global State: Activity (Zustand)

This guide will walk you through adding a new global state called `activity` using Zustand. Each step includes code snippets and explanations.

---

## 1. Create the Activity Store

**Why:** Zustand stores manage state and actions in a simple hook.

**How:** Create a new file `src/store/activityStore.js`.

```js
import { create } from 'zustand';

const useActivityStore = create((set) => ({
	activities: [],
	addActivity: (activity) => set((state) => ({ activities: [...state.activities, activity] })),
	removeActivity: (index) => set((state) => ({ activities: state.activities.filter((_, i) => i !== index) })),
}));

export default useActivityStore;
```

**What this does:**
- Creates a Zustand store with state and actions for activities.
- Exports a hook to use in components.

---

## 2. Use the Store in a Component

**Why:** To read and update the global activity state from any component.

**How:**

```jsx
import React, { useState } from 'react';
import useActivityStore from '../store/activityStore';

const ActivityExample = () => {
	const activities = useActivityStore((state) => state.activities);
	const addActivity = useActivityStore((state) => state.addActivity);
	const removeActivity = useActivityStore((state) => state.removeActivity);
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
- Lets you add and remove activities using Zustand global state.

---

Repeat similar steps for Context API and Redux Toolkit, using their respective patterns.
