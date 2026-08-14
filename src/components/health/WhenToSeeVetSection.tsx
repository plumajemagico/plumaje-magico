import React from 'react';
import { Stethoscope, AlertTriangle, CheckCircle2, XCircle, Clock, ShieldAlert, HeartPulse, HelpCircle } from 'lucide-react';
import { MedicalDisclaimer } from './MedicalDisclaimer';

export const WhenToSeeVetSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold border border-rose-200">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Atención Veterinaria de Animales Exóticos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
          ¿Cuándo y Cómo Acudir al Veterinario de Aves?
        </h2>
        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Los periquitos tienen un metabolismo acelerado y un volumen sanguíneo muy reducido (unos 3-4 ml en total). Retrasar unas horas la atención especializada puede marcar la diferencia entre la recuperación o un desenlace fatal.
        </p>
      </div>

      <MedicalDisclaimer variant="banner" />

      {/* Emergency vs Programmed visit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Emergency Box */}
        <div className="bg-rose-50/90 rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Motivos de Consulta Urgente (Mismo Día / 24h)</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
              <span><strong>Permanencia en el fondo de la jaula</strong> con imposibilidad de mantenerse erguido en la percha.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
              <span><strong>Dificultad respiratoria visible</strong>, respiración con el pico abierto o balanceo marcado de la cola.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
              <span><strong>Hemorragia activa</strong> (rotura de un cañón de sangre o herida por enganche).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
              <span><strong>Hembra con abdomen distendido y esfuerzo de pujo</strong> (sospecha de huevo retenido).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
              <span><strong>Vómitos continuos o regurgitación de moco</strong> que ensucia las plumas de la cabeza.</span>
            </li>
          </ul>
        </div>

        {/* Regular / Preventive Checkups */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-[#2D6A4F] font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
            <span>Consultas Programadas / Revisiones Preventivas</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] mt-1.5 shrink-0" />
              <span><strong>Chequeo de bienvenida</strong> tras la adquisición o adopción de un nuevo periquito.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] mt-1.5 shrink-0" />
              <span><strong>Análisis coprológico anual</strong> para descartar megabacterias, coccidios y parásitos subclínicos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] mt-1.5 shrink-0" />
              <span><strong>Limado y recorte profesional de pico o uñas</strong> en ejemplares con maloclusión.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] mt-1.5 shrink-0" />
              <span><strong>Control de peso y condición corporal</strong> en aves con tendencia al sobrepeso o lipomas.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* What to NEVER do */}
      <div className="bg-red-50/60 rounded-3xl border border-red-200 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-red-950 flex items-center gap-2 font-display">
          <XCircle className="w-5 h-5 text-red-600 shrink-0" />
          Errores Peligrosos que NUNCA Debes Cometer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-4 rounded-2xl border border-red-200 space-y-1">
            <strong className="text-red-900 block">NUNCA usar fármacos humanos</strong>
            <p className="text-slate-600">Medicamentos como paracetamol, ibuprofeno o aspirina provocan fallo renal y muerte fulminante en aves.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-red-200 space-y-1">
            <strong className="text-red-900 block">NUNCA aplicar aceites en narinas</strong>
            <p className="text-slate-600">Untar aceites de cocina o pomadas en los orificios nasales para tratar ácaros provoca asfixia y neumonía lipoidea por aspiración.</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-red-200 space-y-1">
            <strong className="text-red-900 block">NUNCA cortar el pico con tijeras</strong>
            <p className="text-slate-600">La ranfoteca contiene vasos sanguíneos e inervación; un corte casero puede fracturar el hueso o causar hemorragias mortales.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
