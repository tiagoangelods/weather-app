import { OpenWeatherAdapter } from '../infra/openweather.adapter';
import { AccuWeatherAdapter } from '../infra/accuweather.adapter';
import { IWeather } from '../infra/weather.interface';

const providerMap: Record<string, IWeather> = {
  openweather: new OpenWeatherAdapter(),
  accuweather: new AccuWeatherAdapter(),
};

export function getWeatherAdapter(provider: string): IWeather {
  return providerMap[provider] || providerMap.openweather;
}
