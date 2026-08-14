import React, { useState } from 'react';
import { ColorItem } from '../../types';
import { COLORS_DATA, COLOR_PRESET_COMPARISONS } from '../../data/colorsData';
import { VisualProfile } from './VisualProfile';
import { 
  Layers, 
  ArrowLeftRight, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  Dna,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

interface Props {
  initialColorA?: ColorItem;
  initialColorB?: ColorItem;
  onSelectColor?: (color: ColorItem) => void;
  onNavigateGenetics?: (mutationId?: string) => void;
}

export const ColorCompare: React.FC<Props> = ({
  initialColorA,
  initialColorB,
  onSelectColor,
  onNavigateGenetics
}) => {
  const [colorAId, setColorAId] = useState<string>(
    initialColorA?.id || 'color-azul-cobalto'
  );
  const [colorBId, setColorBId] = useState<string>(
    initialColorB?.id || 'color-violeta-visual'
  );

  const colorA = COLORS_DATA.find((c) => c.id === colorAId) || COLORS_DATA[0];
  const colorB = COLORS_DATA.find((c) => c.id === colorBId) || COLORS_DATA[1];

  // Look for active preset if exists
  const activePreset = COLOR_PRESET_COMPARISONS.find(
    (p) =>
      (p.colorAId === colorA.id && p.colorBId === colorB.id) ||
      (p.colorAId === colorB.id && p.colorBId === colorA.id)
  );

  const handleSwap = () => {
    setColorAId(colorB.id);
    setColorBId(colorA.id);
  };

  const handleSelectPreset = (preset: typeof COLOR_PRESET_COMPARISONS[0]) => {
    setColorAId(preset.colorAId);
    setColorBId(preset.colorBId);
  };

  const comparisonRows = [
    {
      label: 'Color Corporal',
      valueA: colorA.visualProfile.bodyColor,
      valueB: colorB.visualProfile.bodyColor,
      isEqual: colorA.visualProfile.bodyColor === colorB.visualProfile.bodyColor
    },
    {
      label: 'Máscara y Frente',
      valueA: colorA.visualProfile.mask,
      valueB: colorB.visualProfile.mask,
      isEqual: colorA.visualProfile.mask === colorB.visualProfile.mask
    },
    {
      label: 'Manchas Gulares (Diagnóstico)',
      valueA: colorA.visualProfile.cheekPatches || 'No especificadas',
      valueB: colorB.visualProfile.cheekPatches || 'No especificadas',
      isEqual: colorA.visualProfile.cheekPatches === colorB.visualProfile.cheekPatches
    },
    {
      label: 'Ondulaciones y Manto',
      valueA: colorA.visualProfile.wingMarkings,
      valueB: colorB.visualProfile.wingMarkings,
      isEqual: colorA.visualProfile.wingMarkings === colorB.visualProfile.wingMarkings
    },
    {
      label: 'Alas y Remeras',
      valueA: colorA.visualProfile.wings,
      valueB: colorB.visualProfile.wings,
      isEqual: colorA.visualProfile.wings === colorB.visualProfile.wings
    },
    {
      label: 'Cola (Timoneras)',
      valueA: colorA.visualProfile.tail,
      valueB: colorB.visualProfile.tail,
      isEqual: colorA.visualProfile.tail === colorB.visualProfile.tail
    },
    {
      label: 'Ojos e Iris',
      valueA: colorA.visualProfile.eyes,
      valueB: colorB.visualProfile.eyes,
      isEqual: colorA.visualProfile.eyes === colorB.visualProfile.eyes
    },
    {
      label: 'Cera Nasal (Adulto)',
      valueA: colorA.visualProfile.cere,
      valueB: colorB.visualProfile.cere,
      isEqual: colorA.visualProfile.cere === colorB.visualProfile.cere
    },
    {
      label: 'Patas y Uñas',
      valueA: colorA.visualProfile.legs,
      valueB: colorB.visualProfile.legs,
      isEqual: colorA.visualProfile.legs === colorB.visualProfile.legs
    }
  ];

  return (
    <div className="space-y-8">
      {/* Preset Comparisons Bar */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Comparaciones Frecuentes entre Criadores</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {COLOR_PRESET_COMPARISONS.map((preset) => {
            const isSelected =
              (preset.colorAId === colorA.id && preset.colorBId === colorB.id) ||
              (preset.colorAId === colorB.id && preset.colorBId === colorA.id);
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                  isSelected
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xs'
                    : 'bg-white text-[#1B4332] border-[#D8E2DC] hover:border-[#40916C] hover:bg-[#F8F9FA]'
                }`}
              >
                {preset.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* Color A Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#52796F] block">
              Color A (Referencia)
            </label>
            <div className="relative">
              <select
                value={colorAId}
                onChange={(e) => setColorAId(e.target.value)}
                className="w-full pl-4 pr-10 py-3 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] text-sm font-bold text-[#1B4332] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              >
                {COLORS_DATA.map((c) => (
                  <option key={c.id} value={c.id} disabled={c.id === colorBId}>
                    {c.name} ({c.categoryLabel})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#52796F] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Swap Button */}
          <div className="md:col-span-1 flex justify-center pt-2 md:pt-6">
            <button
              onClick={handleSwap}
              title="Intercambiar colores"
              className="p-3 rounded-2xl bg-[#F1F3F2] border border-[#D8E2DC] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white transition-all shadow-2xs hover:scale-105 active:scale-95"
            >
              <ArrowLeftRight className="w-4 h-4" />
            </button>
          </div>

          {/* Color B Selector */}
          <div className="md:col-span-5 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#52796F] block">
              Color B (Comparación)
            </label>
            <div className="relative">
              <select
                value={colorBId}
                onChange={(e) => setColorBId(e.target.value)}
                className="w-full pl-4 pr-10 py-3 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] text-sm font-bold text-[#1B4332] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
              >
                {COLORS_DATA.map((c) => (
                  <option key={c.id} value={c.id} disabled={c.id === colorAId}>
                    {c.name} ({c.categoryLabel})
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#52796F] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Side-by-Side Hero Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Color A Card Preview */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F8F9FA] border border-[#D8E2DC]">
              <img
                src={colorA.images[0]?.url}
                alt={colorA.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#1B4332] border border-[#D8E2DC] flex items-center gap-1.5">
                {colorA.hexColor && (
                  <span
                    className="w-3 h-3 rounded-full border border-white"
                    style={{ backgroundColor: colorA.hexColor }}
                  />
                )}
                <span>Color A</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#40916C]">
                {colorA.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
                {colorA.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#52796F] mt-1 leading-relaxed">
                {colorA.shortDescription}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D8E2DC] flex items-center justify-between">
            <span className="text-xs text-[#52796F] font-medium">
              Base: <strong className="text-[#1B4332]">{colorA.baseColor}</strong>
            </span>
            {onSelectColor && (
              <button
                onClick={() => onSelectColor(colorA)}
                className="text-xs font-bold text-[#2D6A4F] hover:underline"
              >
                Ver Ficha Completa →
              </button>
            )}
          </div>
        </div>

        {/* Color B Card Preview */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F8F9FA] border border-[#D8E2DC]">
              <img
                src={colorB.images[0]?.url}
                alt={colorB.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#1B4332] border border-[#D8E2DC] flex items-center gap-1.5">
                {colorB.hexColor && (
                  <span
                    className="w-3 h-3 rounded-full border border-white"
                    style={{ backgroundColor: colorB.hexColor }}
                  />
                )}
                <span>Color B</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#40916C]">
                {colorB.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
                {colorB.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#52796F] mt-1 leading-relaxed">
                {colorB.shortDescription}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-[#D8E2DC] flex items-center justify-between">
            <span className="text-xs text-[#52796F] font-medium">
              Base: <strong className="text-[#1B4332]">{colorB.baseColor}</strong>
            </span>
            {onSelectColor && (
              <button
                onClick={() => onSelectColor(colorB)}
                className="text-xs font-bold text-[#2D6A4F] hover:underline"
              >
                Ver Ficha Completa →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Preset Insight Analysis if available */}
      {activePreset && (
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-emerald-800/80 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-800/60 flex items-center justify-center text-emerald-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Análisis Especializado de Diferenciación
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                {activePreset.title}
              </h4>
            </div>
          </div>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {activePreset.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Similarities */}
            <div className="p-5 rounded-2xl bg-white/5 border border-emerald-800/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Similitudes Observables</span>
              </div>
              <ul className="space-y-2 text-xs text-emerald-100/80 font-medium">
                {activePreset.similarities.map((sim, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{sim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Differences */}
            <div className="p-5 rounded-2xl bg-white/5 border border-emerald-800/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Diferencias Diagnósticas Clave</span>
              </div>
              <ul className="space-y-2 text-xs text-emerald-100/80 font-medium">
                {activePreset.differences.map((diff, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Differentiation Keys checklist */}
          <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Reglas Rápidas para el Criador en Aviario</span>
            </div>
            <ul className="space-y-1 text-xs text-emerald-100">
              {activePreset.differentiationKeys.map((key, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold font-mono">{i + 1}.</span>
                  <span>{key}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Anatomical Feature-by-Feature Table */}
      <div className="p-5 sm:p-7 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-5">
        <div className="flex items-center justify-between border-b border-[#D8E2DC] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1B4332] font-display">
                Tabla Comparativa Anatómica Detallada
              </h4>
              <p className="text-xs text-[#52796F]">
                Contraste directo parte por parte según las normas de estándar WBO
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#D8E2DC] bg-[#F8F9FA]">
                <th className="py-3 px-4 font-bold text-[#1B4332] w-1/4">Rasgo Anatómico</th>
                <th className="py-3 px-4 font-bold text-[#1B4332] w-3/8">
                  {colorA.name}
                </th>
                <th className="py-3 px-4 font-bold text-[#1B4332] w-3/8">
                  {colorB.name}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8E2DC]">
              {comparisonRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-[#F8F9FA]/80 transition-colors ${
                    !row.isEqual ? 'bg-amber-50/20' : ''
                  }`}
                >
                  <td className="py-3 px-4 font-bold text-[#1B4332] flex items-center gap-2">
                    <span>{row.label}</span>
                    {!row.isEqual && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" title="Rasgo distintivo" />
                    )}
                  </td>
                  <td className="py-3 px-4 text-[#52796F] font-medium leading-relaxed">
                    {row.valueA}
                  </td>
                  <td className="py-3 px-4 text-[#52796F] font-medium leading-relaxed">
                    {row.valueB}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Genetics & Factors Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Dna className="w-4 h-4" />
            <span>Genética Relacionada ({colorA.name})</span>
          </div>
          <div className="space-y-2 text-xs text-[#52796F]">
            <div>
              <strong className="text-[#1B4332]">Mutaciones implicadas:</strong>{' '}
              {colorA.relatedMutations.length > 0
                ? colorA.relatedMutations.join(', ')
                : 'Forma ancestral silvestre'}
            </div>
            <div>
              <strong className="text-[#1B4332]">Factores implicados:</strong>{' '}
              {colorA.relatedFactors.length > 0
                ? colorA.relatedFactors.join(', ')
                : 'Sin factores modificadores'}
            </div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Dna className="w-4 h-4" />
            <span>Genética Relacionada ({colorB.name})</span>
          </div>
          <div className="space-y-2 text-xs text-[#52796F]">
            <div>
              <strong className="text-[#1B4332]">Mutaciones implicadas:</strong>{' '}
              {colorB.relatedMutations.length > 0
                ? colorB.relatedMutations.join(', ')
                : 'Forma ancestral silvestre'}
            </div>
            <div>
              <strong className="text-[#1B4332]">Factores implicados:</strong>{' '}
              {colorB.relatedFactors.length > 0
                ? colorB.relatedFactors.join(', ')
                : 'Sin factores modificadores'}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Notice */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed font-medium">
          <strong>Aviso Ornitológico:</strong> Este comparador visual evalúa exclusivamente las diferencias fenotípicas externas observables. Un parecido visual no implica compatibilidad genética directa para la cría ni revela alelos recesivos en portación.
        </p>
      </div>
    </div>
  );
};
