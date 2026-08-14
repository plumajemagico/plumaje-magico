import React from 'react';
import { PREVENTION_PILLARS_DATA } from '../../data/health';
import { ShieldCheck, Sparkles, Apple, Droplets, Wind, Bug, Eye, Stethoscope, CheckCircle2, AlertCircle } from 'lucide-react';
import { MedicalDisclaimer } from './MedicalDisclaimer';

const getPillarIcon = (id: string) => {
  switch (id) {
    case 'higiene':
      return Sparkles;
    case 'alimentacion':
      return Apple;
    case 'agua':
      return Droplets;
    case 'cuarentena':
      return ShieldCheck;
    case 'entorno':
      return Wind;
    case 'parasitos-control':
      return Bug;
    case 'observacion':
      return Eye;
    case 'veterinario-revision':
      return Stethoscope;
    default:
      return ShieldCheck;
  }
};

export const HealthPreventionView: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2D6A4F] text-xs font-semibold border border-[#C8E6C9]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Medicina Preventiva • Más Vale Prevenir que Curar</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
          Guía de Prevención y Bioseguridad Aviar
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Más del 80% de las patologías comunes en periquitos australianos mantenidos en cautividad se originan por fallos en la higiene, nutrición monótona, corrientes de aire o falta de protocolos de cuarentena. Aplicar estos pilares asegura una vida longeva, activa y saludable para tus aves.
        </p>
      </div>

      <MedicalDisclaimer variant="inline" />

      {/* 8 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PREVENTION_PILLARS_DATA.map((pillar) => {
          const Icon = getPillarIcon(pillar.id);
          return (
            <div
              key={pillar.id}
              id={`prevention-pillar-${pillar.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center shrink-0 border border-[#D8E2DC]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1B4332] font-display">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {pillar.summary}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quarantine Protocol Deep Dive */}
      <div className="bg-amber-50/80 rounded-3xl border border-amber-200/90 p-6 sm:p-8 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-amber-700" />
          <span>Protocolo Fundamental para Nuevas Aves</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-amber-950">
          ¿Por qué son indispensables los 30 días de cuarentena?
        </h3>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          Enfermedades como la megabacteriosis, la psitacosis y los ácaros traqueales pueden permanecer latentes en aves aparentemente sanas. El estrés del transporte y el cambio de hogar debilitan temporalmente su sistema inmunitario, manifestándose los patógenos entre los días 10 y 25.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-bold text-amber-900 block">Días 1 a 10</span>
            <p className="text-slate-600">Adaptación tranquila, comida accesible, reposo y observación minuciosa de la consistencia de las heces.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-bold text-amber-900 block">Días 11 a 20</span>
            <p className="text-slate-600">Revisión veterinaria con análisis coprológico en fresco si se detecta cualquier alteración o en criaderos.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
            <span className="font-bold text-amber-900 block">Días 21 a 30</span>
            <p className="text-slate-600">Confirmación de ausencia de síntomas, introducción progresiva de jaulas cercanas antes de la unión definitiva.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
