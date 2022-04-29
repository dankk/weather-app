import { GET_CITY_BY_NAME } from "./graphql/queries";
const URL = "http://localhost:4000/";

export const getWeatherForCity = async (city) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_CITY_BY_NAME,
      variables: { name: city },
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();

  return result?.data?.getCityByName?.weather;
};
