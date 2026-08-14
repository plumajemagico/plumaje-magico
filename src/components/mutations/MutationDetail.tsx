import React, { useState, useEffect } from 'react';
import { MutationItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { MutationGallery } from './MutationGallery';
import { MutationRelated } from './MutationRelated';
import {
  ChevronRight,
  ArrowLeft,
  Feather,
  Dna,
  Sparkles,
  Layers,
  BookOpen,
  Info,
  ShieldCheck,
  ShieldAlert,
  Share2,
  Check,
  Eye,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface Props {
  mutation: MutationItem;
  onBackToCatalog: () => void;
  onSelectMutation: (mutation: MutationItem) => void;
  onNavigateHome: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  dominante: 'Mutación Dominante / Codominante',
  recesiva: 'Mutación Autosómica Recesiva',
  ligada_sexo: 'Mutación Recesiva Ligada al Sexo (Cromosoma Z)',
  factores: 'Factor de Color / Modificador',
  patrones: 'Patrón de Plumaje',
  estructural: 'Mutación Morfológica / Estructural',
  otras: 'Variedad en Estudio / Revisión',
  combinada: 'Combinación Poligénica',
};

const INHERITANCE_NAMES: Record<string, string> = {
  dominant: 'Dominante Autosómica',
  recessive: 'Recesiva Autosómica',
  sex_linked: 'Recesiva Ligada al Sexo (Cromosoma Z)',
  incomplete_dominant: 'Dominancia Incompleta / Semidominante',
  co_dominant: 'Codominante',
  polygenic: 'Herencia Poligénica / Multigénica',
  unknown: 'Patrón de Herencia en Estudio',
};

export const MutationDetail: React.FC<Props> = ({
  mutation,
  onBackToCatalog,
  onSelectMutation,
  onNavigateHome,
}) => {
  const [viewMode, setViewMode] = useState<'beginner' | 'breeder'>('beginner');
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on mutation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mutation.slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="space-y-8 pb-20 animate-in fade-in duration-300">
      
      {/* 1. Breadcrumbs Navigation */}
      <nav
        id="mutation-breadcrumbs"
        className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium overflow-x-auto py-1"
        aria-label="Breadcrumb"
      >
        <button
          onClick={onNavigateHome}
          className="hover:text-emerald-700 transition-colors whitespace-nowrap"
        >
          Inicio
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <button
          onClick={onBackToCatalog}
          className="hover:text-emerald-700 transition-colors whitespace-nowrap"
        >
          Mutaciones
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-900 font-bold truncate max-w-xs sm:max-w-md">
          {mutation.name}
        </span>
      </nav>

      {/* 2. Top Navigation Bar with Back & Share */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <button
          onClick={onBackToCatalog}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-800 hover:border-emerald-300 font-bold text-xs sm:text-sm shadow-xs transition-all w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Catálogo de Mutaciones</span>
        </button>

        {/* View Mode Switcher + Share Button */}
        <div className="flex items-center gap-2.5">
          <div className="bg-slate-100 p-1 rounded-2xl flex items-center border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setViewMode('beginner')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                viewMode === 'beginner'
                  ? 'bg-white text-emerald-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Principiante
            </button>
            <button
              onClick={() => setViewMode('breeder')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                viewMode === 'breeder'
                  ? 'bg-white text-purple-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Criador Técnico
            </button>
          </div>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 font-medium text-xs shadow-xs transition-all flex items-center gap-1.5"
            title="Compartir o copiar enlace"
            aria-label="Compartir ficha"
          >
            {copiedLink ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline text-emerald-700 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Compartir</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Hero Header Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0F2D1F] text-white p-6 sm:p-10 border border-slate-800 shadow-xl">
        <div className="relative z-10 space-y-4 max-w-4xl">
          
          {/* Category & Status Pill Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {CATEGORY_LABELS[mutation.category] || mutation.category}
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-200 border border-white/10">
              {INHERITANCE_NAMES[mutation.inheritance] || mutation.inheritance}
            </span>
            <VerificationBadge status={mutation.verificationStatus} notes={mutation.verificationNotes} />
          </div>

          {/* Title & Aliases */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display">
              {mutation.name}
            </h1>
            {mutation.alternativeNames && mutation.alternativeNames.length > 0 && (
              <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium">
                Sinónimos y denominaciones internacionales: <span className="text-emerald-300 font-semibold">{mutation.alternativeNames.join(' • ')}</span>
              </p>
            )}
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
            {mutation.shortDescription}
          </p>

        </div>
      </div>

      {/* 4. Verification Warning Banner (Discreet notice if pending review) */}
      {mutation.verificationStatus === 'pending_review' && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200/90 text-amber-950 flex items-start gap-3.5 shadow-xs">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
            <h4 className="font-bold text-amber-900">
              Información pendiente de verificación técnica
            </h4>
            <p className="text-amber-800">
              {mutation.verificationNotes ||
                'Los datos históricos y genéticos de esta variedad están siendo cotejados con los estándares de la World Budgerigar Organisation (WBO) y la COM.'}
            </p>
          </div>
        </div>
      )}

      {/* 5. General Description Section */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 font-display">
            Descripción General de la Variedad
          </h2>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          {mutation.description}
        </p>
      </section>

      {/* 6. Visual Phenotype / Morphological Standard */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Fenotipo y Estándar Visual
              </h2>
              <p className="text-xs text-slate-500">
                Puntos anatómicos clave para la identificación precisa del ejemplar
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Color Corporal (Pecho, Vientre y Rabadilla)
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {mutation.phenotype.bodyColor}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Marcas Alares y Ondulaciones
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {mutation.phenotype.wingMarkings}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Máscara, Frente y Manchas Gulares
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {mutation.phenotype.headAndMask}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Cera Nasal y Patas
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {mutation.phenotype.cereAndLegs}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 md:col-span-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Ojos (Iris) y Plumas Timoneras de la Cola
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {mutation.phenotype.tailAndEyes}
            </p>
          </div>

        </div>
      </section>

      {/* 7. Genetics & Inheritance Rules */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
            <Dna className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 font-display">
              Comportamiento Genético y Transmisión
            </h2>
            <p className="text-xs text-slate-500">
              Patrón de herencia cromosómica y reglas de portadores
            </p>
          </div>
        </div>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          {mutation.geneticsExplanation}
        </p>

        {/* SF vs DF Expressions if applicable */}
        {mutation.expressionSF_DF && (
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
            <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-amber-700" />
              Diferencia de Expresión: Factor Simple (SF) vs Factor Doble (DF)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-white rounded-xl border border-amber-200/60 space-y-1">
                <span className="font-bold text-amber-950 block">Factor Simple (SF - 1 dosis):</span>
                <p className="text-amber-900 leading-relaxed">{mutation.expressionSF_DF.singleFactor}</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200/60 space-y-1">
                <span className="font-bold text-amber-950 block">Factor Doble (DF - 2 dosis):</span>
                <p className="text-amber-900 leading-relaxed">{mutation.expressionSF_DF.doubleFactor}</p>
              </div>
            </div>
          </div>
        )}

        {/* Dual cards: Carriers & Breeder tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 space-y-2">
            <span className="text-xs font-bold text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-purple-700" />
              Regla Fundamental de Portadores (Split / /)
            </span>
            <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
              {mutation.carriersExplanation}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
            <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              Consejos de Selección y Cría
            </span>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              {mutation.breedingTips}
            </p>
          </div>

        </div>
      </section>

      {/* 8. Combinations Summary */}
      {mutation.combinationsSummary && mutation.combinationsSummary.length > 0 && (
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Combinaciones Populares en Avicultura
              </h2>
              <p className="text-xs text-slate-500">
                Variedades complejas y fenotipos de exhibición
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {mutation.combinationsSummary.map((combo, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <span>{combo}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Photo Gallery */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 font-display">
                Galería Fotográfica
              </h2>
              <p className="text-xs text-slate-500">
                Imágenes documentadas con verificación morfológica
              </p>
            </div>
          </div>
        </div>

        <MutationGallery images={mutation.images} mutationName={mutation.name} />
      </section>

      {/* 10. Related Mutations */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
        <MutationRelated
          currentMutation={mutation}
          onSelectMutation={onSelectMutation}
        />
      </section>

      {/* 11. Sources and References */}
      {mutation.sources && mutation.sources.length > 0 && (
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              <strong className="text-slate-800">Fuentes y Referencias Oficiales:</strong>{' '}
              {mutation.sources.join(' • ')}
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Plumaje Mágico © Estándares Ornitológicos
          </div>
        </div>
      )}

    </div>
  );
};
