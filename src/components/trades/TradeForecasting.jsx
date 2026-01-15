import React from 'react';
import { TrendingUp, AlertTriangle } from "lucide-react";

export default function TradeForecasting() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 bg-white dark:bg-slate-900 border-l-4 border-green-500 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
          <TrendingUp className="w-4 h-4" /> Projeção Semanal
        </div>
        <p className="text-xs text-slate-400">Cenário Otimista</p>
        <span className="text-2xl font-bold text-green-600">+$1,200.00</span>
      </div>

      <div className="p-6 bg-white dark:bg-slate-900 border-l-4 border-red-500 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
          <AlertTriangle className="w-4 h-4" /> Score de Risco
        </div>
        <span className="text-2xl font-bold">65/100</span>
        <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded w-fit mt-2">Moderado</div>
      </div>
    </div>
  );
}
