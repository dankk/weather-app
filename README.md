# React/Redux Weather App

An app that fetches weather data based on the user's detected location using [Open Weather Map](https://openweathermap.org/api) and [graphql-weather-api](https://github.com/konstantinmuenster/graphql-weather-api). First the user's city is fetched using Open Weather Map's reverse geocoding API, then the city name is used to fetch weather data using graphql-weather-api.

## How to Install

This project requires an [Open Weather Map](https://openweathermap.org/api) api key to use reverse geocoding. Create an .env file and add the following variable: `REACT_APP_API_KEY=<YOUR-APP-ID>`

```sh
npm install
npm start
```
