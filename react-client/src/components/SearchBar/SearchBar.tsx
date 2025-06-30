import {useRef} from 'react';
import {useAppContext} from '../../context/AppContext';

export default function SearchBar() {
  const { fetchWeather, loading } = useAppContext()
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex items-center justify-center py-4 px-4">
      <input
        readOnly={loading}
        ref={inputRef}
        type="text"
        placeholder="Search city..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-auto focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/20 placeholder:text-white/60 text-white"
      />
      <button disabled={loading} onClick={() => fetchWeather(String(inputRef.current?.value))} className="border border-gray-300 rounded-lg px-4 py-2 ml-2 bg-purple-500 text-white hover:bg-purple-600">Search</button>
    </div>
  );
}