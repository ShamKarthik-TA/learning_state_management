import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setStatus('loading');
    setError(null);
    setCity(cityName);
    try {
      // Use wttr.in for demo, but mimic Redux sample structure
      const res = await fetch(`https://wttr.in/${encodeURIComponent(cityName)}?format=j1`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setWeather(data);
      setStatus('succeeded');
    } catch (e) {
      setError('Error fetching weather');
      setStatus('failed');
    }
  };

  return (
    <WeatherContext.Provider value={{ city, weather, status, error, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
// ...existing code...

export function useWeather() {
  return useContext(WeatherContext);
}
