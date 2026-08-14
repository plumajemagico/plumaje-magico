import React from 'react';
import { HealthCondition } from '../../types';
import { HealthConditionCard } from './HealthConditionCard';
import { ShieldAlert, Search } from 'lucide-react';

interface Props {
  conditions: HealthCondition[];
  onOpenCondition: (condition: HealthCondition) => void;
  onResetFilters?: () => void;
}

export const HealthConditionGrid: React.FC<Props> = ({
  conditions,
  onOpenCondition,
  onResetFilters,
}) => {
  if (conditions.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-md mx-auto my-8 space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <Search className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-bold text-slate-800">
            No se encontraron afecciones
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            No hay registros clínicos que coincidan exactamente con los términos de búsqueda o filtros seleccionados.
          </p>
        </div>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="px-4 py-2 rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-xs font-semibold transition-colors"
          >
            Limpiar filtros de búsqueda
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      id="health-conditions-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {conditions.map((condition) => (
        <HealthConditionCard
          key={condition.id}
          condition={condition}
          onOpen={onOpenCondition}
        />
      ))}
    </div>
  );
};
