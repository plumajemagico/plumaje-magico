import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface FoodSearchProps {
  query: string;
  onQueryChange: (query: string) => void;
  resultCount: number;
  totalCount: number;
  placeholder?: string;
}

export const FoodSearch: React.FC<FoodSearchProps> = ({
  query,
  onQueryChange,
  resultCount,
  totalCount,
  placeholder = 'Buscar alimento por nombre, nombre científico, propiedades o advertencias...',
}) => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          id="food-search-input"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-28 py-3.5 bg-white rounded-2xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all shadow-xs"
        />
        {query && (
          <button
            onClick={() => onQueryChange('')}
            className="absolute right-12 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Limpiar búsqueda"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <div className="absolute right-4 text-xs font-semibold text-slate-400 hidden sm:block">
          {resultCount} / {totalCount}
        </div>
      </div>
    </div>
  );
};
