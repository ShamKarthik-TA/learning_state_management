import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, done: false }] })),
  toggleTodo: (index) => set((state) => ({
    todos: state.todos.map((todo, i) => i === index ? { ...todo, done: !todo.done } : todo)
  })),
  removeTodo: (index) => set((state) => ({
    todos: state.todos.filter((_, i) => i !== index)
  })),
}));

export default useTodoStore;
