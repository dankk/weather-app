import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherForCity } from "../api";
import { setError, setWeather } from "../store/actions";
import "./WeatherDetails.css";

export function WeatherDetails({ city }) {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  const fetchData = async () => {
    dispatch(setWeather(null));
    const weatherData = await getWeatherForCity(city);
    dispatch(setWeather(weatherData));
  };

  const handleRefresh = () => {
    fetchData();
  };

  useEffect(() => {
    if (!city) return;
    fetchData().catch((error) => {
      console.error(error);
      dispatch(setError(error.message));
    });
  }, [city, dispatch]);

  return (
    <div className="weatherDetails">
      <div className="title">Weather</div>
      {weather ? (
        <>
          <div>
            <div>{weather.summary.title}</div>
            <div>{weather.temperature.actual}°C</div>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
      <div style={{ marginTop: 8 }}>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
}
