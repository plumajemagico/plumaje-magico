import React from 'react';
import { VerificationStatus } from '../types';
import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

interface Props {
  status: VerificationStatus;
  notes?: string;
  className?: string;
  showText?: boolean;
}

export const VerificationBadge: React.FC<Props> = ({
  status,
  notes,
  className = '',
  showText = true
}) => {
  if (status === 'verified') {
    return (
      <span
        id="badge-verified"
        title={notes || 'Contenido y genética científicamente verificados'}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC] ${className}`}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
        {showText && <span>Verificado</span>}
      </span>
    );
  }

  if (status === 'pending_review') {
    return (
      <span
        id="badge-pending"
        title={notes || 'Información pendiente de verificación o revisión técnica'}
        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 ${className}`}
      >
        <Clock className="w-3.5 h-3.5 text-amber-700" />
        {showText && <span>Pendiente de revisión</span>}
      </span>
    );
  }

  return (
    <span
      id="badge-draft"
      title={notes || 'Borrador provisional'}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F1F3F2] text-[#52796F] border border-[#D8E2DC] ${className}`}
    >
      <AlertTriangle className="w-3.5 h-3.5 text-[#52796F]" />
      {showText && <span>Borrador técnico</span>}
    </span>
  );
};
