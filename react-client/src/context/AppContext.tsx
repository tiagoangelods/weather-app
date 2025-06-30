import {createContext, useContext, useState, useTransition} from 'react';
import {currentWeather, forecastWeather, type weatherDto, WeatherService} from '@weather-app/shared-lib';

type AppContextType = {
  current: currentWeather;
  forecast: forecastWeather;
  loading: boolean;
  fetchWeather: (city: string) => void;
}
const WEATHER_API_URL = import.meta.env.VITE_API_URL;
const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
}

export default function AppContextProvider({children}: {children: React.ReactNode}) {
  const [current, setCurrent] = useState<currentWeather | null>(null);
  const [forecast, setForecast] = useState<forecastWeather | null>(null);
  const [loading, startTransition] = useTransition();
  const weatherService = new WeatherService(String(WEATHER_API_URL));

  const fetchWeather = (city: string) => {
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
    startTransition(async () => {
      try {
        const {current = null, forecast = null} = await weatherService.getCurrentWeatherAndForecast(city);
        setCurrent(current);
        setForecast(forecast?.slice(0, 5) || []);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
      }
    });
  }

  return (
    <AppContext.Provider value={{
      current: current as unknown as currentWeather,
      forecast: forecast as unknown as forecastWeather,
      loading,
      fetchWeather
    }}>
      {children}
    </AppContext.Provider>
  );
}
