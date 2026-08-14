import React, { useState } from 'react';
import {
  Apple,
  Home,
  TreeDeciduous,
  Droplets,
  Sparkles,
  Sparkle,
  Gamepad2,
  Footprints,
  Hand,
  Thermometer,
  SunMedium,
  Users,
  Plane,
  UserPlus,
  ShieldAlert,
  Wind,
  Search,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { CARE_CATEGORIES_CONFIG, CareCategoryMeta } from '../../data/care';
import { CareArticle } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

interface CareCategoryGridProps {
  articles: CareArticle[];
  onSelectArticle: (article: CareArticle) => void;
  audience: 'beginner' | 'breeder';
}

export const CareCategoryGrid: React.FC<CareCategoryGridProps> = ({
  articles,
  onSelectArticle,
  audience,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-emerald-800' };
    switch (iconName) {
      case 'Apple':
        return <Apple {...props} />;
      case 'Home':
        return <Home {...props} />;
      case 'TreeDeciduous':
        return <TreeDeciduous {...props} />;
      case 'Droplets':
        return <Droplets {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Sparkle':
        return <Sparkle {...props} />;
      case 'Gamepad2':
        return <Gamepad2 {...props} />;
      case 'Footprints':
        return <Footprints {...props} />;
      case 'Hand':
        return <Hand {...props} />;
      case 'Thermometer':
        return <Thermometer {...props} />;
      case 'SunMedium':
        return <SunMedium {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Plane':
        return <Plane {...props} />;
      case 'UserPlus':
        return <UserPlus {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      default:
        return <Apple {...props} />;
    }
  };

  const filteredCategories = CARE_CATEGORIES_CONFIG.filter((cat) => {
    const matchesGroup = selectedGroup === 'all' || cat.categoryGroup === selectedGroup;
    const matchesSearch =
      searchTerm.trim() === '' ||
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  const groupLabels: { [key: string]: string } = {
    all: 'Todos los Temas (16)',
    esencial: 'Cuidado Esencial',
    entorno: 'Entorno e Higiene',
    bienestar: 'Bienestar y Mente',
    seguridad: 'Seguridad y Salud',
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
        {/* Search input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="care-search-input"
            type="text"
            placeholder="Buscar por tema (ej. teflón, perchas, semillas, baño)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Group Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1 mr-0.5" />
          {['all', 'esencial', 'entorno', 'bienestar', 'seguridad'].map((groupKey) => (
            <button
              key={groupKey}
              id={`care-filter-${groupKey}-btn`}
              onClick={() => setSelectedGroup(groupKey)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedGroup === groupKey
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300/80 font-bold'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {groupLabels[groupKey]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredCategories.map((cat) => {
          const matchingArticle = articles.find((a) => a.id === cat.id || a.slug === cat.slug);

          return (
            <div
              key={cat.id}
              id={`care-card-${cat.id}`}
              onClick={() => matchingArticle && onSelectArticle(matchingArticle)}
              className="group bg-white rounded-2xl border border-slate-200/90 p-5 hover:border-emerald-700 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {cat.categoryGroup}
                    </span>
                    {matchingArticle && (
                      <VerificationBadge status={matchingArticle.verificationStatus} />
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-emerald-900 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                    {cat.summary}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800 group-hover:text-emerald-900">
                <span>
                  {audience === 'breeder' && matchingArticle?.breederNotes
                    ? 'Ver guía con notas técnicas'
                    : 'Explorar guía completa'}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredCategories.length === 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-700">No se encontraron temas con ese criterio de búsqueda.</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedGroup('all');
            }}
            className="text-xs font-bold text-emerald-800 hover:underline"
          >
            Restablecer filtros
          </button>
        </div>
      )}
    </div>
  );
};
