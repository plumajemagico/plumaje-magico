import React, { useState } from 'react';
import { MUTATIONS_DATA } from '../../data/mutations';
import { MutationItem } from '../../types';
import { InheritanceBadge } from './InheritanceBadge';
import { VerificationBadge } from '../VerificationBadge';
import {
  Scale,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Dna,
  Layers,
  ChevronDown
} from 'lucide-react';

interface Props {
  onSelectMutation?: (mutation: MutationItem) => void;
}

export const GeneticsCompare: React.FC<Props> = ({ onSelectMutation }) => {
  const [mutationAId, setMutationAId] = useState<string>(MUTATIONS_DATA[0]?.id || 'azul');
  const [mutationBId, setMutationBId] = useState<string>(MUTATIONS_DATA[1]?.id || 'opalino');

  const mutA = MUTATIONS_DATA.find((m) => m.id === mutationAId) || MUTATIONS_DATA[0];
  const mutB = MUTATIONS_DATA.find((m) => m.id === mutationBId) || MUTATIONS_DATA[1];

  return (
    <div className="bg-white rounded-3xl border border-[#D8E2DC] p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Header and Mut Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D8E2DC]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200">
              <Scale className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Herramienta Comparativa • Genética y Expresión
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
            Comparador de Mutaciones y Herencia
          </h3>
        </div>

        <p className="text-xs text-[#52796F] max-w-sm">
          Selecciona dos mutaciones para contrastar su tipo de herencia, portadores posibles, efecto en el plumaje y compatibilidad.
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC]">
        
        {/* Selector A */}
        <div className="space-y-1.5">
          <label htmlFor="select-mut-a" className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Mutación A:</span>
          </label>
          <div className="relative">
            <select
              id="select-mut-a"
              value={mutationAId}
              onChange={(e) => setMutationAId(e.target.value)}
              className="w-full appearance-none bg-white text-xs sm:text-sm font-semibold text-[#1B4332] border border-[#D8E2DC] rounded-xl px-3.5 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              {MUTATIONS_DATA.map((m) => (
                <option key={`a-${m.id}`} value={m.id}>
                  {m.name} ({m.category})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#52796F] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Selector B */}
        <div className="space-y-1.5">
          <label htmlFor="select-mut-b" className="text-xs font-bold uppercase tracking-wider text-purple-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            <span>Mutación B:</span>
          </label>
          <div className="relative">
            <select
              id="select-mut-b"
              value={mutationBId}
              onChange={(e) => setMutationBId(e.target.value)}
              className="w-full appearance-none bg-white text-xs sm:text-sm font-semibold text-[#1B4332] border border-[#D8E2DC] rounded-xl px-3.5 py-2.5 pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            >
              {MUTATIONS_DATA.map((m) => (
                <option key={`b-${m.id}`} value={m.id}>
                  {m.name} ({m.category})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[#52796F] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[600px] space-y-3">
          
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Mutation A Card */}
            <div className="p-5 rounded-3xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center justify-between">
                <InheritanceBadge type={mutA.inheritance} />
                <VerificationBadge status={mutA.verificationStatus} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#1B4332]">{mutA.name}</h4>
                <div className="text-xs text-[#52796F]">{mutA.shortDescription}</div>
              </div>
            </div>

            {/* Mutation B Card */}
            <div className="p-5 rounded-3xl bg-purple-50/60 border border-purple-200 space-y-3">
              <div className="flex items-center justify-between">
                <InheritanceBadge type={mutB.inheritance} />
                <VerificationBadge status={mutB.verificationStatus} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-950">{mutB.name}</h4>
                <div className="text-xs text-purple-700">{mutB.shortDescription}</div>
              </div>
            </div>

          </div>

          {/* Comparison Rows */}
          <div className="space-y-3 text-xs">
            
            {/* Row 1: Tipo de Herencia y Cromosoma */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#52796F]">
                1. Tipo de Herencia y Base Biológica:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="font-semibold text-[#1B4332]">{mutA.geneticsExplanation}</div>
                </div>
                <div className="space-y-1">
                  <div className="font-semibold text-[#1B4332]">{mutB.geneticsExplanation}</div>
                </div>
              </div>
            </div>

            {/* Row 2: Capacidad de Portadores (Machos vs Hembras) */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#52796F]">
                2. Portadores (Splits):
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-[#52796F]">
                  <p>{mutA.carriersExplanation}</p>
                </div>
                <div className="space-y-1 text-[#52796F]">
                  <p>{mutB.carriersExplanation}</p>
                </div>
              </div>
            </div>

            {/* Row 3: Expresión SF vs DF */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#52796F]">
                3. Diferencia entre Factor Simple (SF) y Doble Factor (DF):
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-[#1B4332]">
                  {mutA.expressionSF_DF ? (
                    <>
                      <div><span className="font-bold">SF:</span> {mutA.expressionSF_DF.singleFactor}</div>
                      <div><span className="font-bold">DF:</span> {mutA.expressionSF_DF.doubleFactor}</div>
                    </>
                  ) : (
                    <p className="text-[#52796F]">No aplica distinción SF/DF (se expresa como alelo recesivo o dominante completo).</p>
                  )}
                </div>
                <div className="space-y-1 text-[#1B4332]">
                  {mutB.expressionSF_DF ? (
                    <>
                      <div><span className="font-bold">SF:</span> {mutB.expressionSF_DF.singleFactor}</div>
                      <div><span className="font-bold">DF:</span> {mutB.expressionSF_DF.doubleFactor}</div>
                    </>
                  ) : (
                    <p className="text-[#52796F]">No aplica distinción SF/DF (se expresa como alelo recesivo o dominante completo).</p>
                  )}
                </div>
              </div>
            </div>

            {/* Row 4: Fenotipo en Plumaje */}
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#52796F]">
                4. Efecto Visual en Plumaje y Máscara:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 text-[#52796F]">
                  <div><span className="font-bold text-[#1B4332]">Cuerpo:</span> {mutA.phenotype.bodyColor}</div>
                  <div><span className="font-bold text-[#1B4332]">Alas:</span> {mutA.phenotype.wingMarkings}</div>
                  <div><span className="font-bold text-[#1B4332]">Máscara/Gulares:</span> {mutA.phenotype.headAndMask}</div>
                </div>
                <div className="space-y-1 text-[#52796F]">
                  <div><span className="font-bold text-[#1B4332]">Cuerpo:</span> {mutB.phenotype.bodyColor}</div>
                  <div><span className="font-bold text-[#1B4332]">Alas:</span> {mutB.phenotype.wingMarkings}</div>
                  <div><span className="font-bold text-[#1B4332]">Máscara/Gulares:</span> {mutB.phenotype.headAndMask}</div>
                </div>
              </div>
            </div>

            {/* Row 5: Consejos de Cría */}
            <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                5. Consejos de Cría y Selección:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-[#1B4332]">{mutA.breedingTips}</div>
                <div className="text-[#1B4332]">{mutB.breedingTips}</div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
