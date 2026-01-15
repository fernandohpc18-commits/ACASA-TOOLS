import React, { useState } from 'react';
import { 
  LayoutDashboard, TrendingUp, BarChart3, Wallet, 
  Shield, Bell, Moon, Sun, FileText, ArrowRightLeft, Radio, Layers
} from "lucide-react";
import { Toaster } from 'sonner';

// Importação dos componentes core
import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';
import AssetPanel from './components/market/AssetPanel';
import InvestmentSimulator from './components/investment/InvestmentSimulator';
import DocumentacaoCompleta from './components/DOCUMENTACAO_COMPLETA';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard PropFirms', icon: LayoutDashboard },
    { id: 'market', label: 'Análise de Mercado', icon: BarChart3 },
    { id: 'wallet', label: 'Simulador de Investimentos', icon: Wallet },
    { id: 'trades', label: 'Monitor de Trades', icon: TrendingUp },
    { id: 'docs', label: 'Documentação Técnica', icon: FileText },
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-[#F0F2F5] dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* SIDEBAR */}
        <aside className="w-64 bg-white dark:bg-[#0B1120] border-r border-slate-200 dark:border-slate-800 flex flex-col shadow-xl z-20">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                <Shield className="text-white w-6 h-6" />
              </div>
              <h1 className="font-bold text-lg leading-none">PropFirm Monitor</h1>
            </div>
          </div>
          
          <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto custom-scrollbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all ${
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

          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-bold">
              <span className="flex items-center gap-2">
                {isDarkMode ? <Sun size={14}/> : <Moon size={14}/>} {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </button>
          </div>
        </aside>

        {/* CONTEÚDO */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-16 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">{activeTab}</span>
            <div className="flex items-center gap-4">
              <Bell size={20} className="text-slate-400" />
              <div className="h-8 w-8 rounded-full bg-blue-600" />
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
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
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <AdvancedCharts trades={sampleTrades} initialBalance={10000} />
                  </div>
                </div>
              )}

              {activeTab === 'market' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <AssetPanel symbol="BTCUSD" />
                  <AssetPanel symbol="AAPL" />
                </div>
              )}

              {activeTab === 'wallet' && <InvestmentSimulator />}
              {activeTab === 'docs' && <DocumentacaoCompleta />}
            </div>
          </main>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase">{label}</p>
        <p className="text-2xl font-black mt-1">{value}</p>
      </div>
      <div className={`${color} p-4 rounded-2xl text-white shadow-lg`}><Icon size={24} /></div>
    </div>
  );
}

const sampleTrades = [{ id: 1, ativo: 'BTCUSD', resultado: 450, data: '2026-01-10' }];
