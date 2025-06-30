import { render } from '@testing-library/react';
import WeatherCard from './WeatherCard';
describe('WeatherCard', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <WeatherCard title="New York" temperature={25} condition="Sunny" />
    )

    expect(getByText('New York')).toBeTruthy()
    expect(getByText('25')).toBeTruthy()
    expect(getByText('Sunny')).toBeTruthy()
  });
});