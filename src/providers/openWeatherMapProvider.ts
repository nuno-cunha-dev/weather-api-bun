import { UserLocation } from "../types";
import config from "../config";
import OpenWeatherMapResponse from "./types";
import { Unit } from "../enums";

export default {
  async getCurrentWeather(userLocation: UserLocation, unit: Unit) {
    const openWeatherMapResponse = await fetchWeatherData(userLocation, unit);

    return {
      temperature: openWeatherMapResponse.main.temp,
      unit,
      description: openWeatherMapResponse.weather[0].description,
      city: openWeatherMapResponse.name,
      icon: openWeatherMapResponse.weather[0].icon,
    };
  }
}

async function fetchWeatherData(userLocation: UserLocation, unit: Unit): Promise<OpenWeatherMapResponse> {
  if (!config.openWeatherMap.apiKey) {
    throw new Error("OPEN_WEATHER_MAP_API_KEY is not set")
  }

  const urlParams = new URLSearchParams({
    lat: userLocation.geoLocation.lat,
    lon: userLocation.geoLocation.lon,
    units: getOpenWeatherMapUnit(unit),
    appid: config.openWeatherMap.apiKey,
  });

  const response = await fetch(`${config.openWeatherMap.apiUrl}?${urlParams.toString()}`);
  if (!response.ok) {
    throw new Error(`Error fetching weather data from: ${config.openWeatherMap.apiUrl}?${urlParams.toString()}`);
  }

  return await response.json();
}

function getOpenWeatherMapUnit(unit: Unit): string {
  switch (unit) {
    case Unit.Celsius:
      return 'metric';
    case Unit.Fahrenheit:
      return 'imperial';
    case Unit.Kelvin:
      return 'standard';
    default:
      throw new Error(`Unknown unit: ${unit}`);
  }
}