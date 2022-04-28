import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityFromCoords } from "../api";
import { setCoords, setCity } from "../store/actions";

export function Location() {
  const dispatch = useDispatch();
  const coords = useSelector((state) => state.coords);
  const city = useSelector((state) => state.city);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(setCoords(position.coords));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    if (!coords.latitude || !coords.longitude) return;
    const fetchData = async () => {
      const city = await getCityFromCoords(coords.latitude, coords.longitude);
      dispatch(setCity(city));
    };

    fetchData().catch((error) => console.error(error));
  }, [coords, dispatch]);

  return (
    <>
      <div>Latitude: {coords.latitude}</div>
      <div>Longitude: {coords.longitude}</div>
      <div>City: {city}</div>
    </>
  );
}
