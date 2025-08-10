import React, { createContext, useContext, useState } from 'react';

const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);

  // Activity actions
  const addActivity = (activity) => setActivities((prev) => [...prev, activity]);
  const removeActivity = (index) => setActivities((prev) => prev.filter((_, i) => i !== index));

  // Cart actions
  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));

  return (
    <ActivityContext.Provider value={{ activities, addActivity, removeActivity, cart, addToCart, removeFromCart }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
