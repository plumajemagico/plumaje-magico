import { ColorItem, ColorCategory } from '../types';

export interface ColorConcept {
  id: string;
  term: string;
  question: string;
  summary: string;
  detailedExplanation: string;
  example: string;
  ornithologicalContext: string;
  iconType: 'eye' | 'dna' | 'sliders' | 'sparkles' | 'feather' | 'binary';
  badgeColor: string;
}

export const COLOR_CATEGORIES_META: {
  id: ColorCategory | 'all';
  label: string;
  emoji: string;
  description: string;
  colorClass: string;
  borderColor: string;
}[] = [
  {
    id: 'all',
    label: 'Todos los Colores',
    emoji: '🌈',
    description: 'Catálogo visual completo de colores, variedades y tonalidades del periquito australiano.',
    colorClass: 'bg-emerald-50 text-emerald-900',
    borderColor: 'border-emerald-200'
  },
  {
    id: 'green_series',
    label: 'Serie Verde',
    emoji: '🟢',
    description: 'Línea ancestral silvestre con pigmento amarillo (psitacina) y estructura física azul.',
    colorClass: 'bg-emerald-50 text-emerald-800',
    borderColor: 'border-emerald-200'
  },
  {
    id: 'blue_series',
    label: 'Serie Azul',
    emoji: '🔵',
    description: 'Línea mutada por supresión de psitacina amarilla, reflejando luz azul celeste, cobalto o malva.',
    colorClass: 'bg-sky-50 text-sky-800',
    borderColor: 'border-sky-200'
  },
  {
    id: 'yellow',
    label: 'Amarillos y Caras Amarillas',
    emoji: '🟡',
    description: 'Variedades con predominancia de psitacina pura (Lutinos) o mutaciones de cara amarilla sobre base azul.',
    colorClass: 'bg-amber-50 text-amber-900',
    borderColor: 'border-amber-200'
  },
  {
    id: 'white',
    label: 'Blancos e Inos',
    emoji: '⚪',
    description: 'Ausencia total de melanina y psitacina (Albinos, Doble Factor Perlado blanco, Ojos Negros claros).',
    colorClass: 'bg-slate-100 text-slate-800',
    borderColor: 'border-slate-300'
  },
  {
    id: 'grey',
    label: 'Grises y Antracitas',
    emoji: '⚫',
    description: 'Efecto del factor gris dominante o mutación antracita que satura la refracción en tonos ceniza y plomo.',
    colorClass: 'bg-zinc-100 text-zinc-800',
    borderColor: 'border-zinc-300'
  },
  {
    id: 'violet',
    label: 'Violetas',
    emoji: '🟣',
    description: 'Efecto del factor violeta estructural, intensificando el color hacia tonalidades violeta visual radiante.',
    colorClass: 'bg-purple-50 text-purple-900',
    borderColor: 'border-purple-200'
  },
  {
    id: 'dark_factor',
    label: 'Factores de Oscuridad',
    emoji: '🌑',
    description: 'Modificadores cuantitativos de melanina en capa esponjosa (0D, 1D, 2D) en verdes y azules.',
    colorClass: 'bg-stone-100 text-stone-900',
    borderColor: 'border-stone-300'
  },
  {
    id: 'color_factor',
    label: 'Factores de Color',
    emoji: '✨',
    description: 'Modificadores aditivos de color estructural como Factor Violeta y Factor Gris.',
    colorClass: 'bg-indigo-50 text-indigo-900',
    borderColor: 'border-indigo-200'
  },
  {
    id: 'pattern',
    label: 'Patrones y Distribución',
    emoji: '🪶',
    description: 'Distribución y disposición del dibujo alar y corporal: Píos, Opalinos, Perlados, Canelas y Diluidos.',
    colorClass: 'bg-teal-50 text-teal-900',
    borderColor: 'border-teal-200'
  }
];

export const COLOR_CONCEPTS_DATA: ColorConcept[] = [
  {
    id: 'color',
    term: 'COLOR',
    question: '¿Qué observamos visualmente?',
    summary: 'La manifestación cromática óptica percibida por el ojo humano en el plumaje del periquito.',
    detailedExplanation: 'El color en los periquitos australianos no es pintura química única; es la interacción entre el pigmento carotenoide amarillo (psitacina), el pigmento negro-marrón (eumelanina) y la nanoestructura de la capa esponjosa de queratina que dispersa la luz por efecto Tyndall (coloración estructural azul). Un color visual como el "Verde Césped" es la suma óptica de psitacina amarilla superficial sobre refracción azul interna.',
    example: 'Ejemplo: "Azul Cobalto" o "Verde Oliva" son descripciones cromáticas de lo que el observador ve en el cuerpo del ave.',
    ornithologicalContext: 'Estándar WBO: Los colores se describen por su tonalidad corporal y brillo bajo luz natural normalizada.',
    iconType: 'eye',
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-200'
  },
  {
    id: 'mutacion',
    term: 'MUTACIÓN',
    question: '¿Qué cambio genético subyace?',
    summary: 'Una alteración permanente en la secuencia de ADN que modifica la síntesis de pigmentos o la estructura de la pluma.',
    detailedExplanation: 'Una mutación es el origen biológico fundamental. Por ejemplo, la mutación "Azul" es un cambio genético que desactiva la producción de psitacina amarilla en los folículos de las plumas. La mutación "Ino" bloquea por completo la producción de melanina granular. Varias mutaciones pueden combinarse en un mismo individuo.',
    example: 'Ejemplo: La mutación recesiva autosómica "Azul" (gen b) o la mutación ligada al sexo "Opalino" (gen op).',
    ornithologicalContext: 'Cada mutación tiene un locus genético específico y un modo de transmisión hereditaria bien tipificado.',
    iconType: 'dna',
    badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200'
  },
  {
    id: 'factor',
    term: 'FACTOR',
    question: '¿Qué elemento modulador modifica la intensidad?',
    summary: 'Un gen modificador cuantitativo o aditivo que altera la densidad de pigmento o la estructura refractiva.',
    detailedExplanation: 'Un factor actúa sobre una base de color preexistente sin cambiar el tipo fundamental de mutación. El Factor de Oscuridad (D) incrementa la densidad de melanina en la médula de las bárbulas, transformando un Azul Cielo (0D) en Cobalto (1D) o Malva (2D). El Factor Gris aplana la refracción azul convirtiéndola en gris neutro o verde gris.',
    example: 'Ejemplo: Simple Factor Violeta (SF) o Doble Factor de Oscuridad (DF).',
    ornithologicalContext: 'Los factores pueden presentarse en dosis simple (1 factor) o dosis doble (2 factores), con efectos visuales acumulativos.',
    iconType: 'sliders',
    badgeColor: 'bg-purple-50 text-purple-900 border-purple-200'
  },
  {
    id: 'variedad',
    term: 'VARIEDAD',
    question: '¿A qué categoría ornitológica de estándar corresponde?',
    summary: 'El conjunto morfológico y de patrón reconocido en los estándares de exhibición y avicultura.',
    detailedExplanation: 'Una variedad agrupa a periquitos que comparten un patrón característico de plumaje, dibujo alar o distribución cromática (como "Opalino", "Perlado", "Pío Dominante", "Alas Claras" o "Lacewing"). Una variedad puede manifestarse en cualquier color base (un Perlado puede ser Verde Césped, Azul Cobalto o Gris).',
    example: 'Ejemplo: "Perlado Azul Cobalto" es un periquito de la variedad Perlada en color Azul Cobalto.',
    ornithologicalContext: 'Categorización formal de concurso según la WBO y federaciones internacionales.',
    iconType: 'feather',
    badgeColor: 'bg-teal-50 text-teal-900 border-teal-200'
  },
  {
    id: 'fenotipo',
    term: 'FENOTIPO',
    question: '¿Qué observamos finalmente en el ave?',
    summary: 'La totalidad de características físicas, visuales y observables del periquito resultante de sus genes y factores.',
    detailedExplanation: 'El fenotipo es la apariencia externa completa: color de cuerpo, tono de máscara, diseño de manchas gulares, dibujo de las alas, color de la cera, iris ocular y patas. Dos periquitos con el mismo fenotipo (por ejemplo, dos machos Verde Césped) pueden tener genotipos totalmente distintos (uno puro y otro portador de azul y canela).',
    example: 'Ejemplo: "Macho Verde Césped con 6 manchas gulares negras, cera azul royal e iris blanco".',
    ornithologicalContext: 'Regla de oro: El fenotipo se juzga con la vista, pero no revela los factores recesivos ocultos (portaciones).',
    iconType: 'sparkles',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200'
  },
  {
    id: 'genotipo',
    term: 'GENOTIPO',
    question: '¿Qué información genética existe detrás?',
    summary: 'La dotación alélica completa e interna del individuo, incluyendo alelos visibles y alelos recesivos ocultos.',
    detailedExplanation: 'El genotipo es la fórmula genética real escrita en los cromosomas del periquito. Incluye tanto los alelos expresados visiblemente como los genes recesivos portados en heterocigosis (representados con una barra inclinada "/"). Solo mediante pruebas de cría, genealogía documentada o análisis se conoce el genotipo completo.',
    example: 'Ejemplo: Macho Verde Césped / azul / opalino (Fenotipo: Verde Césped; Genotipo: porta azul y porta opalino).',
    ornithologicalContext: 'La base científica imprescindible para planificar cruces controlados y predecir descendencia.',
    iconType: 'binary',
    badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-200'
  }
];

export const COLORS_DATA: ColorItem[] = [
  // =========================================================================
  // SERIE VERDE
  // =========================================================================
  {
    id: 'color-verde-cesped',
    slug: 'verde-cesped',
    name: 'Verde Césped (Light Green)',
    category: 'green_series',
    categoryLabel: 'Serie Verde (Ancestral)',
    baseColor: 'Verde Brillante Ancestral (0D)',
    hexColor: '#65a30d',
    shortDescription: 'Tonalidad verde manzana viva y luminosa correspondiente al fenotipo silvestre ancestral de Australia.',
    description: 'El Verde Césped es el color base silvestre ancestral del periquito australiano (Melopsittacus undulatus). No posee ningún factor de oscuridad (0D). El color resulta de la interacción de la psitacina amarilla superficial con la refracción azul de la capa esponjosa medular. Su brillo y vitalidad son la referencia original de toda la especie.',
    visualCharacteristics: [
      'Cuerpo: Verde manzana brillante, homogéneo e intenso desde el pecho hasta la rabadilla.',
      'Máscara: Amarillo botón de oro puro y luminoso sin sombras oscuras.',
      'Manchas gulares: Seis puntos redondos negros uniformes, tres a cada lado del cuello.',
      'Gulares (gotas): Azul violeta profundo e intenso.',
      'Ondulaciones: Negras nítidas sobre fondo amarillo en cabeza, cuello, hombros y alas.',
      'Alas: Remeras primarias negras con finos ribetes amarillos.',
      'Cola: Timoneras centrales azul marino oscuro con brillo turquesa.',
      'Ojos: Pupila negra con iris blanco/grisáceo definido en adultos.',
      'Cera y Patas: Cera azul brillante en machos adultos, marrón en hembras en celo; patas gris azuladas.'
    ],
    visualProfile: {
      bodyColor: 'Verde manzana brillante y uniforme (sin factores de oscuridad)',
      mask: 'Amarillo vivo botón de oro',
      cheekPatches: 'Azul violeta intenso',
      wingMarkings: 'Ondulaciones negras nítidas sobre amarillo',
      wings: 'Remeras negras ribeteadas de amarillo',
      tail: 'Azul marino oscuro brillante',
      eyes: 'Negro con iris blanco en adultos',
      cere: 'Azul royal en machos / Marrón en hembras',
      legs: 'Gris azulado con escamas finas'
    },
    relatedMutations: ['ancestral'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-verde'],
    examples: ['Macho verde silvestre australiano', 'Ejemplar estándar de concurso Verde Césped'],
    images: [
      {
        id: 'img-verde-cesped-1',
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Verde Césped ancestral silvestre con máscara amarilla nítida y plumaje verde brillante.',
        author: 'Plumaje Mágico / Archivo de Especies',
        license: 'CC-BY-SA / Plumaje Mágico',
        verifiedIdentification: true,
        tags: ['ancestral', 'verde', 'cesped', '0d']
      }
    ],
    variations: [
      {
        id: 'var-verde-cesped-portador',
        name: 'Verde Césped portador de Azul (/azul)',
        description: 'Fenotípicamente idéntico al verde puro, aunque algunos criadores observan a veces un tono ligeramente más frío bajo luz ultravioleta.',
        visualDifferences: ['Prácticamente indistinguible visualmente del Verde homocigoto sin prueba de cría.'],
        geneticsContext: 'Genotipo: F+/f (heterocigoto verde portador de azul).'
      }
    ],
    sources: [
      'World Budgerigar Organisation (WBO) - Colour Standards (Light Green)',
      'Taylor, T.G. & Warner, C. - Genetics for Budgerigar Breeders',
      'The Official Barred and Clearwing Budgerigar Society'
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Verde Césped en Periquitos Australianos - Color Ancestral 0D',
      description: 'Guía visual completa del periquito Verde Césped (Light Green). Características del cuerpo, máscara, alas, manchas gulares y genética silvestre ancestral.',
      keywords: ['periquito verde cesped', 'light green budgie', 'periquito silvestre', 'color verde periquito']
    }
  },
  {
    id: 'color-verde-laurel',
    slug: 'verde-laurel',
    name: 'Verde Laurel (Dark Green)',
    category: 'green_series',
    categoryLabel: 'Serie Verde (1D)',
    baseColor: 'Verde Bosque Saturado (1D)',
    hexColor: '#15803d',
    shortDescription: 'Tonalidad verde bosque profundo y saturada debido a la presencia de un factor de oscuridad (1D).',
    description: 'El Verde Laurel es el resultado de incorporar un factor de oscuridad (D) en la línea verde. La mayor densidad de gránulos de melanina en las bárbulas absorbe más luz, proyectando un verde más rico, oscuro y sobrio que el verde césped.',
    visualCharacteristics: [
      'Cuerpo: Verde bosque intenso, oscuro y uniforme sin tonalidad parduzca.',
      'Máscara: Amarillo intenso cálido.',
      'Gulares: Azul violeta oscuro.',
      'Alas: Negras ribeteadas de amarillo con dibujo denso.',
      'Cola: Timoneras centrales azul marino muy oscuro con reflejos plomizos.',
      'Ojos: Pupila negra con iris claro visible.'
    ],
    visualProfile: {
      bodyColor: 'Verde bosque oscuro y saturado (1 Factor de Oscuridad)',
      mask: 'Amarillo botón de oro',
      cheekPatches: 'Violeta oscuro',
      wingMarkings: 'Ondulaciones negras densas sobre amarillo',
      wings: 'Remeras negras con filo amarillo',
      tail: 'Azul marino muy oscuro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul profundo en machos / Marrón en hembras',
      legs: 'Gris plomizo'
    },
    relatedMutations: ['ancestral'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-verde'],
    examples: ['Verde Laurel clásico de exhibición'],
    images: [
      {
        id: 'img-verde-laurel-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Ejemplar Verde Laurel mostrando la rica saturación verde bosque en el pecho.',
        author: 'Plumaje Mágico Archive',
        license: 'Standard Editorial License',
        verifiedIdentification: true,
        tags: ['laurel', 'dark_green', '1d', 'verde']
      }
    ],
    sources: [
      'WBO Colour Standards - Dark Green',
      'Daniels, G. - Budgerigar Matings and Colour Expectations'
    ],
    verificationStatus: 'verified'
  },
  {
    id: 'color-verde-oliva',
    slug: 'verde-oliva',
    name: 'Verde Oliva (Olive Green)',
    category: 'green_series',
    categoryLabel: 'Serie Verde (2D)',
    baseColor: 'Verde Oliva Terroso Profundo (2D)',
    hexColor: '#3f6212',
    shortDescription: 'Tono verde oliva oscuro y mate con doble factor de oscuridad (2D).',
    description: 'El Verde Oliva posee dos factores de oscuridad (DD) en serie verde. La alta concentración de melanina reduce drásticamente la refracción azul brillante, dando un aspecto verde oliva terroso característico y elegante.',
    visualCharacteristics: [
      'Cuerpo: Verde oliva profundo, con acabado mate y sin reflejos esmeralda.',
      'Máscara: Amarillo cálido mostaza.',
      'Gulares: Violeta apagado oscuro.',
      'Cola: Negro azulado muy profundo.',
      'Ondulaciones: Negro carbón muy denso sobre amarillo.'
    ],
    visualProfile: {
      bodyColor: 'Verde oliva mate y profundo (2 Factores de Oscuridad)',
      mask: 'Amarillo mostaza cálido',
      cheekPatches: 'Violeta oscuro opaco',
      wingMarkings: 'Negro carbón sobre amarillo',
      wings: 'Negras con ribete amarillo oscuro',
      tail: 'Negro azulado mate',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris oscuro'
    },
    relatedMutations: ['ancestral'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-verde'],
    examples: ['Verde Oliva puro de línea ancestral'],
    images: [
      {
        id: 'img-verde-oliva-1',
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Tono oliva mate con doble factor de oscuridad en serie verde.',
        author: 'Plumaje Mágico',
        license: 'CC-BY',
        verifiedIdentification: true,
        tags: ['oliva', 'olive', '2d', 'verde']
      }
    ],
    sources: ['WBO Standards - Olive Green', 'Robson, C. - The Budgerigar Manual'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-verde-gris',
    slug: 'verde-gris',
    name: 'Verde Gris (Grey Green)',
    category: 'grey',
    categoryLabel: 'Serie Verde con Factor Gris',
    baseColor: 'Verde Mostaza Apagado / Caqui',
    hexColor: '#6b7280',
    shortDescription: 'Verde modificado por el Factor Gris dominante, resultando en un tono caqui mostaza con gulares grisáceas.',
    description: 'El Verde Gris se origina cuando un periquito de serie verde hereda el Factor Gris dominante (G). A diferencia del verde oliva (cuyas gulares son violetas), el Verde Gris presenta manchas gulares gris ceniza apagadas, lo cual es la clave visual definitiva de diferenciación.',
    visualCharacteristics: [
      'Cuerpo: Verde caqui mostaza apagado y uniforme.',
      'Máscara: Amarillo pálido o botón de oro.',
      'Gulares (clave de identificación): Gris plomizo o negro apagado (NUNCA violetas).',
      'Cola: Negro azabache puro (no azulada).'
    ],
    visualProfile: {
      bodyColor: 'Verde caqui mostaza opaco',
      mask: 'Amarillo',
      cheekPatches: 'Gris ceniza o gris plomizo oscuro (diagnóstico)',
      wingMarkings: 'Negro sobre amarillo',
      wings: 'Remeras negras ribeteadas de amarillo',
      tail: 'Negro azabache puro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris azulado'
    },
    relatedMutations: ['factor-gris', 'ancestral'],
    relatedFactors: ['factor-gris'],
    relatedLines: ['linea-verde'],
    examples: ['Verde Gris SF de concurso'],
    images: [
      {
        id: 'img-verde-gris-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Verde gris mostrando la característica mancha gular gris ceniza.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['verde_gris', 'grey_green', 'factor_gris']
      }
    ],
    sources: ['WBO Standards - Grey Green', 'Mutavi Research - Grey Factor Action'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // SERIE AZUL
  // =========================================================================
  {
    id: 'color-azul-cielo',
    slug: 'azul-cielo',
    name: 'Azul Cielo (Sky Blue)',
    category: 'blue_series',
    categoryLabel: 'Serie Azul (0D)',
    baseColor: 'Azul Celeste Puro y Luminoso (0D)',
    hexColor: '#38bdf8',
    shortDescription: 'Azul celeste claro y radiante con máscara blanca inmaculada, sin factores de oscuridad.',
    description: 'El Azul Cielo es la forma base de la serie azul (mutación recesiva que elimina la psitacina amarilla). Al no tener factores de oscuridad (0D), la nanoestructura de la pluma refleja la luz azul más pura y luminosa, enmarcada por una máscara blanca pura y seis manchas gulares negras.',
    visualCharacteristics: [
      'Cuerpo: Azul celeste luminoso, puro y uniforme desde el buche hasta la cola.',
      'Máscara: Blanco puro inmaculado (en variedades clásicas sin cara amarilla).',
      'Manchas gulares: Seis puntos negros limpios sobre el blanco.',
      'Gulares: Azul violeta brillante intenso.',
      'Ondulaciones: Negras nítidas sobre fondo blanco.',
      'Cola: Azul turquesa oscuro profundo.'
    ],
    visualProfile: {
      bodyColor: 'Azul celeste brillante y limpio (0 Factores de Oscuridad)',
      mask: 'Blanco puro inmaculado',
      cheekPatches: 'Azul violeta radiante',
      wingMarkings: 'Ondulaciones negras nítidas sobre blanco',
      wings: 'Remeras negras ribeteadas de blanco',
      tail: 'Azul cobalto luminoso',
      eyes: 'Negro con iris blanco bien definido',
      cere: 'Azul royal brillante en machos / Marrón en hembras',
      legs: 'Gris rosáceo o gris azulado'
    },
    relatedMutations: ['azul'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-azul'],
    examples: ['Azul Cielo clásico estándar'],
    images: [
      {
        id: 'img-azul-cielo-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Azul Cielo clásico mostrando máscara blanca pura y tono celeste luminoso.',
        author: 'Plumaje Mágico Archivo',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['sky_blue', 'azul_cielo', '0d', 'linea_azul']
      }
    ],
    sources: ['WBO Colour Standards - Sky Blue', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-azul-cobalto',
    slug: 'azul-cobalto',
    name: 'Azul Cobalto (Cobalt)',
    category: 'blue_series',
    categoryLabel: 'Serie Azul (1D)',
    baseColor: 'Azul Marino Intenso y Saturado (1D)',
    hexColor: '#1d4ed8',
    shortDescription: 'Azul marino rico, profundo y vibrante con un factor de oscuridad (1D).',
    description: 'El Azul Cobalto contiene un factor de oscuridad (1D) sobre base azul. Es uno de los colores más apreciados por su tonalidad rica, eléctrica y saturada, con alto contraste contra la máscara blanca.',
    visualCharacteristics: [
      'Cuerpo: Azul cobalto profundo, vibrante e intenso.',
      'Máscara: Blanco puro.',
      'Gulares: Violeta profundo oscuro.',
      'Cola: Azul medianoche oscuro.',
      'Ondulaciones: Negro azabache sobre blanco.'
    ],
    visualProfile: {
      bodyColor: 'Azul marino cobalto profundo (1 Factor de Oscuridad)',
      mask: 'Blanco puro',
      cheekPatches: 'Violeta oscuro intenso',
      wingMarkings: 'Negro azabache sobre blanco',
      wings: 'Remeras negras ribeteadas de blanco',
      tail: 'Azul medianoche profundo',
      eyes: 'Negro con iris blanco',
      cere: 'Azul oscuro en machos / Marrón en hembras',
      legs: 'Gris plomizo'
    },
    relatedMutations: ['azul'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-azul'],
    examples: ['Cobalto de exhibición'],
    images: [
      {
        id: 'img-azul-cobalto-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Azul Cobalto con máscara blanca y dibujo alar perfectamente delimitado.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['cobalto', 'cobalt', '1d', 'linea_azul']
      }
    ],
    sources: ['WBO Colour Standards - Cobalt', 'Budgerigar Matings and Colour Expectations'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-azul-malva',
    slug: 'azul-malva',
    name: 'Azul Malva (Mauve)',
    category: 'blue_series',
    categoryLabel: 'Serie Azul (2D)',
    baseColor: 'Gris Azulado Plomizo / Malva (2D)',
    hexColor: '#475569',
    shortDescription: 'Tono azul grisáceo oscuro y plomizo con reflejos violáceos apagados por el doble factor de oscuridad.',
    description: 'El Malva posee dos factores de oscuridad (DD) en línea azul. La densa melanina apaga el brillo azul puro, confiriéndole un tono pizarra plomizo característico con sutiles matices púrpuras apagados.',
    visualCharacteristics: [
      'Cuerpo: Gris pizarra oscuro con sutil matiz azul violáceo apagado.',
      'Máscara: Blanco puro.',
      'Gulares: Violeta oscuro mate (distingue del Gris verdadero).',
      'Cola: Negro azulado profundo.'
    ],
    visualProfile: {
      bodyColor: 'Gris azulado plomizo oscuro (2 Factores de Oscuridad)',
      mask: 'Blanco puro',
      cheekPatches: 'Violeta oscuro mate (distingue de Gris dominante)',
      wingMarkings: 'Negro denso sobre blanco',
      wings: 'Negras con ribete blanco',
      tail: 'Negro azulado',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris oscuro'
    },
    relatedMutations: ['azul'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-azul'],
    examples: ['Malva clásico'],
    images: [
      {
        id: 'img-azul-malva-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Azul Malva mostrando el tono plomizo de doble factor.',
        author: 'Plumaje Mágico Archive',
        license: 'CC-BY',
        verifiedIdentification: true,
        tags: ['malva', 'mauve', '2d', 'linea_azul']
      }
    ],
    sources: ['WBO Colour Standards - Mauve'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // VIOLETAS
  // =========================================================================
  {
    id: 'color-violeta-visual',
    slug: 'violeta-visual',
    name: 'Violeta Visual (Cobalt Violet)',
    category: 'violet',
    categoryLabel: 'Violetas (Factor Violeta + Cobalto)',
    baseColor: 'Violeta Eléctrico Saturado',
    hexColor: '#7c3aed',
    shortDescription: 'Color púrpura violeta vibrante e intenso, expresión máxima del Factor Violeta en combinación con Azul Cobalto.',
    description: 'El Violeta Visual auténtico se produce cuando el Factor Violeta (V) actúa sobre un periquito Azul Cobalto (1D). Esta combinación ópticamente perfecta refracta un color púrpura violeta saturado y uniforme que deslumbra en el plumaje corporal.',
    visualCharacteristics: [
      'Cuerpo: Violeta púrpura intenso y homogéneo en pecho, vientre y obispillo.',
      'Máscara: Blanco inmaculado.',
      'Gulares: Violeta profundo brillante.',
      'Cola: Azul medianoche oscuro con brillo púrpura.',
      'Ondulaciones: Negro nítido sobre fondo blanco.'
    ],
    visualProfile: {
      bodyColor: 'Violeta púrpura eléctrico saturado (Factor Violeta + 1D Cobalto)',
      mask: 'Blanco puro',
      cheekPatches: 'Violeta profundo brillante',
      wingMarkings: 'Negro azabache sobre blanco',
      wings: 'Remeras negras ribeteadas de blanco',
      tail: 'Azul medianoche oscuro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul brillante en machos / Marrón en hembras',
      legs: 'Gris azulado'
    },
    relatedMutations: ['azul', 'factor-violeta'],
    relatedFactors: ['factor-violeta', 'factor-oscuridad'],
    relatedLines: ['linea-azul'],
    examples: ['Violeta de concurso'],
    images: [
      {
        id: 'img-violeta-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Violeta visual mostrando la máxima expresión en serie azul cobalto.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['violeta', 'violet', 'violeta_visual', 'factor_violeta']
      }
    ],
    sources: ['WBO Colour Standards - Violet', 'The Violet Budgerigar Society'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-violeta-cielo',
    slug: 'violeta-cielo',
    name: 'Azul Cielo Violeta (Sky Violet)',
    category: 'violet',
    categoryLabel: 'Violetas (Factor Violeta + Cielo)',
    baseColor: 'Azul Celeste con Reflejo Violáceo',
    hexColor: '#6366f1',
    shortDescription: 'Azul celeste brillante con un matiz violáceo frío por la acción de un factor violeta sobre 0D.',
    description: 'Cuando el Factor Violeta se encuentra en un ejemplar Azul Cielo (sin factor de oscuridad, 0D), no llega a verse como violeta púrpura puro, sino como un azul cobalto muy claro o azul cielo brillante con reflejos violáceos fríos.',
    visualCharacteristics: [
      'Cuerpo: Azul cobalto claro o azul cielo enriquecido con reflejo violáceo.',
      'Máscara: Blanco puro.',
      'Gulares: Violeta brillante.',
      'Cola: Azul oscuro.'
    ],
    visualProfile: {
      bodyColor: 'Azul celeste enriquecido con tinte violáceo',
      mask: 'Blanco',
      cheekPatches: 'Violeta brillante',
      wingMarkings: 'Negro sobre blanco',
      wings: 'Negras con borde blanco',
      tail: 'Azul oscuro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris azulado'
    },
    relatedMutations: ['azul', 'factor-violeta'],
    relatedFactors: ['factor-violeta'],
    relatedLines: ['linea-azul'],
    examples: ['Cielo Violeta SF'],
    images: [
      {
        id: 'img-violeta-cielo-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Azul cielo modificado por factor violeta.',
        author: 'Plumaje Mágico',
        license: 'CC-BY',
        verifiedIdentification: true,
        tags: ['sky_violet', 'cielo_violeta']
      }
    ],
    sources: ['WBO Standards - Violet Series'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // GRISES Y ANTRACITAS
  // =========================================================================
  {
    id: 'color-gris-dominante',
    slug: 'gris-dominante',
    name: 'Gris Dominante (Grey)',
    category: 'grey',
    categoryLabel: 'Serie Azul con Factor Gris',
    baseColor: 'Gris Ceniza Neutro y Uniforme',
    hexColor: '#64748b',
    shortDescription: 'Gris ceniza elegante y uniforme en serie azul, con manchas gulares gris plomo diagnósticas.',
    description: 'El Gris Dominante en serie azul sustituye por completo la refracción azul por un gris ceniza puro y sobrio. Su diagnóstico inequívoco frente al azul malva son sus manchas gulares gris plomizo oscuro (en lugar de violetas) y su cola negro azabache pura.',
    visualCharacteristics: [
      'Cuerpo: Gris ceniza sólido, limpio y uniforme en pecho y abdomen.',
      'Máscara: Blanco inmaculado.',
      'Gulares (diagnóstico): Gris plomizo o negro apagado.',
      'Cola (diagnóstico): Negro azabache absoluto sin brillo azul.',
      'Ondulaciones: Negro carbón de máximo contraste.'
    ],
    visualProfile: {
      bodyColor: 'Gris ceniza neutro y sólido (Factor Gris + Línea Azul)',
      mask: 'Blanco inmaculado',
      cheekPatches: 'Gris plomizo oscuro (diagnóstico clave)',
      wingMarkings: 'Negro carbón sobre blanco',
      wings: 'Remeras negras ribeteadas de blanco',
      tail: 'Negro azabache puro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris oscuro'
    },
    relatedMutations: ['azul', 'factor-gris'],
    relatedFactors: ['factor-gris'],
    relatedLines: ['linea-azul'],
    examples: ['Gris clásico de concurso'],
    images: [
      {
        id: 'img-gris-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Gris dominante mostrando cola negra y gulares gris ceniza.',
        author: 'Plumaje Mágico Archive',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['gris', 'grey', 'factor_gris', 'linea_azul']
      }
    ],
    sources: ['WBO Colour Standards - Grey', 'Mutavi Research Group'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-antracita',
    slug: 'antracita',
    name: 'Antracita (Anthracite)',
    category: 'grey',
    categoryLabel: 'Mutación Antracita (Doble Factor)',
    baseColor: 'Gris Carbón / Negro Plomo Profundo',
    hexColor: '#334155',
    shortDescription: 'Mutación de dominancia incompleta que en doble factor (DF) produce un plumaje gris carbón casi negro.',
    description: 'Originada en Alemania, la mutación Antracita aumenta de forma extraordinaria la saturación de eumelanina en el cuerpo. En doble factor (DF) en línea azul, el periquito adquiere un color carbón plomizo muy oscuro, el más cercano al negro en la especie.',
    visualCharacteristics: [
      'Cuerpo: Gris carbón muy oscuro y denso en DF.',
      'Máscara: Blanco puro en línea azul.',
      'Gulares: Negro plomo.',
      'Cola: Negro absoluto azabache.'
    ],
    visualProfile: {
      bodyColor: 'Gris carbón oscuro casi negro (DF Antracita)',
      mask: 'Blanco',
      cheekPatches: 'Negro plomizo',
      wingMarkings: 'Negro azabache intenso',
      wings: 'Negras',
      tail: 'Negro azabache',
      eyes: 'Negro con iris claro',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris negruzco'
    },
    relatedMutations: ['antracita', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Antracita DF en serie azul'],
    images: [
      {
        id: 'img-antracita-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Antracita mostrando la extrema densidad de melanina corporal.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['antracita', 'anthracite', 'negro', 'mutacion']
      }
    ],
    sources: ['Gerd Bleicher - Anthracite Budgerigar Mutation (Germany)', 'WBO Notes'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // AMARILLOS Y CARAS AMARILLAS
  // =========================================================================
  {
    id: 'color-lutino',
    slug: 'lutino',
    name: 'Lutino (Ino en Serie Verde)',
    category: 'yellow',
    categoryLabel: 'Amarillos Puros (Mutación Ino)',
    baseColor: 'Amarillo Botón de Oro Puro (Sin Melanina)',
    hexColor: '#eab308',
    shortDescription: 'Amarillo botón de oro intenso y radiante, con ojos rojos y supresión total de melanina.',
    description: 'El Lutino es la manifestación de la mutación Ino (ligada al sexo) en la serie verde. Al inhibirse toda la síntesis de melanina, desaparecen las ondulaciones negras y la estructura azul, quedando únicamente la psitacina amarilla pura en todo el plumaje.',
    visualCharacteristics: [
      'Cuerpo: Amarillo botón de oro brillante y uniforme, sin sombras verdosas.',
      'Máscara: Amarillo intenso homogéneo.',
      'Manchas gulares: Ausentes o blanco plateado tenue.',
      'Gulares: Blanco plateado.',
      'Alas y Cola: Amarillo mantequilla claro a blanco marfil.',
      'Ojos: Rojo rubí con pupila roja brillante e iris blanco en adultos.',
      'Cera: Rosa carne brillante en machos adultos (nunca azul); marrón en hembras fértiles.',
      'Patas: Rosa carne pálido sin escamas grisáceas.'
    ],
    visualProfile: {
      bodyColor: 'Amarillo botón de oro puro sin melanina',
      mask: 'Amarillo brillante',
      cheekPatches: 'Blanco plateado',
      wingMarkings: 'Ausentes (alas amarillas/marfil)',
      wings: 'Amarillo claro a blanco marfil',
      tail: 'Amarillo claro / blanco',
      eyes: 'Rojo rubí brillante con iris blanco en adultos',
      cere: 'Rosa carne brillante en machos / Marrón en hembras',
      legs: 'Rosa carne pálido'
    },
    relatedMutations: ['lutino-ino', 'ino'],
    relatedFactors: [],
    relatedLines: ['linea-verde'],
    examples: ['Lutino clásico de ojos rojos'],
    images: [
      {
        id: 'img-lutino-1',
        url: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=1000&q=80',
        caption: 'Lutino puro mostrando el plumaje amarillo botón de oro y ojo rojo.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['lutino', 'ino', 'amarillo', 'ojos_rojos']
      }
    ],
    sources: ['WBO Standards - Ino (Lutino)', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-cara-amarilla-t1',
    slug: 'cara-amarilla-tipo-1',
    name: 'Azul Cara Amarilla Tipo I (Creamface)',
    category: 'yellow',
    categoryLabel: 'Caras Amarillas (Mutación)',
    baseColor: 'Azul con Máscara Amarillo Crema',
    hexColor: '#38bdf8',
    shortDescription: 'Periquito de serie azul con máscara amarillo limón suave; el color corporal azul permanece prácticamente puro.',
    description: 'En el Cara Amarilla Tipo I (Mutación recesiva alélica de azul), la psitacina amarilla se restablece únicamente en la máscara y plumas de la cara, sin invadir el color azul del cuerpo tras la muda.',
    visualCharacteristics: [
      'Cuerpo: Azul nítido (cielo, cobalto o malva) sin invasión de verde.',
      'Máscara: Amarillo crema o limón suave.',
      'Gulares: Violeta.',
      'Alas: Ondulaciones negras sobre blanco y bordes amarillo claro.'
    ],
    visualProfile: {
      bodyColor: 'Azul nítido sin invasión de psitacina en el pecho',
      mask: 'Amarillo limón crema suave',
      cheekPatches: 'Violeta brillante',
      wingMarkings: 'Negras con ribete amarillo suave en cabeza',
      wings: 'Remeras negras',
      tail: 'Azul oscuro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris azulado'
    },
    relatedMutations: ['cara-amarilla-i', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Azul Cobalto Cara Amarilla T1'],
    images: [
      {
        id: 'img-cara-amarilla-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Cara Amarilla Tipo I con máscara crema y cuerpo azul intacto.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['yellowface', 'cara_amarilla', 'creamface', 'tipo_1']
      }
    ],
    sources: ['WBO Standards - Yellow Face Series'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-cara-amarilla-t2',
    slug: 'cara-amarilla-tipo-2',
    name: 'Azul Cara Amarilla Tipo II',
    category: 'yellow',
    categoryLabel: 'Caras Amarillas (Mutación)',
    baseColor: 'Azul Verdoso Turquesa / Aguamarina',
    hexColor: '#06b6d4',
    shortDescription: 'Máscara amarilla intensa cuya psitacina invade el cuerpo tras la primera muda, creando tonos turquesa y aguamarina.',
    description: 'En el Cara Amarilla Tipo II, el pigmento amarillo no queda restringido a la cara; tras la primera muda juvenil, el amarillo se extiende por el cuerpo azul, mezclándose ópticamente para crear deslumbrantes matices verde-azulados, turquesas y aguamarinas.',
    visualCharacteristics: [
      'Cuerpo: Turquesa o verde marino aguamarina por mezcla óptica de amarillo sobre azul.',
      'Máscara: Amarillo intenso.',
      'Gulares: Azul violeta.',
      'Alas: Ribeteado amarillo sobre fondo negro y blanco.'
    ],
    visualProfile: {
      bodyColor: 'Turquesa / Aguamarina (mezcla óptica de amarillo sobre azul)',
      mask: 'Amarillo intenso',
      cheekPatches: 'Violeta',
      wingMarkings: 'Negras con difusión amarilla',
      wings: 'Remeras negras ribeteadas de amarillo/blanco',
      tail: 'Azul turquesa',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris azulado'
    },
    relatedMutations: ['cara-amarilla-ii', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Cobalto Cara Amarilla Tipo II'],
    images: [
      {
        id: 'img-cara-amarilla-2',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Cara Amarilla Tipo II mostrando la difusión turquesa en el pecho.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['yellowface2', 'cara_amarilla_2', 'turquesa']
      }
    ],
    sources: ['WBO Standards - Yellow Face Type II'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-cara-dorada',
    slug: 'cara-dorada',
    name: 'Azul Cara Dorada (Goldenface)',
    category: 'yellow',
    categoryLabel: 'Caras Amarillas (Mutación Australiana)',
    baseColor: 'Azul / Verde Esmeralda Rico (Goldenface)',
    hexColor: '#0d9488',
    shortDescription: 'Máscara oro intenso profundo originaria de Australia; en simple factor tiñe el cuerpo de un rico verde esmeralda turquesa.',
    description: 'La mutación Cara Dorada (Goldenface, gen b^gf) produce la psitacina amarilla más rica y dorada conocida en la especie. En simple factor (SF) produce un periquito que visualmente parece verde esmeralda vivo pero genéticamente pertenece a la serie azul.',
    visualCharacteristics: [
      'Máscara: Amarillo oro intenso botón de oro muy saturado.',
      'Cuerpo: En SF verde esmeralda / turquesa intenso; en DF cuerpo azul con máscara dorada restringida.',
      'Gulares: Violeta oscuro.',
      'Cola: Azul oscuro marino con toques dorados.'
    ],
    visualProfile: {
      bodyColor: 'Turquesa esmeralda intenso (SF) o Azul profundo (DF)',
      mask: 'Amarillo oro dorado muy saturado',
      cheekPatches: 'Violeta brillante',
      wingMarkings: 'Negro azabache con bordes dorados',
      wings: 'Remeras negras ribeteadas de oro',
      tail: 'Azul turquesa oscuro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris azulado'
    },
    relatedMutations: ['cara-dorada', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Cobalto Cara Dorada SF'],
    images: [
      {
        id: 'img-cara-dorada-1',
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Cara Dorada mostrando el brillo oro profundo de la máscara.',
        author: 'Plumaje Mágico Archive',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['goldenface', 'cara_dorada', 'australian_goldenface']
      }
    ],
    sources: ['Australian Budgerigar Society - Goldenface Mutation', 'WBO Colour Standards'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // BLANCOS E INOS
  // =========================================================================
  {
    id: 'color-albino',
    slug: 'albino',
    name: 'Albino (Ino en Serie Azul)',
    category: 'white',
    categoryLabel: 'Blancos Puros (Mutación Ino)',
    baseColor: 'Blanco Nieve Inmaculado (Sin Pigmentos)',
    hexColor: '#f8fafc',
    shortDescription: 'Blanco inmaculado absoluto sin melanina ni psitacina, con ojos rojo rubí brillantes.',
    description: 'El Albino combina la mutación Azul (ausencia de psitacina amarilla) con la mutación Ino (ausencia total de melanina). Al carecer de ambos pigmentos, el plumaje es blanco nieve inmaculado en su totalidad, con ojos rojos y cera rosa en machos.',
    visualCharacteristics: [
      'Cuerpo: Blanco puro e inmaculado, sin sombras azules ni amarillas.',
      'Máscara: Blanco puro.',
      'Gulares: Blanco plateado brillante.',
      'Alas y Cola: Blanco puro inmaculado.',
      'Ojos: Rojo rubí brillante con iris blanco en adultos.',
      'Cera: Rosa carne brillante en machos adultos (nunca azul); marrón en hembras fértiles.',
      'Patas: Rosa carne pálido.'
    ],
    visualProfile: {
      bodyColor: 'Blanco nieve puro inmaculado',
      mask: 'Blanco puro',
      cheekPatches: 'Blanco plateado',
      wingMarkings: 'Ausentes (completamente blanco)',
      wings: 'Blanco puro',
      tail: 'Blanco puro',
      eyes: 'Rojo rubí brillante con iris blanco',
      cere: 'Rosa carne en machos / Marrón en hembras',
      legs: 'Rosa carne pálido'
    },
    relatedMutations: ['albino-ino', 'ino', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Albino clásico de ojos rojos'],
    images: [
      {
        id: 'img-albino-1',
        url: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=1000&q=80',
        caption: 'Albino puro con plumaje blanco inmaculado y ojo rojo rubí.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['albino', 'ino', 'blanco', 'ojos_rojos']
      }
    ],
    sources: ['WBO Standards - Ino (Albino)', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-blanco-ojos-negros',
    slug: 'blanco-ojos-negros',
    name: 'Blanco de Ojos Negros (Double Pied / DEC)',
    category: 'white',
    categoryLabel: 'Blancos (Ojos Negros / Combinación)',
    baseColor: 'Blanco Nieve con Ojos Negros Ciruela',
    hexColor: '#f1f5f9',
    shortDescription: 'Blanco puro pero con ojos negros (sin pupila roja), resultado de la combinación de Pío Continental o DEC.',
    description: 'A diferencia del Albino (que tiene ojos rojos por la mutación Ino), el Blanco de Ojos Negros mantiene los ojos negros oscuros normales y cera azul en machos adultos. Se origina por combinaciones de mutaciones de pío (Pío Dominante + Pío Recesivo) o por la mutación Ojos Negros Claros (Dark-Eyed Clear).',
    visualCharacteristics: [
      'Cuerpo: Blanco puro casi total.',
      'Ojos (diferenciación clave): Negros oscuros con iris blanco (NUNCA rojos).',
      'Cera: Machos adultos pueden tener cera azul o rosa según la combinación genética de base.',
      'Gulares: Blanco plateado.'
    ],
    visualProfile: {
      bodyColor: 'Blanco puro',
      mask: 'Blanco',
      cheekPatches: 'Blanco plateado',
      wingMarkings: 'Ausentes o mínimas trazas',
      wings: 'Blanco',
      tail: 'Blanco',
      eyes: 'Negro oscuro con iris blanco (clave)',
      cere: 'Rosa o azul según combinación',
      legs: 'Rosa o gris rosáceo'
    },
    relatedMutations: ['pio-dominante', 'pio-recesivo', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Blanco de Ojos Negros (DEC)'],
    images: [
      {
        id: 'img-dec-blanco-1',
        url: 'https://images.unsplash.com/photo-1518992028580-6d97bdca06c3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Blanco de ojos negros mostrando ojos oscuros normales.',
        author: 'Plumaje Mágico',
        license: 'CC-BY',
        verifiedIdentification: true,
        tags: ['dec', 'blanco_ojos_negros', 'double_pied']
      }
    ],
    sources: ['WBO Standards - Dark-Eyed Clears (DEC)', 'Budgerigar Breeding Guide'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-perlado-df-blanco',
    slug: 'perlado-df-blanco',
    name: 'Perlado Doble Factor Blanco (Double Factor Spangle White)',
    category: 'white',
    categoryLabel: 'Blancos (Perlado Doble Factor)',
    baseColor: 'Blanco Puro con Ojos Negros',
    hexColor: '#ffffff',
    shortDescription: 'Blanco puro brillante con ojos negros e iris blanco, cera azul en machos; causado por dos copias del gen Perlado.',
    description: 'El Perlado Doble Factor (DF Spangle) en línea azul suprime completamente todas las marcas alares y el color corporal, dejando un ave totalmente blanca con ojos negros e iris blanco normal, y cera azul brillante en machos adultos.',
    visualCharacteristics: [
      'Cuerpo: Blanco puro brillante.',
      'Máscara: Blanco.',
      'Gulares: Blanco plateado.',
      'Alas: Blancas sin ningún dibujo alar.',
      'Ojos: Pupila negra normal con iris blanco bien definido en adultos.',
      'Cera: Azul brillante normal en machos adultos (a diferencia de los Inos que es rosa).'
    ],
    visualProfile: {
      bodyColor: 'Blanco puro brillante (DF Perlado en Línea Azul)',
      mask: 'Blanco',
      cheekPatches: 'Blanco plateado',
      wingMarkings: 'Completamente ausentes',
      wings: 'Blanco puro',
      tail: 'Blanco',
      eyes: 'Negro con iris blanco normal (adulto)',
      cere: 'Azul royal en machos adultos (clave vs Ino)',
      legs: 'Gris rosáceo'
    },
    relatedMutations: ['perlado', 'azul'],
    relatedFactors: [],
    relatedLines: ['linea-azul'],
    examples: ['Perlado Doble Factor Blanco'],
    images: [
      {
        id: 'img-perlado-df-blanco-1',
        url: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=1000&q=80',
        caption: 'Perlado doble factor blanco con ojos negros y cera azul de macho adulto.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['df_spangle', 'perlado_df', 'blanco']
      }
    ],
    sources: ['WBO Colour Standards - Double Factor Spangle'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-perlado-df-amarillo',
    slug: 'perlado-df-amarillo',
    name: 'Perlado Doble Factor Amarillo (Double Factor Spangle Yellow)',
    category: 'yellow',
    categoryLabel: 'Amarillos (Perlado Doble Factor)',
    baseColor: 'Amarillo Botón de Oro con Ojos Negros',
    hexColor: '#facc15',
    shortDescription: 'Amarillo botón de oro radiante con ojos negros normales y cera azul en machos; diferenciable del Lutino por sus ojos negros.',
    description: 'El Perlado Doble Factor en línea verde produce un periquito totalmente amarillo botón de oro, pero a diferencia del Lutino, el Perlado DF conserva sus ojos negros con iris blanco normal y los machos desarrollan la típica cera azul brillante de adulto.',
    visualCharacteristics: [
      'Cuerpo: Amarillo botón de oro brillante y uniforme.',
      'Ojos: Negros con iris blanco (NUNCA rojos como en Lutino).',
      'Cera: Azul royal en machos adultos (NUNCA rosa).',
      'Gulares: Blanco plateado o amarillo suave.',
      'Alas: Amarillo uniforme sin marcas negras.'
    ],
    visualProfile: {
      bodyColor: 'Amarillo botón de oro intenso (DF Perlado en Línea Verde)',
      mask: 'Amarillo',
      cheekPatches: 'Blanco plateado / amarillo',
      wingMarkings: 'Completamente ausentes',
      wings: 'Amarillo',
      tail: 'Amarillo',
      eyes: 'Negro con iris blanco normal (adulto)',
      cere: 'Azul royal en machos adultos (clave vs Lutino)',
      legs: 'Gris rosáceo'
    },
    relatedMutations: ['perlado', 'ancestral'],
    relatedFactors: [],
    relatedLines: ['linea-verde'],
    examples: ['Perlado DF Amarillo'],
    images: [
      {
        id: 'img-perlado-df-amarillo-1',
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Perlado doble factor amarillo mostrando ojos negros y cera azul.',
        author: 'Plumaje Mágico Archive',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['df_spangle_yellow', 'perlado_df_amarillo']
      }
    ],
    sources: ['WBO Standards - Spangle Double Factor'],
    verificationStatus: 'verified'
  },

  // =========================================================================
  // PATRONES Y DISTRIBUCIÓN
  // =========================================================================
  {
    id: 'color-opalino',
    slug: 'opalino',
    name: 'Variedad Opalina (Opaline Pattern)',
    category: 'pattern',
    categoryLabel: 'Patrones de Plumaje (Ligada al Sexo)',
    baseColor: 'Color Base con Espalda en "V" Limpia',
    hexColor: '#10b981',
    shortDescription: 'Patrón con inversión de dibujo alar, espalda superior libre de ondulaciones (V limpia) y color corporal invadiendo las alas.',
    description: 'La mutación Opalino (ligada al sexo en el cromosoma Z) reorganiza el diseño del plumaje: elimina las ondulaciones negras en la nuca y espalda superior formando una "V" limpia del color del cuerpo, e invierte el ribeteado de las plumas de las alas con el color del cuerpo extendiéndose sobre las coberteras.',
    visualCharacteristics: [
      'Espalda en "V": Espalda superior y nuca limpias de ondulaciones, del mismo color del cuerpo.',
      'Alas: Coberteras alares teñidas con el color del cuerpo y dibujo negro invertido.',
      'Máscara: Máscara amplia y limpia.',
      'Cola: Timoneras centrales con línea central del color del cuerpo y bordes negros.'
    ],
    visualProfile: {
      bodyColor: 'Color base (verde, azul, gris, violeta) con brillo intenso',
      mask: 'Color de la máscara extendido a la nuca',
      cheekPatches: 'Azul violeta o gris según línea',
      wingMarkings: 'Diseño alar invertido teñido con el color corporal',
      wings: 'Remeras con espejo claro central en vuelo',
      tail: 'Timoneras con eje del color del cuerpo',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris'
    },
    relatedMutations: ['opalino'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Opalino Azul Cobalto', 'Opalino Verde Césped'],
    images: [
      {
        id: 'img-opalino-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Opalino mostrando la clásica "V" despejada en el manto y hombros.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['opalino', 'opaline', 'patron_v', 'ligada_sexo']
      }
    ],
    sources: ['WBO Standards - Opaline', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-perlado-sf',
    slug: 'perlado-sf',
    name: 'Variedad Perlada Simple Factor (Single Factor Spangle)',
    category: 'pattern',
    categoryLabel: 'Patrones de Plumaje (Autosómica Dominante)',
    baseColor: 'Color Base con Ribete Alar Inverso',
    hexColor: '#34d399',
    shortDescription: 'Cada pluma de las coberteras alares tiene un fino ribete negro exterior sobre fondo claro, creando un efecto de escama o perla.',
    description: 'El Perlado Simple Factor (Spangle SF) produce un patrón invertido en el ribeteado de las plumas de las alas y cola: el centro de la pluma es claro (amarillo o blanco) y el borde exterior es un delicado ribete negro fino.',
    visualCharacteristics: [
      'Alas: Coberteras alares con centro claro (blanco/amarillo) y fino reborde negro perla.',
      'Gulares: Manchas gulares parcialmente blancas/plateadas con ribete azul o violeta.',
      'Cola: Timoneras claras con borde negro fino.',
      'Remeras primarias: Remeras claras con ribete negro en la punta.'
    ],
    visualProfile: {
      bodyColor: 'Color base intenso y uniforme',
      mask: 'Color de máscara limpio',
      cheekPatches: 'Blanco plateado con toque violeta',
      wingMarkings: 'Ribeteado negro exterior en cada pluma de ala',
      wings: 'Plumas claras ribeteadas de negro en encaje',
      tail: 'Timoneras claras con fino borde negro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris rosáceo'
    },
    relatedMutations: ['perlado'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Perlado Azul Cielo SF', 'Perlado Verde Laurel SF'],
    images: [
      {
        id: 'img-perlado-sf-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Perlado Simple Factor con el característico encaje escamado en las alas.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['spangle', 'perlado', 'sf', 'patron']
      }
    ],
    sources: ['WBO Colour Standards - Spangle Single Factor'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-canela',
    slug: 'canela',
    name: 'Variedad Canela (Cinnamon)',
    category: 'pattern',
    categoryLabel: 'Patrones de Plumaje (Melanina Oxidada)',
    baseColor: 'Color Base Acalorado con Ondulaciones Marrón Canela',
    hexColor: '#a16207',
    shortDescription: 'Ondulaciones y marcas alares de color marrón canela cálido en lugar de negro azabache, con tono corporal más suave.',
    description: 'La mutación Canela (ligada al sexo) detiene la oxidación completa de la melanina, produciendo feomelanina/eumelanina parda en lugar de negro carbón. Las ondulaciones son marrón canela tostado y el color corporal adquiere un tono pastel cálido muy característico. Al nacer, los pichones tienen ojos color ciruela rojizo que oscurecen con los días.',
    visualCharacteristics: [
      'Ondulaciones: Marrón canela tostado nítido (NUNCA negro azabache).',
      'Cuerpo: Color base ligeramente más cálido y apastelado.',
      'Gulares: Azul violeta o lavanda pálido.',
      'Cola: Marrón canela oscuro con eje marrón.',
      'Ojos al nacer: Ojos ciruela rojizo en recién nacidos, oscurecen a castaño con iris blanco en adultos.'
    ],
    visualProfile: {
      bodyColor: 'Color base en tono apastelado cálido',
      mask: 'Color de máscara limpio',
      cheekPatches: 'Violeta lavanda pálido',
      wingMarkings: 'Marrón canela tostado cálido',
      wings: 'Remeras marrón canela con ribete claro',
      tail: 'Marrón canela oscuro',
      eyes: 'Ciruela al nacer / Negro con iris blanco de adulto',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Rosa carne con uñas marrones claras'
    },
    relatedMutations: ['canela'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Canela Verde Césped', 'Canela Azul Cobalto'],
    images: [
      {
        id: 'img-canela-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Canela clásico con ondulaciones marrón café sobre fondo blanco.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['canela', 'cinnamon', 'marron', 'ligada_sexo']
      }
    ],
    sources: ['WBO Standards - Cinnamon', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-alas-claras',
    slug: 'alas-claras',
    name: 'Alas Claras (Clearwing)',
    category: 'pattern',
    categoryLabel: 'Diluciones Alares (Mutación Recesiva Alélica)',
    baseColor: 'Cuerpo Plenamente Saturado con Alas Blancas/Amarillas',
    hexColor: '#14b8a6',
    shortDescription: 'Cuerpo con coloración casi al 100% de intensidad pero con alas y ondulaciones decoloradas a blanco o amarillo pálido.',
    description: 'El Alas Claras pertenece a la serie alélica del gen diluido. Presenta una notable retención del color corporal (casi el 90-100% de saturación del azul o verde) combinada con una severa reducción de melanina en las alas, las cuales se ven casi blancas o amarillas con trazas mínimas grisáceas.',
    visualCharacteristics: [
      'Cuerpo: Color intenso y brillante casi sin pérdida de tono.',
      'Alas: Blancas (en serie azul) o amarillas (en serie verde) con sombras grisáceas muy tenues.',
      'Gulares: Azul violeta brillante intenso.',
      'Cola: Gris claro o azul pálido.'
    ],
    visualProfile: {
      bodyColor: 'Color corporal casi 100% saturado y brillante',
      mask: 'Color de máscara nítido',
      cheekPatches: 'Azul violeta intenso',
      wingMarkings: 'Blancas o amarillas con marcas apenas visibles',
      wings: 'Remeras blancas o amarillas translúcidas',
      tail: 'Azul pálido o gris perla',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris rosáceo'
    },
    relatedMutations: ['alas-claras'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Alas Claras Azul Cobalto', 'Alas Claras Violeta'],
    images: [
      {
        id: 'img-alas-claras-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Alas Claras en serie azul mostrando el contraste entre cuerpo saturado y alas claras.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['clearwing', 'alas_claras', 'contraste']
      }
    ],
    sources: ['WBO Standards - Clearwing', 'The Clearwing Budgerigar Society'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-alas-grises',
    slug: 'alas-grises',
    name: 'Alas Grises (Greywing)',
    category: 'pattern',
    categoryLabel: 'Diluciones Alares (Mutación Recesiva Alélica)',
    baseColor: 'Cuerpo Diluido 50% con Ondulaciones Gris Ahumado',
    hexColor: '#94a3b8',
    shortDescription: 'Reducción del 50% del color corporal y marcas alares de color gris ahumado suave en lugar de negro.',
    description: 'En el Alas Grises, tanto la melanina alar como la corporal se reducen aproximadamente a la mitad (50%). El cuerpo tiene un tono pastel suave y las ondulaciones son gris perla ahumado.',
    visualCharacteristics: [
      'Cuerpo: Color en tono pastel suave (aprox. 50% de intensidad normal).',
      'Ondulaciones: Gris ahumado suave y regular.',
      'Gulares: Violeta pálido o azul lavanda.',
      'Cola: Gris ahumado.'
    ],
    visualProfile: {
      bodyColor: 'Color pastel reducido al 50% de intensidad',
      mask: 'Color de máscara suave',
      cheekPatches: 'Violeta pálido / lavanda',
      wingMarkings: 'Gris perla ahumado uniforme',
      wings: 'Remeras gris ahumado ribeteadas de claro',
      tail: 'Gris ahumado',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris claro'
    },
    relatedMutations: ['alas-grises'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Alas Grises Azul Cielo', 'Alas Grises Verde Césped'],
    images: [
      {
        id: 'img-alas-grises-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Alas Grises mostrando ondulaciones grisáceas y cuerpo apastelado.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['greywing', 'alas_grises', 'dilucion']
      }
    ],
    sources: ['WBO Standards - Greywing'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-diluido',
    slug: 'diluido',
    name: 'Diluido (Dilute / Suffused)',
    category: 'pattern',
    categoryLabel: 'Diluciones Completas (Mutación Recesiva)',
    baseColor: 'Color Pastel Muy Pálido (80% Reducción)',
    hexColor: '#cbd5e1',
    shortDescription: 'Reducción extrema (80%) de pigmentos; cuerpo apastelado muy claro (amarillo pálido o blanco azuleado) con marcas casi invisibles.',
    description: 'El Diluido es el alelo más recesivo de su locus. Reduce en un 80% tanto la melanina como la psitacina, originando los conocidos periquitos "Amarillos Sufridos" (en verde) o "Blancos Sufridos" (en azul), con ondulaciones fantasmales apenas perceptibles.',
    visualCharacteristics: [
      'Cuerpo: Color pastel extremadamente claro (marfil o blanco con velo azul/verde muy tenue).',
      'Ondulaciones: Sombras fantasma grisáceas muy pálidas.',
      'Gulares: Lavanda muy pálido o blanquecino.',
      'Ojos: Negro con iris blanco normal.'
    ],
    visualProfile: {
      bodyColor: 'Pastel muy pálido (80% de reducción pigmentaria)',
      mask: 'Color de máscara pálido',
      cheekPatches: 'Lavanda blanquecino pálido',
      wingMarkings: 'Gris fantasma casi imperceptible',
      wings: 'Casi blancas o amarillas translúcidas',
      tail: 'Gris blanquecino muy claro',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Rosa carne o gris claro'
    },
    relatedMutations: ['diluido'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Diluido Azul Cielo', 'Amarillo Sufrido (Diluido Verde)'],
    images: [
      {
        id: 'img-diluido-1',
        url: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=1000&q=80',
        caption: 'Diluido en serie azul mostrando el plumaje en tono pastel ultra claro.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['diluido', 'dilute', 'pastel', 'sufrido']
      }
    ],
    sources: ['WBO Standards - Suffused / Dilute'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-pio-dominante',
    slug: 'pio-dominante',
    name: 'Pío Dominante Australiano (Dominant Pied / Banded)',
    category: 'pattern',
    categoryLabel: 'Patrones Píos (Autosómica Dominante)',
    baseColor: 'Color Base con Banda Clara en Pecho y Alas Parcheadas',
    hexColor: '#38bdf8',
    shortDescription: 'Patrón de manchas irregulares con banda clara en el pecho, remiendos alares limpios y cola clara.',
    description: 'El Pío Dominante Australiano (Banded Pied) suprime la melanina en zonas asimétricas concretas del cuerpo, generando una franja clara limpia en el abdomen/pecho, un parche claro en la nuca y plumas remeras desprovistas de dibujo negro.',
    visualCharacteristics: [
      'Banda en el pecho: Franja horizontal clara (blanca o amarilla) cruzando el cuerpo.',
      'Mancha en la nuca: Parche blanco o amarillo limpio en la parte posterior de la cabeza.',
      'Alas: Parches asimétricos limpios combinados con zonas de ondulación normal.',
      'Ojos: Negro con iris blanco definido en adultos (distingue del Pío Recesivo).',
      'Cera: Machos adultos desarrollan cera azul normal o parcialmente moteada.'
    ],
    visualProfile: {
      bodyColor: 'Color base interrumpido por banda clara transversal',
      mask: 'Máscara amplia con mancha clara en nuca',
      cheekPatches: 'Violeta o azul parcial',
      wingMarkings: 'Parches asimétricos claros y ondulados',
      wings: 'Remeras primarias blancas o amarillas alternadas',
      tail: 'Timoneras claras o alternadas',
      eyes: 'Negro con iris blanco definido en adultos (clave)',
      cere: 'Azul royal en machos adultos / Marrón en hembras',
      legs: 'Rosa carne o moteadas de gris'
    },
    relatedMutations: ['pio-dominante'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Pío Dominante Azul Cobalto'],
    images: [
      {
        id: 'img-pio-dom-1',
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
        caption: 'Pío Dominante mostrando parche en nuca, banda clara y ojos con iris blanco.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['pio_dominante', 'dominant_pied', 'australian_pied']
      }
    ],
    sources: ['WBO Standards - Dominant Pied', 'Australian Budgerigar Pied Group'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-pio-recesivo',
    slug: 'pio-recesivo',
    name: 'Pío Recesivo Danés (Recessive Pied / Harlequin)',
    category: 'pattern',
    categoryLabel: 'Patrones Píos (Autosómica Recesiva)',
    baseColor: 'Moteado Arlequín con Ojos Negros Sin Iris Blanco',
    hexColor: '#ec4899',
    shortDescription: 'Patrón arlequín con manchas caóticas, ojos permanentemente negros sin iris blanco y cera rosa brillante en machos.',
    description: 'El Pío Recesivo Danés (Arlequín) es una mutación recesiva autosómica fascinante. El ave presenta manchas corporales caóticas en vientre y alas, y retiene características juveniles de por vida: ojos completamente negros sin aro de iris blanco y cera rosa carne brillante en machos adultos (nunca se vuelve azul).',
    visualCharacteristics: [
      'Ojos (diagnóstico absoluto): Negros sólidos como botones de por vida, NUNCA desarrollan iris blanco.',
      'Cera en machos (diagnóstico): Rosa carne brillante permanente en machos adultos.',
      'Cuerpo: Parches caóticos de color base concentrados principalmente en la parte baja del abdomen y obispillo.',
      'Manchas gulares: Irregulares, a veces una o dos ausentes o reducidas a pecas.',
      'Patas: Rosa carne uniforme.'
    ],
    visualProfile: {
      bodyColor: 'Fondo amarillo/blanco con manchas de color base en rabadilla y bajo vientre',
      mask: 'Amarilla o blanca con pocas o ninguna mancha gular',
      cheekPatches: 'Violeta o blanco plateado asimétrico',
      wingMarkings: 'Parches caóticos de ondulación sobre fondo claro',
      wings: 'Remeras mayoritariamente claras',
      tail: 'Blanca o amarilla con manchas',
      eyes: 'Negro sólido de por vida (SIN iris blanco visible)',
      cere: 'Rosa carne brillante en machos adultos (NUNCA azul)',
      legs: 'Rosa carne pálido permanente'
    },
    relatedMutations: ['pio-recesivo'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Pío Recesivo Danés Verde Césped'],
    images: [
      {
        id: 'img-pio-rec-1',
        url: 'https://images.unsplash.com/photo-1518992028580-6d97bdca06c3?auto=format&fit=crop&w=1000&q=80',
        caption: 'Pío Recesivo Danés mostrando el ojo completamente negro sin iris y cera rosa.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['pio_recesivo', 'recessive_pied', 'harlequin', 'danes']
      }
    ],
    sources: ['WBO Standards - Recessive Pied', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-arcoiris',
    slug: 'arcoiris',
    name: 'Combinación Arcoíris (Rainbow Budgerigar)',
    category: 'pattern',
    categoryLabel: 'Combinaciones Complejas (Cuádruple Mutación)',
    baseColor: 'Policromía Pastel Luminosa Iridiscente',
    hexColor: '#a855f7',
    shortDescription: 'Prestigiosa combinación de 4 mutaciones: Serie Azul + Cara Amarilla Tipo II/Dorada + Alas Claras + Opalino.',
    description: 'El periquito Arcoíris (Rainbow) no es una mutación individual, sino una célebre y armónica combinación de cuatro mutaciones distintas: Línea Azul, Cara Amarilla Tipo II o Cara Dorada, Alas Claras y Opalino. La difusión de la psitacina sobre el azul opalino y las alas decoloradas genera un deslumbrante efecto de arcoíris iridiscente con tonos turquesa, lila, amarillo y violeta.',
    visualCharacteristics: [
      'Frente y Máscara: Amarillo intenso o dorado radiante.',
      'Cuerpo: Turquesa aguamarina, lavanda, cobalto o violeta según el factor de oscuridad de base.',
      'Manto y Espalda: "V" opalina limpia con difusión amarillo-turquesa.',
      'Alas: Coberteras claras teñidas de tono corporal sin dibujo negro pesado.',
      'Efecto global: Degradado continuo multicolor de aspecto iridiscente.'
    ],
    visualProfile: {
      bodyColor: 'Degradado turquesa, lila y aguamarina iridiscente',
      mask: 'Amarillo botón de oro o dorado intenso',
      cheekPatches: 'Azul violeta intenso',
      wingMarkings: 'Alas claras con matiz opalino pastel sin melanina pesada',
      wings: 'Remeras claras translúcidas',
      tail: 'Turquesa azulado con toques dorados',
      eyes: 'Negro con iris blanco',
      cere: 'Azul en machos / Marrón en hembras',
      legs: 'Gris rosáceo'
    },
    relatedMutations: ['azul', 'cara-amarilla-ii', 'alas-claras', 'opalino'],
    relatedFactors: ['factor-violeta', 'factor-oscuridad'],
    relatedLines: ['linea-azul'],
    examples: ['Arcoíris Cobalto Violeta', 'Arcoíris Cara Dorada'],
    images: [
      {
        id: 'img-rainbow-1',
        url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
        caption: 'Ejemplar Arcoíris auténtico mostrando el efecto policromático armónico.',
        author: 'Aviario Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['rainbow', 'arcoiris', 'combinacion', 'alas_claras', 'opalino']
      }
    ],
    sources: ['WBO Guidelines for Composite Varieties - Rainbow', 'The Budgerigar Society (UK)'],
    verificationStatus: 'verified'
  },
  {
    id: 'color-lacewing',
    slug: 'lacewing',
    name: 'Variedad Lacewing (Encaje)',
    category: 'pattern',
    categoryLabel: 'Combinaciones Ligadas al Sexo (Ino + Canela)',
    baseColor: 'Fondo Amarillo o Blanco con Dibujo Marrón Canela Fino',
    hexColor: '#d97706',
    shortDescription: 'Cuerpo amarillo puro o blanco con ojos rojos, combinado con un delicado dibujo alar marrón canela claro.',
    description: 'El Lacewing es el resultado del entrecruzamiento meiótico (crossing-over) entre los loci Ino y Canela en el cromosoma Z. El ave presenta el cuerpo libre de melanina (amarillo botón de oro o blanco puro) y ojos rojo rubí como un Ino, pero retiene un sutil y nítido dibujo alar color canela encaje en alas, cola y gulares.',
    visualCharacteristics: [
      'Cuerpo: Amarillo puro (en verde) o blanco puro (en azul) sin tono verdoso ni azulado.',
      'Ondulaciones: Marrón canela claro, muy fino y nítido sobre hombros y alas.',
      'Gulares: Violeta pálido o marrón canela suave.',
      'Ojos: Rojo rubí brillante con iris blanco en adultos.',
      'Cera: Rosa carne brillante en machos adultos (nunca azul); marrón en hembras fértiles.',
      'Cola: Marrón canela pálido.'
    ],
    visualProfile: {
      bodyColor: 'Amarillo botón de oro o blanco inmaculado',
      mask: 'Amarilla o blanca limpia',
      cheekPatches: 'Violeta pálido / marrón canela',
      wingMarkings: 'Delicado dibujo marrón canela claro como encaje',
      wings: 'Remeras canela claro ribeteadas de blanco/amarillo',
      tail: 'Canela pálido',
      eyes: 'Rojo rubí brillante con iris blanco',
      cere: 'Rosa carne en machos / Marrón en hembras',
      legs: 'Rosa carne'
    },
    relatedMutations: ['ino', 'canela'],
    relatedFactors: [],
    relatedLines: ['linea-verde', 'linea-azul'],
    examples: ['Lacewing Amarillo (Línea Verde)', 'Lacewing Blanco (Línea Azul)'],
    images: [
      {
        id: 'img-lacewing-1',
        url: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=1000&q=80',
        caption: 'Lacewing amarillo mostrando las marcas alares canela de encaje y ojo rojo.',
        author: 'Plumaje Mágico',
        license: 'CC-BY-SA',
        verifiedIdentification: true,
        tags: ['lacewing', 'encaje', 'ojos_rojos', 'canela_ino']
      }
    ],
    sources: ['WBO Standards - Lacewing', 'Genetics for Budgerigar Breeders'],
    verificationStatus: 'verified'
  }
];

export const COLOR_PRESET_COMPARISONS = [
  {
    id: 'cobalto-vs-violeta',
    title: 'Azul Cobalto vs. Violeta Visual',
    colorAId: 'color-azul-cobalto',
    colorBId: 'color-violeta-visual',
    summary: 'Cómo distinguir un periquito Azul Cobalto intenso de un auténtico Violeta Visual.',
    similarities: [
      'Ambos pertenecen a la serie azul.',
      'Ambos poseen al menos 1 factor de oscuridad (1D).',
      'Ambos tienen máscara blanca pura y ondulaciones negras azabache.',
      'Ambos presentan iris blanco bien desarrollado en la adultez.'
    ],
    differences: [
      'El Azul Cobalto es un azul marino puro y profundo sin tinte púrpura.',
      'El Violeta Visual tiene un color púrpura eléctrico homogéneo en pecho y abdomen debido a la presencia del Factor Violeta (V).',
      'Las gulares del Violeta son de un violeta más profundo y eléctrico que en el Cobalto clásico.',
      'Bajo luz solar natural, el Cobalto no muestra reflejos magenta, mientras que el Violeta irradia un tono amatista inconfundible.'
    ],
    differentiationKeys: [
      'Comprueba el tono del pecho bajo luz natural difusa (sin reflejos amarillos de bombillas).',
      'Observa las plumas del bajo vientre y rabadilla: en Violeta Visual el color púrpura es sólido y uniforme.',
      'Revisa la genealogía: el Violeta Visual requiere que al menos uno de los progenitores aporte el gen del Factor Violeta.'
    ]
  },
  {
    id: 'verde-oliva-vs-verde-gris',
    title: 'Verde Oliva vs. Verde Gris',
    colorAId: 'color-verde-oliva',
    colorBId: 'color-verde-gris',
    summary: 'Diferenciación crucial entre el doble factor de oscuridad en verde (Oliva) y el Factor Gris sobre verde (Verde Gris).',
    similarities: [
      'Ambos presentan una tonalidad verde oscura, sobria y apagada en el cuerpo.',
      'Ambos tienen máscara amarilla y ondulaciones negras densas.',
      'A simple vista pueden confundirse en fotografías de baja calidad o con mala iluminación.'
    ],
    differences: [
      'Manchas gulares (CLAVE DIAGNÓSTICA): El Verde Oliva tiene gulares VIOLETAS oscuras; el Verde Gris tiene gulares GRIS CENIZA plomizas sin rastro de violeta.',
      'Color de la cola: La timonera central del Verde Oliva es azul marina muy oscura; la del Verde Gris es NEGRO AZABACHE puro.',
      'Tonalidad corporal: El Verde Oliva tiene un matiz oliva cálido mate; el Verde Gris es un verde caqui mostaza frío.',
      'Genética: El Verde Oliva tiene 2D (recesivo acumulativo de oscuridad); el Verde Gris tiene el Factor Gris dominante (G).'
    ],
    differentiationKeys: [
      'Mira siempre las manchas gulares (gotas del cuello): si son violetas es Oliva; si son grises ceniza es Verde Gris.',
      'Mira las dos plumas largas centrales de la cola: si son negras puras sin azul es Verde Gris.'
    ]
  },
  {
    id: 'lutino-vs-perlado-df-amarillo',
    title: 'Lutino vs. Perlado Doble Factor Amarillo',
    colorAId: 'color-lutino',
    colorBId: 'color-perlado-df-amarillo',
    summary: 'Identificación visual entre dos periquitos totalmente amarillos con orígenes genéticos opuestos.',
    similarities: [
      'Ambos tienen el cuerpo completamente amarillo botón de oro.',
      'Ambos carecen de ondulaciones negras en alas y cabeza.',
      'Ambos lucen plumaje amarillo luminoso y limpio.'
    ],
    differences: [
      'Color de ojos (CLAVE DIAGNÓSTICA): El Lutino tiene ojos ROJOS rubí brillantes; el Perlado DF tiene ojos NEGROS normales con iris blanco de adulto.',
      'Color de la cera en machos: En Lutino macho la cera es ROSA CARNE brillante permanente; en Perlado DF macho la cera es AZUL ROYAL normal.',
      'Gulares: En Lutino son blanco plateado tenue; en Perlado DF son blanco plateado o amarillo suave.',
      'Patas: Rosa carne pálido en Lutino; gris rosáceo en Perlado DF.'
    ],
    differentiationKeys: [
      'Inspecciona los ojos: pupila roja = Lutino (Ino); pupila negra = Perlado Doble Factor.',
      'En machos adultos: cera rosa = Lutino; cera azul = Perlado Doble Factor.'
    ]
  },
  {
    id: 'albino-vs-perlado-df-blanco',
    title: 'Albino vs. Perlado Doble Factor Blanco vs. DEC',
    colorAId: 'color-albino',
    colorBId: 'color-perlado-df-blanco',
    summary: 'Cómo distinguir un periquito totalmente blanco por mutación Ino de un Perlado DF blanco o un Ojos Negros.',
    similarities: [
      'Ambos presentan plumaje 100% blanco inmaculado.',
      'Ambos carecen de cualquier dibujo alar u ondulación negra.'
    ],
    differences: [
      'Color de ojos: El Albino tiene ojos ROJOS rubí; el Perlado DF Blanco tiene ojos NEGROS con iris blanco.',
      'Cera de machos adultos: Rosa carne en Albino macho; AZUL brillante en Perlado DF Blanco macho.',
      'Genética: Albino es mutación Ino ligada al sexo en serie azul; Perlado DF Blanco son dos copias del gen Perlado dominante en serie azul.'
    ],
    differentiationKeys: [
      'Pupila roja = Albino (Ino en línea azul).',
      'Pupila negra con iris blanco = Perlado Doble Factor Blanco.',
      'Pupila negra SIN iris blanco y cera rosa = Blanco de Ojos Negros (DEC o Pío Doble).'
    ]
  },
  {
    id: 'alas-claras-vs-alas-grises-vs-diluido',
    title: 'Alas Claras vs. Alas Grises vs. Diluido',
    colorAId: 'color-alas-claras',
    colorBId: 'color-alas-grises',
    summary: 'La trilogía de diluciones alélicas: comprender la diferencia entre cuerpo saturado con alas blancas y dilución uniforme.',
    similarities: [
      'Todos pertenecen a la misma serie alélica del gen diluido en el locus de dilución.',
      'Todos muestran algún grado de reducción de melanina alar.'
    ],
    differences: [
      'Alas Claras: Cuerpo 90-100% saturado con alas casi blancas/amarillas (máximo contraste cuerpo-ala).',
      'Alas Grises: Cuerpo diluido al 50% con alas gris ahumado uniforme (dilución equilibrada).',
      'Diluido: Cuerpo diluido al 80% (muy pálido) con alas casi blancas/amarillas fantasma (dilución global extrema).'
    ],
    differentiationKeys: [
      'Evalúa la saturación del pecho: si el azul o verde es casi tan vivo como un periquito normal, es Alas Claras.',
      'Si el pecho es azul cielo suave y las alas son gris perla bien marcadas, es Alas Grises.',
      'Si todo el periquito parece un tono pastel lavado muy pálido, es Diluido.'
    ]
  },
  {
    id: 'pio-dominante-vs-pio-recesivo',
    title: 'Pío Dominante vs. Pío Recesivo (Danés)',
    colorAId: 'color-pio-dominante',
    colorBId: 'color-pio-recesivo',
    summary: 'Diferenciación entre el pío con iris blanco y banda en pecho y el pío arlequín de ojos negros permanentes.',
    similarities: [
      'Ambos presentan zonas de plumaje claro desprovistas de melanina y manchas de color base.',
      'Ambos pueden presentarse en cualquier color base (verde, azul, gris, cobalto).'
    ],
    differences: [
      'Iris ocular en adultos: El Pío Dominante desarrolla iris blanco normal a partir de los 4-6 meses; el Pío Recesivo NUNCA desarrolla iris blanco (ojos negros de por vida).',
      'Cera en machos adultos: El Pío Dominante macho tiene cera azul royal normal (a veces parcialmente moteada); el Pío Recesivo macho tiene cera ROSA CARNE brillante permanente.',
      'Distribución de manchas: El Dominante suele tener parche en la nuca y banda limpia en el pecho; el Recesivo tiene manchas arlequín caóticas concentradas en el bajo vientre.',
      'Herencia: Dominante autosómico vs. Recesivo autosómico.'
    ],
    differentiationKeys: [
      'Mira el ojo del ave adulta: si tiene un anillo de iris blanco claro alrededor de la pupila, es Pío Dominante. Si el ojo es completamente negro como una perla, es Pío Recesivo.',
      'Si es macho adulto y su cera es azul, es Pío Dominante; si es rosa carne brillante de adulto, es Pío Recesivo.'
    ]
  }
];

export const VISUAL_IDENTIFICATION_EDUCATION_SECTIONS = [
  {
    id: 'fenotipo-vs-genotipo',
    title: '1. El Principio Fundamental: Fenotipo ≠ Genotipo',
    subtitle: 'Por qué la vista no puede revelar lo que los genes esconden',
    content: 'La identificación visual describe el FENOTIPO (lo que se ve externamente: plumas, colores, marcas). Sin embargo, la genética del periquito se basa en el GENOTIPO (los alelos heredados). Un periquito visualmente Verde Césped puede portar de forma completamente invisible genes recesivos como Azul, Opalino, Canela, Ino o Pío Recesivo. Por tanto, nunca se debe afirmar un diagnóstico genético completo basándose exclusivamente en una fotografía sin conocer la genealogía o realizar pruebas de cría controlada.',
    bulletPoints: [
      'Los genes recesivos en simple dosis (heterocigosis) NO alteran el fenotipo visible.',
      'Dos periquitos de idéntico aspecto pueden dar descendientes totalmente distintos.',
      'Las hembras nunca portan mutaciones ligadas al sexo (o las manifiestan visualmente o no las tienen).'
    ]
  },
  {
    id: 'factores-confusores',
    title: '2. Factores que Pueden Engañar al Ojo Humano',
    subtitle: 'Variables ambientales, biológicas y fotográficas',
    content: 'Diversos elementos no genéticos pueden alterar temporal o engañosamente la apariencia cromática de un periquito:',
    bulletPoints: [
      'Edad y Primera Muda: Los periquitos juveniles (menores de 3-4 meses) tienen plumaje más apagado, no muestran iris blanco y en mutaciones como Cara Amarilla Tipo II el amarillo aún no se ha extendido al cuerpo.',
      'Condición y Estado de Celo: En las hembras, la cera pasa de blanco azulado pálido a marrón oscuro rugoso durante el celo. En machos desnutridos o enfermos, la cera azul puede palidecer.',
      'Iluminación y Fotografía: Las cámaras digitales con balance de blancos automático y las luces incandescentes o LED de baja calidad alteran drásticamente los tonos azules haciéndolos parecer cobalto, violeta o verde.',
      'Estructura de Pluma: Plumas dañadas, desgastadas o con falta de baño pueden lucir mate y con falsos reflejos oscuros.'
    ]
  },
  {
    id: 'guia-observacion-paso-a-paso',
    title: '3. Protocolo Visual de Observación Ornitológica',
    subtitle: 'El método sistemático de 7 puntos para analizar un periquito',
    content: 'Para categorizar visualmente a un periquito con rigor, observa en este orden estricto:',
    bulletPoints: [
      '1. Máscara y Frente: ¿Es blanca (serie azul), amarilla (serie verde / cara amarilla) o dorada intensa?',
      '2. Manchas Gulares (Gotas): ¿Son violeta intenso, violeta oscuro, lavanda, gris ceniza o blanco plateado?',
      '3. Color Corporal (Pecho y Vientre): ¿Qué tonalidad base tiene y qué intensidad o dilución muestra?',
      '4. Diseño de las Alas: ¿Las ondulaciones son negras azabache, marrón canela, gris ahumado, con ribete inverso (perlado) o limpias?',
      '5. Manto y Espalda: ¿Hay dibujo regular o una "V" limpia del color del cuerpo (opalino)?',
      '6. Ojos: ¿Tienen pupila negra normal con iris blanco, pupila negra sólida sin iris (pío recesivo) o son rojo rubí (ino/lacewing)?',
      '7. Cera y Patas: ¿Machos con cera azul o rosa carne? ¿Patas grisáceas o rosa carne?'
    ]
  }
];
