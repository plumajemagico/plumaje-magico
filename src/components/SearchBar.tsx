import React, { useState, useEffect } from 'react';
import { Search, X, Feather, BookOpen, HeartPulse, Sparkles, ShieldAlert, Layers, Apple, AlertTriangle, Egg, Clock, CheckSquare } from 'lucide-react';
import { MUTATIONS_DATA } from '../data/mutations';
import { ENCYCLOPEDIA_ARTICLES } from '../data/encyclopedia';
import { HEALTH_CONDITIONS_DATA } from '../data/health';
import { CARE_ARTICLES_DATA, FOOD_ITEMS_DATA, SAFETY_ITEMS_DATA } from '../data/care';
import { NUTRITION_FOOD_ITEMS, FEEDING_GUIDE_ARTICLES } from '../data/nutrition';
import { BREEDING_ARTICLES_DATA, EGG_GUIDES_DATA } from '../data/breeding';
import { GENETIC_FACTORS_DATA } from '../data/factors';
import { COLOR_LINES_DATA } from '../data/colorLines';
import { GENETICS_GLOSSARY_DATA, COMBINATIONS_DATA, ALLELES_DATA } from '../data/geneticsData';
import { COLORS_DATA } from '../data/colorsData';
import { Palette } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (type: string, id: string) => void;
}

export const SearchBarModal: React.FC<Props> = ({ isOpen, onClose, onSelectResult }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search through all data
  const filteredMutations = normalizedQuery
    ? MUTATIONS_DATA.filter(
        (m) =>
          m.name.toLowerCase().includes(normalizedQuery) ||
          m.shortDescription.toLowerCase().includes(normalizedQuery) ||
          m.description.toLowerCase().includes(normalizedQuery) ||
          m.category.toLowerCase().includes(normalizedQuery) ||
          m.alternativeNames?.some((a) => a.toLowerCase().includes(normalizedQuery)) ||
          m.tags?.some((t) => t.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const filteredArticles = normalizedQuery
    ? ENCYCLOPEDIA_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(normalizedQuery) ||
          a.summary.toLowerCase().includes(normalizedQuery) ||
          a.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const filteredHealth = normalizedQuery
    ? HEALTH_CONDITIONS_DATA.filter(
        (h) =>
          h.name.toLowerCase().includes(normalizedQuery) ||
          h.shortDescription.toLowerCase().includes(normalizedQuery) ||
          h.description.toLowerCase().includes(normalizedQuery) ||
          h.scientificOrAlternativeName?.toLowerCase().includes(normalizedQuery) ||
          h.signs.some((s) => s.toLowerCase().includes(normalizedQuery)) ||
          h.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const filteredCare = normalizedQuery
    ? CARE_ARTICLES_DATA.filter(
        (c) =>
          c.title.toLowerCase().includes(normalizedQuery) ||
          c.shortDescription.toLowerCase().includes(normalizedQuery) ||
          c.content.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredFoods = normalizedQuery
    ? NUTRITION_FOOD_ITEMS.filter(
        (f) =>
          f.name.toLowerCase().includes(normalizedQuery) ||
          (f.scientificName && f.scientificName.toLowerCase().includes(normalizedQuery)) ||
          (f.alternativeNames && f.alternativeNames.some((alt) => alt.toLowerCase().includes(normalizedQuery))) ||
          f.description.toLowerCase().includes(normalizedQuery) ||
          f.feedingNotes.toLowerCase().includes(normalizedQuery) ||
          (f.tags && f.tags.some((t) => t.toLowerCase().includes(normalizedQuery)))
      )
    : [];

  const filteredFeedingGuides = normalizedQuery
    ? FEEDING_GUIDE_ARTICLES.filter(
        (g) =>
          g.title.toLowerCase().includes(normalizedQuery) ||
          (g.subtitle && g.subtitle.toLowerCase().includes(normalizedQuery)) ||
          g.content.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredSafety = normalizedQuery
    ? SAFETY_ITEMS_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(normalizedQuery) ||
          s.description.toLowerCase().includes(normalizedQuery) ||
          s.prevention.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredFactors = normalizedQuery
    ? GENETIC_FACTORS_DATA.filter(
        (f) =>
          f.name.toLowerCase().includes(normalizedQuery) ||
          f.description.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredBreeding = normalizedQuery
    ? BREEDING_ARTICLES_DATA.filter(
        (b) =>
          b.title.toLowerCase().includes(normalizedQuery) ||
          b.shortDescription.toLowerCase().includes(normalizedQuery) ||
          b.content.toLowerCase().includes(normalizedQuery) ||
          (b.seo?.keywords && b.seo.keywords.some((k) => k.toLowerCase().includes(normalizedQuery)))
      )
    : [];

  const filteredEggGuides = normalizedQuery
    ? EGG_GUIDES_DATA.filter(
        (e) =>
          e.title.toLowerCase().includes(normalizedQuery) ||
          e.description.toLowerCase().includes(normalizedQuery) ||
          e.visualDescription.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredGeneticsTerms = normalizedQuery
    ? GENETICS_GLOSSARY_DATA.filter(
        (t) =>
          t.term.toLowerCase().includes(normalizedQuery) ||
          t.shortDefinition.toLowerCase().includes(normalizedQuery) ||
          t.longDefinition.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const filteredCombinations = normalizedQuery
    ? COMBINATIONS_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.description.toLowerCase().includes(normalizedQuery) ||
          (c.alternativeNames && c.alternativeNames.some((alt) => alt.toLowerCase().includes(normalizedQuery)))
      )
    : [];

  const filteredColors = normalizedQuery
    ? COLORS_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.shortDescription.toLowerCase().includes(normalizedQuery) ||
          c.baseColor.toLowerCase().includes(normalizedQuery) ||
          c.categoryLabel.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const totalResults =
    filteredMutations.length +
    filteredColors.length +
    filteredArticles.length +
    filteredHealth.length +
    filteredCare.length +
    filteredFoods.length +
    filteredFeedingGuides.length +
    filteredSafety.length +
    filteredFactors.length +
    filteredBreeding.length +
    filteredEggGuides.length +
    filteredGeneticsTerms.length +
    filteredCombinations.length;

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="search-modal-card"
        className="w-full max-w-2xl bg-[#FDFCFB] rounded-2xl shadow-2xl border border-[#D8E2DC] overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input header */}
        <div className="p-4 border-b border-[#D8E2DC] flex items-center gap-3 bg-[#F1F3F2]">
          <Search className="w-5 h-5 text-[#2D6A4F] shrink-0" />
          <input
            type="text"
            placeholder="Buscar mutaciones, factores, cuidados, salud o términos (ej: opalino, cobalto, ácaros, nido)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-[#1B4332] placeholder-[#52796F] text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#52796F] hover:text-[#1B4332] rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-medium text-[#52796F] hover:text-[#1B4332] bg-white border border-[#D8E2DC] rounded-md"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto divide-y divide-[#D8E2DC] space-y-4">
          {!query ? (
            <div className="py-8 text-center text-[#52796F] flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white p-1 border border-[#D8E2DC] shadow-xs flex items-center justify-center mb-3">
                <img
                  src="/logo.jpg"
                  alt="Plumaje Mágico"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm font-medium text-[#1B4332]">Buscador global de Plumaje Mágico</p>
              <p className="text-xs text-[#52796F] mt-1">Escribe para encontrar al instante información genética, mutaciones o cuidados</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Opalino', 'Cobalto', 'Perlado', 'Ácaros', 'Nutrición', 'Arcoíris', 'Lutino'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="px-3 py-1 bg-[#F1F3F2] hover:bg-[#2D6A4F] hover:text-white border border-[#D8E2DC] text-xs text-[#1B4332] rounded-full transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-[#52796F]">
              <p className="text-sm font-medium text-[#1B4332]">No se encontraron resultados para "{query}"</p>
              <p className="text-xs text-[#52796F] mt-1">Intenta con otro término genético o de salud</p>
            </div>
          ) : (
            <>
              {filteredColors.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Colores y Variedades ({filteredColors.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredColors.map((col) => (
                      <button
                        key={col.id}
                        onClick={() => {
                          onSelectResult('color', col.slug);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1F3F2] transition-colors flex items-start justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          {col.hexColor && (
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
                              style={{ backgroundColor: col.hexColor }}
                            />
                          )}
                          <div>
                            <div className="font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] text-sm">
                              {col.name}
                            </div>
                            <p className="text-xs text-[#52796F] line-clamp-1">{col.shortDescription}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 shrink-0 ml-2">
                          {col.categoryLabel}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredMutations.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                    <Feather className="w-3.5 h-3.5" />
                    <span>Mutaciones ({filteredMutations.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredMutations.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          onSelectResult('mutation', m.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1F3F2] transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] text-sm">
                            {m.name}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{m.shortDescription}</p>
                        </div>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC] shrink-0 ml-2">
                          {m.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredFactors.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Factores Genéticos ({filteredFactors.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredFactors.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onSelectResult('factor', f.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1F3F2] transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] text-sm">
                            {f.name}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{f.visualEffect}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredHealth.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Salud y Veterinaria ({filteredHealth.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredHealth.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => {
                          onSelectResult('health', h.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-rose-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-rose-800 text-sm">
                            {h.name}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{h.shortDescription}</p>
                        </div>
                        {h.isEmergency && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 shrink-0 ml-2">
                            Urgente
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredArticles.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Enciclopedia ({filteredArticles.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredArticles.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          onSelectResult('article', a.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1F3F2] transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] text-sm">
                            {a.title}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{a.subtitle}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredCare.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#40916C] mb-2">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>Guías de Cuidados ({filteredCare.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredCare.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectResult('care', c.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1F3F2] transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] text-sm">
                            {c.title}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{c.shortDescription}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredFoods.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    <Apple className="w-3.5 h-3.5" />
                    <span>Biblioteca de Alimentos ({filteredFoods.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredFoods.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onSelectResult('food', f.slug || f.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-emerald-800 text-sm flex items-center gap-1.5">
                            <span>{f.name}</span>
                            {f.safetyStatus === 'avoid' && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-100 text-red-800 font-bold">
                                Tóxico
                              </span>
                            )}
                            {f.safetyStatus === 'moderate' && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">
                                Moderación
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{f.shortDescription || f.description}</p>
                        </div>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC] shrink-0 ml-2">
                          {f.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredFeedingGuides.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Guías de Alimentación ({filteredFeedingGuides.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredFeedingGuides.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          onSelectResult('feeding_guide', g.slug || g.category || g.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#F1F3F2] transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-[#2D6A4F] text-sm">
                            {g.title}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{g.subtitle || g.content}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredSafety.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Peligros y Toxicidades ({filteredSafety.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredSafety.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          onSelectResult('care', 'seguridad');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-[#1B4332] group-hover:text-amber-800 text-sm">
                            {s.name}
                          </div>
                          <p className="text-xs text-[#52796F] line-clamp-1">{s.description}</p>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                            s.riskLevel === 'critical'
                              ? 'bg-red-100 text-red-800 border border-red-200'
                              : 'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {s.riskLevel}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredBreeding.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                    <Egg className="w-3.5 h-3.5" />
                    <span>Cría y Reproducción ({filteredBreeding.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredBreeding.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onSelectResult('breeding', b.id);
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-amber-800 text-sm flex items-center gap-1.5">
                            <span>{b.icon || '🪺'}</span>
                            <span>{b.title}</span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">{b.shortDescription}</p>
                        </div>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 shrink-0 ml-2">
                          {b.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredEggGuides.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Guías de Ovoscopia ({filteredEggGuides.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredEggGuides.map((eg) => (
                      <button
                        key={eg.id}
                        onClick={() => {
                          onSelectResult('breeding', 'huevos');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-amber-800 text-sm">
                            {eg.title}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">{eg.description}</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shrink-0 ml-2">
                          {eg.statusLabel}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredGeneticsTerms.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Glosario y Conceptos Genéticos ({filteredGeneticsTerms.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredGeneticsTerms.map((gt) => (
                      <button
                        key={gt.id}
                        onClick={() => {
                          onSelectResult('genetics', 'glosario');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-emerald-800 text-sm">
                            {gt.term}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">{gt.shortDefinition}</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 shrink-0 ml-2">
                          {gt.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {filteredCombinations.length > 0 && (
                <div className="pt-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-800 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Combinaciones Genéticas ({filteredCombinations.length})</span>
                  </div>
                  <div className="space-y-1">
                    {filteredCombinations.map((comb) => (
                      <button
                        key={comb.id}
                        onClick={() => {
                          onSelectResult('genetics', 'combinaciones');
                          onClose();
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-purple-50/70 transition-colors flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-purple-800 text-sm">
                            {comb.name}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">{comb.description}</p>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-900 border border-purple-200 shrink-0 ml-2">
                          Combinación
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
