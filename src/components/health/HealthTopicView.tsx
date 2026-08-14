import React from 'react';
import { HealthCondition, HealthCategory } from '../../types';
import { HEALTH_CONDITIONS_DATA } from '../../data/health';
import { HealthConditionCard } from './HealthConditionCard';
import { MedicalDisclaimer } from './MedicalDisclaimer';
import { 
  Wind, 
  Layers, 
  Bug, 
  Feather, 
  Scissors, 
  Apple, 
  ShieldAlert, 
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

interface TopicConfig {
  id: string;
  categoryKey: HealthCategory | 'all';
  title: string;
  subtitle: string;
  icon: any;
  overview: string;
  anatomicalOrContextNotes: string[];
  keyAdvice: string[];
  toxicOrDangerNotes?: string[];
}

const TOPICS_METADATA: Record<string, TopicConfig> = {
  respiratorio: {
    id: 'respiratorio',
    categoryKey: 'respiratory',
    title: 'Salud del Sistema Respiratorio',
    subtitle: 'Anatomía aviar de sacos aéreos, vulnerabilidad a toxinas y patologías respiratorias.',
    icon: Wind,
    overview:
      'El aparato respiratorio de las aves es el más eficiente y especializado del reino animal, pero también el más frágil ante agresiones externas. A diferencia de los mamíferos, los pulmones del periquito no se expanden; en su lugar, posee nueve sacos aéreos que actúan como fuelles ventilatorios continuos. Cualquier aerosol, gas o corriente directa accede instantáneamente a todo su organismo.',
    anatomicalOrContextNotes: [
      'El aire tarda dos ciclos completos de inspiración-espiración en recorrer todo el sistema de sacos aéreos.',
      'Los periquitos no tienen cuerdas vocales en la laringe; producen sus trinos y sonidos mediante la siringe, situada en la bifurcación traqueal.',
      'La presencia de ruidos o chasquidos durante el descanso siempre es un signo de patología traqueal, siringea o tiroidea.',
    ],
    keyAdvice: [
      'Mantener la jaula estrictamente alejada de la cocina y de zonas con vapores.',
      'Evitar cambios bruscos de temperatura y corrientes de aire directas entre puertas o ventanas.',
      'Asegurar ventilación constante y no usar ambientadores químicos, velas ni humo de tabaco.',
    ],
    toxicOrDangerNotes: [
      'Vapores de PTFE / Teflón sobrecalentado (mortales en minutos).',
      'Monóxido de carbono y humo de tabaco.',
      'Insecticidas en aerosol y productos de limpieza con amoníaco o lejía concentrada.',
    ],
  },
  digestivo: {
    id: 'digestivo',
    categoryKey: 'digestive',
    title: 'Salud y Trastornos del Sistema Digestivo',
    subtitle: 'Buche, proventrículo, molleja, absorción de nutrientes y análisis visual de excrementos.',
    icon: Layers,
    overview:
      'El tubo digestivo del periquito está diseñado para procesar semillas y materia vegetal de forma rápida y eficaz. Se inicia en el pico y buche (almacenamiento y reblandecimiento), pasa al proventrículo (estómago glandular enzimático), a la molleja o ventrículo (estómago muscular con piedrecitas de grit para triturar) y culmina en los intestinos y la cloaca.',
    anatomicalOrContextNotes: [
      'Composición normal de una deyección: fracción fecal sólida tubular (verde/marrón), uratos pastosos (blanco nítido) y orina acuosa transparente.',
      'Diferencia clave: la regurgitación voluntaria es limpia y cariñosa; el vómito patológico va acompañado de movimientos espasmódicos de cuello y plumas sucias en la frente.',
      'La presencia de semillas enteras en las heces indica fallo proventricular o trituración deficiente (sospecha de megabacteriosis).',
    ],
    keyAdvice: [
      'Limpiar los bebederos diariamente para evitar proliferación de levaduras y bacterias.',
      'Proporcionar grit mineral esterilizado con moderación para apoyar la función mecánica de la molleja.',
      'Incorporar verduras ricas en fibra soluble y antioxidantes.',
    ],
  },
  parasitos: {
    id: 'parasitos',
    categoryKey: 'parasitic',
    title: 'Parásitos Externos e Internos',
    subtitle: 'Identificación de ácaros de la cera (Knemidokoptes), ácaros traqueales, coccidios y bioseguridad.',
    icon: Bug,
    overview:
      'Los parásitos pueden habitar en la piel desprovista de plumas (ácaros excavadores), en las plumas (piojillo rojo o malófagos), en el tracto respiratorio (esternostomas) o en el interior del intestino (coccidios y giardias). La mayoría se transmiten por contacto directo entre aves o por falta de cuarentena.',
    anatomicalOrContextNotes: [
      'Knemidokoptes pilae excava túneles microscópicos en la queratina viva de la cera, pico y patas, produciendo costras con aspecto de esponja.',
      'El piojillo rojo (Dermanyssus gallinae) se oculta de día en las grietas de la jaula y ataca de noche a las aves para chupar sangre, causando anemia severa en polluelos.',
      'Los parásitos internos provocan malabsorción y heces blandas o fétidas.',
    ],
    keyAdvice: [
      'Revisar periódicamente la cera, patas y el contorno de los ojos.',
      'Desinfectar las jaulas con regularidad desmontando los posaderos.',
      'Aplicar únicamente antiparasitarios recetados por el veterinario especialista en dosis exactas para el peso del ave.',
    ],
  },
  plumaje: {
    id: 'plumaje',
    categoryKey: 'plumage',
    title: 'Salud del Plumaje y Muda',
    subtitle: 'Estructura de la pluma, ciclos naturales de muda, picaje y cuidado dermatológico.',
    icon: Feather,
    overview:
      'El plumaje del periquito no solo le permite volar, sino que actúa como aislante térmico vital, impermeabilizante y herramienta de comunicación social. Las plumas están compuestas por queratina dura y se renuevan periódicamente mediante mudas naturales que requieren gran energía metabólica.',
    anatomicalOrContextNotes: [
      'Durante la muda natural se aprecian cañones blanquecinos ("pines") cubiertos de queratina cerosa en la cabeza y cuello.',
      'La muda fisiológica no deja calvas visibles; si aparecen zonas sin plumas en el pecho o flancos, debe investigarse picaje, parásitos o estrés.',
      'El baño con agua fresca estimula el acicalamiento y ayuda a desprender las vainas de los nuevos cañones.',
    ],
    keyAdvice: [
      'Ofrecer bañera con agua fresca 2 o 3 veces por semana.',
      'Aumentar el aporte de proteínas y aminoácidos (espinacas, brócoli, pasta de cría de calidad) durante periodos de muda intensa.',
      'Garantizar 10-12 horas de descanso nocturno sin interrupciones para reducir el estrés.',
    ],
  },
  'patas-pico': {
    id: 'patas-pico',
    categoryKey: 'feet_beak',
    title: 'Cuidado de Patas, Pico y Uñas',
    subtitle: 'Prevención de pododermatitis, perchas ergonómicas y desgaste natural de la ranfoteca.',
    icon: Scissors,
    overview:
      'Las patas y el pico son las principales herramientas mecánicas del periquito. El pico crece continuamente durante toda su vida y debe desgastarse armónicamente al masticar ramas y frotar las mandíbulas. Las patas soportan su peso las 24 horas del día, por lo que la elección de las perchas es decisiva para su bienestar.',
    anatomicalOrContextNotes: [
      'Las perchas de plástico uniforme ejercen presión continua siempre sobre los mismos puntos de la planta del pie, provocando callos y pododermatitis.',
      'Las fundas de lija abrasiva en las perchas desgastan dolorosamente la piel de la almohadilla plantar en lugar de las uñas.',
      'El pico sobrecrecido suele ser consecuencia de falta de ramas naturales, secuela de ácaros o sobrecarga hepática.',
    ],
    keyAdvice: [
      'Sustituir todas las perchas de plástico por ramas naturales de árboles frutales o maderas seguras no tratadas.',
      'Disponer siempre de un bloque de calcio o jibia para el acondicionamiento del pico.',
      'No recortar el pico en casa; debe hacerlo un veterinario con instrumental especializado.',
    ],
  },
  nutricion: {
    id: 'nutricion',
    categoryKey: 'nutrition',
    title: 'Nutrición, Minerales y Alimentos Tóxicos',
    subtitle: 'Prevención del bocio por yodo, equilibrio del calcio/D3 y alimentos prohibidos mortales.',
    icon: Apple,
    overview:
      'Una dieta basada exclusivamente en semillas simples (mixtura monótona) es la principal causa de desnutrición crónica en periquitos. Provoca carencias graves de vitamina A, déficit de yodo (bocio) y problemas en el metabolismo del calcio y fósforo.',
    anatomicalOrContextNotes: [
      'El déficit de yodo causa el agrandamiento de la tiroides, que comprime la tráquea provocando siseos y chasquidos al respirar.',
      'El calcio sin vitamina D3 (o sin luz solar natural sin filtrar por cristales) no puede asimilarse adecuadamente en los huesos.',
      'El exceso de semillas grasas (como el girasol o la avena en exceso) induce hígado graso y lipomas subcutáneos.',
    ],
    keyAdvice: [
      'Ofrecer a diario verduras frescas de hoja verde oscura (espinacas, acelgas, canónigos) y hortalizas variadas.',
      'Tener siempre un bloque mineral con yodo y un hueso de sepia en la jaula.',
      'Proporcionar luz natural indirecta o bombillas de espectro aviar UVB para la síntesis de vitamina D3.',
    ],
    toxicOrDangerNotes: [
      'Aguacate / Palta (contiene persina, cardiotóxico mortal).',
      'Chocolate, cacao y café (contienen teobromina y cafeína).',
      'Semillas de manzana, peras y huesos de melocotón/ciruela (contienen cianuro).',
      'Cebolla, ajo y puerro (provocan anemia hemolítica).',
      'Alcohol, sal refinada y alimentos procesados con azúcares.',
    ],
  },
};

interface Props {
  topicId: string;
  onBack: () => void;
  onOpenCondition: (condition: HealthCondition) => void;
}

export const HealthTopicView: React.FC<Props> = ({ topicId, onBack, onOpenCondition }) => {
  const config = TOPICS_METADATA[topicId] || TOPICS_METADATA['respiratorio'];
  const Icon = config.icon;

  // Find matching conditions for this topic
  const relatedConditions = HEALTH_CONDITIONS_DATA.filter((cond) => {
    if (config.categoryKey === 'all') return true;
    if (cond.category === config.categoryKey) return true;
    if (topicId === 'patas-pico' && (cond.category === 'feet_beak' || cond.category === 'skin')) return true;
    if (topicId === 'nutricion' && cond.category === 'nutrition') return true;
    return false;
  });

  return (
    <div className="space-y-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#1B4332] hover:bg-slate-50 transition-colors shadow-2xs"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a la Biblioteca de Salud</span>
      </button>

      {/* Hero Topic Header */}
      <div className="bg-[#1B4332] text-white rounded-3xl p-6 sm:p-10 border border-[#2D6A4F]/80 shadow-md space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] text-[#B7E4C7] flex items-center justify-center border border-[#40916C]/40 shadow-sm">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#B7E4C7] font-bold block">
              Guía Temática Especializada
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {config.title}
            </h2>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#D8E2DC] leading-relaxed max-w-3xl">
          {config.overview}
        </p>
      </div>

      <MedicalDisclaimer variant="banner" />

      {/* Anatomy and Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Notes & Anatomy */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-base font-bold text-[#1B4332] font-display flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#2D6A4F]" />
            Aspectos Biológicos y Observación
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {config.anatomicalOrContextNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] mt-2 shrink-0" />
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practical Advice */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-base font-bold text-emerald-900 font-display flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Recomendaciones Clave de Cuidado
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {config.keyAdvice.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{adv}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Toxic Warnings if present */}
      {config.toxicOrDangerNotes && (
        <div className="bg-rose-50/80 p-6 rounded-2xl border border-rose-200 shadow-2xs space-y-3">
          <h3 className="text-base font-bold text-rose-950 font-display flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            Peligros Críticos y Sustancias Tóxicas en esta Área
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-rose-900">
            {config.toxicOrDangerNotes.map((tox, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-rose-100">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span>{tox}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Conditions in this category */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-[#1B4332] font-display">
            Fichas Clínicas Relacionadas ({relatedConditions.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedConditions.map((condition) => (
            <HealthConditionCard
              key={condition.id}
              condition={condition}
              onOpen={onOpenCondition}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
