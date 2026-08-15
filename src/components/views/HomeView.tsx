import React from 'react';
import { 
  Sparkles, 
  Dna, 
  Feather, 
  BookOpen, 
  HeartHandshake, 
  ShieldAlert, 
  Egg, 
  Calculator, 
  Tag, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Award,
  Video,
  Youtube,
  Layers,
  HelpCircle,
  MessageCircle,
  Send,
  ExternalLink,
  Apple,
  Palette
} from 'lucide-react';
import { MUTATIONS_DATA } from '../../data/mutations';
import { COLOR_LINES_DATA } from '../../data/colorLines';
import { VerificationBadge } from '../VerificationBadge';

interface Props {
  onNavigate: (tab: string) => void;
  onOpenMutation: (mutationSlug: string) => void;
}

export const HomeView: React.FC<Props> = ({ onNavigate, onOpenMutation }) => {
  const featuredMutation = MUTATIONS_DATA.find((m) => m.id === 'opalino') || MUTATIONS_DATA[0];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-[#1B4332] text-white p-8 sm:p-12 lg:p-14 border border-[#2D6A4F]/60 shadow-xl">
        
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-[#40916C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-[#52796F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D6A4F] text-[#B7E4C7] border border-[#40916C]/40 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#74C69D]" />
              <span>La enciclopedia y plataforma especializada en periquitos</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]">
              Descubre el fascinante mundo del{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74C69D] to-[#B7E4C7]">
                periquito australiano
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#D8E2DC] max-w-2xl leading-relaxed">
              Aprende sobre genética, mutaciones, líneas de color, cuidados responsables, salud aviar y herramientas de registro para criadores y aficionados de{' '}
              <em>Melopsittacus undulatus</em>.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              <button
                id="hero-btn-mutaciones"
                onClick={() => onNavigate('mutaciones')}
                className="px-6 py-3.5 rounded-full bg-[#2D6A4F] hover:bg-[#40916C] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1B4332]/30 transition-all flex items-center gap-2 hover:translate-y-[-1px]"
              >
                <Feather className="w-4 h-4" />
                <span>Explorar Mutaciones</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="hero-btn-genetica"
                onClick={() => onNavigate('genetica')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Dna className="w-4 h-4 text-[#B7E4C7]" />
                <span>Aprender Genética</span>
              </button>

              <button
                id="hero-btn-calculadora"
                onClick={() => onNavigate('calculadora')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#74C69D]" />
                <span>Calculadora Genética</span>
              </button>

            </div>
          </div>

          {/* Hero Logo Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-56 sm:w-64 lg:w-72 bg-white rounded-3xl p-4 shadow-2xl border-4 border-[#2D6A4F]/40 transform transition-transform hover:scale-102 flex flex-col items-center text-center">
              
              <div className="w-full aspect-square rounded-2xl bg-[#FDFCFB] flex items-center justify-center p-2 overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="Plumaje Mágico Logo Oficial"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-2 pb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] block">
                  Plataforma Oficial
                </span>
                <span className="text-[11px] text-[#52796F]">
                  Melopsittacus undulatus
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. DUAL AUDIENCE PATHWAYS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pathway 1: Principiante */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs flex flex-col justify-between">
          
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center mb-4 shadow-sm">
              <Compass className="w-6 h-6" />
            </div>

            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#2D6A4F] bg-[#F1F3F2] border border-[#D8E2DC] px-2.5 py-0.5 rounded-full mb-2">
              Ruta para Principiantes
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
              ¿Acabas de tener tu primer periquito?
            </h2>

            <p className="mt-2 text-sm text-[#52796F] leading-relaxed">
              Guía esencial paso a paso para comenzar: nutrición adecuada, dimensiones de jaula, juguetes seguros, identificación de sexo y signos tempranos de salud.
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#1B4332]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                <span>¿Cómo saber si es macho o hembra? (Cera nasal)</span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                <span>Alimentación completa y alimentos tóxicos mortales</span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0" />
                <span>Perchas naturales para evitar pododermatitis</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => onNavigate('cuidados')}
            className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <span>Ver Guía de Cuidados Iniciales</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

        {/* Pathway 2: Criador */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#1B4332] text-white border border-[#2D6A4F]/70 shadow-xs flex flex-col justify-between">
          
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] text-white flex items-center justify-center mb-4 shadow-sm border border-[#40916C]/40">
              <Award className="w-6 h-6 text-[#74C69D]" />
            </div>

            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#B7E4C7] bg-[#2D6A4F]/60 px-2.5 py-0.5 rounded-full mb-2 border border-[#40916C]/40">
              Ruta para Criadores
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              ¿Eres criador o aficionado avanzado?
            </h2>

            <p className="mt-2 text-sm text-[#D8E2DC] leading-relaxed">
              Accede directamente a las herramientas técnicas: factores de oscuridad, herencia ligada al sexo, autosexado en el nido, calculadora genética y registro de aves.
            </p>

            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#D8E2DC]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0" />
                <span>Factores de Oscuridad (Césped/Laurel/Oliva & Cielo/Cobalto/Malva)</span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0" />
                <span>Calculadora de probabilidades de cruces y portadores</span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#74C69D] shrink-0" />
                <span>Estándares morfológicos de exposición y medicina preventiva</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => onNavigate('calculadora')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#40916C] hover:bg-[#2D6A4F] text-white text-sm font-bold transition-colors"
            >
              <span>Abrir Calculadora</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('mutaciones')}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#2D6A4F]/80 hover:bg-[#2D6A4F] text-white text-sm font-medium transition-colors border border-[#40916C]/40"
            >
              <Feather className="w-4 h-4 text-[#B7E4C7]" />
              <span>Ver Mutaciones</span>
            </button>
          </div>

        </div>

      </section>

      {/* 3. CORE MODULE TILES */}
      <section className="space-y-6">
        
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#1B4332] font-display">
              Módulos de la Plataforma
            </h2>

            <p className="text-sm text-[#52796F]">
              Explora las diferentes secciones organizadas de Plumaje Mágico
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Tile: Colores y Clasificación Visual */}
          <div
            onClick={() => onNavigate('colores')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Colores & Variedades
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Catálogo visual, comparador fenotípico anatómico, factor de oscuridad y galería documentada de ejemplares.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Explorar Colores →</span>
            </div>
          </div>

          {/* Tile 1: Genética */}
          <div
            onClick={() => onNavigate('genetica')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Dna className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Genética
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Aprende cómo se transmiten las características: dominancia, recesividad, genes ligados al sexo y factores acumulativos.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Explorar Genética →</span>
            </div>
          </div>

          {/* Tile 2: Mutaciones */}
          <div
            onClick={() => onNavigate('mutaciones')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Feather className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Mutaciones
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Catálogo exhaustivo de variedades: Opalino, Canela, Inos, Perlados, Alas Claras, Blackwing, Fallow y más.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Ver Catálogo de Mutaciones →</span>
            </div>
          </div>

          {/* Tile 3: Cuidados */}
          <div
            onClick={() => onNavigate('cuidados')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Cuidados
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Todo lo necesario para mantener aves saludables: nutrición equilibrada, jaulas, sueño y enriquecimiento ambiental.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Leer Guía de Cuidados →</span>
            </div>
          </div>

          {/* Tile 4: Salud */}
          <div
            onClick={() => onNavigate('salud')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Salud y Prevención
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Identificación de signos tempranos de enfermedad, parásitos (ácaros de la cera), psitacosis y cuándo acudir al veterinario.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Consultar Salud Aviar →</span>
            </div>
          </div>

          {/* Tile 5: Cría */}
          <div
            onClick={() => onNavigate('cria')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Egg className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Cría Responsable
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Preparación de reproductores, acondicionamiento del nido con concavidad, incubación de 18 días, anillado y destete.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Ver Proceso de Cría →</span>
            </div>
          </div>

          {/* Tile 6: Herramientas */}
          <div
            onClick={() => onNavigate('calculadora')}
            className="p-6 rounded-2xl bg-white border border-[#D8E2DC] hover:border-[#2D6A4F] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F3F2] text-[#2D6A4F] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Calculator className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] font-display">
                Calculadora Genética
              </h3>

              <p className="text-sm text-[#52796F] mt-1">
                Calcula cruces genéticos mendelianos, factores de oscuridad, genes ligados al sexo y probabilidades teóricas de descendencia.
              </p>
            </div>

            <div className="mt-4 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
              <span>Abrir Calculadora →</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FEATURED MUTATION OF THE WEEK */}
      <section className="bg-white rounded-3xl border border-[#D8E2DC] p-6 sm:p-8 shadow-xs">
        
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          <div className="w-full lg:w-1/2 space-y-4">
            
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC]">
                Mutación Destacada
              </span>

              <VerificationBadge status={featuredMutation.verificationStatus} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#1B4332] font-display">
              {featuredMutation.name}
            </h3>

            <p className="text-sm sm:text-base text-[#52796F] leading-relaxed">
              {featuredMutation.description}
            </p>

            <div className="p-4 rounded-xl bg-[#F1F3F2] border border-[#D8E2DC] text-xs sm:text-sm text-[#1B4332]">
              <span className="font-bold text-[#1B4332] block mb-1">
                Clave de Identificación:
              </span>

              {featuredMutation.phenotype.wingMarkings}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => onOpenMutation(featuredMutation.slug)}
                className="px-5 py-2.5 rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Ver Ficha Completa de {featuredMutation.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Fotografía destacada — estándar vertical 3:4 */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[#D8E2DC] group bg-[#F1F3F2]">
              
              <img
                src={
                  featuredMutation.images[0]?.url ||
                  'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80'
                }
                alt={featuredMutation.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-transparent to-transparent flex items-end p-4 pointer-events-none">
                <p className="text-xs text-[#D8E2DC] font-medium">
                  {featuredMutation.images[0]?.caption || 'Ejemplar en observación de patrón dorsal'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. COLOR LINES SUMMARY PREVIEW */}
      <section className="space-y-6">
        
        <div>
          <h2 className="text-2xl font-bold text-[#1B4332] font-display">
            Líneas de Color y Factores de Oscuridad
          </h2>

          <p className="text-sm text-[#52796F]">
            Los dos grandes pilares cromáticos del periquito australiano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {COLOR_LINES_DATA.map((line) => (
            <div
              key={line.id}
              className="p-6 rounded-2xl bg-white border border-[#D8E2DC] shadow-xs space-y-4"
            >
              
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1B4332] font-display">
                  {line.name}
                </h3>

                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC]">
                  {line.id === 'verde' ? 'Ancestral / Dominante' : 'Recesivo'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#52796F] leading-relaxed">
                {line.description}
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {line.darkFactorLevels.map((df) => (
                  <div
                    key={df.factor}
                    className="p-2.5 rounded-xl border border-[#D8E2DC] bg-[#F1F3F2] text-center"
                  >
                    <div
                      className="w-6 h-6 rounded-full mx-auto mb-1.5 shadow-xs border border-white"
                      style={{ backgroundColor: df.hexColor }}
                    />

                    <div
                      className="text-xs font-bold text-[#1B4332] truncate"
                      title={df.name}
                    >
                      {df.name.split(' ')[1] || df.name}
                    </div>

                    <div className="text-[10px] text-[#52796F]">
                      {df.factor}D
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('genetica')}
                  className="text-xs font-bold text-[#2D6A4F] hover:text-[#1B4332] flex items-center gap-1"
                >
                  <span>Ver tabla de cruces de {line.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 6. COMMUNITY & SOCIAL CHANNELS */}
      <section className="rounded-3xl bg-[#1B4332] text-white p-8 sm:p-10 border border-[#2D6A4F]">
        
        <div className="max-w-3xl space-y-4">
          
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2D6A4F] text-[#B7E4C7] border border-[#40916C]/50">
            Comunidad y Canales Oficiales
          </span>

          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Únete a la comunidad de Plumaje Mágico
          </h3>

          <p className="text-sm text-[#D8E2DC] leading-relaxed">
            Resuelve dudas genéticas en directo en nuestros grupos de WhatsApp y Telegram, y descubre tutoriales en video y novedades avícolas en nuestras redes oficiales.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            
            <a
              id="home-whatsapp-btn"
              href="https://chat.whatsapp.com/Gku8Jj03e1n3B4pQEiRks8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 text-sm font-bold transition-all flex items-center gap-2 shadow-sm hover:translate-y-[-1px]"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Grupo de WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>

            <a
              id="home-telegram-btn"
              href="https://t.me/PlumajeMagico"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#229ED9] hover:bg-[#1e8dbf] text-white text-sm font-bold transition-all flex items-center gap-2 shadow-sm hover:translate-y-[-1px]"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Grupo de Telegram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>

            <a
              id="home-tiktok-btn"
              href="https://www.tiktok.com/@plumaje_magico"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#2D6A4F] hover:bg-[#40916C] text-white text-sm font-semibold transition-all flex items-center gap-2 border border-[#40916C]/40 shadow-sm hover:translate-y-[-1px]"
            >
              <Video className="w-4 h-4 text-[#B7E4C7]" />
              <span>TikTok Oficial</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>

            <a
              id="home-youtube-btn"
              href="https://www.youtube.com/@PlumajeMagico"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-sm hover:translate-y-[-1px]"
            >
              <Youtube className="w-4 h-4 text-white" />
              <span>Canal de YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};
