import React, { useState } from 'react';
import WaveCanvas from './components/WaveCanvas';
import { SPECTRUM_DATA } from './constants';
import SpectrumDetail from './components/SpectrumDetail';
import { Info, ArrowRight, ArrowLeft } from 'lucide-react';
import { SpectrumBand } from './types';

const App: React.FC = () => {
  const [selectedBand, setSelectedBand] = useState<SpectrumBand>(SPECTRUM_DATA[3]); // Default to Visible Light

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-neon-blue selection:text-black">
      {/* Dynamic Background */}
      <WaveCanvas />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
            Mô Hình Thang Sóng Điện Từ
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Khám phá toàn bộ phổ điện từ, từ tia Gamma năng lượng cao đến sóng vô tuyến. 
            Chọn một vùng sóng bên dưới để xem chi tiết.
          </p>
        </header>

        {/* Main Interactive Scale */}
        <section className="mb-12">
          <div className="bg-space-blue/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-8 shadow-xl">
            
            {/* Axis Labels */}
            <div className="flex justify-between text-xs md:text-sm text-gray-400 font-mono mb-2 px-2">
              <span className="flex items-center gap-1"><ArrowLeft size={14}/> Bước sóng ngắn (Tần số cao)</span>
              <span className="flex items-center gap-1">Bước sóng dài (Tần số thấp) <ArrowRight size={14}/></span>
            </div>

            {/* The Bar */}
            <div className="relative h-24 md:h-32 flex rounded-lg overflow-hidden cursor-pointer ring-1 ring-white/10 group">
              {SPECTRUM_DATA.map((band) => (
                <div
                  key={band.id}
                  onClick={() => setSelectedBand(band)}
                  className={`relative flex-1 transition-all duration-300 hover:flex-[1.5] group/band
                    ${selectedBand.id === band.id ? 'flex-[1.5] ring-2 ring-white z-10 scale-105' : 'opacity-80 hover:opacity-100'}
                  `}
                  style={{ 
                    background: band.id === 'VISIBLE' ? band.color : band.color,
                    backgroundBlendMode: 'overlay'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  
                  {/* Label inside bar */}
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <span className={`text-[10px] md:text-xs font-bold text-white drop-shadow-md px-1 py-0.5 rounded
                       ${selectedBand.id === band.id ? 'bg-black/50' : ''}
                    `}>
                      {band.name}
                    </span>
                  </div>

                  {/* Hover info tooltip */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/band:opacity-100 transition-opacity">
                     <Info size={16} className="text-white/80" />
                  </div>
                </div>
              ))}
            </div>

            {/* Scale Markers */}
            <div className="flex justify-between mt-2 px-4 text-[10px] md:text-xs text-gray-500 font-mono">
              <span>10⁻¹² m</span>
              <span>10⁻⁹ m</span>
              <span>10⁻⁶ m</span>
              <span>10⁻³ m</span>
              <span>1 m</span>
              <span>10³ m</span>
            </div>
          </div>
        </section>

        {/* Content Area: Details Only */}
        <div className="max-w-5xl mx-auto">
          <SpectrumDetail band={selectedBand} />
        </div>
      </div>
    </div>
  );
};

export default App;