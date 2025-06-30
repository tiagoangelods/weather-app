import { type weatherDto } from '../entities/weather.type';

export default class WeatherService {
  constructor(private readonly apiUrl: string) {}
  async getCurrentWeatherAndForecast(city: string): Promise<weatherDto> {
    if (!this.apiUrl) {
      throw new Error('WEATHER_API_URL is not defined');
    }
    const result = await fetch(`${this.apiUrl}/weather/?city=${encodeURIComponent(city)}`);
    if (!result.ok) {
      throw new Error(`Error fetching weather data: ${result.statusText}`);
    }
    const data = await result.json();
    return data;
  }
}
