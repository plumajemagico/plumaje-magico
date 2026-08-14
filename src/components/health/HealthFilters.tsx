import React from 'react';
import { Search, X, Filter, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { HealthCategory } from '../../types';
import { HEALTH_CATEGORIES_CONFIG } from '../../data/health';

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: HealthCategory | 'all';
  onCategoryChange: (category: HealthCategory | 'all') => void;
  filterEmergencyOnly: boolean;
  onToggleEmergency: () => void;
  totalResults: number;
}

export const HealthFilters: React.FC<Props> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  filterEmergencyOnly,
  onToggleEmergency,
  totalResults,
}) => {
  // Filter out duplicates if any in config
  const uniqueCategories = HEALTH_CATEGORIES_CONFIG.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <div className="space-y-4">
      {/* Top Search Bar & Quick Toggles */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="health-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por patología, signo (ej. 'costras', 'quillado', 'chasquidos') o causa..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 focus:border-[#2D6A4F] transition-all shadow-2xs"
          />
          {searchTerm && (
            <button
              id="clear-health-search-btn"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Emergency Toggle Filter */}
        <button
          id="toggle-emergency-filter-btn"
          onClick={onToggleEmergency}
          className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all shrink-0 ${
            filterEmergencyOnly
              ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <AlertTriangle className={`w-3.5 h-3.5 ${filterEmergencyOnly ? 'text-white' : 'text-rose-600'}`} />
          <span>Solo Urgencias</span>
        </button>

      </div>

      {/* Category Pills Slider/Grid */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {uniqueCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`health-cat-filter-${cat.id}`}
              onClick={() => onCategoryChange(cat.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all shrink-0 ${
                isSelected
                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-[#1B4332]'
              }`}
            >
              {cat.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Results Count & Active Filters Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
        <span>
          Mostrando <strong className="text-slate-800">{totalResults}</strong> {totalResults === 1 ? 'condición documentada' : 'condiciones documentadas'}
        </span>

        {(searchTerm || selectedCategory !== 'all' || filterEmergencyOnly) && (
          <button
            id="reset-all-health-filters-btn"
            onClick={() => {
              onSearchChange('');
              onCategoryChange('all');
              if (filterEmergencyOnly) onToggleEmergency();
            }}
            className="text-[#2D6A4F] hover:underline font-semibold"
          >
            Restablecer filtros
          </button>
        )}
      </div>

    </div>
  );
};
