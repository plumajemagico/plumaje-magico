import React, { useState } from 'react';
import { HealthCondition } from '../types';
import { MedicalDisclaimer } from './health/MedicalDisclaimer';
import { VerificationBadge } from './VerificationBadge';
import { 
  X, 
  ShieldAlert, 
  AlertTriangle, 
  Stethoscope, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  BookOpen,
  Dna,
  Share2,
  FileText,
  AlertCircle
} from 'lucide-react';

interface Props {
  condition: HealthCondition | null;
  onClose: () => void;
  onSelectRelated?: (conditionId: string) => void;
}

export const HealthDetailModal: React.FC<Props> = ({ condition, onClose, onSelectRelated }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'clinical' | 'prevention' | 'technical'>('overview');

  if (!condition) return null;

  return (
    <div
      id="health-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="health-modal-content"
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className={`relative p-6 sm:p-8 text-white ${
          condition.isEmergency 
            ? 'bg-gradient-to-br from-rose-950 via-rose-900 to-slate-950' 
            : 'bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332]'
        }`}>
          <button
            id="close-health-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {condition.isEmergency && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/30 text-rose-200 border border-rose-400/40 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                Urgencia Clínica
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-white border border-white/20">
              {condition.category}
            </span>
            <VerificationBadge status={condition.verificationStatus} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            {condition.name}
          </h2>
          {condition.scientificOrAlternativeName && (
            <p className="text-sm text-[#B7E4C7] italic mt-1 font-sans">
              {condition.scientificOrAlternativeName}
            </p>
          )}

          <p className="mt-3 text-slate-200 text-xs sm:text-sm leading-relaxed max-w-3xl">
            {condition.shortDescription}
          </p>

          {/* Navigation Sub-tabs inside modal */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/20 overflow-x-auto scrollbar-none text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-white text-[#1B4332] shadow-sm'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Descripción General
            </button>
            <button
              onClick={() => setActiveTab('clinical')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 ${
                activeTab === 'clinical'
                  ? 'bg-white text-[#1B4332] shadow-sm'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Signos y Diagnóstico
            </button>
            <button
              onClick={() => setActiveTab('prevention')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 ${
                activeTab === 'prevention'
                  ? 'bg-white text-[#1B4332] shadow-sm'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Prevención y Manejo
            </button>
            {condition.technicalDetails && (
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 ${
                  activeTab === 'technical'
                    ? 'bg-white text-[#1B4332] shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Detalles Técnicos / Criador
              </button>
            )}
          </div>
        </div>

        {/* Global Medical Disclaimer Bar */}
        <div className="bg-rose-50/80 p-3 sm:px-6 border-b border-rose-200/80 flex items-start gap-2.5 text-rose-950 text-xs">
          <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Aviso de salud pública y veterinaria:</strong> Esta ficha es educativa. No reemplaza el examen de un médico veterinario especialista en aves. No intentes tratamientos caseros ni administres fármacos sin prescripción facultativa.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-slate-50/40 flex-1">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Comprehensive Description */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-base font-bold text-[#1B4332] font-display flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2D6A4F]" />
                  Descripción de la Patología
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {condition.description}
                </p>
              </div>

              {/* Signs at a glance */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-base font-bold text-rose-900 font-display flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Signos Clínicos Observables
                </h3>
                <p className="text-xs text-slate-500 italic">
                  Las aves enfermas suelen enmascarar los síntomas hasta fases avanzadas. Observa con atención los siguientes signos:
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {condition.signs.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* When to see vet */}
              <div className="bg-rose-50 p-5 rounded-2xl border border-rose-200 text-xs sm:text-sm text-rose-950 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-rose-900">
                  <Clock className="w-4 h-4 text-rose-600" /> ¿Cuándo acudir al veterinario?
                </span>
                <p className="leading-relaxed">{condition.whenToSeeVet}</p>
              </div>
            </div>
          )}

          {/* TAB 2: CLINICAL (SIGNS & DIAGNOSIS) */}
          {activeTab === 'clinical' && (
            <div className="space-y-6">
              {/* Observable signs */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-base font-bold text-[#1B4332] font-display flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  Cuadro Clínico y Síntomas
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {condition.signs.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Veterinary Diagnosis Protocol */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-base font-bold text-[#1B4332] font-display flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#2D6A4F]" />
                  Diagnóstico en Clínica Veterinaria
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {condition.diagnosis}
                </p>
              </div>

              {/* Treatment guidelines */}
              <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200 shadow-2xs space-y-2">
                <h3 className="text-base font-bold text-emerald-950 font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Pautas Generales de Tratamiento y Manejo
                </h3>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  {condition.treatment}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: PREVENTION & RISK FACTORS */}
          {activeTab === 'prevention' && (
            <div className="space-y-6">
              {/* Prevention rules */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <h3 className="text-base font-bold text-[#1B4332] font-display flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Medidas de Prevención Primaria
                </h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  {condition.prevention.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk Factors */}
              {condition.riskFactors && condition.riskFactors.length > 0 && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                  <h3 className="text-base font-bold text-[#1B4332] font-display flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-600" />
                    Factores de Riesgo Ambientales y de Manejo
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {condition.riskFactors.map((rf, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{rf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: TECHNICAL / BREEDER LEVEL */}
          {activeTab === 'technical' && condition.technicalDetails && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Dna className="w-4 h-4 text-[#2D6A4F]" />
                  <h3 className="text-base font-bold text-[#1B4332] font-display">
                    Ficha Técnica Avanzada para Criadores
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {condition.technicalDetails.pathogen && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Agente Etiológico / Causa:</span>
                      <span className="text-slate-700">{condition.technicalDetails.pathogen}</span>
                    </div>
                  )}

                  {condition.technicalDetails.transmission && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Vía de Transmisión:</span>
                      <span className="text-slate-700">{condition.technicalDetails.transmission}</span>
                    </div>
                  )}

                  {condition.technicalDetails.incubation && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="font-bold text-slate-900 block mb-1">Periodo de Incubación / Curso:</span>
                      <span className="text-slate-700">{condition.technicalDetails.incubation}</span>
                    </div>
                  )}
                </div>

                {condition.technicalDetails.clinicalDifferential && (
                  <div className="pt-2">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-500 block mb-2">
                      Diagnóstico Diferencial Clínico:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {condition.technicalDetails.clinicalDifferential.map((diff, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs border border-slate-200"
                        >
                          {diff}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Sources and References */}
          {condition.sources && condition.sources.length > 0 && (
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 space-y-1">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                Fuentes bibliográficas consultadas:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-500 pl-1">
                {condition.sources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-500 hidden sm:block">
            PLUMAJE MÁGICO • Biblioteca Pública de Salud Aviar
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
            >
              Cerrar Ficha
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
