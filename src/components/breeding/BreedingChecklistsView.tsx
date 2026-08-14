import React, { useState, useEffect } from 'react';
import { BREEDING_CHECKLISTS_DATA } from '../../data/breeding';
import { VerificationBadge } from '../VerificationBadge';
import { 
  CheckSquare, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  ListFilter, 
  ShieldCheck 
} from 'lucide-react';

const STORAGE_KEY = 'plumaje_magico_breeding_checklist_v1';

export const BreedingChecklistsView: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activePhase, setActivePhase] = useState<string>('all');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedItems));
    } catch (e) {
      console.warn('Error saving breeding checklist state:', e);
    }
  }, [completedItems]);

  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleReset = () => {
    if (window.confirm('¿Deseas restablecer todas las casillas de verificación de cría?')) {
      setCompletedItems({});
    }
  };

  // Calculate totals
  const allItems = BREEDING_CHECKLISTS_DATA.flatMap((cl) => cl.items);
  const totalCount = allItems.length;
  const completedCount = allItems.filter((i) => completedItems[i.id]).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredChecklists = BREEDING_CHECKLISTS_DATA.filter(
    (cl) => activePhase === 'all' || cl.phase === activePhase
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-150">
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
          <CheckSquare className="w-3.5 h-3.5 text-amber-700" />
          <span>Protocolos y Listas de Control</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Listas de Verificación de Cría
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Verifica paso a paso las condiciones zootécnicas previas a la puesta, durante la incubación y en el desarrollo de los pichones. Tu progreso se guarda automáticamente en tu navegador.
        </p>
      </div>

      {/* Progress & Global Action Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700">Progreso Total de Protocolos</span>
            <span className="text-amber-800">
              {completedCount} de {totalCount} tareas completadas ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-700 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-bold flex items-center gap-1.5 self-start sm:self-center transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restablecer</span>
        </button>
      </div>

      {/* Phase Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActivePhase('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activePhase === 'all'
              ? 'bg-amber-700 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todas las Fases ({totalCount})
        </button>
        <button
          onClick={() => setActivePhase('preparacion')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activePhase === 'preparacion'
              ? 'bg-amber-700 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          1. Preparación
        </button>
        <button
          onClick={() => setActivePhase('cria')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activePhase === 'cria'
              ? 'bg-amber-700 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          2. Puesta e Incubación
        </button>
        <button
          onClick={() => setActivePhase('post-nacimiento')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activePhase === 'post-nacimiento'
              ? 'bg-amber-700 text-white shadow-xs'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          3. Nacimiento y Destete
        </button>
      </div>

      {/* Checklists Sections */}
      <div className="space-y-6">
        {filteredChecklists.map((checklist) => {
          const sectionItems = checklist.items;
          const sectionCompleted = sectionItems.filter((i) => completedItems[i.id]).length;

          return (
            <div
              key={checklist.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {checklist.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {checklist.description}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 shrink-0 self-start sm:self-center">
                  {sectionCompleted} / {sectionItems.length} listos
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {checklist.items.map((item) => {
                  const isChecked = !!completedItems[item.id];
                  return (
                    <label
                      key={item.id}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950'
                          : 'bg-slate-50/60 border-slate-200 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleItem(item.id)}
                        className="w-5 h-5 rounded-md text-amber-600 focus:ring-amber-500/20 mt-0.5 shrink-0 cursor-pointer accent-amber-600"
                      />
                      <div className="space-y-1 select-none">
                        <span
                          className={`text-xs sm:text-sm font-bold block ${
                            isChecked ? 'line-through text-emerald-900/80' : 'text-slate-900'
                          }`}
                        >
                          {item.text}
                        </span>
                        {item.details && (
                          <span
                            className={`text-xs block ${
                              isChecked ? 'text-emerald-800/70' : 'text-slate-500'
                            }`}
                          >
                            {item.details}
                          </span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
