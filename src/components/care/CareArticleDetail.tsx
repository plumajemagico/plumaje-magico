import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Sparkles,
  HeartHandshake,
  CheckSquare,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { CareArticle } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

interface CareArticleDetailProps {
  article: CareArticle;
  allArticles: CareArticle[];
  audience: 'beginner' | 'breeder';
  onBack: () => void;
  onSelectArticle: (article: CareArticle) => void;
  onNavigateToHealth?: (sectionId: string) => void;
}

export const CareArticleDetail: React.FC<CareArticleDetailProps> = ({
  article,
  allArticles,
  audience,
  onBack,
  onSelectArticle,
  onNavigateToHealth,
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Navigation & Breadcrumb */}
      <div className="flex items-center justify-between gap-4">
        <button
          id="care-detail-back-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-800" />
          <span>Volver al índice de cuidados</span>
        </button>

        <div className="flex items-center gap-2">
          <VerificationBadge status={article.verificationStatus} />
        </div>
      </div>

      {/* Article Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Guía Técnica • {article.category.replace('_', ' ')}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
            {article.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {article.shortDescription}
          </p>
        </div>

        {/* Content text */}
        <div className="pt-4 border-t border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {article.content}
        </div>
      </div>

      {/* Sections breakdown */}
      {article.sections && article.sections.length > 0 && (
        <div className="space-y-5">
          <h2 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-800" />
            <span>Desglose y Pautas Detalladas</span>
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {article.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs"
              >
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  {section.heading}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {section.body}
                </p>

                {/* Section tips */}
                {section.tips && section.tips.length > 0 && (
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                      Recomendaciones clave:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Section warnings */}
                {section.warnings && section.warnings.length > 0 && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-2">
                    <span className="text-xs font-bold text-red-950 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      Precauciones críticas:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-red-900">
                      {section.warnings.map((warn, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <span>{warn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Practical Checklist & Dos / Donts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Buenas Prácticas */}
        {article.tips && article.tips.length > 0 && (
          <div className="bg-emerald-50/50 rounded-2xl border border-emerald-200 p-6 space-y-3">
            <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2 font-display">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>Buenas Prácticas Recomendadas</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
              {article.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Advertencias y Alimentos o Prácticas a Evitar */}
        {article.warnings && article.warnings.length > 0 && (
          <div className="bg-amber-50/60 rounded-2xl border border-amber-200 p-6 space-y-3">
            <h3 className="text-base font-bold text-amber-950 flex items-center gap-2 font-display">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>Peligros y Prácticas a Evitar</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950">
              {article.warnings.map((warn, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{warn}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Breeder Notes Section (Dynamic according to audience mode or available content) */}
      {article.breederNotes && (
        <div
          className={`rounded-2xl border p-6 space-y-3 transition-all ${
            audience === 'breeder'
              ? 'bg-slate-900 text-white border-slate-800 shadow-sm'
              : 'bg-slate-50 text-slate-800 border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <h3
              className={`text-sm sm:text-base font-bold flex items-center gap-2 font-display ${
                audience === 'breeder' ? 'text-emerald-400' : 'text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Notas Zootécnicas para Criadores e Instalaciones</span>
            </h3>
            <span
              className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                audience === 'breeder'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  : 'bg-slate-200 text-slate-700'
              }`}
            >
              Modo Criador
            </span>
          </div>
          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              audience === 'breeder' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {article.breederNotes}
          </p>
        </div>
      )}

      {/* Verification Checklist */}
      {article.checklist && article.checklist.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-emerald-800" />
            <span>Lista Rápida de Verificación</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {article.checklist.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Direct Connection to Related Health Topics */}
      {article.relatedHealth && article.relatedHealth.length > 0 && (
        <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-7 space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Vínculo con el Módulo de Salud y Enfermedades
            </span>
            <h3 className="text-lg font-bold font-display">
              Aspectos Médicos y Patológicos Relacionados
            </h3>
            <p className="text-xs text-slate-300">
              Aprende cómo estos cuidados previenen enfermedades específicas documentadas en la biblioteca de salud.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {article.relatedHealth.map((healthItem, hIdx) => (
              <div
                key={hIdx}
                className="bg-emerald-900/60 border border-emerald-800/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-sm font-bold text-white">{healthItem.title}</h4>
                  {healthItem.description && (
                    <p className="text-xs text-emerald-200 mt-0.5">{healthItem.description}</p>
                  )}
                </div>
                {onNavigateToHealth && (
                  <button
                    onClick={() => onNavigateToHealth(healthItem.sectionId)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 text-xs font-bold shrink-0 transition-colors"
                  >
                    <span>Consultar en Salud</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sources and References */}
      {article.sources && article.sources.length > 0 && (
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-2">
          <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Bibliografía y Fuentes Científicas de Respaldo:
          </h4>
          <ul className="space-y-1 text-xs text-slate-500">
            {article.sources.map((src, sIdx) => (
              <li key={sIdx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{src}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Articles Navigation */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-slate-800">Temas de cuidados recomendados:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {article.relatedArticles.map((relSlug) => {
              const relArticle = allArticles.find((a) => a.id === relSlug || a.slug === relSlug);
              if (!relArticle) return null;
              return (
                <button
                  key={relSlug}
                  onClick={() => onSelectArticle(relArticle)}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-700 text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase text-emerald-800">
                      {relArticle.category.replace('_', ' ')}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-emerald-900 line-clamp-1">
                      {relArticle.title}
                    </h5>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-800 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
