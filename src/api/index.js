const MQ_REVERSE_GEOCODE_URL =
  "http://www.mapquestapi.com/geocoding/v1/reverse";
const MQ_KEY = process.env.REACT_APP_MQ_KEY;

export const getCityFromCoords = async (lat, long) => {
  const locationString = `${lat},${long}`;
  const response = await fetch(
    `${MQ_REVERSE_GEOCODE_URL}?key=${MQ_KEY}&location=${locationString}`
  );

  const data = await response.json();
  if (data?.info?.statuscode !== 0) {
    return;
  }

  return data.results[0].locations[0].adminArea5;
};
