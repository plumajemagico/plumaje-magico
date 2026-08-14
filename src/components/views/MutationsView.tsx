import React, { useState, useMemo, useEffect } from 'react';
import { MUTATIONS_DATA } from '../../data/mutations';
import { MutationItem, MutationCategory } from '../../types';
import { MutationSearch } from '../mutations/MutationSearch';
import { MutationFilters, MutationFilterState } from '../mutations/MutationFilters';
import { MutationGrid } from '../mutations/MutationGrid';
import { MutationDetail } from '../mutations/MutationDetail';
import {
  Feather,
  Dna,
  Sparkles,
  BookOpen,
  Filter,
  Layers,
  ShieldCheck,
  Info
} from 'lucide-react';

interface Props {
  onSelectMutation?: (mutation: MutationItem) => void;
  initialSlug?: string | null;
  onNavigateHome?: () => void;
}

const DEFAULT_FILTERS: MutationFilterState = {
  category: 'all',
  inheritance: 'all',
  verification: 'all',
  colorLine: 'all',
  sortBy: 'name',
};

export const MutationsView: React.FC<Props> = ({
  onSelectMutation,
  initialSlug,
  onNavigateHome,
}) => {
  const [selectedMutation, setSelectedMutation] = useState<MutationItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filters, setFilters] = useState<MutationFilterState>(DEFAULT_FILTERS);

  // Sync initial slug if provided
  useEffect(() => {
    if (initialSlug) {
      const found = MUTATIONS_DATA.find((m) => m.slug === initialSlug || m.id === initialSlug);
      if (found) {
        setSelectedMutation(found);
      }
    }
  }, [initialSlug]);

  // Categories computed dynamically from data model
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: MUTATIONS_DATA.length,
      dominante: 0,
      recesiva: 0,
      ligada_sexo: 0,
      factores: 0,
      patrones: 0,
      estructural: 0,
      otras: 0,
    };

    MUTATIONS_DATA.forEach((m) => {
      if (counts[m.category] !== undefined) {
        counts[m.category]++;
      } else {
        counts.otras = (counts.otras || 0) + 1;
      }
    });

    return [
      { id: 'all', label: 'Todas las Mutaciones', count: counts.all },
      { id: 'dominante', label: 'Dominantes', count: counts.dominante },
      { id: 'recesiva', label: 'Recesivas', count: counts.recesiva },
      { id: 'ligada_sexo', label: 'Ligadas al Sexo', count: counts.ligada_sexo },
      { id: 'factores', label: 'Factores de Color', count: counts.factores },
      { id: 'patrones', label: 'Patrones de Plumaje', count: counts.patrones },
      { id: 'estructural', label: 'Estructurales / Moñudos', count: counts.estructural },
      { id: 'otras', label: 'Otras / En Revisión', count: counts.otras },
    ].filter((c) => c.count > 0 || c.id === 'all');
  }, []);

  // Filter & Search Logic
  const filteredMutations = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return MUTATIONS_DATA.filter((mutation) => {
      // 1. Search Query
      if (q) {
        const matchesName = mutation.name.toLowerCase().includes(q);
        const matchesShort = mutation.shortDescription.toLowerCase().includes(q);
        const matchesDesc = mutation.description.toLowerCase().includes(q);
        const matchesGenetics = mutation.geneticsExplanation.toLowerCase().includes(q);
        const matchesAliases = mutation.alternativeNames?.some((a) => a.toLowerCase().includes(q));
        const matchesTags = mutation.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCategory = mutation.category.toLowerCase().includes(q);

        if (
          !matchesName &&
          !matchesShort &&
          !matchesDesc &&
          !matchesGenetics &&
          !matchesAliases &&
          !matchesTags &&
          !matchesCategory
        ) {
          return false;
        }
      }

      // 2. Category Filter
      if (filters.category !== 'all' && mutation.category !== filters.category) {
        return false;
      }

      // 3. Inheritance Filter
      if (filters.inheritance !== 'all') {
        if (mutation.inheritance !== filters.inheritance) {
          return false;
        }
      }

      // 4. Verification Filter
      if (filters.verification !== 'all') {
        if (mutation.verificationStatus !== filters.verification) {
          return false;
        }
      }

      // 5. Color Line Filter
      if (filters.colorLine !== 'all') {
        if (mutation.relatedLines && !mutation.relatedLines.includes(filters.colorLine as any)) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'name') {
        return a.name.localeCompare(b.name, 'es');
      }
      if (filters.sortBy === 'category') {
        return a.category.localeCompare(b.category, 'es');
      }
      if (filters.sortBy === 'inheritance') {
        return a.inheritance.localeCompare(b.inheritance, 'es');
      }
      return 0;
    });
  }, [searchQuery, filters]);

  // Active filter counter
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.inheritance !== 'all') count++;
    if (filters.verification !== 'all') count++;
    if (filters.colorLine !== 'all') count++;
    if (searchQuery.trim().length > 0) count++;
    return count;
  }, [filters, searchQuery]);

  const handleFilterChange = (key: keyof MutationFilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery('');
  };

  const handleSelectMutation = (mutation: MutationItem) => {
    setSelectedMutation(mutation);
    if (onSelectMutation) {
      onSelectMutation(mutation);
    }
  };

  const handleBackToCatalog = () => {
    setSelectedMutation(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a mutation is selected, show its full dedicated page
  if (selectedMutation) {
    return (
      <MutationDetail
        mutation={selectedMutation}
        onBackToCatalog={handleBackToCatalog}
        onSelectMutation={handleSelectMutation}
        onNavigateHome={onNavigateHome || handleBackToCatalog}
      />
    );
  }

  return (
    <div className="space-y-8 pb-20">
      
      {/* 1. Header & Intro */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs">
          <Feather className="w-3.5 h-3.5 text-emerald-600" />
          <span>Enciclopedia y Catálogo de Variedades</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight">
          Catálogo Oficial de Mutaciones
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Explora la enciclopedia de mutaciones y variedades del periquito australiano (<em className="italic font-serif">Melopsittacus undulatus</em>). Descubre estándares morfológicos, tipos de transmisión cromosómica, reglas de portadores y combinaciones de concurso.
        </p>
      </div>

      {/* 2. Search Box */}
      <MutationSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={MUTATIONS_DATA.length}
        filteredCount={filteredMutations.length}
      />

      {/* 3. Dynamic Filter Panel */}
      <MutationFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        categories={categoryCounts}
        activeFilterCount={activeFilterCount}
      />

      {/* 4. Results Stats & Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 text-xs text-slate-500">
        <div>
          Mostrando <strong className="text-slate-900">{filteredMutations.length}</strong> de {MUTATIONS_DATA.length} mutaciones catalogadas
          {searchQuery && (
            <span> para &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>
          )}
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={handleResetFilters}
            className="text-emerald-700 font-bold hover:underline w-fit"
          >
            Limpiar todos los filtros ({activeFilterCount})
          </button>
        )}
      </div>

      {/* 5. Mutation Grid */}
      <MutationGrid
        mutations={filteredMutations}
        onSelectMutation={handleSelectMutation}
        onResetFilters={handleResetFilters}
      />

      {/* 6. Scientific Verification Note Footer */}
      <div className="p-6 rounded-3xl bg-slate-100/80 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-600 text-white shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-bold text-slate-900">
              Rigor y Verificación Científica
            </h4>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              Cada ficha técnica incluye su estado de verificación. Aquellas variedades con literatura en estudio o nomenclaturas históricas no consolidadas se indican explícitamente como pendientes de revisión.
            </p>
          </div>
        </div>

        <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 whitespace-nowrap">
          Normativa WBO / COM
        </div>
      </div>

    </div>
  );
};
