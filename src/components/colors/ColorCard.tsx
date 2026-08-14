import React from 'react';
import { ColorItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { 
  Eye, 
  Dna, 
  ArrowRight, 
  Layers, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

interface Props {
  color: ColorItem;
  onSelect: (color: ColorItem) => void;
  onCompare?: (color: ColorItem) => void;
  onNavigateGenetics?: (mutationId?: string) => void;
  isBreederMode?: boolean;
}

export const ColorCard: React.FC<Props> = ({
  color,
  onSelect,
  onCompare,
  onNavigateGenetics,
  isBreederMode = false
}) => {
  const mainImage = color.images?.[0]?.url || 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80';

  return (
    <div
      id={`color-card-${color.slug}`}
      className="group rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs hover:shadow-md hover:border-[#B7C9C0] transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Image Header with Badge Overlay */}
      <div className="relative aspect-4/3 w-full bg-[#F8F9FA] overflow-hidden">
        <img
          src={mainImage}
          alt={`Periquito australiano ${color.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-[#1B4332] shadow-xs backdrop-blur-xs flex items-center gap-1.5 pointer-events-auto">
            {color.category === 'green_series' && '🟢'}
            {color.category === 'blue_series' && '🔵'}
            {color.category === 'yellow' && '🟡'}
            {color.category === 'white' && '⚪'}
            {color.category === 'grey' && '⚫'}
            {color.category === 'violet' && '🟣'}
            {color.category === 'dark_factor' && '🌑'}
            {color.category === 'color_factor' && '✨'}
            {color.category === 'pattern' && '🪶'}
            <span>{color.categoryLabel}</span>
          </span>

          <div className="pointer-events-auto">
            <VerificationBadge status={color.verificationStatus} />
          </div>
        </div>

        {/* Bottom Image Overlay Info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            {color.hexColor && (
              <span
                className="w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs shrink-0"
                style={{ backgroundColor: color.hexColor }}
                title={`Tonalidad aproximada: ${color.hexColor}`}
              />
            )}
            <span className="text-xs font-medium text-white/90 drop-shadow-xs truncate max-w-[200px]">
              {color.baseColor}
            </span>
          </div>
          {color.images.length > 1 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/50 text-white backdrop-blur-xs">
              {color.images.length} fotos
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#1B4332] font-display group-hover:text-[#2D6A4F] transition-colors leading-snug">
              {color.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-[#52796F] line-clamp-2 leading-relaxed">
            {color.shortDescription}
          </p>

          {/* Key Visual Features (First 2) */}
          <div className="pt-1 space-y-1.5">
            {color.visualCharacteristics.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#2D6A4F]">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                <span className="line-clamp-1 font-medium">{feat}</span>
              </div>
            ))}
          </div>

          {/* Breeder mode extra metadata */}
          {isBreederMode && (
            <div className="pt-2 border-t border-[#D8E2DC] flex flex-wrap gap-1.5 text-[11px]">
              {color.relatedMutations.length > 0 && (
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200 font-medium flex items-center gap-1">
                  <Dna className="w-3 h-3 text-emerald-700" />
                  {color.relatedMutations.length} Mutación(es)
                </span>
              )}
              {color.relatedFactors.length > 0 && (
                <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-900 border border-purple-200 font-medium flex items-center gap-1">
                  <SlidersHorizontal className="w-3 h-3 text-purple-700" />
                  Factor(es)
                </span>
              )}
              {color.relatedLines && (
                <span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-900 border border-sky-200 font-medium">
                  {color.relatedLines.join(', ')}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-[#D8E2DC] flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(color)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#1B4332] text-white text-xs font-bold hover:bg-[#2D6A4F] transition-all flex items-center justify-center gap-1.5 shadow-2xs group/btn"
          >
            <span>Ver Ficha Visual</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          {onCompare && (
            <button
              onClick={() => onCompare(color)}
              title="Comparar este color con otro"
              className="p-2.5 rounded-xl border border-[#D8E2DC] text-[#52796F] hover:text-[#1B4332] hover:bg-[#F1F3F2] transition-colors shrink-0"
            >
              <Layers className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
