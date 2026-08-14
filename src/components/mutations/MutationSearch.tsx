import React from 'react';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';

interface Props {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const MutationSearch: React.FC<Props> = ({
  searchQuery,
  onSearchChange,
  totalCount,
  filteredCount,
}) => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
        <input
          id="mutations-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por nombre, alias, herencia (ej: opalino, canela, spangle, ojos rojos, arcoiris)..."
          className="w-full pl-11 pr-10 py-3 text-sm rounded-2xl bg-white border border-slate-200/90 text-slate-900 placeholder:text-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Limpiar búsqueda"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested Quick Searches */}
      <div className="flex items-center gap-1.5 overflow-x-auto pt-2.5 pb-0.5 text-xs text-slate-500 scrollbar-none">
        <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" /> Búsquedas rápidas:
        </span>
        {['Opalino', 'Perlado', 'Canela', 'Alas Claras', 'Arcoíris', 'Ojos Rojos', 'Cobalto'].map((term) => (
          <button
            key={term}
            onClick={() => onSearchChange(term)}
            className="px-2.5 py-1 rounded-lg bg-slate-100/80 hover:bg-emerald-50 hover:text-emerald-700 font-medium text-slate-600 whitespace-nowrap transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};
