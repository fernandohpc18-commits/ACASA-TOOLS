import React, { useState } from 'react';
import { 
  LayoutDashboard, TrendingUp, BarChart3, Wallet, 
  Settings, Shield, Bell, Moon, Sun, Search, 
  Users, Layers, ArrowRightLeft, Radio, FileText
} from "lucide-react";
import { Toaster } from 'sonner';

// Importação dos seus componentes especializados
import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';
import AssetPanel from './components/market/AssetPanel';
import InvestmentSimulator from './components/investment/InvestmentSimulator';
import DocumentacaoCompleta from './components/DOCUMENTACAO_COMPLETA';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Menu de Navegação conforme as imagens
  const navItems = [
    { id: 'dashboard', label: 'Dashboard PropFirms', icon: LayoutDashboard },
    { id: 'market', label: 'Análise de Mercado', icon: BarChart3 },
    { id: 'wallet', label: 'Simulador de Investimentos', icon: Wallet },
    { id: 'trades', label: 'Monitor de Trades', icon: TrendingUp },
    { id: 'compare', label: 'Comparar Firms', icon: ArrowRightLeft },
    { id: 'alerts', label: 'Alertas Personalizados', icon: Bell },
    { id: 'docs', label: 'Documentação Técnica', icon: FileText },
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-[#F0F2F5] dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* SIDEBAR PROFISSIONAL */}
        <aside className="w-64 bg-white dark:bg-[#0B1120] border-r border-slate-200 dark:border-slate-800 flex flex-col shadow-xl">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/30">
                <Shield className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-none">PropFirm Monitor</h1>
                <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Análise de Mercado</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">Navegação</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold"
            >
              <div className="flex items-center gap-2">
                {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </div>
              <div className={`w-8 h-4 rounded-full transition-colors ${isDarkMode ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
            </button>
          </div>
        </aside>

        {/* ÁREA DE CONTEÚDO PRINCIPAL */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* TOPBAR */}
          <header className="h-16 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shadow-sm">
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{activeTab.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full relative">
                <Bell size={18} className="text-slate-500" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600"></div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            
            {/* RENDERIZAÇÃO DINÂMICA DE MÓDULOS */}
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* ABA: DASHBOARD PROPFIRMS */}
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <StatCard label="Total de PropFirms" value="153" icon={Layers} color="bg-blue-500" />
                    <StatCard label="Score Médio" value="3.2" icon={Radio} color="bg-orange-500" />
                    <StatCard label="Total de Avaliações" value="261.219" icon={TrendingUp} color="bg-emerald-500" />
                    <StatCard label="Máx. Alocação" value="$10.0M" icon={Shield} color="bg-purple-500" />
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <LayoutDashboard className="text-blue-600" size={20} />
                      Filtros Avançados
                    </h3>
                    <div className="h-40 border-2 border-dashed rounded-2xl flex items-center justify-center text-slate-400">
                      Interface de Tabela de PropFirms conforme Imagem [cite: 324, 340]
                    </div>
                  </div>
                </div>
              )}

              {/* ABA: MONITOR DE TRADES */}
              {activeTab === 'trades' && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <TradeForecasting />
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <AdvancedCharts trades={sampleTrades} initialBalance={10000} />
                  </div>
                </div>
              )}

              {/* ABA: ANÁLISE DE MERCADO */}
              {activeTab === 'market' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <AssetPanel symbol="PETR4.SA" />
                  <AssetPanel symbol="VALE3.SA" />
                  <AssetPanel symbol="ITUB4.SA" />
                  <AssetPanel symbol="BBDC4.SA" />
                </div>
              )}

              {/* ABA: SIMULADOR DE INVESTIMENTOS */}
              {activeTab === 'wallet' && <InvestmentSimulator />}

              {/* ABA: DOCUMENTAÇÃO */}
              {activeTab === 'docs' && <DocumentacaoCompleta />}

            </div>
          </main>
        </div>
      </div>
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

// Componente Interno de Cards de Estatística (Estilo Imagem 31)
function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-transform hover:scale-[1.02] cursor-default">
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase mb-1">{label}</p>
        <p className="text-2xl font-black">{value}</p>
      </div>
      <div className={`${color} p-3 rounded-2xl text-white shadow-lg`}>
        <Icon size={24} />
      </div>
    </div>
  );
}

const sampleTrades = [
  { id: 1, ativo: 'BTCUSD', resultado: 450, data: '2026-01-10' },
  { id: 2, ativo: 'PETR4', resultado: -120, data: '2026-01-12' },
  { id: 3, ativo: 'GOLD', resultado: 850, data: '2026-01-14' }
];
