import { create } from 'zustand';

const useActivityStore = create((set) => ({
  activities: [],
  cart: [],
  addActivity: (activity) => set((state) => ({ activities: [...state.activities, activity] })),
  removeActivity: (index) => set((state) => ({ activities: state.activities.filter((_, i) => i !== index) })),
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (index) => set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
}));

export default useActivityStore;
