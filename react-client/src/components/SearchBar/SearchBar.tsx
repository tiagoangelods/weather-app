import {useAppContext} from '../../context/AppContext';

export default function SearchBar() {
  const { fetchWeather, loading, city, setCity } = useAppContext()
  return (
    <div className="flex items-center justify-center py-4 px-4">
      <input
        readOnly={loading}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/20 placeholder:text-white/60 text-white"
      />
      <button disabled={loading} onClick={fetchWeather} className="border border-gray-300 rounded-lg px-4 py-2 ml-2 bg-purple-500 text-white hover:bg-purple-600">Search</button>
    </div>
  );
}