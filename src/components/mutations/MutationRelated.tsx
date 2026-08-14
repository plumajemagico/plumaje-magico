import React from 'react';
import { MUTATIONS_DATA } from '../../data/mutations';
import { MutationItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { Feather, ArrowRight, Dna, Layers, Sparkles } from 'lucide-react';

interface Props {
  currentMutation: MutationItem;
  onSelectMutation: (mutation: MutationItem) => void;
}

export const MutationRelated: React.FC<Props> = ({ currentMutation, onSelectMutation }) => {
  // Find related mutations by slug or id
  const relatedList = MUTATIONS_DATA.filter((m) =>
    currentMutation.relatedMutations.includes(m.slug) ||
    currentMutation.relatedMutations.includes(m.id)
  );

  // If few related, find same category items
  const fallbackList = relatedList.length > 0
    ? relatedList
    : MUTATIONS_DATA.filter((m) => m.id !== currentMutation.id && m.category === currentMutation.category).slice(0, 3);

  if (fallbackList.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-600" />
          Mutaciones y Variedades Relacionadas
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fallbackList.map((mutation) => (
          <div
            key={mutation.id}
            onClick={() => onSelectMutation(mutation)}
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group space-y-3"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  {mutation.category.replace('_', ' ')}
                </span>
                <VerificationBadge status={mutation.verificationStatus} />
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm sm:text-base font-display transition-colors">
                {mutation.name}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {mutation.shortDescription}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Explorar ficha</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
