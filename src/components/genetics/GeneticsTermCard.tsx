import React from 'react';
import { GeneticsTerm } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { BookOpen, Sparkles, Dna, HelpCircle, Layers, ArrowRight } from 'lucide-react';

interface Props {
  term: GeneticsTerm;
  onSelectTerm?: (termSlug: string) => void;
  showBeginnerMode?: boolean;
}

export const GeneticsTermCard: React.FC<Props> = ({
  term,
  onSelectTerm,
  showBeginnerMode = true
}) => {
  const getCategoryBadge = () => {
    switch (term.category) {
      case 'fundamentos':
        return { label: 'Fundamentos', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' };
      case 'herencia':
        return { label: 'Mecanismo de Herencia', color: 'bg-purple-50 text-purple-800 border-purple-200' };
      case 'factores':
        return { label: 'Factores de Color', color: 'bg-amber-50 text-amber-800 border-amber-200' };
      case 'morfologia':
        return { label: 'Pigmentos y Morfología', color: 'bg-teal-50 text-teal-800 border-teal-200' };
      case 'nomenclatura':
        return { label: 'Nomenclatura WBO', color: 'bg-sky-50 text-sky-800 border-sky-200' };
      default:
        return { label: 'Genética', color: 'bg-stone-100 text-stone-700 border-stone-200' };
    }
  };

  const catBadge = getCategoryBadge();

  return (
    <div className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4">
      
      <div className="space-y-3">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${catBadge.color}`}>
            {catBadge.label}
          </span>
          <VerificationBadge status={term.verificationStatus} />
        </div>

        {/* Title */}
        <h4 className="text-lg font-bold text-[#1B4332] font-display">
          {term.term}
        </h4>

        {/* Short definition */}
        <p className="text-xs font-semibold text-[#2D6A4F] leading-relaxed">
          {term.shortDefinition}
        </p>

        {/* Long / detailed definition */}
        <p className="text-xs text-[#52796F] leading-relaxed">
          {term.longDefinition}
        </p>

        {/* Beginner vs Expert explanation */}
        {showBeginnerMode && term.beginnerExplanation && (
          <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Explicación Sencilla (Principiante):</span>
            </div>
            <p className="text-xs text-emerald-950 italic">
              "{term.beginnerExplanation}"
            </p>
          </div>
        )}

        {term.examplesInBudgies && term.examplesInBudgies.length > 0 && (
          <div className="space-y-1 pt-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332]">
              Ejemplos en Periquitos:
            </div>
            <ul className="space-y-1 text-xs text-[#52796F]">
              {term.examplesInBudgies.map((ex, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Related terms footer */}
      {term.relatedTerms && term.relatedTerms.length > 0 && (
        <div className="pt-3 border-t border-[#D8E2DC] space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#52796F]">
            Términos Relacionados:
          </div>
          <div className="flex flex-wrap gap-1">
            {term.relatedTerms.map((rt) => (
              <button
                key={rt}
                onClick={() => onSelectTerm && onSelectTerm(rt)}
                className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-[#F8F9FA] text-[#2D6A4F] hover:bg-emerald-100 hover:text-emerald-900 border border-[#D8E2DC] transition-colors"
              >
                #{rt}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
