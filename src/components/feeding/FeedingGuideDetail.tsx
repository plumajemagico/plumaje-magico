import React from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Lightbulb, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink, 
  ShieldAlert, 
  HeartHandshake, 
  Egg, 
  CheckCircle2, 
  Wheat, 
  Salad, 
  Droplets, 
  Baby, 
  ListPlus 
} from 'lucide-react';
import { FeedingGuideArticle, FoodItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { FoodCard } from './FoodCard';

interface FeedingGuideDetailProps {
  article: FeedingGuideArticle;
  allFoods: FoodItem[];
  audience?: 'beginner' | 'breeder';
  onBack: () => void;
  onSelectFood: (food: FoodItem) => void;
  onNavigateToHealth?: (sectionId?: string) => void;
  onNavigateToCare?: (category?: string) => void;
  onNavigateToBreeding?: (sectionId?: string) => void;
}

export const FeedingGuideDetail: React.FC<FeedingGuideDetailProps> = ({
  article,
  allFoods,
  audience = 'beginner',
  onBack,
  onSelectFood,
  onNavigateToHealth,
  onNavigateToCare,
  onNavigateToBreeding,
}) => {
  // Find related food objects if any
  const relatedFoodItems = (article.relatedFoods || [])
    .map((id) => allFoods.find((f) => f.id === id || f.slug === id))
    .filter((f): f is FoodItem => f !== undefined);

  const getGuideIcon = (category: string) => {
    switch (category) {
      case 'semillas':
        return Wheat;
      case 'agua':
        return Droplets;
      case 'cria':
        return Egg;
      case 'polluelos':
        return Baby;
      case 'nuevos-alimentos':
        return ListPlus;
      case 'problemas':
        return AlertTriangle;
      default:
        return BookOpen;
    }
  };

  const GuideIcon = getGuideIcon(article.category);

  return (
    <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-fadeIn pb-12">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs w-fit"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <span>Volver a Alimentación</span>
        </button>

        <nav className="text-xs text-slate-500 flex items-center gap-1.5">
          <span>Alimentación</span>
          <span>/</span>
          <span>Guías Especializadas</span>
          <span>/</span>
          <span className="font-semibold text-slate-800">{article.title}</span>
        </nav>
      </div>

      {/* Guide Header Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            <GuideIcon className="w-3.5 h-3.5" />
            <span>Guía Especializada de Alimentación</span>
          </div>
          <VerificationBadge status={article.verificationStatus} size="md" />
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display leading-tight">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            {article.subtitle}
          </p>
        )}

        {/* Audience note if in breeder mode */}
        {audience === 'breeder' && article.breederNotes && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-900">Enfoque para criadores: </span>
              <span>{article.breederNotes}</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Body */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Main Article Content (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Article Text */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Sections if any */}
          {article.sections && article.sections.length > 0 && (
            <div className="space-y-4">
              {article.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 space-y-3 shadow-xs"
                >
                  <h2 className="text-lg font-bold text-slate-900 font-display">
                    {section.heading}
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {section.body}
                  </p>
                  {section.tips && section.tips.length > 0 && (
                    <div className="mt-3 p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-1">
                      {section.tips.map((tip, tIdx) => (
                        <p key={tIdx} className="text-xs text-emerald-900 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </p>
                      ))}
                    </div>
                  )}
                  {section.warnings && section.warnings.length > 0 && (
                    <div className="mt-3 p-3.5 bg-amber-50/70 rounded-2xl border border-amber-100 space-y-1">
                      {section.warnings.map((warn, wIdx) => (
                        <p key={wIdx} className="text-xs text-amber-950 flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                          <span>{warn}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tips Box */}
          {article.tips && article.tips.length > 0 && (
            <div className="bg-emerald-50/80 rounded-3xl border border-emerald-200 p-6 space-y-3">
              <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2 font-display">
                <Lightbulb className="w-5 h-5 text-emerald-700" />
                <span>Consejos Prácticos Clave</span>
              </h3>
              <ul className="space-y-2">
                {article.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings Box */}
          {article.warnings && article.warnings.length > 0 && (
            <div className="bg-amber-50/80 rounded-3xl border border-amber-200 p-6 space-y-3">
              <h3 className="text-base font-bold text-amber-950 flex items-center gap-2 font-display">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
                <span>Advertencias Sanitarias</span>
              </h3>
              <ul className="space-y-2">
                {article.warnings.map((warn, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{warn}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar (1 Col) */}
        <div className="space-y-6">
          {/* Related Foods */}
          {relatedFoodItems.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">
                Alimentos Mencionados
              </h3>
              <div className="space-y-2">
                {relatedFoodItems.map((food) => (
                  <button
                    key={food.id}
                    onClick={() => onSelectFood(food)}
                    className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-[#2D6A4F]/40 hover:bg-[#F1F3F2]/40 transition-all flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-800 block">{food.name}</span>
                      <span className="text-[11px] text-slate-500 capitalize">{food.category}</span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      Ver ficha
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cross-Module Connections */}
          {(article.relatedHealth || article.relatedCare || article.relatedBreeding) && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-3 shadow-xs">
              <h3 className="text-base font-bold text-slate-900">
                Módulos Relacionados
              </h3>
              <div className="space-y-2">
                {article.relatedHealth?.map((h) => (
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

                {article.relatedCare?.map((c) => (
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

                {article.relatedBreeding?.map((b) => (
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

          {/* Sources */}
          {article.sources && article.sources.length > 0 && (
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 space-y-2 text-xs">
              <h4 className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
                Bibliografía y Respaldos
              </h4>
              <ul className="space-y-1 text-slate-600">
                {article.sources.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>{typeof s === 'string' ? s : s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
