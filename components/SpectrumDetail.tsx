import React from 'react';
import { SpectrumBand, SpectrumType } from '../types';
import { Radiation, Zap, Eye, Radio, Activity, Sun, ShieldAlert } from 'lucide-react';

interface Props {
  band: SpectrumBand;
}

const SpectrumDetail: React.FC<Props> = ({ band }) => {
  const getIcon = (id: SpectrumType) => {
    switch (id) {
      case SpectrumType.GAMMA: return <Radiation className="w-12 h-12 text-purple-500" />;
      case SpectrumType.XRAY: return <Activity className="w-12 h-12 text-indigo-500" />;
      case SpectrumType.UV: return <Sun className="w-12 h-12 text-blue-400" />;
      case SpectrumType.VISIBLE: return <Eye className="w-12 h-12 text-green-400" />;
      case SpectrumType.INFRARED: return <Zap className="w-12 h-12 text-red-500" />;
      case SpectrumType.MICROWAVE: return <Activity className="w-12 h-12 text-orange-500" />;
      case SpectrumType.RADIO: return <Radio className="w-12 h-12 text-yellow-500" />;
      default: return <Activity />;
    }
  };

  const isVisible = band.id === SpectrumType.VISIBLE;

  return (
    <div className="bg-space-blue/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl animate-fade-in transition-all duration-500">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Header Section */}
        <div className="flex-shrink-0 flex flex-col items-center p-4 bg-black/20 rounded-xl min-w-[150px]">
          {getIcon(band.id)}
          <h2 className="text-2xl font-bold mt-4 text-center text-white">{band.name}</h2>
          <div className="mt-2 text-xs text-gray-400 font-mono text-center">
            {band.frequencyRange}<br/>
            {band.wavelengthRange}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-grow space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-neon-blue mb-1">Mô tả</h3>
            <p className="text-gray-300 leading-relaxed">{band.description}</p>
          </div>

          {isVisible && (
            <div className="my-4 p-4 bg-black/40 rounded-lg border border-white/5">
               <h3 className="text-sm font-semibold text-white mb-2">Quang phổ ánh sáng (380nm - 760nm)</h3>
               <div className="h-12 w-full rounded-md" style={{ background: 'linear-gradient(to right, #8b00ff, #4b0082, #0000ff, #00ff00, #ffff00, #ff7f00, #ff0000)' }}></div>
               <div className="flex justify-between text-xs text-gray-400 mt-1 font-mono">
                 <span>380nm (Tím)</span>
                 <span>760nm (Đỏ)</span>
               </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/20">
              <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
                <Zap size={16} /> Ứng dụng
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {band.applications.map((app, i) => <li key={i}>{app}</li>)}
              </ul>
            </div>

            <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/20">
              <h4 className="text-red-400 font-medium mb-2 flex items-center gap-2">
                <ShieldAlert size={16} /> Nguy hiểm / Lưu ý
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {band.dangers.map((danger, i) => <li key={i}>{danger}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpectrumDetail;