import React, { useState } from 'react';
import { DEMO_BREEDING_RECORDS } from '../../data/breeding';
import { BreedingRecordEntry } from '../../types';
import { 
  FileSpreadsheet, 
  Printer, 
  Plus, 
  RotateCcw, 
  Sparkles, 
  Egg, 
  Feather, 
  CheckCircle2, 
  Info,
  Layers,
  Calendar
} from 'lucide-react';

const STORAGE_KEY = 'plumaje_magico_demo_clutches_v1';

export const BreedingRecordSheet: React.FC = () => {
  const [records, setRecords] = useState<BreedingRecordEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEMO_BREEDING_RECORDS;
    } catch {
      return DEMO_BREEDING_RECORDS;
    }
  });

  const [activeRecordIndex, setActiveRecordIndex] = useState<number>(0);
  const currentRecord = records[activeRecordIndex] || records[0];

  const handlePrint = () => {
    window.print();
  };

  const handleResetToDemo = () => {
    if (window.confirm('¿Deseas restaurar la ficha de cría de demostración?')) {
      setRecords(DEMO_BREEDING_RECORDS);
      setActiveRecordIndex(0);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
          <FileSpreadsheet className="w-3.5 h-3.5 text-amber-700" />
          <span>Ficha Técnica y Modelo de Control</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Ficha de Registro de Cría
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Modelo zootécnico para el seguimiento de nidadas, control de fertilidad por ovoscopia, anillado oficial federativo y cálculo de descendencias. Puedes imprimir esta ficha o usarla como plantilla de referencia.
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">Nidada Activa:</span>
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
            {currentRecord.pairName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir Ficha</span>
          </button>
          <button
            onClick={handleResetToDemo}
            className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Ejemplo</span>
          </button>
        </div>
      </div>

      {/* Printable Sheet Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-8 print:border-none print:shadow-none print:p-0">
        
        {/* Sheet Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-slate-800">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800">
              Plumaje Mágico • Registro Zootécnico Aviar
            </span>
            <h3 className="text-2xl font-black text-slate-900 font-display mt-0.5">
              Control de Nidada y Genealogía
            </h3>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Ref: {currentRecord.id} • Temporada 2026
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Huevos</span>
              <span className="text-lg font-black text-slate-900">{currentRecord.clutchSize}</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Fértiles</span>
              <span className="text-lg font-black text-emerald-700">{currentRecord.fertileEggs}</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Nacidos</span>
              <span className="text-lg font-black text-amber-700">{currentRecord.hatchedCount}</span>
            </div>
            <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Destetados</span>
              <span className="text-lg font-black text-indigo-700">{currentRecord.weanedCount}</span>
            </div>
          </div>
        </div>

        {/* Parent Identifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Macho */}
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                <span>♂</span> Progenitor Macho
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-white border border-slate-200 text-slate-800">
                Anilla: {currentRecord.maleRing}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Genotipo / Variedad:</span>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                {currentRecord.maleGenetics}
              </div>
            </div>
          </div>

          {/* Hembra */}
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <span>♀</span> Progenitora Hembra
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-white border border-slate-200 text-slate-800">
                Anilla: {currentRecord.femaleRing}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase block">Genotipo / Variedad:</span>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">
                {currentRecord.femaleGenetics}
              </div>
            </div>
          </div>
        </div>

        {/* Key Dates Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase block">Emparejamiento</span>
              <span className="font-semibold text-amber-950">{currentRecord.pairingDate}</span>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase block">Colocación de Nido</span>
              <span className="font-semibold text-amber-950">{currentRecord.nestInstalledDate}</span>
            </div>
          </div>
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-amber-900 uppercase block">Primer Huevo</span>
              <span className="font-semibold text-amber-950">{currentRecord.firstEggDate || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* Eggs & Chicks Tracking Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-display">
            <Egg className="w-4 h-4 text-amber-700" />
            Registro Individual de Huevos y Eclosiones
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-2xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Huevo Nº</th>
                  <th className="py-2.5 px-3">Fecha Puesta</th>
                  <th className="py-2.5 px-3">Ovoscopia</th>
                  <th className="py-2.5 px-3">Nacimiento</th>
                  <th className="py-2.5 px-3">Anilla Oficial (4.0 mm)</th>
                  <th className="py-2.5 px-3">Mutación Resultante</th>
                  <th className="py-2.5 px-3">Observaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentRecord.eggsData.map((egg) => (
                  <tr key={egg.eggNumber} className="hover:bg-slate-50/60">
                    <td className="py-2.5 px-3 font-bold text-slate-900">
                      #{egg.eggNumber}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-700">{egg.layDate}</td>
                    <td className="py-2.5 px-3">
                      {egg.isFertile === true ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          ✓ Fértil
                        </span>
                      ) : egg.isFertile === false ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          ✕ Infértil
                        </span>
                      ) : (
                        <span className="text-slate-400">Pendiente</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-slate-700">
                      {egg.hatchDate || '—'}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-900">
                      {egg.bandNumber || '—'}
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-slate-800">
                      {egg.mutationResult || '—'}
                    </td>
                    <td className="py-2.5 px-3 text-xs text-slate-500">
                      {egg.notes || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* General Observations */}
        {currentRecord.observations && (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">
              Observaciones de Conducta y Crianza:
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {currentRecord.observations}
            </p>
          </div>
        )}

        {/* Footer Notice */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>Plumaje Mágico • Modelo Educativo de Registro de Cría</span>
          <span>Calibre oficial recomendado: 4.0 - 4.2 mm</span>
        </div>
      </div>
    </div>
  );
};
