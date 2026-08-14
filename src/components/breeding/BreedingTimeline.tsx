import React, { useState } from 'react';
import { BREEDING_STAGES_DATA } from '../../data/breeding';
import { VerificationBadge } from '../VerificationBadge';
import { 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Egg, 
  ShieldCheck, 
  Calendar,
  Layers
} from 'lucide-react';

export const BreedingTimeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('etapa-preparacion');

  const activeIndex = BREEDING_STAGES_DATA.findIndex((s) => s.id === activeStageId);
  const currentStage = activeIndex >= 0 ? BREEDING_STAGES_DATA[activeIndex] : BREEDING_STAGES_DATA[0];

  const handleNext = () => {
    if (activeIndex < BREEDING_STAGES_DATA.length - 1) {
      setActiveStageId(BREEDING_STAGES_DATA[activeIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveStageId(BREEDING_STAGES_DATA[activeIndex - 1].id);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Header Info */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
          <Clock className="w-3.5 h-3.5 text-amber-700" />
          <span>Cronología Secuencial del Ciclo Reproductivo</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          De la Preparación al Destete Independiente
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Haz clic en cada fase para explorar los requisitos biológicos indispensables, estimaciones temporales, puntos de atención crítica y recomendaciones zootécnicas para criadores.
        </p>
      </div>

      {/* Interactive Horizontal Stage Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {BREEDING_STAGES_DATA.map((stage, idx) => {
          const isActive = stage.id === activeStageId;
          const isPassed = idx < activeIndex;

          return (
            <button
              key={stage.id}
              id={`timeline-stage-btn-${stage.slug}`}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between relative ${
                isActive
                  ? 'bg-amber-700 text-white border-amber-700 shadow-md ring-2 ring-amber-500/30'
                  : isPassed
                  ? 'bg-amber-50/70 text-slate-800 border-amber-200 hover:bg-amber-100/60'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider ${
                      isActive ? 'text-amber-200' : isPassed ? 'text-amber-700' : 'text-slate-400'
                    }`}
                  >
                    Fase {idx + 1}
                  </span>
                  {isPassed && !isActive && (
                    <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                  )}
                </div>
                <div className="text-xs font-bold leading-tight line-clamp-2">
                  {stage.name || stage.title.split('. ')[1] || stage.title}
                </div>
              </div>

              <div
                className={`mt-2 text-[10px] font-semibold truncate ${
                  isActive ? 'text-amber-100' : 'text-slate-500'
                }`}
              >
                {stage.timeline || stage.duration}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Active Stage Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-8">
        {/* Stage Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                Paso {activeIndex + 1} de {BREEDING_STAGES_DATA.length}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                ⏱️ {currentStage.estimatedDuration || currentStage.duration}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              {currentStage.title}
            </h3>
            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              {currentStage.summary}
            </p>
          </div>

          <VerificationBadge status={currentStage.verificationStatus} />
        </div>

        {/* Key Requirements */}
        {currentStage.requirements && currentStage.requirements.length > 0 && (
          <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200 space-y-3">
            <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2 font-display">
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
              Requisitos Esenciales de esta Fase
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-amber-950">
              {currentStage.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Detailed Points */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 font-display">
            Protocolo y Descripción Biológica
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {currentStage.details.map((det, i) => (
              <li key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{det}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Critical Warnings */}
        {currentStage.criticalWarnings && currentStage.criticalWarnings.length > 0 && (
          <div className="p-6 rounded-3xl bg-rose-50/80 border border-rose-200 space-y-3">
            <h4 className="text-sm font-bold text-rose-950 flex items-center gap-2 font-display">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Puntos Críticos y Advertencias
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-rose-950">
              {currentStage.criticalWarnings.map((warn, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{warn}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Breeder Tips */}
        {currentStage.tips && currentStage.tips.length > 0 && (
          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-3">
            <h4 className="text-sm font-bold text-emerald-950 flex items-center gap-2 font-display">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Consejos Prácticos del Criador
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-950">
              {currentStage.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Sources */}
        {currentStage.sources && (
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="font-semibold">Fuentes:</span>
            <span>{currentStage.sources.join(' • ')}</span>
          </div>
        )}

        {/* Next / Prev Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Fase Anterior</span>
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === BREEDING_STAGES_DATA.length - 1}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeIndex === BREEDING_STAGES_DATA.length - 1
                ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                : 'bg-amber-700 text-white hover:bg-amber-800 shadow-sm'
            }`}
          >
            <span>Siguiente Fase</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
