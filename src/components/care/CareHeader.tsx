import React from 'react';
import { HeartHandshake, Sparkles, BookOpen, ShieldAlert, Apple, CheckSquare, ListOrdered, Home } from 'lucide-react';

interface CareHeaderProps {
  audience: 'beginner' | 'breeder';
  onAudienceChange: (audience: 'beginner' | 'breeder') => void;
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
}

export const CareHeader: React.FC<CareHeaderProps> = ({
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Biblioteca de Cuidados y Bienestar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Cuidados del Periquito Australiano
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Todo lo que necesitas para proporcionar un entorno seguro, saludable y enriquecedor a tu periquito: alimentación equilibrada, alojamiento óptimo, higiene, manejo respetuoso y prevención de peligros.
          </p>
        </div>

        {/* Audience Selector: Principiante / Criador */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shrink-0 self-start md:self-center">
          <button
            id="care-audience-beginner-btn"
            onClick={() => onAudienceChange('beginner')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              audience === 'beginner'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Principiante</span>
          </button>
          <button
            id="care-audience-breeder-btn"
            onClick={() => onAudienceChange('breeder')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              audience === 'breeder'
                ? 'bg-white text-emerald-900 shadow-xs border border-slate-200/70'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Criador / Avanzado</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Subtabs */}
      <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          id="care-tab-topics-btn"
          onClick={() => onSubTabChange('temas')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'temas'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Guías y Temas (16)</span>
        </button>

        <button
          id="care-tab-food-btn"
          onClick={() => onSubTabChange('alimentos')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'alimentos'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Apple className="w-4 h-4" />
          <span>Biblioteca de Alimentos</span>
        </button>

        <button
          id="care-tab-cage-guide-btn"
          onClick={() => onSubTabChange('jaula-interactiva')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'jaula-interactiva'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Diseño de Jaula Ideal</span>
        </button>

        <button
          id="care-tab-safety-btn"
          onClick={() => onSubTabChange('seguridad')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'seguridad'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Peligros y Toxicidades</span>
        </button>

        <button
          id="care-tab-checklists-btn"
          onClick={() => onSubTabChange('checklists')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'checklists'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Listas de Verificación</span>
        </button>

        <button
          id="care-tab-stepguides-btn"
          onClick={() => onSubTabChange('paso-a-paso')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
            activeSubTab === 'paso-a-paso'
              ? 'bg-[#1B4332] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>Paso a Paso</span>
        </button>
      </div>
    </div>
  );
};
