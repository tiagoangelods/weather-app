import { AppBar, SearchBar, WeatherCard, ConfigurationBar } from "../components";
import ForecastList from './ForecastList'
import { useAppContext } from "../context/AppContext";
import { getIconByCondition } from "../utils/condition-icons.utils";

export function App() {
  const { loading, current = [], forecast = [] } = useAppContext();
  return (
    <>
      <AppBar />
      <main className="flex flex-col items-center w-full h-full p-8">
        <SearchBar />
        <section className={`flex flex-col items-center justify-center mt-12 w-full ${loading ? "animate-pulse":""}`}>
          <WeatherCard title={current?.city} temperature={Number.parseInt(current?.temperature)} condition={(
            <span className="flex items-center justify-between gap-4">{current?.conditionDescription} {getIconByCondition(current?.condition) as any}</span>)} />
          <section className="flex items-center justify-between grid-cols-5 mt-8 w-full gap-4">
            <ForecastList forecast={forecast} />
          </section>
        </section>
      </main>
      <ConfigurationBar />
    </>
  );
}

export default App;
