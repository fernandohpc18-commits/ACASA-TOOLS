import React, { useState } from 'react';
import { 
  LayoutDashboard, TrendingUp, BarChart3, Wallet, 
  Shield, Bell, Moon, Sun, FileText, Settings
} from "lucide-react";

import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';
import AssetPanel from './components/market/AssetPanel';

export default function App() {
  const [activeTab, setActiveTab] = useState('trades');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard PropFirms', icon: LayoutDashboard },
    { id: 'market', label: 'Análise de Mercado', icon: BarChart3 },
    { id: 'wallet', label: 'Simulador de Investimentos', icon: Wallet },
    { id: 'trades', label: 'Monitor de Trades', icon: TrendingUp },
    { id: 'docs', label: 'Documentação Técnica', icon: FileText },
  ];

  return (
    <div className="flex h-screen bg-[#0F172A] text-slate-100 overflow-hidden">
      
      {/* SIDEBAR INSTITUCIONAL */}
      <aside className="w-72 bg-[#141B2D] border-r border-slate-800 flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
            <Shield className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none tracking-tight">PropFirm Monitor</h1>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Análise de Mercado</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                activeTab === item.id ? 'sidebar-item-active' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between px-2 text-slate-500">
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
             <div className="w-8 h-4 bg-blue-600 rounded-full relative">
               <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
             </div>
             Dark Mode
           </div>
           <Settings size={18} className="cursor-pointer hover:text-white" />
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO */}
      <main className="flex-1 overflow-y-auto p-10 bg-[#0F172A]">
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black uppercase tracking-tight text-blue-500">
            {activeTab === 'trades' ? "Monitor de Trades" : activeTab.toUpperCase()}
          </h2>
          <div className="flex items-center gap-6">
            <Bell className="text-slate-500 cursor-pointer" />
            <div className="flex items-center gap-3 bg-[#1E293B] px-4 py-2 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-widest uppercase">Live Data</span>
            </div>
          </div>
        </header>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {activeTab === 'trades' && (
            <>
              <TradeForecasting />
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
                  Curva de Equity
                </h3>
                <AdvancedCharts trades={[{resultado: 100}, {resultado: -50}]} initialBalance={10000} />
              </div>
              
              {/* Cards de Métricas Estilo Imagem */}
              <div className="grid grid-cols-4 gap-6">
                <MetricSmallCard label="Perda Diária" value="1.72%" color="text-red-400" />
                <MetricSmallCard label="Drawdown" value="8.33%" color="text-orange-400" />
                <MetricSmallCard label="Melhor Trade" value="3.98%" color="text-emerald-400" />
                <MetricSmallCard label="Consistência" value="8.38%" color="text-blue-400" />
              </div>
            </>
          )}

          {activeTab === 'market' && (
             <div className="grid grid-cols-2 gap-6">
               <AssetPanel symbol="BTCUSD" />
               <AssetPanel symbol="XAUUSD" />
             </div>
          )}
        </div>
      </main>
    </div>
  );
}

function MetricSmallCard({ label, value, color }) {
  return (
    <div className="glass-card p-5 flex flex-col gap-1">
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
      <p className={`text-xl font-black ${color}`}>{value}</p>
    </div>
  );
}
