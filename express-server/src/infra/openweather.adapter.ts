import { type currentWeather, type forecastWeather } from '@weather-app/shared-lib/entities/weather.type';
import { IWeather } from './weather.interface';
import fetch from 'node-fetch';

const OPENWEATHER_KEY = process.env.OPENWEATHER_KEY;

export class OpenWeatherAdapter implements IWeather {
  async getCurrentWeather(city: string): Promise<currentWeather> {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_KEY}&units=metric&exclude=current,minutely,hourly,alerts`
    );
    return res.json();
  }

  async getForecast(city: string): Promise<forecastWeather> {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPENWEATHER_KEY}&units=metric&exclude=current,minutely,hourly,alerts`
    );
    return res.json();
  }
}
