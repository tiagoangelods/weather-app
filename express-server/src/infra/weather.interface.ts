import { type currentWeather, type forecastWeather } from '@weather-app/shared-lib/entities/weather.type';

export interface IWeather {
  getCurrentWeather(city: string): Promise<currentWeather>;
  getForecast(city: string): Promise<forecastWeather>;
}
