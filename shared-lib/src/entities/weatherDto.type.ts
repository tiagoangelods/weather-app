export type wheatherDto = {
  currentTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  forecast: Array<{
    date: string;
    temperature: {
      min: number;
      max: number;
    };
  }>;
}