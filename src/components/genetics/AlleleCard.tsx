import React from 'react';
import { Allele } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { Dna, Shield, Tag, BookOpen, Layers } from 'lucide-react';

interface Props {
  allele: Allele;
  onSelect?: (allele: Allele) => void;
}

export const AlleleCard: React.FC<Props> = ({ allele, onSelect }) => {
  const getDominanceColor = () => {
    switch (allele.dominance) {
      case 'wild_type':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'dominant':
        return 'bg-teal-100 text-teal-800 border-teal-300';
      case 'recessive':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'incomplete_dominant':
      case 'co_dominant':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-300';
    }
  };

  const getDominanceLabel = () => {
    switch (allele.dominance) {
      case 'wild_type':
        return 'Silvestre Ancestral (+)';
      case 'dominant':
        return 'Dominante';
      case 'recessive':
        return 'Recesivo';
      case 'incomplete_dominant':
        return 'Semidominante';
      case 'co_dominant':
        return 'Codominante';
      default:
        return 'Alelo';
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(allele)}
      className={`p-5 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${
        onSelect ? 'cursor-pointer hover:border-emerald-400' : ''
      }`}
    >
      <div className="space-y-3">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-black px-2.5 py-1 rounded-xl bg-slate-900 text-emerald-400 border border-slate-700 shadow-2xs">
              {allele.symbol}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getDominanceColor()}`}>
              {getDominanceLabel()}
            </span>
          </div>
          <VerificationBadge status={allele.verificationStatus} />
        </div>

        {/* Name and Locus */}
        <div>
          <h4 className="font-bold text-base text-[#1B4332]">
            {allele.name}
          </h4>
          <div className="text-xs text-[#52796F] font-mono flex items-center gap-1.5 mt-0.5">
            <Layers className="w-3.5 h-3.5 text-stone-400" />
            <span>{allele.locus}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-[#52796F] leading-relaxed line-clamp-3">
          {allele.description}
        </p>
      </div>

      {/* Footer Comparison */}
      <div className="pt-3 border-t border-[#D8E2DC] space-y-1.5 text-[11px]">
        <div className="text-stone-600">
          <span className="font-bold text-[#1B4332]">Comportamiento: </span>
          <span>{allele.wildTypeComparison}</span>
        </div>
        {allele.notes && (
          <div className="text-[#52796F] italic">
            {allele.notes}
          </div>
        )}
      </div>

    </div>
  );
};
