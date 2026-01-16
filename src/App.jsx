import React, { useState } from 'react';
import { 
  LayoutDashboard, TrendingUp, BarChart3, Wallet, 
  Shield, Bell, Moon, Sun, FileText, Radio, Layers
} from "lucide-react";

import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';
import AssetPanel from './components/market/AssetPanel';
import InvestmentSimulator from './components/investment/InvestmentSimulator';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(true); // Iniciando em Dark para seguir a imagem

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-[#F0F2F5] dark:bg-[#020617] transition-colors duration-300">
        
        {/* SIDEBAR AZUL INSTITUCIONAL */}
        <aside className="w-64 bg-white dark:bg-[#0B1120] border-r border-slate-200 dark:border-slate-800 flex flex-col shadow-xl">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <h1 className="font-bold text-lg dark:text-white">PropFirm Monitor</h1>
            </div>
          </div>
          
          <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'market', label: 'Mercado', icon: BarChart3 },
              { id: 'wallet', label: 'Simulador', icon: Wallet },
              { id: 'trades', label: 'Monitor', icon: TrendingUp },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">
            <span className="text-sm font-bold text-blue-600 uppercase">{activeTab}</span>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
              {isDarkMode ? <Sun size={18} className="text-yellow-500"/> : <Moon size={18}/>}
            </button>
          </header>

          <main className="flex-1 overflow-y-auto p-8 bg-[#F0F2F5] dark:bg-[#020617]">
            <div className="max-w-7xl mx-auto space-y-8">
              {activeTab === 'dashboard' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <StatCard label="Total PropFirms" value="153" icon={Layers} color="bg-blue-500" />
                  <StatCard label="Score Médio" value="3.2" icon={Radio} color="bg-orange-500" />
                  <StatCard label="Avaliações" value="261.219" icon={TrendingUp} color="bg-emerald-500" />
                  <StatCard label="Máx. Alocação" value="$10.0M" icon={Shield} color="bg-purple-500" />
                </div>
              )}
              {activeTab === 'trades' && (
                <div className="space-y-8">
                  <TradeForecasting />
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <AdvancedCharts trades={[{resultado: 100}]} initialBalance={10000} />
                  </div>
                </div>
              )}
              {activeTab === 'market' && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"><AssetPanel symbol="BTCUSD" /></div>}
              {activeTab === 'wallet' && <InvestmentSimulator />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-transform hover:scale-105">
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-2xl font-black mt-1 dark:text-white">{value}</p>
      </div>
      <div className={`${color} p-4 rounded-2xl text-white shadow-lg`}><Icon size={24} /></div>
    </div>
  );
}
