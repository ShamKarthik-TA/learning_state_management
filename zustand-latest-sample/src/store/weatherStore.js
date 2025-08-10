import { create } from 'zustand';

const useWeatherStore = create((set) => ({
  city: '',
  weather: null,
  setCity: (city) => set({ city }),
  setWeather: (weather) => set({ weather }),
  fetchWeather: async (city) => {
    set({ city, weather: 'Loading...' });
    // Fake API call for demo
    setTimeout(() => {
      set({ weather: `Weather in ${city}: ${Math.floor(Math.random() * 35) + 10}°C` });
    }, 1000);
  },
}));

export default useWeatherStore;
