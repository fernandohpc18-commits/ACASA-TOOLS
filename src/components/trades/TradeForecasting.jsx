import React from 'react';
import { TrendingUp, Activity } from "lucide-react";

export default function TradeForecasting() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[24px] shadow-lg shadow-emerald-500/10 text-white relative overflow-hidden group">
        <TrendingUp className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-10 group-hover:scale-110 transition-transform" />
        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Cenário Otimista</p>
        <h4 className="text-4xl font-black mt-2 leading-none">$1,200.00</h4>
        <p className="text-[10px] mt-4 font-medium opacity-60 uppercase tracking-tighter">Projeção Baseada em IA</p>
      </div>

      <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[24px] shadow-lg shadow-indigo-500/10 text-white relative overflow-hidden group">
        <Activity className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-10 group-hover:scale-110 transition-transform" />
        <p className="text-xs font-bold uppercase tracking-widest opacity-80">Score de Risco</p>
        <h4 className="text-4xl font-black mt-2 leading-none">65/100</h4>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded uppercase">Moderado</span>
        </div>
      </div>
    </div>
  );
}
