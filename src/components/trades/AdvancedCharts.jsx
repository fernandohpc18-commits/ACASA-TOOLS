import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function AdvancedCharts({ trades, initialBalance }) {
  const operationsData = trades.map((trade, idx) => ({
    index: idx + 1,
    resultado: trade.resultado,
    impacto: ((trade.resultado / initialBalance) * 100).toFixed(2),
    fill: trade.resultado >= 0 ? '#10B981' : '#EF4444'
  }));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Resultado por Operação ($)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={operationsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="resultado" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Impacto no Saldo (%)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={operationsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="impacto" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
