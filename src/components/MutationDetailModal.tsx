import React from 'react';
import { MutationItem } from '../types';
import { VerificationBadge } from './VerificationBadge';
import { 
  X, 
  Dna, 
  Sparkles, 
  Feather, 
  HelpCircle, 
  Split, 
  ShieldCheck, 
  Info, 
  Share2, 
  ExternalLink 
} from 'lucide-react';

interface Props {
  mutation: MutationItem | null;
  onClose: () => void;
  onSelectRelated?: (mutationSlug: string) => void;
}

export const MutationDetailModal: React.FC<Props> = ({ mutation, onClose, onSelectRelated }) => {
  if (!mutation) return null;

  const categoryLabels: Record<string, string> = {
    dominante: 'Mutación Dominante / Codominante',
    recesiva: 'Mutación Autosómica Recesiva',
    ligada_sexo: 'Mutación Recesiva Ligada al Sexo (Cromosoma Z)',
    factores: 'Factor de Color / Modificador',
    patrones: 'Patrón de Plumaje',
    estructural: 'Mutación Estructural / Morfológica',
    otras: 'Variedad en Estudio / Revisión',
    combinada: 'Combinación Poligénica'
  };

  const inheritanceBadgeColors: Record<string, string> = {
    dominant: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    recessive: 'bg-blue-100 text-blue-800 border-blue-300',
    sex_linked: 'bg-purple-100 text-purple-800 border-purple-300',
    incomplete_dominant: 'bg-amber-100 text-amber-800 border-amber-300',
    polygenic: 'bg-rose-100 text-rose-800 border-rose-300',
    unknown: 'bg-slate-100 text-slate-800 border-slate-300'
  };

  return (
    <div
      id="mutation-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="mutation-modal-content"
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar ficha"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {categoryLabels[mutation.category] || mutation.category}
            </span>
            <VerificationBadge status={mutation.verificationStatus} notes={mutation.verificationNotes} />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display">
            {mutation.name}
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            {mutation.shortDescription}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-50/50">
          
          {/* Verification Note if present */}
          {mutation.verificationNotes && (
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              mutation.verificationStatus === 'verified'
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                : 'bg-amber-50/80 border-amber-200 text-amber-900'
            }`}>
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold">Nota de Verificación Científica: </span>
                {mutation.verificationNotes}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 font-display">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              Descripción General
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {mutation.description}
            </p>
          </div>

          {/* Phenotype (Visual Characteristics) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 font-display">
              <Feather className="w-5 h-5 text-emerald-600" />
              Estándar Visual y Fenotipo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Color Corporal:</span>
                <span className="text-slate-700">{mutation.phenotype.bodyColor}</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Marcas Alares y Ondulaciones:</span>
                <span className="text-slate-700">{mutation.phenotype.wingMarkings}</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Máscara y Cabeza:</span>
                <span className="text-slate-700">{mutation.phenotype.headAndMask}</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Cera Nasal y Patas:</span>
                <span className="text-slate-700">{mutation.phenotype.cereAndLegs}</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 md:col-span-2">
                <span className="font-bold text-slate-900 block mb-1">Cola y Ojos (Iris):</span>
                <span className="text-slate-700">{mutation.phenotype.tailAndEyes}</span>
              </div>
            </div>
          </div>

          {/* Genetics & Heredity */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 font-display">
              <Dna className="w-5 h-5 text-purple-600" />
              Comportamiento Genético y Portadores
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              {mutation.geneticsExplanation}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100">
                <span className="font-bold text-purple-950 block mb-1">Regla de Portadores:</span>
                <p className="text-purple-900">{mutation.carriersExplanation}</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
                <span className="font-bold text-emerald-950 block mb-1">Consejos para Criadores:</span>
                <p className="text-emerald-900">{mutation.breedingTips}</p>
              </div>
            </div>

            {mutation.expressionSF_DF && (
              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-100 text-xs sm:text-sm space-y-2">
                <div className="font-bold text-amber-950">Diferencia entre Factor Simple (SF) y Doble Factor (DF):</div>
                <div><span className="font-semibold text-amber-900">Simple Factor:</span> {mutation.expressionSF_DF.singleFactor}</div>
                <div><span className="font-semibold text-amber-900">Doble Factor:</span> {mutation.expressionSF_DF.doubleFactor}</div>
              </div>
            )}
          </div>

          {/* Combinations */}
          {mutation.combinationsSummary.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 font-display">
                <Split className="w-5 h-5 text-teal-600" />
                Combinaciones Frecuentes y Variedades
              </h3>
              <div className="flex flex-wrap gap-2">
                {mutation.combinationsSummary.map((comb, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-200 text-xs font-semibold"
                  >
                    {comb}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Mutations */}
          {mutation.relatedMutations.length > 0 && onSelectRelated && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Mutaciones Relacionadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {mutation.relatedMutations.map((relSlug) => (
                  <button
                    key={relSlug}
                    onClick={() => onSelectRelated(relSlug)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
                  >
                    {relSlug.replace('-', ' ').toUpperCase()} →
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
};
