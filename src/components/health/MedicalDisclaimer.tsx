import React from 'react';
import { ShieldAlert, AlertTriangle, Info } from 'lucide-react';
import { MEDICAL_DISCLAIMER_TEXT } from '../../data/health';

interface Props {
  variant?: 'banner' | 'card' | 'inline' | 'compact';
  className?: string;
  customText?: string;
}

export const MedicalDisclaimer: React.FC<Props> = ({
  variant = 'banner',
  className = '',
  customText,
}) => {
  const text = customText || MEDICAL_DISCLAIMER_TEXT;

  if (variant === 'compact') {
    return (
      <div
        id="medical-disclaimer-compact"
        className={`flex items-start gap-2 text-xs text-rose-900/80 bg-rose-50/80 border border-rose-200/80 rounded-xl p-3 ${className}`}
      >
        <Info className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-rose-900">Aviso Educativo:</strong> {text}
        </p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div
        id="medical-disclaimer-inline"
        className={`flex items-center gap-2 text-xs text-slate-600 italic py-2 ${className}`}
      >
        <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
        <span>{text}</span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        id="medical-disclaimer-card"
        className={`p-5 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-2 shadow-xs ${className}`}
      >
        <div className="flex items-center gap-2 font-bold text-amber-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="uppercase tracking-wider text-[11px]">Responsabilidad Sanitaria y Veterinaria</span>
        </div>
        <p className="leading-relaxed text-amber-900/90">{text}</p>
      </div>
    );
  }

  // Default 'banner' variant
  return (
    <div
      id="medical-disclaimer-banner"
      className={`p-4 sm:p-5 rounded-2xl bg-rose-50/90 border border-rose-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-rose-100/90 text-rose-700 flex items-center justify-center shrink-0 border border-rose-300/60 shadow-2xs">
        <ShieldAlert className="w-5 h-5" />
      </div>
      <div className="space-y-0.5 text-xs sm:text-sm">
        <span className="font-bold text-rose-950 block text-[13px] sm:text-sm">
          Aviso Veterinario Importante
        </span>
        <p className="text-rose-900/90 leading-relaxed max-w-4xl">
          {text}
        </p>
      </div>
    </div>
  );
};
