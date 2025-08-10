# Adding a New Global State: Activity (Redux Toolkit)

This guide will walk you through adding a new global state called `activity` using Redux Toolkit. Each step includes code snippets and explanations.

---

## 1. Create the Activity Slice

**Why:** Slices organize state and logic for a specific feature.

**How:** Create a new file `src/features/activity/activitySlice.js`.

```js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activities: [],
};

const activitySlice = createSlice({
	name: 'activity',
	initialState,
	reducers: {
		addActivity: (state, action) => {
			state.activities.push(action.payload);
		},
		removeActivity: (state, action) => {
			state.activities.splice(action.payload, 1);
		},
	},
});

export const { addActivity, removeActivity } = activitySlice.actions;
export default activitySlice.reducer;
```

**What this does:**
- Defines the activity state and actions to add/remove activities.
- Exports actions and reducer for use in the store and components.

---

## 2. Add the Slice to the Store

**Why:** To make the activity state available globally.

**How:** In `src/store.js`:

```js
import activityReducer from './features/activity/activitySlice';
// ...existing imports...

const store = configureStore({
	reducer: {
		// ...existing reducers...
		activity: activityReducer,
	},
});

export default store;
```

**What this does:**
- Adds the activity reducer to the Redux store.

---

## 3. Use the Activity State in a Component

**Why:** To read and update the global activity state from any component.

**How:**

```jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addActivity, removeActivity } from './features/activity/activitySlice';

const ActivityExample = () => {
	const activities = useSelector(state => state.activity.activities);
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

	return (
		<div>
			<h2>Activities</h2>
			<input value={input} onChange={e => setInput(e.target.value)} />
			<button onClick={() => { dispatch(addActivity(input)); setInput(''); }}>Add</button>
			<ul>
				{activities.map((act, idx) => (
					<li key={idx}>
						{act} <button onClick={() => dispatch(removeActivity(idx))}>Remove</button>
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
- Lets you add and remove activities using Redux state.

---

Repeat similar steps for Context API and Zustand, using their respective patterns.
