import React, { useState } from 'react';
import useWeatherStore from '../../store/weatherStore';

export default function WeatherExample() {
  const { city, weather, fetchWeather } = useWeatherStore();
  const [input, setInput] = useState('London');

  const handleFetch = () => {
    if (input.trim()) {
      fetchWeather(input.trim());
    }
  };

  return (
    <div>
      <h2>Weather Example (Real Life)</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter city"
        style={{ marginRight: 8 }}
      />
      <button onClick={handleFetch}>
        {weather === 'Loading...' ? 'Loading...' : 'Get Weather'}
      </button>
      {city && weather && weather !== 'Loading...' && (
        <div style={{ marginTop: 16 }}>
          <h3>{city}</h3>
          <p>{weather}</p>
        </div>
      )}
    </div>
  );
}
