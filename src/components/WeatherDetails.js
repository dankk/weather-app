import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherForCity } from "../api";
import { setWeather } from "../store/actions";

export function WeatherDetails({ city }) {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  const state = useSelector((state) => state);

  const fetchData = async () => {
    const weatherData = await getWeatherForCity(city);
    dispatch(setWeather(weatherData));
  };

  const handleRefresh = () => {
    fetchData();
  };

  useEffect(() => {
    if (!city) return;
    fetchData().catch((error) => console.error(error));
  }, [city, dispatch]);

  console.log(weather);

  if (!weather) return;

  return (
    <div style={{ padding: 8 }}>
      <div>
        <div>{weather.summary.title}</div>
        <div>{weather.temperature.actual}</div>
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
}
