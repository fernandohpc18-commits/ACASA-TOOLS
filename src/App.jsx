import React, { useState } from 'react';
import { 
  TrendingUp, BarChart3, LayoutDashboard, Wallet, 
  Settings, Shield, Bell, Moon, Sun, Search, Menu
} from "lucide-react";
import { Toaster } from 'sonner';

// Importação dos componentes core
import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';
import AssetPanel from './components/market/AssetPanel';
import InvestmentSimulator from './components/investment/InvestmentSimulator';

export default function App() {
  const [activeTab, setActiveTab] = useState('trades');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const sampleTrades = [
    { id: 1, ativo: 'BTCUSD', resultado: 450, data: '2026-01-10' },
    { id: 2, ativo: 'AAPL', resultado: -120, data: '2026-01-12' },
    { id: 3, ativo: 'EURUSD', resultado: 300, data: '2026-01-14' }
  ];

  return (
    <div className={`${isDarkMode ? 'dark' : ''} selection:bg-blue-500/30`}>
      <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-500">
        
        {/* Sidebar Minimalista */}
        <aside className="hidden lg:flex w-72 flex-col bg-white dark:bg-[#0B1120] border-r border-slate-200 dark:border-slate-800/50">
          <div className="p-8 flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
              ACASA TOOLS
            </span>
          </div>

          <nav className="flex-1 px-4 space-y-1.5">
            {[
              { id: 'trades', label: 'Monitor de Trades', icon: TrendingUp },
              { id: 'market', label: 'Mercado em Tempo Real', icon: BarChart3 },
              { id: 'propfirms', label: 'PropFirms Hub', icon: LayoutDashboard },
              { id: 'wallet', label: 'Estratégia & Simulação', icon: Wallet },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-500/20' 
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <item.icon className="w-4.5 h-4.5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-100 dark:border-slate-800/50">
             <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors w-full"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </aside>

        {/* Área de Conteúdo Principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Header Superior Limpo */}
          <header className="h-20 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 flex items-center justify-between px-8 z-10">
            <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-900/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 w-96">
              <Search className="w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Buscar ativos ou métricas..." className="bg-transparent border-none outline-none text-xs w-full" />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-slate-400 cursor-pointer hover:text-blue-500" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                FH
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            {/* Seção Hero Informativa */}
            <div className="mb-10">
              <h2 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-500">
                {activeTab === 'trades' && "Visão Geral de Trading"}
                {activeTab === 'market' && "Market Intelligence"}
                {activeTab === 'propfirms' && "Proprietary Trading Hub"}
                {activeTab === 'wallet' && "Investment Architect"}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {activeTab === 'trades' ? "Análise preditiva baseada em IA e histórico detalhado." : "Monitoramento institucional em tempo real."}
              </p>
            </div>

            {/* Conteúdo Dinâmico */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
              {activeTab === 'trades' && (
                <>
                  <TradeForecasting />
                  <div className="bg-white dark:bg-[#0B1120] p-6 rounded-3xl border border-slate-200 dark:border-slate-800/50 shadow-sm">
                    <AdvancedCharts trades={sampleTrades} initialBalance={10000} />
                  </div>
                </>
              )}

              {activeTab === 'market' && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  <AssetPanel symbol="BTCUSD" />
                  <AssetPanel symbol="ETHUSD" />
                  <AssetPanel symbol="AAPL" />
                  <AssetPanel symbol="XAUUSD" />
                </div>
              )}

              {activeTab === 'wallet' && <InvestmentSimulator />}
            </div>
          </main>
        </div>
      </div>
      <Toaster position="bottom-right" theme={isDarkMode ? 'dark' : 'light'} expand={false} richColors />
    </div>
  );
}
