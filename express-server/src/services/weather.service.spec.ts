import { getWeatherAdapter } from './weather.service';
describe('WeatherService', () => {
  it('should call the weather adapter with the correct parameters', async () => {
    const adapter = getWeatherAdapter('openweather');
    const spy = jest.spyOn(adapter, 'getCurrentWeather');
    await adapter.getCurrentWeather('Sydney, AU');
    expect(spy).toHaveBeenCalledWith('Sydney, AU');
  });
});
