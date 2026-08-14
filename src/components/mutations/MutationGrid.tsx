import React from 'react';
import { MutationItem } from '../../types';
import { MutationCard } from './MutationCard';
import { Feather, SearchX, RotateCcw, Sparkles } from 'lucide-react';

interface Props {
  mutations: MutationItem[];
  onSelectMutation: (mutation: MutationItem) => void;
  onResetFilters: () => void;
}

export const MutationGrid: React.FC<Props> = ({
  mutations,
  onSelectMutation,
  onResetFilters,
}) => {
  if (mutations.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
          <SearchX className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 font-display">
            No se encontraron mutaciones
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm">
            Ninguna mutación coincide con los términos de búsqueda o filtros seleccionados.
          </p>
        </div>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Restablecer todos los filtros
        </button>
      </div>
    );
  }

  return (
    <div
      id="mutations-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300"
    >
      {mutations.map((mutation) => (
        <MutationCard
          key={mutation.id}
          mutation={mutation}
          onSelect={onSelectMutation}
        />
      ))}
    </div>
  );
};
