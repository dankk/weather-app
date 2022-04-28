import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCoords } from "../store/actions";

export function Location() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(setCoords(position.coords));
      });
    }
  }, []);

  return (
    <>
      <div>Latitude: {selector.coords.latitude}</div>
      <div>Longitude: {selector.coords.longitude}</div>
    </>
  );
}
