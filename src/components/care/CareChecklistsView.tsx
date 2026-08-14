import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  CheckCircle2,
  RotateCcw,
  Calendar,
  Sparkles,
  Plane,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { CARE_CHECKLISTS_DATA } from '../../data/care';
import { CareChecklist } from '../../types';

export const CareChecklistsView: React.FC = () => {
  const [activeChecklistId, setActiveChecklistId] = useState<string>('checklist-diario');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const activeChecklist =
    CARE_CHECKLISTS_DATA.find((c) => c.id === activeChecklistId) || CARE_CHECKLISTS_DATA[0];

  const toggleItem = (itemId: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleResetCurrent = () => {
    const updated = { ...checkedItems };
    activeChecklist.items.forEach((item) => {
      delete updated[item.id];
    });
    setCheckedItems(updated);
  };

  const completedCount = activeChecklist.items.filter((item) => checkedItems[item.id]).length;
  const totalCount = activeChecklist.items.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const getFrequencyIcon = (freq: string) => {
    switch (freq) {
      case 'daily':
        return <Clock className="w-4 h-4" />;
      case 'weekly':
        return <Calendar className="w-4 h-4" />;
      case 'flight':
        return <Plane className="w-4 h-4" />;
      case 'quarantine':
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return <CheckSquare className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>Protocolos de Verificación Interactiva</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Listas de Verificación y Tareas de Bienestar
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-4xl leading-relaxed">
          Selecciona una lista de verificación interactiva para supervisar tus rutinas diarias, el mantenimiento semanal, la preparación de la habitación para vuelo libre o la cuarentena de una nueva ave.
        </p>
      </div>

      {/* Checklist Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {CARE_CHECKLISTS_DATA.map((cl) => (
          <button
            key={cl.id}
            id={`checklist-tab-${cl.id}`}
            onClick={() => setActiveChecklistId(cl.id)}
            className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
              activeChecklistId === cl.id
                ? 'bg-emerald-800 text-white shadow-sm font-bold'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {getFrequencyIcon(cl.frequency)}
            <span>{cl.title.split('(')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Active Checklist Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        
        {/* Header & Progress Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              {activeChecklist.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {activeChecklist.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="text-xs text-slate-500 font-medium">Progreso</span>
              <div className="text-sm font-bold text-emerald-800 font-display">
                {completedCount} de {totalCount} ({progressPercent}%)
              </div>
            </div>

            <button
              onClick={handleResetCurrent}
              title="Reiniciar lista"
              className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar visual */}
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-emerald-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Checklist Items list */}
        <div className="space-y-3">
          {activeChecklist.items.map((item) => {
            const isChecked = !!checkedItems[item.id];

            return (
              <div
                key={item.id}
                id={`check-item-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : 'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-slate-100/70'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-700" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                <div className="space-y-0.5">
                  <span
                    className={`text-xs sm:text-sm font-bold block ${
                      isChecked ? 'line-through text-emerald-900 opacity-90' : 'text-slate-900'
                    }`}
                  >
                    {item.text}
                  </span>
                  {item.details && (
                    <p
                      className={`text-xs ${
                        isChecked ? 'text-emerald-800 opacity-80' : 'text-slate-600'
                      }`}
                    >
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion celebratory badge */}
        {progressPercent === 100 && (
          <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 flex items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
              <span className="text-xs sm:text-sm font-bold">
                ¡Excelente trabajo! Has completado todas las tareas de este protocolo.
              </span>
            </div>
            <button
              onClick={handleResetCurrent}
              className="text-xs font-bold text-emerald-900 hover:underline shrink-0"
            >
              Reiniciar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
