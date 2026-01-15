import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code2, Database, ShieldCheck, Zap } from "lucide-react";

export default function DocumentacaoCompleta() {
  const secoes = [
    { id: 1, titulo: "Contexto e Objetivos", icon: BookOpen, desc: "Visão geral da plataforma financeira unificada." },
    { id: 2, titulo: "Módulo PropFirms", icon: ShieldCheck, desc: "Análise de sentimento e comparação de firmas proprietárias." },
    { id: 3, titulo: "Trade Monitor", icon: Zap, desc: "Cálculo de performance, drawdown e métricas de risco." },
    { id: 4, titulo: "Análise de Mercado", icon: Globe, desc: "Dados em tempo real com lógica de cache de 60s." },
    { id: 6, titulo: "Arquitetura Técnica", icon: Code2, desc: "Estrutura React 18, TailwindCSS e Shadcn/UI." },
    { id: 7, titulo: "Entidades e Banco", icon: Database, desc: "Schemas JSON para persistência de dados (BaaS)." }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter">Documentação Técnica da Plataforma</h1>
        <p className="text-slate-500">Referência completa de implementação - Versão 1.0.0 [cite: 3, 200]</p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {secoes.map((secao) => (
          <Card key={secao.id} className="hover:border-blue-500 transition-colors cursor-help">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <secao.icon className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle className="text-lg">{secao.titulo}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">{secao.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-900 text-slate-100 border-none">
        <CardHeader>
          <CardTitle className="text-sm font-mono text-blue-400">Resumo de Qualidade [cite: 198, 215]</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">40+</p>
            <p className="text-[10px] uppercase text-slate-500">Componentes [cite: 123]</p>
          </div>
          <div>
            <p className="text-2xl font-bold">16</p>
            <p className="text-[10px] uppercase text-slate-500">Entidades [cite: 121]</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-[10px] uppercase text-slate-500">Responsivo [cite: 5, 109]</p>
          </div>
          <div>
            <p className="text-2xl font-bold">IA</p>
            <p className="text-[10px] uppercase text-slate-500">Nativa [cite: 5, 29]</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
