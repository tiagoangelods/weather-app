import { type weatherDto } from '../entities/weather.type';
const WEATHER_API_URL = process.env.WEATHER_API_URL;

export class WeatherService {
  async getCurrentWeatherAndForecast(city: string): Promise<weatherDto> {
    if (!WEATHER_API_URL) {
      throw new Error('WEATHER_API_URL is not defined');
    }
    const result = await fetch(`${WEATHER_API_URL}/?city=${encodeURIComponent(city)}`);
    if (!result.ok) {
      throw new Error(`Error fetching weather data: ${result.statusText}`);
    }
    const data = await result.json();
    return data;
  }
}
