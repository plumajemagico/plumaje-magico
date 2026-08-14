import React from 'react';
import { VisualProfile as VisualProfileType } from '../../types';
import { 
  Eye, 
  Feather, 
  Sparkles, 
  Layers, 
  CircleDot, 
  Palette, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';

interface Props {
  profile: VisualProfileType;
  title?: string;
  className?: string;
  isCompact?: boolean;
}

export const VisualProfile: React.FC<Props> = ({
  profile,
  title = 'Perfil Anatómico y Distribución Visual',
  className = '',
  isCompact = false
}) => {
  const parts = [
    {
      id: 'cuerpo',
      label: 'Color Corporal',
      value: profile.bodyColor,
      icon: Palette,
      badge: 'Pecho, Vientre y Rabadilla',
      colorClass: 'bg-emerald-50 text-emerald-900 border-emerald-200'
    },
    {
      id: 'mascara',
      label: 'Máscara y Frente',
      value: profile.mask,
      icon: CircleDot,
      badge: 'Zona Facial',
      colorClass: 'bg-amber-50 text-amber-900 border-amber-200'
    },
    ...(profile.cheekPatches ? [{
      id: 'gulares',
      label: 'Manchas Gulares',
      value: profile.cheekPatches,
      icon: Sparkles,
      badge: 'Gotas del Cuello (Diagnóstico)',
      colorClass: 'bg-purple-50 text-purple-900 border-purple-200'
    }] : []),
    {
      id: 'ondulaciones',
      label: 'Ondulaciones y Dibujo',
      value: profile.wingMarkings,
      icon: Layers,
      badge: 'Cabeza y Manto',
      colorClass: 'bg-stone-50 text-stone-900 border-stone-200'
    },
    {
      id: 'alas',
      label: 'Alas y Remeras',
      value: profile.wings,
      icon: Feather,
      badge: 'Plumas de Vuelo',
      colorClass: 'bg-sky-50 text-sky-900 border-sky-200'
    },
    {
      id: 'cola',
      label: 'Cola (Timoneras)',
      value: profile.tail,
      icon: Feather,
      badge: 'Plumas Centrales',
      colorClass: 'bg-indigo-50 text-indigo-900 border-indigo-200'
    },
    {
      id: 'ojos',
      label: 'Ojos e Iris',
      value: profile.eyes,
      icon: Eye,
      badge: 'Pupila e Iris',
      colorClass: 'bg-rose-50 text-rose-900 border-rose-200'
    },
    {
      id: 'cera',
      label: 'Cera Nasal',
      value: profile.cere,
      icon: ShieldCheck,
      badge: 'Dimorfismo y Celo',
      colorClass: 'bg-teal-50 text-teal-900 border-teal-200'
    },
    {
      id: 'patas',
      label: 'Patas y Uñas',
      value: profile.legs,
      icon: HelpCircle,
      badge: 'Escamas y Pigmentación',
      colorClass: 'bg-slate-50 text-slate-900 border-slate-200'
    }
  ];

  if (isCompact) {
    return (
      <div className={`space-y-2 ${className}`}>
        {parts.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="flex items-start justify-between p-2.5 rounded-xl bg-white border border-[#D8E2DC] text-xs gap-3"
            >
              <div className="flex items-center gap-2 shrink-0 font-semibold text-[#1B4332]">
                <Icon className="w-3.5 h-3.5 text-[#40916C]" />
                <span>{p.label}:</span>
              </div>
              <div className="text-right text-[#52796F] font-medium leading-relaxed">
                {p.value}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`p-5 sm:p-7 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-4 ${className}`}>
      {title && (
        <div className="flex items-center justify-between border-b border-[#D8E2DC] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-100/70 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1B4332] font-display">
                {title}
              </h4>
              <p className="text-xs text-[#52796F]">
                Desglose anatómico según estándares morfológicos oficiales WBO
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
        {parts.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="p-3.5 rounded-2xl bg-white border border-[#D8E2DC] shadow-2xs hover:border-[#B7C9C0] transition-colors flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#F1F3F2] flex items-center justify-center text-[#2D6A4F]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#1B4332]">{p.label}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${p.colorClass}`}>
                  {p.badge}
                </span>
              </div>
              <p className="text-xs text-[#52796F] font-medium leading-relaxed">
                {p.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
