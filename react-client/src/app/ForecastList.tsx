import {  forecastWeather } from '@weather-app/shared-lib';
import { WeatherCard } from "../components";
import { getIconByCondition } from '../utils/condition-icons.utils';
export default function ForecastList({forecast}: {forecast: forecastWeather}) {
  if (!forecast || forecast.length === 0) {
    return <></>;
  }

  return forecast?.map((item, index) => (
        <WeatherCard
          key={index}
          title={Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(new Date(item.datetime * 1000))}
          temperature={Number.parseInt(item.temperature)}
          condition={(
            <span className="flex items-center justify-between gap-4">{item?.conditionDescription} {getIconByCondition(item?.condition) as any}</span>
          )}
        />
      ));

}