// src/adapters/accuweather.adapter.ts
import { IWeather } from './weather.interface';
import fetch from 'node-fetch';

const ACCUWEATHER_KEY = process.env.ACCUWEATHER_KEY;

export class AccuWeatherAdapter implements IWeather {
  async getLocationKey(city: string) {
    const res = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${ACCUWEATHER_KEY}&q=${city}`
    );
    const data = await res.json();
    return data[0]?.Key;
  }

  async getCurrentWeather(city: string) {
    const key = await this.getLocationKey(city);
    if (!key) throw new Error('City not found');
    const res = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${ACCUWEATHER_KEY}`
    );
    return res.json();
  }

  async getForecast(city: string) {
    const key = await this.getLocationKey(city);
    if (!key) throw new Error('City not found');
    const res = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${ACCUWEATHER_KEY}&metric=true`
    );
    return res.json();
  }
}
