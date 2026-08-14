import React, { useState } from 'react';
import { Dna, ArrowDown, ArrowRight, Sparkles, Check, X, ShieldAlert, Split, Shuffle } from 'lucide-react';

export const InheritanceFlow: React.FC = () => {
  const [diagramType, setDiagramType] = useState<'sex_linked' | 'autosomal'>('sex_linked');

  return (
    <div className="bg-white rounded-3xl border border-[#D8E2DC] p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Header and Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#D8E2DC]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
              <Dna className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
              Flujograma Cromosómico • Mecanismo de Transmisión
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
            {diagramType === 'sex_linked'
              ? 'Flujo de Transmisión Ligada al Sexo (Cromosomas ZZ y ZW)'
              : 'Flujo de Segregación Mendeliana Autosómica'}
          </h3>
        </div>

        {/* Diagram Switcher */}
        <div className="flex items-center gap-1.5 bg-[#F8F9FA] p-1.5 rounded-2xl border border-[#D8E2DC] self-start sm:self-auto">
          <button
            onClick={() => setDiagramType('sex_linked')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              diagramType === 'sex_linked'
                ? 'bg-purple-900 text-white shadow-xs'
                : 'text-[#52796F] hover:text-[#1B4332]'
            }`}
          >
            Ligada al Sexo (ZZ / ZW)
          </button>
          <button
            onClick={() => setDiagramType('autosomal')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              diagramType === 'autosomal'
                ? 'bg-[#1B4332] text-white shadow-xs'
                : 'text-[#52796F] hover:text-[#1B4332]'
            }`}
          >
            Autosómica (Portadores)
          </button>
        </div>
      </div>

      {/* 1. SEX LINKED DIAGRAM */}
      {diagramType === 'sex_linked' && (
        <div className="space-y-6">
          <p className="text-sm text-[#52796F] leading-relaxed">
            En las aves, a diferencia de los mamíferos, el <strong>macho es homogamético (ZZ)</strong> y la <strong>hembra es heterogamética (ZW)</strong>. Como el cromosoma <strong>W</strong> no porta información para estos genes de color, una hembra expresa siempre cualquier alelo presente en su único cromosoma <strong>Z</strong>.
          </p>

          <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-6 overflow-x-auto">
            
            {/* Level 1: Progenitores */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-bold">
                1. Generación Parental (P):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Male Parent */}
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300">♂ PADRE: Macho Portador</span>
                    <span className="text-[11px] font-mono bg-sky-950 text-sky-200 px-2 py-0.5 rounded border border-sky-800">
                      Z^mut / Z+
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 p-2 rounded-xl bg-purple-900/60 border border-purple-500/40 text-center font-mono text-xs font-bold text-purple-200">
                      Cromosoma Z (Mutado)
                    </div>
                    <div className="flex-1 p-2 rounded-xl bg-slate-700 border border-slate-600 text-center font-mono text-xs font-bold text-stone-300">
                      Cromosoma Z (Silvestre)
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Fenotípicamente Común (No muestra la mutación).
                  </p>
                </div>

                {/* Female Parent */}
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-300">♀ MADRE: Hembra Clásica</span>
                    <span className="text-[11px] font-mono bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-800">
                      Z+ / W
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 p-2 rounded-xl bg-slate-700 border border-slate-600 text-center font-mono text-xs font-bold text-stone-300">
                      Cromosoma Z (Silvestre)
                    </div>
                    <div className="flex-1 p-2 rounded-xl bg-amber-900/60 border border-amber-500/40 text-center font-mono text-xs font-bold text-amber-200">
                      Cromosoma W (Inerte)
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Fenotípicamente Común Pura (Libre de mutación).
                  </p>
                </div>

              </div>
            </div>

            {/* Level 2: Meiosis and Gametes */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                <ArrowDown className="w-3.5 h-3.5" />
                <span>2. Meiosis y Segregación de Gametos:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-purple-950 border border-purple-700 text-purple-200">
                  Espermatozoide A: <strong>Z^mut (50%)</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-stone-300">
                  Espermatozoide B: <strong>Z+ (50%)</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-stone-300">
                  Óvulo A: <strong>Z+ (50%)</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950 border border-amber-700 text-amber-200">
                  Óvulo B: <strong>W (50%)</strong>
                </div>
              </div>
            </div>

            {/* Level 3: Offspring F1 */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-2">
                <ArrowDown className="w-3.5 h-3.5" />
                <span>3. Descendencia Resultante (F1):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                
                <div className="p-3.5 rounded-2xl bg-slate-800 border border-purple-500/40 space-y-1">
                  <div className="text-purple-300 font-bold">♂ Macho Portador (25%)</div>
                  <div className="font-mono text-emerald-400">Z^mut / Z+</div>
                  <p className="text-[11px] text-stone-300">Visualmente Común. Porta la mutación.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <div className="text-sky-300 font-bold">♂ Macho Puro (25%)</div>
                  <div className="font-mono text-stone-300">Z+ / Z+</div>
                  <p className="text-[11px] text-stone-300">Visualmente Común. Libre de mutación.</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-950/80 border border-purple-400 space-y-1 shadow-md">
                  <div className="text-purple-300 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>♀ Hembra VISUAL (25%)</span>
                  </div>
                  <div className="font-mono text-purple-200 font-bold">Z^mut / W</div>
                  <p className="text-[11px] text-purple-100 font-semibold">
                    ¡Expresa la mutación al 100%!
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                  <div className="text-rose-300 font-bold">♀ Hembra Clásica (25%)</div>
                  <div className="font-mono text-stone-300">Z+ / W</div>
                  <p className="text-[11px] text-stone-300">Común pura. No porta nada.</p>
                </div>

              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-950 space-y-1">
              <span className="font-bold">¿Por qué las hembras no son portadoras?</span>
              <p className="text-purple-800">
                Al tener un único cromosoma Z, si una hembra recibe el alelo mutado en ese cromosoma, no existe un segundo cromosoma Z para ocultarlo. Por lo tanto, o es <strong>visual</strong> o no tiene el gen en absoluto.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <span className="font-bold">El Poder del Autosexado:</span>
              <p className="text-emerald-800">
                Al cruzar un macho portador o visual con una hembra clásica, cualquier polluelo que muestre la mutación en el nido es con 100% de certeza una <strong>hembra</strong>.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* 2. AUTOSOMAL DIAGRAM */}
      {diagramType === 'autosomal' && (
        <div className="space-y-6">
          <p className="text-sm text-[#52796F] leading-relaxed">
            Las mutaciones autosómicas se ubican en cromosomas no sexuales. Cada ejemplar (macho o hembra) tiene exactamente 2 alelos. En mutaciones recesivas (como el gen Azul, Pío Recesivo o Fallow), se requiere que <strong>ambas copias estén mutadas</strong> para manifestarse visualmente.
          </p>

          <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-6">
            
            {/* Visual 3:1 Split Explanation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Homocigoto Silvestre
                </div>
                <div className="font-mono text-lg font-black text-[#1B4332]">B+ / B+</div>
                <div className="text-xs font-semibold text-[#1B4332]">Verde Puro Ancestral</div>
                <p className="text-[11px] text-[#52796F]">
                  Visualmente verde. Solo transmite alelos verdes (B+). Imposible que dé hijos azules si se cruza con verde puro.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-amber-300 space-y-2 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Heterocigoto (Portador)
                </div>
                <div className="font-mono text-lg font-black text-amber-900">B+ / b</div>
                <div className="text-xs font-semibold text-[#1B4332]">Verde / azul (Portador)</div>
                <p className="text-[11px] text-[#52796F]">
                  Visualmente verde idéntico al puro. Transmite el alelo azul al 50% de sus óvulos o espermatozoides.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-300 space-y-2 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Homocigoto Recesivo
                </div>
                <div className="font-mono text-lg font-black text-blue-900">b / b</div>
                <div className="text-xs font-semibold text-blue-900">Azul Visual</div>
                <p className="text-[11px] text-[#52796F]">
                  Visualmente azul. Al no tener alelos B+, transmite obligatoriamente un alelo b al 100% de sus crías.
                </p>
              </div>

            </div>

            {/* Carrier rule summary banner */}
            <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                <Split className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#1B4332] space-y-0.5">
                <div className="font-bold">Regla Universal de Cruce Recesivo:</div>
                <p className="text-[#52796F]">
                  Para obtener un periquito azul visual (b/b), <strong>ambos progenitores</strong> deben aportar al menos un alelo azul (ser azules o verdes portadores de azul).
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
