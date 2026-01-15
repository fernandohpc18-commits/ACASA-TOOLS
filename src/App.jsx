import React, { useState } from 'react';
import { LayoutDashboard, TrendingUp, BarChart3, Settings, Shield } from "lucide-react";
import { Toaster } from 'sonner';

// Importando os componentes que criamos
import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';

export default function App() {
  const [activeTab, setActiveTab] = useState('trades');
  
  // Dados simulados baseados no seu Script 2026
  const sampleTrades = [
    { id: 1, ativo: 'BTCUSD', resultado: 450, data: '2026-01-10' },
    { id: 2, ativo: 'AAPL', resultado: -120, data: '2026-01-12' },
    { id: 3, ativo: 'EURUSD', resultado: 300, data: '2026-01-14' }
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center gap-2 mb-8 px-2">
          <Shield className="text-blue-600 w-8 h-8" />
          <h1 className="font-bold text-xl tracking-tight">ACASA TOOLS</h1>
        </div>
        
        <nav className="space-y-1">
          {[
            { id: 'trades', label: 'Trade Monitor', icon: TrendingUp },
            { id: 'propfirms', label: 'PropFirms', icon: LayoutDashboard },
            { id: 'market', label: 'Análise Mercado', icon: BarChart3 },
            { id: 'config', label: 'Configurações', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                  : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-auto p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Plataforma Financeira</h2>
          <p className="text-slate-500">Versão 1.0.0 - Janeiro 2026</p>
        </header>

        {activeTab === 'trades' && (
          <div className="space-y-8">
            <TradeForecasting />
            <AdvancedCharts trades={sampleTrades} initialBalance={10000} />
          </div>
        )}

        {activeTab === 'propfirms' && (
          <div className="p-12 text-center border-2 border-dashed rounded-xl">
            <p className="text-slate-500">Módulo de PropFirms: Em carregamento de entidades...</p>
          </div>
        )}
      </main>
      
      <Toaster position="top-right" richColors />
    </div>
  );
}
