import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import todoReducer from './features/todo/todoSlice';
import weatherReducer from './features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    weather: weatherReducer,
  },
});
