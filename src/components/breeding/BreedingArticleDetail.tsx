import React from 'react';
import { BreedingArticle, BreedingRelatedItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  BookOpen, 
  ShieldAlert, 
  HeartHandshake, 
  Dna, 
  Layers, 
  ExternalLink, 
  ChevronRight,
  Info
} from 'lucide-react';

interface BreedingArticleDetailProps {
  article: BreedingArticle;
  allArticles: BreedingArticle[];
  audience: 'beginner' | 'breeder';
  onBack: () => void;
  onSelectArticle: (article: BreedingArticle) => void;
  onNavigateToHealth?: (sectionId?: string) => void;
  onNavigateToCare?: (sectionId?: string) => void;
  onNavigateToGenetics?: (sectionId?: string) => void;
}

export const BreedingArticleDetail: React.FC<BreedingArticleDetailProps> = ({
  article,
  allArticles,
  audience,
  onBack,
  onSelectArticle,
  onNavigateToHealth,
  onNavigateToCare,
  onNavigateToGenetics,
}) => {
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Top Breadcrumb and Back Button */}
      <div className="flex items-center justify-between gap-4">
        <button
          id="breeding-detail-back-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500" />
          <span>Volver a la Biblioteca de Cría</span>
        </button>

        <VerificationBadge status={article.verificationStatus} />
      </div>

      {/* Article Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-2xl">{article.icon || '🪺'}</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
              Módulo: {article.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            {article.shortDescription}
          </p>
        </div>

        {/* Audience Notice */}
        {audience === 'breeder' && article.breederNotes && (
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm">
              <BookOpen className="w-4 h-4 text-amber-700" />
              <span>Nota Técnica para Criadores y Aviarios</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
              {article.breederNotes}
            </p>
          </div>
        )}

        {/* Main Content Introduction */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-2 border-t border-slate-100">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Structured Sections */}
        {article.sections && article.sections.length > 0 && (
          <div className="space-y-8 pt-6 border-t border-slate-100">
            {article.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                  {section.heading}
                </h2>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {section.body}
                </p>

                {section.tips && section.tips.length > 0 && (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
                    <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Consejo Práctico
                    </span>
                    <ul className="space-y-1.5 text-xs text-emerald-950">
                      {section.tips.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.warnings && section.warnings.length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-2">
                    <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      Punto Crítico / Advertencia
                    </span>
                    <ul className="space-y-1.5 text-xs text-rose-950">
                      {section.warnings.map((w, wIdx) => (
                        <li key={wIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Global Practical Tips Box */}
        {article.tips && article.tips.length > 0 && (
          <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2 font-display">
              <CheckCircle2 className="w-4 h-4 text-amber-700" />
              Recomendaciones Clave de Manejo
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-amber-950">
              {article.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Global Warnings Box */}
        {article.warnings && article.warnings.length > 0 && (
          <div className="p-6 rounded-3xl bg-rose-50/80 border border-rose-200 space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-rose-950 flex items-center gap-2 font-display">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Precauciones Indispensables
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-rose-950">
              {article.warnings.map((w, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Special Notice for Genetics Calculator Coming Soon */}
        {article.category === 'genetica' && (
          <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-50 to-amber-50 border border-indigo-200/80 space-y-3">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm sm:text-base">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>Próximamente: Calculadora Genética y Simulador de Cruces</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              El equipo de Plumaje Mágico está desarrollando el motor de cálculo genético integral para predecir descendencias, porcentajes de herencia ligada al sexo y combinaciones de mutaciones complejas con rigor zootécnico.
            </p>
          </div>
        )}

        {/* Linked Modules: Health, Care, Genetics */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 font-display">
            Módulos y Enlaces Relacionados
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {article.relatedHealth &&
              article.relatedHealth.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigateToHealth && onNavigateToHealth(item.id)}
                  className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-200 hover:border-rose-300 text-left transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-700">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Salud & Cuidados Clínicos</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                      {item.title}
                    </div>
                    {item.description && (
                      <p className="text-[11px] text-slate-600 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-700 mt-2">
                    <span>Consultar en /salud</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </button>
              ))}

            {article.relatedCare &&
              article.relatedCare.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigateToCare && onNavigateToCare(item.id)}
                  className="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200 hover:border-emerald-300 text-left transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <span>Cuidados & Bienestar</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </div>
                    {item.description && (
                      <p className="text-[11px] text-slate-600 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 mt-2">
                    <span>Consultar en /cuidados</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </button>
              ))}

            {article.relatedGenetics &&
              article.relatedGenetics.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigateToGenetics && onNavigateToGenetics(item.id)}
                  className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-200 hover:border-indigo-300 text-left transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                      <Dna className="w-3.5 h-3.5" />
                      <span>Genética & Mutaciones</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                      {item.title}
                    </div>
                    {item.description && (
                      <p className="text-[11px] text-slate-600 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-indigo-700 mt-2">
                    <span>Consultar en /genetica</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Scientific Sources & Verification */}
        {article.sources && article.sources.length > 0 && (
          <div className="pt-6 border-t border-slate-100 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Fuentes Bibliográficas y Zootécnicas Consultadas
            </h4>
            <ul className="space-y-1 text-xs text-slate-500">
              {article.sources.map((src, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Next / Previous Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevArticle ? (
          <button
            onClick={() => onSelectArticle(prevArticle)}
            className="p-4 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 text-left transition-all group flex items-center gap-3 shadow-2xs"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center shrink-0">
              <ArrowLeft className="w-4 h-4 text-slate-600 group-hover:text-amber-800" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Guía Anterior</span>
              <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-800 line-clamp-1">
                {prevArticle.title}
              </div>
            </div>
          </button>
        ) : <div />}

        {nextArticle && (
          <button
            onClick={() => onSelectArticle(nextArticle)}
            className="p-4 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 text-right transition-all group flex items-center justify-end gap-3 shadow-2xs"
          >
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400">Siguiente Guía</span>
              <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-800 line-clamp-1">
                {nextArticle.title}
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-100 flex items-center justify-center shrink-0">
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-800" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
