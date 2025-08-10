import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Async thunk to fetch weather data from wttr.in (no API key required)
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    // wttr.in returns weather info as plain text or JSON
    const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
    if (!response.ok) throw new Error('Failed to fetch weather');
    return await response.json();
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
