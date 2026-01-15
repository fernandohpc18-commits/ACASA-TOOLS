import React, { useEffect, useState } from 'react';
import { MarketDataService } from './MarketDataService';
import { TrendingUp, TrendingDown, Minus } from "lucide-react"; [cite: 2, 78]

export default function AssetPanel({ symbol }) {
  const [data, setData] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    async function load() {
      const quotes = await MarketDataService.fetchQuotes([symbol]); [cite: 53]
      const rsiSimulado = Math.random() * 100;
      const scenario = MarketDataService.analyzeScenario(quotes[0].price, rsiSimulado); [cite: 62]
      
      setData(quotes[0]);
      setAnalysis(scenario);
    }
    load();
  }, [symbol]);

  if (!data) return <div className="animate-pulse h-24 bg-slate-200 rounded-xl"></div>;

  return (
    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-bold text-lg">{data.symbol}</h4>
          <p className="text-2xl font-mono">${data.price.toFixed(2)}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 ${
          analysis.cenario === 'alta' ? 'bg-green-100 text-green-700' : 
          analysis.cenario === 'baixa' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {analysis.cenario === 'alta' && <TrendingUp size={14} />}
          {analysis.cenario === 'baixa' && <TrendingDown size={14} />}
          {analysis.cenario === 'consolidacao' && <Minus size={14} />}
          {analysis.cenario.toUpperCase()}
        </span>
      </div>
      <p className="text-xs text-slate-500 italic">Motivo: {analysis.motivo}</p> [cite: 63]
    </div>
  );
}
