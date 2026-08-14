import React, { useState } from 'react';
import { ColorItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { VisualProfile } from './VisualProfile';
import { 
  X, 
  Dna, 
  Layers, 
  BookOpen, 
  SlidersHorizontal, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Share2
} from 'lucide-react';

interface Props {
  color: ColorItem;
  onClose: () => void;
  onOpenMutation?: (mutationId: string) => void;
  onNavigateGenetics?: (subtab?: string) => void;
  onCompareWith?: (color: ColorItem) => void;
}

export const ColorDetailModal: React.FC<Props> = ({
  color,
  onClose,
  onOpenMutation,
  onNavigateGenetics,
  onCompareWith
}) => {
  const [levelMode, setLevelMode] = useState<'principiante' | 'criador'>('principiante');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const currentImage = color.images[activeImageIndex] || color.images[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#FDFCFB] rounded-3xl overflow-hidden shadow-2xl border border-[#D8E2DC] my-8 flex flex-col max-h-[92vh]"
      >
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#D8E2DC] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {color.hexColor && (
              <span
                className="w-4 h-4 rounded-full border-2 border-white shadow-xs shrink-0"
                style={{ backgroundColor: color.hexColor }}
              />
            )}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#40916C]">
                {color.categoryLabel}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#1B4332] font-display leading-tight">
                {color.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Level Toggle */}
            <div className="p-0.5 rounded-xl bg-[#F1F3F2] border border-[#D8E2DC] hidden sm:flex items-center text-xs font-bold">
              <button
                onClick={() => setLevelMode('principiante')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  levelMode === 'principiante'
                    ? 'bg-white text-[#1B4332] shadow-xs'
                    : 'text-[#52796F] hover:text-[#1B4332]'
                }`}
              >
                Principiante
              </button>
              <button
                onClick={() => setLevelMode('criador')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  levelMode === 'criador'
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-[#52796F] hover:text-[#1B4332]'
                }`}
              >
                Criador
              </button>
            </div>

            <button
              onClick={handleShare}
              title="Compartir o copiar enlace"
              className="p-2 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-[#52796F] hover:text-[#1B4332] transition-colors relative"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && (
                <span className="absolute -bottom-8 right-0 px-2 py-1 rounded bg-black text-white text-[10px] whitespace-nowrap shadow-md">
                  ¡Enlace copiado!
                </span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#F8F9FA] hover:bg-[#D8E2DC] text-[#1B4332] transition-colors"
              aria-label="Cerrar ficha"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Hero Section: Photo + Quick Summary */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Gallery / Image Viewport */}
            <div className="md:col-span-6 space-y-3">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-black border border-[#D8E2DC] shadow-xs">
                <img
                  src={currentImage?.url}
                  alt={currentImage?.caption || color.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3">
                  <VerificationBadge status={color.verificationStatus} />
                </div>
              </div>

              {/* Multi-image thumbnails */}
              {color.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {color.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#2D6A4F] scale-105 shadow-xs'
                          : 'border-[#D8E2DC] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              <p className="text-xs text-[#52796F] italic">
                {currentImage?.caption} — <span className="font-semibold text-[#1B4332]">{currentImage?.author || 'Plumaje Mágico Archive'}</span> ({currentImage?.license || 'CC-BY-SA'})
              </p>
            </div>

            {/* Quick Details & Mode Overview */}
            <div className="md:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                  Identificación Cromática
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
                  {color.name}
                </h3>
                <p className="text-sm text-[#52796F] leading-relaxed font-medium">
                  {color.shortDescription}
                </p>
              </div>

              {/* Color Metadata Badges */}
              <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#52796F] font-semibold">Tonalidad Base:</span>
                  <span className="font-bold text-[#1B4332]">{color.baseColor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#52796F] font-semibold">Categoría Visual:</span>
                  <span className="font-bold text-[#1B4332]">{color.categoryLabel}</span>
                </div>
                {color.relatedLines && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#52796F] font-semibold">Línea de Pigmento:</span>
                    <span className="font-bold text-[#2D6A4F]">
                      {color.relatedLines.map((l) => (l === 'linea-verde' ? 'Verde (Ancestral)' : 'Azul (Sin Psitacina)')).join(' / ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {onCompareWith && (
                  <button
                    onClick={() => onCompareWith(color)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#1B4332] text-white text-xs font-bold hover:bg-[#2D6A4F] transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Comparar con otro Color</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
            <div className="flex items-center gap-2.5 text-[#1B4332]">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold font-display">
                Descripción Visual y Estructura Óptica
              </h4>
            </div>

            <p className="text-sm text-[#52796F] leading-relaxed">
              {color.description}
            </p>

            {/* Visual Characteristics Bullet List */}
            <div className="pt-3 space-y-2 border-t border-[#D8E2DC]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                Rasgos Visuales Clave para la Identificación:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {color.visualCharacteristics.map((char, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs text-[#1B4332] flex items-start gap-2"
                  >
                    <span className="text-[#2D6A4F] font-bold mt-0.5">•</span>
                    <span className="leading-relaxed font-medium">{char}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Anatomical Visual Profile Component */}
          <VisualProfile profile={color.visualProfile} title="Desglose Anatómico por Zonas Corporales" />

          {/* Related Genetics & Modifiers (NO DUPLICATION, REFERENCE EXISTING) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-6">
            <div className="flex items-center justify-between border-b border-[#D8E2DC] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800">
                  <Dna className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1B4332] font-display">
                    Genética y Factores Modificadores Relacionados
                  </h4>
                  <p className="text-xs text-[#52796F]">
                    Conexión directa con los módulos científicos de Mutaciones y Genética de Plumaje Mágico
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Linked Mutations */}
              <div className="p-5 rounded-2xl bg-white border border-[#D8E2DC] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <Dna className="w-4 h-4" />
                  <span>Mutaciones Genéticas Implicadas</span>
                </div>
                {color.relatedMutations.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs text-[#52796F]">
                      Esta variedad depende de las siguientes mutaciones del catálogo:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {color.relatedMutations.map((mutId) => (
                        <button
                          key={mutId}
                          onClick={() => {
                            if (onOpenMutation) onOpenMutation(mutId);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center gap-1.5"
                        >
                          <span className="capitalize">{mutId.replace(/-/g, ' ')}</span>
                          <ExternalLink className="w-3 h-3 text-emerald-700" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#52796F] italic">
                    Corresponde a la forma ancestral silvestre o no presenta mutación estructural primaria.
                  </p>
                )}
              </div>

              {/* Linked Factors */}
              <div className="p-5 rounded-2xl bg-white border border-[#D8E2DC] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-800">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Factores Modificadores Implicados</span>
                </div>
                {color.relatedFactors.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs text-[#52796F]">
                      Factores aditivos o de oscuridad que actúan sobre este color:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {color.relatedFactors.map((facId) => (
                        <button
                          key={facId}
                          onClick={() => {
                            if (onNavigateGenetics) onNavigateGenetics('factores-color');
                          }}
                          className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100 text-xs font-bold transition-colors flex items-center gap-1.5"
                        >
                          <span className="capitalize">{facId.replace(/-/g, ' ')}</span>
                          <ArrowRight className="w-3 h-3 text-purple-700" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#52796F] italic">
                    Sin factores modificadores activos (expresión 0D pura).
                  </p>
                )}
              </div>
            </div>

            {/* Breeder Mode Genetics Notes */}
            {levelMode === 'criador' && (
              <div className="p-4 rounded-2xl bg-emerald-950 text-emerald-100 text-xs space-y-2">
                <div className="font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Nota Científica para Selección en Aviario</span>
                </div>
                <p className="leading-relaxed">
                  Para fines de cría y apareamientos, recuerda que los colores de serie azul se heredan como recesivos autosómicos frente al verde, mientras que los factores de oscuridad (0D, 1D, 2D) se transmiten por dominancia incompleta y los factores violeta y gris son dominantes directos.
                </p>
              </div>
            )}
          </div>

          {/* Documented Variations if available */}
          {color.variations && color.variations.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-[#1B4332]">
                <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-lg font-bold font-display">
                  Variaciones Verificadas
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {color.variations.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2"
                  >
                    <h5 className="text-sm font-bold text-[#1B4332]">{v.name}</h5>
                    <p className="text-xs text-[#52796F] leading-relaxed">{v.description}</p>
                    {v.geneticsContext && (
                      <div className="text-[11px] font-semibold text-[#2D6A4F] font-mono bg-white p-2 rounded-lg border border-[#D8E2DC]">
                        {v.geneticsContext}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sources Section */}
          {color.sources && color.sources.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2 text-xs">
              <div className="font-bold text-[#1B4332] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Fuentes Ornitológicas y Estándares Consultados</span>
              </div>
              <ul className="space-y-1 text-[#52796F]">
                {color.sources.map((src, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
