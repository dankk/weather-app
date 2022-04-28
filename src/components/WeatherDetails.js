import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherForCity } from "../api";
import { setWeather } from "../store/actions";

export function WeatherDetails({ city }) {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    if (!city) return;
    const fetchData = async () => {
      const weatherData = await getWeatherForCity(city);
      dispatch(setWeather(weatherData));
    };
    fetchData().catch((error) => console.error(error));
  }, [city, dispatch]);

  return <>details -- {JSON.stringify(weather)}</>;
}
