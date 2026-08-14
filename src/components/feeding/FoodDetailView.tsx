import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  ShieldAlert, 
  Sparkles, 
  Info, 
  ExternalLink, 
  BookOpen, 
  HeartHandshake, 
  Egg, 
  Check, 
  Tag, 
  Share2, 
  Printer, 
  Utensils, 
  Wheat, 
  Salad, 
  Cherry, 
  Flower2, 
  Sprout 
} from 'lucide-react';
import { FoodItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { getSafetyBadgeInfo, getCategoryIcon, getCategoryLabel } from './FoodCard';

interface FoodDetailViewProps {
  food: FoodItem;
  allFoods: FoodItem[];
  audience?: 'beginner' | 'breeder';
  onBack: () => void;
  onSelectFood: (food: FoodItem) => void;
  onNavigateToHealth?: (sectionId?: string) => void;
  onNavigateToCare?: (category?: string) => void;
  onNavigateToBreeding?: (sectionId?: string) => void;
}

export const FoodDetailView: React.FC<FoodDetailViewProps> = ({
  food,
  allFoods,
  audience = 'beginner',
  onBack,
  onSelectFood,
  onNavigateToHealth,
  onNavigateToCare,
  onNavigateToBreeding,
}) => {
  const safety = getSafetyBadgeInfo(food.safetyStatus);
  const SafetyIcon = safety.icon;
  const CategoryIcon = getCategoryIcon(food.category);

  // Find related food objects
  const relatedFoodItems = (food.relatedFoods || [])
    .map((id) => allFoods.find((f) => f.id === id || f.slug === id))
    .filter((f): f is FoodItem => f !== undefined);

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fadeIn pb-12">
      {/* Top Bar: Back button & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs w-fit"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <span>Volver al Catálogo</span>
        </button>

        {/* Breadcrumb path */}
        <nav className="text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
          <span>Alimentación</span>
          <span>/</span>
          <span className="capitalize">{getCategoryLabel(food.category)}</span>
          <span>/</span>
          <span className="font-semibold text-slate-800">{food.name}</span>
        </nav>
      </div>

      {/* Main Header Card */}
      <div
        id="food-detail-header"
        className={`bg-white rounded-3xl border p-6 sm:p-8 shadow-xs relative overflow-hidden ${
          food.safetyStatus === 'avoid'
            ? 'border-red-200 bg-gradient-to-br from-white via-white to-red-50/30'
            : food.safetyStatus === 'moderate'
            ? 'border-amber-200 bg-gradient-to-br from-white via-white to-amber-50/30'
            : 'border-slate-200/90 bg-gradient-to-br from-white via-white to-emerald-50/30'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-3 max-w-3xl">
            {/* Category and Safety Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                <CategoryIcon className="w-3.5 h-3.5 text-slate-600" />
                <span>{getCategoryLabel(food.category)}</span>
              </span>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${safety.badgeClass}`}>
                <SafetyIcon className="w-3.5 h-3.5" />
                <span>{safety.label}</span>
              </span>

              <VerificationBadge status={food.verificationStatus} size="md" />
            </div>

            {/* Food Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              {food.name}
            </h1>

            {/* Scientific and Alternative Names */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
              {food.scientificName && (
                <span className="font-serif italic text-slate-700 font-medium">
                  Nombre científico: {food.scientificName}
                </span>
              )}
              {food.alternativeNames && food.alternativeNames.length > 0 && (
                <span className="text-slate-500 text-xs sm:text-sm">
                  También conocido como: {food.alternativeNames.join(', ')}
                </span>
              )}
            </div>

            {/* Lead Short Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
              {food.shortDescription || food.description}
            </p>
          </div>
        </div>

        {/* Safety Callout Banner */}
        <div className={`mt-6 p-4 rounded-2xl border flex items-start gap-3.5 ${
          food.safetyStatus === 'avoid'
            ? 'bg-red-50 border-red-200 text-red-950'
            : food.safetyStatus === 'moderate'
            ? 'bg-amber-50 border-amber-200 text-amber-950'
            : 'bg-emerald-50 border-emerald-200 text-emerald-950'
        }`}>
          <SafetyIcon className={`w-5 h-5 shrink-0 mt-0.5 ${
            food.safetyStatus === 'avoid' ? 'text-red-700' : food.safetyStatus === 'moderate' ? 'text-amber-700' : 'text-emerald-700'
          }`} />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-bold">
              {food.safetyStatus === 'avoid'
                ? 'ALIMENTO PROHIBIDO / TÓXICO'
                : food.safetyStatus === 'moderate'
                ? 'ADMINISTRACIÓN CON PRECAUCIÓN Y MODERACIÓN'
                : 'ALIMENTO CONSIDERADO APTO Y SALUDABLE'}
            </p>
            <p className="opacity-90 leading-relaxed">
              {food.safetyReason || safety.fullLabel}
            </p>
          </div>
        </div>

        {/* Breeder Note Callout if available */}
        {food.breederNotes && (
          <div className="mt-4 p-4 rounded-2xl bg-[#E8F5E9]/60 border border-[#C8E6C9] text-emerald-950 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-emerald-900">Nota técnica para criadores: </span>
              <span>{food.breederNotes}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Grid (Two Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Left Column (2/3 width on large screens): Details & Guidelines */}
        <div className="lg:col-span-2 space-y-6">
          {/* Detailed Description */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
              <Info className="w-5 h-5 text-[#2D6A4F]" />
              <span>¿Qué es este alimento?</span>
            </h2>
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {food.description}
            </div>
          </div>

          {/* Utility for Budgerigars */}
          {food.forParakeet && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <Utensils className="w-5 h-5 text-[#2D6A4F]" />
                <span>Utilidad para el periquito australiano</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {food.forParakeet}
              </p>
            </div>
          )}

          {/* Preparation & Hygiene Steps */}
          {food.preparation && food.preparation.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <CheckCircle2 className="w-5 h-5 text-[#2D6A4F]" />
                <span>Preparación e Higiene Recomendada</span>
              </h2>
              <ul className="space-y-2.5">
                {food.preparation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Feeding Notes & Frequency */}
          {food.feedingNotes && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 space-y-3">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <Clock className="w-5 h-5 text-[#2D6A4F]" />
                <span>Frecuencia y Modo de Administración</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {food.feedingNotes}
              </p>
            </div>
          )}

          {/* Precautions and Warnings */}
          {food.precautions && food.precautions.length > 0 && (
            <div className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-7 space-y-4">
              <h2 className="text-lg font-bold text-amber-900 flex items-center gap-2 font-display">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <span>Precauciones y Advertencias Veterinarias</span>
              </h2>
              <ul className="space-y-2.5">
                {food.precautions.map((prec, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-amber-950">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{prec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column (1/3 width): Nutritional Profile, Connections & Sources */}
        <div className="space-y-6">
          {/* Nutritional Profile */}
          {food.nutrition && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
                <span>Propiedades Respaldadas</span>
              </h3>

              {food.nutrition.highlights && food.nutrition.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {food.nutrition.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#E8F5E9] text-[#1B4332] border border-[#C8E6C9]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {food.nutrition.details && (
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {food.nutrition.details}
                </p>
              )}
            </div>
          )}

          {/* Related Foods */}
          {relatedFoodItems.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-3 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-slate-600" />
                <span>Alimentos Relacionados</span>
              </h3>
              <div className="space-y-2">
                {relatedFoodItems.map((rf) => {
                  const rfSafety = getSafetyBadgeInfo(rf.safetyStatus);
                  return (
                    <button
                      key={rf.id}
                      onClick={() => onSelectFood(rf)}
                      className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-between gap-2 group"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-[#2D6A4F]">
                          {rf.name}
                        </p>
                        <p className="text-[11px] text-slate-500 capitalize">
                          {getCategoryLabel(rf.category)}
                        </p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${rfSafety.badgeClass}`}>
                        {rfSafety.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Cross-Module Connections */}
          {(food.relatedHealth || food.relatedCare || food.relatedBreeding) && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-3 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>Módulos Relacionados</span>
              </h3>
              <div className="space-y-2">
                {food.relatedHealth?.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => onNavigateToHealth && onNavigateToHealth(h.id)}
                    className="w-full text-left p-3 rounded-xl bg-red-50/50 border border-red-100 hover:bg-red-100/60 transition-all flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-red-900 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
                        Salud: {h.title}
                      </span>
                      {h.description && (
                        <p className="text-[11px] text-red-700 mt-0.5">{h.description}</p>
                      )}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  </button>
                ))}

                {food.relatedCare?.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onNavigateToCare && onNavigateToCare(c.id)}
                    className="w-full text-left p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-100/60 transition-all flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-emerald-900 flex items-center gap-1">
                        <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                        Cuidados: {c.title}
                      </span>
                      {c.description && (
                        <p className="text-[11px] text-emerald-700 mt-0.5">{c.description}</p>
                      )}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </button>
                ))}

                {food.relatedBreeding?.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onNavigateToBreeding && onNavigateToBreeding(b.id)}
                    className="w-full text-left p-3 rounded-xl bg-amber-50/50 border border-amber-100 hover:bg-amber-100/60 transition-all flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-amber-900 flex items-center gap-1">
                        <Egg className="w-3.5 h-3.5 text-amber-700" />
                        Cría: {b.title}
                      </span>
                      {b.description && (
                        <p className="text-[11px] text-amber-700 mt-0.5">{b.description}</p>
                      )}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sources and Bibliography */}
          {food.sources && food.sources.length > 0 && (
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 space-y-2 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                Bibliografía y Fuentes Científicas
              </h4>
              <ul className="space-y-1 text-slate-600">
                {food.sources.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>{typeof s === 'string' ? s : s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {food.tags && food.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {food.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                >
                  <Tag className="w-3 h-3 text-slate-400" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
