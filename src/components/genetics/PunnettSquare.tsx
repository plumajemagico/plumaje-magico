import React, { useState } from 'react';
import { PunnettSquareData } from '../../types';
import { PUNNETT_DEMOS_DATA } from '../../data/geneticsData';
import { VerificationBadge } from '../VerificationBadge';
import {
  Grid,
  Percent,
  Sparkles,
  Info,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  UserCheck,
  Dna
} from 'lucide-react';

interface Props {
  initialDemoId?: string;
  data?: PunnettSquareData;
  showSelector?: boolean;
}

export const PunnettSquare: React.FC<Props> = ({
  initialDemoId = 'punnett_blue_carriers',
  data,
  showSelector = true
}) => {
  const [selectedDemoId, setSelectedDemoId] = useState<string>(initialDemoId);
  const activeData: PunnettSquareData =
    data ||
    PUNNETT_DEMOS_DATA.find((d) => d.id === selectedDemoId) ||
    PUNNETT_DEMOS_DATA[0];

  const [hoveredCell, setHoveredCell] = useState<{ r: number; c: number } | null>(null);

  return (
    <div className="bg-white rounded-3xl border border-[#D8E2DC] p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Header and Preset Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D8E2DC]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Grid className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Visualizador Genético • Cuadro de Punnett
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
            {activeData.title}
          </h3>
        </div>

        {showSelector && (
          <div className="flex items-center gap-2">
            <label htmlFor="punnett-preset-select" className="text-xs font-bold text-[#52796F] shrink-0">
              Ejemplo:
            </label>
            <div className="relative">
              <select
                id="punnett-preset-select"
                value={selectedDemoId}
                onChange={(e) => setSelectedDemoId(e.target.value)}
                className="appearance-none bg-[#F8F9FA] text-xs sm:text-sm font-semibold text-[#1B4332] border border-[#D8E2DC] rounded-xl px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                {PUNNETT_DEMOS_DATA.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.category} ({d.p1Name} × {d.p2Name})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#52796F] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        )}
      </div>

      {activeData.description && (
        <p className="text-sm text-[#52796F] leading-relaxed">
          {activeData.description}
        </p>
      )}

      {/* Parents Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC]">
        <div className="space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Progenitor 1 (Superior)
          </div>
          <div className="font-bold text-[#1B4332] text-sm sm:text-base">
            {activeData.p1Name}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#52796F]">
            <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#D8E2DC] text-[#1B4332] font-semibold">
              {activeData.p1Genotype}
            </span>
            <span>• {activeData.p1Phenotype}</span>
          </div>
        </div>

        <div className="space-y-1 sm:border-l sm:border-[#D8E2DC] sm:pl-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Progenitor 2 (Lateral)
          </div>
          <div className="font-bold text-[#1B4332] text-sm sm:text-base">
            {activeData.p2Name}
          </div>
          <div className="flex items-center gap-2 text-xs text-[#52796F]">
            <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#D8E2DC] text-[#1B4332] font-semibold">
              {activeData.p2Genotype}
            </span>
            <span>• {activeData.p2Phenotype}</span>
          </div>
        </div>
      </div>

      {/* Punnett Matrix Grid Visualizer */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-[#52796F] flex items-center justify-between">
          <span>Matriz de Segregación Alélica:</span>
          <span className="text-[11px] font-normal text-stone-500">Pasa el cursor sobre cada celda</span>
        </div>

        <div className="overflow-x-auto pb-2">
          <div className="min-w-[340px] max-w-xl mx-auto">
            <div className="grid grid-cols-[80px_1fr_1fr] gap-2 text-center items-stretch">
              
              {/* Corner Empty cell */}
              <div className="p-3 rounded-2xl bg-stone-100 flex flex-col items-center justify-center border border-stone-200">
                <Dna className="w-5 h-5 text-stone-400 mb-1" />
                <span className="text-[10px] font-mono text-stone-500 font-bold">Gametos</span>
              </div>

              {/* Top Gametes Headers */}
              {activeData.gametesTop.map((g, idx) => (
                <div
                  key={`top-g-${idx}`}
                  className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center font-mono font-bold text-emerald-900 text-sm sm:text-base shadow-2xs"
                >
                  <span className="text-[10px] font-sans font-bold uppercase text-emerald-600">
                    Gám. P1
                  </span>
                  <span>{g}</span>
                </div>
              ))}

              {/* Row 1 */}
              <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col items-center justify-center font-mono font-bold text-teal-900 text-sm sm:text-base shadow-2xs">
                <span className="text-[10px] font-sans font-bold uppercase text-teal-600">
                  Gám. P2
                </span>
                <span>{activeData.gametesSide[0]}</span>
              </div>

              {/* Cell (0,0) */}
              <div
                onMouseEnter={() => setHoveredCell({ r: 0, c: 0 })}
                onMouseLeave={() => setHoveredCell(null)}
                className={`p-4 rounded-2xl border transition-all text-left space-y-1.5 cursor-pointer ${
                  hoveredCell?.r === 0 && hoveredCell?.c === 0
                    ? 'bg-emerald-100/70 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                    : 'bg-white border-[#D8E2DC] hover:border-emerald-300'
                }`}
              >
                <div className="font-mono font-extrabold text-base text-[#1B4332]">
                  {activeData.cells[0][0]}
                </div>
                <div className="text-xs font-semibold text-emerald-900 leading-tight">
                  {activeData.cellPhenotypes[0][0]}
                </div>
                {activeData.cellSexNotes && (
                  <div className="text-[10px] text-stone-500 font-medium">
                    {activeData.cellSexNotes[0][0]}
                  </div>
                )}
              </div>

              {/* Cell (0,1) */}
              <div
                onMouseEnter={() => setHoveredCell({ r: 0, c: 1 })}
                onMouseLeave={() => setHoveredCell(null)}
                className={`p-4 rounded-2xl border transition-all text-left space-y-1.5 cursor-pointer ${
                  hoveredCell?.r === 0 && hoveredCell?.c === 1
                    ? 'bg-emerald-100/70 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                    : 'bg-white border-[#D8E2DC] hover:border-emerald-300'
                }`}
              >
                <div className="font-mono font-extrabold text-base text-[#1B4332]">
                  {activeData.cells[0][1]}
                </div>
                <div className="text-xs font-semibold text-emerald-900 leading-tight">
                  {activeData.cellPhenotypes[0][1]}
                </div>
                {activeData.cellSexNotes && (
                  <div className="text-[10px] text-stone-500 font-medium">
                    {activeData.cellSexNotes[0][1]}
                  </div>
                )}
              </div>

              {/* Row 2 */}
              <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col items-center justify-center font-mono font-bold text-teal-900 text-sm sm:text-base shadow-2xs">
                <span className="text-[10px] font-sans font-bold uppercase text-teal-600">
                  Gám. P2
                </span>
                <span>{activeData.gametesSide[1]}</span>
              </div>

              {/* Cell (1,0) */}
              <div
                onMouseEnter={() => setHoveredCell({ r: 1, c: 0 })}
                onMouseLeave={() => setHoveredCell(null)}
                className={`p-4 rounded-2xl border transition-all text-left space-y-1.5 cursor-pointer ${
                  hoveredCell?.r === 1 && hoveredCell?.c === 0
                    ? 'bg-emerald-100/70 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                    : 'bg-white border-[#D8E2DC] hover:border-emerald-300'
                }`}
              >
                <div className="font-mono font-extrabold text-base text-[#1B4332]">
                  {activeData.cells[1][0]}
                </div>
                <div className="text-xs font-semibold text-emerald-900 leading-tight">
                  {activeData.cellPhenotypes[1][0]}
                </div>
                {activeData.cellSexNotes && (
                  <div className="text-[10px] text-stone-500 font-medium">
                    {activeData.cellSexNotes[1][0]}
                  </div>
                )}
              </div>

              {/* Cell (1,1) */}
              <div
                onMouseEnter={() => setHoveredCell({ r: 1, c: 1 })}
                onMouseLeave={() => setHoveredCell(null)}
                className={`p-4 rounded-2xl border transition-all text-left space-y-1.5 cursor-pointer ${
                  hoveredCell?.r === 1 && hoveredCell?.c === 1
                    ? 'bg-emerald-100/70 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                    : 'bg-white border-[#D8E2DC] hover:border-emerald-300'
                }`}
              >
                <div className="font-mono font-extrabold text-base text-[#1B4332]">
                  {activeData.cells[1][1]}
                </div>
                <div className="text-xs font-semibold text-emerald-900 leading-tight">
                  {activeData.cellPhenotypes[1][1]}
                </div>
                {activeData.cellSexNotes && (
                  <div className="text-[10px] text-stone-500 font-medium">
                    {activeData.cellSexNotes[1][1]}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Probabilities Distribution */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B4332]">
          <Percent className="w-4 h-4 text-[#2D6A4F]" />
          <span>Distribución Estadística Esperada:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {activeData.probabilities.map((prob, idx) => (
            <div
              key={`prob-${idx}`}
              className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] flex flex-col justify-between space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-lg font-black text-[#1B4332] font-display">
                  {prob.percentage}%
                </span>
                {prob.isCarrier && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    Portador (Split)
                  </span>
                )}
                {prob.sex && prob.sex !== 'both' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200">
                    {prob.sex === 'male' ? 'Solo Machos' : 'Solo Hembras'}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xs font-bold text-[#2D6A4F]">
                  {prob.genotype}
                </div>
                <div className="text-xs font-semibold text-[#1B4332]">
                  {prob.phenotype}
                </div>
                {prob.explanation && (
                  <p className="text-[11px] text-[#52796F] leading-tight pt-1">
                    {prob.explanation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breeder Note Box */}
      {activeData.breederNotes && (
        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-950 space-y-1">
            <span className="font-bold">Observación del Criador: </span>
            <span>{activeData.breederNotes}</span>
          </div>
        </div>
      )}

    </div>
  );
};
