import React, { useState } from 'react';
import {
  Home,
  CheckCircle2,
  AlertTriangle,
  TreeDeciduous,
  Droplets,
  Apple,
  Sparkles,
  ShieldCheck,
  Maximize2,
  Info,
} from 'lucide-react';

interface CageZone {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  details: string;
  bestPractices: string[];
  warnings: string[];
  specs: string;
}

export const CageDiagramGuide: React.FC = () => {
  const [activeZoneId, setActiveZoneId] = useState<string>('rest-zone');

  const cageZones: CageZone[] = [
    {
      id: 'flight-corridor',
      name: 'Corredor Central de Vuelo',
      category: 'Espacio Libre',
      shortDesc: 'El centro de la jaula debe mantenerse completamente libre de obstáculos para permitir el aleteo horizontal.',
      details:
        'Los periquitos son voladores en línea recta. Mantener el centro de la jaula despejado de juguetes colgantes o perchas intermedias permite que den vuelos cortos de extremo a extremo, fortaleciendo sus sacos aéreos y músculos pectorales.',
      bestPractices: [
        'Dejar al menos 30-40 cm de espacio ininterrumpido en el eje horizontal.',
        'Colocar las perchas únicamente en los extremos laterales.',
      ],
      warnings: [
        'No satures la jaula con accesorios en el medio que obliguen al periquito a trepar en lugar de volar.',
      ],
      specs: 'Mínimo 60-70 cm de longitud total para una pareja.',
    },
    {
      id: 'rest-zone',
      name: 'Zona Superior de Descanso',
      category: 'Refugio y Sueño',
      shortDesc: 'Ubicada en la esquina más alta y protegida de la jaula para dormir seguros.',
      details:
        'Por instinto ancestral de presa, los periquitos eligen siempre el punto más elevado posible para pasar la noche, ya que les brinda sensación de control y refugio ante posibles depredadores terrestres.',
      bestPractices: [
        'Instalar una rama natural gruesa y cómoda en la esquina superior trasera.',
        'Asegurar que la jaula tenga un lateral pegado a una pared sólida para mayor serenidad nocturna.',
      ],
      warnings: [
        'No coloques comederos ni bebederos debajo de este posadero: caerán heces durante la noche.',
      ],
      specs: 'Altura superior (a 35-40 cm de la base).',
    },
    {
      id: 'perches-zone',
      name: 'Perchas de Maderas Naturales',
      category: 'Ergonomía Plantar',
      shortDesc: 'Ramas no tóxicas de diámetros irregulares (1.2 a 2.5 cm) para evitar pododermatitis.',
      details:
        'La curvatura y rugosidad de la madera natural ejercita los músculos flexores y extensores de los dedos, desgastando naturalmente las uñas y evitando la formación de úlceras en la planta del pie causadas por perchas lisas de plástico.',
      bestPractices: [
        'Usar maderas de manzano, olivo, sauce, eucalipto o cítricos lavadas y horneadas.',
        'Variar las inclinaciones y alturas.',
      ],
      warnings: [
        'Prohibido el uso de fundas de lija abrasiva y perchas cilíndricas lisas de plástico.',
      ],
      specs: 'Diámetros variados entre 1.2 cm y 2.5 cm.',
    },
    {
      id: 'food-water-zone',
      name: 'Estación de Alimentación y Agua',
      category: 'Nutrición e Higiene',
      shortDesc: 'Comederos y bebederos situados a media altura, limpios y libres de contaminación fecal.',
      details:
        'Los comederos y bebederos deben estar fijados a una altura accesible donde no puedan caer excrementos de las perchas superiores. Se recomienda comederos abiertos de acero inoxidable o tolvas exteriores de fácil recarga.',
      bestPractices: [
        'Renovar el agua cada mañana tras limpiar el tubo o cuenco.',
        'Soplar cascarillas de semillas diariamente para dejar visible el grano entero.',
      ],
      warnings: [
        'Nunca ubicar comederos directamente en el suelo de la jaula bajo las perchas.',
      ],
      specs: 'Media altura (15-20 cm del fondo).',
    },
    {
      id: 'mineral-zone',
      name: 'Punto Mineral y Bloque de Yodo',
      category: 'Suplementación',
      shortDesc: 'Hueso de sepia (jibia) y bloque mineral con yodo accesibles las 24 horas.',
      details:
        'El hueso de sepia proporciona carbonato cálcico biodisponible para los huesos y formación de cáscaras en hembras, mientras que el bloque mineral con yodo previene la hipertrofia tiroidea (bocio) típica en periquitos alimentados con semillas.',
      bestPractices: [
        'Fijar sólidamente con abrazaderas cerca de una percha para que no caiga.',
        'Renovar si se humedece o ensucia.',
      ],
      warnings: [
        'Evitar bloques de calcio con colorantes artificiales fosforescentes.',
      ],
      specs: 'Fijación lateral junto a la percha principal.',
    },
    {
      id: 'foraging-zone',
      name: 'Zona de Forrajeo y Juguetes Seguros',
      category: 'Estimulación Mental',
      shortDesc: 'Juguetes destructibles de madera de balsa, mimbre y retos de búsqueda de comida.',
      details:
        'Los periquitos necesitan satisfacer su instinto de mordisqueo y exploración. Los juguetes naturales de mimbre, cartón corrugado y hojas de palma tejidas los mantienen activos y previenen el aburrimiento.',
      bestPractices: [
        'Rotar los juguetes cada 2 semanas para mantener la curiosidad.',
        'Esconder ramitas de panizo dentro de paquetitos de papel kraft para forrajeo.',
      ],
      warnings: [
        'Sin espejos, muñecos plásticos ni cuerdas de algodón con hilos sueltos.',
      ],
      specs: '2 a 3 juguetes máximos por jaula.',
    },
    {
      id: 'bottom-tray',
      name: 'Bandeja Inferior y Sustrato Sanitario',
      category: 'Bioseguridad',
      shortDesc: 'Bandeja extraíble con papel blanco absorbente no tóxico para monitoreo de heces.',
      details:
        'El fondo de la jaula debe limpiarse de forma rápida y sencilla sin perturbar el interior. El papel blanco absorbente permite inspeccionar diariamente la forma, color y consistencia de las heces para detectar precozmente cualquier anomalía digestiva.',
      bestPractices: [
        'Cambiar el papel a diario o cada dos días.',
        'Lavar la bandeja con agua caliente y vinagre blanco diluido una vez por semana.',
      ],
      warnings: [
        'No usar arenas aromáticas con perfumes ni sustratos polvorientos de arcilla.',
      ],
      specs: 'Bandeja extraíble con bordes de 2-3 cm.',
    },
  ];

  const activeZone = cageZones.find((z) => z.id === activeZoneId) || cageZones[0];

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
          <Home className="w-3.5 h-3.5" />
          <span>Diagrama Zootécnico Interactivo</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Arquitectura y Distribución de la Jaula Ideal
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-4xl leading-relaxed">
          Haz clic en las diferentes zonas del esquema interactivo para consultar las medidas recomendadas, la ubicación anatómica de los accesorios y las normas de bioseguridad.
        </p>
      </div>

      {/* Interactive Cage Layout Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Visual Cage Canvas */}
        <div className="lg:col-span-7 bg-slate-900 rounded-3xl border-2 border-slate-800 p-6 sm:p-8 text-white relative overflow-hidden shadow-md flex flex-col justify-between min-h-[420px]">
          
          {/* Top Cage Dimension Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3 text-xs">
            <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" />
              Dimensiones: 70cm ancho × 40cm fondo × 45cm alto
            </span>
            <span className="text-slate-400 text-[11px]">Barrotes horizontales (10-12mm)</span>
          </div>

          {/* Graphical Diagram Representation */}
          <div className="my-6 grid grid-cols-3 grid-rows-3 gap-3 relative border border-slate-700/80 rounded-2xl p-4 bg-slate-950/60">
            
            {/* Top Row: Rest Corner & Minerals */}
            <button
              id="zone-rest-btn"
              onClick={() => setActiveZoneId('rest-zone')}
              className={`p-3 rounded-xl border text-left transition-all col-span-2 ${
                activeZoneId === 'rest-zone'
                  ? 'bg-emerald-900/80 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                  <TreeDeciduous className="w-3.5 h-3.5" />
                  Zona Alta de Descanso
                </span>
                <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-300">Noche</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">Rama alta natural en esquina protegida</p>
            </button>

            <button
              id="zone-mineral-btn"
              onClick={() => setActiveZoneId('mineral-zone')}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeZoneId === 'mineral-zone'
                  ? 'bg-emerald-900/80 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span className="text-xs font-bold text-amber-300 block">Sepia / Yodo</span>
              <p className="text-[10px] text-slate-400 mt-1">Calcio & Yodo</p>
            </button>

            {/* Middle Row: Central Free Flight Corridor + Perches */}
            <button
              id="zone-perches-left-btn"
              onClick={() => setActiveZoneId('perches-zone')}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeZoneId === 'perches-zone'
                  ? 'bg-emerald-900/80 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span className="text-xs font-bold text-teal-300 block">Percha Natural</span>
              <p className="text-[10px] text-slate-400 mt-1">Ø 1.5 - 2.0 cm</p>
            </button>

            <button
              id="zone-flight-corridor-btn"
              onClick={() => setActiveZoneId('flight-corridor')}
              className={`p-3 rounded-xl border text-center transition-all flex flex-col justify-center items-center ${
                activeZoneId === 'flight-corridor'
                  ? 'bg-emerald-950/90 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-900/90 border-dashed border-slate-600 hover:border-slate-400 text-slate-300'
              }`}
            >
              <span className="text-xs font-bold text-emerald-400">↔ Corredor Libre</span>
              <p className="text-[10px] text-slate-400 mt-0.5">Espacio despejado para aleteo</p>
            </button>

            <button
              id="zone-foraging-btn"
              onClick={() => setActiveZoneId('foraging-zone')}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeZoneId === 'foraging-zone'
                  ? 'bg-emerald-900/80 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span className="text-xs font-bold text-amber-300 block">Juguetes / Mimbre</span>
              <p className="text-[10px] text-slate-400 mt-1">Forrajeo activo</p>
            </button>

            {/* Bottom Row: Food / Water + Tray */}
            <button
              id="zone-food-btn"
              onClick={() => setActiveZoneId('food-water-zone')}
              className={`p-3 rounded-xl border text-left transition-all col-span-2 ${
                activeZoneId === 'food-water-zone'
                  ? 'bg-emerald-900/80 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Apple className="w-3.5 h-3.5 text-red-400" />
                <Droplets className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-bold text-white">Comedero & Bebedero</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Media altura fuera de la línea de caída fecal</p>
            </button>

            <button
              id="zone-tray-btn"
              onClick={() => setActiveZoneId('bottom-tray')}
              className={`p-3 rounded-xl border text-left transition-all ${
                activeZoneId === 'bottom-tray'
                  ? 'bg-emerald-900/80 border-emerald-400 ring-2 ring-emerald-400/30'
                  : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span className="text-xs font-bold text-slate-300 block">Bandeja Fondo</span>
              <p className="text-[10px] text-slate-400 mt-1">Papel blanco</p>
            </button>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Haz clic en cualquier zona para ver especificaciones técnicas</span>
            <span className="text-emerald-400 font-semibold">Plumaje Mágico • Guía de Alojamiento</span>
          </div>
        </div>

        {/* Zone Details Panel */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                  {activeZone.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {activeZone.name}
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
                {activeZone.specs}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeZone.details}
            </p>

            {/* Dos */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                Pautas Correctas:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeZone.bestPractices.map((bp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warnings */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Errores Frecuentes:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeZone.warnings.map((w, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Basado en los estándares de alojamiento de la RSPCA y AAV.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
