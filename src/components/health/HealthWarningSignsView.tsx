import React, { useState } from 'react';
import { WARNING_SIGNS_DATA } from '../../data/health';
import { AlertTriangle, Clock, Eye, ShieldAlert, ArrowRight, CheckCircle2, HeartPulse } from 'lucide-react';
import { MedicalDisclaimer } from './MedicalDisclaimer';

interface Props {
  onOpenConditionSlug?: (slug: string) => void;
}

export const HealthWarningSignsView: React.FC<Props> = ({ onOpenConditionSlug }) => {
  const [selectedSeverity, setSelectedSeverity] = useState<'all' | 'emergencia' | 'urgente' | 'alta' | 'media'>('all');

  const filteredSigns = WARNING_SIGNS_DATA.filter((sign) => {
    if (selectedSeverity === 'all') return true;
    return sign.severity === selectedSeverity;
  });

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'emergencia':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-rose-600 text-white shadow-xs animate-pulse">
            Emergencia Vital (Horas)
          </span>
        );
      case 'urgente':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-white shadow-2xs">
            Urgente (Mismo Día)
          </span>
        );
      case 'alta':
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200">
            Atención Alta
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
            Vigilancia 24h
          </span>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold border border-rose-200">
          <HeartPulse className="w-3.5 h-3.5" />
          <span>Detección Precoz • El Factor Tiempo es Crítico</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
          Signos de Alerta Temprana en el Periquito
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          En la naturaleza, los periquitos son animales presa y poseen un fuerte instinto de enmascarar la enfermedad ("efecto presa") para no ser expulsados de la bandada o atacados por depredadores. Cuando un síntoma se hace evidente a simple vista, la enfermedad suele llevar días o semanas de evolución silenciosa.
        </p>
      </div>

      <MedicalDisclaimer variant="banner" />

      {/* Severity filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-500 font-medium mr-1">Filtrar por nivel de urgencia:</span>
        <button
          onClick={() => setSelectedSeverity('all')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            selectedSeverity === 'all'
              ? 'bg-[#2D6A4F] text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todos ({WARNING_SIGNS_DATA.length})
        </button>
        <button
          onClick={() => setSelectedSeverity('emergencia')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            selectedSeverity === 'emergencia'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
          }`}
        >
          Emergencias Vitales
        </button>
        <button
          onClick={() => setSelectedSeverity('urgente')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
            selectedSeverity === 'urgente'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-white text-amber-800 border border-amber-200 hover:bg-amber-50'
          }`}
        >
          Urgentes (Mismo Día)
        </button>
      </div>

      {/* Warning signs cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredSigns.map((sign, idx) => (
          <div
            key={sign.id}
            id={`warning-sign-${sign.id}`}
            className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <div>{getSeverityBadge(sign.severity)}</div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {sign.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sign.description}
              </p>

              {/* What to look for */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  Qué observar en el periquito:
                </span>
                <p className="text-slate-600 leading-relaxed">{sign.whatToLookFor}</p>
              </div>
            </div>

            {/* Action Required */}
            <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-rose-900 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block text-rose-950">Acción recomendada:</strong>
                <p className="text-rose-900/90 leading-relaxed">{sign.actionRequired}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Preparation Box */}
      <div className="bg-[#1B4332] text-white p-6 sm:p-8 rounded-3xl border border-[#2D6A4F]/80 shadow-md space-y-4">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B7E4C7] font-bold">
          <Clock className="w-4 h-4 text-[#74C69D]" />
          <span>Protocolo de Traslado al Veterinario</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
          ¿Cómo transportar con seguridad a un periquito enfermo?
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#D8E2DC]">
          <li className="flex items-start gap-2 bg-[#2D6A4F]/40 p-3 rounded-xl border border-[#40916C]/40">
            <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
            <span><strong>Caja de cartón pequeña o transportín:</strong> Reduce el estrés visual, evita que se golpee al aletear y retiene mejor el calor corporal.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#2D6A4F]/40 p-3 rounded-xl border border-[#40916C]/40">
            <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
            <span><strong>Papel blanco en el fondo:</strong> Coloca papel de cocina sin tintas para que el veterinario pueda examinar las heces frescas recién expulsadas.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#2D6A4F]/40 p-3 rounded-xl border border-[#40916C]/40">
            <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
            <span><strong>Proteger de corrientes de aire:</strong> Cubre el transportín con una toalla tibia durante el trayecto en coche.</span>
          </li>
          <li className="flex items-start gap-2 bg-[#2D6A4F]/40 p-3 rounded-xl border border-[#40916C]/40">
            <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
            <span><strong>No medicar antes de la cita:</strong> No administres antibióticos ni remedios caseros, ya que falsean los resultados de frotis y análisis clínicos.</span>
          </li>
        </ul>
      </div>

    </div>
  );
};
