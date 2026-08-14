import React, { useState } from 'react';
import { CHICK_DEVELOPMENT_STAGES } from '../../data/breeding';
import { VerificationBadge } from '../VerificationBadge';
import { 
  Feather, 
  Sparkles, 
  AlertTriangle, 
  Scale, 
  CheckCircle2, 
  HeartHandshake, 
  Clock, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';

export const ChickDevelopmentTimeline: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(CHICK_DEVELOPMENT_STAGES[0].id);

  const selectedStage =
    CHICK_DEVELOPMENT_STAGES.find((s) => s.id === selectedStageId) || CHICK_DEVELOPMENT_STAGES[0];

  const weightTable = [
    { day: 'Día 1', weight: '1.2 - 1.8 g', note: 'Neonato recién eclosionado, ciego, plumón fino' },
    { day: 'Día 5', weight: '5.0 - 8.0 g', note: 'Multiplicación x4 del peso inicial' },
    { day: 'Día 8', weight: '12 - 16 g', note: 'Apertura de ojos, periodo de anillado oficial (4.0 mm)' },
    { day: 'Día 14', weight: '22 - 28 g', note: 'Brote de cañones queratinizados' },
    { day: 'Día 21', weight: '32 - 38 g', note: 'Apertura de plumas y revelación de la mutación' },
    { day: 'Día 28', weight: '36 - 42 g', note: 'Emplumaje completo y asomo por la entrada' },
    { day: 'Día 38', weight: '35 - 40 g', note: 'Autonomía y destete completo con semillas' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
          <Feather className="w-3.5 h-3.5 text-amber-700" />
          <span>Guía de Desarrollo del Polluelo</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Cronología de Crecimiento: Del Día 1 al Destete
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
          En tan solo 35 a 42 días, un pichón de 1.5 gramos se convierte en un periquito adulto independiente. Conoce los hitos morfológicos, cuidados parentales y tareas del criador en cada franja de edad.
        </p>
      </div>

      {/* Stage Selector Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {CHICK_DEVELOPMENT_STAGES.map((stage, idx) => {
          const isSelected = stage.id === selectedStageId;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`p-4 rounded-3xl text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-700 text-white border-amber-700 shadow-md ring-2 ring-amber-500/30'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-amber-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider ${
                      isSelected ? 'text-amber-200' : 'text-amber-800'
                    }`}
                  >
                    Etapa {idx + 1}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isSelected ? 'bg-amber-800 text-amber-100' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {stage.dayRange}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold mt-2 leading-snug">
                  {stage.title}
                </div>
              </div>

              <div
                className={`mt-4 text-[11px] font-medium ${
                  isSelected ? 'text-amber-100' : 'text-slate-500'
                }`}
              >
                Ver detalles ➔
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
              {selectedStage.dayRange}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
              {selectedStage.title}
            </h3>
          </div>
          <VerificationBadge status={selectedStage.verificationStatus} />
        </div>

        {/* Physical Milestones */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 font-display">
            <Eye className="w-4 h-4 text-amber-700" />
            Hitos Físicos y Morfológicos
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedStage.physicalMilestones.map((m, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parental Care & Nutrition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-2 font-display">
              <HeartHandshake className="w-4 h-4 text-amber-700" />
              Cuidados y Comportamiento de los Padres
            </h4>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {selectedStage.parentalCare}
            </p>
          </div>

          {selectedStage.nutritionNotes && (
            <div className="p-5 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2 font-display">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Nutrición y Aporte de Buche
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                {selectedStage.nutritionNotes}
              </p>
            </div>
          )}
        </div>

        {/* Breeder Tasks */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 font-display">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Tareas y Responsabilidades del Criador
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
            {selectedStage.breederTasks.map((task, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precautions */}
        {selectedStage.precautions.length > 0 && (
          <div className="p-5 rounded-3xl bg-rose-50/80 border border-rose-200 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold text-rose-950 flex items-center gap-2 font-display">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              Precauciones Especiales de esta Etapa
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-rose-900">
              {selectedStage.precautions.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Reference Weight Table */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-700" />
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Curva de Peso de Referencia y Anillado
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Valores promedio zootécnicos para periquito común australiano. El anillado oficial federativo cerrado (calibre 4.0 - 4.2 mm) debe colocarse estrictamente entre el día 6 y 8.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 rounded-l-xl">Día de Vida</th>
                <th className="py-3 px-4">Peso Estimado</th>
                <th className="py-3 px-4 rounded-r-xl">Hito del Desarrollo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {weightTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60">
                  <td className="py-3 px-4 font-bold text-slate-900">{row.day}</td>
                  <td className="py-3 px-4 font-semibold text-amber-800">{row.weight}</td>
                  <td className="py-3 px-4 text-slate-600">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
