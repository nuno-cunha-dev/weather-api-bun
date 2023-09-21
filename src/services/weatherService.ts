import { UserLocation } from "../types";
import openWeatherMapProvider from "../providers/openWeatherMapProvider";
import { Unit } from "../enums";

export default {
  async getCurrent(userLocation: UserLocation) {
    const weather = await openWeatherMapProvider.getCurrentWeather(userLocation, Unit.Celsius);
    weather.temperature = Math.floor(weather.temperature);
    weather.description = weather.description.charAt(0).toUpperCase() + weather.description.slice(1);

    return weather;
  }
}