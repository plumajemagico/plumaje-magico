import React from 'react';
import { 
  Apple, 
  Wheat, 
  Salad, 
  Cherry, 
  Flower2, 
  Sparkles, 
  ShieldAlert, 
  BookOpen, 
  Droplets, 
  Egg, 
  Baby, 
  ListPlus, 
  AlertTriangle, 
  Sprout, 
  Users, 
  Award,
  Layers
} from 'lucide-react';
import { FEEDING_CATEGORIES_CONFIG } from '../../data/nutrition';

interface FeedingHeaderProps {
  activeSubTab: string;
  onSubTabChange: (subTabId: string) => void;
  audience: 'beginner' | 'breeder';
  onAudienceChange: (audience: 'beginner' | 'breeder') => void;
}

export const FeedingHeader: React.FC<FeedingHeaderProps> = ({
  activeSubTab,
  onSubTabChange,
  audience,
  onAudienceChange,
}) => {
  const getSubTabIcon = (id: string) => {
    switch (id) {
      case 'todos':
        return Layers;
      case 'semillas':
        return Wheat;
      case 'cereales':
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
      case 'nutricion':
        return BookOpen;
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
        return Apple;
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner with Audience Toggle */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#40916C] p-6 sm:p-10 text-white shadow-md">
        {/* Subtle decorative background circles */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#52B788]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-white backdrop-blur-sm border border-white/20">
              <Apple className="w-3.5 h-3.5" />
              <span>Biblioteca Especializada de Nutrición Aviar</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display">
              Alimentación del Periquito Australiano
            </h1>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
              Consulta fichas detalladas de alimentos, semillas limpias, verduras frescas, frutas, hierbas silvestres y protocolos de seguridad basados en bibliografía veterinaria aviar rigurosa.
            </p>
          </div>

          {/* Audience Switcher */}
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 flex items-center shrink-0 self-start md:self-auto">
            <button
              id="audience-btn-beginner"
              onClick={() => onAudienceChange('beginner')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                audience === 'beginner'
                  ? 'bg-white text-[#1B4332] shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Tutor / Cuidador</span>
            </button>
            <button
              id="audience-btn-breeder"
              onClick={() => onAudienceChange('breeder')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                audience === 'breeder'
                  ? 'bg-white text-[#1B4332] shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Criador</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs Carousel / Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-2 shadow-xs overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max">
          {FEEDING_CATEGORIES_CONFIG.map((cat) => {
            const Icon = getSubTabIcon(cat.id);
            const isActive = activeSubTab === cat.id;
            return (
              <button
                key={cat.id}
                id={`feeding-subtab-${cat.id}`}
                onClick={() => onSubTabChange(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? cat.id === 'evitar'
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-[#2D6A4F] text-white shadow-xs'
                    : cat.id === 'evitar'
                    ? 'text-red-700 hover:bg-red-50 hover:text-red-800'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : cat.id === 'evitar' ? 'text-red-600' : 'text-slate-500'}`} />
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
