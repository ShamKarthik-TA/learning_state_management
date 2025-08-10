import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './features/weather/weatherSlice';

function WeatherExample() {
  const [city, setCity] = useState('London');
  const { data, status, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleFetch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div>
      <h2>Weather Example (Real Life)</h2>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleFetch} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Get Weather'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && data.current_condition && (
        <div>
          <h3>{city}</h3>
          <p>Temperature: {data.current_condition[0].temp_C}°C</p>
          <p>Weather: {data.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherExample;
