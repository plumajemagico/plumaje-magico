import React, { useState } from 'react';
import {
  ListOrdered,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import { CARE_STEP_GUIDES_DATA } from '../../data/care';
import { CareStepGuide } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

export const CareStepGuidesView: React.FC = () => {
  const [activeGuideId, setActiveGuideId] = useState<string>('guia-montaje-jaula');

  const activeGuide =
    CARE_STEP_GUIDES_DATA.find((g) => g.id === activeGuideId) || CARE_STEP_GUIDES_DATA[0];

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
          <ListOrdered className="w-3.5 h-3.5" />
          <span>Guías Prácticas Paso a Paso</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Procedimientos y Protocolos de Cuidado
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-4xl leading-relaxed">
          Instrucciones metódicas y detalladas para ejecutar las tareas zootécnicas clave de forma segura y sin estrés para tus aves.
        </p>
      </div>

      {/* Guide selector */}
      <div className="flex flex-wrap gap-2">
        {CARE_STEP_GUIDES_DATA.map((guide) => (
          <button
            key={guide.id}
            id={`step-guide-tab-${guide.id}`}
            onClick={() => setActiveGuideId(guide.id)}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              activeGuideId === guide.id
                ? 'bg-emerald-800 text-white shadow-sm font-bold'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{guide.title}</span>
          </button>
        ))}
      </div>

      {/* Active Guide Content */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              {activeGuide.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {activeGuide.summary}
            </p>
          </div>
          <VerificationBadge status={activeGuide.verificationStatus} />
        </div>

        {/* Steps Timeline */}
        <div className="space-y-4 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
          {activeGuide.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative pl-12 space-y-2 group"
            >
              {/* Step circle */}
              <div className="absolute left-0 top-0.5 w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
                {step.stepNumber}
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 space-y-3">
                <h4 className="text-base font-bold text-slate-900 font-display">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {step.description}
                </p>

                {/* Tips if present */}
                {step.tips && step.tips.length > 0 && (
                  <div className="p-3 rounded-xl bg-emerald-100/60 text-emerald-950 text-xs space-y-1">
                    <span className="font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-wider text-emerald-900">
                      <Sparkles className="w-3.5 h-3.5" />
                      Consejo Práctico:
                    </span>
                    <ul className="space-y-1">
                      {step.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warnings if present */}
                {step.warnings && step.warnings.length > 0 && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-950 text-xs space-y-1 border border-red-200">
                    <span className="font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-wider text-red-900">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      Atención:
                    </span>
                    <ul className="space-y-1">
                      {step.warnings.map((warn, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                          <span>{warn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sources */}
        {activeGuide.sources && activeGuide.sources.length > 0 && (
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Fuentes: {activeGuide.sources.join(' • ')}</span>
            <span className="text-emerald-800 font-semibold">Protocolo Validado</span>
          </div>
        )}
      </div>
    </div>
  );
};
