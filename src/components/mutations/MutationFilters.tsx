import React from 'react';
import { Filter, RotateCcw, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';
import { MutationCategory, InheritanceType, VerificationStatus } from '../../types';

export interface MutationFilterState {
  category: string;
  inheritance: string;
  verification: string;
  colorLine: string;
  sortBy: 'name' | 'category' | 'inheritance';
}

interface Props {
  filters: MutationFilterState;
  onFilterChange: (key: keyof MutationFilterState, value: string) => void;
  onResetFilters: () => void;
  categories: { id: string; label: string; count: number }[];
  activeFilterCount: number;
}

export const MutationFilters: React.FC<Props> = ({
  filters,
  onFilterChange,
  onResetFilters,
  categories,
  activeFilterCount,
}) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
      {/* Category Pills Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Categoría Genética
          </span>
          {activeFilterCount > 0 && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              Restablecer filtros ({activeFilterCount})
            </button>
          )}
        </div>

        {/* Scrollable category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = filters.category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange('category', cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1B4332] text-white shadow-md shadow-[#1B4332]/20 scale-105'
                    : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-semibold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary filter controls (Inheritance, Verification, Line, Sort) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
        
        {/* Inheritance Select */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Tipo de Herencia
          </label>
          <select
            value={filters.inheritance}
            onChange={(e) => onFilterChange('inheritance', e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          >
            <option value="all">Todas las herencias</option>
            <option value="dominant">Dominante</option>
            <option value="recessive">Recesiva autosómica</option>
            <option value="sex_linked">Ligada al sexo (Z)</option>
            <option value="incomplete_dominant">Dominancia incompleta</option>
            <option value="polygenic">Poligénica / Estructural</option>
          </select>
        </div>

        {/* Verification Status */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Estado de Verificación
          </label>
          <select
            value={filters.verification}
            onChange={(e) => onFilterChange('verification', e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          >
            <option value="all">Todos los estados</option>
            <option value="verified">Solo Verificados (Estándar WBO/COM)</option>
            <option value="pending_review">Pendientes de revisión</option>
          </select>
        </div>

        {/* Color Line Affinity */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Línea de Color
          </label>
          <select
            value={filters.colorLine}
            onChange={(e) => onFilterChange('colorLine', e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          >
            <option value="all">Ambas líneas (Verde / Azul)</option>
            <option value="linea-verde">Línea Verde (Base Silvestre / Psitacina)</option>
            <option value="linea-azul">Línea Azul (Supresión Psitacina)</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
            Ordenar por
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange('sortBy', e.target.value as 'name' | 'category' | 'inheritance')}
            className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
          >
            <option value="name">Alfabético (A - Z)</option>
            <option value="category">Por Categoría</option>
            <option value="inheritance">Por Tipo de Herencia</option>
          </select>
        </div>

      </div>
    </div>
  );
};
