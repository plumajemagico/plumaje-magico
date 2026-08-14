import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  ShieldAlert,
  Apple,
  Wheat,
  Salad,
  Cherry,
  Flower2,
  Sprout,
  Info
} from 'lucide-react';
import { FoodItem, FoodSafetyStatus, FoodCategory } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

interface FoodCardProps {
  food: FoodItem;
  onSelect: (food: FoodItem) => void;
  audience?: 'beginner' | 'breeder';
}

export const getSafetyBadgeInfo = (status: FoodSafetyStatus) => {
  switch (status) {
    case 'safe':
      return {
        label: 'Apto',
        fullLabel: 'Generalmente apto cuando se ofrece correctamente',
        icon: CheckCircle2,
        badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        dotClass: 'bg-emerald-500',
        textClass: 'text-emerald-700',
      };
    case 'moderate':
      return {
        label: 'Con precauciones',
        fullLabel: 'Apto con moderación / frecuencia controlada',
        icon: AlertTriangle,
        badgeClass: 'bg-amber-50 text-amber-900 border-amber-200',
        dotClass: 'bg-amber-500',
        textClass: 'text-amber-700',
      };
    case 'avoid':
      return {
        label: 'Evitar / Prohibido',
        fullLabel: 'Tóxico o perjudicial para el periquito',
        icon: XCircle,
        badgeClass: 'bg-red-50 text-red-900 border-red-200',
        dotClass: 'bg-red-500',
        textClass: 'text-red-700',
      };
    default:
      return {
        label: 'Pendiente de revisión',
        fullLabel: 'Información en proceso de verificación bibliográfica',
        icon: Clock,
        badgeClass: 'bg-slate-50 text-slate-700 border-slate-200',
        dotClass: 'bg-slate-400',
        textClass: 'text-slate-600',
      };
  }
};

export const getCategoryIcon = (category: FoodCategory) => {
  switch (category) {
    case 'semillas':
      return Wheat;
    case 'cereales':
    case 'brotes':
      return Sprout;
    case 'verduras':
      return Salad;
    case 'frutas':
      return Cherry;
    case 'hierbas':
      return Flower2;
    case 'ocasionales':
      return Sparkles;
    case 'evitar':
      return ShieldAlert;
    default:
      return Apple;
  }
};

export const getCategoryLabel = (category: FoodCategory) => {
  switch (category) {
    case 'semillas':
      return 'Semillas y Granos';
    case 'cereales':
      return 'Cereales y Germinados';
    case 'brotes':
      return 'Brotes Frescos';
    case 'verduras':
      return 'Verdura / Hortaliza';
    case 'frutas':
      return 'Fruta';
    case 'hierbas':
      return 'Hierba Silvestre';
    case 'ocasionales':
      return 'Ocasional / Suplemento';
    case 'evitar':
      return 'Alimento a Evitar';
    default:
      return category;
  }
};

export const FoodCard: React.FC<FoodCardProps> = ({ food, onSelect, audience = 'beginner' }) => {
  const safety = getSafetyBadgeInfo(food.safetyStatus);
  const SafetyIcon = safety.icon;
  const CategoryIcon = getCategoryIcon(food.category);

  return (
    <div
      id={`food-card-${food.id}`}
      onClick={() => onSelect(food)}
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border transition-all duration-200 p-5 sm:p-6 cursor-pointer hover:shadow-md ${
        food.safetyStatus === 'avoid'
          ? 'border-red-200 hover:border-red-400 hover:bg-red-50/20'
          : food.safetyStatus === 'moderate'
          ? 'border-amber-200 hover:border-amber-400 hover:bg-amber-50/20'
          : 'border-slate-200/90 hover:border-[#40916C]/60 hover:bg-[#F1F3F2]/30'
      }`}
    >
      <div>
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Category Pill */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              <CategoryIcon className="w-3 h-3 text-slate-500" />
              <span>{getCategoryLabel(food.category)}</span>
            </span>

            {/* Safety Badge */}
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${safety.badgeClass}`}>
              <SafetyIcon className="w-3 h-3 shrink-0" />
              <span>{safety.label}</span>
            </span>
          </div>

          <VerificationBadge status={food.verificationStatus} size="sm" />
        </div>

        {/* Name and Scientific Name */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#2D6A4F] transition-colors leading-snug">
          {food.name}
        </h3>
        {food.scientificName && (
          <p className="text-xs font-serif italic text-slate-500 mb-2">
            {food.scientificName}
          </p>
        )}

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {food.shortDescription || food.description}
        </p>

        {/* Nutritional Highlights */}
        {food.nutrition?.highlights && food.nutrition.highlights.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {food.nutrition.highlights.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#E8F5E9] text-[#1B4332] border border-[#C8E6C9]"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Breeder note snippet if in breeder mode */}
        {audience === 'breeder' && food.breederNotes && (
          <div className="mb-3 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200 text-[11px] text-emerald-900 leading-snug">
            <span className="font-bold">Nota de criador:</span> {food.breederNotes}
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-[#2D6A4F]">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5" />
          <span>Ver ficha completa</span>
        </span>
        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#2D6A4F] transition-transform" />
      </div>
    </div>
  );
};
