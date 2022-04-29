const REVERSE_GEOCODE_URL = "http://api.openweathermap.org/geo/1.0/reverse";
const API_KEY = process.env.REACT_APP_API_KEY;

export const getCityFromCoords = async (lat, lon) => {
  const response = await fetch(
    `${REVERSE_GEOCODE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data[0].name;
};
