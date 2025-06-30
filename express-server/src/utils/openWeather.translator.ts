import {type weatherDto, type currentWeather} from '@weather-app/shared-lib/entities/weather.type';

export const openWeatherTranslator = (data: unknown): weatherDto => {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid weather data');
  }

  const current = translateCurrentWeather(data?.current);

  const daily: Record<string, any[]> = {};

  data?.forecast?.list?.forEach((entry: any) => {
    const date = entry.dt_txt.split(' ')[0]; // e.g., "2024-06-29"
    if (!daily[date]) daily[date] = [];
    daily[date].push(entry);
  });

  const forecast = Object.keys(daily).slice(0, 5).map(date => {
    const dayEntries = daily[date];
    // Try to find 12:00 forecast
    const midday = dayEntries.find(e => e.dt_txt.includes('12:00:00'));
    const chosen = midday || dayEntries[0]; // fallback
    return translateCurrentWeather(chosen);
  })

  return { current, forecast };
};


const translateCurrentWeather = (data: unknown): currentWeather => {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid current weather data');
  }

  return {
    city: String(data?.name),
    timezone: Number(data?.timezone || 0),
    temperature: Number(data?.main?.temp || 0),
    feelsLike: Number(data?.main?.feels_like || 0),
    humidity: Number(data?.main?.humidity || 0),
    windSpeed: Number(data?.wind?.speed || 0),
    datetime: Number(data?.dt || 0),
    condition: String(data?.weather?.[0]?.main || ''),
    conditionDescription: String(data?.weather?.[0]?.description || ''),
  };
};