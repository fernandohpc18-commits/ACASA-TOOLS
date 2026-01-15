import React from 'react';
import { BookOpen, Code2, Database, ShieldCheck, Zap, Globe } from "lucide-react";

export default function DocumentacaoCompleta() {
  const secoes = [
    { id: 1, titulo: "Contexto e Objetivos", icon: BookOpen, desc: "Visão geral da plataforma unificada." },
    { id: 2, titulo: "Módulo PropFirms", icon: ShieldCheck, desc: "Análise de sentimento e comparação." },
    { id: 3, titulo: "Trade Monitor", icon: Zap, desc: "Cálculo de performance e métricas de risco." },
    { id: 4, titulo: "Análise de Mercado", icon: Globe, desc: "Dados em tempo real com cache de 60s." },
    { id: 6, titulo: "Arquitetura Técnica", icon: Code2, desc: "Estrutura React 18 e TailwindCSS." },
    { id: 7, titulo: "Entidades e Banco", icon: Database, desc: "Schemas JSON para persistência." }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <h1 className="text-3xl font-bold text-center">Documentação Técnica</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {secoes.map((s) => (
          <div key={s.id} className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <s.icon className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold">{s.titulo}</h3>
            </div>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
