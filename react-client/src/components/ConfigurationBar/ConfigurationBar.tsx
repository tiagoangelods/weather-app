import {RefreshCcw} from 'lucide-react'
import WrapperBar from '../common/WrapperBar';

export default function ConfigurationBar() {
  return (
    <WrapperBar className="fixed bottom-0 left-0 right-0 z-50 text-white">
      <span className="text-2xl">Last update: 10 minutes ago</span>
      <div className="flex items-center gap-4">
        <span className="text-sm">Update every</span>
        <input className="bg-transparent border-b border-b-white/50 focus:border-white w-10 text-center" type="number" />
        <span className="text-sm">minutes</span>
      </div>
      <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
        <RefreshCcw/>
      </button>
    </WrapperBar>
  );
}