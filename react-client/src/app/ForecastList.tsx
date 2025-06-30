import {  forecastWeather } from '@weather-app/shared-lib';
import { WeatherCard } from "../components";
export default function ForecastList({forecast}: {forecast: forecastWeather}) {
  if (!forecast || forecast.length === 0) {
    return <></>;
  }

  return forecast?.map((item, index) => (
        <WeatherCard
          key={index}
          title={Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(item.datetime * 1000))}
          temperature={Number.parseInt(item.temperature)}
          condition={item.condition}
        />
      ));

}