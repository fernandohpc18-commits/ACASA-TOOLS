import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Calculator, ShieldCheck, TrendingUp } from "lucide-react";

export default function InvestmentSimulator() {
  const [perfil, setPerfil] = useState('Moderado');
  const [capital, setCapital] = useState(100000);

  const alocacaoData = {
    Conservador: [{ name: 'Renda Fixa', value: 80, color: '#3B82F6' }, { name: 'FIIs', value: 20, color: '#F59E0B' }],
    Moderado: [{ name: 'Ações BR', value: 40, color: '#10B981' }, { name: 'Inter', value: 30, color: '#8B5CF6' }, { name: 'RF', value: 30, color: '#3B82F6' }],
    Agressivo: [{ name: 'Ações', value: 50, color: '#10B981' }, { name: 'Crypto', value: 20, color: '#EF4444' }, { name: 'Outros', value: 30, color: '#8B5CF6' }]
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold mb-6 text-sm uppercase tracking-wider text-slate-400">
            <Calculator size={16}/> Configurar Simulação
          </h3>
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Aporte Inicial (R$)</label>
              <input type="number" value={capital} onChange={(e) => setCapital(Number(e.target.value))} className="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border-none mt-2 font-bold outline-none ring-2 ring-transparent focus:ring-blue-500 transition-all"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Perfil de Risco</label>
              {['Conservador', 'Moderado', 'Agressivo'].map(p => (
                <button key={p} onClick={() => setPerfil(p)} className={`p-3 rounded-xl text-sm font-bold transition-all ${perfil === p ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-800 text-slate-500'}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold mb-6 text-sm uppercase tracking-wider text-green-500">
            <ShieldCheck size={16}/> Composição da Carteira
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={alocacaoData[perfil]} innerRadius={60} outerRadius={90} paddingAngle={8} dataKey="value">
                  {alocacaoData[perfil].map((entry, index) => <Cell key={index} fill={entry.color} />)}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="middle" align="right" layout="vertical" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
