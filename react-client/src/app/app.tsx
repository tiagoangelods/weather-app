import { AppBar, SearchBar, WeatherCard, ConfigurationBar } from "../components";

export function App() {
  return (
    <>
      <AppBar />
      <main className="flex flex-col items-center w-full h-full p-8">
        <SearchBar />
        <section className="flex flex-col items-center justify-center mt-12 w-full">
          <WeatherCard title="New York" temperature={25} condition="Sunny" />
          <section className="flex items-center justify-between grid-cols-5 mt-8 w-full gap-4">
            <WeatherCard title="Los Angeles" temperature={30} condition="Cloudy" />
            <WeatherCard title="Chicago" temperature={20} condition="Rainy" />
            <WeatherCard title="Miami" temperature={28} condition="Sunny" />
            <WeatherCard title="Seattle" temperature={18} condition="Windy" />
            <WeatherCard title="Denver" temperature={22} condition="Snowy" />
          </section>
        </section>
      </main>
      <ConfigurationBar />
    </>
  );
}

export default App;
