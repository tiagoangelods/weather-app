export type currentWeather = {
  city?: string;
  timezone?: number;
  temperature?: number;
  feelsLike?: number;
  humidity?: number;
  windSpeed?: number;
  datetime?: number;
  condition?: string;
  conditionDescription?: string;
}

export type forecastWeather = Array<currentWeather>;

export type weatherDto = {
  current: currentWeather;
  forecast: forecastWeather;
}