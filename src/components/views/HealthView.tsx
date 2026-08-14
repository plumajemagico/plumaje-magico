import React, { useState, useMemo } from 'react';
import { HealthCondition, HealthCategory } from '../../types';
import { HEALTH_CONDITIONS_DATA } from '../../data/health';
import { MedicalDisclaimer } from '../health/MedicalDisclaimer';
import { HealthFilters } from '../health/HealthFilters';
import { HealthConditionGrid } from '../health/HealthConditionGrid';
import { HealthWarningSignsView } from '../health/HealthWarningSignsView';
import { HealthPreventionView } from '../health/HealthPreventionView';
import { HealthTopicView } from '../health/HealthTopicView';
import { WhenToSeeVetSection } from '../health/WhenToSeeVetSection';
import { 
  ShieldAlert, 
  HeartPulse, 
  ShieldCheck, 
  Wind, 
  Layers, 
  Bug, 
  Feather, 
  Scissors, 
  Apple, 
  Stethoscope, 
  BookOpen, 
  Search,
  Sparkles,
  Compass,
  Award
} from 'lucide-react';

interface Props {
  onOpenCondition: (condition: HealthCondition) => void;
  initialSubTab?: string;
}

export type HealthSubSection =
  | 'catalogo'
  | 'signos-de-alerta'
  | 'prevencion'
  | 'respiratorio'
  | 'digestivo'
  | 'parasitos'
  | 'plumaje'
  | 'patas-pico'
  | 'nutricion'
  | 'veterinario';

export const HealthView: React.FC<Props> = ({ onOpenCondition, initialSubTab }) => {
  const [subSection, setSubSection] = useState<HealthSubSection>(
    (initialSubTab as HealthSubSection) || 'catalogo'
  );
  const [audienceMode, setAudienceMode] = useState<'beginner' | 'breeder'>('beginner');

  // Search & Filter state for conditions catalog
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<HealthCategory | 'all'>('all');
  const [filterEmergencyOnly, setFilterEmergencyOnly] = useState(false);

  // Filtered conditions calculation
  const filteredConditions = useMemo(() => {
    return HEALTH_CONDITIONS_DATA.filter((cond) => {
      // Category filter
      if (selectedCategory !== 'all' && cond.category !== selectedCategory) {
        return false;
      }

      // Emergency filter
      if (filterEmergencyOnly && !cond.isEmergency) {
        return false;
      }

      // Search term filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const matchName = cond.name.toLowerCase().includes(query);
        const matchScientific = cond.scientificOrAlternativeName?.toLowerCase().includes(query) || false;
        const matchSummary = cond.shortDescription.toLowerCase().includes(query);
        const matchSigns = cond.signs.some((s) => s.toLowerCase().includes(query));
        const matchTags = cond.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchName && !matchScientific && !matchSummary && !matchSigns && !matchTags) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedCategory, filterEmergencyOnly]);

  const navTabs: { id: HealthSubSection; label: string; icon: any }[] = [
    { id: 'catalogo', label: 'Biblioteca de Patologías', icon: BookOpen },
    { id: 'signos-de-alerta', label: 'Signos de Alerta', icon: HeartPulse },
    { id: 'prevencion', label: 'Prevención & Bioseguridad', icon: ShieldCheck },
    { id: 'respiratorio', label: 'Respiratorio', icon: Wind },
    { id: 'digestivo', label: 'Digestivo', icon: Layers },
    { id: 'parasitos', label: 'Parásitos', icon: Bug },
    { id: 'plumaje', label: 'Plumaje & Muda', icon: Feather },
    { id: 'patas-pico', label: 'Patas & Pico', icon: Scissors },
    { id: 'nutricion', label: 'Nutrición & Tóxicos', icon: Apple },
    { id: 'veterinario', label: 'Visita Veterinaria', icon: Stethoscope },
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* 1. MODULE HERO HEADER */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1B4332] text-white p-6 sm:p-10 border border-[#2D6A4F]/60 shadow-lg">
        <div className="relative z-10 space-y-4 max-w-4xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A4F] text-[#B7E4C7] border border-[#40916C]/40 text-xs font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-[#74C69D]" />
              <span>Biblioteca Pública de Salud Aviar</span>
            </div>

            {/* Audience Toggle (Principiante vs Criador) */}
            <div className="flex items-center bg-[#2D6A4F]/80 p-1 rounded-xl border border-[#40916C]/40 text-xs">
              <button
                id="audience-mode-beginner"
                onClick={() => setAudienceMode('beginner')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition-all ${
                  audienceMode === 'beginner'
                    ? 'bg-white text-[#1B4332] shadow-xs'
                    : 'text-[#D8E2DC] hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Principiante</span>
              </button>
              <button
                id="audience-mode-breeder"
                onClick={() => setAudienceMode('breeder')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition-all ${
                  audienceMode === 'breeder'
                    ? 'bg-white text-[#1B4332] shadow-xs'
                    : 'text-[#D8E2DC] hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Criador Experto</span>
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Salud del periquito australiano
          </h1>

          <p className="text-sm sm:text-base text-[#D8E2DC] leading-relaxed">
            Información para ayudarte a reconocer señales de alerta, prevenir problemas y cuidar mejor de tu periquito.
          </p>

          {/* Contextual advice based on audience */}
          <div className="pt-2 text-xs text-[#B7E4C7] bg-[#2D6A4F]/40 p-3.5 rounded-2xl border border-[#40916C]/30 flex items-start gap-2.5">
            {audienceMode === 'beginner' ? (
              <>
                <Compass className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
                <span>
                  <strong>Consejo para propietarios:</strong> Observa la actividad y las heces de tu periquito a diario. Las aves ocultan el dolor; si pasa tiempo en el fondo de la jaula o con plumas infladas, consulta de inmediato a un veterinario de exóticos.
                </span>
              </>
            ) : (
              <>
                <Award className="w-4 h-4 text-[#74C69D] shrink-0 mt-0.5" />
                <span>
                  <strong>Protocolo de aviario:</strong> Mantén cuarentena rigurosa de 30 días con análisis coprológicos para nuevas incorporaciones para prevenir brotes de Megabacteriosis, Clamidiosis o Ácaros Traqueales.
                </span>
              </>
            )}
          </div>

        </div>
      </section>

      {/* 2. REUSABLE MEDICAL DISCLAIMER */}
      <MedicalDisclaimer variant="banner" />

      {/* 3. SUB-NAVIGATION TABS */}
      <section className="bg-white rounded-2xl p-2 border border-slate-200 shadow-xs overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1 min-w-max">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = subSection === tab.id;
            return (
              <button
                key={tab.id}
                id={`health-subtab-${tab.id}`}
                onClick={() => {
                  setSubSection(tab.id);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#2D6A4F] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#1B4332] hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. MAIN CONTENT ROUTING */}
      <section className="min-h-[400px]">
        
        {/* SUBVIEW 1: CATALOGO GENERAL DE PATOLOGIAS */}
        {subSection === 'catalogo' && (
          <div className="space-y-6">
            
            {/* Filters bar */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <HealthFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                filterEmergencyOnly={filterEmergencyOnly}
                onToggleEmergency={() => setFilterEmergencyOnly(!filterEmergencyOnly)}
                totalResults={filteredConditions.length}
              />
            </div>

            {/* Conditions Grid */}
            <HealthConditionGrid
              conditions={filteredConditions}
              onOpenCondition={onOpenCondition}
              onResetFilters={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setFilterEmergencyOnly(false);
              }}
            />

          </div>
        )}

        {/* SUBVIEW 2: SIGNOS DE ALERTA */}
        {subSection === 'signos-de-alerta' && (
          <HealthWarningSignsView
            onOpenConditionSlug={(slug) => {
              const found = HEALTH_CONDITIONS_DATA.find((c) => c.slug === slug);
              if (found) onOpenCondition(found);
            }}
          />
        )}

        {/* SUBVIEW 3: PREVENCION Y BIOSEGURIDAD */}
        {subSection === 'prevencion' && (
          <HealthPreventionView />
        )}

        {/* SUBVIEW 4 to 9: THEMATIC TOPIC VIEWS */}
        {(subSection === 'respiratorio' ||
          subSection === 'digestivo' ||
          subSection === 'parasitos' ||
          subSection === 'plumaje' ||
          subSection === 'patas-pico' ||
          subSection === 'nutricion') && (
          <HealthTopicView
            topicId={subSection}
            onBack={() => setSubSection('catalogo')}
            onOpenCondition={onOpenCondition}
          />
        )}

        {/* SUBVIEW 10: ATENCION VETERINARIA */}
        {subSection === 'veterinario' && (
          <WhenToSeeVetSection />
        )}

      </section>

    </div>
  );
};
