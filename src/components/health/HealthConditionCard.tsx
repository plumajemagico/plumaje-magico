import React from 'react';
import { ArrowRight, AlertTriangle, Bug, Wind, Layers, Feather, Scissors, Apple, Stethoscope, Egg, Activity, ShieldAlert } from 'lucide-react';
import { HealthCondition, HealthCategory } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

interface Props {
  condition: HealthCondition;
  onOpen: (condition: HealthCondition) => void;
}

const getCategoryIcon = (category: HealthCategory) => {
  switch (category) {
    case 'respiratory':
      return Wind;
    case 'digestive':
      return Layers;
    case 'parasitic':
      return Bug;
    case 'plumage':
      return Feather;
    case 'feet_beak':
      return Scissors;
    case 'nutrition':
      return Apple;
    case 'infectious':
      return Stethoscope;
    case 'reproductive':
      return Egg;
    case 'skin':
      return ShieldAlert;
    default:
      return Activity;
  }
};

const getCategoryLabel = (category: HealthCategory): string => {
  switch (category) {
    case 'respiratory':
      return 'Respiratorio';
    case 'digestive':
      return 'Digestivo';
    case 'parasitic':
      return 'Parásitos';
    case 'plumage':
      return 'Plumaje';
    case 'feet_beak':
      return 'Patas y Pico';
    case 'nutrition':
      return 'Nutrición';
    case 'infectious':
      return 'Infeccioso';
    case 'reproductive':
      return 'Reproducción';
    case 'skin':
      return 'Piel';
    default:
      return 'General';
  }
};

export const HealthConditionCard: React.FC<Props> = ({ condition, onOpen }) => {
  const CategoryIcon = getCategoryIcon(condition.category);

  return (
    <div
      id={`health-card-${condition.slug}`}
      onClick={() => onOpen(condition)}
      className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#2D6A4F] p-5 sm:p-6 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
    >
      <div className="space-y-3">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC]">
            <CategoryIcon className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>{getCategoryLabel(condition.category)}</span>
          </div>

          <div className="flex items-center gap-2">
            {condition.isEmergency && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                <AlertTriangle className="w-3 h-3 text-rose-600" />
                <span>Urgencia</span>
              </span>
            )}
            <VerificationBadge status={condition.verificationStatus} />
          </div>
        </div>

        {/* Title and Scientific Name */}
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors leading-snug font-display">
            {condition.name}
          </h3>
          {condition.scientificOrAlternativeName && (
            <p className="text-xs text-slate-500 italic mt-0.5">
              {condition.scientificOrAlternativeName}
            </p>
          )}
        </div>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
          {condition.shortDescription}
        </p>

        {/* Primary Signs Preview */}
        {condition.signs && condition.signs.length > 0 && (
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
              Signos observables:
            </span>
            <ul className="text-xs text-slate-600 space-y-1">
              {condition.signs.slice(0, 2).map((sign, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <span className="text-slate-400">•</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* Footer Action */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-400 font-medium">Prevención y cuidados</span>
        <div className="font-semibold text-[#2D6A4F] group-hover:translate-x-1 transition-transform flex items-center gap-1">
          <span>Ver Ficha Médica</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
