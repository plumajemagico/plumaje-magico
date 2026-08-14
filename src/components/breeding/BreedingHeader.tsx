import React from 'react';
import { 
  Egg, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Clock, 
  Feather, 
  Layers, 
  CheckSquare, 
  FileSpreadsheet, 
  ShieldCheck 
} from 'lucide-react';

interface BreedingHeaderProps {
  audience: 'beginner' | 'breeder';
  onAudienceChange: (audience: 'beginner' | 'breeder') => void;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export const BreedingHeader: React.FC<BreedingHeaderProps> = ({
  audience,
  onAudienceChange,
  activeSubTab,
  onSubTabChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
            <Egg className="w-3.5 h-3.5 text-amber-700" />
            <span>Biblioteca de Cría y Reproducción Responsable</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Cría y Reproducción del Periquito Australiano
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Guía integral para comprender el proceso reproductivo con rigor biológico, desde la preparación de la pareja y la selección ética hasta el desarrollo, anillado oficial y destete independiente de los polluelos.
          </p>
        </div>

        {/* Audience Selector: Principiante / Criador */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shrink-0 self-start md:self-center">
          <button
            id="breeding-audience-beginner-btn"
            onClick={() => onAudienceChange('beginner')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              audience === 'beginner'
                ? 'bg-white text-amber-950 shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Principiante</span>
          </button>
          <button
            id="breeding-audience-breeder-btn"
            onClick={() => onAudienceChange('breeder')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              audience === 'breeder'
                ? 'bg-white text-amber-950 shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Criador / Avanzado</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Subtabs */}
      <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          id="breeding-tab-temas-btn"
          onClick={() => onSubTabChange('temas')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'temas'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Biblioteca de Guías ({14})</span>
        </button>

        <button
          id="breeding-tab-ciclo-btn"
          onClick={() => onSubTabChange('ciclo')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'ciclo'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Cronología del Ciclo (8 Fases)</span>
        </button>

        <button
          id="breeding-tab-polluelos-btn"
          onClick={() => onSubTabChange('polluelos')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'polluelos'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Feather className="w-4 h-4" />
          <span>Desarrollo del Polluelo (Día 1-42)</span>
        </button>

        <button
          id="breeding-tab-huevos-btn"
          onClick={() => onSubTabChange('huevos')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'huevos'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Guía de Huevos y Ovoscopia</span>
        </button>

        <button
          id="breeding-tab-checklists-btn"
          onClick={() => onSubTabChange('checklists')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'checklists'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Listas de Verificación</span>
        </button>

        <button
          id="breeding-tab-registro-btn"
          onClick={() => onSubTabChange('registro')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'registro'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <FileSpreadsheet className="w-4 h-4" />
          <span>Ficha de Registro de Cría</span>
        </button>
      </div>

      {/* Ethical Breeding Highlight Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-amber-950 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/20 border border-amber-500/30 shrink-0 text-amber-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold font-display text-white">
              Los Pilares de la Cría Ética y Responsable
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
              Edad mínima estricta de 10-12 meses • Nido con fondo cóncavo antipatas de rana • Máximo 2 nidadas por año • Anillado oficial a los 6-8 días (calibre 4.0-4.2 mm) • Sin reproducción de aves enfermas o con consanguinidad cercana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
