import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle } from "lucide-react";

export default function TradeForecasting({ data }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-l-4 border-green-500">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Projeção Semanal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">Cenário Otimista</p>
            <span className="text-xl font-bold text-green-600">+$1,200.00</span> [cite: 32]
          </CardContent>
        </Card>

        <Card className="border-l-4 border-red-500">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> Score de Risco
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">65/100</span>
            <p className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded w-fit mt-2">Moderado</p> [cite: 30, 31]
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
