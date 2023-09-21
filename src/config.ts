export default {
  port: process.env.PORT || 3000,
  ipInfoToken: process.env.IP_INFO_TOKEN || '',
  openWeatherMap: {
    apiKey: process.env.OPEN_WEATHER_MAP_API_KEY || '',
    apiUrl: process.env.OPEN_WEATHER_MAP_API_URL || 'https://api.openweathermap.org/data/2.5/weather',
  },
};