import React, { useState } from 'react';
import { BreedingArticle, BreedingCategory } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { 
  ArrowRight, 
  Search, 
  Filter, 
  Sparkles, 
  Egg, 
  ShieldAlert, 
  HeartHandshake, 
  Home, 
  Feather, 
  Dna, 
  Clock, 
  FileSpreadsheet, 
  AlertTriangle 
} from 'lucide-react';

interface BreedingCategoryGridProps {
  articles: BreedingArticle[];
  audience: 'beginner' | 'breeder';
  onSelectArticle: (article: BreedingArticle) => void;
  onNavigateToTab?: (tab: string) => void;
}

export const BreedingCategoryGrid: React.FC<BreedingCategoryGridProps> = ({
  articles,
  audience,
  onSelectArticle,
  onNavigateToTab,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.seo?.keywords && art.seo.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())));
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoriesList: { id: string; label: string; icon: any }[] = [
    { id: 'all', label: 'Todas las Guías', icon: Sparkles },
    { id: 'preparacion', label: 'Preparación', icon: Clock },
    { id: 'parejas', label: 'Parejas', icon: HeartHandshake },
    { id: 'seleccion', label: 'Selección', icon: Dna },
    { id: 'nido', label: 'Nido', icon: Home },
    { id: 'puesta', label: 'Puesta', icon: Egg },
    { id: 'huevos', label: 'Huevos', icon: Egg },
    { id: 'incubacion', label: 'Incubación', icon: Clock },
    { id: 'nacimiento', label: 'Nacimiento', icon: Sparkles },
    { id: 'polluelos', label: 'Polluelos', icon: Feather },
    { id: 'destete', label: 'Destete', icon: ArrowRight },
    { id: 'problemas', label: 'Problemas', icon: AlertTriangle },
    { id: 'genetica', label: 'Genética', icon: Dna },
    { id: 'registro', label: 'Registro', icon: FileSpreadsheet },
  ];

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="breeding-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por tema (ej. ovoscopia, anillado, concavidad, distocia, destete)..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold px-1.5 py-0.5 rounded-full"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block ml-1" />
          <select
            id="breeding-category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 cursor-pointer"
          >
            {categoriesList.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const isSpecialGenetics = article.category === 'genetica';
            const isProblems = article.category === 'problemas';
            const isNest = article.category === 'nido';

            return (
              <div
                key={article.id}
                id={`breeding-card-${article.slug}`}
                onClick={() => onSelectArticle(article)}
                className={`group cursor-pointer bg-white rounded-3xl border transition-all duration-200 p-6 flex flex-col justify-between hover:shadow-lg relative overflow-hidden ${
                  isProblems
                    ? 'border-rose-200 hover:border-rose-400 hover:shadow-rose-500/10'
                    : isSpecialGenetics
                    ? 'border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/10'
                    : 'border-slate-200/90 hover:border-amber-400 hover:shadow-amber-500/10'
                }`}
              >
                {/* Accent top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isProblems
                      ? 'bg-rose-500'
                      : isSpecialGenetics
                      ? 'bg-indigo-500'
                      : isNest
                      ? 'bg-amber-600'
                      : 'bg-amber-500'
                  }`}
                />

                <div className="space-y-4">
                  {/* Category icon & Verification */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xs transition-transform group-hover:scale-110 ${
                        isProblems
                          ? 'bg-rose-50 border border-rose-200 text-rose-700'
                          : isSpecialGenetics
                          ? 'bg-indigo-50 border border-indigo-200 text-indigo-700'
                          : 'bg-amber-50 border border-amber-200 text-amber-800'
                      }`}
                    >
                      {article.icon || '🪺'}
                    </div>
                    <VerificationBadge status={article.verificationStatus} />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800/80">
                      Módulo: {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-display mt-0.5 group-hover:text-amber-800 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mt-2 leading-relaxed">
                      {article.shortDescription}
                    </p>
                  </div>

                  {/* Highlights / Special chips */}
                  {isSpecialGenetics && (
                    <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center gap-2 text-xs font-semibold text-indigo-900">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Próximamente: Calculadora Genética</span>
                    </div>
                  )}

                  {isProblems && (
                    <div className="p-2.5 rounded-xl bg-rose-50/80 border border-rose-100 flex items-center gap-2 text-xs font-semibold text-rose-900">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span>Señales de alarma y derivación veterinaria</span>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                  <span>
                    {audience === 'breeder' ? 'Ver detalles técnicos' : 'Leer guía completa'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-50 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-4">
          <Egg className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-800 font-display">
            No se encontraron guías para "{searchQuery}"
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Intenta con otros términos como "ovoscopia", "anillado", "nido", "destete" o "calcio".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
          >
            Restablecer filtros
          </button>
        </div>
      )}
    </div>
  );
};
