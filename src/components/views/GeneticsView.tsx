import React, { useState } from 'react';
import { COLOR_LINES_DATA } from '../../data/colorLines';
import { GENETIC_FACTORS_DATA } from '../../data/factors';
import { GENETICS_GUIDE_DATA, BasicConceptItem } from '../../data/geneticsGuide';
import { MUTATIONS_DATA } from '../../data/mutations';
import {
  ALLELES_DATA,
  INHERITANCE_RULES_DATA,
  COMBINATIONS_DATA,
  GENETICS_GLOSSARY_DATA,
  PUNNETT_DEMOS_DATA,
  NOMENCLATURA_GUIDE,
  PROBABILITY_REALITY_GUIDE
} from '../../data/geneticsData';
import { VerificationBadge } from '../VerificationBadge';
import { MutationItem, InheritanceType, Allele, Combination, GeneticsTerm } from '../../types';
import { PunnettSquare } from '../genetics/PunnettSquare';
import { AlleleCard } from '../genetics/AlleleCard';
import { InheritanceFlow } from '../genetics/InheritanceFlow';
import { GeneticsCompare } from '../genetics/GeneticsCompare';
import { InheritanceBadge } from '../genetics/InheritanceBadge';
import { GeneticsTermCard } from '../genetics/GeneticsTermCard';
import { GenotypePhenotypeCard } from '../genetics/GenotypePhenotypeCard';
import {
  Dna,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Info,
  HelpCircle,
  ShieldCheck,
  Split,
  ChevronRight,
  Check,
  X,
  AlertCircle,
  Binary,
  Feather,
  Scale,
  Search,
  Grid,
  Percent,
  Tag,
  Shuffle,
  Eye,
  Sliders,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface GeneticsViewProps {
  onNavigateTab?: (tab: string, subSection?: string) => void;
  onSelectMutation?: (mutation: MutationItem) => void;
  initialSubTab?: string;
}

export const GeneticsView: React.FC<GeneticsViewProps> = ({
  onNavigateTab,
  onSelectMutation,
  initialSubTab = 'inicio'
}) => {
  const [levelMode, setLevelMode] = useState<'principiante' | 'criador'>('principiante');
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab);

  // Sub-tab specific states
  const [selectedConceptId, setSelectedConceptId] = useState<string>('gen');
  const [selectedInheritanceRuleId, setSelectedInheritanceRuleId] = useState<string>('rule_autosomal_recessive');
  const [selectedFactorTab, setSelectedFactorTab] = useState<string>('factor-oscuridad');
  const [selectedMutationFilter, setSelectedMutationFilter] = useState<string>('all');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [glossaryCategory, setGlossaryCategory] = useState<string>('all');
  const [alleleSearch, setAlleleSearch] = useState<string>('');
  const [combinationFilter, setCombinationFilter] = useState<string>('all');

  // Helpers
  const activeFactor = GENETIC_FACTORS_DATA.find((f) => f.id === selectedFactorTab) || GENETIC_FACTORS_DATA[0];
  const activeConcept = GENETICS_GUIDE_DATA.basicConcepts.find((c) => c.id === selectedConceptId) || GENETICS_GUIDE_DATA.basicConcepts[0];
  const activeInheritanceRule = INHERITANCE_RULES_DATA.find((r) => r.id === selectedInheritanceRuleId) || INHERITANCE_RULES_DATA[0];

  // Filtered mutations
  const filteredMutations = MUTATIONS_DATA.filter((m) => {
    if (selectedMutationFilter === 'all') return true;
    if (selectedMutationFilter === 'dominante') return m.category === 'dominante' || m.inheritance === 'dominant' || m.inheritance === 'incomplete_dominant';
    if (selectedMutationFilter === 'recesiva') return m.category === 'recesiva' || m.inheritance === 'recessive';
    if (selectedMutationFilter === 'ligada_sexo') return m.category === 'ligada_sexo' || m.inheritance === 'sex_linked';
    if (selectedMutationFilter === 'factores') return m.category === 'combinada' || m.category === 'estructural';
    return true;
  });

  // Filtered glossary
  const filteredGlossary = GENETICS_GLOSSARY_DATA.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      term.shortDefinition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      term.longDefinition.toLowerCase().includes(glossarySearch.toLowerCase());
    const matchesCategory = glossaryCategory === 'all' || term.category === glossaryCategory;
    return matchesSearch && matchesCategory;
  });

  // Filtered alleles
  const filteredAlleles = ALLELES_DATA.filter((al) => {
    return (
      al.name.toLowerCase().includes(alleleSearch.toLowerCase()) ||
      al.symbol.toLowerCase().includes(alleleSearch.toLowerCase()) ||
      al.locus.toLowerCase().includes(alleleSearch.toLowerCase())
    );
  });

  const subTabs = [
    { id: 'inicio', label: 'Visión General', icon: Dna },
    { id: 'conceptos', label: 'Conceptos Básicos', icon: BookOpen },
    { id: 'genotipo-fenotipo', label: 'Genotipo vs Fenotipo', icon: Eye },
    { id: 'dominante-recesivo', label: 'Dominante y Recesivo', icon: Split },
    { id: 'ligada-al-sexo', label: 'Ligada al Sexo (ZZ/ZW)', icon: Sparkles },
    { id: 'autosomica', label: 'Herencia Autosómica', icon: Layers },
    { id: 'factor-oscuridad', label: 'Factor de Oscuridad', icon: Binary },
    { id: 'factores-color', label: 'Factores de Color', icon: Feather },
    { id: 'mutaciones', label: 'Catálogo Genético', icon: Tag },
    { id: 'portadores', label: 'Matriz de Portadores', icon: Shuffle },
    { id: 'combinaciones', label: 'Combinaciones Clásicas', icon: Sparkles },
    { id: 'cruces', label: 'Cruces y Punnett', icon: Grid },
    { id: 'probabilidades', label: 'Probabilidades vs Realidad', icon: Percent },
    { id: 'nomenclatura', label: 'Nomenclatura WBO', icon: Tag },
    { id: 'glosario', label: 'Glosario Genético', icon: BookOpen },
    { id: 'comparador', label: 'Comparador', icon: Scale },
  ];

  return (
    <div className="space-y-8 pb-20">
      
      {/* 1. HEADER & DUAL LEVEL SWITCH */}
      <section className="p-6 sm:p-10 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#D8E2DC]/60">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC]">
              <Dna className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Centro de Genética y Herencia • Plumaje Mágico</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] font-display tracking-tight">
              Genética y Herencia del Periquito Australiano
            </h1>
            <p className="text-[#52796F] text-sm sm:text-base max-w-3xl leading-relaxed">
              Biblioteca educativa y científica sobre las leyes de transmisión biológica de <em>Melopsittacus undulatus</em>: bases moleculares, alelos, factores de oscuridad, herencia ligada al sexo y combinaciones cromosómicas.
            </p>
          </div>

          {/* Dual Level Mode (Principiante vs Criador) */}
          <div className="bg-[#F1F3F2] p-1.5 rounded-2xl flex items-center gap-1 border border-[#D8E2DC] self-start lg:self-auto shrink-0 shadow-inner">
            <button
              id="mode-btn-principiante"
              onClick={() => setLevelMode('principiante')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                levelMode === 'principiante'
                  ? 'bg-[#1B4332] text-white shadow-xs'
                  : 'text-[#52796F] hover:text-[#1B4332]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Principiante</span>
            </button>
            <button
              id="mode-btn-criador"
              onClick={() => setLevelMode('criador')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                levelMode === 'criador'
                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                  : 'text-[#52796F] hover:text-[#1B4332]'
              }`}
            >
              <Binary className="w-4 h-4" />
              <span>Criador / Avanzado</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs (Horizontal Scrollable) */}
        <div className="overflow-x-auto pb-1 -mx-2 px-2 scrollbar-thin">
          <div className="flex items-center gap-1.5 min-w-max">
            {subTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border ${
                    isActive
                      ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xs'
                      : 'bg-[#F8F9FA] text-[#52796F] border-[#D8E2DC] hover:bg-emerald-50 hover:text-[#1B4332]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-300' : 'text-[#52796F]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SUB-VIEW 1: INICIO / VISIÓN GENERAL */}
      {/* ========================================================================= */}
      {activeSubTab === 'inicio' && (
        <div className="space-y-8">
          
          {/* Hero Quick Tour Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div
              onClick={() => setActiveSubTab('conceptos')}
              className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs hover:shadow-md transition-all cursor-pointer group space-y-3"
            >
              <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 w-fit group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-emerald-700 flex items-center justify-between">
                <span>Fundamentos y Conceptos</span>
                <ChevronRight className="w-4 h-4 text-[#52796F] group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#52796F] leading-relaxed">
                Descubre qué es un gen, un alelo, un locus y la diferencia crucial entre genotipo interno y fenotipo visual.
              </p>
            </div>

            <div
              onClick={() => setActiveSubTab('ligada-al-sexo')}
              className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs hover:shadow-md transition-all cursor-pointer group space-y-3"
            >
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-800 border border-purple-200 w-fit group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-purple-700 flex items-center justify-between">
                <span>Herencia Ligada al Sexo</span>
                <ChevronRight className="w-4 h-4 text-[#52796F] group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#52796F] leading-relaxed">
                Comprende el sistema cromosómico ZZ y ZW: por qué las hembras nunca portan mutaciones ligadas al sexo y el secreto del autosexado.
              </p>
            </div>

            <div
              onClick={() => setActiveSubTab('cruces')}
              className="p-6 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs hover:shadow-md transition-all cursor-pointer group space-y-3"
            >
              <div className="p-3 rounded-2xl bg-teal-50 text-teal-800 border border-teal-200 w-fit group-hover:scale-105 transition-transform">
                <Grid className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-teal-700 flex items-center justify-between">
                <span>Cuadros de Punnett y Cruces</span>
                <ChevronRight className="w-4 h-4 text-[#52796F] group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#52796F] leading-relaxed">
                Visualiza la segregación de gametos y las probabilidades estadísticas teóricas de cada emparejamiento.
              </p>
            </div>

          </div>

          {/* Interactive Punnett Preview */}
          <PunnettSquare initialDemoId="punnett_blue_carriers" />

          {/* Biological Color Production Overview */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Feather className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#1B4332] font-display">
                  La Ecuación del Color en el Periquito
                </h3>
                <p className="text-xs text-[#52796F]">
                  Cómo la luz física y los pigmentos químicos interactúan en las plumas
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="font-bold text-amber-900 text-sm">1. Psitacina (Lipocromo Amarillo)</div>
                <p className="text-amber-800 leading-relaxed">
                  Pigmento soluble producido por el periquito en la corteza exterior de la pluma. Si está presente, tiñe de amarillo; si muta a azul, desaparece por completo.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                <div className="font-bold text-blue-900 text-sm">2. Efecto Físico Tyndall / Rayleigh (Azul)</div>
                <p className="text-blue-800 leading-relaxed">
                  Color estructural óptico. La queratina y la zona esponjosa de la pluma dispersan las longitudes de onda cortas (azules), absorbiendo el resto gracias a la melanina basal.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="font-bold text-emerald-900 text-sm">3. Resultado: Amarillo + Azul = Verde</div>
                <p className="text-emerald-800 leading-relaxed">
                  El color verde del periquito silvestre es la combinación perfecta del pigmento amarillo químico superpuesto sobre el reflejo estructural azul.
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 2: CONCEPTOS BÁSICOS */}
      {/* ========================================================================= */}
      {activeSubTab === 'conceptos' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Fundamentos Genéticos
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                Conceptos Esenciales de Genética Aviar
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                Haz clic en cada término para consultar su definición, analogía sencilla y aplicación directa en el periquito.
              </p>
            </div>

            {/* Concept Pills Selector */}
            <div className="flex flex-wrap gap-2">
              {GENETICS_GUIDE_DATA.basicConcepts.map((concept) => (
                <button
                  key={concept.id}
                  onClick={() => setSelectedConceptId(concept.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                    selectedConceptId === concept.id
                      ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xs'
                      : 'bg-[#F8F9FA] text-[#52796F] border-[#D8E2DC] hover:bg-emerald-50 hover:text-[#1B4332]'
                  }`}
                >
                  {concept.name}
                </button>
              ))}
            </div>

            {/* Active Concept Details Card */}
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1B4332] font-display">
                  {activeConcept.name}
                </h3>
                <span className="text-xs font-bold text-[#2D6A4F] bg-white px-3 py-1 rounded-full border border-[#D8E2DC]">
                  {activeConcept.scientificTerm || 'Concepto Fundamental'}
                </span>
              </div>

              <p className="text-sm text-[#1B4332] leading-relaxed font-medium">
                {levelMode === 'principiante'
                  ? activeConcept.beginnerExplanation
                  : activeConcept.expertExplanation}
              </p>

              {/* Beginner vs Advanced Accordion / Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Analogía Explicativa:</span>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    "{activeConcept.beginnerAnalogy}"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
                    <Dna className="w-3.5 h-3.5" />
                    <span>Ejemplos en Periquitos:</span>
                  </div>
                  <ul className="text-xs text-[#1B4332] font-medium space-y-0.5">
                    {activeConcept.examplesInBudgies.map((ex, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Alleles Dataset Explorer */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#1B4332] font-display">
                  Catálogo de Alelos Científicos (Loci de Melopsittacus)
                </h3>
                <p className="text-xs text-[#52796F]">
                  Símbolos estandarizados WBO y comportamiento alélico verificado
                </p>
              </div>

              {/* Search allele */}
              <div className="relative max-w-xs w-full">
                <Search className="w-4 h-4 text-[#52796F] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar alelo (ej. B+, Z^op, D)..."
                  value={alleleSearch}
                  onChange={(e) => setAlleleSearch(e.target.value)}
                  className="w-full bg-[#F8F9FA] text-xs font-semibold text-[#1B4332] pl-9 pr-3 py-2 rounded-xl border border-[#D8E2DC] focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAlleles.map((allele) => (
                <AlleleCard key={allele.id} allele={allele} />
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 3: GENOTIPO VS FENOTIPO */}
      {/* ========================================================================= */}
      {activeSubTab === 'genotipo-fenotipo' && (
        <div className="space-y-8">
          <GenotypePhenotypeCard />

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
            <h3 className="text-xl font-bold text-[#1B4332] font-display">
              ¿Por qué es fundamental distinguir Genotipo de Fenotipo?
            </h3>
            <p className="text-xs sm:text-sm text-[#52796F] leading-relaxed">
              En avicultura deportiva, dos periquitos visualmente indistinguibles (mismo fenotipo) pueden tener genotipos completamente distintos. Un macho verde puede ser portador de azul y de opalino en su genoma, transmitiendo estas mutaciones al 50% de sus descendientes, mientras que un verde puro jamás dará un hijo azul salvo que su pareja lo aporte.
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 4: DOMINANTE Y RECESIVO */}
      {/* ========================================================================= */}
      {activeSubTab === 'dominante-recesivo' && (
        <div className="space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Dominant Summary Card */}
            <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#1B4332]">Herencia Dominante</h3>
                  <p className="text-xs text-[#2D6A4F]">Con 1 solo alelo (SF) se manifiesta al 100%</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-[#1B4332]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>No existen portadores:</strong> si el periquito tiene el gen, se ve siempre en sus plumas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span>Al menos uno de los dos padres debe ser visualmente dominante para que nazcan hijos dominantes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 font-bold">•</span>
                  <span><strong>Ejemplos:</strong> Factor Gris, Pío Dominante Australiano, Pío Continental.</span>
                </li>
              </ul>
            </div>

            {/* Recessive Summary Card */}
            <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-200 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-100 text-blue-800 border border-blue-300">
                  <Split className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-blue-950">Herencia Recesiva</h3>
                  <p className="text-xs text-blue-800">Requiere 2 copias (homocigosis) para verse</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-blue-950">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">•</span>
                  <span><strong>Existen portadores no visuales (Splits):</strong> un ave puede portar el gen sin mostrarlo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>Para que nazca un polluelo visual, <strong>ambos progenitores</strong> deben aportar el gen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 font-bold">•</span>
                  <span><strong>Ejemplos:</strong> Mutación Azul, Pío Recesivo (Danés), Fallow, Diluido, Alas Claras.</span>
                </li>
              </ul>
            </div>

          </div>

          <PunnettSquare initialDemoId="punnett_blue_carriers" />

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 5: LIGADA AL SEXO (ZZ / ZW) */}
      {/* ========================================================================= */}
      {activeSubTab === 'ligada-al-sexo' && (
        <div className="space-y-8">
          <InheritanceFlow />
          <PunnettSquare initialDemoId="punnett_sex_linked_male_carrier" />
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 6: HERENCIA AUTOSÓMICA */}
      {/* ========================================================================= */}
      {activeSubTab === 'autosomica' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Leyes de Transmisión
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                Reglas de Herencia Autosómica en Detalle
              </h2>
            </div>

            {/* Rules Selector */}
            <div className="flex flex-wrap gap-2">
              {INHERITANCE_RULES_DATA.map((rule) => (
                <button
                  key={rule.id}
                  onClick={() => setSelectedInheritanceRuleId(rule.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                    selectedInheritanceRuleId === rule.id
                      ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xs'
                      : 'bg-[#F8F9FA] text-[#52796F] border-[#D8E2DC] hover:bg-emerald-50 hover:text-[#1B4332]'
                  }`}
                >
                  {rule.name}
                </button>
              ))}
            </div>

            {/* Active Rule Box */}
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1B4332] font-display">
                  {activeInheritanceRule.name}
                </h3>
                <InheritanceBadge type={activeInheritanceRule.type} />
              </div>

              <p className="text-sm text-[#1B4332] leading-relaxed">
                {activeInheritanceRule.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-2">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                    Comportamiento de Portadores:
                  </div>
                  <div className="text-xs space-y-1">
                    <div><strong>Machos portadores:</strong> {activeInheritanceRule.canMaleCarry ? 'SÍ pueden portar' : 'NO existen portadores'}</div>
                    <div><strong>Hembras portadoras:</strong> {activeInheritanceRule.canFemaleCarry ? 'SÍ pueden portar' : 'NO existen portadoras'}</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-2">
                  <div className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                    Expresión SF y DF:
                  </div>
                  <div className="text-xs space-y-1">
                    <div><strong>SF (1 dosis):</strong> {activeInheritanceRule.sfExpression}</div>
                    {activeInheritanceRule.dfExpression && (
                      <div><strong>DF (2 dosis):</strong> {activeInheritanceRule.dfExpression}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Resultados Clave de Cruzamiento:
                </div>
                <ul className="space-y-1 text-xs text-emerald-900">
                  {activeInheritanceRule.breedingOutcomesSummary.map((out, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="font-bold">•</span>
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 7: FACTOR DE OSCURIDAD */}
      {/* ========================================================================= */}
      {activeSubTab === 'factor-oscuridad' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Genética Cuantitativa
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                El Factor de Oscuridad (Dark Factor - D)
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                El factor de oscuridad es un gen autosómico de dominancia incompleta que aumenta la densidad de eumelanina en pasos discretos acumulables.
              </p>
            </div>

            {/* Dark factor scale table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    0 Factores (0D)
                  </span>
                  <span className="text-[11px] font-bold text-[#52796F]">Sin Oscuridad</span>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-base text-[#1B4332]">Línea Verde: Césped (Light Green)</div>
                  <div className="font-bold text-base text-blue-700">Línea Azul: Cielo (Skyblue)</div>
                </div>
                <p className="text-xs text-[#52796F]">
                  Tono brillante y luminoso original de mínima densidad melánica.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-emerald-50/60 border border-emerald-300 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">
                    1 Factor (1D / SF)
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800">Simple Factor</span>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-base text-emerald-950">Línea Verde: Laurel (Dark Green)</div>
                  <div className="font-bold text-base text-blue-900">Línea Azul: Cobalto (Cobalt)</div>
                </div>
                <p className="text-xs text-emerald-900">
                  Tono medio saturado, azul marino o verde hoja oscuro.
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-slate-900 text-white border border-slate-700 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-900 text-purple-200 border border-purple-700">
                    2 Factores (2D / DF)
                  </span>
                  <span className="text-[11px] font-bold text-stone-400">Doble Factor</span>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-base text-emerald-400">Línea Verde: Oliva (Olive)</div>
                  <div className="font-bold text-base text-purple-300">Línea Azul: Malva (Mauve)</div>
                </div>
                <p className="text-xs text-stone-300">
                  Tono profundo de máxima absorción melánica. En azul adquiere un matiz grisáceo-púrpura oscuro.
                </p>
              </div>

            </div>
          </div>

          <PunnettSquare initialDemoId="punnett_dark_factor_cobalt" />

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 8: FACTORES DE COLOR (GRIS Y VIOLETA) */}
      {/* ========================================================================= */}
      {activeSubTab === 'factores-color' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                  Factores Modificadores: Gris y Violeta
                </h2>
                <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                  Genes independientes que alteran la refracción lumínica en la estructura de la pluma.
                </p>
              </div>

              {/* Selector */}
              <div className="flex gap-2">
                {GENETIC_FACTORS_DATA.map((factor) => (
                  <button
                    key={factor.id}
                    onClick={() => setSelectedFactorTab(factor.id)}
                    className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border ${
                      selectedFactorTab === factor.id
                        ? 'bg-[#1B4332] text-white border-[#1B4332]'
                        : 'bg-[#F8F9FA] text-[#52796F] border-[#D8E2DC] hover:bg-emerald-50'
                    }`}
                  >
                    {factor.name.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Factor Card */}
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1B4332] font-display">
                  {activeFactor.name}
                </h3>
                <InheritanceBadge type={activeFactor.inheritance} />
              </div>

              <p className="text-sm text-[#1B4332] leading-relaxed">
                {activeFactor.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-1">
                  <div className="font-bold text-[#2D6A4F]">Efecto Visual:</div>
                  <p className="text-[#52796F] leading-relaxed">{activeFactor.visualEffect}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] space-y-1">
                  <div className="font-bold text-[#2D6A4F]">Interacciones:</div>
                  <p className="text-[#52796F] leading-relaxed">{activeFactor.interactions}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 9: CATÁLOGO GENÉTICO DE MUTACIONES */}
      {/* ========================================================================= */}
      {activeSubTab === 'mutaciones' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                  Clasificación Genética de Mutaciones
                </h2>
                <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                  Consulta las mutaciones catalogadas y accede a su ficha técnica completa.
                </p>
              </div>

              {/* Filter pills */}
              <div className="flex flex-wrap gap-1.5 bg-[#F8F9FA] p-1.5 rounded-2xl border border-[#D8E2DC]">
                {[
                  { id: 'all', label: 'Todas' },
                  { id: 'dominante', label: 'Dominantes' },
                  { id: 'recesiva', label: 'Recesivas' },
                  { id: 'ligada_sexo', label: 'Ligadas Sexo' },
                  { id: 'factores', label: 'Factores' }
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedMutationFilter(f.id)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                      selectedMutationFilter === f.id
                        ? 'bg-[#1B4332] text-white shadow-xs'
                        : 'text-[#52796F] hover:text-[#1B4332]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMutations.map((mut) => (
                <div
                  key={mut.id}
                  onClick={() => onSelectMutation && onSelectMutation(mut)}
                  className="p-5 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 hover:border-emerald-400 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <InheritanceBadge type={mut.inheritance} size="sm" />
                      <VerificationBadge status={mut.verificationStatus} />
                    </div>
                    <h4 className="font-bold text-base text-[#1B4332] group-hover:text-emerald-700 transition-colors">
                      {mut.name}
                    </h4>
                    <p className="text-xs text-[#52796F] line-clamp-2">
                      {mut.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#D8E2DC] flex items-center justify-between text-xs text-emerald-800 font-bold">
                    <span>Ver ficha técnica</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 10: MATRIZ DE PORTADORES */}
      {/* ========================================================================= */}
      {activeSubTab === 'portadores' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Guía del Criador
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                Matriz y Reglas de Oro de Portadores (Splits)
              </h2>
            </div>

            {/* Golden Rules Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <div className="font-bold text-amber-900 text-sm">Regla 1: Hembras en Ligadas al Sexo</div>
                <p className="text-amber-800 leading-relaxed">
                  Las hembras <strong>NUNCA</strong> pueden ser portadoras de mutaciones ligadas al sexo (Opalino, Canela, Ino). Si tienen el gen en su cromosoma Z, lo muestran al 100%.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                <div className="font-bold text-blue-900 text-sm">Regla 2: Mutaciones Dominantes</div>
                <p className="text-blue-800 leading-relaxed">
                  <strong>No existen portadores</strong> de mutaciones dominantes (Gris, Perlado, Pío dominante). Un periquito o tiene el gen y lo muestra, o está totalmente libre del mismo.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="font-bold text-emerald-900 text-sm">Regla 3: Mutaciones Recesivas</div>
                <p className="text-emerald-800 leading-relaxed">
                  Tanto machos como hembras pueden ser portadores no visuales de mutaciones autosómicas recesivas (Azul, Pío Recesivo, Fallow, Diluido).
                </p>
              </div>
            </div>

            {/* Carrier Notation Example */}
            <div className="p-5 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-3">
              <div className="font-bold text-sm text-[#1B4332]">
                Cómo se escribe un periquito portador (Notación con Barra /):
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#D8E2DC] font-mono text-sm sm:text-base text-[#1B4332] font-black">
                Macho Verde Césped / azul / opalino
              </div>
              <p className="text-xs text-[#52796F]">
                Significado: Es un periquito que se ve de color verde común a simple vista, pero lleva en su ADN un alelo azul recesivo y un alelo opalino ligado al sexo.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 11: COMBINACIONES CLÁSICAS */}
      {/* ========================================================================= */}
      {activeSubTab === 'combinaciones' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">
                Variedades Compuestas
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                Combinaciones Genéticas Emblemáticas
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                Variedades obtenidas mediante la interacción simultánea de múltiples genes independientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMBINATIONS_DATA.map((comb) => (
                <div
                  key={comb.id}
                  className="p-6 rounded-3xl bg-[#F8F9FA] border border-[#D8E2DC] shadow-xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-[#1B4332] font-display">
                        {comb.name}
                      </h3>
                      {comb.difficulty && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200">
                          Dificultad {comb.difficulty}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#52796F] leading-relaxed">
                      {comb.description}
                    </p>

                    {comb.genotypeFormula && (
                      <div className="p-3 rounded-2xl bg-white border border-[#D8E2DC] space-y-1">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#52796F]">
                          Fórmula Genómica:
                        </div>
                        <div className="font-mono text-xs font-bold text-[#2D6A4F]">
                          {comb.genotypeFormula}
                        </div>
                      </div>
                    )}

                    {comb.visualChecklist && (
                      <div className="space-y-1.5 pt-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#1B4332]">
                          Requisitos Visuales Auténticos:
                        </div>
                        <ul className="space-y-1 text-xs text-[#52796F]">
                          {comb.visualChecklist.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {comb.breedingAdvice && (
                    <div className="pt-3 border-t border-[#D8E2DC] text-xs text-[#1B4332] italic">
                      <span className="font-bold font-sans not-italic">Consejo de cría: </span>
                      {comb.breedingAdvice}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 12: CRUCES Y CUADRO DE PUNNETT */}
      {/* ========================================================================= */}
      {activeSubTab === 'cruces' && (
        <div className="space-y-8">
          <PunnettSquare showSelector={true} />
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 13: PROBABILIDADES VS REALIDAD */}
      {/* ========================================================================= */}
      {activeSubTab === 'probabilidades' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Estadística Aviar
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                {PROBABILITY_REALITY_GUIDE.title}
              </h2>
            </div>

            {/* Golden Warning Banner */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-amber-950 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-sm">Regla de Oro de la Estadística Mendeliana:</span>
                <p className="text-amber-900 leading-relaxed font-medium">
                  {PROBABILITY_REALITY_GUIDE.goldenRule}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROBABILITY_REALITY_GUIDE.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2"
                >
                  <h4 className="font-bold text-sm text-[#1B4332]">
                    {idx + 1}. {point.title}
                  </h4>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 14: NOMENCLATURA WBO */}
      {/* ========================================================================= */}
      {activeSubTab === 'nomenclatura' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Estándares Internacionales
              </div>
              <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                {NOMENCLATURA_GUIDE.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                Estandarizado por la {NOMENCLATURA_GUIDE.standardOrganization}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NOMENCLATURA_GUIDE.principles.map((pr, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#D8E2DC] space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-black px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {pr.symbol}
                    </span>
                    <h4 className="font-bold text-sm text-[#1B4332]">{pr.title}</h4>
                  </div>
                  <p className="text-xs text-[#52796F] leading-relaxed">
                    {pr.description}
                  </p>
                  <div className="p-2.5 rounded-xl bg-white border border-[#D8E2DC] text-[11px] font-mono text-[#2D6A4F]">
                    Ejemplo: {pr.example}
                  </div>
                </div>
              ))}
            </div>

            {/* Standard order */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
              <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Orden Estándar Oficial para Nombrar a un Periquito:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-emerald-900 font-semibold">
                {NOMENCLATURA_GUIDE.standardOrderOfNames.map((item, i) => (
                  <div key={i} className="p-2 bg-white/80 rounded-xl border border-emerald-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 15: GLOSARIO GENÉTICO */}
      {/* ========================================================================= */}
      {activeSubTab === 'glosario' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#1B4332] font-display">
                  Glosario Especializado de Genética Aviar
                </h2>
                <p className="text-xs sm:text-sm text-[#52796F] mt-1">
                  Consulta de términos biológicos con explicaciones duales (principiante y experto).
                </p>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-[#52796F] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar término..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="bg-[#F8F9FA] text-xs font-semibold text-[#1B4332] pl-9 pr-3 py-2 rounded-xl border border-[#D8E2DC] focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div className="relative">
                  <select
                    value={glossaryCategory}
                    onChange={(e) => setGlossaryCategory(e.target.value)}
                    className="appearance-none bg-[#F8F9FA] text-xs font-semibold text-[#1B4332] border border-[#D8E2DC] rounded-xl px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="all">Todas las Categorías</option>
                    <option value="fundamentos">Fundamentos</option>
                    <option value="herencia">Herencia</option>
                    <option value="factores">Factores</option>
                    <option value="morfologia">Morfología</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#52796F] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredGlossary.map((term) => (
                <GeneticsTermCard
                  key={term.id}
                  term={term}
                  showBeginnerMode={levelMode === 'principiante'}
                />
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUB-VIEW 16: COMPARADOR */}
      {/* ========================================================================= */}
      {activeSubTab === 'comparador' && (
        <div className="space-y-8">
          <GeneticsCompare onSelectMutation={onSelectMutation} />
        </div>
      )}

    </div>
  );
};
