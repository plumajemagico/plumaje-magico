import React, { useState, useMemo, useEffect } from 'react';
import { ColorItem, ColorCategory } from '../../types';
import { 
  COLORS_DATA, 
  COLOR_CATEGORIES_META, 
  COLOR_CONCEPTS_DATA,
  COLOR_PRESET_COMPARISONS
} from '../../data/colorsData';
import { ColorCard } from '../colors/ColorCard';
import { ColorCompare } from '../colors/ColorCompare';
import { ColorGallery } from '../colors/ColorGallery';
import { ColorDetailModal } from '../colors/ColorDetailModal';
import { VisualProfile } from '../colors/VisualProfile';
import { 
  Palette, 
  BookOpen, 
  Layers, 
  Image as ImageIcon, 
  Sparkles, 
  Search, 
  SlidersHorizontal, 
  Eye, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Dna, 
  Feather, 
  Filter, 
  Info,
  ChevronRight,
  RefreshCw,
  Sun,
  Moon
} from 'lucide-react';

export type ColorSubTab = 
  | 'inicio'
  | 'conceptos'
  | 'catalogo'
  | 'comparar'
  | 'galeria'
  | 'factor-oscuridad'
  | 'factores'
  | 'patrones'
  | 'identificacion';

interface Props {
  subTab?: ColorSubTab;
  onSubTabChange?: (tab: ColorSubTab) => void;
  onOpenMutation?: (mutationId: string) => void;
  onNavigateGenetics?: (subtab?: string) => void;
  selectedColorSlug?: string | null;
  onSelectColorSlug?: (slug: string | null) => void;
}

export const ColorsView: React.FC<Props> = ({
  subTab = 'inicio',
  onSubTabChange,
  onOpenMutation,
  onNavigateGenetics,
  selectedColorSlug,
  onSelectColorSlug
}) => {
  const [currentTab, setCurrentTab] = useState<ColorSubTab>(subTab);
  const [activeColorModal, setActiveColorModal] = useState<ColorItem | null>(null);
  const [activeCompareColors, setActiveCompareColors] = useState<{ colorA?: ColorItem; colorB?: ColorItem }>({});
  
  // Catalog filters
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLine, setSelectedLine] = useState<string>('all');
  const [isBreederMode, setIsBreederMode] = useState<boolean>(false);

  // Sync external prop changes
  useEffect(() => {
    if (subTab) {
      setCurrentTab(subTab);
    }
  }, [subTab]);

  // Handle selected color slug from external routing
  useEffect(() => {
    if (selectedColorSlug) {
      const match = COLORS_DATA.find((c) => c.slug === selectedColorSlug);
      if (match) {
        setActiveColorModal(match);
      }
    }
  }, [selectedColorSlug]);

  const handleTabChange = (tab: ColorSubTab) => {
    setCurrentTab(tab);
    if (onSubTabChange) {
      onSubTabChange(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectColor = (color: ColorItem) => {
    setActiveColorModal(color);
    if (onSelectColorSlug) {
      onSelectColorSlug(color.slug);
    }
  };

  const handleCloseModal = () => {
    setActiveColorModal(null);
    if (onSelectColorSlug) {
      onSelectColorSlug(null);
    }
  };

  const handleStartCompare = (color: ColorItem) => {
    setActiveCompareColors({ colorA: color });
    handleTabChange('comparar');
  };

  // Filtered Catalog List
  const filteredColors = useMemo(() => {
    return COLORS_DATA.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.baseColor.toLowerCase().includes(q) ||
        item.visualCharacteristics.some((v) => v.toLowerCase().includes(q));

      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesLine =
        selectedLine === 'all' ||
        (selectedLine === 'verde' && item.relatedLines?.includes('linea-verde')) ||
        (selectedLine === 'azul' && item.relatedLines?.includes('linea-azul'));

      return matchesQuery && matchesCat && matchesLine;
    });
  }, [searchQuery, selectedCategory, selectedLine]);

  // Sub-Navigation Tabs Config
  const navigationTabs: { id: ColorSubTab; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'inicio', label: 'Visión General', icon: Sparkles },
    { id: 'conceptos', label: 'Conceptos Clave', icon: BookOpen },
    { id: 'catalogo', label: 'Catálogo Visual', icon: Palette },
    { id: 'comparar', label: 'Comparador', icon: Layers },
    { id: 'galeria', label: 'Galería Fotográfica', icon: ImageIcon },
    { id: 'factor-oscuridad', label: 'Factor de Oscuridad', icon: Moon },
    { id: 'factores', label: 'Factores de Color', icon: SlidersHorizontal },
    { id: 'patrones', label: 'Patrones & Manto', icon: Feather },
    { id: 'identificacion', label: 'Guía de Identificación', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1B4332] pb-24">
      {/* Sub-Navigation Header */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#D8E2DC] shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#1B4332] text-white shadow-xs'
                      : 'bg-[#F8F9FA] text-[#52796F] hover:text-[#1B4332] hover:bg-[#F1F3F2]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#40916C]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* ========================================================================= */}
        {/* VIEW 1: INICIO (OVERVIEW) */}
        {/* ========================================================================= */}
        {currentTab === 'inicio' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332] text-white p-8 sm:p-12 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(116,198,157,0.2),transparent_60%)] pointer-events-none" />
              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-bold backdrop-blur-xs border border-white/10">
                  <Palette className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Clasificación Visual, Variedades y Estándar Morfológico</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                  Colores, Variedades y Clasificación Visual
                </h1>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl font-medium">
                  Explora la fascinante diversidad cromática del periquito australiano (<em className="italic">Melopsittacus undulatus</em>). Aprende a observar con rigor cada zona anatómica, comprender la diferencia entre fenotipo y genotipo, y diferenciar variedades similares.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => handleTabChange('catalogo')}
                    className="px-5 py-3 rounded-2xl bg-white text-[#1B4332] text-xs font-extrabold hover:bg-emerald-50 transition-all shadow-md flex items-center gap-2"
                  >
                    <Palette className="w-4 h-4 text-[#2D6A4F]" />
                    <span>Explorar Catálogo Completo</span>
                  </button>
                  <button
                    onClick={() => handleTabChange('comparar')}
                    className="px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white text-xs font-extrabold hover:bg-white/20 transition-all flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-emerald-300" />
                    <span>Comparador Visual</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Scientific Caution Banner */}
            <div className="p-6 rounded-3xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-amber-900">
                  Principio Fundamental: La Identificación Visual NO es un Diagnóstico Genético Definitivo
                </h4>
                <p className="text-xs text-amber-800/90 leading-relaxed">
                  El aspecto exterior (fenotipo) de un periquito refleja la expresión de sus genes visibles, pero no revela genes recesivos ocultos (portaciones) ni factores modificadores solapados. Dos aves de apariencia idéntica pueden tener genotipos totalmente diferentes.
                </p>
              </div>
            </div>

            {/* Visual Categories Grid */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                    Clasificación Sistemática
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
                    Grandes Familias y Series Cromáticas
                  </h3>
                </div>
                <button
                  onClick={() => handleTabChange('catalogo')}
                  className="text-xs font-bold text-[#2D6A4F] hover:underline flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Ver todas las variedades ({COLORS_DATA.length})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {COLOR_CATEGORIES_META.filter((c) => c.id !== 'all').map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      handleTabChange('catalogo');
                    }}
                    className={`p-5 rounded-3xl bg-white border ${cat.borderColor} shadow-2xs hover:shadow-md hover:border-[#40916C] transition-all cursor-pointer group flex flex-col justify-between space-y-3`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{cat.emoji}</span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold ${cat.colorClass} border ${cat.borderColor}`}>
                        {COLORS_DATA.filter((c) => c.category === cat.id).length} variedades
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors">
                        {cat.label}
                      </h4>
                      <p className="text-xs text-[#52796F] line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#D8E2DC] flex items-center justify-between text-xs font-bold text-[#2D6A4F]">
                      <span>Explorar variedad</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlighted Color Cards */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                    Ejemplares Emblemáticos
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
                    Colores y Variedades Destacadas
                  </h3>
                </div>
                <button
                  onClick={() => handleTabChange('catalogo')}
                  className="text-xs font-bold text-[#2D6A4F] hover:underline"
                >
                  Explorar todo el catálogo →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {COLORS_DATA.slice(0, 6).map((color) => (
                  <ColorCard
                    key={color.id}
                    color={color}
                    onSelect={handleSelectColor}
                    onCompare={handleStartCompare}
                    onNavigateGenetics={onNavigateGenetics}
                    isBreederMode={isBreederMode}
                  />
                ))}
              </div>
            </div>

            {/* Quick Comparator Banner Preview */}
            <div className="p-8 rounded-3xl bg-[#1B4332] text-white shadow-lg space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Diferenciación Anatómica</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    ¿Tienes dudas entre dos colores que se parecen?
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    Utiliza nuestro comparador especializado para contrastar Azul Cobalto vs Violeta Visual, Verde Oliva vs Verde Gris, Lutino vs Perlado Amarillo, y más.
                  </p>
                </div>
                <button
                  onClick={() => handleTabChange('comparar')}
                  className="px-6 py-3.5 rounded-2xl bg-white text-[#1B4332] text-xs font-extrabold hover:bg-emerald-50 transition-all shrink-0 shadow-md flex items-center justify-center gap-2"
                >
                  <Layers className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Abrir Comparador Visual</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: CONCEPTOS CLAVE */}
        {/* ========================================================================= */}
        {currentTab === 'conceptos' && (
          <div className="space-y-10">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                Marco Conceptual Ornitológico
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1B4332] font-display">
                Conceptos Fundamentales de Color y Morfología
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] max-w-3xl leading-relaxed">
                Para identificar y describir adecuadamente a un periquito australiano, es indispensable dominar con precisión la distinción entre Color, Mutación, Factor, Variedad, Fenotipo y Genotipo.
              </p>
            </div>

            {/* Concepts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COLOR_CONCEPTS_DATA.map((concept) => (
                <div
                  key={concept.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#D8E2DC] pb-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#40916C]">
                          {concept.question}
                        </span>
                        <h3 className="text-xl font-bold text-[#1B4332] font-display">
                          {concept.term}
                        </h3>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${concept.badgeColor}`}>
                        Concepto Clave
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1B4332] font-bold leading-relaxed">
                      {concept.summary}
                    </p>

                    <p className="text-xs text-[#52796F] leading-relaxed">
                      {concept.detailedExplanation}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-1 text-xs">
                      <span className="font-bold text-[#2D6A4F] block">Ejemplo Ilustrativo:</span>
                      <p className="text-[#52796F] font-medium leading-relaxed">
                        {concept.example}
                      </p>
                    </div>
                  </div>

                  {concept.ornithologicalContext && (
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-xs flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>Contexto Ornitológico Oficial:</strong> {concept.ornithologicalContext}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Relationship Map Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1B4332] text-white space-y-4">
              <h3 className="text-xl font-bold font-display text-emerald-200">
                La Ecuación del Color en el Periquito
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1.5">
                  <div className="font-bold text-emerald-300">1. Serie Base (Pigmento)</div>
                  <p className="text-emerald-100/90 leading-relaxed">
                    Verde (con psitacina amarilla) o Azul (sin psitacina).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1.5">
                  <div className="font-bold text-emerald-300">2. Factores de Oscuridad</div>
                  <p className="text-emerald-100/90 leading-relaxed">
                    0D (Césped/Cielo), 1D (Laurel/Cobalto), 2D (Oliva/Malva).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1.5">
                  <div className="font-bold text-emerald-300">3. Patrones & Factores Adicionales</div>
                  <p className="text-emerald-100/90 leading-relaxed">
                    Opalino, Perlado, Violeta, Gris, Píos, Canela, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: CATÁLOGO VISUAL */}
        {/* ========================================================================= */}
        {currentTab === 'catalogo' && (
          <div className="space-y-8">
            {/* Catalog Control Bar */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                    Explorador Completo
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
                    Catálogo de Colores y Variedades
                  </h2>
                  <p className="text-xs sm:text-sm text-[#52796F] mt-0.5">
                    Mostrando {filteredColors.length} de {COLORS_DATA.length} variedades documentadas
                  </p>
                </div>

                {/* Beginner vs Breeder Mode */}
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <div className="p-1 rounded-xl bg-[#F1F3F2] border border-[#D8E2DC] flex items-center text-xs font-bold">
                    <button
                      onClick={() => setIsBreederMode(false)}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        !isBreederMode
                          ? 'bg-white text-[#1B4332] shadow-xs'
                          : 'text-[#52796F] hover:text-[#1B4332]'
                      }`}
                    >
                      Principiante
                    </button>
                    <button
                      onClick={() => setIsBreederMode(true)}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        isBreederMode
                          ? 'bg-[#1B4332] text-white shadow-xs'
                          : 'text-[#52796F] hover:text-[#1B4332]'
                      }`}
                    >
                      Criador (Técnico)
                    </button>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#D8E2DC]">
                {/* Search input */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#52796F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por color, variedad o rasgo..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs font-medium text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  />
                </div>

                {/* Category select */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs font-bold text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  >
                    <option value="all">Todas las Categorías</option>
                    {COLOR_CATEGORIES_META.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.emoji} {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Line select */}
                <div>
                  <select
                    value={selectedLine}
                    onChange={(e) => setSelectedLine(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs font-bold text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
                  >
                    <option value="all">Todas las Líneas de Pigmento</option>
                    <option value="verde">Línea Verde (Con Psitacina)</option>
                    <option value="azul">Línea Azul (Sin Psitacina)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid of Color Cards */}
            {filteredColors.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-white border border-[#D8E2DC] space-y-3">
                <Palette className="w-12 h-12 text-[#52796F]/40 mx-auto" />
                <h4 className="text-base font-bold text-[#1B4332]">No se encontraron variedades</h4>
                <p className="text-xs text-[#52796F]">
                  Intenta cambiar o limpiar los filtros seleccionados.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedLine('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#1B4332] text-white text-xs font-bold hover:bg-[#2D6A4F] transition-all"
                >
                  Limpiar Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredColors.map((color) => (
                  <ColorCard
                    key={color.id}
                    color={color}
                    onSelect={handleSelectColor}
                    onCompare={handleStartCompare}
                    onNavigateGenetics={onNavigateGenetics}
                    isBreederMode={isBreederMode}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 4: COMPARADOR VISUAL */}
        {/* ========================================================================= */}
        {currentTab === 'comparar' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                Herramienta de Diagnóstico Morfológico
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
                Comparador Anatómico de Colores y Variedades
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] max-w-3xl leading-relaxed">
                Compara dos colores lado a lado para identificar sus similitudes, contrastes clave en máscara, gulares, manto, cola y patas según los estándares internacionales.
              </p>
            </div>

            <ColorCompare
              initialColorA={activeCompareColors.colorA}
              initialColorB={activeCompareColors.colorB}
              onSelectColor={handleSelectColor}
              onNavigateGenetics={onNavigateGenetics}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 5: GALERÍA FOTOGRÁFICA */}
        {/* ========================================================================= */}
        {currentTab === 'galeria' && (
          <ColorGallery onSelectColor={handleSelectColor} />
        )}

        {/* ========================================================================= */}
        {/* VIEW 6: FACTOR DE OSCURIDAD */}
        {/* ========================================================================= */}
        {currentTab === 'factor-oscuridad' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                Gradación Óptica y Estructural
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1B4332] font-display">
                El Factor de Oscuridad (Dark Factor - D)
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] max-w-3xl leading-relaxed">
                El factor de oscuridad es un gen de dominancia incompleta que aumenta la densidad de la zona esponjosa de las bárbulas de la pluma, intensificando la absorción lumínica y oscureciendo el color corporal tanto en la serie verde como en la serie azul.
              </p>
            </div>

            {/* Dark Factor in Green and Blue Series Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Green Series Trio */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
                <div className="flex items-center gap-3 border-b border-[#D8E2DC] pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    🟢
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B4332] font-display">
                      Gradación en la Serie Verde
                    </h3>
                    <p className="text-xs text-[#52796F]">
                      Psitacina amarilla presente en la corteza de la pluma
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* 0D */}
                  <div
                    onClick={() => {
                      const c = COLORS_DATA.find((item) => item.slug === 'verde-cesped');
                      if (c) handleSelectColor(c);
                    }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#5BA829] border border-white shadow-xs shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#1B4332]">Verde Césped (0D / Sin Factor)</div>
                        <div className="text-[11px] text-[#52796F]">Tonalidad brillante ancestral silvestre</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D6A4F]">Ver Ficha →</span>
                  </div>

                  {/* 1D */}
                  <div
                    onClick={() => {
                      const c = COLORS_DATA.find((item) => item.slug === 'verde-laurel');
                      if (c) handleSelectColor(c);
                    }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#3F7A20] border border-white shadow-xs shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#1B4332]">Verde Laurel (1D / Factor Simple)</div>
                        <div className="text-[11px] text-[#52796F]">Verde intermedio más oscuro y profundo</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D6A4F]">Ver Ficha →</span>
                  </div>

                  {/* 2D */}
                  <div
                    onClick={() => {
                      const c = COLORS_DATA.find((item) => item.slug === 'verde-oliva');
                      if (c) handleSelectColor(c);
                    }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] hover:border-emerald-500 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#4B5320] border border-white shadow-xs shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#1B4332]">Verde Oliva (2D / Factor Doble)</div>
                        <div className="text-[11px] text-[#52796F]">Tono verde oliva oscuro terroso</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D6A4F]">Ver Ficha →</span>
                  </div>
                </div>
              </div>

              {/* Blue Series Trio */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
                <div className="flex items-center gap-3 border-b border-[#D8E2DC] pb-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                    🔵
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B4332] font-display">
                      Gradación en la Serie Azul
                    </h3>
                    <p className="text-xs text-[#52796F]">
                      Ausencia total de psitacina amarilla en la pluma
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* 0D */}
                  <div
                    onClick={() => {
                      const c = COLORS_DATA.find((item) => item.slug === 'azul-cielo');
                      if (c) handleSelectColor(c);
                    }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] hover:border-sky-500 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#64B5F6] border border-white shadow-xs shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#1B4332]">Azul Cielo (0D / Sin Factor)</div>
                        <div className="text-[11px] text-[#52796F]">Azul celeste puro y luminoso</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D6A4F]">Ver Ficha →</span>
                  </div>

                  {/* 1D */}
                  <div
                    onClick={() => {
                      const c = COLORS_DATA.find((item) => item.slug === 'azul-cobalto');
                      if (c) handleSelectColor(c);
                    }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] hover:border-sky-500 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#1E88E5] border border-white shadow-xs shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#1B4332]">Azul Cobalto (1D / Factor Simple)</div>
                        <div className="text-[11px] text-[#52796F]">Azul marino intenso y saturado</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D6A4F]">Ver Ficha →</span>
                  </div>

                  {/* 2D */}
                  <div
                    onClick={() => {
                      const c = COLORS_DATA.find((item) => item.slug === 'azul-malva');
                      if (c) handleSelectColor(c);
                    }}
                    className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] hover:border-sky-500 transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#4A5568] border border-white shadow-xs shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-[#1B4332]">Azul Malva (2D / Factor Doble)</div>
                        <div className="text-[11px] text-[#52796F]">Azul grisáceo oscuro plomizo</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D6A4F]">Ver Ficha →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Link to Genetics */}
            <div className="p-6 rounded-3xl bg-[#1B4332] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white font-display">
                  ¿Quieres comprender cómo se heredan estos factores de oscuridad?
                </h4>
                <p className="text-xs text-emerald-100/90">
                  Consulta el módulo de Genética y Herencia para ver tablas de cruces y leyes de herencia cuantitativa.
                </p>
              </div>
              <button
                onClick={() => {
                  if (onNavigateGenetics) onNavigateGenetics('factores-color');
                }}
                className="px-4 py-2.5 rounded-xl bg-white text-[#1B4332] text-xs font-bold hover:bg-emerald-50 transition-all shrink-0 shadow-sm flex items-center gap-2"
              >
                <Dna className="w-4 h-4 text-[#2D6A4F]" />
                <span>Ir a Genética del Factor de Oscuridad</span>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 7: FACTORES DE COLOR */}
        {/* ========================================================================= */}
        {currentTab === 'factores' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                Modificadores Cromáticos
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1B4332] font-display">
                Factores Modificadores: Violeta, Gris y Caras Amarillas
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] max-w-3xl leading-relaxed">
                Además del factor de oscuridad, existen factores autosómicos dominantes o semidominantes que alteran drásticamente la manifestación visual de la pluma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Violet Factor */}
              <div className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🟣</span>
                    <h3 className="text-lg font-bold text-[#1B4332] font-display">Factor Violeta</h3>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    Intensifica y refracta la luz hacia el espectro púrpura. Su máxima expresión visual se produce cuando coexiste con 1 factor de oscuridad sobre serie azul (Cobalto + Violeta = <strong>Violeta Visual</strong>).
                  </p>
                </div>
                <button
                  onClick={() => {
                    const c = COLORS_DATA.find((item) => item.slug === 'violeta-visual');
                    if (c) handleSelectColor(c);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-purple-50 text-purple-900 border border-purple-200 text-xs font-bold hover:bg-purple-100 transition-colors"
                >
                  Ver Ficha Violeta Visual →
                </button>
              </div>

              {/* Grey Factor */}
              <div className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚫</span>
                    <h3 className="text-lg font-bold text-[#1B4332] font-display">Factor Gris Dominante</h3>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    Transforma el color corporal en gris sólido uniforme. Su rasgo diagnóstico inequívoco son las <strong>manchas gulares gris azuladas mate</strong> y timoneras negras.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const c = COLORS_DATA.find((item) => item.slug === 'gris-dominante');
                    if (c) handleSelectColor(c);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Ver Ficha Gris Dominante →
                </button>
              </div>

              {/* Yellowface */}
              <div className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🟡</span>
                    <h3 className="text-lg font-bold text-[#1B4332] font-display">Cara Amarilla & Dorada</h3>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    Restaura parcialmente la psitacina en aves de serie azul. La Tipo I mantiene el cuerpo azul, la Tipo II y Dorada difunden el amarillo sobre el cuerpo generando tonos turquesas y aguamarinas.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const c = COLORS_DATA.find((item) => item.slug === 'cara-amarilla-t1');
                    if (c) handleSelectColor(c);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold hover:bg-amber-100 transition-colors"
                >
                  Ver Ficha Cara Amarilla →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 8: PATRONES & MANTO */}
        {/* ========================================================================= */}
        {currentTab === 'patrones' && (
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                Distribución de Eumelanina
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1B4332] font-display">
                Patrones de Pluma, Manto y Diluciones
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] max-w-3xl leading-relaxed">
                Los patrones modifican la posición, concentración o pigmentación de las ondulaciones alares y el manto. Conoce sus señas diagnósticas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COLORS_DATA.filter((c) => c.category === 'pattern').map((color) => (
                <ColorCard
                  key={color.id}
                  color={color}
                  onSelect={handleSelectColor}
                  onCompare={handleStartCompare}
                  onNavigateGenetics={onNavigateGenetics}
                  isBreederMode={isBreederMode}
                />
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 9: GUÍA DE IDENTIFICACIÓN */}
        {/* ========================================================================= */}
        {currentTab === 'identificacion' && (
          <div className="space-y-10">
            <div className="p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
                Metodología de Observación
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1B4332] font-display">
                El Protocolo de Identificación Visual en 7 Pasos
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] max-w-3xl leading-relaxed">
                Para identificar visualmente a un periquito sin incurrir en confusiones habituales, sigue esta secuencia metódica de examen anatómico.
              </p>
            </div>

            {/* 7 Steps */}
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: 'Determinar la Serie Base (Verde vs Azul)',
                  desc: 'Observa la máscara y frente: ¿Es amarilla o blanca pura? Si es blanca pura, pertenece a la serie azul. Si es amarilla, es serie verde o porta factor cara amarilla.',
                  check: 'Máscara y frente'
                },
                {
                  step: 2,
                  title: 'Evaluar el Factor de Oscuridad',
                  desc: 'Observa la profundidad del color en pecho y rabadilla: ¿Césped/Cielo (0D), Laurel/Cobalto (1D) u Oliva/Malva (2D)?',
                  check: 'Pecho, vientre y rabadilla'
                },
                {
                  step: 3,
                  title: 'Examinar las Manchas Gulares (Clave Diagnóstica)',
                  desc: '¿Son violeta intenso, gris plomizo mate (Factor Gris) o blanco plateado (Perlado DF, Pío)? El color de las gulares descarta factores de forma rápida.',
                  check: 'Gulares'
                },
                {
                  step: 4,
                  title: 'Analizar las Ondulaciones y el Manto',
                  desc: '¿Son negras nítidas (Clásico), marrón canela (Canela), grises (Alas Grises) o presentan "V" dorsal limpia (Opalino)?',
                  check: 'Cabeza, nuca y manto'
                },
                {
                  step: 5,
                  title: 'Comprobar las Plumas Remeras (Alas)',
                  desc: '¿El borde de las plumas es invertido con reborde oscuro (Perlado SF), blanco/amarillo limpio (Alas Claras) o descolorido (Pío)?',
                  check: 'Remeras primarias y secundarias'
                },
                {
                  step: 6,
                  title: 'Observar los Ojos e Iris',
                  desc: '¿Pupila negra con iris blanco (adulto normal), ojo rojo rubí con iris blanco (Ino adulto) o pupila ciruela oscura sin iris blanco (Pío Recesivo adulto)?',
                  check: 'Ojos e iris'
                },
                {
                  step: 7,
                  title: 'Examinar Patas, Cera y Timoneras',
                  desc: 'Comprueba el color de las patas (rosadas vs gris azuladas) y la cera del macho adulto (azul intenso vs rosa carnoso en píos recesivos e inos).',
                  check: 'Patas y cera'
                }
              ].map((s) => (
                <div
                  key={s.step}
                  className="p-5 sm:p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs hover:border-[#40916C] transition-all flex flex-col sm:flex-row items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-extrabold flex items-center justify-center shrink-0 font-mono">
                    {s.step}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-base font-bold text-[#1B4332]">{s.title}</h4>
                      <span className="text-[11px] font-bold text-[#40916C] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 self-start sm:self-auto">
                        Zona: {s.check}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#52796F] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Caution Final Warning */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-950 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Recordatorio Ético Ornitológico</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Ninguna herramienta visual sustituye el conocimiento del árbol genealógico del ave. Si estás criando periquitos con fines de selección genética o conservación de variedades, consulta siempre los registros parentales y verifica la pureza de las líneas antes del apareamiento.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {activeColorModal && (
        <ColorDetailModal
          color={activeColorModal}
          onClose={handleCloseModal}
          onOpenMutation={onOpenMutation}
          onNavigateGenetics={onNavigateGenetics}
          onCompareWith={handleStartCompare}
        />
      )}
    </div>
  );
};
