import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BarChart3, 
  Settings, 
  Shield, 
  Wallet, 
  Bell, 
  Globe 
} from "lucide-react";
import { Toaster, toast } from 'sonner';

// Importação dos componentes de Trading
import AdvancedCharts from './components/trades/AdvancedCharts';
import TradeForecasting from './components/trades/TradeForecasting';

// Importação dos componentes de Mercado (Novos!)
import AssetPanel from './components/market/AssetPanel';

export default function App() {
  const [activeTab, setActiveTab] = useState('trades');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Dados simulados baseados no seu Script 2026 para os Gráficos
  const sampleTrades = [
    { id: 1, ativo: 'BTCUSD', resultado: 450, data: '2026-01-10' },
    { id: 2, ativo: 'AAPL', resultado: -120, data: '2026-01-12' },
    { id: 3, ativo: 'EURUSD', resultado: 300, data: '2026-01-14' },
    { id: 4, ativo: 'GOLD', resultado: 850, data: '2026-01-15' },
    { id: 5, ativo: 'TSLA', resultado: -400, data: '2026-01-16' }
  ];

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* SIDEBAR LATERAL */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-8 px-2">
            <Shield className="text-blue-600 w-8 h-8" />
            <h1 className="font-bold text-xl tracking-tight">ACASA TOOLS</h1>
          </div>
          
          <nav className="space-y-1 flex-1">
            {[
              { id: 'trades', label: 'Trade Monitor', icon: TrendingUp },
              { id: 'market', label: 'Análise Mercado', icon: BarChart3 },
              { id: 'propfirms', label: 'PropFirms', icon: LayoutDashboard },
              { id: 'wallet', label: 'Simulador', icon: Wallet },
              { id: 'config', label: 'Configurações', icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id 
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* RODAPÉ DA SIDEBAR */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-blue-500 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
          </div>
        </aside>

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 overflow-auto p-8">
          <header className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                {activeTab === 'trades' && "Trade Monitor"}
                {activeTab === 'market' && "Análise de Mercado"}
                {activeTab === 'propfirms' && "PropFirms Dashboard"}
                {activeTab === 'wallet' && "Simulador de Investimentos"}
                {activeTab === 'config' && "Configurações do Sistema"}
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                {activeTab === 'trades' ? "Acompanhe sua performance e previsões de IA." : "Dados em tempo real com cache de 1 min."}
              </p>
            </div>
            <div className="flex gap-3">
              <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50">
                <Bell className="w-5 h-5 text-slate-500" />
              </button>
            </div>
          </header>

          {/* CONTEÚDO DAS ABAS */}
          <div className="animate-in fade-in duration-500">
            
            {/* ABA: TRADE MONITOR */}
            {activeTab === 'trades' && (
              <div className="space-y-8">
                <TradeForecasting />
                <AdvancedCharts trades={sampleTrades} initialBalance={10000} />
              </div>
            )}

            {/* ABA: ANÁLISE DE MERCADO (Alteração Realizada Aqui!) */}
            {activeTab === 'market' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <AssetPanel symbol="BTCUSD" />
                  <AssetPanel symbol="ETHUSD" />
                  <AssetPanel symbol="AAPL" />
                  <AssetPanel symbol="EURUSD" />
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">Insight da IA</h3>
                  <p className="text-blue-800 dark:text-blue-400 text-sm leading-relaxed">
                    Com base no cache atual, o mercado apresenta alta volatilidade nos ativos de tecnologia. 
                    Recomenda-se cautela em operações de curto prazo até a próxima atualização de dados.
                  </p>
                </div>
              </div>
            )}

            {/* ABA: PROPFIRMS */}
            {activeTab === 'propfirms' && (
              <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
                <LayoutDashboard className="w-12 h-12 text-slate-300 mb-4" />
                <p className="text-slate-500">Módulo de comparação de PropFirms em desenvolvimento.</p>
                <button 
                  onClick={() => toast.info("Em breve: Integração com MyFxBook")}
                  className="mt-4 text-sm font-bold text-blue-600 hover:underline"
                >
                  Ver Roadmap
                </button>
              </div>
            )}

          </div>
        </main>
        
        {/* SISTEMA DE NOTIFICAÇÕES */}
        <Toaster position="bottom-right" richColors />
      </div>
    </div>
  );
}
