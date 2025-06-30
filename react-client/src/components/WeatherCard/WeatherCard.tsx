type WeatherCardProps = {
  title?: string; // because could be city name or date
  temperature?: number;
  condition?: string;
}

export default function WeatherCard({ title, temperature, condition }: WeatherCardProps) {
  return (
    <div className="flex flex-col items-center justify-center backdrop-blur-sm bg-black/60 p-6 rounded-xl text-white w-full gap-4">
      <h2 className="text-4xl">{title}</h2>
      <p className="text-3xl">{temperature}</p>
      <p className="text-2xl">{condition}</p>
    </div>
  );
} 