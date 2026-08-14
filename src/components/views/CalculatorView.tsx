import React, { useState } from 'react';
import { calculateGeneticCross } from '../../data/geneticEngine';
import { ParentGenotype, GeneticSimulationResult } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { 
  Calculator, 
  Dna, 
  Sparkles, 
  RefreshCw, 
  HelpCircle, 
  Info, 
  CheckCircle2, 
  Share2,
  Layers,
  ArrowRight
} from 'lucide-react';

export const CalculatorView: React.FC = () => {
  // Male Genotype State
  const [maleGenotype, setMaleGenotype] = useState<ParentGenotype>({
    colorLine: 'verde',
    isSplitBlue: true, // Portador de azul común
    darkFactor: 1, // Laurel
    greyFactor: 'none',
    violetFactor: 'none',
    sexLinkedVisual: 'none',
    sexLinkedSplit: 'opalino' // Portador de opalino
  });

  // Female Genotype State
  const [femaleGenotype, setFemaleGenotype] = useState<ParentGenotype>({
    colorLine: 'azul',
    isSplitBlue: false,
    darkFactor: 1, // Cobalto
    greyFactor: 'none',
    violetFactor: 'none',
    sexLinkedVisual: 'none',
    sexLinkedSplit: 'none'
  });

  // Calculation Result
  const [result, setResult] = useState<GeneticSimulationResult>(() =>
    calculateGeneticCross(
      {
        colorLine: 'verde',
        isSplitBlue: true,
        darkFactor: 1,
        greyFactor: 'none',
        violetFactor: 'none',
        sexLinkedVisual: 'none',
        sexLinkedSplit: 'opalino'
      },
      {
        colorLine: 'azul',
        isSplitBlue: false,
        darkFactor: 1,
        greyFactor: 'none',
        violetFactor: 'none',
        sexLinkedVisual: 'none',
        sexLinkedSplit: 'none'
      }
    )
  );

  const handleCalculate = () => {
    const res = calculateGeneticCross(maleGenotype, femaleGenotype);
    setResult(res);
  };

  const handleResetPresets = (preset: 'classic' | 'ino_cross' | 'dark_test') => {
    if (preset === 'classic') {
      const m: ParentGenotype = { colorLine: 'verde', isSplitBlue: true, darkFactor: 1, greyFactor: 'none', violetFactor: 'none', sexLinkedVisual: 'none', sexLinkedSplit: 'opalino' };
      const f: ParentGenotype = { colorLine: 'azul', isSplitBlue: false, darkFactor: 1, greyFactor: 'none', violetFactor: 'none', sexLinkedVisual: 'none', sexLinkedSplit: 'none' };
      setMaleGenotype(m);
      setFemaleGenotype(f);
      setResult(calculateGeneticCross(m, f));
    } else if (preset === 'ino_cross') {
      const m: ParentGenotype = { colorLine: 'azul', isSplitBlue: false, darkFactor: 0, greyFactor: 'none', violetFactor: 'none', sexLinkedVisual: 'none', sexLinkedSplit: 'ino' };
      const f: ParentGenotype = { colorLine: 'verde', isSplitBlue: true, darkFactor: 1, greyFactor: 'none', violetFactor: 'none', sexLinkedVisual: 'none', sexLinkedSplit: 'none' };
      setMaleGenotype(m);
      setFemaleGenotype(f);
      setResult(calculateGeneticCross(m, f));
    } else if (preset === 'dark_test') {
      const m: ParentGenotype = { colorLine: 'verde', isSplitBlue: false, darkFactor: 2, greyFactor: 'none', violetFactor: 'none', sexLinkedVisual: 'none', sexLinkedSplit: 'none' };
      const f: ParentGenotype = { colorLine: 'azul', isSplitBlue: false, darkFactor: 0, greyFactor: 'none', violetFactor: 'none', sexLinkedVisual: 'none', sexLinkedSplit: 'none' };
      setMaleGenotype(m);
      setFemaleGenotype(f);
      setResult(calculateGeneticCross(m, f));
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>Motor Genético Mendeliano</span>
          </div>
          <VerificationBadge status={result.verificationStatus} notes="Leyes de transmisión autosómica y cromosómica X validadas científicamente" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
          Calculadora Genética de Cruces
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Simula cruces entre parentales configurando línea de color, portadores de azul, factores de oscuridad (0D, 1D, 2D), factores dominantes y mutaciones ligadas al sexo con autosexado.
        </p>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-slate-500 font-semibold">Cruces de ejemplo:</span>
          <button
            onClick={() => handleResetPresets('classic')}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            Laurel / Azul / Opalino × Cobalto
          </button>
          <button
            onClick={() => handleResetPresets('ino_cross')}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            Cielo / Ino × Verde Laurel / Azul
          </button>
          <button
            onClick={() => handleResetPresets('dark_test')}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            Oliva (2D) × Cielo (0D)
          </button>
        </div>
      </div>

      {/* PARENT CONFIGURATION GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MALE CONFIGURATION CARD */}
        <div className="bg-white rounded-3xl border-2 border-sky-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-sky-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                ♂
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Macho Reproductor (XY / ZZ)
                </h3>
                <p className="text-xs text-slate-500">Configura su genotipo completo</p>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
              Parental 1
            </span>
          </div>

          {/* Color Line & Split Blue */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              1. Línea de Color Base
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMaleGenotype({ ...maleGenotype, colorLine: 'verde' })}
                className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-left ${
                  maleGenotype.colorLine === 'verde'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Línea Verde (Dominante)
              </button>
              <button
                type="button"
                onClick={() => setMaleGenotype({ ...maleGenotype, colorLine: 'azul', isSplitBlue: false })}
                className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-left ${
                  maleGenotype.colorLine === 'azul'
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Línea Azul (Recesivo)
              </button>
            </div>

            {/* Carrier of blue (only if green) */}
            {maleGenotype.colorLine === 'verde' && (
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-950">
                  ¿Portador del gen Azul? (/azul)
                </span>
                <input
                  type="checkbox"
                  checked={maleGenotype.isSplitBlue}
                  onChange={(e) => setMaleGenotype({ ...maleGenotype, isSplitBlue: e.target.checked })}
                  className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
              </div>
            )}
          </div>

          {/* Dark Factor Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              2. Factor de Oscuridad (D)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { factor: 0, label: maleGenotype.colorLine === 'verde' ? 'Césped (0D)' : 'Cielo (0D)' },
                { factor: 1, label: maleGenotype.colorLine === 'verde' ? 'Laurel (1D)' : 'Cobalto (1D)' },
                { factor: 2, label: maleGenotype.colorLine === 'verde' ? 'Oliva (2D)' : 'Malva (2D)' },
              ].map((item) => (
                <button
                  key={item.factor}
                  type="button"
                  onClick={() => setMaleGenotype({ ...maleGenotype, darkFactor: item.factor as 0 | 1 | 2 })}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    maleGenotype.darkFactor === item.factor
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sex-linked Mutations in Male */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              3. Mutación Ligada al Sexo (Cromosomas X)
            </label>
            
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block mb-1">Expresión Visual (Homocigoto Xm/Xm):</span>
                <select
                  value={maleGenotype.sexLinkedVisual}
                  onChange={(e) => setMaleGenotype({ ...maleGenotype, sexLinkedVisual: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                >
                  <option value="none">Normal (Sin mutación visual)</option>
                  <option value="opalino">Opalino Visual</option>
                  <option value="canela">Canela (Cinnamon) Visual</option>
                  <option value="ino">Ino (Lutino / Albino) Visual</option>
                </select>
              </div>

              <div>
                <span className="text-slate-500 block mb-1">Portador en Secreto (Heterocigoto Xm/X):</span>
                <select
                  value={maleGenotype.sexLinkedSplit}
                  onChange={(e) => setMaleGenotype({ ...maleGenotype, sexLinkedSplit: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                >
                  <option value="none">No porta mutación ligada al sexo</option>
                  <option value="opalino">Portador de Opalino (/opalino)</option>
                  <option value="canela">Portador de Canela (/canela)</option>
                  <option value="ino">Portador de Ino (/ino)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Modifiers (Grey & Violet) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Factor Gris:</label>
              <select
                value={maleGenotype.greyFactor}
                onChange={(e) => setMaleGenotype({ ...maleGenotype, greyFactor: e.target.value as any })}
                className="w-full p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
              >
                <option value="none">Sin Gris</option>
                <option value="single">Gris (SF)</option>
                <option value="double">Gris (DF)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Factor Violeta:</label>
              <select
                value={maleGenotype.violetFactor}
                onChange={(e) => setMaleGenotype({ ...maleGenotype, violetFactor: e.target.value as any })}
                className="w-full p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
              >
                <option value="none">Sin Violeta</option>
                <option value="single">Violeta (SF)</option>
                <option value="double">Violeta (DF)</option>
              </select>
            </div>
          </div>

        </div>

        {/* FEMALE CONFIGURATION CARD */}
        <div className="bg-white rounded-3xl border-2 border-rose-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-rose-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                ♀
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Hembra Reproductora (XX / ZW)
                </h3>
                <p className="text-xs text-slate-500">Configura su genotipo completo</p>
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              Parental 2
            </span>
          </div>

          {/* Color Line & Split Blue */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              1. Línea de Color Base
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFemaleGenotype({ ...femaleGenotype, colorLine: 'verde' })}
                className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-left ${
                  femaleGenotype.colorLine === 'verde'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Línea Verde (Dominante)
              </button>
              <button
                type="button"
                onClick={() => setFemaleGenotype({ ...femaleGenotype, colorLine: 'azul', isSplitBlue: false })}
                className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-left ${
                  femaleGenotype.colorLine === 'azul'
                    ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Línea Azul (Recesivo)
              </button>
            </div>

            {/* Carrier of blue (only if green) */}
            {femaleGenotype.colorLine === 'verde' && (
              <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 flex items-center justify-between">
                <span className="text-xs font-medium text-emerald-950">
                  ¿Portadora del gen Azul? (/azul)
                </span>
                <input
                  type="checkbox"
                  checked={femaleGenotype.isSplitBlue}
                  onChange={(e) => setFemaleGenotype({ ...femaleGenotype, isSplitBlue: e.target.checked })}
                  className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
              </div>
            )}
          </div>

          {/* Dark Factor Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              2. Factor de Oscuridad (D)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { factor: 0, label: femaleGenotype.colorLine === 'verde' ? 'Césped (0D)' : 'Cielo (0D)' },
                { factor: 1, label: femaleGenotype.colorLine === 'verde' ? 'Laurel (1D)' : 'Cobalto (1D)' },
                { factor: 2, label: femaleGenotype.colorLine === 'verde' ? 'Oliva (2D)' : 'Malva (2D)' },
              ].map((item) => (
                <button
                  key={item.factor}
                  type="button"
                  onClick={() => setFemaleGenotype({ ...femaleGenotype, darkFactor: item.factor as 0 | 1 | 2 })}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    femaleGenotype.darkFactor === item.factor
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sex-linked Mutatios in Female */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              3. Mutación Ligada al Sexo (Cromosoma X Único)
            </label>
            
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block mb-1">Expresión Visual (Hemiptera Xm/Y):</span>
                <select
                  value={femaleGenotype.sexLinkedVisual}
                  onChange={(e) => setFemaleGenotype({ ...femaleGenotype, sexLinkedVisual: e.target.value as any })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-medium"
                >
                  <option value="none">Normal (Sin mutación visual)</option>
                  <option value="opalino">Opalina Visual</option>
                  <option value="canela">Canela (Cinnamon) Visual</option>
                  <option value="ino">Ino (Lutina / Albina) Visual</option>
                </select>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-[11px] leading-tight">
                <span className="font-semibold text-slate-700">Regla Biológica:</span> Las hembras tienen solo 1 cromosoma X. No pueden portar mutaciones ligadas al sexo sin manifestarlas visualmente.
              </div>
            </div>
          </div>

          {/* Modifiers (Grey & Violet) */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Factor Gris:</label>
              <select
                value={femaleGenotype.greyFactor}
                onChange={(e) => setFemaleGenotype({ ...femaleGenotype, greyFactor: e.target.value as any })}
                className="w-full p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
              >
                <option value="none">Sin Gris</option>
                <option value="single">Gris (SF)</option>
                <option value="double">Gris (DF)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Factor Violeta:</label>
              <select
                value={femaleGenotype.violetFactor}
                onChange={(e) => setFemaleGenotype({ ...femaleGenotype, violetFactor: e.target.value as any })}
                className="w-full p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
              >
                <option value="none">Sin Violeta</option>
                <option value="single">Violeta (SF)</option>
                <option value="double">Violeta (DF)</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* CALCULATE ACTION BUTTON */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleCalculate}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-3 mx-auto hover:scale-105"
        >
          <Calculator className="w-5 h-5" />
          <span>Calcular Probabilidades de Descendencia</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* RESULTS DISPLAY PANEL */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-8 animate-in fade-in duration-200">
        
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Resultados del Cruce
              </span>
              <VerificationBadge status={result.verificationStatus} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
              Probabilidad Genética de la Nidada
            </h2>
          </div>
        </div>

        {/* 1. Base Colors & Dark Factor Distribution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Base Color Lines */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Dna className="w-4 h-4 text-emerald-600" />
              1. Líneas de Color Base
            </h3>
            <div className="space-y-2">
              {result.baseColorDistribution.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{item.outcome}</span>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                  <span className="text-base font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Factor Levels */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-600" />
              2. Factor de Oscuridad (D)
            </h3>
            <div className="space-y-2">
              {result.darkFactorDistribution.map((item, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{item.outcome}</span>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                  <span className="text-base font-extrabold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 2. Sex-Linked Distribution (Males vs Females with Autosexing) */}
        <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-purple-950 flex items-center gap-2 font-display">
              <Sparkles className="w-4 h-4 text-purple-600" />
              3. Herencia Ligada al Sexo y Autosexado
            </h3>
            <span className="text-xs font-semibold text-purple-800 bg-purple-100 px-2.5 py-0.5 rounded-full">
              Diferenciación por Sexo
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Male offspring */}
            <div className="bg-white p-4 rounded-xl border border-purple-100 space-y-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5 text-sky-900">
                <span>♂ Machos de la nidada (50% del total):</span>
              </span>
              <ul className="space-y-2 text-xs text-slate-700">
                {result.sexLinkedDistribution.males.map((m, i) => (
                  <li key={i} className="flex items-start justify-between gap-2 p-2 bg-slate-50 rounded-lg">
                    <span>• {m.outcome} {m.description && `(${m.description})`}</span>
                    <span className="font-bold text-sky-700 shrink-0">{m.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Female offspring */}
            <div className="bg-white p-4 rounded-xl border border-purple-100 space-y-2">
              <span className="font-bold text-slate-900 text-sm flex items-center gap-1.5 text-rose-900">
                <span>♀ Hembras de la nidada (50% del total):</span>
              </span>
              <ul className="space-y-2 text-xs text-slate-700">
                {result.sexLinkedDistribution.females.map((f, i) => (
                  <li key={i} className="flex items-start justify-between gap-2 p-2 bg-slate-50 rounded-lg">
                    <span>• {f.outcome} {f.description && `(${f.description})`}</span>
                    <span className="font-bold text-rose-700 shrink-0">{f.percentage}%</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* 3. Genetic Summary Notes */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700">
          <span className="font-bold text-slate-900 block">Resumen y Conclusiones del Criador:</span>
          <ul className="space-y-1.5 list-disc pl-5">
            {result.summaryNotes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Statistical disclaimer */}
        <div className="pt-2 text-xs text-slate-400 text-center italic">
          * Nota científica: Los porcentajes mostrados representan la probabilidad teórica por ley de probabilidades independientes en cada óvulo fecundado.
        </div>

      </section>

    </div>
  );
};
