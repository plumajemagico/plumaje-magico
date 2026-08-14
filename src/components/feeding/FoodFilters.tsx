import React from 'react';
import { 
  Filter, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Wheat, 
  Salad, 
  Cherry, 
  Flower2, 
  Sparkles, 
  ShieldAlert,
  Sprout
} from 'lucide-react';
import { FoodCategory, FoodSafetyStatus } from '../../types';

interface FoodFiltersProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedSafety: string;
  onSelectSafety: (safety: string) => void;
  sortBy: 'name' | 'category' | 'safety';
  onSortByChange: (sort: 'name' | 'category' | 'safety') => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
}

export const FoodFilters: React.FC<FoodFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedSafety,
  onSelectSafety,
  sortBy,
  onSortByChange,
  onResetFilters,
  hasActiveFilters,
}) => {
  const categoryPills: { id: string; label: string; icon?: React.ElementType }[] = [
    { id: 'all', label: 'Todas las Categorías' },
    { id: 'semillas', label: 'Semillas y Granos', icon: Wheat },
    { id: 'cereales', label: 'Cereales y Germinados', icon: Sprout },
    { id: 'verduras', label: 'Verduras', icon: Salad },
    { id: 'frutas', label: 'Frutas', icon: Cherry },
    { id: 'hierbas', label: 'Hierbas', icon: Flower2 },
    { id: 'ocasionales', label: 'Ocasionales', icon: Sparkles },
    { id: 'evitar', label: '🚫 A Evitar / Tóxicos', icon: ShieldAlert },
  ];

  const safetyPills: { id: string; label: string; icon?: React.ElementType; color: string }[] = [
    { id: 'all', label: 'Cualquier Seguridad', color: 'slate' },
    { id: 'safe', label: 'Apto', icon: CheckCircle2, color: 'emerald' },
    { id: 'moderate', label: 'Con precauciones', icon: AlertTriangle, color: 'amber' },
    { id: 'avoid', label: 'Evitar / Tóxico', icon: XCircle, color: 'red' },
  ];

  return (
    <div className="space-y-4 bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs">
      {/* Category Pills */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Categoría Botánica / Tipo
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer filtros</span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categoryPills.map((pill) => {
            const Icon = pill.icon;
            const isSelected = selectedCategory === pill.id;
            return (
              <button
                key={pill.id}
                id={`cat-filter-${pill.id}`}
                onClick={() => onSelectCategory(pill.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#2D6A4F] text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 border border-transparent'
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />}
                <span>{pill.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Safety Status Filter and Sort Row */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Safety Status */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
            Seguridad:
          </span>
          {safetyPills.map((pill) => {
            const Icon = pill.icon;
            const isSelected = selectedSafety === pill.id;
            return (
              <button
                key={pill.id}
                id={`safety-filter-${pill.id}`}
                onClick={() => onSelectSafety(pill.id)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {Icon && <Icon className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-slate-500'}`} />}
                <span>{pill.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <label htmlFor="food-sort-select" className="text-xs font-bold text-slate-500">
            Ordenar:
          </label>
          <select
            id="food-sort-select"
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value as 'name' | 'category' | 'safety')}
            className="px-2.5 py-1 text-xs font-semibold bg-slate-50 rounded-lg border border-slate-200 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#2D6A4F]"
          >
            <option value="name">Alfabético (A - Z)</option>
            <option value="category">Por Categoría</option>
            <option value="safety">Por Nivel de Seguridad</option>
          </select>
        </div>
      </div>
    </div>
  );
};
