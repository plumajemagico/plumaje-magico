import React from 'react';
import { MutationItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { Feather, Dna, ArrowRight, Sparkles, Layers, ShieldAlert, Image as ImageIcon } from 'lucide-react';

interface Props {
  mutation: MutationItem;
  onSelect: (mutation: MutationItem) => void;
  onQuickView?: (mutation: MutationItem) => void;
}

const CATEGORY_LABELS: Record<string, { label: string; bg: string; text: string; border: string }> = {
  dominante: { label: 'Dominante', bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
  recesiva: { label: 'Recesiva', bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200' },
  ligada_sexo: { label: 'Ligada al Sexo', bg: 'bg-purple-50', text: 'text-purple-800', border: 'border-purple-200' },
  factores: { label: 'Factor', bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
  patrones: { label: 'Patrón', bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200' },
  estructural: { label: 'Estructural', bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200' },
  otras: { label: 'En Revisión', bg: 'bg-slate-50', text: 'text-slate-800', border: 'border-slate-200' },
  combinada: { label: 'Combinación', bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
};

const INHERITANCE_BADGES: Record<string, string> = {
  dominant: 'Dominante',
  recessive: 'Recesiva autosómica',
  sex_linked: 'Ligada al sexo (Z)',
  incomplete_dominant: 'Dominancia incompleta',
  co_dominant: 'Codominante',
  polygenic: 'Herencia poligénica',
  unknown: 'En estudio',
};

export const MutationCard: React.FC<Props> = ({ mutation, onSelect, onQuickView }) => {
  const catStyle = CATEGORY_LABELS[mutation.category] || CATEGORY_LABELS.otras;
  const verifiedImage = mutation.images.find((img) => img.isVerified) || mutation.images[0];

  return (
    <div
      id={`mutation-card-${mutation.slug}`}
      onClick={() => onSelect(mutation)}
      className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-500/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      {/* Top Media / Thumbnail or Visual Pattern Badge */}
      <div className="relative h-44 sm:h-48 w-full bg-slate-900 overflow-hidden">
        {verifiedImage ? (
          <>
            <img
              src={verifiedImage.url}
              alt={mutation.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
              <Feather className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-medium text-slate-300 tracking-wide">
              {mutation.alternativeNames?.[0] || mutation.category}
            </span>
          </div>
        )}

        {/* Badges on Thumbnail */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs border ${catStyle.bg} ${catStyle.text} ${catStyle.border}`}
          >
            {catStyle.label}
          </span>
          <div className="pointer-events-auto">
            <VerificationBadge status={mutation.verificationStatus} />
          </div>
        </div>

        {/* Short Alt Name on Image bottom */}
        {mutation.alternativeNames && mutation.alternativeNames.length > 0 && (
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center gap-1.5 text-xs text-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate font-medium">
              Alias: {mutation.alternativeNames.slice(0, 2).join(', ')}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Inheritance pill */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Dna className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{INHERITANCE_BADGES[mutation.inheritance] || mutation.inheritance}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 font-display transition-colors leading-snug">
            {mutation.name}
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {mutation.shortDescription}
          </p>
        </div>

        {/* Bottom Specs & Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Quick Tags / Info */}
          <div className="flex flex-wrap gap-1.5">
            {mutation.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action link */}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 whitespace-nowrap">
            <span>Ver Ficha</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
