import {
  BreedingArticle,
  BreedingStage,
  BreedingChecklist,
  EggGuide,
  ChickDevelopmentStage,
  BreedingRecordEntry,
} from '../types';

export const BREEDING_ETHICS_RULES = [
  'Madurez física y psicológica: al menos 10-12 meses de edad antes de iniciar la primera puesta para evitar distocias e inmadurez de órganos.',
  'Máximo 2 nidadas consecutivas por temporada, seguidas obligatoriamente de al menos 6 meses de descanso y recuperación biológica.',
  'Uso ineludible de caja nido de madera con concavidad tallada en la base para prevenir la displasia de cadera (patas de rana / splay legs).',
  'Dieta enriquecida con aminoácidos esenciales, calcio biodisponible (jibia/bloque mineral) y pasta de cría balanceada semanas antes del celo.',
  'Anillado reglamentario cerrado a los 6-8 días (calibre oficial 4.0 a 4.2 mm) para identificación zootécnica responsable.',
  'Garantizar espacio adecuado, higiene diaria y un destino seguro y digno para cada pichón nacido antes de permitir la puesta.',
];

export const BREEDING_ARTICLES_DATA: BreedingArticle[] = [
  {
    id: 'preparacion',
    slug: 'preparacion',
    title: 'Preparación Física, Nutricional y Ambiental de los Reproductores',
    category: 'preparacion',
    shortDescription:
      'Pautas para acondicionar a los futuros padres semanas antes del emparejamiento, optimizando reservas de calcio, peso corporal y equilibrio lumínico.',
    content: `La reproducción en aves exige un desgaste metabólico y fisiológico inmenso, especialmente en las hembras durante la síntesis de la cáscara y la puesta de huevos. Comenzar la cría sin un periodo previo de acondicionamiento incrementa exponencialmente el riesgo de distocia (huevo atravesado), agotamiento del calcio óseo, infertilidad y abandono de la nidada.

Un protocolo de preparación riguroso dura entre 4 y 6 semanas antes de instalar el nido. Durante este tiempo, se evalúa minuciosamente el estado sanitario, la condición corporal de la quilla, el tono muscular y se ajusta la nutrición con aportes progresivos de proteínas, aminoácidos y minerales.`,
    icon: '🪺',
    sections: [
      {
        heading: '1. Condición Física y Madurez Reproductiva',
        body: 'La edad mínima recomendada por consenso veterinario y asociaciones aviares (WBO, AAV) se sitúa entre los 10 y 12 meses de edad. Aunque los periquitos pueden mostrar signos de celo a los 5-6 meses, sus estructuras óseas y el oviducto aún no están completamente formados. La quilla debe palparse suavemente: no debe estar afilada (desnutrición) ni oculta bajo grasa amarillenta subcutánea (obesidad). Las aves con sobrepeso presentan dificultades mecánicas en la cópula e infertilidad.',
        tips: [
          'Palpar la musculatura pectoral semanalmente durante el acondicionamiento.',
          'Permitir vuelos libres o disponer de voladera para tonificar el músculo pectoral antes del esfuerzo reproductivo.',
        ],
        warnings: [
          'Nunca poner a criar ejemplares en periodo de muda activa o que hayan superado una enfermedad reciente hace menos de 2 meses.',
        ],
      },
      {
        heading: '2. Enriquecimiento Nutricional y Reservas de Calcio',
        body: 'La producción de cáscara consume gran parte del calcio circulante. Es imprescindible suministrar hueso de sepia (jibia) lavado, bloque mineral con oligoelementos y pasta de cría (16-18% de proteína bruta) 3 veces por semana antes de la puesta. La vitamina D3 y el fósforo deben estar en proporción adecuada para permitir la absorción intestinal del calcio.',
        tips: [
          'Introducir germinados de semillas limpias y verduras ricas en vitamina A (brócoli, espinacas) gradualmente.',
          'Evitar suplementar con exceso de vitaminas liposolubles sin control profesional para prevenir hipervitaminosis.',
        ],
        warnings: [
          'La deficiencia aguda de calcio en la hembra desencadena hipocalcemia, parálisis de patas y retención del huevo.',
        ],
      },
      {
        heading: '3. Ambiente, Fotoperiodo y Temperatura',
        body: 'El estímulo ambiental que activa el eje hormonal reproductivo incluye el aumento progresivo de horas de luz (12 a 14 horas diarias de luz constante y sin parpadeos), una temperatura templada (18°C a 24°C) y una humedad relativa controlada (50% a 65%). Evitar corrientes de aire y cambios bruscos de ubicación.',
        tips: [
          'Mantener un horario de encendido y apagado de luces riguroso mediante temporizadores.',
          'Ubicar la jaula de cría en una zona tranquila del aviario o del hogar, con la parte posterior resguardada contra una pared.',
        ],
      },
    ],
    tips: [
      'Pesar a los reproductores en una báscula digital de precisión (gramera) antes de iniciar el proceso.',
      'Asegurar acceso constante a agua fresca renovada cada mañana.',
      'Monitorear la consistencia y color de las heces para descartar disbiosis antes del nido.',
    ],
    warnings: [
      'Prohibido iniciar la cría con ejemplares que muestren debilidad, respiración acelerada o plumaje erizado.',
      'No juntar aves desconocidas inmediatamente sin una fase previa de observación y adaptación visual.',
    ],
    breederNotes:
      'En criaderos técnicos, se realiza un chequeo coprológico preventivo (descarte de megabacterias, coccidios y parásitos internos) 6 semanas antes de la temporada. Se mantiene un fotoperiodo artificial progresivo incrementando 15 minutos semanales hasta alcanzar las 13.5-14 horas de luz.',
    checklist: [
      'Ambos ejemplares mayores a 10-12 meses confirmados',
      'Examen visual de quilla, cloaca y plumaje impecables',
      'Hueso de sepia y bloque de calcio instalados',
      'Pasta de cría y semillas germinadas aceptadas en la dieta',
      'Espacio de cría limpio, desinfectado y ventilado',
    ],
    relatedHealth: [
      {
        id: 'distocia-huevo',
        title: 'Retención de Huevo (Distocia)',
        type: 'health',
        description: 'Urgencia veterinaria provocada frecuentemente por falta de calcio o hembras demasiado jóvenes.',
      },
      {
        id: 'obesidad-lipomas',
        title: 'Obesidad y Problemas Hepáticos',
        type: 'health',
        description: 'El sobrepeso reduce drásticamente la fertilidad y la viabilidad de la cópula.',
      },
    ],
    relatedCare: [
      {
        id: 'alojamiento-espacio',
        title: 'Dimensiones y Alojamiento Óptimo',
        type: 'care',
        description: 'Requisitos de jaula para permitir movimiento sin fatiga durante la cría.',
      },
      {
        id: 'alimentacion-semillas',
        title: 'Nutrición Base y Suplementación',
        type: 'care',
        description: 'Equilibrio de semillas, pasta de cría y aporte mineral.',
      },
    ],
    relatedGenetics: [
      {
        id: 'factores-color',
        title: 'Factores de Color y Selección',
        type: 'genetics',
        description: 'Conceptos de compatibilidad genética básica.',
      },
    ],
    sources: [
      'Avian Medicine: Principles and Applications (Ritchie, Harrison & Harrison)',
      'BSAVA Manual of Psittacine Birds (Harcourt-Brown & Chitty)',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Preparación para la Cría del Periquito Australiano - Plumaje Mágico',
      description: 'Acondicionamiento físico, nutricional y ambiental para reproductores de periquito australiano.',
      keywords: ['preparacion cria periquitos', 'edad reproduccion periquito', 'calcio hembra periquita', 'dieta preconcepcion periquitos'],
    },
  },
  {
    id: 'seleccion',
    slug: 'seleccion',
    title: 'Selección Responsable de Reproductores y Criterios Éticos',
    category: 'seleccion',
    shortDescription:
      'Principios para elegir reproductores saludables, evaluar la compatibilidad genética, evitar problemas hereditarios y prevenir la consanguinidad estrecha.',
    content: `La cría responsable se fundamenta en el bienestar integral de las aves y en la preservación de su vigor biológico. Criar sin conocer los antecedentes de las aves o forzar cruces con anomalías anatómicas o genéticas puede transmitir defectos hereditarios graves (deformidades de pico, plumas helicoidales en mutaciones estructurales mal manejadas, debilidad inmunológica).

La selección zootécnica no busca únicamente el color o el fenotipo deseado, sino garantizar ejemplares robustos, con temperamento equilibrado y libres de consanguinidad cercana indeseada.`,
    icon: '🎯',
    sections: [
      {
        heading: '1. Criterios de Salud y Vigor Biológico',
        body: 'Solo deben seleccionarse aves que demuestren una vitalidad impecable a lo largo de su vida. Se descartan de la reproducción ejemplares con antecedentes de problemas respiratorios crónicos, fracturas previas mal consolidadas, historial de distocia recurrente o defectos de aplomo en las patas.',
        tips: [
          'Revisar el historial de salud de los últimos 6 meses.',
          'Observar la postura natural y la simetría de las alas en descanso.',
        ],
        warnings: [
          'Nunca reproducir ejemplares con anomalías del pico (prognatismo, tijera) ni plumas con quistes recurrentes.',
        ],
      },
      {
        heading: '2. Prevención de la Consanguinidad Estrecha (Inbreeding)',
        body: 'El cruce entre parientes de primer grado (padre x hija, madre x hijo, hermano x hermana) incrementa drásticamente la homozigosis de genes deletéreos recesivos, reduciendo la fertilidad, el tamaño de las nidadas y la supervivencia embrionaria. Salvo en programas zootécnicos extremadamente avanzados con un propósito específico y riguroso control genético, se debe evitar el cruce consanguíneo directo.',
        tips: [
          'Mantener un registro claro del árbol genealógico o anillado de procedencia.',
          'Introducir líneas de sangre externas no emparentadas periódicamente.',
        ],
      },
      {
        heading: '3. Evitar Combinaciones Genéticas Riesgosas',
        body: 'Ciertas mutaciones requieren precauciones especiales. Por ejemplo, en mutaciones dominantes con factor letal o subletal, o en ejemplares con plumaje excesivamente largo o rizado (periquitos plumero / feather dusters en periquito inglés), se deben evitar cruces que potencien anomalías fisiológicas.',
        tips: [
          'Consultar la guía de mutaciones antes de planificar un emparejamiento.',
        ],
      },
    ],
    tips: [
      'Priorizar siempre la salud, el tamaño equilibrado y la resistencia sobre colores raros.',
      'Evaluar el temperamento: aves excesivamente agresivas o asustadizas suelen transmitir estrés al nido.',
    ],
    warnings: [
      'No reproducir ejemplares portadores de anomalías morfológicas evidentes.',
    ],
    breederNotes:
      'Los criadores federados mantienen un coeficiente de consanguinidad (COI) bajo supervisión y seleccionan machos con excelente máscara y posición y hembras con amplia pelvis y probado instinto maternal.',
    checklist: [
      'Aves sin parentesco directo de primer grado',
      'Sin antecedentes de quistes de pluma ni picaje',
      'Peso y tamaño acordes al estándar de la variedad',
      'Compatibilidad etológica evaluada',
    ],
    relatedGenetics: [
      {
        id: 'mutaciones-dominantes',
        title: 'Mutaciones Dominantes y Factores',
        type: 'genetics',
        description: 'Entender la herencia de factores simples y dobles.',
      },
      {
        id: 'mutaciones-ligadas-sexo',
        title: 'Herencia Ligada al Sexo',
        type: 'genetics',
        description: 'Predicción de fenotipos en machos y hembras.',
      },
    ],
    relatedHealth: [
      {
        id: 'quistes-plumas',
        title: 'Quistes Foliculares',
        type: 'health',
        description: 'Trastorno genético y ambiental del folículo de la pluma.',
      },
    ],
    sources: [
      'The Genetics of the Budgerigar (Taylor, T.G. & Warner, C.)',
      'World Budgerigar Organisation (WBO) Breeding Guidelines',
      'Manual of Exotic Pet Practice (Mitchell & Tully)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Selección Responsable de Reproductores - Plumaje Mágico',
      description: 'Criterios de salud, genética y prevención de consanguinidad en periquitos australianos.',
      keywords: ['seleccion reproductores periquitos', 'consanguinidad periquitos', 'cria responsable periquitos'],
    },
  },
  {
    id: 'parejas',
    slug: 'parejas',
    title: 'Formación de Parejas, Comportamiento y Compatibilidad',
    category: 'parejas',
    shortDescription:
      'Cómo se produce el cortejo, señales inequívocas de aceptación mutua, introducción gradual y manejo de incompatibilidades.',
    content: `Los periquitos australianos son aves gregarias y monógamas sociales que eligen a su compañero mediante complejos rituales de cortejo y afinidad etológica. Aunque en cautividad el criador suele seleccionar la pareja según criterios zootécnicos, no es posible forzar la reproducción si no existe aceptación mutua.

La introducción debe ser paulatina y supervisada para evitar agresiones territoriales, especialmente por parte de hembras dominantes hacia machos más tímidos o jóvenes.`,
    icon: '❤️',
    sections: [
      {
        heading: '1. Introducción Gradual y Periodo de Adaptación',
        body: 'Se recomienda colocar a ambos ejemplares en jaulas contiguas o separados por una rejilla divisoria durante 7 a 14 días. Esto les permite escucharse, verse, compartir vocalizaciones de contacto y evaluar la afinidad sin riesgo de agresiones físicas. Cuando se observan intentos de alimentarse a través de los barrotes, se retira la rejilla divisoria.',
        tips: [
          'Introducir preferentemente a la hembra en el territorio del macho o en una jaula neutral.',
          'Mantener varios comederos para evitar disputas por el alimento en los primeros días.',
        ],
        warnings: [
          'Si la hembra persigue violentamente al macho mordiéndole patas o pico, separarlos de inmediato con la rejilla.',
        ],
      },
      {
        heading: '2. El Ritual del Cortejo y Señales de Aceptación',
        body: 'El macho en celo realiza el cortejo característico: pupilas contraídas (pinpointing), sacudidas rítmicas de cabeza (head-bobbing), golpeteo suave de pico, trinos rápidos y caricias en la nuca de la hembra. La aceptación se confirma cuando la hembra baja la cabeza para recibir alimento regurgitado (alosicalado y alialimentación) y adopta la postura receptiva horizontal (lordosis).',
        tips: [
          'Observar el comportamiento a primera hora de la mañana, momento habitual de mayor actividad de cortejo.',
        ],
      },
      {
        heading: '3. Señales de Conflicto e Incompatibilidad',
        body: 'Gruñidos ásperos, persecuciones incesantes, plumaje pegado al cuerpo con postura de amenaza y picotazos dirigidos a los ojos o garras indican falta de compatibilidad. Nunca se debe insistir si una pareja muestra rechazo violento prolongado.',
        tips: [
          'Proporcionar perchas separadas en extremos opuestos para que el ejemplar sumiso pueda mantener distancia si lo desea.',
        ],
      },
    ],
    tips: [
      'Asegurar que la cera de la hembra esté en fase de celo (marrón oscuro rugoso) y la del macho azul brillante o rosa intenso según la mutación.',
      'No colocar el nido hasta que la pareja esté consolidada y se alimente mutuamente con frecuencia.',
    ],
    warnings: [
      'Forzar la estancia de dos aves incompatibles en una jaula pequeña puede terminar en lesiones graves o muerte del macho.',
    ],
    breederNotes:
      'En cría por jaula individual (control genealógico estricto), se utiliza la jaula de cría dividida en dos compartimentos con rejilla extraíble de alambre. En cría comunitaria en voladera, las parejas se forman espontáneamente pero el control de paternidad se pierde.',
    checklist: [
      'Aves en jaulas contiguas o con rejilla durante al menos 1 semana',
      'Alimentación mutua y alicalado observados',
      'Sin conductas agresivas ni lesiones',
      'Ambos ejemplares muestran ceras en estado de celo',
    ],
    relatedCare: [
      {
        id: 'comportamiento-lenguaje',
        title: 'Lenguaje Corporal y Comportamiento',
        type: 'care',
        description: 'Interpretación de posturas de sumisión, cortejo y agresión.',
      },
    ],
    sources: [
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'Avian Behavioral Health (Echols & Speer)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Formación de Parejas y Cortejo en Periquitos - Plumaje Mágico',
      description: 'Cómo emparejar periquitos australianos, señales de cortejo y manejo de compatibilidad.',
      keywords: ['parejas periquitos', 'cortejo periquito australiano', 'emparejar periquitos', 'comportamiento reproductivo periquito'],
    },
  },
  {
    id: 'nido',
    slug: 'nido',
    title: 'El Nido: Tipos, Medidas, Higiene y Prevención de Patas de Rana',
    category: 'nido',
    shortDescription:
      'Características técnicas de la caja nido de madera, orificios de ventilación, concavidad obligatoria del suelo y protocolos sanitarios.',
    content: `En la naturaleza, los periquitos australianos anidan en oquedades oscuras de troncos de eucalipto seco. En cautividad, el nido es el entorno donde se desarrollarán los huevos y los polluelos durante sus primeras 4 a 5 semanas de vida.

Un nido mal diseñado o fabricado con materiales inadecuados es la causa principal de accidentes fatales, asfixia embrionaria por mala ventilación y deformidades esqueléticas severas en las extremidades posteriores de los pichones.`,
    icon: '🏠',
    sections: [
      {
        heading: '1. Dimensiones Técnicas y Materiales Recomendados',
        body: 'El nido debe ser una caja de madera natural no tratada (contrachapado marino o pino macizo de 10-12 mm de grosor). Las dimensiones estándar avaladas por federaciones zootécnicas para periquito común son aproximadamente 20-22 cm de largo, 14-16 cm de ancho y 15-18 cm de alto (para periquito inglés se recomiendan 25 x 18 x 18 cm). El orificio de entrada debe tener 4.0 a 4.5 cm de diámetro, con una percha exterior corta para facilitar el acceso.',
        tips: [
          'La tapa superior debe ser abatible o deslizable para permitir inspecciones rápidas sin asustar a los padres.',
          'Incorporar 2 o 3 orificios pequeños de ventilación (6 mm) en la parte superior de las paredes laterales.',
        ],
        warnings: [
          'Evitar nidos plásticos cerrados que acumulen condensación excesiva y nidos de mimbre tipo cesta (inadecuados y peligrosos).',
        ],
      },
      {
        heading: '2. La Concavidad del Suelo (Rebaje Antipatas de Rana)',
        body: 'CRÍTICO: El fondo de madera interior del nido DEBE tener un rebaje cóncavo tallado (de 8 a 10 cm de diámetro y 1 a 1.5 cm de profundidad en el centro). Los periquitos no construyen nido con ramas ni plumas. Si el suelo es plano y liso, los huevos ruedan separándose del parche de incubación y, al nacer los polluelos, el peso del cuerpo de la madre aplasta sus patas hacia los lados sobre la superficie resbaladiza, provocando la luxación coxofemoral permanente conocida como patas de rana (splay legs).',
        tips: [
          'Verificar que la concavidad esté suavemente lijada y centrada bajo la zona de reposo de la hembra.',
          'Se puede añadir una cucharada de viruta de madera no tratada y libre de polvo para absorber humedad.',
        ],
        warnings: [
          'NUNCA utilizar algodón, hilos, serrín fino de polvo ni papel de periódico con tinta dentro del nido.',
        ],
      },
      {
        heading: '3. Ubicación e Higiene Sanitaria',
        body: 'El nido se instala preferentemente en la parte superior exterior de la jaula, encajado en una de las puertas laterales. Esto permite abrir la tapa para revisar huevos y polluelos sin meter la mano dentro de la jaula. Antes de su colocación, debe estar perfectamente limpio y desinfectado.',
        tips: [
          'Limpiar las heces acumuladas a partir de los 10-12 días de vida de los polluelos reemplazando el fondo si es extraíble.',
        ],
      },
    ],
    tips: [
      'Instalar el nido únicamente cuando la hembra muestre cera marrón oscuro y la pareja esté emparejada.',
      'Retirar el nido inmediatamente si la hembra muestra agotamiento tras la segunda puesta.',
    ],
    warnings: [
      'Un nido sin concavidad multiplica por 10 el riesgo de displasia de extremidades en pichones.',
    ],
    breederNotes:
      'En aviarios profesionales se utilizan nidos con fondo de madera cóncavo extraíble (cubeta intercambiable), lo que permite sustituir el suelo sucio por uno limpio y desinfectado en menos de 10 segundos sin alterar el calor del nido.',
    checklist: [
      'Caja de madera con medidas mínimas 20x15x15 cm',
      'Concavidad tallada en el fondo del nido presente y verificada',
      'Orificios de ventilación lateral superior abiertos',
      'Tapa superior abatible de fácil inspección',
      'Fijación sólida al exterior de la jaula',
    ],
    relatedHealth: [
      {
        id: 'patas-de-rana',
        title: 'Displasia de Cadera (Splay Legs)',
        type: 'health',
        description: 'Deformidad irreversible causada por suelos planos o lisos en el nido.',
      },
    ],
    sources: [
      'BSAVA Manual of Psittacine Birds (Harcourt-Brown, N.)',
      'World Budgerigar Organisation (WBO) Nest Standards',
      'Diseases of Cage and Aviary Birds (Petrak, M.L.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'El Nido Ideal para Periquitos: Medidas y Concavidad - Plumaje Mágico',
      description: 'Guía técnica para elegir y acondicionar el nido de madera, evitando patas de rana en polluelos.',
      keywords: ['nido periquito medidas', 'concavidad nido periquito', 'patas de rana periquitos', 'caja nido periquitos'],
    },
  },
  {
    id: 'puesta',
    slug: 'puesta',
    title: 'La Puesta: Frecuencia, Número de Huevos y Observación no Invasiva',
    category: 'puesta',
    shortDescription:
      'Cómo transcurre el ciclo de puesta, ritmo de expulsión en días alternos, señales fisiológicas y pautas de respeto para no estresar a la hembra.',
    content: `Una vez colocado el nido y consumada la cópula repetida, la hembra pasa largos periodos inspeccionando y rascando el interior de la caja. Aproximadamente entre 7 y 12 días después de las primeras cópulas exitosas se inicia la puesta de los huevos.

La postura de huevos requiere una enorme concentración metabólica y serenidad ambiental. Las inspecciones deben ser prudentes, silenciosas y breves para no alterar el vínculo de la hembra con el nido.`,
    icon: '🥚',
    sections: [
      {
        heading: '1. Ritmo de Puesta en Días Alternos',
        body: 'La hembra pone un huevo aproximadamente cada 48 horas (en días alternos, ej. lunes, miércoles, viernes). Este intervalo obedece al tiempo que tarda el óvulo en descender por el oviducto, recibir la albúmina y sintetizar la cáscara calcárea en el útero o glándula de la cáscara.',
        tips: [
          'Registrar la fecha de cada huevo puesto para calcular con precisión la fecha estimada de eclosión.',
          'Marcar suavemente con un lápiz de grafito blando (nunca rotulador ni tinta tóxica) el número de orden si es necesario para el seguimiento.',
        ],
        warnings: [
          'No tocar los huevos con las manos sucias o mojadas para no obstruir los microporos de la cáscara con aceites.',
        ],
      },
      {
        heading: '2. Tamaño Habitual de la Puesta (Rangos Observados)',
        body: 'El tamaño de una puesta estándar oscila habitualmente entre 4 y 6 huevos, aunque nidadas de 3 a 8 huevos pueden ocurrir según la edad, condición nutricional y genética de la hembra. No es aconsejable permitir que una hembra incube más de 6-7 huevos a la vez, ya que no podrá proporcionar calor homogéneo a todos los embriones.',
        tips: [
          'Si una hembra pone más de 7 huevos, considerar traspasar los últimos a una pareja nodriza sincronizada si está disponible.',
        ],
      },
      {
        heading: '3. Señales Fisiológicas y Comportamiento de la Hembra',
        body: 'Días antes del primer huevo, las heces de la hembra se vuelven significativamente más grandes y menos frecuentes (acumulación nocturna mientras permanece en el nido). La zona cloacal y el bajo vientre se aprecian redondeados y distendidos. La hembra pierde plumas en la zona ventral inferior para formar la placa o parche de incubación (zona altamente vascularizada en contacto directo con los huevos).',
        tips: [
          'Mantener la jaula en un ambiente tranquilo y sin cambios de posición.',
        ],
        warnings: [
          'Si la hembra permanece embolada en el fondo de la jaula, con ojos entrecerrados y esfuerzo infructuoso de expulsión por más de 12-24 h, se trata de una emergencia médica por retención de huevo.',
        ],
      },
    ],
    tips: [
      'Revisar el nido una vez al día aprovechando los breves momentos en que la hembra sale a defecar o alimentarse.',
      'Suministrar agua fresca y pasta de cría a diario al macho, quien se encargará de alimentar a la hembra.',
    ],
    warnings: [
      'Evitar abrir el nido abruptamente o con ruidos fuertes: la hembra podría asustarse y pisar o romper los huevos al salir.',
    ],
    breederNotes:
      'Los criadores registran el número de huevo, fecha y peso inicial del huevo (promedio 2.5 - 3.0 g). Si una hembra primeriza muestra tendencia a romper huevos por nerviosismo, se utilizan temporalmente huevos falsos de plástico hasta completar la puesta.',
    checklist: [
      'Registro de fecha del primer huevo anotado',
      'Huevo de sepia y pasta de cría disponibles permanentemente',
      'Inspección diaria breve y silenciosa',
      'Observación de la cloaca y comportamiento de la madre sin signos de distocia',
    ],
    relatedHealth: [
      {
        id: 'distocia-huevo',
        title: 'Retención de Huevo y Distocia',
        type: 'health',
        description: 'Síntomas de alarma durante la puesta que requieren auxilio veterinario inmediato.',
      },
    ],
    sources: [
      'Avian Reproduction: Physiology and Care (Speer, B.)',
      'BSAVA Manual of Psittacine Birds',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'La Puesta en Periquitos: Ciclo, Huevos y Cuidados - Plumaje Mágico',
      description: 'Conoce cómo se desarrolla la puesta de huevos en periquitos australianos, frecuencia y signos de salud.',
      keywords: ['puesta periquita', 'cuantos huevos pone un periquito', 'dias puesta periquitos', 'huevo atravesado periquita'],
    },
  },
  {
    id: 'huevos',
    slug: 'huevos',
    title: 'Guía de los Huevos: Anatomía, Ovoscopia y Control de Viabilidad',
    category: 'huevos',
    shortDescription:
      'Estructura del huevo, examen por trasiluminación (ovoscopia) a partir del día 6, identificación de fertilidad e higiene sin riesgos.',
    content: `El huevo del periquito es el microentorno biológico donde se produce la embriogénesis completa a lo largo de 18 días. Es de color blanco mate, cáscara de carbonato cálcico porosa y pesa en promedio entre 2.2 y 3.2 gramos.

La ovoscopia (mirar a través del huevo con una fuente de luz fría) permite comprobar si el huevo está fecundado sin dañarlo, evitando mantener a la hembra incubando huevos inviables innecesariamente.`,
    icon: '🥚',
    sections: [
      {
        heading: '1. Anatomía y Fisiología del Huevo Aviar',
        body: 'El huevo consta de la cáscara con miles de microporos para el intercambio gaseoso de oxígeno y dióxido de carbono, dos membranas testáceas (interna y externa), la cámara de aire en el polo romo, la albúmina (clara) rica en agua y proteínas, y el vitelo (yema) sostenido por las chalazas donde se ubica el disco germinal.',
        tips: [
          'La humedad del nido regula la evaporación del agua a través de los poros para que la cámara de aire adquiera el tamaño idóneo al momento de nacer.',
        ],
      },
      {
        heading: '2. Técnica Segura de Ovoscopia (Día 6 a 8 de Incubación)',
        body: 'A partir del 6º-7º día de incubación en firme, se puede realizar la ovoscopia en una habitación a oscuras utilizando un ovoscopio específico o una linterna LED pequeña de luz fría colocada contra el polo ancho del huevo. Si el huevo es fértil, se observa una nítida red de vasos sanguíneos rojos ramificados con un punto central oscuro (el embrión en desarrollo con latido cardíaco), conocido como aspecto de "araña roja". Si el huevo se observa totalmente transparente y amarillento tras 8 días, es infértil (huevo claro o de celo).',
        tips: [
          'Realizar la prueba con suavidad, sin girar bruscamente el huevo ni mantener la linterna pegada más de 5-10 segundos para no calentarlo.',
          'Utilizar guantes limpios de látex o manos recién lavadas para no transferir bacterias a los poros de la cáscara.',
        ],
        warnings: [
          'NO realizar diagnósticos precipitados antes del día 6 de incubación efectiva.',
          'Nunca sumergir huevos en agua para pruebas caseras de flotabilidad (riesgo crítico de asfixia e infección bacteriana a través de los poros).',
        ],
      },
      {
        heading: '3. Huevos Interrumpidos y Anomalías',
        body: 'Si en la ovoscopia se observa un anillo de sangre oscuro pegado a la pared interna (anillo de la muerte) o una masa informe sin vasos sanguíneos funcionales, significa que el embrión falleció en etapas tempranas. Huevos con cáscara rugosa, blanda (carentes de calcio) o excesivamente deformes indican déficit mineral en la madre o patologías del oviducto.',
        tips: [
          'Mantener los huevos infértiles en el nido si hay pocos huevos fértiles, ya que sirven de acumulador térmico y soporte físico para los embriones vivos.',
        ],
      },
    ],
    tips: [
      'Tener siempre una linterna LED fría de haz concentrado.',
      'Si un huevo se ensucia levemente con heces secas, raspar con mucho cuidado con una espátula de plástico; nunca lavarlo con agua caliente.',
    ],
    warnings: [
      'Prohibido el uso de fuentes de luz incandescentes calientes que sobrecalienten el huevo durante la ovoscopia.',
    ],
    breederNotes:
      'En aviarios técnicos, los criadores numeran cada huevo con lápiz blando (ej. 1, 2, 3...) y llevan una tabla con la fecha de puesta, fecha de ovoscopia (Día +7) y fecha prevista de eclosión (Día +18) para monitorear el desarrollo simultáneo de múltiples nidadas.',
    checklist: [
      'Ovoscopio LED de luz fría listo',
      'Inspección realizada únicamente tras 6-8 días de incubación en firme',
      'Identificación de red vascular o transparencia anotada',
      'Cámara de aire observada en el polo romo',
    ],
    relatedCare: [
      {
        id: 'agua-bebederos',
        title: 'Humedad Ambiental y Baño',
        type: 'care',
        description: 'La importancia de la humedad relativa para la cáscara del huevo.',
      },
    ],
    sources: [
      'Avian Embryology and Incubation (Romanoff, A.L.)',
      'Veterinary Clinics of North America: Exotic Animal Practice',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Huevos de Periquito y Ovoscopia: Cómo Saber si Están Fecundados - Plumaje Mágico',
      description: 'Aprende a realizar la ovoscopia en huevos de periquito, detectar embriones fértiles y cuidar la cáscara.',
      keywords: ['ovoscopia periquitos', 'huevos fertiles periquitos', 'araña roja huevo periquito', 'como saber si huevo periquito tiene pichon'],
    },
  },
  {
    id: 'incubacion',
    slug: 'incubacion',
    title: 'Incubación: Comportamiento Parental, Temperatura y Humedad',
    category: 'incubacion',
    shortDescription:
      'El proceso de incubación de 18 días, el rol de la madre y del padre, control de la humedad ambiental y factores que garantizan la viabilidad embrionaria.',
    content: `La incubación es el periodo durante el cual los embriones se desarrollan dentro del huevo gracias a la temperatura constante (37.5°C a 38.5°C) y humedad que les proporciona la madre al posarse sobre ellos con su placa de incubación.

En el periquito australiano, la incubación es una tarea asumida casi exclusivamente por la hembra, mientras el macho cumple la labor indispensable de custodiar el nido y alimentar a la hembra en la entrada.`,
    icon: '🐣',
    sections: [
      {
        heading: '1. Duración y Comienzo de la Incubación en Firme',
        body: 'El tiempo promedio de incubación es de 18 días por cada huevo (con un rango normal respaldado por fuentes zootécnicas de 17 a 20 días según la temperatura ambiental y la constancia de la madre). La mayoría de las hembras no incuban de forma continua con el primer huevo, sino que inician la incubación en firme a partir de la puesta del segundo o tercer huevo. Por esta razón, los dos o tres primeros polluelos suelen nacer con pocas horas de diferencia.',
        tips: [
          'Contar los 18 días a partir del momento en que la hembra permanece dentro del nido de forma continua día y noche.',
        ],
      },
      {
        heading: '2. Temperatura, Volteo y Humedad Ambiental',
        body: 'La madre voltea periódicamente los huevos con su pico para evitar que las membranas embrionarias se adhieran a la cáscara interna. La humedad relativa ambiental en la habitación de cría debe situarse entre el 55% y el 65%. Una humedad excesivamente baja (menor al 40%) deshidrata la membrana interna y la endurece como un pergamino, provocando la muerte del polluelo al no poder romperla durante la eclosión.',
        tips: [
          'Disponer una bañera de agua limpia en la jaula para que la hembra se humedezca las plumas del vientre si lo necesita de forma natural.',
          'Utilizar un termohigrómetro digital en la zona del aviario para monitorear temperatura y humedad constantemente.',
        ],
        warnings: [
          'Nunca pulverizar agua fría directamente sobre los huevos dentro del nido.',
        ],
      },
      {
        heading: '3. El Rol del Macho Custodio y Alimentador',
        body: 'El macho asume un papel activo alimentando a la hembra mediante regurgitación varias veces por hora. Algunas parejas permiten que el macho ingrese al nido para acompañar a la hembra, lo cual es normal siempre que no se observen disputas por el espacio.',
        tips: [
          'Asegurar que el comedero del macho esté siempre provisto de semillas de calidad, pasta de cría y verduras frescas.',
        ],
      },
    ],
    tips: [
      'Mantener silencio y evitar movimientos bruscos cerca de la jaula de cría.',
      'Si hace mucho calor en verano (>28°C), mejorar la ventilación del aviario sin generar corrientes directas de aire.',
    ],
    warnings: [
      'El abandono del nido por estrés durante más de 2-3 horas consecutivas enriquece el riesgo de muerte embrionaria por hipotermia.',
    ],
    breederNotes:
      'Los criadores experimentados verifican que la humedad del aviario se mantenga en torno al 60% en los últimos 3 días antes de la eclosión para asegurar que la cáscara mantenga la flexibilidad necesaria para el piqueteo del polluelo.',
    checklist: [
      'Humedad ambiental medida con higrómetro (55%-65%)',
      'Temperatura ambiente estable entre 18°C y 24°C',
      'Macho alimentando regularmente a la hembra',
      'Calendario de días de incubación por huevo actualizado',
    ],
    relatedCare: [
      {
        id: 'clima-temperatura',
        title: 'Temperatura y Climatización',
        type: 'care',
        description: 'Parámetros ambientales y confort térmico en el aviario.',
      },
    ],
    sources: [
      'Avian Reproduction: Physiology and Care (Speer, B.)',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Incubación en Periquitos: Días, Temperatura y Humedad - Plumaje Mágico',
      description: 'Todo sobre la incubación de huevos de periquito australiano, tiempos, cuidados de la pareja y humedad.',
      keywords: ['cuantos dias dura incubacion periquito', 'temperatura nido periquito', 'humedad eclosion periquito', 'comportamiento incubacion periquita'],
    },
  },
  {
    id: 'nacimiento',
    slug: 'nacimiento',
    title: 'El Nacimiento (Eclosión): Proceso, Observación y Cuándo Acudir al Veterinario',
    category: 'nacimiento',
    shortDescription:
      'Cómo rompe el cascarón el polluelo con el diamante del pico, absorción del saco vitelino, asistencia natural y límites de intervención.',
    content: `El nacimiento de un periquito es un acontecimiento fisiológico complejo y agotador para el embrión. El proceso completo de eclosión suele requerir entre 12 y 24 horas desde la primera fisura de la cáscara hasta la salida total del polluelo.

Durante este periodo, el polluelo absorbe los últimos restos del saco vitelino hacia su cavidad abdominal, el cual constituirá su reserva nutricional de emergencia durante las primeras 12 a 24 horas de vida extrauterina.`,
    icon: '🐥',
    sections: [
      {
        heading: '1. La Mecánica de la Eclosión y el Diente de Huevo',
        body: 'Hacia el día 17-18, el polluelo perfora la membrana de la cámara de aire interna e inicia la respiración pulmonar (en este punto ya se pueden escuchar tenues píos desde el interior del huevo). Utilizando el "diente de huevo" o diamante (una pequeña protuberancia córnea transitoria en la punta superior del pico que se desprenderá días después), el pichón golpea y gira circularmente dentro del polo ancho de la cáscara hasta abrir una tapa que empuja con las patas y la cabeza.',
        tips: [
          'La madre suele ayudar suavemente desprendiendo los fragmentos de cáscara una vez que el polluelo ha completado el giro.',
          'La madre ingiere habitualmente los restos de la cáscara para recuperar calcio.',
        ],
      },
      {
        heading: '2. Observación Prudente vs. Intervención Peligrosa',
        body: 'El error más común es intentar "pelar" el huevo prematuramente. Si se interviene antes de que los vasos sanguíneos de la membrana se hayan secado por completo y el saco vitelino esté totalmente internalizado, se provocará una hemorragia fatal inmediata o una infección del cordón umbilical (onfalitis).',
        tips: [
          'Solo si un huevo lleva más de 24-30 horas picado, el pichón pía con debilidad y la membrana interna se observa completamente seca y pegada al plumón, un criador experimentado o veterinario aviar puede humedecer la membrana con suero salino tibio y retirar cuidadosamente una mínima fracción de cáscara sin tocar vasos sanguíneos.',
        ],
        warnings: [
          'NUNCA tirar de la cáscara si se observa la menor gota de sangre fresca.',
          'No introducir pinzas metálicas afiladas dentro del huevo.',
        ],
      },
      {
        heading: '3. Primeras Horas de Vida del Neonato',
        body: 'El periquito nace completamente ciego, desnudo (con escaso plumón húmedo) y con un peso de tan solo 1.0 a 1.8 gramos. Durante las primeras 6-8 horas descansa bajo el calor del cuerpo de la madre mientras seca su plumón y consume las reservas del saco vitelino.',
        tips: [
          'Verificar en la primera revisión que el polluelo respira con normalidad y se encuentra caliente al tacto bajo la madre.',
        ],
      },
    ],
    tips: [
      'Mantener el aviario con humedad adecuada (60%) para evitar que las membranas del huevo se sequen durante la eclosión.',
      'Retirar del nido cáscaras vacías que hayan quedado atascadas encajándose sobre otros huevos no nacidos.',
    ],
    warnings: [
      'Manipular a un polluelo recién nacido con manos frías puede causarle hipotermia mortal en minutos.',
    ],
    breederNotes:
      'Los criadores profesionales anotan la hora de eclosión y verifican al cabo de 12 horas si la madre ha iniciado la administración de la primera secreción de buche. Si la piel del pichón se observa enrojecida o con restos de yema no absorbida en el ombligo, se aplica una microgota de povidona yodada diluida en la cicatriz umbilical.',
    checklist: [
      'Piqueteo circular observado con respiración pulmonar activa',
      'Saco vitelino completamente absorbido en el abdomen',
      'Cáscaras vacías retiradas o consumidas por la madre',
      'Pichón caliente y protegido bajo la placa de incubación',
    ],
    relatedHealth: [
      {
        id: 'onfalitis-neonatal',
        title: 'Infección Umbilical (Onfalitis)',
        type: 'health',
        description: 'Prevención de infecciones en el ombligo del recién nacido.',
      },
    ],
    sources: [
      'Avian Medicine: Principles and Applications (Ritchie et al.)',
      'BSAVA Manual of Psittacine Birds',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Nacimiento de Polluelos de Periquito: Eclosión y Cuidados - Plumaje Mágico',
      description: 'Guía paso a paso del nacimiento del polluelo de periquito, proceso de eclosión y primeros auxilios.',
      keywords: ['nacimiento periquito australiano', 'eclosion periquito', 'como nace periquito', 'asistir nacimiento periquito'],
    },
  },
  {
    id: 'polluelos',
    slug: 'polluelos',
    title: 'Desarrollo de los Polluelos: Cronología, Crecimiento y Emplumaje',
    category: 'polluelos',
    shortDescription:
      'Línea temporal del crecimiento desde el día 1 hasta el día 35: apertura de ojos, aparición de cañones, anillado oficial y salida del nido.',
    content: `El desarrollo de un polluelo de periquito australiano es uno de los procesos biológicos de crecimiento más acelerados del reino animal. En tan solo 30 a 35 días, un pichón indefenso de menos de 2 gramos multiplica su peso por 20 o 25 veces, alcanza el tamaño de un adulto, desarrolla su plumaje completo y aprende a volar.

Conocer las etapas del desarrollo permite al criador verificar si el ritmo de crecimiento es óptimo, identificar retrasos en el desarrollo o detectar anomalías en las patas o en el buche a tiempo.`,
    icon: '🌱',
    sections: [
      {
        heading: '1. Fase Neonatal (Día 1 al 5): Crecimiento Rápido y Ojos Cerrados',
        body: 'El polluelo permanece recostado en posición fetal. La piel es transparente y permite ver el buche y los órganos internos. La madre lo alimenta dándole la vuelta sobre su espalda con secreciones ricas en enzimas y anticuerpos. Hacia el día 5 su peso se multiplica y comienza a erguir la cabeza.',
        tips: [
          'Comprobar a diario que el buche tenga una burbuja amarillenta de alimento suave y no esté vacío ni excesivamente tenso.',
        ],
      },
      {
        heading: '2. Fase de Plumón y Anillado Oficial (Día 6 al 10)',
        body: 'Entre el día 6 y 8 los ojos comienzan a abrirse como pequeñas rendijas oscuras. El cuerpo se cubre de un espeso plumón blanco o grisáceo (según la línea de color). Este es el periodo reglamentario e idóneo para colocar la anilla federativa cerrada (calibre 4.0 - 4.2 mm). Hacia el día 9-10 la articulación del tarso crece y la anilla ya no podrá entrar.',
        tips: [
          'Deslizar los 3 dedos delanteros por la anilla, pasarla por la articulación y liberar el dedo trasero hacia atrás con cuidado.',
          'Revisar a las 24 horas si la anilla sigue en su lugar o si la madre la ha expulsado por accidente.',
        ],
      },
      {
        heading: '3. Aparición de Cañones y Emplumaje (Día 11 al 25)',
        body: 'Brotan los cañones (vainas queratinizadas) en alas, cola y cabeza. Hacia el día 18-20 los cañones se abren revelando los colores de la mutación y el plumaje definitivo. Los pichones empiezan a acicalarse, se sientan erguidos y ejercitan sus alas dentro de la caja nido.',
        tips: [
          'Limpiar periódicamente el fondo del nido retirando el exceso de heces secas para evitar que se peguen en las uñas y dedos.',
        ],
      },
      {
        heading: '4. Asomo y Salida del Nido (Día 28 al 35)',
        body: 'Completamente emplumados, los pichones asoman la cabeza por el orificio de entrada y finalmente bajan al suelo de la jaula. El padre asume la mayor parte del entrenamiento para mostrarles cómo pelar semillas y beber agua.',
        tips: [
          'Colocar comederos llanos en el suelo de la jaula con semillas tiernas y panizo para facilitar sus primeros picoteos.',
        ],
      },
    ],
    tips: [
      'Pesar a los polluelos cada 3-4 días si se dispone de una báscula de precisión para asegurar una curva de ganancia de peso constante.',
      'Controlar la posición de las patas: deben estar recogidas bajo el cuerpo, nunca abiertas en ángulo de 90° hacia los costados.',
    ],
    warnings: [
      'Si un pichón de 10 días no abre los ojos o muestra costras alrededor de los párpados, consultar con el veterinario.',
    ],
    breederNotes:
      'La curva de peso típica: Día 1 (~1.5g), Día 7 (~10-12g), Día 14 (~22-26g), Día 21 (~32-36g), Día 28 (~36-42g). El anillado federativo cerrado lleva grabado el año, número de criador nacional y número correlativo de serie.',
    checklist: [
      'Anillado colocado entre el día 6 y 8 de vida',
      'Apertura simétrica de ambos ojos observada hacia el día 7-8',
      'Desarrollo normal de cañones sin sangre retenida',
      'Patas firmes con dedos hacia adelante y hacia atrás (zigodáctilos)',
    ],
    relatedCare: [
      {
        id: 'alojamiento-espacio',
        title: 'Espacio y Voladeras para Jóvenes',
        type: 'care',
        description: 'Instalaciones idóneas para el ejercicio de vuelo tras salir del nido.',
      },
    ],
    sources: [
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'Avian Medicine: Principles and Applications',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Desarrollo de los Polluelos de Periquito: Etapas y Anillado - Plumaje Mágico',
      description: 'Cronología completa del crecimiento del pichón de periquito, pesos, aparición de plumas y anillado.',
      keywords: ['desarrollo pichon periquito', 'anillar periquitos dias', 'crecimiento polluelo periquito', 'cuando salen del nido los periquitos'],
    },
  },
  {
    id: 'alimentacion-polluelos',
    slug: 'alimentacion-polluelos',
    title: 'Alimentación de Polluelos: Rol de los Padres y Precauciones con la Papilla',
    category: 'alimentacion-polluelos',
    shortDescription:
      'Nutrición biológica parental (leche de buche y semillas predigeridas), aporte proteico a los reproductores y advertencias rigurosas sobre el embuche artificial.',
    content: `La naturaleza ha diseñado a los periquitos adultos para ser los mejores y más eficientes criadores de sus crías. Durante los primeros días, la madre produce en su mucosa gástrica y esofágica una secreción altamente digerible rica en proteínas, lípidos, probióticos naturales e inmunoglobulinas aviares.

La alimentación artificial o empapillado nunca debe considerarse un pasatiempo ni una alternativa rutinaria: es un procedimiento de emergencia veterinaria que requiere conocimientos técnicos específicos, instrumental estéril y vigilancia constante de la temperatura de la fórmula.`,
    icon: '🍽️',
    sections: [
      {
        heading: '1. La Dieta que los Padres Necesitan para Embuchar',
        body: 'Para que los padres alimenten adecuadamente a una nidada de 4 a 6 pichones, su dieta debe reforzarse exponencialmente. Se debe suministrar a diario pasta de cría húmeda con alto valor biológico (mínimo 16-18% proteína), semillas germinadas frescas y escurridas, verduras de hoja verde lavadas y secas (brócoli, acelga) y mezcla de semillas de alta calidad.',
        tips: [
          'Renovar la pasta de cría dos veces al día en épocas calurosas para evitar proliferación de hongos y bacterias.',
          'Aportar espigas de panizo (mijo en rama) dentro de la jaula: es un alimento blando que los padres digieren y regurgitan con suma facilidad.',
        ],
        warnings: [
          'Retirar germinados o pastas húmedas que lleven más de 4-6 horas en el comedero para evitar intoxicaciones alimentarias.',
        ],
      },
      {
        heading: '2. ¿Por Qué NO se Deben Usar Fórmulas Caseras?',
        body: 'NUNCA se debe intentar alimentar a un polluelo con papillas caseras hechas a base de galletas, leche de vaca (las aves no digieren la lactosa), pan con agua, harinas crudas o huevo crudo. Estas mezclas caseras provocan compactación mortal de buche, fermentación ácida, desnutrición severa y muerte rápida por sepsis.',
        warnings: [
          'Solo se deben utilizar fórmulas comerciales específicas para psitácidas de marcas veterinarias reconocidas.',
        ],
      },
      {
        heading: '3. Riesgos Críticos del Embuche Manual (Alimentación con Jeringa)',
        body: 'El embuche manual de un pichón menor a 15 días es una tarea de alto riesgo que solo debe realizarse si la madre ha fallecido o rechaza al polluelo, y preferentemente bajo la supervisión de un veterinario aviar.',
        warnings: [
          'Aspiración traqueal: Si la papilla entra en la glotis (vía respiratoria), el pichón muere asfixiado en segundos.',
          'Quemadura de buche: Si la papilla supera los 40°C-41°C, quema y perfora la pared del buche (fístula de buche).',
          'Estasis de buche (buche parado): Si la papilla se administra fría (<37°C) o demasiado espesa, fermenta y se pudre en el buche.',
        ],
      },
    ],
    tips: [
      'Confiar siempre en el cuidado de los padres: su leche de buche contiene la flora bacteriana esencial que ninguna papilla comercial puede igualar por completo.',
      'Si se requiere alimentar a mano por emergencia, mantener la temperatura estricta de la papilla entre 38.5°C y 39.5°C medida con termómetro digital.',
    ],
    warnings: [
      'No alimentar jamás con jeringa si el buche del pichón aún contiene comida de la toma anterior.',
    ],
    breederNotes:
      'En criaderos profesionales se utiliza la adopción de polluelos entre parejas nodrizas sincronizadas antes que recurrir a la cría a mano, logrando un desarrollo inmunológico y conductual infinitamente superior.',
    checklist: [
      'Pasta de cría fresca renovada 2 veces al día',
      'Semillas germinadas correctamente lavadas y desinfectadas',
      'Hueso de sepia y agua fresca siempre presentes',
      'Buches de los pichones llenos y digiriendo cada 3-4 horas',
    ],
    relatedHealth: [
      {
        id: 'estasis-buche',
        title: 'Estasis e Infección de Buche',
        type: 'health',
        description: 'Retención y fermentación anormal del alimento en el buche.',
      },
    ],
    sources: [
      'BSAVA Manual of Psittacine Birds (Harcourt-Brown & Chitty)',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Alimentación de Polluelos de Periquito y Pasta de Cría - Plumaje Mágico',
      description: 'Cómo alimentan los padres a los polluelos de periquito, pasta de cría y riesgos de la papilla manual.',
      keywords: ['alimentacion polluelos periquitos', 'pasta de cria periquitos', 'embuchar periquito papilla', 'como alimentar pichon periquito'],
    },
  },
  {
    id: 'destete',
    slug: 'destete',
    title: 'El Destete: Transición a la Alimentación Independiente y Separación Segura',
    category: 'destete',
    shortDescription:
      'Cómo aprenden los jóvenes a descascarillar semillas, reducción progresiva de la dependencia parental y verificación de autonomía antes del traslado.',
    content: `El destete es la fase crítica en la que los pichones pasan de depender de la regurgitación paterna a alimentarse y beber de forma totalmente autónoma. Ocurre habitualmente entre los 30 y los 42 días de vida, variando según el vigor individual de cada ejemplar.

Separar a un pichón de forma prematura guiándose únicamente por una fecha rígida en el calendario es una de las principales causas de muerte por inanición en criadores noveles.`,
    icon: '🍼',
    sections: [
      {
        heading: '1. El Aprendizaje Progresivo y el Rol del Padre',
        body: 'Hacia los 28-32 días, los pichones salen de la caja nido. Mientras la hembra a menudo comienza a preparar una segunda postura (inspeccionando el nido), el macho se encarga de guiar a los polluelos, mostrándoles cómo descascarillar las semillas. Al principio, los jóvenes juegan con los granos sin tragar el núcleo, por lo que es indispensable no retirarlos del padre.',
        tips: [
          'Colocar espigas de panizo y semillas remojadas en platos poco profundos en el suelo de la jaula.',
          'Los pichones aprenden por imitación social observando al macho comer en el suelo.',
        ],
      },
      {
        heading: '2. ¿Cómo Comprobar la Autonomía Real?',
        body: 'Para certificar que un periquito está listo para la independencia, se debe palpar el buche al final de la tarde: debe sentirse lleno de semillas peladas por él mismo. Además, las heces del joven deben ser firmes y regulares, y se debe observar que bebe agua del bebedero sin dificultad.',
        tips: [
          'Revisar que en el comedero del suelo haya cascarillas vacías de semillas que confirmen que están siendo peladas y no solo mordisqueadas.',
        ],
        warnings: [
          'Un polluelo que pía constantemente persiguiendo al padre con las alas temblorosas NO está destetado, sin importar los días que tenga.',
        ],
      },
      {
        heading: '3. Manejo de Conflictos con la Madre y Separación',
        body: 'Si la hembra desea iniciar una nueva puesta, puede volverse agresiva y atacar a los pichones para expulsarlos de su territorio. En ese caso, la mejor solución es colocar una rejilla divisoria en la jaula: los pichones se ubican en un lado y el padre en el otro, permitiendo que el macho los alimente a través de los barrotes hasta que completen el destete.',
        tips: [
          'Una vez destetados (aprox. día 38-42), trasladar a los jóvenes a una voladera espaciosa con otros juveniles para ejercitar sus músculos de vuelo.',
        ],
        warnings: [
          'Nunca dejar a los pichones con una hembra agresiva sin supervisión.',
        ],
      },
    ],
    tips: [
      'Mantener los comederos y bebederos a la altura del suelo durante la primera semana en la nueva voladera.',
      'Suministrar pasta de cría y verduras tiernas en la voladera de juveniles para suavizar la transición nutricional.',
    ],
    warnings: [
      'Separar a un polluelo que no sabe comer semillas duras causa fallecimiento por inanición en 48-72 horas.',
    ],
    breederNotes:
      'En criaderos profesionales, los grupos de destete se alojan en jaulones de 1 a 2 metros de longitud junto con un macho adulto tutor tranquilo que refuerza las conductas sociales y alimentarias de la bandada.',
    checklist: [
      'Pichón observado comiendo semillas duras y bebiendo agua por sí mismo',
      'Buche lleno al anochecer palpado y verificado',
      'Heces normales sin restos de semillas enteras sin digerir',
      'Voladera de desarrollo lista, limpia y sin obstáculos peligrosos',
    ],
    relatedCare: [
      {
        id: 'alojamiento-espacio',
        title: 'Voladeras y Ejercicio de Vuelo',
        type: 'care',
        description: 'Alojamiento para el desarrollo muscular de periquitos juveniles.',
      },
    ],
    sources: [
      'BSAVA Manual of Psittacine Birds',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'Avian Behavioral Health (Echols & Speer)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'El Destete en Periquitos: Cuándo y Cómo Separar a los Pichones - Plumaje Mágico',
      description: 'Guía práctica para el destete independiente de pichones de periquito, transición alimentaria y seguridad.',
      keywords: ['destete periquitos dias', 'cuando separar pichones periquitos', 'como saber si periquito come solo', 'independencia polluelos periquito'],
    },
  },
  {
    id: 'problemas',
    slug: 'problemas',
    title: 'Problemas Reproductivos: Señales de Alarma y Prevención de Emergencias',
    category: 'problemas',
    shortDescription:
      'Identificación temprana de complicaciones reproductivas (distocia, huevos atravesados, picaje de plumas, abandono de nido) y derivación veterinaria.',
    content: `La reproducción conlleva riesgos biológicos inherentes que todo criador responsable debe saber reconocer precozmente. Detectar un problema a tiempo marca la diferencia entre salvar la vida de la madre o de los polluelos y sufrir una pérdida irreparable.

Esta sección describe las situaciones de alarma más frecuentes con un enfoque preventivo. Ante cualquier signo de deterioro clínico, se debe acudir de inmediato a un veterinario especialista en animales exóticos o aves.`,
    icon: '⚠️',
    sections: [
      {
        heading: '1. Retención de Huevo (Distocia / Huevo Atravesado)',
        body: 'Ocurre cuando la hembra es incapaz de expulsar el huevo del oviducto o cloaca. Es la urgencia reproductiva más común y peligrosa. Se debe a deficiencia de calcio (hipocalcemia), inmadurez ósea (hembras menores a 10 meses), huevos excesivamente grandes o deformes, obesidad o temperaturas ambientales frías.',
        tips: [
          'Síntomas de alarma: Hembra en el suelo de la jaula, ojos semicerrados, cloaca muy hinchada y enrojecida, esfuerzo evidente con cola bombeando hacia abajo, incapacidad para posarse en las perchas y respiración dificultosa.',
          'Primeros auxilios mientras se contacta al veterinario: Colocar a la hembra en una caja hospital templada y húmeda (28°C-30°C y humedad alta) con calor suave. No intentar apretar el abdomen ni introducir aceites con objetos punzantes.',
        ],
        warnings: [
          'NUNCA apretar el abdomen para forzar la salida del huevo: romper la cáscara dentro del oviducto provoca peritonitis celómica mortal por yema y shock séptico.',
        ],
      },
      {
        heading: '2. Picaje y Agresividad Parental hacia los Polluelos',
        body: 'Algunas hembras, impulsadas por un celo excesivo o estrés ambiental, arrancan el plumón de sus propios polluelos (picaje parental) o los atacan para forzarlos a abandonar el nido y comenzar una nueva postura.',
        tips: [
          'Si el picaje es leve (solo plumón dorsal), aplicar una fina capa de vaselina neutra o producto amargo apto para aves.',
          'Si hay heridas o sangrado, retirar inmediatamente al progenitor agresor y dejar al macho a cargo, o separar con rejilla.',
        ],
      },
      {
        heading: '3. Abandono de la Nidada y Muerte Embrionaria',
        body: 'Ruidos estridentes, presencia de depredadores (gatos, roedores), infestación de ácaros rojos en el nido o revisiones invasivas continuas pueden provocar que la madre abandone la incubación.',
        tips: [
          'Mantener la zona de cría estrictamente aislada de ruidos y visitas ajenas.',
          'Revisar el fondo del nido con linterna en busca de diminutos puntos rojos o negros (ácaros de las plumas/nido).',
        ],
      },
      {
        heading: '4. Problemas en los Polluelos: Patas de Rana y Buche Parado',
        body: 'Las patas de rana (splay legs) se identifican precozmente entre los 7 y 14 días. Con una corrección temprana mediante esponja ortopédica o grilletes suaves supervisados por un veterinario, la articulación puede corregirse antes de que el hueso calcifique.',
        tips: [
          'Inspeccionar la alineación de las patas durante la colocación de la anilla en el día 7.',
        ],
      },
    ],
    tips: [
      'Disponer siempre del número de teléfono de una clínica veterinaria de animales exóticos de urgencias antes de iniciar la cría.',
      'Mantener una jaula hospital pequeña con fuente de calor suave (lámpara cerámica o almohadilla térmica con termostato).',
    ],
    warnings: [
      'No automedicar con antibióticos caseros ni hormonas a los reproductores.',
    ],
    breederNotes:
      'En aviarios técnicos, las parejas con historial repetido de agresividad hacia los pichones o retención de huevos se retiran definitivamente del programa de reproducción y pasan a ser ejemplares de descanso o compañía.',
    checklist: [
      'Contacto de clínica veterinaria de exóticos guardado',
      'Jaula enfermería / hospital disponible con fuente de calor',
      'Control diario de postura corporal de la hembra gestante',
      'Inspección de patas de los pichones a partir del día 6',
    ],
    relatedHealth: [
      {
        id: 'distocia-huevo',
        title: 'Retención de Huevo y Distocia',
        type: 'health',
        description: 'Guía médica detallada sobre la distocia en aves psitácidas.',
      },
      {
        id: 'patas-de-rana',
        title: 'Displasia de Cadera (Splay Legs)',
        type: 'health',
        description: 'Protocolo de prevención y corrección ortopédica temprana.',
      },
    ],
    sources: [
      'Avian Medicine: Principles and Applications (Ritchie, Harrison & Harrison)',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Problemas en la Cría de Periquitos: Distocia, Picaje y Prevención - Plumaje Mágico',
      description: 'Identifica y previene problemas durante la cría de periquitos: huevo atravesado, picaje y urgencias veterinarias.',
      keywords: ['problemas cria periquitos', 'huevo atravesado periquito', 'picaje polluelos periquito', 'urgencias cria periquitos'],
    },
  },
  {
    id: 'genetica',
    slug: 'genetica',
    title: 'Genética y Reproducción: Planificación Zootécnica de Variedades',
    category: 'genetica',
    shortDescription:
      'Cómo se transmiten las mutaciones, diferencias entre caracteres dominantes, recesivos y ligados al sexo, y planificación responsable de cruzamientos.',
    content: `La genética aviar es la ciencia que explica cómo se transmiten los factores hereditarios desde los reproductores hacia su descendencia. En el periquito australiano (*Melopsittacus undulatus*), existen más de 30 mutaciones reconocidas que modifican el color de fondo, la distribución de la melanina y el patrón de las plumas.

Comprender los principios mendelianos y las peculiaridades del sistema cromosómico de las aves (macho ZZ / hembra ZW) permite planificar emparejamientos con rigor científico, predecir el sexo de ciertas crías al nacer mediante mutaciones ligadas al sexo y evitar cruces contraindicados.`,
    icon: '🧬',
    sections: [
      {
        heading: '1. Sistema Cromosómico Aviar (Macho ZZ / Hembra ZW)',
        body: 'A diferencia de los mamíferos (donde el macho es heterogamético XY), en las aves es la hembra la que determina el sexo genético al portar el cromosoma Z y el cromosoma W (ZW), mientras que el macho posee dos cromosomas Z (ZZ). Por esta razón, las hembras nunca pueden ser "portadoras" de mutaciones ligadas al sexo (como Opalino, Canela o Ino): o son visuales o no poseen el gen.',
        tips: [
          'Un macho portador de una mutación ligada al sexo cruzado con una hembra común dará hembras visuales de dicha mutación (autosexado en el nido).',
        ],
      },
      {
        heading: '2. Modos de Herencia Principales en Periquitos',
        body: 'Las mutaciones se clasifican según su mecanismo de transmisión: Autosómicas Dominantes (ej. Pío Dominante, Gris, Espalda Dorada), Autosómicas Recesivas (ej. Azul, Pio Recesivo, Diluido, Alas Claras) que requieren el gen en ambos progenitores para manifestarse visualmente, y Ligadas al Sexo (Ino/Lutino/Albino, Opalino, Canela, Texas Clearbody).',
        tips: [
          'Para obtener crías visuales de una mutación recesiva (ej. Pío Recesivo), ambos padres deben manifestar la mutación o ser portadores confirmados del alelo.',
        ],
      },
      {
        heading: '3. Próximamente: Calculadora Genética Plumaje Mágico',
        body: 'Estamos integrando el motor de cálculo genético integral en Plumaje Mágico para que puedas simular combinaciones cromosómicas exactas, distribución de factores oscuros (Césped, Laurel, Oliva, Cielo, Cobalto, Malva) y factores violeta/gris con total rigor.',
        tips: [
          'Explora mientras tanto la Enciclopedia de Genética y la Biblioteca de Mutaciones para conocer la descripción fenotípica de cada variedad.',
        ],
      },
    ],
    tips: [
      'Documentar siempre el genotipo conocido de los padres (mutaciones visuales y portaciones de abuelos).',
      'No emparejar aves de mutaciones de estructura compleja sin conocer los requerimientos de calidad de plumaje.',
    ],
    warnings: [
      'No inventar porcentajes de descendencia sin calcular la segregación mendeliana exacta.',
    ],
    breederNotes:
      'Los criadores utilizan árboles genealógicos zootécnicos donde registran tanto los alelos dominantes como los portadores comprobados por descendencia (splits), optimizando los cruces para estándar de exposición o pureza de color.',
    checklist: [
      'Mutaciones visuales de ambos reproductores identificadas',
      'Portaciones genéticas conocidas anotadas en la ficha',
      'Comprobación de compatibilidad de factores de plumaje',
      'Revisión en la Enciclopedia de Mutaciones de Plumaje Mágico',
    ],
    relatedGenetics: [
      {
        id: 'guia-genetica-basica',
        title: 'Manual de Genética Aviar',
        type: 'genetics',
        description: 'Fundamentos de cromosomas, alelos y cuadros de Punnett.',
      },
      {
        id: 'catalogo-mutaciones',
        title: 'Biblioteca de Mutaciones',
        type: 'genetics',
        description: 'Catálogo de más de 30 mutaciones descritas con fotos y fenotipos.',
      },
    ],
    sources: [
      'The Genetics of the Budgerigar (Taylor & Warner)',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'World Budgerigar Organisation Standards',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Genética y Reproducción en Periquitos Australianos - Plumaje Mágico',
      description: 'Fundamentos genéticos para criar periquitos: mutaciones dominantes, recesivas y ligadas al sexo.',
      keywords: ['genetica periquitos', 'cruces periquitos australianos', 'herencia ligada al sexo periquitos', 'calculadora genetica periquitos'],
    },
  },
  {
    id: 'registro',
    slug: 'registro',
    title: 'Registro de Cría: Fichas Técnicas, Trazabilidad y Control de Nidadas',
    category: 'registro',
    shortDescription:
      'Modelo conceptual de control genealógico, seguimiento de huevos y anillas federativas para una trazabilidad zootécnica impecable.',
    content: `El registro riguroso de la información reproductiva es el sello distintivo de la cría ética y profesional. Sin datos anotados, no es posible evaluar la fertilidad real de una pareja, prevenir la consanguinidad en futuras generaciones ni conocer las mutaciones recesivas que portan los pichones.

En esta sección dispones de un modelo de ficha técnica de cría interactivo y descargable para llevar el control local de tus nidadas.`,
    icon: '📋',
    sections: [
      {
        heading: '1. Datos Clave de una Ficha Reproductiva',
        body: 'Una ficha de cría completa debe registrar: Identificación de la pareja (anilla del macho, anilla de la hembra, mutaciones y portaciones), fecha de instalación del nido, fechas exactas de puesta de cada huevo, resultado de la ovoscopia, fecha de eclosión, número de anilla del pichón, mutación resultante y fecha de destete.',
        tips: [
          'Anotar cualquier incidencia destacada: si hubo retraso en la eclosión, si se requirió limpieza del nido o el temperamento de los padres.',
        ],
      },
      {
        heading: '2. Trazabilidad y Anillado Federativo',
        body: 'El anillado cerrado a los 6-8 días garantiza la identidad inalterable del ave a lo largo de toda su vida. Indica el año de nacimiento y vincula al ejemplar con su criador y con su árbol genealógico.',
        tips: [
          'Guardar las fichas de cada temporada para comparar el rendimiento biológico y longevidad de las líneas.',
        ],
      },
    ],
    tips: [
      'Actualizar la ficha de cría diariamente durante la ronda de revisión del aviario.',
      'Utilizar el modelo interactivo de Plumaje Mágico para generar o imprimir tus registros locales.',
    ],
    warnings: [
      'No confiar únicamente en la memoria: los datos genealógicos se pierden con facilidad entre temporadas.',
    ],
    breederNotes:
      'Los criadores federados mantienen libros de registro zootécnico donde cada anilla tiene un código de origen y destino, garantizando la máxima transparencia sanitaria y genética.',
    checklist: [
      'Ficha de cría asignada a la jaula con fecha de inicio',
      'Anillas oficiales reservadas y listas para la semana de anillado',
      'Fechas de ovoscopia y nacimientos registradas al día',
      'Mutaciones de los pichones anotadas al completar el emplumaje',
    ],
    sources: [
      'World Budgerigar Organisation (WBO) Record Keeping Standards',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
    seo: {
      title: 'Registro y Ficha de Cría para Periquitos - Plumaje Mágico',
      description: 'Plantilla y modelo técnico de registro de nidadas, seguimiento de huevos y control genealógico.',
      keywords: ['ficha de cria periquitos', 'registro de nidadas', 'control reproductivo periquitos', 'anillado periquitos'],
    },
  },
];

export const BREEDING_STAGES_DATA: BreedingStage[] = [
  {
    id: 'etapa-preparacion',
    slug: 'preparacion',
    name: 'Preparación',
    title: '1. Preparación y Condición de los Padres',
    order: 1,
    summary: 'Acondicionamiento físico, madurez (10-12 meses) y reservas de calcio semanas antes del nido.',
    description: 'Fase inicial de evaluación de salud, peso corporal de la quilla, dieta reforzada con pasta de cría y estabilización del fotoperiodo.',
    estimatedDuration: '4 a 6 semanas antes del nido',
    duration: '4 a 6 semanas previas',
    timeline: '4 a 6 semanas previas',
    details: [
      'Ambos ejemplares deben tener al menos 10 a 12 meses de edad cumplidos para evitar distocias e inmadurez ósea.',
      'Palpar la musculatura pectoral: descartar aves desnutridas (quilla afilada) u obesas (grasa subcutánea).',
      'Suministrar pasta de cría (16-18% proteína), semillas germinadas limpias y calcio biodisponible (hueso de jibia).',
    ],
    requirements: [
      'Edad mínima confirmada de 10-12 meses',
      'Cera de la hembra marrón rugoso (celo); cera del macho azul brillante o rosa',
      'Aporte mineral y vitamínico diario',
      'Espacio amplio para vuelo previo',
    ],
    tips: [
      'Pesar a los ejemplares en báscula digital antes de emparejar.',
      'Mantener un fotoperiodo estable de 12 a 14 horas de luz.',
    ],
    precautions: [
      'No criar con aves que estén mudando plumaje o que hayan estado enfermas recientemente.',
    ],
    criticalWarnings: [
      'Criar con hembras menores a 10 meses conlleva un alto riesgo de retención de huevo mortal.',
    ],
    sources: [
      'Avian Medicine: Principles and Applications (Ritchie et al.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-parejas',
    slug: 'parejas',
    name: 'Pareja',
    title: '2. Formación de Pareja y Cortejo',
    order: 2,
    summary: 'Adaptación visual, rituales de cortejo, alicalado y aceptación mutua sin forzar.',
    description: 'Periodo de reconocimiento gradual con rejilla divisoria, cortejo del macho y consolidación del vínculo antes de habilitar el nido.',
    estimatedDuration: '1 a 2 semanas',
    duration: '1 a 2 semanas',
    timeline: '1 a 2 semanas',
    details: [
      'Separación inicial por rejilla divisoria durante 7-10 días para comprobar afinidad etológica.',
      'Cortejo característico del macho: contracción de pupilas, movimientos de cabeza y trinos rítmicos.',
      'Aceptación confirmada por alialimentación (regurgitación) y caricias en la nuca.',
    ],
    requirements: [
      'Jaula con rejilla divisoria',
      'Múltiples comederos para evitar agresiones',
      'Supervisión de conducta en los primeros días',
    ],
    tips: [
      'Introducir preferentemente a la hembra en el territorio del macho.',
      'No colocar el nido hasta que la pareja se alimente mutuamente.',
    ],
    precautions: [
      'Separar inmediatamente si la hembra muestra agresividad severa con picotazos en patas o pico.',
    ],
    criticalWarnings: [
      'Nunca forzar la estancia de dos aves incompatibles en un espacio cerrado.',
    ],
    sources: [
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'Avian Behavioral Health (Echols & Speer)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-nido',
    slug: 'nido',
    name: 'Nido',
    title: '3. Instalación y Acondicionamiento del Nido',
    order: 3,
    summary: 'Caja de madera con orificios de ventilación y concavidad obligatoria en el fondo.',
    description: 'Instalación de la caja nido de madera (mínimo 20x15x15 cm) con rebaje cóncavo para prevenir patas de rana en los pichones.',
    estimatedDuration: 'Semana de colocación',
    duration: 'Semana de colocación',
    timeline: 'Semana de instalación',
    details: [
      'Caja de madera natural no tratada de 20-22 cm x 15 cm x 15 cm con entrada de 4.0-4.5 cm.',
      'Fondo de madera con concavidad tallada (8-10 cm de diámetro y 1.5 cm de profundidad).',
      'Tapa superior abatible y orificios de ventilación lateral superior.',
    ],
    requirements: [
      'Nido de madera higiénico y desinfectado',
      'Fondo con concavidad antipatas de rana verificado',
      'Ubicación exterior alta en la jaula de cría',
    ],
    tips: [
      'Colocar el nido en la parte superior exterior para revisar sin invadir la jaula.',
    ],
    precautions: [
      'No usar nidos de mimbre ni nidos plásticos sin transpiración.',
    ],
    criticalWarnings: [
      'Un suelo plano sin concavidad provoca splay legs (displasia de cadera irreversible) en los polluelos.',
    ],
    sources: [
      'World Budgerigar Organisation (WBO) Nest Standards',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-puesta',
    slug: 'puesta',
    name: 'Puesta',
    title: '4. Puesta de Huevos en Días Alternos',
    order: 4,
    summary: 'Puesta de 4 a 6 huevos a ritmo de 1 huevo cada 48 horas con vigilancia no invasiva.',
    description: 'Fase de puesta en la que la hembra expulsa un huevo cada dos días, demandando calcio constante y tranquilidad absoluta.',
    estimatedDuration: '8 a 12 días',
    duration: '8 a 12 días',
    timeline: '8 a 12 días',
    details: [
      'Puesta de 1 huevo cada 48 horas (días alternos). Tamaño habitual: 4 a 6 huevos.',
      'Aumento visible de las heces de la madre y cloaca redondeada.',
      'El macho alimenta a la hembra en la entrada del nido.',
    ],
    requirements: [
      'Calcio y bloque mineral disponibles 24 horas',
      'Registro de fechas de cada huevo',
      'Inspecciones breves y silenciosas',
    ],
    tips: [
      'Revisar el nido cuando la madre salga a defecar o alimentarse.',
    ],
    precautions: [
      'No asustar a la hembra al abrir la tapa para evitar que pise los huevos.',
    ],
    criticalWarnings: [
      'Si la hembra permanece en el suelo con el vientre distendido y esfuerzo infructuoso, acudir de urgencia por distocia (huevo atravesado).',
    ],
    sources: [
      'Avian Reproduction: Physiology and Care (Speer, B.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-incubacion',
    slug: 'incubacion',
    name: 'Incubación',
    title: '5. Incubación y Ovoscopia',
    order: 5,
    summary: '18 días de incubación en firme por cada huevo, humedad del 55-65% y examen al día 7.',
    description: 'Desarrollo embrionario bajo la placa de incubación de la hembra, control de humedad ambiental y ovoscopia a los 6-8 días.',
    estimatedDuration: '18 días por huevo',
    duration: '18 a 20 días',
    timeline: '18 a 20 días',
    details: [
      'Incubación continua iniciada habitualmente a partir del 2º o 3º huevo.',
      'Ovoscopia con linterna LED fría al día 6-7: red de vasos sanguíneos ("araña roja") confirma fertilidad.',
      'Humedad relativa del 55% al 65% para evitar deshidratación de la membrana interna.',
    ],
    requirements: [
      'Termohigrómetro en el aviario (18-24°C, 55-65% humedad)',
      'Ovoscopio LED de luz fría',
      'Alimentación constante suministrada por el macho',
    ],
    tips: [
      'Manipular los huevos únicamente con guantes o manos muy limpias.',
      'No descartar huevos antes del día 8 de incubación en firme.',
    ],
    precautions: [
      'No pulverizar agua fría sobre los huevos.',
    ],
    criticalWarnings: [
      'Humedad inferior al 40% puede asfixiar a los embriones al secar la membrana de eclosión.',
    ],
    sources: [
      'Avian Embryology and Incubation (Romanoff, A.L.)',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-nacimiento',
    slug: 'nacimiento',
    name: 'Nacimiento',
    title: '6. Eclosión y Primeras Horas de Vida',
    order: 6,
    summary: 'Eclosión en 12-24 h con diente de huevo, absorción del saco vitelino y leche de buche.',
    description: 'Salida del pichón tras picar la cámara de aire y la cáscara, secado bajo la madre e inicio de la alimentación materna.',
    estimatedDuration: '12 a 24 horas por pichón',
    duration: 'Día 1 de vida',
    timeline: 'Día 1',
    details: [
      'El polluelo pica la cáscara con el diente de huevo e inicia la respiración pulmonar.',
      'Absorción del saco vitelino como reserva de nutrientes para las primeras horas.',
      'La madre administra secreciones ricas en enzimas ("leche de buche aviar").',
    ],
    requirements: [
      'Ambiente cálido y húmedo en el nido',
      'Pasta de cría húmeda y semillas germinadas frescas para los padres',
      'Retiro de cáscaras vacías secas',
    ],
    tips: [
      'No intervenir abriendo la cáscara antes de tiempo: riesgo de hemorragia mortal.',
    ],
    precautions: [
      'Verificar que el pichón esté caliente bajo la madre en las primeras 12 horas.',
    ],
    criticalWarnings: [
      'Tirar de la cáscara con vasos sanguíneos activos causa hemorragia fatal inmediata.',
    ],
    sources: [
      'Avian Medicine: Principles and Applications (Ritchie et al.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-desarrollo',
    slug: 'polluelos',
    name: 'Desarrollo',
    title: '7. Desarrollo de Polluelos y Anillado Oficial',
    order: 7,
    summary: 'Apertura de ojos al día 7, anillado oficial de 4.0 mm al día 6-8 y emplumaje.',
    description: 'Crecimiento exponencial de los pichones, colocación de la anilla cerrada, apertura de cañones y limpieza periódica del nido.',
    estimatedDuration: 'Día 1 al día 28',
    duration: 'Día 1 a 28',
    timeline: 'Día 1 a 28',
    details: [
      'Apertura de ojos hacia el día 6-8.',
      'Anillado oficial cerrado a los 6-8 días con calibre reglamentario 4.0 - 4.2 mm.',
      'Aparición de cañones de pluma hacia el día 12-14 y apertura completa al día 21-25.',
    ],
    requirements: [
      'Anillas federativas cerradas oficiales de 4.0 a 4.2 mm',
      'Pasta de cría reforzada renovada a diario',
      'Revisión diaria del buche en todos los pichones',
    ],
    tips: [
      'Limpiar el nido a partir de los 10-12 días retirando heces secas acumuladas.',
      'Comprobar la alineación correcta de las patas.',
    ],
    precautions: [
      'Revisar a las 24 horas que la anilla no se haya desprendido.',
    ],
    criticalWarnings: [
      'No anillar después del 9º día, ya que la articulación se ensancha y no entrará la anilla.',
    ],
    sources: [
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'etapa-destete',
    slug: 'destete',
    name: 'Destete',
    title: '8. Destete, Independencia y Traslado a Voladera',
    order: 8,
    summary: 'Salida del nido al día 30, aprendizaje con el padre y separación a los 38-42 días.',
    description: 'Salida del nido, entrenamiento para descascarillar semillas y verificación rigurosa de buche lleno antes del traslado a la voladera juvenil.',
    estimatedDuration: 'Día 30 al día 42',
    duration: 'Día 30 a 42',
    timeline: 'Día 30 a 42',
    details: [
      'Salida del nido hacia los 28-32 días completamente emplumados.',
      'El padre enseña a los pichones a pelar semillas en el suelo de la jaula.',
      'Separación a la voladera de desarrollo una vez confirmada la autonomía alimentaria (día 38-42).',
    ],
    requirements: [
      'Comederos planos en el suelo con semillas y espigas de panizo',
      'Bebederos bajos accesibles',
      'Voladera espaciosa para vuelo juvenil',
    ],
    tips: [
      'Palpar el buche al anochecer para comprobar que esté lleno de semillas peladas.',
      'Separar con rejilla si la hembra muestra agresividad para iniciar otra postura.',
    ],
    precautions: [
      'No guiarse solo por la edad: verificar que el ave coma semillas duras de verdad.',
    ],
    criticalWarnings: [
      'Separar a un pichón antes de que sea autónomo causa muerte por inanición en 48 horas.',
    ],
    sources: [
      'BSAVA Manual of Psittacine Birds',
      'The Budgerigar: Its Breeding and Genetics (Watmough, W.)',
    ],
    verificationStatus: 'verified',
  },
];

export const CHICK_DEVELOPMENT_STAGES: ChickDevelopmentStage[] = [
  {
    id: 'chick-stage-1',
    slug: 'neonatal',
    dayRange: 'Días 1 a 5',
    title: 'Fase Neonatal: Neonato Indefenso',
    physicalMilestones: [
      'Peso al nacer de 1.2 a 2.0 g; se triplica al día 5 (6-8 g).',
      'Ciego, piel rosada translúcida con fino plumón húmedo.',
      'Reflejo de erguir el cuello al sentir movimiento de la madre.',
    ],
    parentalCare: 'La madre permanece 95% del tiempo en el nido y administra leche de buche aviar cada 2-3 horas.',
    breederTasks: [
      'Revisión visual matutina sin extraer al pichón.',
      'Verificar presencia de bolo de alimento semilíquido en el buche.',
      'Retirar cáscaras secas sobrantes.',
    ],
    precautions: [
      'No manipular con manos frías; evitar corrientes de aire.',
    ],
    nutritionNotes: 'Secreciones biológicas de la madre ricas en enzimas y probióticos.',
    sources: ['Avian Medicine: Principles and Applications (Ritchie et al.)'],
    verificationStatus: 'verified',
  },
  {
    id: 'chick-stage-2',
    slug: 'ojos-anillado',
    dayRange: 'Días 6 a 10',
    title: 'Apertura de Ojos y Anillado Oficial',
    physicalMilestones: [
      'Apertura progresiva de los párpados entre los días 6 y 8.',
      'Crecimiento de plumón secundario espeso (blanco o gris según la mutación).',
      'Peso alcanza los 12 a 18 gramos.',
    ],
    parentalCare: 'Ambos padres pueden ingresar al nido para alimentar a la nidada con pasta de cría predigerida.',
    breederTasks: [
      'Colocación de la anilla federativa cerrada (calibre 4.0 - 4.2 mm) entre el día 6 y 8.',
      'Revisión de la anilla a las 24 horas para comprobar que no se ha caído.',
      'Control de alineación de dedos y tarsos.',
    ],
    precautions: [
      'No forzar la anilla si la pata ya está demasiado ancha (anillar con calma antes del día 9).',
    ],
    nutritionNotes: 'Pasta de cría enriquecida con huevo, aminoácidos y semillas germinadas.',
    sources: ['The Budgerigar: Its Breeding and Genetics (Watmough, W.)', 'WBO Standards'],
    verificationStatus: 'verified',
  },
  {
    id: 'chick-stage-3',
    slug: 'canones-plumas',
    dayRange: 'Días 11 a 20',
    title: 'Aparición de Cañones y Emplumaje Rápido',
    physicalMilestones: [
      'Aparición de cañones de queratina en alas, cola y cabeza.',
      'Hacia el día 18 los cañones se abren mostrando el color y patrón del plumaje.',
      'Peso alcanza los 24 a 34 gramos.',
    ],
    parentalCare: 'La madre pasa más tiempo fuera del nido; el macho asume gran parte de la alimentación.',
    breederTasks: [
      'Limpieza periódica del fondo del nido retirando heces secas acumuladas.',
      'Pesaje de control para descartar desnutrición en los hermanos menores.',
    ],
    precautions: [
      'Vigilar que los cañones de sangre no se rompan ni sangren por picaje.',
    ],
    sources: ['BSAVA Manual of Psittacine Birds'],
    verificationStatus: 'verified',
  },
  {
    id: 'chick-stage-4',
    slug: 'asomo-ejercicio',
    dayRange: 'Días 21 a 28',
    title: 'Pre-Salida: Ejercicio de Alas y Curiosidad',
    physicalMilestones: [
      'Plumaje casi completo; desaparece la mayor parte del plumón.',
      'El pichón se sienta erguido y aletea vigorosamente dentro de la caja nido.',
      'Peso máximo juvenil: 35 a 42 gramos.',
    ],
    parentalCare: 'El padre alimenta a los pichones en la entrada de la caja nido.',
    breederTasks: [
      'Comprobar que el orificio de entrada del nido esté despejado.',
      'Colocar espigas de panizo en la jaula para despertar el instinto de picoteo.',
    ],
    precautions: [
      'Asegurar que la jaula no tenga barrotes con espaciado ancho donde puedan atorar la cabeza.',
    ],
    sources: ['Avian Behavioral Health (Echols & Speer)'],
    verificationStatus: 'verified',
  },
  {
    id: 'chick-stage-5',
    slug: 'salida-destete',
    dayRange: 'Días 29 a 42',
    title: 'Salida del Nido y Destete Completo',
    physicalMilestones: [
      'Salida voluntaria del nido y primeros vuelos cortos.',
      'Desarrollo de la habilidad de pelar semillas duras con el pico.',
      'Peso estabilizado en torno a 36-40 gramos.',
    ],
    parentalCare: 'El padre acompaña a los pichones en el suelo; la madre puede comenzar nueva postura.',
    breederTasks: [
      'Colocar comederos planos en el suelo con mezcla de semillas, pasta y panizo.',
      'Verificar buche lleno al anochecer antes de separar a la voladera (día 38-42).',
    ],
    precautions: [
      'Separar con rejilla si la hembra muestra agresividad hacia los pichones salientes.',
    ],
    sources: ['The Budgerigar: Its Breeding and Genetics (Watmough, W.)'],
    verificationStatus: 'verified',
  },
];

export const EGG_GUIDES_DATA: EggGuide[] = [
  {
    id: 'egg-fertil',
    title: 'Huevo Fértil en Desarrollo (Día 6-8)',
    status: 'fertil',
    statusLabel: 'Fértil / Embrión Activo',
    description: 'El óvulo fue fecundado y el embrión se está desarrollando con normalidad dentro del huevo.',
    visualDescription:
      'Al iluminar con luz LED, se observa una nítida red de vasos sanguíneos rojos ramificados con un punto central oscuro (latido embrionario), conocido como "araña roja". En etapas más avanzadas (día 12-16), la mitad del huevo se vuelve opaca y oscura con la cámara de aire bien definida.',
    dayRange: 'Visible desde el día 6 de incubación efectiva',
    actionGuidance: 'Mantener en el nido bajo incubación de la madre con humedad adecuada (55%-65%).',
    precautions: [
      'Manipular con manos limpias o guantes de látex.',
      'No someter a luz LED caliente por más de 10 segundos.',
    ],
    sources: ['Avian Embryology and Incubation (Romanoff, A.L.)'],
    verificationStatus: 'verified',
  },
  {
    id: 'egg-infertil',
    title: 'Huevo Infértil (Huevo Claro / De Celo)',
    status: 'infertil',
    statusLabel: 'Infértil / Huevo Claro',
    description: 'El óvulo no fue fecundado durante la cópula o la hembra puso el huevo sin fecundación previa.',
    visualDescription:
      'Totalmente transparente, de color amarillento uniforme tras 8 días de incubación continua. Se observa la sombra flotante de la yema sin ningún vaso sanguíneo ni red capilar.',
    dayRange: 'Confirmable a partir del día 8 de incubación',
    actionGuidance:
      'Si hay más de 3 huevos fértiles en el nido, puede retirarse; si hay pocos huevos fértiles (1 o 2), se recomienda dejarlo para que sirva de apoyo térmico y soporte físico para los embriones vivos.',
    precautions: [
      'No retirar antes del día 8 para evitar descartar huevos fértiles de puesta tardía.',
    ],
    sources: ['BSAVA Manual of Psittacine Birds'],
    verificationStatus: 'verified',
  },
  {
    id: 'egg-interrumpido',
    title: 'Embrión Interrumpido (Muerte Embrionaria Temprana)',
    status: 'interrumpido',
    statusLabel: 'Embrión Interrumpido',
    description: 'El huevo fue fecundado pero el embrión murió en los primeros días de incubación.',
    visualDescription:
      'Se aprecia una línea oscura o "anillo de sangre" (blood ring) adherido a la cara interna de la cáscara, sin vasos sanguíneos funcionales ni latido central, o una masa oscura informe con aspecto turbio.',
    dayRange: 'Frecuente entre el día 3 y el día 8',
    actionGuidance: 'Retirar si se detecta mal olor o rajaduras; de lo contrario retirar en la revisión general.',
    precautions: [
      'Evaluar causas ambientales: cambios bruscos de temperatura, abandono temporal del nido o desnutrición de los padres.',
    ],
    sources: ['Veterinary Clinics of North America: Exotic Animal Practice'],
    verificationStatus: 'verified',
  },
  {
    id: 'egg-eclosion',
    title: 'Huevo a Término / Fase de Eclosión (Día 17-18)',
    status: 'eclosion',
    statusLabel: 'Listo para Eclosión',
    description: 'El polluelo ocupa prácticamente todo el espacio interno y ha perforado la cámara de aire.',
    visualDescription:
      'Huevo casi completamente oscuro a la trasiluminación, excepto por la cámara de aire en el polo romo. Se puede observar la sombra del pico moviéndose en la cámara de aire y se escuchan tenues píos desde el interior.',
    dayRange: 'Día 17 a 19 de incubación',
    actionGuidance:
      'Asegurar humedad en el aviario (60%) y no molestar a la madre. Dejar que el polluelo realice el piqueteo natural.',
    precautions: [
      'No intervenir abriendo la cáscara a menos que el huevo lleve más de 24 horas picado sin avance y con membrana seca.',
    ],
    sources: ['Avian Reproduction: Physiology and Care (Speer, B.)'],
    verificationStatus: 'verified',
  },
];

export const BREEDING_CHECKLISTS_DATA: BreedingChecklist[] = [
  {
    id: 'checklist-preparacion',
    title: 'Fase 1: Preparación y Condición de los Padres',
    phase: 'preparacion',
    description: 'Tareas indispensables antes de juntar a la pareja o colocar la caja nido.',
    items: [
      {
        id: 'cp-1',
        text: 'Confirmar edad mínima de ambos ejemplares (10-12 meses)',
        details: 'Verificar por anillado oficial o fecha de nacimiento documentada.',
        phase: 'preparacion',
      },
      {
        id: 'cp-2',
        text: 'Palpar la quilla de ambos reproductores para descartar delgadez u obesidad',
        details: 'La masa muscular pectoral debe ser firme y sin grasa subcutánea amarillenta.',
        phase: 'preparacion',
      },
      {
        id: 'cp-3',
        text: 'Instalar hueso de sepia (jibia) y bloque mineral con yodo',
        details: 'Imprescindible para la síntesis de la cáscara del huevo.',
        phase: 'preparacion',
      },
      {
        id: 'cp-4',
        text: 'Introducir pasta de cría (16-18% proteína) y semillas germinadas gradualmente',
        details: 'Ofrecer 3 veces por semana antes de emparejar.',
        phase: 'preparacion',
      },
      {
        id: 'cp-5',
        text: 'Comprobar el estado de la cera (marrón oscuro en hembra / azul brillante o rosa en macho)',
        details: 'Indica pico hormonal y receptividad para el celo.',
        phase: 'preparacion',
      },
      {
        id: 'cp-6',
        text: 'Desinfectar la jaula de cría y ubicarla en un lugar resguardado sin corrientes',
        details: 'Zona tranquila, fotoperiodo de 12-14 horas de luz.',
        phase: 'preparacion',
      },
    ],
    sources: ['Avian Medicine: Principles and Applications'],
    verificationStatus: 'verified',
  },
  {
    id: 'checklist-cria-incubacion',
    title: 'Fase 2: Durante la Puesta y la Incubación',
    phase: 'cria',
    description: 'Control de puesta, registro de fechas, ovoscopia y vigilancia de la madre.',
    items: [
      {
        id: 'ci-1',
        text: 'Verificar la concavidad del fondo de madera del nido',
        details: 'Obligatorio para evitar patas de rana en los pichones.',
        phase: 'cria',
      },
      {
        id: 'ci-2',
        text: 'Registrar la fecha de cada huevo puesto en la ficha técnica',
        details: 'Anotar cada 48 horas tras la puesta matutina.',
        phase: 'cria',
      },
      {
        id: 'ci-3',
        text: 'Observar a la hembra para descartar signos de distocia (huevo atravesado)',
        details: 'Vigilancia diaria: heces grandes normales vs. hembra embolada en el suelo.',
        phase: 'cria',
      },
      {
        id: 'ci-4',
        text: 'Realizar ovoscopia con linterna LED fría al día 6-7 de incubación en firme',
        details: 'Identificar red de vasos sanguíneos ("araña roja") o huevos claros.',
        phase: 'cria',
      },
      {
        id: 'ci-5',
        text: 'Monitorear termohigrómetro: temperatura 18-24°C y humedad 55-65%',
        details: 'Disponer bañera para la madre en días secos.',
        phase: 'cria',
      },
    ],
    sources: ['BSAVA Manual of Psittacine Birds'],
    verificationStatus: 'verified',
  },
  {
    id: 'checklist-post-nacimiento',
    title: 'Fase 3: Nacimiento, Crecimiento y Destete',
    phase: 'post-nacimiento',
    description: 'Supervisión de eclosión, alimentación de buche, anillado oficial y salida del nido.',
    items: [
      {
        id: 'cn-1',
        text: 'Verificar buche lleno en los pichones recién nacidos',
        details: 'La madre debe suministrar alimento en las primeras 6-12 horas.',
        phase: 'post-nacimiento',
      },
      {
        id: 'cn-2',
        text: 'Suministrar pasta de cría húmeda y semillas germinadas frescas 2 veces al día',
        details: 'Retirar restos que lleven más de 4-6 horas en el comedero.',
        phase: 'post-nacimiento',
      },
      {
        id: 'cn-3',
        text: 'Colocar anillas federativas cerradas oficiales (4.0-4.2 mm) entre el día 6 y 8',
        details: 'Revisar a las 24 horas que no se haya desprendido.',
        phase: 'post-nacimiento',
      },
      {
        id: 'cn-4',
        text: 'Limpieza periódica del fondo del nido a partir de los 10-12 días',
        details: 'Retirar heces secas acumuladas para higiene de patas y plumaje.',
        phase: 'post-nacimiento',
      },
      {
        id: 'cn-5',
        text: 'Colocar comederos planos con semillas y panizo en el suelo para el destete',
        details: 'A partir del día 28 cuando los pichones salgan del nido.',
        phase: 'post-nacimiento',
      },
      {
        id: 'cn-6',
        text: 'Comprobar autonomía alimentaria real (buche lleno de semillas peladas) antes de separar',
        details: 'Traslado a voladera de juveniles hacia los 38-42 días.',
        phase: 'post-nacimiento',
      },
    ],
    sources: ['World Budgerigar Organisation (WBO) Standards'],
    verificationStatus: 'verified',
  },
];

export const DEMO_BREEDING_RECORDS: BreedingRecordEntry[] = [
  {
    id: 'rec-2026-01',
    pairName: 'Pareja Alfa (Verde Césped Clásico x Azul Cobalto)',
    maleRing: 'E26-0814-042',
    femaleRing: 'E25-0720-118',
    maleGenetics: 'Verde Césped Clásico / portador de Azul y Opalino',
    femaleGenetics: 'Azul Cobalto Cara Amarilla Tipo II',
    pairingDate: '2026-03-01',
    nestInstalledDate: '2026-03-10',
    firstEggDate: '2026-03-18',
    clutchSize: 5,
    fertileEggs: 4,
    hatchedCount: 4,
    weanedCount: 4,
    eggsData: [
      {
        eggNumber: 1,
        layDate: '2026-03-18',
        isFertile: true,
        hatchDate: '2026-04-05',
        bandNumber: 'E26-0814-051',
        mutationResult: 'Verde Laurel Macho',
        notes: 'Nacimiento normal, anillado en día 7.',
      },
      {
        eggNumber: 2,
        layDate: '2026-03-20',
        isFertile: true,
        hatchDate: '2026-04-07',
        bandNumber: 'E26-0814-052',
        mutationResult: 'Azul Cielo Hembra Opalina',
        notes: 'Autosexada por mutación ligada al sexo.',
      },
      {
        eggNumber: 3,
        layDate: '2026-03-22',
        isFertile: true,
        hatchDate: '2026-04-09',
        bandNumber: 'E26-0814-053',
        mutationResult: 'Verde Césped Hembra Opalina',
        notes: 'Autosexada.',
      },
      {
        eggNumber: 4,
        layDate: '2026-03-24',
        isFertile: true,
        hatchDate: '2026-04-11',
        bandNumber: 'E26-0814-054',
        mutationResult: 'Azul Cobalto Macho',
        notes: 'Destete completado a los 39 días.',
      },
      {
        eggNumber: 5,
        layDate: '2026-03-26',
        isFertile: false,
        notes: 'Huevo claro en ovoscopia día 7; dejado como apoyo térmico.',
      },
    ],
    observations:
      'Excelente comportamiento de la pareja. El macho alimentó con constancia a la hembra y asistió a los 4 pichones hasta su total independencia.',
  },
];
