import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Calculator, ShieldCheck, TrendingUp } from "lucide-react";

export default function InvestmentSimulator() {
  [cite_start]const [perfil, setPerfil] = useState('Moderado'); [cite: 89]
  [cite_start]const [capital, setCapital] = useState(10000); [cite: 89]

  const alocacaoData = {
    [cite_start]Conservador: [ [cite: 91]
      { name: 'Renda Fixa', value: 80, color: '#3B82F6' },
      { name: 'FIIs', value: 15, color: '#F59E0B' },
      { name: 'Ações BR', value: 5, color: '#10B981' }
    ],
    [cite_start]Moderado: [ [cite: 91]
      { name: 'Renda Fixa', value: 50, color: '#3B82F6' },
      { name: 'Ações BR', value: 25, color: '#10B981' },
      { name: 'Ações Inter', value: 15, color: '#8B5CF6' },
      { name: 'FIIs', value: 10, color: '#F59E0B' }
    ],
    [cite_start]Agressivo: [ [cite: 91]
      { name: 'Ações BR', value: 30, color: '#10B981' },
      { name: 'Ações Inter', value: 30, color: '#8B5CF6' },
      { name: 'Crypto', value: 20, color: '#EF4444' },
      { name: 'Renda Fixa', value: 10, color: '#3B82F6' },
      { name: 'Commodities', value: 10, color: '#F97316' }
    ]
  };

  return (
    <div className="space-y-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-sm font-bold">
            <Calculator size={16} /> Configurar Perfil
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-slate-500">Capital Inicial (R$)</label>
              <input 
                type="number" 
                value={capital} 
                onChange={(e) => setCapital(Number(e.target.value))}
                className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-slate-500">Perfil de Risco</label>
              {['Conservador', 'Moderado', 'Agressivo'].map(p => (
                <button 
                  key={p}
                  onClick={() => setPerfil(p)}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    perfil === p ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-sm font-bold">
            [cite_start]<ShieldCheck size={16} className="text-green-500" /> Composição Otimizada [cite: 91]
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={alocacaoData[perfil]}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {alocacaoData[perfil].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          [cite_start]<TrendingUp className="text-blue-600" size={20} /> Projeção de Patrimônio (5 anos) [cite: 92]
        </h3>
        <div className="h-48 bg-slate-50 dark:bg-slate-950 rounded-xl flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-800 text-slate-400">
           [cite_start]Gráfico de Projeção Linear - Perfil {perfil} ativo [cite: 99]
        </div>
      </div>
    </div>
  );
}
