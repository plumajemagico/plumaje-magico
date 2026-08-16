import { MutationItem } from '../types';

export const MUTATIONS_DATA: MutationItem[] = [
  // ==========================================
  // 1. LIGADAS AL SEXO (CROMOSOMA Z)
  // ==========================================
  {
    id: 'opalino',
    name: 'Opalino',
    alternativeNames: ['Opaline', 'V-Back'],
    slug: 'opalino',
    category: 'ligada_sexo',
    inheritance: 'sex_linked',
    shortDescription: 'Mutación ligada al sexo caracterizada por la inversión y reducción del dibujo ondulado en el manto (espalda en "V" limpia) y sufusión del color del cuerpo en las alas.',
    description: 'La mutación Opalino es una de las variedades más populares y consolidadas de la avicultura de periquitos. Afecta a la distribución de la eumelanina en las plumas tectrices y coberteras alares, dejando una zona despejada en forma de "V" entre los hombros con el color base del cuerpo, e invirtiendo el ribete de las marcas alares para adoptar el tono corporal en lugar del blanco o amarillo clásico.',
    phenotype: {
      bodyColor: 'Color corporal intenso y uniforme, idéntico a la línea base.',
      wingMarkings: 'Marcas alares invertidas o reducidas; el fondo entre las ondulaciones alares adopta el color del cuerpo (azul o verde) en lugar de blanco/amarillo. Centro del manto libre de ondulaciones formando la característica "V" limpia.',
      headAndMask: 'Máscara amplia con manchas gulares normales. Las ondulaciones de la nuca y coronilla son mucho más finas o ausentes.',
      cereAndLegs: 'Cera normal (azul brillante en machos adultos, marrón en hembras). Patas rosadas/grisáceas.',
      tailAndEyes: 'Timoneras centrales con el color del cuerpo en su zona basal. Ojos oscuros normales con iris blanco en adultos.'
    },
    geneticsExplanation: 'Mutación recesiva ligada al cromosoma Z (sex-linked). Los machos tienen dos cromosomas Z (ZZ) y requieren dos alelos opalinos para ser visuales (o uno para ser portador sano no visual: Z-Opal / Z+). Las hembras tienen cromosomas ZW, por lo que un solo alelo (Z-Opal / W) las hace visuales automáticamente; las hembras NUNCA pueden ser portadoras.',
    carriersExplanation: 'Solo los machos pueden ser portadores no visuales (Verde / opalino, Azul / opalino). Las hembras o son visuales o no poseen el gen.',
    breedingTips: 'Cruzar Macho Opalino x Hembra Común produce 100% hembras opalinas y 100% machos portadores de opalino. Es un cruce autosexable que permite identificar el sexo de los polluelos por su plumaje en el nido.',
    combinationsSummary: [
      'Opalino Perlado (Spangle Opaline)',
      'Opalino Canela (Cinnamon Opaline)',
      'Opalino Cara Amarilla / Golden Face (componente clave del Periquito Arcoíris)'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        caption: 'Manto dorsal con zona despejada en forma de "V" característica del Opalino',
        isVerified: true,
        tags: ['opalino', 'dorso', 'manto']
      }
    ],
    tags: ['ligada_al_sexo', 'opalino', 'patron', 'arcoiris', 'espalda_v'],
    relatedMutations: ['canela', 'perlado', 'alas-claras', 'inos', 'lacewing'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Información genética y fenotípica revisada y validada según estándares COM/WBO. (Corregida la confusión de la versión Kodular anterior donde figuraba texto de crestados).',
    sources: ['World Budgerigar Organisation (WBO)', 'Confédération Ornithologique Mondiale (COM)'],
    seo: {
      title: 'Periquito Opalino | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito australiano Opalino.',
      keywords: ['periquito opalino', 'genetica ligada al sexo', 'opaline budgie', 'espalda en v']
    }
  },
  {
    id: 'canela',
    name: 'Canela',
    alternativeNames: ['Cinnamon', 'Canela Castaño'],
    slug: 'canela',
    category: 'ligada_sexo',
    inheritance: 'sex_linked',
    shortDescription: 'Mutación ligada al sexo que transforma toda la melanina negra en un tono pardo cálido o marrón canela, con aclaramiento del color corporal.',
    description: 'La mutación Canela oxida incompletamente la eumelanina durante su síntesis folicular, resultando en un pigmento marrón cálido en lugar del negro tradicional. Tanto las marcas alares como las ondulaciones de la cabeza y la cola adoptan una tonalidad canela chocolate, y el color de base del cuerpo se aclara aproximadamente un 20-30%.',
    phenotype: {
      bodyColor: 'Aclarado en un 20-30% respecto al tono normal (el verde césped se vuelve verde manzana suave, el azul cielo se vuelve azul pastel luminoso).',
      wingMarkings: 'Ondulaciones de color marrón canela cálido en lugar de negro.',
      headAndMask: 'Máscara normal. Manchas gulares marrón canela. Manchas de la mejilla de color violeta algo más claro.',
      cereAndLegs: 'Cera normal. Patas de tonalidad rosada carnosa clara.',
      tailAndEyes: 'Ojos nacen de color rojo ciruela oscuro (plum eye) y oscurecen al crecer, manteniendo un reflejo rojizo bajo luz directa intensa. Timoneras marrón canela.'
    },
    geneticsExplanation: 'Recesiva ligada al cromosoma sexual Z. Los machos requieren 2 dosis (Z-Cin / Z-Cin) para ser visuales, mientras que las hembras requieren 1 sola dosis (Z-Cin / W).',
    carriersExplanation: 'Solo los machos pueden ser portadores no visuales (Macho común / canela). Las hembras nunca pueden portarlo.',
    breedingTips: 'Cruzar macho Canela con hembra común genera hembras Canela visuales inmediatas y machos portadores. Al cruzar con Opalino en el mismo macho puede dar lugar a entrecruzamiento (Crossover).',
    combinationsSummary: [
      'Opalino Canela',
      'Canela Perlado',
      'Canela Cara Dorada'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80',
        caption: 'Morfología con reducción de melanina a tonos terrosos canela',
        isVerified: true,
        tags: ['canela', 'melanina_marron']
      }
    ],
    tags: ['ligada_al_sexo', 'canela', 'cinnamon', 'plum_eye', 'color'],
    relatedMutations: ['opalino', 'inos', 'lacewing', 'perlado'],
    relatedFactors: ['factor-oscuridad'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Mecanismo genético ligado al sexo verificado.',
    sources: ['WBO Colour Standards', 'Mutations in Budgerigars (Dr. T. Daniels)'],
    seo: {
      title: 'Periquito Canela (Cinnamon) | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito australiano Canela.',
      keywords: ['periquito canela', 'cinnamon budgie', 'mutacion ligada al sexo', 'ojos ciruela']
    }
  },
  {
    id: 'inos',
    name: 'Inos (Lutino y Albino)',
    alternativeNames: ['Ino', 'Lutino', 'Albino'],
    slug: 'inos',
    category: 'ligada_sexo',
    inheritance: 'sex_linked',
    shortDescription: 'Mutación ligada al sexo que suprime totalmente la síntesis de melanina: Lutino en línea verde y Albino en línea azul.',
    description: 'La mutación Ino elimina el 100% de la eumelanina negra y marrón de todo el cuerpo del periquito. En la Línea Verde se conserva la psitacina dando origen al Lutino (cuerpo amarillo puro y ojos rojos). En la Línea Azul, al no haber psitacina ni melanina, surge el Albino (blanco puro y ojos rojos).',
    phenotype: {
      bodyColor: 'Lutino: Amarillo botón de oro uniforme. Albino: Blanco nítido inmaculado.',
      wingMarkings: 'Completamente ausentes (sin marcas alares ni ondulaciones).',
      headAndMask: 'Uniforme con el cuerpo. Manchas gulares blanco plateado.',
      cereAndLegs: 'Macho adulto: Cera rosa púrpura carnosa translúcida (no azula). Hembra adulta: Cera marrón rugosa normal. Patas rosas.',
      tailAndEyes: 'Ojos rojo brillante con iris blanco visible en adultos. Pico anaranjado. Timoneras blanco/amarillo marfil.'
    },
    geneticsExplanation: 'Recesiva ligada al cromosoma Z (alelo Ino). Es epistática sobre la mayoría de mutaciones de patrón y color estructural (enmascara opalino, canela, perlado, cobalto, etc.).',
    carriersExplanation: 'Solo los machos pueden ser portadores no visuales (Verde / ino, Azul / ino). Las hembras nunca pueden portar.',
    breedingTips: 'No se recomienda cruzar Ino x Ino continuamente durante muchas generaciones sin refrescar con ejemplares clásicos fuertes para mantener buen tamaño, densidad de pluma y vitalidad.',
    combinationsSummary: [
      'Cremino (Ino + Cara Amarilla Tipo II en línea azul)',
      'Albino Violeta',
      'Lutino Cara Dorada'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
        caption: 'Variedad de supresión melánica total con ojos rojos y plumaje brillante',
        isVerified: true,
        tags: ['lutino', 'albino', 'ino', 'ojos_rojos']
      }
    ],
    tags: ['ligada_al_sexo', 'ino', 'lutino', 'albino', 'ojos_rojos', 'color'],
    relatedMutations: ['lacewing', 'texas-clearbody', 'fallow-ingles', 'fallow-aleman'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Fenotipo y genética comprobados.',
    sources: ['WBO Colour Standards', 'Genetics for Budgerigar Breeders'],
    seo: {
      title: 'Periquitos Inos (Lutino y Albino) | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación de los periquitos Lutinos y Albinos.',
      keywords: ['periquito lutino', 'periquito albino', 'ino budgie', 'ojos rojos periquitos']
    }
  },
  {
    id: 'lacewing',
    name: 'Lacewing',
    alternativeNames: ['Alas de Encaje', 'Ojo Rojo Marcaje Canela'],
    slug: 'lacewing',
    category: 'ligada_sexo',
    inheritance: 'sex_linked',
    shortDescription: 'Mutación combinada o alelomórfica ligada al sexo con cuerpo amarillo o blanco puro, ojos rojos y marcas alares marrón canela suave (alas de encaje).',
    description: 'El Lacewing representa la combinación genética de la supresión corporal del gen Ino con el marcaje marrón del gen Canela. El resultado es un periquito de cuerpo amarillo brillante (línea verde) o blanco puro (línea azul) con ojos rojos y delicadas marcas alares canela claro.',
    phenotype: {
      bodyColor: 'Línea verde: Amarillo botón de oro. Línea azul: Blanco puro.',
      wingMarkings: 'Marcas alares marrón canela suave y delicadas ("alas de encaje").',
      headAndMask: 'Máscara limpia; gulares violeta pálido.',
      cereAndLegs: 'Machos: Cera rosa carnosa. Hembras: Cera marrón. Patas rosa.',
      tailAndEyes: 'Ojos rojo rubí con iris visible en adultos.'
    },
    geneticsExplanation: 'Resultado de recombinación genética (crossover) estrecha entre los loci Ino y Canela en el cromosoma Z, transmitiéndose como una unidad ligada al sexo.',
    carriersExplanation: 'Solo los machos pueden ser portadores no visuales.',
    breedingTips: 'Cruzar Macho Lacewing x Hembra Clásica produce 100% hembras Lacewing visuales y machos portadores.',
    combinationsSummary: ['Lacewing Opalino', 'Lacewing Cara Dorada'],
    images: [],
    tags: ['ligada_al_sexo', 'lacewing', 'crossover', 'ojos_rojos', 'patron'],
    relatedMutations: ['inos', 'canela', 'fallow-ingles'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Mecanismo de crossover Z-linked validado.',
    sources: ['WBO International Standards'],
    seo: {
      title: 'Periquito Lacewing | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito australiano Lacewing.',
      keywords: ['periquito lacewing', 'alas de encaje', 'lacewing budgie', 'genetica periquitos']
    }
  },
  {
    id: 'texas-clearbody',
    name: 'Texas Clearbody',
    alternativeNames: ['Cuerpo Claro de Texas', 'TCB'],
    slug: 'texas-clearbody',
    category: 'ligada_sexo',
    inheritance: 'sex_linked',
    shortDescription: 'Mutación ligada al sexo donde el color del cuerpo se aclara gradualmente desde el pecho hacia la rabadilla, con marcas alares oscuras.',
    description: 'Originada en Texas (EE. UU.), presenta una dilución gradual del color corporal: el pecho es casi amarillo (línea verde) o blanco (línea azul) y se va intensificando hacia la cloaca y rabadilla. Las remeras y marcas alares conservan una melanina negra a gris pizarra nítida.',
    phenotype: {
      bodyColor: 'Degradado desde tonos pálidos en el pecho hasta el color base en la rabadilla.',
      wingMarkings: 'Marcas alares oscuras a gris carbón con borde contrastado.',
      headAndMask: 'Máscara clara; gulares violetas.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Ojos oscuros con iris.'
    },
    geneticsExplanation: 'Mutación recesiva ligada al sexo. En cruces con Ino presenta una interacción particular en la que el fenotipo Clearbody puede expresarse de forma dominante, por lo que un Ino no necesariamente enmascara al Texas Clearbody.',
    carriersExplanation: 'Solo los machos pueden ser portadores no visuales de Texas Clearbody; las hembras son visuales o no portan el alelo.',
    breedingTips: 'En cruces con ejemplares normales sigue el patrón de herencia ligada al sexo. Al combinarlo con Ino, debe considerarse su interacción especial: el Clearbody puede expresarse y no quedar oculto bajo el fenotipo Ino.',
    combinationsSummary: ['Texas Clearbody Opalino', 'Texas Clearbody Cobalto'],
    images: [],
    tags: ['ligada_al_sexo', 'clearbody', 'texas', 'patron'],
    relatedMutations: ['easley-clearbody', 'inos', 'opalino'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Comportamiento alélico con el gen Ino confirmado.',
    sources: ['American Budgerigar Society (ABS)', 'WBO Standards'],
    seo: {
      title: 'Texas Clearbody | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito Texas Clearbody.',
      keywords: ['texas clearbody', 'cuerpo claro de texas', 'tcb budgie']
    }
  },
  {
    id: 'pizarra',
    name: 'Pizarra',
    alternativeNames: ['Slate', 'Gris Pizarra'],
    slug: 'pizarra',
    category: 'ligada_sexo',
    inheritance: 'sex_linked',
    shortDescription: 'Rara mutación ligada al sexo que confiere un tono gris pizarra plomizo azulado único con gulares violetas oscuras.',
    description: 'El Pizarra es una mutación muy rara ligada al cromosoma Z. En línea azul produce un color gris pizarra con matiz azulado oscuro muy particular, fácilmente diferenciable del Factor Gris porque el Pizarra conserva las manchas gulares violeta oscuro (mientras que el Gris las tiene grisáceas).',
    phenotype: {
      bodyColor: 'Gris pizarra plomizo azulado profundo.',
      wingMarkings: 'Ondulaciones negras azabache.',
      headAndMask: 'Máscara blanca; gulares violeta oscuro intenso.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Timoneras negras azuladas. Ojos oscuros con iris.'
    },
    geneticsExplanation: 'Recesiva ligada al sexo (cromosoma Z). En el proyecto original de Kodular figuraba a veces bajo recesivas generales; la literatura zoológica ratifica su naturaleza ligada al sexo.',
    carriersExplanation: 'Solo los machos portan.',
    breedingTips: 'Variedad extremadamente escasa en criaderos globales. Requiere anillamiento riguroso.',
    combinationsSummary: ['Pizarra Opalino', 'Pizarra Canela'],
    images: [],
    tags: ['ligada_al_sexo', 'pizarra', 'slate', 'color', 'raro'],
    relatedMutations: ['canela', 'opalino'],
    relatedFactors: ['factor-gris'],
    relatedLines: ['linea-azul', 'linea-verde'],
    verificationStatus: 'verified',
    verificationNotes: 'Diferenciación con Factor Gris comprobada científicamente y confirmada herencia ligada al sexo.',
    sources: ['Budgerigar Society UK Heritage Archive'],
    seo: {
      title: 'Periquito Pizarra (Slate) | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito australiano Pizarra.',
      keywords: ['periquito pizarra', 'slate budgie', 'periquito gris azulado']
    }
  },

  // ==========================================
  // 2. DOMINANTES / SEMIDOMINANTES / PATRONES DOMINANTES
  // ==========================================
  {
    id: 'perlado',
    name: 'Perlado',
    alternativeNames: ['Spangle', 'Alas Perladas'],
    slug: 'perlado',
    category: 'dominante',
    inheritance: 'incomplete_dominant',
    shortDescription: 'Mutación dominante que invierte el patrón alar (borde negro con centro claro) en Factor Simple y suprime el dibujo en Doble Factor (amarillo o blanco de ojo negro).',
    description: 'El gen Spangle modifica radicalmente el depósito de melanina en las plumas alares y corporales. En Simple Factor (SF) crea un ribeteado fino negro en el perímetro de cada pluma alar, manteniendo el centro amarillo o blanco ("alas de encaje"). En Doble Factor (DF) la melanina se elimina casi por completo, produciendo un periquito completamente amarillo o blanco con ojos negros normales.',
    phenotype: {
      bodyColor: 'Simple Factor: Color normal ligeramente aclarado con sutil efecto escamado. Doble Factor: Amarillo puro (línea verde) o blanco puro (línea azul).',
      wingMarkings: 'SF: Patrón invertido (delgada media luna negra en la punta de cada pluma). DF: Totalmente lisas sin marcas.',
      headAndMask: 'SF: Máscara normal con manchas gulares que pueden presentar centro blanco/amarillo. DF: Limpia.',
      cereAndLegs: 'Normal (azul en machos adultos, marrón en hembras).',
      tailAndEyes: 'SF: Timoneras blancas o amarillas con ribete oscuro. DF: Blancas o amarillas puras. Ojos oscuros con iris blanco en adultos (diferenciable de los Inos por el ojo negro).'
    },
    geneticsExplanation: 'Dominante autosómico de dominancia incompleta. SF (Sp/sp) produce el patrón perlado clásico. DF (Sp/Sp) produce el fenotipo blanco/amarillo de ojos negros.',
    expressionSF_DF: {
      singleFactor: 'Perlado clásico con ribete negro en el contorno de las plumas alares y marcas normales reducidas.',
      doubleFactor: 'Periquito completamente monocromático (Blanco o Amarillo de ojos negros oscuros con iris).'
    },
    carriersExplanation: 'Al ser dominante, no existen "portadores ocultos" de Perlado: si tiene el gen, es visual (SF o DF).',
    breedingTips: 'Perlado SF x Perlado SF = 25% Clásicos no perlados, 50% Perlados SF, 25% Perlados DF (Ojos negros). Perlado DF x Clásico = 100% Perlados SF.',
    combinationsSummary: [
      'Perlado Opalino (Spangle Opaline)',
      'Perlado Cara Dorada',
      'Perlado Violeta Doble Factor'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80',
        caption: 'Patrón de ribete alar invertido en Simple Factor',
        isVerified: true,
        tags: ['perlado', 'spangle', 'simple_factor']
      }
    ],
    tags: ['dominante', 'perlado', 'spangle', 'patron', 'doble_factor'],
    relatedMutations: ['pio-dominante', 'alas-claras', 'opalino'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Datos genéticos confirmados según estándares de la WBO.',
    sources: ['WBO Colour Standards'],
    seo: {
      title: 'Periquito Perlado (Spangle) | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito australiano Perlado.',
      keywords: ['periquito perlado', 'spangle budgie', 'perlado doble factor', 'alas perladas']
    }
  },
  {
    id: 'pio-dominante',
    name: 'Pío Dominante',
    alternativeNames: ['Dominant Pied', 'Pío Australiano', 'Pío Continental'],
    slug: 'pio-dominante',
    category: 'dominante',
    inheritance: 'dominant',
    shortDescription: 'Mutación dominante que genera parches asimétricos sin melanina (amarillos o blancos) en el cuerpo y alas, con banda pectoral despejada.',
    description: 'El Pío Dominante (conocido también como Australiano o Continental) introduce áreas donde la migración embrionaria de melanocitos se detiene, dejando zonas despigmentadas libres de melanina. Típicamente presentan una banda despejada en el pecho y manchas claras en la nuca y alas.',
    phenotype: {
      bodyColor: 'Color base interrumpido por manchas asimétricas blancas o amarillas.',
      wingMarkings: 'Distribución irregular de marcas onduladas normales y parches lisos claros.',
      headAndMask: 'Mancha clara en la coronilla/nuca (spot nucal). Manchas gulares a menudo incompletas.',
      cereAndLegs: 'Cera azul normal en machos (a veces con zonas rosa), marrón en hembras. Patas carnosas o moteadas.',
      tailAndEyes: 'Ojos oscuros con iris blanco en adultos.'
    },
    geneticsExplanation: 'Dominante autosómico. Un solo factor basta para manifestar el fenotipo manchado.',
    expressionSF_DF: {
      singleFactor: 'Manchas moderadas y banda pectoral clásica.',
      doubleFactor: 'Mayor extensión de manchas claras (hasta 70-80% despigmentado).'
    },
    carriersExplanation: 'No existen portadores no visuales de pío dominante.',
    breedingTips: 'Pío Dominante x Clásico = 50% Píos Dominantes, 50% Clásicos.',
    combinationsSummary: ['Pío Dominante Opalino', 'Pío Dominante Perlado'],
    images: [],
    tags: ['dominante', 'pio', 'patron', 'manchas'],
    relatedMutations: ['pio-recesivo', 'clearflight', 'pio-collar', 'pio-holandes'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Revisado y validado según estándares internacionales.',
    sources: ['WBO Official Color Standards'],
    seo: {
      title: 'Pío Dominante | Plumaje Mágico',
      description: 'Características, genética, apariencia y documentación del periquito Pío Dominante.',
      keywords: ['pio dominante', 'dominant pied budgie', 'periquito manchado']
    }
  },
  {
    id: 'pio-collar',
    name: 'Pío Dominante de Collar',
    alternativeNames: ['Banded Pied', 'Pío de Banda Pectoral'],
    slug: 'pio-collar',
    category: 'patrones',
    inheritance: 'incomplete_dominant',
    shortDescription: 'Patrón con una banda clara limpia y continua que atraviesa el pecho a modo de collar, con marcas alares equilibradas.',
    description: 'Variedad seleccionada del Pío Dominante donde la despigmentación pectoral forma una franja nítida horizontal o collar completo alrededor del pecho y cuello, manteniendo el color uniforme en vientre y máscara.',
    phenotype: {
      bodyColor: 'Banda clara horizontal bien definida en el pecho; cuerpo inferior de color base sólido.',
      wingMarkings: 'Marcas alares simétricas con parches claros en hombros.',
      headAndMask: 'Spot nucal visible y máscara limpia.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Ojos con iris visible.'
    },
    geneticsExplanation: 'Forma parte del complejo genético del Pío Dominante autosómico con selección poligénica para definición del collar.',
    carriersExplanation: 'No hay portadores ocultos.',
    breedingTips: 'Se reproduce cruzando ejemplares con buen collar para fijar la simetría del patrón.',
    combinationsSummary: ['Pío Collar Azul Cobalto', 'Pío Collar Opalino'],
    images: [],
    tags: ['patron', 'pio', 'collar', 'dominante'],
    relatedMutations: ['pio-dominante', 'clearflight', 'pio-recesivo'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Información pendiente de verificación para confirmar su estatus como mutación independiente o variante morfológica fijada del Pío Dominante.',
    sources: ['Kodular Heritage Project Data'],
    seo: {
      title: 'Pío Dominante de Collar | Plumaje Mágico',
      description: 'Características y patrones del periquito Pío Dominante de Collar.',
      keywords: ['pio de collar', 'banded pied budgie', 'patron periquitos']
    }
  },
  {
    id: 'clearflight',
    name: 'Clearflight (Pío Continental de Vuelo Claro)',
    alternativeNames: ['Continental Clearflight', 'Pío Holandés de Vuelo Claro'],
    slug: 'clearflight',
    category: 'patrones',
    inheritance: 'dominant',
    shortDescription: 'Mutación dominante que despigmenta específicamente las plumas remeras de las alas (vuelo claro) y timoneras con mancha nucal.',
    description: 'En el Clearflight, las plumas remeras primarias y secundarias son de color blanco (línea azul) o amarillo (línea verde) puro, mientras que el cuerpo conserva su color casi intacto salvo por un spot claro en la nuca y pequeñas manchas en la coronilla.',
    phenotype: {
      bodyColor: 'Casi sólido en el cuerpo.',
      wingMarkings: 'Todas las plumas remeras primarias son completamente claras sin melanina.',
      headAndMask: 'Spot nucal claro característico.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Timoneras claras. Ojos con iris blanco.'
    },
    geneticsExplanation: 'Dominante autosómico. Cuando se combina con el Pío Recesivo (Danés), produce el popular Pío Holandés de Ojos Negros (Dutch Pied / Black-eyed Clear).',
    carriersExplanation: 'No hay portadores.',
    breedingTips: 'Fundamental para criar ejemplares combinados de cuerpo limpio.',
    combinationsSummary: ['Pío Holandés de Ojos Negros (Clearflight + Pío Recesivo)'],
    images: [],
    tags: ['patron', 'clearflight', 'dominante', 'vuelo_claro'],
    relatedMutations: ['pio-dominante', 'pio-recesivo', 'pio-holandes'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Información genética en revisión para homologación con nomenclaturas europeas y americanas.',
    sources: ['Budgerigar Society UK'],
    seo: {
      title: 'Clearflight (Vuelo Claro) | Plumaje Mágico',
      description: 'Características, genética y descripción del periquito Clearflight.',
      keywords: ['clearflight budgie', 'vuelo claro', 'pio continental']
    }
  },
  {
    id: 'cara-amarilla-i',
    name: 'Cara Amarilla Tipo I',
    alternativeNames: ['Yellowface I', 'YF1', 'Cara Amarilla Mutación 1'],
    slug: 'cara-amarilla-i',
    category: 'dominante',
    inheritance: 'dominant',
    shortDescription: 'Mutación que reintroduce psitacina amarilla exclusivamente en la máscara de periquitos de línea azul, manteniendo el cuerpo azul.',
    description: 'Permite que la máscara y la cola de un periquito de línea azul muestren color amarillo limón suave sin invadir el color azul del cuerpo tras la primera muda.',
    phenotype: {
      bodyColor: 'Azul limpio sin invasión verde en el cuerpo tras la muda.',
      wingMarkings: 'Normales con ribete blanco/amarillento tenue.',
      headAndMask: 'Máscara amarillo limón suave.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Dominante autosómico respecto al azul normal, alelomórfico en el locus del gen azul (alelo aYF1).',
    carriersExplanation: 'No aplica.',
    breedingTips: 'Ideal para quienes buscan periquitos azules con cara amarilla pura sin que el cuerpo se vuelva turquesa.',
    combinationsSummary: ['Cara Amarilla I Azul Cielo', 'Cara Amarilla I Opalino'],
    images: [],
    tags: ['dominante', 'cara_amarilla', 'color', 'psitacina'],
    relatedMutations: ['cara-amarilla-ii', 'golden-face', 'cream-face'],
    relatedLines: ['linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Alopoliploidía y alelismo múltiple con azul confirmados.',
    sources: ['WBO Standards'],
    seo: {
      title: 'Cara Amarilla Tipo I | Plumaje Mágico',
      description: 'Características y genética del periquito Cara Amarilla Tipo I.',
      keywords: ['cara amarilla tipo 1', 'yellowface I budgie', 'psitacina periquito']
    }
  },
  {
    id: 'cara-amarilla-ii',
    name: 'Cara Amarilla Tipo II',
    alternativeNames: ['Yellowface II', 'YF2', 'Cara Amarilla Mutación 2'],
    slug: 'cara-amarilla-ii',
    category: 'dominante',
    inheritance: 'dominant',
    shortDescription: 'Mutación donde el pigmento amarillo intenso invade la máscara y, tras la primera muda, se difunde por todo el cuerpo azul convirtiéndolo en un espectacular tono verde agua o turquesa.',
    description: 'En el Cara Amarilla Tipo II, el pigmento amarillo es mucho más fuerte. Tras la muda juvenil, el amarillo se expande sobre el plumaje azul, creando tonos aguamarina, turquesa o verde esmeralda deslumbrantes. Es parte esencial del periquito Arcoíris.',
    phenotype: {
      bodyColor: 'Azul de fondo con veladura amarilla brillante que genera color aguamarina/turquesa.',
      wingMarkings: 'Ondulaciones normales con fondo amarillo.',
      headAndMask: 'Máscara amarillo intenso botón de oro.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Dominante respecto al azul y dominante incompleto sobre Cara Amarilla Tipo I en el locus azul.',
    expressionSF_DF: {
      singleFactor: 'El amarillo se difunde con fuerza por todo el cuerpo azul tras la primera muda creando verde mar/turquesa.',
      doubleFactor: 'El amarillo queda más restringido a la máscara y el cuerpo retiene un tono azul más puro.'
    },
    carriersExplanation: 'Al ser dominante se manifiesta visualmente.',
    breedingTips: 'En Simple Factor (SF) difunde por todo el cuerpo; en Doble Factor (DF) la invasión corporal suele ser más controlada.',
    combinationsSummary: ['Arcoíris (con Cobalto, Opalino y Alas Claras)', 'Cara Amarilla II Violeta'],
    images: [],
    tags: ['dominante', 'cara_amarilla', 'arcoiris', 'turquesa', 'color'],
    relatedMutations: ['cara-amarilla-i', 'golden-face', 'alas-claras', 'opalino'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Revisado y validado.',
    sources: ['WBO Colour Standards'],
    seo: {
      title: 'Cara Amarilla Tipo II | Plumaje Mágico',
      description: 'Características y genética del periquito Cara Amarilla Tipo II.',
      keywords: ['cara amarilla tipo 2', 'yellowface II budgie', 'periquito arcoiris']
    }
  },
  {
    id: 'golden-face',
    name: 'Golden Face (Cara Dorada)',
    alternativeNames: ['Cara Dorada', 'Goldenface', 'Yellowface Australiano'],
    slug: 'golden-face',
    category: 'dominante',
    inheritance: 'dominant',
    shortDescription: 'La forma más intensa y saturada de cara amarilla, con psitacina oro profundo que invade poderosamente el cuerpo azul.',
    description: 'Originada en Australia, el Goldenface produce el amarillo más saturado y profundo conocido en periquitos de línea azul. En Simple Factor convierte a un periquito azul en un tono verde hierba brillante casi indistinguible a simple vista de un verde ancestral excepto por el azul residual en las supracaudales.',
    phenotype: {
      bodyColor: 'SF: Invade intensamente transformando el azul en un verde esmeralda rico. DF: La máscara es dorada pero el cuerpo retiene un tono azul turquesa más nítido.',
      wingMarkings: 'Ribetes amarillo oro intenso.',
      headAndMask: 'Máscara oro intenso saturado.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Dominante autosómico del locus azul/amarillo con mayor producción de pigmento carotenoide/psitacina.',
    expressionSF_DF: {
      singleFactor: 'Invasión corporal extrema (apariencia verde esmeralda).',
      doubleFactor: 'Máscara oro brillante y cuerpo azul turquesa limpio.'
    },
    carriersExplanation: 'No aplica.',
    breedingTips: 'Cruzar Goldenface DF con Azul produce 100% Goldenface SF espectaculares.',
    combinationsSummary: ['Goldenface Cobalt Violet Opaline', 'Goldenface Arcoíris Supremo'],
    images: [],
    tags: ['dominante', 'golden_face', 'cara_dorada', 'color', 'psitacina'],
    relatedMutations: ['cara-amarilla-ii', 'opalino', 'alas-claras'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Validado según literatura avícola australiana y WBO.',
    sources: ['Australian Budgerigar Council', 'WBO Standards'],
    seo: {
      title: 'Golden Face (Cara Dorada) | Plumaje Mágico',
      description: 'Características, genética y comportamiento del periquito Golden Face.',
      keywords: ['golden face budgie', 'cara dorada periquito', 'yellowface australiano']
    }
  },
  {
    id: 'cream-face',
    name: 'Cream Face (Cara Crema)',
    alternativeNames: ['Creamface', 'Cara Marfil'],
    slug: 'cream-face',
    category: 'otras',
    inheritance: 'unknown',
    shortDescription: 'Variante de cara amarilla caracterizada por una tonalidad crema muy pálida y suave en la máscara.',
    description: 'Denominación identificada en registros históricos para periquitos de línea azul cuya máscara presenta una pigmentación marfil/crema casi blanca, muy inferior en saturación a la del Cara Amarilla Tipo I.',
    phenotype: {
      bodyColor: 'Línea azul normal.',
      wingMarkings: 'Normales con bordes marfil.',
      headAndMask: 'Máscara color crema pastel muy suave.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Mecanismo en estudio. Se debate si constituye un alelo ultra-diluido del locus azul o una interacción poligénica de selección cuantitativa.',
    carriersExplanation: 'Pendiente de verificación.',
    breedingTips: 'En revisión técnica.',
    combinationsSummary: ['Cream Face Azul Cielo'],
    images: [],
    tags: ['en_revision', 'cream_face', 'color', 'psitacina'],
    relatedMutations: ['cara-amarilla-i', 'cara-amarilla-ii'],
    relatedLines: ['linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Información pendiente de verificación: clasificación genética y estabilidad como mutación independiente en revisión.',
    sources: ['Kodular Heritage Project Data'],
    seo: {
      title: 'Cream Face (Cara Crema) | Plumaje Mágico',
      description: 'Información y estado de verificación del periquito Cream Face.',
      keywords: ['cream face budgie', 'cara crema periquito', 'mutaciones en revision']
    }
  },
  {
    id: 'darkwing',
    name: 'DarkWing (Ala Oscura)',
    alternativeNames: ['Darkwing', 'Ala Oscurecida'],
    slug: 'darkwing',
    category: 'dominante',
    inheritance: 'dominant',
    shortDescription: 'Mutación dominante caracterizada por un oscurecimiento selectivo y nítido de las coberteras y remeras alares.',
    description: 'Variedad que intensifica el pigmento de las marcas alares haciéndolas más contrastadas y definidas, documentada en cruces experimentales de criadores europeos.',
    phenotype: {
      bodyColor: 'Color base normal.',
      wingMarkings: 'Marcas alares densas y oscurecidas con bordes muy nítidos.',
      headAndMask: 'Máscara normal.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Descrita como dominante autosómica en la literatura preliminar.',
    carriersExplanation: 'No hay portadores ocultos.',
    breedingTips: 'En evaluación de estándares de concurso.',
    combinationsSummary: ['Darkwing Opalino'],
    images: [],
    tags: ['dominante', 'darkwing', 'patron', 'melanina'],
    relatedMutations: ['alas-negras', 'clearflight'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Contenido pendiente de revisión para unificar criterios genéticos internacionales.',
    sources: ['Kodular Heritage Project Data'],
    seo: {
      title: 'DarkWing (Ala Oscura) | Plumaje Mágico',
      description: 'Documentación técnica y estado de revisión del periquito DarkWing.',
      keywords: ['darkwing budgie', 'ala oscura', 'mutacion dominante']
    }
  },
  {
    id: 'crestado',
    name: 'Crestado (Moñudo)',
    alternativeNames: ['Crested', 'Moñudo', 'Corona'],
    slug: 'crestado',
    category: 'estructural',
    inheritance: 'polygenic',
    shortDescription: 'Mutación estructural que altera la dirección del crecimiento de las plumas de la cabeza formando moños circulares, semicirculares o coronas completas.',
    description: 'El periquito crestado es una variedad morfológica/estructural donde un grupo de plumas de la cabeza crece hacia adelante o en remolino. Se presenta en tres formas principales: Tufted (pincel frontal), Half-circular (semicresta) y Full Circular (cresta redonda completa o corona).',
    phenotype: {
      bodyColor: 'Normal según la línea de color.',
      wingMarkings: 'Normales según la variedad.',
      headAndMask: 'Plumas de la frente y coronilla erguidas o dispuestas en roseta radiante.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Herencia compleja dominante con penetrancia variable y factores modificadores poligénicos. Se considera que el factor de doble cresta extrema puede tener efectos perjudiciales en homocigosis si no se maneja adecuadamente.',
    carriersExplanation: 'Existen aves con "factor crestado" que no expresan el moño visualmente pero transmiten la tendencia genética.',
    breedingTips: 'Cruzar siempre Crestado x No Crestado (con ancestros crestados) para asegurar buena vitalidad y evitar problemas de fertilidad o letalidad.',
    combinationsSummary: ['Crestado Opalino', 'Crestado Hagoromo'],
    images: [],
    tags: ['estructural', 'crestado', 'moñudo', 'corona', 'forma'],
    relatedMutations: ['hagoromo'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Patrón de cría estructural y herencia poligénica revisados.',
    sources: ['Crested Budgerigar Club', 'WBO Standards'],
    seo: {
      title: 'Periquito Crestado (Moñudo) | Plumaje Mágico',
      description: 'Características, morfología y genética del periquito australiano Crestado.',
      keywords: ['periquito crestado', 'crested budgie', 'periquito moñudo', 'periquito corona']
    }
  },
  {
    id: 'hagoromo',
    name: 'Hagoromo (Helicóptero / Japonés)',
    alternativeNames: ['Hagoromo', 'Helicóptero', 'Japanese Crested', 'Flower Budgie'],
    slug: 'hagoromo',
    category: 'estructural',
    inheritance: 'polygenic',
    shortDescription: 'Mutación estructural originada en Japón que combina una cresta circular en la cabeza con dos rosetas de plumas en flor sobre las alas.',
    description: 'El Hagoromo (nombre japonés que alude al manto de plumas de las doncellas celestiales) presenta una cresta o corona en la cabeza y dos rosetas florales ("chrysanthemums") formadas por plumas que crecen hacia arriba en el dorso alar.',
    phenotype: {
      bodyColor: 'Normal según la línea.',
      wingMarkings: 'Rosetas florales en la espalda/alas que asemejan flores abiertas.',
      headAndMask: 'Cresta circular o moño radiante en la cabeza.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Normal.'
    },
    geneticsExplanation: 'Herencia poligénica/semidominante relacionada con los genes de cresta y orientación de folículos de plumas dorsales.',
    carriersExplanation: 'Aves portadoras pueden manifestar rosetas incompletas o plumas invertidas sutiles.',
    breedingTips: 'La selección requiere mantener ejemplares vigorosos y vigilar que las rosetas no generen quistes foliculares.',
    combinationsSummary: ['Hagoromo Lutino', 'Hagoromo Arcoíris', 'Hagoromo Azul Cobalto'],
    images: [],
    tags: ['estructural', 'hagoromo', 'helicoptero', 'rosetas', 'forma'],
    relatedMutations: ['crestado'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Estándar y morfología validados según la Japan Budgerigar Society.',
    sources: ['Japan Budgerigar Society', 'WBO Special Varieties'],
    seo: {
      title: 'Periquito Hagoromo (Helicóptero) | Plumaje Mágico',
      description: 'Características, origen y genética del periquito Hagoromo japonés.',
      keywords: ['periquito hagoromo', 'periquito helicoptero', 'japanese budgie', 'rosetas alares']
    }
  },
  {
    id: 'easley-clearbody',
    name: 'Easley Clearbody (Cuerpo Claro Dominante)',
    alternativeNames: ['Easley Clearbody', 'Laced Clearbody', 'Clearbody Dominante'],
    slug: 'easley-clearbody',
    category: 'dominante',
    inheritance: 'dominant',
    shortDescription: 'Mutación dominante autosómica (no ligada al sexo) que produce cuerpo claro con marcas alares negro azabache contrastadas.',
    description: 'Descubierta por C.F. Easley en California. A diferencia del Texas Clearbody, esta variedad es AUTOSÓMICA DOMINANTE y sus marcas alares son negro azabache muy profundo, creando un contraste extremo con el cuerpo claro.',
    phenotype: {
      bodyColor: 'Cuerpo aclarado a marfil o amarillo suave con tonalidad uniforme.',
      wingMarkings: 'Negro azabache intenso y nítido con dibujo completo.',
      headAndMask: 'Máscara limpia con gulares violeta oscuro.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Ojos oscuros con iris.'
    },
    geneticsExplanation: 'Autosómica dominante (SF o DF). NOTA: En el proyecto original de Kodular estaba agrupada por error con las ligadas al sexo y con textos de línea azul. En genética formal es un gen dominante autosómico.',
    expressionSF_DF: {
      singleFactor: 'Cuerpo diluido con marcas negras contrastadas.',
      doubleFactor: 'Similar con mayor pureza de contraste.'
    },
    carriersExplanation: 'No hay portadores ocultos debido a su dominancia.',
    breedingTips: 'Se puede distinguir del Texas Clearbody por el color de las remeras (mucho más negras) y por el patrón de herencia autosómico.',
    combinationsSummary: ['Easley Clearbody Cobalto'],
    images: [],
    tags: ['dominante', 'clearbody', 'easley', 'patron', 'contraste'],
    relatedMutations: ['texas-clearbody', 'pio-dominante'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Corregido el error de la versión Kodular anterior (donde figuraba texto erróneo de línea azul y clasificación ligada al sexo).',
    sources: ['American Budgerigar Society', 'WBO Standards'],
    seo: {
      title: 'Easley Clearbody | Plumaje Mágico',
      description: 'Características, genética y diferencias del periquito Easley Clearbody.',
      keywords: ['easley clearbody', 'cuerpo claro dominante', 'clearbody budgie']
    }
  },

  // ==========================================
  // 3. RECESIVAS AUTOSÓMICAS
  // ==========================================
  {
    id: 'alas-claras',
    name: 'Alas Claras',
    alternativeNames: ['Clearwing', 'Alas Blancas / Alas Amarillas'],
    slug: 'alas-claras',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación alelomórfica que reduce drásticamente la melanina alar (alas casi blancas o amarillas) manteniendo el color corporal lleno y brillante.',
    description: 'El Alas Claras diluye intensamente el dibujo alar (hasta un 80-90% de reducción melánica) mientras que conserva el color corporal con un 90-100% de intensidad y brillo. Es una de las cuatro mutaciones requeridas para criar el legendario fenotipo Arcoíris (Línea Azul + Cobalto + Opalino + Cara Amarilla/Dorada + Alas Claras).',
    phenotype: {
      bodyColor: 'Color corporal intenso, profundo y brillante (sin la dilución corporal que sufren los Alas Grises).',
      wingMarkings: 'Ondulaciones casi invisibles o de un gris humo levísimo sobre fondo blanco (línea azul) o amarillo (línea verde).',
      headAndMask: 'Máscara brillante con manchas gulares violetas nítidas y marcas gulares tenues.',
      cereAndLegs: 'Normales.',
      tailAndEyes: 'Ojos oscuros con iris blanco en adultos. Timoneras claras con tonalidad tenue del cuerpo.'
    },
    geneticsExplanation: 'Alelomorfo autosómico recesivo del locus de dilución (dil^cw). Es codominante con el alelo Alas Grises (dil^gw) y dominante sobre el Diluido clásico (dil).',
    carriersExplanation: 'Portado tanto por machos como por hembras.',
    breedingTips: 'Crucial para la selección de líneas de periquitos Arcoíris de concurso. Buscar ejemplares con el cuerpo lo más intenso posible y las alas lo más limpias posible.',
    combinationsSummary: [
      'Periquito Arcoíris (Azul + Cobalto + Cara Amarilla II/Dorada + Opalino + Alas Claras)',
      'Alas Claras Violeta'
    ],
    images: [],
    tags: ['recesiva', 'alas_claras', 'clearwing', 'arcoiris', 'dilucion'],
    relatedMutations: ['alas-grises', 'diluido', 'opalino', 'cara-amarilla-ii', 'golden-face'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Validadas relaciones alélicas con alas grises y diluido.',
    sources: ['WBO Colour Standards', 'Clearwing Budgerigar Society'],
    seo: {
      title: 'Periquito Alas Claras (Clearwing) | Plumaje Mágico',
      description: 'Características, genética y cría del periquito Alas Claras.',
      keywords: ['alas claras', 'clearwing budgie', 'periquito arcoiris', 'alas claras azul']
    }
  },
  {
    id: 'alas-grises',
    name: 'Alas Grises',
    alternativeNames: ['Greywing', 'Alas de Ceniza'],
    slug: 'alas-grises',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación que diluye aproximadamente el 50% de la melanina alar a gris humo y reduce un 50% la intensidad del color corporal.',
    description: 'El Alas Grises produce un fenotipo suave y apastelado: las marcas negras de las alas se convierten en un gris ceniza uniforme y el color del cuerpo (azul o verde) se atenúa a la mitad de su saturación silvestre.',
    phenotype: {
      bodyColor: 'Diluido al 50% (verde manzana suave o azul cielo pálido).',
      wingMarkings: 'Ondulaciones de color gris medio nítidas.',
      headAndMask: 'Gulares violeta azulado pálido.',
      cereAndLegs: 'Normales.',
      tailAndEyes: 'Timoneras gris humo. Ojos oscuros con iris blanco.'
    },
    geneticsExplanation: 'Autosómica recesiva, alelomorfo del locus de dilución (dil^gw).',
    carriersExplanation: 'Portadores normales en ambos sexos.',
    breedingTips: 'Al cruzar Alas Grises con Alas Claras se obtiene el fenotipo híbrido "Full Body Greywing" (Alas Grises de Cuerpo Intenso).',
    combinationsSummary: ['Alas Grises Opalino', 'Alas Grises Violeta', 'Full Body Greywing'],
    images: [],
    tags: ['recesiva', 'alas_grises', 'greywing', 'dilucion'],
    relatedMutations: ['alas-claras', 'diluido', 'alas-negras'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Revisado y validado.',
    sources: ['WBO Standards'],
    seo: {
      title: 'Periquito Alas Grises (Greywing) | Plumaje Mágico',
      description: 'Características, genética y estándares del periquito Alas Grises.',
      keywords: ['alas grises', 'greywing budgie', 'mutacion recesiva']
    }
  },
  {
    id: 'diluido',
    name: 'Diluido',
    alternativeNames: ['Dilute', 'Sulfúreo', 'Blanco / Amarillo Sufuso'],
    slug: 'diluido',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación recesiva basal del locus de dilución que reduce aproximadamente el 80% de la melanina corporal y alar.',
    description: 'El Diluido es el alelo más recesivo de la serie de dilución. Produce un periquito de color amarillo pálido (línea verde) o blanco fantasma (línea azul) con sutil sufusión del color base y marcas alares gris fantasma muy tenues.',
    phenotype: {
      bodyColor: 'Diluido al 80% (amarillo pálido o blanco con brillo suave del color base).',
      wingMarkings: 'Ondulaciones gris muy claro o casi imperceptibles.',
      headAndMask: 'Máscara suave, gulares lavanda pálido.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Ojos oscuros con iris blanco en adultos.'
    },
    geneticsExplanation: 'Autosómica recesiva pura (dil/dil). Es recesivo ante el Silvestre (+), Alas Claras (dil^cw) y Alas Grises (dil^gw).',
    carriersExplanation: 'Ambos sexos portan.',
    breedingTips: 'Diluido x Diluido produce 100% Diluidos.',
    combinationsSummary: ['Diluido Violeta', 'Diluido Cara Amarilla'],
    images: [],
    tags: ['recesiva', 'diluido', 'dilute', 'color', 'pastel'],
    relatedMutations: ['alas-claras', 'alas-grises'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Jerarquía alélica confirmada.',
    sources: ['WBO Colour Standards'],
    seo: {
      title: 'Periquito Diluido (Dilute) | Plumaje Mágico',
      description: 'Características y genética del periquito Diluido.',
      keywords: ['periquito diluido', 'dilute budgie', 'periquito amarillo suave']
    }
  },
  {
    id: 'alas-negras',
    name: 'Alas Negras (Blackwing)',
    alternativeNames: ['Blackwing', 'Ala Negra'],
    slug: 'alas-negras',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación recesiva originada en Europa que intensifica masivamente la melanina negra en las alas, cubriéndolas de un manto negro casi sólido.',
    description: 'Una de las mutaciones más fascinantes y recientes en la avicultura de periquitos. A diferencia de las mutaciones que diluyen, el Blackwing incrementa la producción melánica en las coberteras alares hasta formar alas prácticamente negras sólidas.',
    phenotype: {
      bodyColor: 'Color base saturado con posible sufusión de melanina en el pecho.',
      wingMarkings: 'Alas cubiertas de negro intenso con mínimo borde claro.',
      headAndMask: 'Ondulaciones nucales densas y oscuras.',
      cereAndLegs: 'Normales o ligeramente más oscuras.',
      tailAndEyes: 'Timoneras negras sólidas. Ojos oscuros con iris.'
    },
    geneticsExplanation: 'Autosómica recesiva. En estudio continuo de combinaciones con otras mutaciones eumelánicas.',
    carriersExplanation: 'Ambos sexos portan el gen de forma no visual.',
    breedingTips: 'Línea de cría en desarrollo a nivel internacional. Muy cotizada entre criadores especializados.',
    combinationsSummary: ['Blackwing Opalino', 'Blackwing Black Face'],
    images: [],
    tags: ['recesiva', 'alas_negras', 'blackwing', 'melanina', 'en_estudio'],
    relatedMutations: ['black-face', 'alas-claras'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Contenido pendiente de revisión para afinar estándares mundiales de concurso recientes.',
    sources: ['European Budgerigar Breeder Publications'],
    seo: {
      title: 'Alas Negras (Blackwing) | Plumaje Mágico',
      description: 'Características, genética y estado de revisión del periquito Alas Negras.',
      keywords: ['blackwing budgie', 'alas negras periquito', 'mutacion blackwing']
    }
  },
  {
    id: 'black-face',
    name: 'Black Face (Cara Negra)',
    alternativeNames: ['Blackface', 'Cara Negra'],
    slug: 'black-face',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación recesiva rara originada en los Países Bajos donde las ondulaciones negras cubren toda la máscara frontal y el pecho.',
    description: 'En el Black Face, las marcas melánicas se extienden a zonas del cuerpo que normalmente carecen de ellas: la frente, la máscara y el pecho se cubren de un rayado negro tupido.',
    phenotype: {
      bodyColor: 'Marcado por ondas melánicas en pecho y vientre.',
      wingMarkings: 'Ondulaciones muy densas.',
      headAndMask: 'Máscara completamente invadida por rayas negras.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Ojos oscuros normales.'
    },
    geneticsExplanation: 'Autosómica recesiva. Estuvo al borde de la extinción y se está recuperando en criaderos especializados.',
    carriersExplanation: 'Ambos sexos portan de forma heterocigota.',
    breedingTips: 'Cría delicada que requiere mantener alta diversidad genética.',
    combinationsSummary: ['Black Face Blackwing', 'Black Face Azul'],
    images: [],
    tags: ['recesiva', 'black_face', 'cara_negra', 'patron', 'raro'],
    relatedMutations: ['alas-negras', 'fallow-ingles'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Información histórica y genética en verificación técnica.',
    sources: ['Dutch Budgerigar Society'],
    seo: {
      title: 'Black Face (Cara Negra) | Plumaje Mágico',
      description: 'Historia, características y genética del periquito Black Face.',
      keywords: ['black face budgie', 'cara negra periquito', 'periquito holandes']
    }
  },
  {
    id: 'fallow-ingles',
    name: 'Fallow Inglés',
    alternativeNames: ['English Fallow', 'Fallow de Iris Blanco'],
    slug: 'fallow-ingles',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación recesiva autosómica con plumaje diluido en tono canela amarillento, ojos rojos con iris blanco visible y cera rosa en machos.',
    description: 'Los Fallow se caracterizan por ojos rojos rubí brillantes combinados con marcas marrón cálido y una reducción general de la melanina corporal.',
    phenotype: {
      bodyColor: 'Color corporal diluido al 50% con matiz cálido.',
      wingMarkings: 'Ondulaciones marrón claro.',
      headAndMask: 'Máscara clara; gulares violeta claro.',
      cereAndLegs: 'Machos adultos conservan la cera rosa carne; hembras cera marrón. Patas rosas.',
      tailAndEyes: 'Ojos rojo rubí CON anillo de iris blanco visible en adultos (diferencia clave con Fallow Alemán).'
    },
    geneticsExplanation: 'Autosómica recesiva no alélica con el Fallow Alemán (cruzar Fallow Inglés con Alemán produce 100% clásicos portadores de ambos).',
    carriersExplanation: 'Ambos sexos portan.',
    breedingTips: 'No mezclar líneas de Fallow inglés y alemán sin control genealógico.',
    combinationsSummary: ['Fallow Inglés Cobalto', 'Fallow Inglés Opalino'],
    images: [],
    tags: ['recesiva', 'fallow', 'fallow_ingles', 'ojos_rojos', 'dilucion'],
    relatedMutations: ['fallow-aleman', 'dun-fallow', 'inos', 'canela'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Genética e independencia alélica confirmada.',
    sources: ['WBO Standards', 'The Budgerigar Society UK'],
    seo: {
      title: 'Fallow Inglés | Plumaje Mágico',
      description: 'Características, genética y diferenciación del periquito Fallow Inglés.',
      keywords: ['fallow ingles', 'english fallow budgie', 'fallow ojos rojos']
    }
  },
  {
    id: 'fallow-aleman',
    name: 'Fallow Alemán',
    alternativeNames: ['German Fallow', 'Fallow de Ojo Rojo Sólido'],
    slug: 'fallow-aleman',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación autosómica recesiva con ojos rojos sólidos SIN iris blanco en adultos y marcas alares marrón café.',
    description: 'Presenta ojos rojo intenso que NO desarrollan anillo de iris blanco en la adultez (ojo rojo sólido), distinguiéndose claramente del Fallow Inglés.',
    phenotype: {
      bodyColor: 'Color pastel diluido y uniforme.',
      wingMarkings: 'Marrón café nítido.',
      headAndMask: 'Máscara limpia; gulares violeta apagado.',
      cereAndLegs: 'Macho cera rosa púrpura carnosa.',
      tailAndEyes: 'Ojos rojo sólido sin anillo de iris durante toda su vida.'
    },
    geneticsExplanation: 'Autosómica recesiva pura en un locus independiente al Fallow Inglés.',
    carriersExplanation: 'Portadores en ambos sexos.',
    breedingTips: 'Conservar registros de anilla para no confundir con Fallow inglés.',
    combinationsSummary: ['Fallow Alemán Violeta'],
    images: [],
    tags: ['recesiva', 'fallow', 'fallow_aleman', 'ojos_rojos', 'dilucion'],
    relatedMutations: ['fallow-ingles', 'dun-fallow', 'pio-recesivo'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Datos validados según estándares de cría alemanes (DKB/AZ).',
    sources: ['AZ - Vereinigung für Artenschutz, Vogelhaltung und Vogelzucht'],
    seo: {
      title: 'Fallow Alemán | Plumaje Mágico',
      description: 'Características, genética y estándares del periquito Fallow Alemán.',
      keywords: ['fallow aleman', 'german fallow budgie', 'ojos rojos sin iris']
    }
  },
  {
    id: 'dun-fallow',
    name: 'Dun Fallow',
    alternativeNames: ['Fallow Dun', 'Fallow Cenizo'],
    slug: 'dun-fallow',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Variante recesiva de fallow con tonalidades gris humo / marrón ceniza y ojos rojos.',
    description: 'Forma rara de fallow identificada en la literatura ornitológica con dilución melánica hacia tonos cenizos en lugar de los marrones cálidos del Fallow Alemán o Inglés.',
    phenotype: {
      bodyColor: 'Diluido a tonos ahumados.',
      wingMarkings: 'Marrón ceniciento grisáceo.',
      headAndMask: 'Máscara pálida.',
      cereAndLegs: 'Patas rosa carne.',
      tailAndEyes: 'Ojos rojos oscuros.'
    },
    geneticsExplanation: 'Autosómica recesiva. Se investiga su posible correspondencia con cepas de Fallow Australiano o Japonés.',
    carriersExplanation: 'Ambos sexos portan.',
    breedingTips: 'En revisión técnica.',
    combinationsSummary: ['Dun Fallow Azul'],
    images: [],
    tags: ['recesiva', 'fallow', 'dun_fallow', 'en_revision'],
    relatedMutations: ['fallow-ingles', 'fallow-aleman'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Información pendiente de verificación: aislamiento genómico y diferenciación alélica respecto a otras cepas de Fallow en curso.',
    sources: ['Kodular Heritage Project Data'],
    seo: {
      title: 'Dun Fallow | Plumaje Mágico',
      description: 'Información técnica y estado de revisión del periquito Dun Fallow.',
      keywords: ['dun fallow budgie', 'fallow cenizo', 'mutaciones en revision']
    }
  },
  {
    id: 'pio-recesivo',
    name: 'Pío Recesivo (Danés / Arlequín)',
    alternativeNames: ['Recessive Pied', 'Pío Danés', 'Arlequín'],
    slug: 'pio-recesivo',
    category: 'recesiva',
    inheritance: 'recessive',
    shortDescription: 'Mutación autosómica recesiva con manchas corporales aleatorias, cera rosa púrpura permanente en machos y ausencia de iris blanco en adultos.',
    description: 'El Pío Recesivo (históricamente llamado Pío Danés o Arlequín) muestra una despigmentación melánica muy extensa y desordenada. Se distingue de otros píos porque los adultos conservan los ojos oscuros sólidos sin iris visible (ojos de botón) y los machos adultos mantienen la cera rosa violácea.',
    phenotype: {
      bodyColor: 'Aproximadamente 50-80% despigmentado (amarillo o blanco) con manchas del color base concentradas en la rabadilla y bajo vientre.',
      wingMarkings: 'Parches irregulares y asimétricos de ondulaciones negras.',
      headAndMask: 'Máscara extendida; manchas gulares reducidas o ausentes.',
      cereAndLegs: 'Machos: Cera rosa-violeta brillante permanente (no azula). Hembras: Cera marrón rugosa. Patas rosa suave.',
      tailAndEyes: 'Ojos negros azabache SIN anillo de iris blanco en toda su vida (signo identificativo fundamental).'
    },
    geneticsExplanation: 'Autosómica recesiva pura (r/r). Requiere dos copias del gen para ser visual.',
    carriersExplanation: 'Tanto machos como hembras pueden ser portadores sanos (Común / pío recesivo). Los portadores a veces presentan una pequeña mancha amarilla/blanca en la nuca (no siempre).',
    breedingTips: 'Visual x Visual = 100% Píos Recesivos. Visual x Común Puro = 100% Portadores.',
    combinationsSummary: ['Pío Recesivo Cara Amarilla', 'Pío Recesivo Canela'],
    images: [],
    tags: ['recesiva', 'pio', 'pio_recesivo', 'danes', 'arlequin', 'patron'],
    relatedMutations: ['pio-dominante', 'pio-holandes', 'fallow-aleman', 'alas-claras'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Datos validados.',
    sources: ['WBO Official Standards'],
    seo: {
      title: 'Pío Recesivo (Danés / Arlequín) | Plumaje Mágico',
      description: 'Características, genética y claves de identificación del periquito Pío Recesivo.',
      keywords: ['pio recesivo', 'recessive pied budgie', 'pio danes', 'periquito arlequin']
    }
  },
  {
    id: 'pio-holandes',
    name: 'Pío Holandés',
    alternativeNames: ['Dutch Pied', 'Pío Recesivo Holandés'],
    slug: 'pio-holandes',
    category: 'patrones',
    inheritance: 'recessive',
    shortDescription: 'Variante de pío descrita en criaderos de los Países Bajos con parches alares y dorsales de despigmentación simétrica.',
    description: 'Término documentado en el proyecto Kodular para periquitos manchados criados en la tradición holandesa. Puede asociarse con combinaciones entre Clearflight y Pío Recesivo o con cepas locales de selección.',
    phenotype: {
      bodyColor: 'Zonas despigmentadas en hombros y pecho.',
      wingMarkings: 'Remeras y coberteras manchadas.',
      headAndMask: 'Máscara con parches claros.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Ojos con o sin iris según genotipo subyacente.'
    },
    geneticsExplanation: 'En estudio para homologar si se trata de un alelo recesivo propio o del fenotipo de combinación Dutch Clear-eyed.',
    carriersExplanation: 'Pendiente de confirmación.',
    breedingTips: 'En revisión técnica.',
    combinationsSummary: ['Pío Holandés Azul'],
    images: [],
    tags: ['patron', 'pio', 'pio_holandes', 'en_revision'],
    relatedMutations: ['pio-recesivo', 'clearflight', 'pio-dominante'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'pending_review',
    verificationNotes: 'Información pendiente de verificación: revisión de sinonimias con el Pío Danés o combinación Dutch Clear-eyed.',
    sources: ['Kodular Heritage Project Data'],
    seo: {
      title: 'Pío Holandés | Plumaje Mágico',
      description: 'Ficha técnica y estado de verificación del periquito Pío Holandés.',
      keywords: ['pio holandes', 'dutch pied budgie', 'patron periquito']
    }
  },

  // ==========================================
  // 4. FACTORES MODIFICADORES
  // ==========================================
  {
    id: 'factor-oscuridad',
    name: 'Factor de Oscuridad (Dark Factor - D)',
    alternativeNames: ['Dark Factor', 'Factor D', 'Laurel / Cobalto / Oliva / Malva'],
    slug: 'factor-oscuridad',
    category: 'factores',
    inheritance: 'incomplete_dominant',
    shortDescription: 'Gen semidominante autosómico que regula la densidad melánica en la zona esponjosa de la pluma, dando lugar a los 3 niveles de oscuridad (0D, 1D, 2D).',
    description: 'El gen de oscuridad (D) incrementa el número y densidad de gránulos de eumelanina alrededor de la médula de las bárbulas, reduciendo el tamaño de las cavidades reflectoras y oscureciendo el tono en pasos discretos tanto en línea verde como en línea azul.',
    phenotype: {
      bodyColor: '0D: Verde Césped / Azul Cielo. 1D: Verde Laurel / Azul Cobalto. 2D: Verde Oliva / Azul Malva.',
      wingMarkings: 'Normales con mayor saturación de contraste en ejemplares oscuros.',
      headAndMask: 'Normal.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Timoneras más oscuras a mayor número de factores D. Ojos oscuros con iris blanco.'
    },
    geneticsExplanation: 'Dominancia incompleta autosómica. 0D = d/d (sin factor), 1D = D/d (Factor Simple), 2D = D/D (Doble Factor).',
    expressionSF_DF: {
      singleFactor: '1D: Laurel en verde, Cobalto en azul.',
      doubleFactor: '2D: Oliva en verde, Malva en azul.'
    },
    carriersExplanation: 'No existen portadores no visuales: cada dosis de D produce un cambio cromático visible.',
    breedingTips: 'Cobalto x Cobalto produce 25% Cielo (0D), 50% Cobalto (1D) y 25% Malva (2D).',
    combinationsSummary: ['Cobalto Violeta', 'Oliva Perlado', 'Cobalto Opalino'],
    images: [],
    tags: ['factores', 'factor_oscuridad', 'cobalto', 'laurel', 'oliva', 'malva', 'color'],
    relatedMutations: ['perlado', 'opalino', 'alas-claras'],
    relatedFactors: ['factor-violeta', 'factor-gris'],
    relatedLines: ['linea-verde', 'linea-azul'],
    verificationStatus: 'verified',
    verificationNotes: 'Mecanismo biofísico de reflexión de luz en bárbulas y transmisión mendeliana verificado.',
    sources: ['WBO Colour Standards', 'Biophysical Studies on Budgerigar Plumage'],
    seo: {
      title: 'Factor de Oscuridad (Dark Factor) | Plumaje Mágico',
      description: 'Guía completa del Factor de Oscuridad en periquitos australianos (0D, 1D, 2D).',
      keywords: ['factor de oscuridad periquito', 'dark factor budgie', 'cobalto', 'laurel', 'oliva', 'malva']
    }
  },
  {
    id: 'factor-gris',
    name: 'Factor Gris (Grey Factor - G)',
    alternativeNames: ['Factor Gris', 'Grey Factor', 'Gris Dominante'],
    slug: 'factor-gris',
    category: 'factores',
    inheritance: 'dominant',
    shortDescription: 'Gen dominante autosómico que transforma el verde en Verde Grisáceo (Mostaza) y el azul en Gris Pizarra neutro, identificable por sus gulares gris plomizo.',
    description: 'El Factor Gris modifica la refracción estructural de la pluma eliminando el reflejo azulado. En la Línea Azul produce un Gris puro neutro; en la Línea Verde produce el Verde Grisáceo (tono mostaza o verde oliva seco). Su rasgo diagnóstico inequívoco son las manchas gulares de color gris pizarra / plomizo apagado.',
    phenotype: {
      bodyColor: 'Línea azul: Gris neutro pizarra. Línea verde: Verde grisáceo mostaza.',
      wingMarkings: 'Negro azabache intenso.',
      headAndMask: 'GULARES GRIS PIZARRA / PLOMIZO (identificador infalible frente al Malva o Pizarra).',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Timoneras negras azabache. Ojos con iris.'
    },
    geneticsExplanation: 'Dominante autosómico completo (G). Una sola dosis (SF) produce el efecto visual completo. No hay diferencia visual entre SF y DF.',
    expressionSF_DF: {
      singleFactor: 'Gris visual (transmite al 50% de la descendencia).',
      doubleFactor: 'Gris visual idéntico (transmite al 100% de la descendencia).'
    },
    carriersExplanation: 'No existen portadores ocultos por su dominancia completa.',
    breedingTips: 'Macho Gris DF x Hembra Común produce 100% polluelos Grises.',
    combinationsSummary: ['Gris Opalino', 'Gris Perlado', 'Verde Gris Canela'],
    images: [],
    tags: ['factores', 'factor_gris', 'gris', 'dominante', 'color'],
    relatedMutations: ['pizarra', 'opalino', 'perlado'],
    relatedFactors: ['factor-oscuridad', 'factor-violeta'],
    relatedLines: ['linea-azul', 'linea-verde'],
    verificationStatus: 'verified',
    verificationNotes: 'Diferenciación con Malva y Pizarra confirmada por coloración gular.',
    sources: ['WBO Standards'],
    seo: {
      title: 'Factor Gris en Periquitos | Plumaje Mágico',
      description: 'Características y diagnóstico del Factor Gris en periquitos australianos.',
      keywords: ['factor gris periquito', 'grey factor budgie', 'periquito gris']
    }
  },
  {
    id: 'factor-violeta',
    name: 'Factor Violeta (Violet Factor - V)',
    alternativeNames: ['Factor Violeta', 'Violet Factor', 'Violeta Visual'],
    slug: 'factor-violeta',
    category: 'factores',
    inheritance: 'incomplete_dominant',
    shortDescription: 'Gen semidominante autosómico que añade un reflejo violeta intenso, alcanzando su máxima expresión visual en combinación con 1 factor de oscuridad (Azul Cobalto + Violeta).',
    description: 'El Factor Violeta intensifica las longitudes de onda violetas en la zona esponjosa de las bárbulas. Su fenotipo más espectacular es el "Violeta Cobalto Visual", que exhibe un color púrpura violeta profundo e impactante.',
    phenotype: {
      bodyColor: 'En Cobalto (1D + V): Violeta intenso visual profundo. En Azul Cielo (0D + V): Azul eléctrico brillante. En Verde (Laurel + V): Verde Violeta.',
      wingMarkings: 'Normales con gran contraste.',
      headAndMask: 'Gulares violeta púrpura muy intensas.',
      cereAndLegs: 'Normal.',
      tailAndEyes: 'Timoneras azul oscuro violáceo. Ojos con iris.'
    },
    geneticsExplanation: 'Dominancia incompleta autosómica (V). Interactúa sinérgicamente con el Factor de Oscuridad (D).',
    expressionSF_DF: {
      singleFactor: 'Intensifica el tono corporal con reflejo violáceo.',
      doubleFactor: 'Produce violeta visual incluso sobre bases de Azul Cielo.'
    },
    carriersExplanation: 'No hay portadores ocultos.',
    breedingTips: 'Cruzar Violeta Cobalto x Azul Cielo para obtener una descendencia variada de cobaltos, violetas y cielos.',
    combinationsSummary: ['Violeta Cobalto Opalino', 'Violeta Alas Claras', 'Arcoíris Violeta'],
    images: [],
    tags: ['factores', 'factor_violeta', 'violeta', 'color', 'brillante'],
    relatedMutations: ['alas-claras', 'opalino', 'perlado'],
    relatedFactors: ['factor-oscuridad', 'factor-gris'],
    relatedLines: ['linea-azul', 'linea-verde'],
    verificationStatus: 'verified',
    verificationNotes: 'Sinergia óptica con el Factor de Oscuridad comprobada.',
    sources: ['WBO Colour Standards'],
    seo: {
      title: 'Factor Violeta en Periquitos | Plumaje Mágico',
      description: 'Características, combinaciones y genética del Factor Violeta en periquitos.',
      keywords: ['factor violeta periquito', 'violet budgie', 'violeta cobalto visual']
    }
  }
];
