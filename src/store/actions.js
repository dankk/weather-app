export const setCoords = (coords) => ({
  type: "SET_COORDS",
  payload: coords,
});

export const setCity = (city) => ({
  type: "SET_CITY",
  payload: city,
});

export const setWeather = (weather) => ({
  type: "SET_WEATHER",
  payload: weather,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});
