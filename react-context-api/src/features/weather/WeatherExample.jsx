import { useWeather } from './WeatherContext';
import React from 'react';

export default function WeatherExample() {
  const { city, weather, status, error, fetchWeather } = useWeather();
  const [input, setInput] = React.useState('London');

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
      <button onClick={handleFetch} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Get Weather'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weather && weather.current_condition && (
        <div style={{ marginTop: 16 }}>
          <h3>{input.trim() || city}</h3>
          <p>Temperature: {weather.current_condition[0].temp_C}°C</p>
          <p>Weather: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}
