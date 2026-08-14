import React, { useState } from 'react';
import { EGG_GUIDES_DATA } from '../../data/breeding';
import { VerificationBadge } from '../VerificationBadge';
import { 
  Layers, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb, 
  Droplets, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export const EggGuideView: React.FC = () => {
  const [selectedEggId, setSelectedEggId] = useState<string>(EGG_GUIDES_DATA[0].id);

  const selectedEgg = EGG_GUIDES_DATA.find((e) => e.id === selectedEggId) || EGG_GUIDES_DATA[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'fertil':
        return 'bg-emerald-50 text-emerald-900 border-emerald-300';
      case 'infertil':
        return 'bg-amber-50 text-amber-900 border-amber-300';
      case 'interrumpido':
        return 'bg-rose-50 text-rose-900 border-rose-300';
      case 'eclosion':
        return 'bg-indigo-50 text-indigo-900 border-indigo-300';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
          <Layers className="w-3.5 h-3.5 text-amber-700" />
          <span>Guía de Huevos, Ovoscopia y Viabilidad</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Examen por Trasiluminación y Salud del Huevo
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
          La ovoscopia permite verificar el desarrollo del embrión a partir del día 6 de incubación continua sin dañar el huevo. Aprende a distinguir huevos fértiles, claros, interrumpidos y a punto de eclosionar.
        </p>
      </div>

      {/* Ovoscopy Category Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EGG_GUIDES_DATA.map((egg) => {
          const isSelected = egg.id === selectedEggId;
          const statusClass = getStatusColor(egg.status);

          return (
            <button
              key={egg.id}
              onClick={() => setSelectedEggId(egg.id)}
              className={`p-5 rounded-3xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-700 text-white border-amber-700 shadow-md ring-2 ring-amber-500/30'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-amber-300'
              }`}
            >
              <div className="space-y-2">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                    isSelected ? 'bg-amber-800 text-amber-100 border-amber-600' : statusClass
                  }`}
                >
                  {egg.statusLabel}
                </span>
                <div className="text-sm font-bold leading-snug">
                  {egg.title}
                </div>
              </div>

              <div
                className={`mt-4 text-[11px] font-semibold ${
                  isSelected ? 'text-amber-100' : 'text-slate-500'
                }`}
              >
                {egg.dayRange}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Egg Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(
                selectedEgg.status
              )}`}
            >
              {selectedEgg.statusLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
              {selectedEgg.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              ⏱️ {selectedEgg.dayRange}
            </p>
          </div>
          <VerificationBadge status={selectedEgg.verificationStatus} />
        </div>

        {/* Visual Appearance & Candling Description */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 font-display">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            Aspecto Visual en la Ovoscopia
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedEgg.visualDescription}
          </p>
        </div>

        {/* Recommended Action */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-2">
          <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-2 font-display">
            <CheckCircle2 className="w-4 h-4 text-amber-700" />
            Acción Recomendada
          </h4>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            {selectedEgg.actionGuidance}
          </p>
        </div>

        {/* Precautions */}
        {selectedEgg.precautions.length > 0 && (
          <div className="p-6 rounded-3xl bg-rose-50/80 border border-rose-200 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-rose-950 flex items-center gap-2 font-display">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Precauciones del Examen
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-rose-900">
              {selectedEgg.precautions.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Safe Candling Protocol & Humidity Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-base font-display">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            <span>Protocolo de Ovoscopia Segura</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>Usar siempre linterna LED de luz fría; no usar bombillas calientes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>Manipular con manos perfectamente lavadas y secas o guantes limpios.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
              <span>No prolongar la iluminación más de 5 a 10 segundos por huevo.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Prohibido:</strong> Pruebas caseras de flotabilidad en agua (asfixia embrionaria).</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-base font-display">
            <Droplets className="w-5 h-5 text-emerald-700" />
            <span>Control de Humedad y Cámara de Aire</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>Humedad óptima del aviario: 55% a 65% medido con higrómetro.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>La cámara de aire debe ocupar aprox. el 15-20% del volumen del huevo al término.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
              <span>Permitir el baño natural de la madre en días secos para regular la humedad del nido.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
