import React from 'react';
import { InheritanceType } from '../../types';
import { Dna, Sparkles, Feather, Split, Shuffle, HelpCircle } from 'lucide-react';

interface Props {
  type: InheritanceType | string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const InheritanceBadge: React.FC<Props> = ({
  type,
  size = 'md',
  showIcon = true
}) => {
  const getBadgeConfig = () => {
    switch (type) {
      case 'dominant':
      case 'autosomal_dominant':
        return {
          label: 'Dominante Autosómico',
          shortLabel: 'Dominante',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          iconBg: 'bg-emerald-100 text-emerald-700',
          icon: Dna
        };
      case 'recessive':
      case 'autosomal_recessive':
        return {
          label: 'Recesivo Autosómico',
          shortLabel: 'Recesivo',
          bg: 'bg-blue-50 text-blue-800 border-blue-200',
          iconBg: 'bg-blue-100 text-blue-700',
          icon: Split
        };
      case 'sex_linked':
        return {
          label: 'Ligada al Sexo (Cromosoma Z)',
          shortLabel: 'Ligada al Sexo',
          bg: 'bg-purple-50 text-purple-800 border-purple-200',
          iconBg: 'bg-purple-100 text-purple-700',
          icon: Sparkles
        };
      case 'incomplete_dominant':
      case 'co_dominant':
        return {
          label: 'Semidominante / Incompleta',
          shortLabel: 'Semidominante',
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          iconBg: 'bg-amber-100 text-amber-700',
          icon: Shuffle
        };
      case 'polygenic':
        return {
          label: 'Poligénica Compleja',
          shortLabel: 'Poligénica',
          bg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          iconBg: 'bg-indigo-100 text-indigo-700',
          icon: Feather
        };
      default:
        return {
          label: 'Herencia Especial',
          shortLabel: 'Especial',
          bg: 'bg-stone-100 text-stone-700 border-stone-200',
          iconBg: 'bg-stone-200 text-stone-600',
          icon: HelpCircle
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3.5 py-1.5 text-sm gap-2'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  };

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border ${config.bg} ${sizeClasses[size]}`}
      title={config.label}
    >
      {showIcon && (
        <span className={`p-0.5 rounded-full ${config.iconBg} shrink-0`}>
          <Icon className={iconSizes[size]} />
        </span>
      )}
      <span className="truncate">{size === 'sm' ? config.shortLabel : config.label}</span>
    </span>
  );
};
