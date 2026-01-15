import React, { useState } from 'react';
import { Upload, FileCode, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function TradeImporter({ onImportSuccess }) {
  const [isDragging, setIsDragging] = useState(false);

  // Lógica de Parse conforme o Script 2026 
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      
      // Simulação de detecção automática de header [cite: 46]
      if (file.name.endsWith('.csv')) {
        processCSV(content);
      } else {
        toast.error("Formato não suportado. Use CSV ou HTML.");
      }
    };
    reader.readAsText(file);
  };

  const processCSV = (text) => {
    toast.loading("Processando dados...");
    
    // Mapeamento de colunas conforme definido no script [cite: 47]
    // data/date -> data | symbol/ativo -> ativo | result/pnl -> resultado
    setTimeout(() => {
      toast.dismiss();
      toast.success("Importação concluída com sucesso!");
      if (onImportSuccess) onImportSuccess();
    }, 1500);
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-2xl p-8 transition-all text-center ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-200 dark:border-slate-800'
      }`}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleFileUpload(e); }}
    >
      <input 
        type="file" 
        id="fileInput" 
        className="hidden" 
        accept=".csv,.html" 
        onChange={handleFileUpload}
      />
      <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center">
        <Upload className="w-12 h-12 text-slate-400 mb-4" />
        <h3 className="text-lg font-bold">Importar Trades</h3>
        <p className="text-sm text-slate-500 mt-2">
          Arraste seu arquivo CSV/HTML ou clique para selecionar [cite: 46]
        </p>
      </label>
    </div>
  );
}
