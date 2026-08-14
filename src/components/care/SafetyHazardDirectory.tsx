import React, { useState } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  Flame,
  Search,
  Filter,
  CheckCircle2,
  PhoneCall,
  Wind,
  Home,
  Sparkles,
} from 'lucide-react';
import { SAFETY_ITEMS_DATA } from '../../data/care';
import { SafetyCategory, SafetyItem, SafetyRiskLevel } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

export const SafetyHazardDirectory: React.FC = () => {
  const [selectedRisk, setSelectedRisk] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const riskFilters: { id: string; label: string }[] = [
    { id: 'all', label: 'Todos los Peligros' },
    { id: 'critical', label: '🚨 Crítico / Mortal en minutos' },
    { id: 'high', label: '⚠️ Riesgo Alto / Severo' },
    { id: 'medium', label: '⚡ Riesgo Moderado' },
  ];

  const getRiskBadge = (level: SafetyRiskLevel) => {
    switch (level) {
      case 'critical':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-extrabold bg-red-600 text-white shadow-xs">
            <Flame className="w-3.5 h-3.5" />
            <span>PELIGRO CRÍTICO / MORTAL</span>
          </span>
        );
      case 'high':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500 text-white">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>RIESGO ALTO</span>
          </span>
        );
      case 'medium':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-700 text-white">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
            <span>RIESGO MODERADO</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-200 text-slate-800">
            <span>BAJO RIESGO</span>
          </span>
        );
    }
  };

  const filteredHazards = SAFETY_ITEMS_DATA.filter((hazard) => {
    const matchesRisk = selectedRisk === 'all' || hazard.riskLevel === selectedRisk;
    const matchesSearch =
      searchTerm.trim() === '' ||
      hazard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hazard.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hazard.prevention.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-red-950 text-white rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-800/80 text-red-100 border border-red-700">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Protocolo de Prevención de Accidentes y Toxicología</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
          Peligros del Hogar y Toxicidades Volátiles
        </h2>
        <p className="text-xs sm:text-sm text-red-200 max-w-4xl leading-relaxed">
          Las aves tienen una anatomía y un sistema respiratorio únicos. Factores que resultan inocuos para los humanos (como cocinar con sartenes de teflón o encender una vela aromática) pueden ser fulminantes para un periquito. Conoce los riesgos para eliminarlos antes de que ocurra un accidente.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="hazard-search-input"
            type="text"
            placeholder="Buscar peligro o toxina (ej. teflón, ventanas, plantas, gatos, ventilador)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Risk Level Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-1">
          {riskFilters.map((rf) => (
            <button
              key={rf.id}
              id={`hazard-filter-${rf.id}-btn`}
              onClick={() => setSelectedRisk(rf.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedRisk === rf.id
                  ? 'bg-slate-900 text-white shadow-2xs font-bold'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {rf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hazards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredHazards.map((item) => {
          const isCritical = item.riskLevel === 'critical';

          return (
            <div
              key={item.id}
              id={`hazard-card-${item.id}`}
              className={`rounded-2xl border p-6 space-y-4 flex flex-col justify-between ${
                isCritical
                  ? 'bg-red-50/50 border-red-300 shadow-sm'
                  : 'bg-white border-slate-200 shadow-2xs'
              }`}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {item.name}
                  </h3>
                  {getRiskBadge(item.riskLevel)}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.description}
                </p>

                {/* Prevention step */}
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-950 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Cómo Prevenirlo:
                  </span>
                  <p className="text-xs leading-relaxed">{item.prevention}</p>
                </div>

                {/* Emergency action if available */}
                {item.emergencyAction && (
                  <div className="p-3.5 rounded-xl bg-red-100/80 border border-red-300 text-red-950 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 text-red-900">
                      <PhoneCall className="w-3.5 h-3.5" />
                      Acción Inmediata de Emergencia:
                    </span>
                    <p className="text-xs font-medium leading-relaxed">{item.emergencyAction}</p>
                  </div>
                )}
              </div>

              {/* Footer with verification and sources */}
              {item.sources && item.sources.length > 0 && (
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="truncate max-w-[220px]">Fuente: {item.sources[0]}</span>
                  <VerificationBadge status={item.verificationStatus} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
