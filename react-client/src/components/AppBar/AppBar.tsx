import { SunMoonIcon } from 'lucide-react'
import WrapperBar from '../common/WrapperBar'

export type AppBarProps = {
  location?: string;
}

export default function AppBar({ location }: AppBarProps) {
  return (
    <WrapperBar>
      <h1 className="flex text-2xl gap-2 items-center"><SunMoonIcon />Weather App</h1>
      {location && <p>{location}</p>}
    </WrapperBar>
  );
}