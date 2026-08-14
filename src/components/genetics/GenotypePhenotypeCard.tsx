import React, { useState } from 'react';
import { Eye, Dna, ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GenotypePhenotypePair {
  id: string;
  title: string;
  category: string;
  genotype: {
    formula: string;
    alleles: string[];
    zygosity: 'Homocigoto' | 'Heterocigoto' | 'Hemizigoto' | 'Heterocigoto / Hemizigoto';
    hiddenCarriers: string[];
    genomicNotes: string;
  };
  phenotype: {
    visualName: string;
    bodyColor: string;
    wingPattern: string;
    maskAndThroat: string;
    cereAndLegs: string;
    visualNotes: string;
  };
}

const DEMO_PAIRS: GenotypePhenotypePair[] = [
  {
    id: 'verde_split_azul_opalino',
    title: 'Macho Verde Césped / azul / opalino',
    category: 'Heterocigoto Portador Doble',
    genotype: {
      formula: 'B+/b  d+/d+  Z^op/Z+',
      alleles: ['B+ (Verde silvestre)', 'b (Azul recesivo)', 'd+ (Sin factor oscuridad)', 'Z^op (Opalino ligado al sexo)', 'Z+ (Clásico silvestre)'],
      zygosity: 'Heterocigoto',
      hiddenCarriers: ['Porta gen Azul (b)', 'Porta gen Opalino (Z^op)'],
      genomicNotes: 'Contiene toda la información para engendrar hijos azules e hijas opalinas, pero ningún observador puede detectar estos genes a simple vista.'
    },
    phenotype: {
      visualName: 'Verde Césped Clásico (Visual)',
      bodyColor: 'Verde césped brillante uniforme en pecho, vientre y rabadilla.',
      wingPattern: 'Ondulaciones negras densas y regulares sobre fondo amarillo en alas y manto.',
      maskAndThroat: 'Máscara amarillo limón con 6 manchas gulares negras y 2 spots violetas.',
      cereAndLegs: 'Cera azul brillante (macho adulto); patas gris azuladas.',
      visualNotes: 'A la vista es 100% idéntico a un periquito verde salvaje ancestral de la naturaleza.'
    }
  },
  {
    id: 'azul_cobalto_opalino',
    title: 'Hembra Azul Cobalto Opalina',
    category: 'Expresión Visual Combinada',
    genotype: {
      formula: 'b/b  D/d+  Z^op/W',
      alleles: ['b/b (Homocigoto azul)', 'D/d+ (Heterocigoto factor oscuridad)', 'Z^op/W (Hemizigoto hembra opalina)'],
      zygosity: 'Heterocigoto / Hemizigoto',
      hiddenCarriers: ['Ninguno (las hembras no pueden portar mutaciones ligadas al sexo)'],
      genomicNotes: 'Al tener un único cromosoma Z con el alelo Z^op, la hembra expresa inmediatamente el fenotipo opalino al 100%.'
    },
    phenotype: {
      visualName: 'Azul Cobalto Opalina (Visual)',
      bodyColor: 'Azul marino medio (cobalto) con reflejos homogéneos.',
      wingPattern: 'Manto dorsal en "V" limpia del color azul del cuerpo; melanina reducida en las cobertoras.',
      maskAndThroat: 'Máscara blanca pura con manchas gulares violetas intensas.',
      cereAndLegs: 'Cera marrón rugosa (hembra en celo) o blanquecina celeste.',
      visualNotes: 'El fenotipo refleja con total fidelidad cada uno de los alelos activos de su genotipo.'
    }
  },
  {
    id: 'perlado_doble_factor',
    title: 'Perlado Doble Factor (DF) en Línea Verde',
    category: 'Homocigoto Dominante Modificador',
    genotype: {
      formula: 'B+/B+  Sp/Sp  d+/d+',
      alleles: ['B+/B+ (Homocigoto verde)', 'Sp/Sp (Homocigoto doble dosis Perlado)'],
      zygosity: 'Homocigoto',
      hiddenCarriers: ['Ninguno'],
      genomicNotes: 'La doble dosis del gen Spangle (Sp/Sp) suprime totalmente la síntesis de dibujo melánico sin alterar la producción de psitacina.'
    },
    phenotype: {
      visualName: 'Amarillo Monocromático de Ojos Negros',
      bodyColor: 'Amarillo puro e uniforme en la totalidad del plumaje (cuerpo, alas y cabeza).',
      wingPattern: 'Ausencia total de ondulaciones o marcas negras.',
      maskAndThroat: 'Máscara amarilla continua; manchas gulares blancas o ausentes.',
      cereAndLegs: 'Cera azul brillante en machos; ojos negros con anillo de iris blanco.',
      visualNotes: 'Visualmente parece un Lutino, pero se distingue de inmediato porque sus ojos son negros con iris (no rojos).'
    }
  }
];

export const GenotypePhenotypeCard: React.FC = () => {
  const [selectedPairIndex, setSelectedPairIndex] = useState<number>(0);
  const pair = DEMO_PAIRS[selectedPairIndex];

  return (
    <div className="bg-white rounded-3xl border border-[#D8E2DC] p-6 sm:p-8 shadow-xs space-y-6">
      
      {/* Top Selector and Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D8E2DC]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
              <Dna className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
              Genotipo vs Fenotipo • Comparativa Lado a Lado
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
            {pair.title}
          </h3>
        </div>

        {/* Pair selector pills */}
        <div className="flex flex-wrap gap-1.5 bg-[#F8F9FA] p-1.5 rounded-2xl border border-[#D8E2DC]">
          {DEMO_PAIRS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedPairIndex(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedPairIndex === idx
                  ? 'bg-[#1B4332] text-white shadow-xs'
                  : 'text-[#52796F] hover:text-[#1B4332]'
              }`}
            >
              Ejemplo {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Side-by-Side Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. GENOTYPE CARD (INTERNAL CODE) */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30">
                  <Dna className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Genotipo (ADN Interno)
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-900/60 text-purple-200 border border-purple-700/50">
                {pair.genotype.zygosity}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="text-[11px] text-stone-400 font-mono">Fórmula Genómica:</div>
              <div className="text-lg sm:text-xl font-mono font-black text-emerald-400">
                {pair.genotype.formula}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Alelos Presentes en sus Cromosomas:
              </div>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {pair.genotype.alleles.map((al, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{al}</span>
                  </li>
                ))}
              </ul>
            </div>

            {pair.genotype.hiddenCarriers.length > 0 && (
              <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 space-y-1">
                <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Genes Ocultos (Portadores / Splits):</span>
                </div>
                <div className="text-xs text-amber-100 font-medium">
                  {pair.genotype.hiddenCarriers.join(' • ')}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-stone-400 leading-relaxed italic">
            "{pair.genotype.genomicNotes}"
          </div>
        </div>

        {/* 2. PHENOTYPE CARD (EXTERNAL APPEARANCE) */}
        <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-200 text-[#1B4332] space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <Eye className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Fenotipo (Aspecto Observable)
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                Lo que se ve a simple vista
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 space-y-1">
              <div className="text-[11px] text-[#52796F] font-bold uppercase tracking-wider">
                Nombre Fenotípico Estándar:
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#1B4332]">
                {pair.phenotype.visualName}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-white border border-emerald-100 space-y-1">
                <div className="font-bold text-[#2D6A4F]">Color Corporal:</div>
                <p className="text-[#52796F]">{pair.phenotype.bodyColor}</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-emerald-100 space-y-1">
                <div className="font-bold text-[#2D6A4F]">Diseño Alar / Manto:</div>
                <p className="text-[#52796F]">{pair.phenotype.wingPattern}</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-emerald-100 space-y-1">
                <div className="font-bold text-[#2D6A4F]">Máscara y Gulares:</div>
                <p className="text-[#52796F]">{pair.phenotype.maskAndThroat}</p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-emerald-100 space-y-1">
                <div className="font-bold text-[#2D6A4F]">Cera y Patas:</div>
                <p className="text-[#52796F]">{pair.phenotype.cereAndLegs}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-200 text-xs text-[#52796F] leading-relaxed italic">
            "{pair.phenotype.visualNotes}"
          </div>
        </div>

      </div>

    </div>
  );
};
