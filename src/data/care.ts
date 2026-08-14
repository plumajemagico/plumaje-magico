import {
  CareArticle,
  FoodItem,
  SafetyItem,
  CareChecklist,
  CareStepGuide,
  CareGuide,
} from '../types';

export interface CareCategoryMeta {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  iconName: string;
  summary: string;
  categoryGroup: 'esencial' | 'entorno' | 'bienestar' | 'seguridad';
}

export const CARE_CATEGORIES_CONFIG: CareCategoryMeta[] = [
  {
    id: 'alimentacion',
    slug: 'alimentacion',
    title: 'Alimentación y Nutrición Equilibrada',
    shortTitle: 'Alimentación',
    iconName: 'Apple',
    summary: 'Mixturas de semillas, germinados, verduras frescas, frutas y cómo evitar deficiencias nutricionales.',
    categoryGroup: 'esencial',
  },
  {
    id: 'alojamiento',
    slug: 'alojamiento',
    title: 'Alojamiento y Diseño de Jaula',
    shortTitle: 'Alojamiento',
    iconName: 'Home',
    summary: 'Espacio horizontal, orientación de barrotes, distribución de comederos, bebederos y zonas de actividad.',
    categoryGroup: 'esencial',
  },
  {
    id: 'perchas',
    slug: 'perchas',
    title: 'Perchas y Maderas Naturales',
    shortTitle: 'Perchas',
    iconName: 'TreeDeciduous',
    summary: 'Maderas seguras, diversidad de grosores ergonómicos y prevención de la pododermatitis plantar.',
    categoryGroup: 'esencial',
  },
  {
    id: 'agua',
    slug: 'agua',
    title: 'Agua e Hidratación Diaria',
    shortTitle: 'Agua',
    iconName: 'Droplets',
    summary: 'Disponibilidad permanente, limpieza de bebederos, prevención de biofilm y rutina de baño.',
    categoryGroup: 'esencial',
  },
  {
    id: 'higiene',
    slug: 'higiene',
    title: 'Higiene y Desinfección de Jaula',
    shortTitle: 'Higiene',
    iconName: 'Sparkles',
    summary: 'Limpieza de bandejas, comederos, posaderos y productos desinfectantes seguros no tóxicos.',
    categoryGroup: 'entorno',
  },
  {
    id: 'enriquecimiento',
    slug: 'enriquecimiento',
    title: 'Enriquecimiento Ambiental y Mente Activa',
    shortTitle: 'Enriquecimiento',
    iconName: 'Sparkle',
    summary: 'Estimulación cognitiva, forrajeo, búsqueda de alimento y prevención del aburrimiento.',
    categoryGroup: 'bienestar',
  },
  {
    id: 'juguetes',
    slug: 'juguetes',
    title: 'Juguetes, Masticación y Exploración',
    shortTitle: 'Juguetes',
    iconName: 'Gamepad2',
    summary: 'Materiales seguros (madera sin tratar, hojas de palma, cuerda de cáñamo) y rotación periódica.',
    categoryGroup: 'bienestar',
  },
  {
    id: 'ejercicio',
    slug: 'ejercicio',
    title: 'Ejercicio Físico y Vuelo Libre',
    shortTitle: 'Ejercicio y Vuelo',
    iconName: 'Footprints',
    summary: 'Importancia del vuelo para la musculatura pectoral, sacos aéreos y preparación de una habitación segura.',
    categoryGroup: 'bienestar',
  },
  {
    id: 'manejo',
    slug: 'manejo',
    title: 'Manejo Respetuoso y Amansamiento',
    shortTitle: 'Manejo',
    iconName: 'Hand',
    summary: 'Construcción de confianza, lectura de señales corporales, refuerzo positivo y aproximación sin persecución.',
    categoryGroup: 'bienestar',
  },
  {
    id: 'entorno',
    slug: 'entorno',
    title: 'Temperatura, Humedad y Clima',
    shortTitle: 'Entorno y Clima',
    iconName: 'Thermometer',
    summary: 'Protección contra corrientes de aire directas, cambios bruscos térmicos y control de humedad ambiental.',
    categoryGroup: 'entorno',
  },
  {
    id: 'descanso',
    slug: 'descanso',
    title: 'Luz Natural, Radiación UVB y Descanso',
    shortTitle: 'Luz y Descanso',
    iconName: 'SunMedium',
    summary: 'Ciclos de 10-12 horas de oscuridad, síntesis de vitamina D3, prevención de terrores nocturnos y celo excesivo.',
    categoryGroup: 'entorno',
  },
  {
    id: 'socializacion',
    slug: 'socializacion',
    title: 'Socialización y Vida en Compañía',
    shortTitle: 'Socialización',
    iconName: 'Users',
    summary: 'Naturaleza gregaria del periquito, dinámica de pareja o grupo y enriquecimiento social.',
    categoryGroup: 'bienestar',
  },
  {
    id: 'transporte',
    slug: 'transporte',
    title: 'Transporte Seguro y Visitas Veterinarias',
    shortTitle: 'Transporte',
    iconName: 'Plane',
    summary: 'Elección de transportines pequeños y oscuros, control de temperatura y minimización del estrés durante traslados.',
    categoryGroup: 'seguridad',
  },
  {
    id: 'nueva-ave',
    slug: 'nueva-ave',
    title: 'Llegada de una Nueva Ave y Cuarentena',
    shortTitle: 'Nueva Ave',
    iconName: 'UserPlus',
    summary: 'Protocolo de aclimatación, aislamiento preventivo de 30 días y presentación gradual sin conflictos territoriales.',
    categoryGroup: 'seguridad',
  },
  {
    id: 'seguridad',
    slug: 'seguridad',
    title: 'Seguridad en el Hogar y Prevención de Accidentes',
    shortTitle: 'Seguridad',
    iconName: 'ShieldAlert',
    summary: 'Identificación de peligros domésticos: ventanas sin cortina, espejos, puertas, plantas tóxicas y mascotas.',
    categoryGroup: 'seguridad',
  },
  {
    id: 'seguridad-aire',
    slug: 'seguridad-aire',
    title: 'Calidad del Aire, Humos y Toxinas Volátiles',
    shortTitle: 'Humos y Aire',
    iconName: 'Wind',
    summary: 'Vapores de PTFE/Teflón, humo de tabaco, ambientadores, aerosoles y protección del sistema respiratorio aviar.',
    categoryGroup: 'seguridad',
  },
];

export const CARE_ARTICLES_DATA: CareArticle[] = [
  {
    id: 'alimentacion',
    slug: 'alimentacion',
    title: 'Alimentación y Nutrición Completa del Periquito Australiano',
    category: 'alimentacion',
    shortDescription:
      'Pautas para una nutrición variada y equilibrada: mixtura de semillas de calidad, verduras frescas de hoja verde, frutas con moderación, aporte mineral y alimentos peligrosos.',
    content:
      'En estado salvaje en el interior de Australia, los periquitos recorren decenas de kilómetros al día alimentándose principalmente de semillas de gramíneas en diferentes estados de maduración, brotes tiernos y vegetación estacional. En cautividad, mantenerlos exclusivamente a base de una mixtura simple de semillas secas conduce con frecuencia a obesidad, déficit de vitamina A y desequilibrios minerales.\n\nUna alimentación óptima combina una base de semillas variadas y limpias (o pienso extrusionado formulado específicamente para periquitos), vegetales frescos diarios de hoja verde y hortalizas, fruta como premio ocasional y suplementación mineral permanente mediante hueso de jibia y bloque de calcio con yodo.',
    sections: [
      {
        heading: '1. Base de Semillas y Pienso Específico',
        body: 'La base tradicional se compone de una mezcla de semillas limpia y sin polvo: 50% alpiste de alta pureza, 30% mijo blanco y amarillo, 10% mijo rojo/japonés, y proporciones controladas de avena pelada y semillas ricas en ácidos grasos como lino o chía. También pueden emplearse piensos extrusionados específicos que evitan la selección exclusiva de semillas grasas.',
        tips: [
          'Soplar suavemente los comederos una o dos veces al día para retirar las cascarillas vacías de la superficie.',
          'Conservar las semillas en recipientes herméticos de vidrio en un lugar fresco, seco y oscuro para evitar polillas y enranciamiento de aceites.',
        ],
      },
      {
        heading: '2. Vegetales Frescos y Hortalizas (Aporte Vitamínico Diario)',
        body: 'Las verduras aportan fibra, carotenoides, ácido fólico y agua biológica. Deben ofrecerse lavadas meticulosamente y secas a temperatura ambiente.',
        tips: [
          'Verduras recomendadas: Espinacas, acelgas, brócoli (con sus hojas), hojas de zanahoria, calabacín, canónigos, rúcula y pepino.',
          'Frutas: Ofrecer 2-3 veces por semana en porciones pequeñas (manzana sin semillas, pera, plátano, fresas o arándanos).',
        ],
        warnings: [
          'Retirar siempre los restos de comida fresca tras 4 a 6 horas para evitar proliferación bacteriana o fúngica.',
        ],
      },
      {
        heading: '3. Aporte Mineral Indispensable (Calcio y Yodo)',
        body: 'Las semillas son naturalmente deficitarias en calcio y yodo. Toda jaula debe disponer de un hueso de sepia (jibia) y un bloque mineral con yodo para prevenir el bocio tiroideo y favorecer la calcificación adecuada.',
      },
    ],
    tips: [
      'Lava y seca cuidadosamente cualquier verdura antes de colocarla en la jaula.',
      'Introduce los vegetales nuevos enganchándolos con una pinza cerca de sus perchas habituales.',
      'El panizo en espiga debe reservarse como premio durante sesiones de confianza o vuelo.',
    ],
    warnings: [
      'NUNCA ofrezcas aguacate (palta), chocolate, café, cebolla, ajo o semillas de manzana/pera (contienen cianuro).',
      'No agregues vitaminas en el agua de bebida sin indicación veterinaria, ya que aceleran el crecimiento bacteriano.',
    ],
    breederNotes:
      'En aviarios reproductores o periodos de muda, se recomienda enriquecer la dieta con pasta de cría proteica de alta digestibilidad, mijo germinado bajo estricta higiene y aporte de aminoácidos esenciales (metionina, lisina).',
    checklist: [
      'Comederos con semillas limpias y libres de cascarillas.',
      'Ración fresca de verdura lavada colocada por la mañana.',
      'Hueso de sepia y bloque mineral de yodo fijados sólidamente.',
      'Comida fresca retirada antes del anochecer.',
    ],
    relatedHealth: [
      {
        title: 'Nutrición, Minerales y Alimentos Tóxicos',
        sectionId: 'nutricion',
        description: 'Conoce los signos de déficit de yodo (bocio) y los mecanismos de toxicidad del aguacate y chocolate.',
      },
    ],
    relatedNutrition: ['alpiste', 'mijo-blanco', 'espinacas', 'brocoli', 'manzana', 'aguacate'],
    relatedArticles: ['alojamiento', 'higiene', 'agua'],
    sources: [
      'Association of Avian Veterinarians (AAV) - Psittacine Nutrition Guidelines',
      'BSAVA Manual of Avian Practice (3rd Edition)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'alojamiento',
    slug: 'alojamiento',
    title: 'Alojamiento Ideal, Dimensiones de Jaula y Distribución',
    category: 'alojamiento',
    shortDescription:
      'Principios para elegir y equipar la jaula: prioridad del espacio horizontal sobre la altura, separación segura de barrotes, ubicación en el hogar y distribución del espacio interior.',
    content:
      'La jaula es el refugio y hogar del periquito. Los periquitos australianos son voladores horizontales nativos de espacios abiertos; no vuelan verticalmente como helicópteros. Por esta razón, una jaula ancha y alargada es inmensamente más funcional y saludable que una jaula alta y estrecha con forma de torre.\n\nUn alojamiento bien diseñado cuenta con barrotes horizontales que facilitan la escalada, materiales no tóxicos (libres de plomo o zinc galvanizado tóxico) y una disposición interior que deja despejado el centro para permitir pequeños vuelos de percha a percha.',
    sections: [
      {
        heading: '1. Dimensiones y Geometría Recomendadas',
        body: 'Para una pareja de periquitos, se aconseja una longitud mínima de 60 a 70 cm de largo, 40 cm de profundidad y 40-50 cm de alto. Cuanto mayor sea el espacio horizontal, mejor será el tono muscular y el bienestar psicológico de las aves.',
        tips: [
          'La separación entre barrotes debe situarse entre 10 mm y 12 mm máximo para evitar que el ave pueda introducir y atrapar su cabeza.',
          'Evita las jaulas circulares o redondeadas: dificultan la orientación espacial y reducen la sensación de refugio.',
        ],
      },
      {
        heading: '2. Ubicación Estratégica en la Vivienda',
        body: 'Ubica la jaula en una habitación con actividad familiar pero tranquila, a la altura de los ojos humanos (unos 1,50 m del suelo). Colocar un lateral pegado a una pared sólida proporciona al periquito sensación de seguridad y protección.',
        warnings: [
          'NUNCA ubiques la jaula en la cocina (riesgo mortal por humos de teflón) ni en zonas con corrientes de aire continuas o exposición solar directa sin sombra.',
        ],
      },
      {
        heading: '3. Distribución Interior Despejada',
        body: 'El error más habitual es llenar la jaula de accesorios, perchas y juguetes hasta impedir el aleteo. Coloca 2 o 3 perchas en los extremos opuestos y mantén el centro completamente libre.',
      },
    ],
    tips: [
      'Prioriza bandejas inferiores extraíbles que permitan una limpieza rápida sin perturbar el interior.',
      'Elige comederos interiores o tolvas exteriores de fácil recarga.',
      'Revisa que los cierres de las puertas sean seguros frente a aperturas accidentales.',
    ],
    warnings: [
      'Evita jaulas con pinturas descascarilladas o metales oxidados.',
      'No uses barrotes de madera que no puedan ser desinfectados a fondo con regularidad.',
    ],
    breederNotes:
      'En aviarios, las jaulas de cría de 60 a 100 cm con separador extraíble permiten gestionar la emancipación de polluelos y descansos reproductivos sin cambiar de ambiente.',
    checklist: [
      'Dimensiones horizontales adecuadas con separación de barrotes de 1-1.2 cm.',
      'Ubicación a la altura de los ojos con una pared de respaldo.',
      'Centro de la jaula despejado para permitir vuelos cortos.',
      'Bandeja inferior con papel blanco absorbente limpio.',
    ],
    relatedHealth: [
      {
        title: 'Cuidado de Patas, Pico y Uñas',
        sectionId: 'patas-pico',
        description: 'Cómo las dimensiones y perchas previenen la atrofia muscular y el estrés articular.',
      },
    ],
    relatedArticles: ['perchas', 'higiene', 'juguetes', 'seguridad'],
    sources: [
      'Royal Society for the Prevention of Cruelty to Animals (RSPCA) - Budgerigar Housing Standards',
      'Clinical Avian Medicine, Vol I & II (Harrison & Harrison)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'perchas',
    slug: 'perchas',
    title: 'Perchas Ergonómicas y Maderas Naturales Seguras',
    category: 'perchas',
    shortDescription:
      'La importancia de utilizar ramas de maderas no tóxicas con diámetros variables para ejercitar los tendones flexores, desgastar uñas y evitar la pododermatitis.',
    content:
      'Los periquitos pasan prácticamente las 24 horas del día de pie sobre sus perchas. En la naturaleza se posan en ramas de eucalipto de texturas, curvas e inclinaciones diversas.\n\nLas perchas lisas y cilíndricas de plástico o madera torneada industrial ejercen una presión estática continua exactamente en los mismos puntos de la almohadilla plantar. Esto produce callosidades dolorosas, pérdida de piel e infecciones bacterianas profundas conocidas como pododermatitis (clavos plantares).',
    sections: [
      {
        heading: '1. Maderas Naturales Seguras y Aptas',
        body: 'Utiliza ramas frescas de árboles y arbustos que no hayan sido tratados con pesticidas, insecticidas ni fertilizantes químicos.',
        tips: [
          'Maderas recomendadas: Manzano, peral, olivo, sauce, eucalipto, abedul, tilo, álamo y ramas de cítricos (naranjo, limonero).',
          'Diámetros recomendados: Entre 1,2 cm y 2,5 cm, combinando zonas más gruesas y más delgadas para que los dedos del periquito no se toquen entre sí al cerrar el agarre.',
        ],
      },
      {
        heading: '2. Tratamiento y Desinfección Previa de Ramas',
        body: 'Antes de colocar cualquier rama del exterior en la jaula, lávala con agua caliente y un cepillo duro para eliminar polvo o excrementos de aves silvestres. Hornéala a 100 °C durante 30-40 minutos o déjala secar completamente al sol.',
      },
      {
        heading: '3. Elementos Peligrosos que Debes Eliminar',
        body: 'Las fundas de lija abrasiva para perchas ("lijas para afilar uñas") son extremadamente perjudiciales: desgastan y ulceran la piel de la planta del pie sin recortar las uñas de forma anatómica.',
        warnings: [
          'NUNCA uses ramas de adelfa, tejo, hiedra, laurel de jardín o maderas resinosas de coníferas no curadas (pino con resina fresca).',
        ],
      },
    ],
    tips: [
      'Coloca las perchas a diferentes alturas, asegurando que ninguna quede directamente debajo de otra para evitar que se ensucien con heces.',
      'Deja la percha más alta en una esquina tranquila como posadero favorito para dormir.',
    ],
    warnings: [
      'Retira de inmediato cualquier percha de plástico rígido liso o funda abrasiva de arena.',
    ],
    breederNotes:
      'En voladeras de cría, la renovación estacional de ramas naturales frescas estimula el picoteo de corteza rica en oligoelementos y mantiene los picos limpios.',
    checklist: [
      'Al menos 3 ramas de madera natural de grosores variables instaladas.',
      'Ninguna percha de plástico liso en la jaula.',
      'Perchas limpias y libres de restos fecales.',
      'Percha más alta ubicada en zona de descanso.',
    ],
    relatedHealth: [
      {
        title: 'Pododermatitis y Cuidado de Patas',
        sectionId: 'patas-pico',
        description: 'Aprende a identificar enrojecimiento inicial en las almohadillas plantares.',
      },
    ],
    relatedArticles: ['alojamiento', 'higiene', 'seguridad'],
    sources: [
      'Avian Medicine: Principles and Application (Ritchie, Harrison & Harrison)',
      'Association of Avian Veterinarians - Perch Safety Guidelines',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'agua',
    slug: 'agua',
    title: 'Agua, Hidratación y Hábitos de Baño',
    category: 'agua',
    shortDescription:
      'Gestión del agua de bebida fresca, prevención de biopelículas bacterianas en bebederos y pautas para el baño e hidratación del plumaje.',
    content:
      'El periquito australiano procede de hábitats áridos y posee una capacidad fisiológica muy eficiente para concentrar orina, pero necesita agua limpia, fresca y sin contaminantes accesible las 24 horas del día. Un periquito privado de agua puede deshidratarse de forma crítica en menos de 24 a 48 horas en climas cálidos.\n\nAdemás de la bebida, el contacto regular con agua mediante baños suaves es indispensable para mantener la flexibilidad de las plumas, facilitar la apertura de cañones durante la muda y eliminar el polvo de queratina natural.',
    sections: [
      {
        heading: '1. Bebederos y Calidad del Agua',
        body: 'El agua debe cambiarse a diario y el bebedero debe lavarse a fondo para eliminar la biopelícula transparente (biofilm) que se forma en las paredes plásticas donde proliferan bacterias y hongos.',
        tips: [
          'Usa agua potable del grifo o mineral de baja mineralización.',
          'Los bebederos de tubo exterior protegen mejor el agua de excrementos que los cuencos abiertos en el suelo.',
        ],
      },
      {
        heading: '2. Rutina de Baño y Placer Acuático',
        body: 'A la mayoría de los periquitos les encanta bañarse en días templados. Ofréceles una bañera poco profunda con 1 a 2 cm de agua tibia por la mañana.',
        tips: [
          'Si tu periquito tiene miedo a la bañera, coloca hojas grandes de lechuga o espinaca húmedas en un plato llano o pulveriza agua tibia muy fina hacia arriba a modo de lluvia suave.',
        ],
        warnings: [
          'NUNCA fuerces a un periquito bajo un chorro de grifo ni uses jabones, champús ni productos cosméticos.',
          'Evita bañar a las aves al final de la tarde para que no se acuesten con las plumas húmedas.',
        ],
      },
    ],
    tips: [
      'Limpia los bebederos con un cepillo fino y agua caliente antes de rellenarlos cada mañana.',
      'En verano, coloca la bañera durante un par de horas por la mañana y retírala después.',
    ],
    warnings: [
      'No dejes recipientes profundos descubiertos (como vasos, jarras o fregaderos) durante el vuelo libre: son causa frecuente de ahogamiento accidental.',
    ],
    breederNotes:
      'Durante la incubación, el baño de la hembra ayuda a regular la humedad necesaria en los huevos para que la membrana no se reseque en el momento de la eclosión.',
    checklist: [
      'Bebedero lavado y rellenado con agua fresca cada mañana.',
      'Agua libre de semillas flotantes o restos orgánicos.',
      'Oportunidad de baño ofrecida 2-3 veces por semana en días templados.',
    ],
    relatedHealth: [
      {
        title: 'Salud del Plumaje y Muda',
        sectionId: 'plumaje',
        description: 'La hidratación en el desprendimiento de vainas de queratina en nuevos cañones.',
      },
    ],
    relatedArticles: ['alimentacion', 'higiene', 'descanso'],
    sources: [
      'Veterinary Clinics of North America: Exotic Animal Practice - Avian Hydrotherapy & Hygiene',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'higiene',
    slug: 'higiene',
    title: 'Higiene, Limpieza y Desinfección de Jaula y Accesorios',
    category: 'higiene',
    shortDescription:
      'Protocolos de mantenimiento diario, semanal y mensual: desinfección con productos no tóxicos, manejo de sustratos y prevención de parásitos e infecciones.',
    content:
      'La acumulación de heces, restos de semillas y humedad en el fondo de la jaula crea el caldo de cultivo perfecto para bacterias (como *Salmonella* o *E. coli*), levaduras (*Macrorhabdus*) y parásitos como los ácaros de la cera o piojillos.\n\nUna rutina sistemática y sencilla de higiene protege la salud de tus aves y previene malos olores en la estancia.',
    sections: [
      {
        heading: '1. Rutina Diaria (5 minutos)',
        body: 'Retira el papel del fondo si está sucio, limpia el bebedero y sopla las cáscaras de los comederos. Retira restos de verduras y frutas antes de que fermenten.',
      },
      {
        heading: '2. Limpieza Semanal a Fondo',
        body: 'Retira bandejas y rejillas inferiores. Lávalas con agua caliente y jabón neutro o vinagre blanco diluido (excelente desinfectante natural y eliminador de cal y olores). Cepilla las perchas que tengan heces adheridas.',
      },
      {
        heading: '3. Desinfección Mensual de la Estructura',
        body: 'Limpia los barrotes y esquinas con un paño humedecido en solución de vinagre de manzana o productos veterinarios seguros (como F10 SC diluido). Seca todo antes de reubicar a las aves.',
        warnings: [
          'NUNCA limpies la jaula con lejía concentrada, amoníaco ni aerosoles limpiadores en presencia de las aves.',
        ],
      },
    ],
    tips: [
      'El mejor lecho para el fondo de la jaula es papel de cocina blanco absorbente sin perfumes ni tintas tóxicas.',
      'Tener un juego doble de comederos y bebederos permite rotarlos mientras el otro se seca al sol.',
    ],
    warnings: [
      'Evita las arenas aromáticas con perfumes sintéticos o sepiolitas polvorientas que dañan las vías respiratorias.',
    ],
    breederNotes:
      'En instalaciones grandes o criaderos, los desinfectantes de amonio cuaternario o F10 a dosis veterinarias aplicados tras un lavado con agua a presión previenen brotes de megabacteriosis y coccidiosis.',
    checklist: [
      'Papel de fondo cambiado a diario o en días alternos.',
      'Comederos y bebederos desinfectados semanalmente.',
      'Perchas cepilladas y secas.',
      'Sin residuos de desinfectantes fuertes en el ambiente.',
    ],
    relatedHealth: [
      {
        title: 'Prevención y Bioseguridad Aviar',
        sectionId: 'prevencion',
        description: 'La higiene constante como barrera principal contra enfermedades infecciosas.',
      },
    ],
    relatedArticles: ['alojamiento', 'agua', 'seguridad'],
    sources: [
      'BSAVA Manual of Avian Practice',
      'Avian Disease Manual (American Association of Avian Pathologists)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'enriquecimiento',
    slug: 'enriquecimiento',
    title: 'Enriquecimiento Ambiental y Estimulación Cognitiva',
    category: 'enriquecimiento',
    shortDescription:
      'Cómo estimular la mente activa y curiosa del periquito mediante técnicas de forrajeo, resolución de pequeños retos y exploración sensorial.',
    content:
      'Los periquitos australianos son aves inteligentes, curiosas y muy activas. En su hábitat natural dedican más del 70% de sus horas de vigilia a explorar, buscar semillas ocultas, interactuar con su bandada y esquivar depredadores.\n\nEn un entorno doméstico donde el alimento está siempre disponible en un cuenco estático, la falta de estímulos puede provocar aburrimiento crónico, letargo, vocalizaciones estridentes compulsivas o picaje de plumas. El enriquecimiento ambiental transforma su vida diaria en una experiencia estimulante y divertida.',
    sections: [
      {
        heading: '1. Forrajeo (Búsqueda Natural de Alimento)',
        body: 'El forrajeo consiste en presentar la comida de forma que el ave deba trabajar con su pico y patas para obtenerla, simulando su conducta silvestre.',
        tips: [
          'Envuelve semillas o panizo en paquetes pequeños de papel kraft o cartón limpio sin tintas.',
          'Coloca trozos de verdura ensartados en ramas naturales a diferentes alturas.',
          'Cubre el comedero con tiras de papel o hojas verdes para que deba apartarlas para comer.',
        ],
      },
      {
        heading: '2. Enriquecimiento Sensorial y Sonoro',
        body: 'A los periquitos les encanta la variedad de texturas y sonidos naturales. Puedes ofrecerles ramitas frescas con hojas tiernas de sauce o eucalipto para descortezar y reproducir sonidos suaves de naturaleza o cantos de aves silvestres durante el día.',
      },
    ],
    tips: [
      'Introduce los nuevos juegos de forrajeo de forma muy fácil al principio para que no se frustre.',
      'Premia los intentos de exploración con felicitaciones verbales y su premio favorito.',
    ],
    warnings: [
      'No escondas toda su ración diaria de comida en retos complejos: asegúrate de que coma siempre lo suficiente.',
    ],
    breederNotes:
      'En grupos y voladeras, los puntos de forrajeo dispersos reducen la agresividad entre machos dominantes y fomentan la cooperación social del grupo.',
    checklist: [
      'Al menos 1 elemento de forrajeo activo en la jaula.',
      'Ramas frescas con hojas para mordisquear renovadas periódicamente.',
      'Retos adaptados al nivel de curiosidad y confianza de tu ave.',
    ],
    relatedHealth: [
      {
        title: 'Salud del Plumaje y Prevención de Picaje',
        sectionId: 'plumaje',
        description: 'La estimulación mental como prevención de problemas comportamentales y picaje.',
      },
    ],
    relatedArticles: ['juguetes', 'ejercicio', 'socializacion'],
    sources: [
      'Journal of Exotic Pet Medicine - Environmental Enrichment for Captive Parrots',
      'The World Parrot Trust Enrichment Guidelines',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'juguetes',
    slug: 'juguetes',
    title: 'Juguetes Seguros, Masticación y Rotación Periódica',
    category: 'juguetes',
    shortDescription:
      'Selección de materiales no tóxicos (madera natural, cartón, fibras vegetales), qué juguetes comerciales evitar y cómo rotarlos para mantener la novedad.',
    content:
      'Los juguetes no son adornos para la jaula: son herramientas fundamentales para satisfacer la necesidad instintiva del periquito de triturar, desgastar su pico, escalar y manipular objetos con sus patas.\n\nPara que los juguetes cumplan su función, deben estar fabricados con materiales seguros y rotarse con regularidad (cada 1 o 2 semanas) para mantener vivo su interés.',
    sections: [
      {
        heading: '1. Materiales Ideales para Juguetes de Periquito',
        body: 'Los mejores juguetes son los destructibles, aquellos que el periquito puede desmenuzar con su pico sin riesgo.',
        tips: [
          'Materiales seguros: Madera de balsa, pino no tratado, mimbre natural, hojas de palma tejidas, cartón corrugado sin pegamentos tóxicos, papel blanco y cuerdas gruesas de cáñamo o yute vegetal.',
          'Campanillas de acero inoxidable (sin badajo de plomo que puedan tragarse).',
        ],
      },
      {
        heading: '2. Juguetes que Debes Evitar Rigurosamente',
        body: 'Ciertos juguetes populares en tiendas de mascotas representan graves riesgos físicos o psicológicos.',
        warnings: [
          'ESPEJOS: Causan graves desajustes psicológicos y regurgitación obsesiva hacia su propio reflejo, derivando en inflamación severa del buche (ingluvitis).',
          'PÁJAROS DE PLÁSTICO / MUÑECOS: Generan las mismas obsesiones y frustración sexual que los espejos.',
          'CUERDAS DE ALGODÓN O SINTÉTICAS CON HILOS FINOS: Al mordisquearlas, ingieren microfibras que forman madejas insolubles en el buche (impactación digestiva mortal) o atrapan dedos y patas.',
        ],
      },
    ],
    tips: [
      'No satures la jaula con más de 2 o 3 juguetes al mismo tiempo: reserva espacio para el vuelo.',
      'Guarda los juguetes retirados en una caja y cámbialos cada 15 días: ¡parecerán nuevos para ellos!',
    ],
    warnings: [
      'Revisa semanalmente si algún juguete tiene cuerdas deshilachadas o astillas punzantes y retíralo inmediatamente.',
    ],
    breederNotes:
      'En jaulas de destete de polluelos, los juguetes de mimbre y hojas de palma ayudan a desarrollar la fuerza mandibular y la coordinación óculo-manual de los jóvenes.',
    checklist: [
      '2 o 3 juguetes seguros de madera, mimbre o papel instalados.',
      'Ningún espejo ni periquito de plástico presente.',
      'Cuerdas inspeccionadas y recortadas si están deshilachadas.',
      'Rotación quincenal programada.',
    ],
    relatedHealth: [
      {
        title: 'Salud y Trastornos del Sistema Digestivo',
        sectionId: 'digestivo',
        description: 'Peligro de las ingluvitis por espejos e impactaciones de buche por fibras de tela.',
      },
    ],
    relatedArticles: ['enriquecimiento', 'alojamiento', 'seguridad'],
    sources: [
      'Association of Avian Veterinarians - Toy Safety and Selection',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'ejercicio',
    slug: 'ejercicio',
    title: 'Ejercicio Físico y Protocolo de Vuelo Libre Supervisado',
    category: 'ejercicio',
    shortDescription:
      'El vuelo diario como motor cardiovascular y pulmonar: preparación exhaustiva de la habitación, prevención de colisiones y cómo regresar a la jaula con calma.',
    content:
      'El vuelo es la actividad biológica central de un ave. Estimula el sistema cardiovascular, expande los sacos aéreos, mantiene el tono de los grandes músculos pectorales y quema el exceso de calorías evitando la lipidosis hepática (hígado graso) y los lipomas.\n\nPermitir que un periquito vuele libremente en una estancia segura de la casa durante varias horas al día es uno de los mayores regalos para su salud y bienestar emocional.',
    sections: [
      {
        heading: '1. "Antes de Permitir el Vuelo Libre": Preparación del Entorno',
        body: 'Una habitación estándar presenta trampas invisibles para un ave en vuelo rápido. Antes de abrir la puerta de la jaula, realiza una revisión exhaustiva:',
        tips: [
          'Ventanas y puertas completamente cerradas.',
          'Cortinas o estores bajados sobre todos los cristales y espejos: los periquitos no perciben el cristal y pueden colisionar a gran velocidad sufriendo traumatismos craneales fatales.',
          'Ventiladores de techo y sobremesa totalmente apagados.',
          'Retirar o tapar recipientes con agua (vasos, jarras, cubos, inodoros abiertos).',
          'Otras mascotas (perros, gatos, hurones) fuera de la habitación con puerta cerrada.',
          'Esconder o proteger cables eléctricos y retirar plantas tóxicas.',
        ],
      },
      {
        heading: '2. Primeros Vuelos y Regreso Pacífico a la Jaula',
        body: 'Durante los primeros vuelos en una habitación nueva, el ave puede desorientarse y aterrizar en lugares extraños. Mantén la calma, no corras tras él ni grites.',
        tips: [
          'Coloca la jaula en un lugar visible y deja comida apetitosa (como panizo) en su interior.',
          'Si no regresa solo, puedes ofrecerle tu dedo o una percha de madera larga para que suba y transportarlo con suavidad a la jaula.',
        ],
        warnings: [
          'NUNCA persigas a un periquito con toallas o manos para meterlo a la jaula a la fuerza: destruirá su confianza y puede provocarle un shock por pánico o taquicardia.',
        ],
      },
    ],
    tips: [
      'Instala un parque de juegos o percha exterior encima del techo de la jaula como punto de aterrizaje natural.',
      'Planifica el vuelo libre en horarios diurnos con luz natural.',
    ],
    warnings: [
      'NUNCA recortes las plumas de vuelo (remiges) de tu periquito. El recorte de alas causa depresión, atrofia muscular, caídas graves con fracturas de quilla y trauma psicológico severo.',
    ],
    breederNotes:
      'En aviarios, las voladeras longitudinales de más de 2 metros permiten a las aves jóvenes desarrollar una musculatura pectoral robusta y una excelente resistencia inmune.',
    checklist: [
      'Ventanas y cristales cubiertos con cortinas.',
      'Ventiladores apagados y fuentes de agua tapadas.',
      'Otras mascotas aseguradas en otra estancia.',
      'Puerta de jaula abierta con posadero exterior listo.',
    ],
    relatedHealth: [
      {
        title: 'Salud del Sistema Respiratorio',
        sectionId: 'respiratorio',
        description: 'La ventilación de los 9 sacos aéreos durante el vuelo activo.',
      },
    ],
    relatedArticles: ['seguridad', 'manejo', 'enriquecimiento'],
    sources: [
      'Avian Welfare Coalition - Guidelines for Safe Free Flight',
      'Manual of Parrot Behavior (Luescher)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'manejo',
    slug: 'manejo',
    title: 'Manejo Respetuoso, Lectura Corporal y Amansamiento',
    category: 'manejo',
    shortDescription:
      'Cómo ganar la confianza de tu periquito sin forzarlo: comprensión del lenguaje corporal, refuerzo positivo con panizo y técnicas para evitar el estrés y las mordeduras.',
    content:
      'El periquito es un animal presa por naturaleza. Su primera reacción instintiva ante un objeto grande que se aproxima rápidamente (como una mano humana) es huir para salvar su vida. Forzar el contacto físico, agarrarlo en la jaula o acorralarlo genera terror y rompe cualquier vínculo afectivo.\n\nEl amansamiento exitoso se basa en la paciencia, el respeto de sus tiempos, la lectura precisa de su lenguaje corporal y el refuerzo positivo mediante recompensas sabrosas.',
    sections: [
      {
        heading: '1. El Lenguaje Corporal del Periquito',
        body: 'Aprender a interpretar sus posturas evita malentendidos y momentos de tensión.',
        tips: [
          'Tranquilo y relajado: Plumaje ligeramente esponjado pero suave, una patita encogida en el pecho, crujido suave de pico.',
          'Alerta o asustado: Cuerpo muy estilizado y delgado, plumas pegadas al cuerpo, ojos muy abiertos fijados en la mano, respiración acelerada, cabeza erguida.',
          'Molesto / Advertencia: Pico abierto preparado para picotear, chillido seco, postura defensiva.',
        ],
      },
      {
        heading: '2. Proceso Gradual de Confianza Paso a Paso',
        body: 'Dedica 10 a 15 minutos diarios a hablarle con voz suave cerca de la jaula sin meter la mano. Cuando esté cómodo con tu presencia:',
        tips: [
          'Paso 1: Ofrece una espiga larga de panizo a través de los barrotes con la mano quieta.',
          'Paso 2: Introduce la mano despacio sujetando el panizo en el extremo, dejando que el periquito decida acercarse por voluntad propia.',
          'Paso 3: Coloca tu dedo índice como puente entre el periquito y el panizo para que deba posar una o ambas patas en tu dedo para comer.',
        ],
      },
    ],
    tips: [
      'Haz siempre movimientos lentos y previsibles.',
      'Habla con tono suave y calmado cuando interactúes con él.',
      'Finaliza cada sesión de interacción de forma positiva con un pequeño premio.',
    ],
    warnings: [
      'NUNCA metas la mano para agarrar al periquito dentro de su jaula: la jaula debe ser su espacio sagrado de seguridad.',
      'Si el periquito te pica, no retires la mano con un movimiento brusco ni grites: mantén la calma y retrocede despacio.',
    ],
    breederNotes:
      'El manejo suave de polluelos en el nido durante las revisiones diarias crea aves adultas naturalmente dóciles y desprovistas de miedo a los humanos sin necesidad de empapillado artificial.',
    checklist: [
      'Sesiones cortas y relajadas de 10-15 minutos.',
      'Uso de panizo como premio exclusivo de confianza.',
      'Respeto de sus señales de alerta sin forzar aproximaciones.',
    ],
    relatedHealth: [
      {
        title: 'Signos de Alerta Temprana',
        sectionId: 'signos-de-alerta',
        description: 'Diferenciar el miedo temporal del dolor o decaimiento patológico.',
      },
    ],
    relatedArticles: ['socializacion', 'ejercicio', 'enriquecimiento'],
    sources: [
      'Applied Animal Behaviour Science - Parrot Socialization and Training',
      'The Parrot Problem Solver (Doane)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'entorno',
    slug: 'entorno',
    title: 'Temperatura, Humedad, Corrientes y Climatización',
    category: 'entorno',
    shortDescription:
      'Factores microclimáticos esenciales: rango de confort térmico, protección frente a corrientes de aire directas, ventilación saludable y regulación de humedad.',
    content:
      'Los periquitos son animales adaptables originarios del clima continental australiano, pero su pequeño tamaño corporal (30 a 40 gramos) los hace muy sensibles a los cambios térmicos bruscos y, sobre todo, a las corrientes de aire directas.\n\nUn ambiente interior estable, bien ventilado y con temperatura moderada es clave para evitar infecciones respiratorias y enfriamientos.',
    sections: [
      {
        heading: '1. Rango Térmico de Confort',
        body: 'El rango ideal de temperatura para periquitos aclimatados se sitúa entre 18 °C y 26 °C. Pueden tolerar rangos más amplios si el cambio es muy paulatino, pero sufren gravemente ante descensos o aumentos bruscos de temperatura en cuestión de minutos u horas.',
        tips: [
          'Signos de calor excesivo: Plumas pegadas al cuerpo, alas separadas del tronco en forma de jarra y respiración rápida con el pico entreabierto.',
          'Signos de frío: Cuerpo en forma de bola esponjada durante todo el día para atrapar aire caliente entre las plumas, temblores e inactividad.',
        ],
      },
      {
        heading: '2. El Peligro Silencioso de las Corrientes de Aire',
        body: 'Una corriente de aire directa (por ejemplo, entre una ventana y una puerta abiertas) despoja rápidamente al periquito del colchón de aire templado que retienen sus plumas, bajando su temperatura corporal e inmunodeprimiéndolo.',
        warnings: [
          'NUNCA coloques la jaula en línea directa de tiro de aire acondicionado ni de ventiladores.',
        ],
      },
      {
        heading: '3. Humedad Relativa del Aire',
        body: 'La humedad ideal se sitúa entre el 45% y el 65%. Los ambientes excesivamente secos por calefacción en invierno resecan las mucosas respiratorias y la piel.',
      },
    ],
    tips: [
      'En invierno, mantén la jaula alejada de radiadores directos o estufas.',
      'En verano, facilita baños frecuentes y asegura sombra permanente.',
    ],
    warnings: [
      'No dejes a los periquitos en balcones o terrazas sin supervisión o sin protección contra el viento, el sol abrasador o posibles rapaces.',
    ],
    breederNotes:
      'En salas de cría, una humedad del 55-60% con buena renovación de aire sin corrientes previene el desecamiento de los embriones en el interior de los huevos durante los últimos días de incubación.',
    checklist: [
      'Jaula ubicada fuera de corrientes de aire entre puertas o ventanas.',
      'Temperatura ambiente estable entre 18°C y 26°C.',
      'Sombra disponible en todo momento si entra luz solar.',
    ],
    relatedHealth: [
      {
        title: 'Salud del Sistema Respiratorio',
        sectionId: 'respiratorio',
        description: 'Vulnerabilidad del aparato respiratorio aviar ante cambios bruscos y corrientes.',
      },
    ],
    relatedArticles: ['alojamiento', 'descanso', 'seguridad'],
    sources: [
      'BSAVA Manual of Avian Practice',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'descanso',
    slug: 'descanso',
    title: 'Luz Natural, Radiación UVB, Ciclo Circadiano y Sueño',
    category: 'descanso',
    shortDescription:
      'La necesidad biológica de 10 a 12 horas de oscuridad ininterrumpida para el equilibrio hormonal, la síntesis de vitamina D3 con luz natural y la prevención de terrores nocturnos.',
    content:
      'En su hábitat australiano, próximo al trópico, el periquito experimenta ciclos diarios regulares con aproximadamente 10 a 12 horas de luz y 10 a 12 horas de oscuridad. Su sistema endocrino y hormonal está estrechamente regulado por la duración de los fotoperiodos.\n\nLa privación de sueño por iluminación artificial nocturna, televisores encendidos o ruido genera estrés crónico, hipersexualidad/celo continuo y picaje de plumas.',
    sections: [
      {
        heading: '1. El Ciclo de Sueño (10-12 Horas de Oscuridad)',
        body: 'El periquito necesita un descanso continuo y libre de perturbaciones para reparar su organismo.',
        tips: [
          'Establece una hora fija para acostar y despertar a tus aves cada día.',
          'Cubre la jaula al anochecer con una sábana o tela oscura de algodón 100% transpirable que bloquee la luz sin impedir la circulación de aire.',
        ],
      },
      {
        heading: '2. Luz Solar Natural y Síntesis de Vitamina D3',
        body: 'La luz solar directa (sin filtrar por cristales de ventana) es necesaria para que las aves sinteticen vitamina D3 a través de su glándula uropígea y fijen el calcio en los huesos.',
        tips: [
          'Los cristales de ventana bloquean más del 95% de la radiación ultravioleta UVB beneficiosa.',
          'Si no es posible el acceso a luz natural segura, pueden emplearse bombillas o tubos específicos de espectro aviar con emisión UVB certificada.',
        ],
      },
      {
        heading: '3. Prevención de Terrores Nocturnos (Night Frights)',
        body: 'Los periquitos tienen visión nocturna limitada. Una sombra repentina, un ruido o el paso de un insecto pueden desatar un ataque de pánico donde aletean descontroladamente contra los barrotes pudiendo lesionarse.',
        tips: [
          'Deja una pequeña luz tenue de noche (luz piloto de 1-2W) en la habitación para que puedan reorientarse si se despiertan asustados.',
        ],
      },
    ],
    tips: [
      'Mantén silencio y oscuridad constante en la habitación donde duermen.',
      'Si ocurre un terror nocturno, enciende una luz suave, háblales con calma y revisa que no haya plumas de sangre rotas.',
    ],
    warnings: [
      'No dejes la jaula expuesta a la televisión o pantallas encendidas hasta altas horas de la noche.',
    ],
    breederNotes:
      'El control del fotoperiodo es una herramienta clave de manejo zootécnico: aumentar gradualmente las horas de luz simula la primavera e induce la cría, mientras que fotoperiodos estables de 10h permiten el descanso ovárico.',
    checklist: [
      '10 a 12 horas de oscuridad ininterrumpida cada noche.',
      'Tela transpirable de algodón para cubrir la jaula.',
      'Luz nocturna de cortesía tenue para evitar terrores nocturnos.',
      'Acceso a luz natural indirecta o lámpara de espectro aviar.',
    ],
    relatedHealth: [
      {
        title: 'Nutrición, Minerales y Calcio',
        sectionId: 'nutricion',
        description: 'La relación entre la vitamina D3, el fósforo y la absorción de calcio.',
      },
    ],
    relatedArticles: ['entorno', 'alojamiento', 'salud'],
    sources: [
      'Zoo Biology - Photoperiod and Circadian Rhythms in Psittacines',
      'Avian Physiology (Sturkie)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'socializacion',
    slug: 'socializacion',
    title: 'Socialización, Compañía y Dinámica de Grupo',
    category: 'socializacion',
    shortDescription:
      'La naturaleza gregaria del periquito: por qué prosperan en pareja o pequeña bandada, comunicación vocal y respeto a la individualidad de cada ave.',
    content:
      'En la naturaleza, un periquito solitario no existe: viven en bandadas que van desde decenas hasta miles de individuos. Están programados biológicamente para interactuar, acicalarse mutuamente (allopreening), cantar a dúo y compartir su día a día con congéneres de su misma especie.\n\nAunque un periquito único puede apegarse a su dueño humano, este jamás podrá reemplazar la presencia, el lenguaje corporal y la compañía continua que le brinda otro periquito.',
    sections: [
      {
        heading: '1. Vida en Pareja o Pequeño Grupo',
        body: 'Mantener al menos una pareja de periquitos es la mejor garantía para su equilibrio psicológico y bienestar a largo plazo.',
        tips: [
          'Combinaciones ideales: Macho y hembra (la más natural) o dos machos (suelen convivir con gran armonía y juegos).',
          'Dos hembras pueden convivir perfectamente si la jaula es espaciosa y no hay nidos presentes que despierten territorialidad.',
        ],
      },
      {
        heading: '2. Comunicación y Repertorio Vocal',
        body: 'Los trinos suaves, gorjeos y cantos alegres indican tranquilidad y cohesión social. Los graznidos fuertes y secos son llamadas de alarma o advertencias territoriales menores.',
      },
    ],
    tips: [
      'Si tienes un único periquito, dedícale varias horas de interacción directa y considera seriamente incorporar un compañero.',
      'Facilita comederos duplicados para evitar disputas por la comida.',
    ],
    warnings: [
      'No coloques nidos dentro de la jaula en convivencia común: los nidos despiertan territorialidad agresiva en las hembras.',
    ],
    breederNotes:
      'En voladeras comunitarias, mantener un ratio equilibrado de machos y hembras con perchas abundantes previene roces y fomenta un grupo estable y dinámico.',
    checklist: [
      'Mantenimiento preferente en pareja o grupo.',
      'Espacio suficiente con comederos y perchas duplicadas.',
      'Sin nidos presentes en jaulas comunitarias sin plan de cría.',
    ],
    relatedHealth: [
      {
        title: 'Salud del Plumaje y Comportamiento',
        sectionId: 'plumaje',
        description: 'El acicalamiento mutuo y la prevención del estrés social.',
      },
    ],
    relatedArticles: ['nueva-ave', 'manejo', 'enriquecimiento'],
    sources: [
      'Behavioural Processes - Social Organization and Communication in Budgerigars',
      'The Budgerigar in Captivity (Watkins)',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'transporte',
    slug: 'transporte',
    title: 'Transporte Seguro y Visitas al Veterinario',
    category: 'transporte',
    shortDescription:
      'Cómo transportar a un periquito sin riesgos: elección de transportines pequeños, control térmico, fijación del transportín en el coche y reducción del estrés.',
    content:
      'Trasladar a un periquito fuera de casa (ya sea para una consulta veterinaria, mudanza o viaje) genera estrés por la novedad de ruidos, movimientos y estímulos visuales desconocidos.\n\nUn transporte planificado con el equipo adecuado protege al ave de golpes, enfriamientos y fugas accidentales.',
    sections: [
      {
        heading: '1. El Transportín Ideal',
        body: 'A diferencia de la jaula habitual, el transportín de viaje debe ser pequeño y compacto (unos 20 a 25 cm de largo).',
        tips: [
          'En un espacio pequeño, el ave no puede iniciar vuelos de pánico ni coger velocidad si se asusta, evitando fracturas de alas o traumatismos.',
          'Coloca una percha baja bien fijada y papel blanco absorbente en el suelo.',
          'Cubre el transportín con una tela o toalla ligera y transpirable para bloquear estímulos visuales estresantes.',
        ],
      },
      {
        heading: '2. Seguridad en el Vehículo y Clima',
        body: 'Fija el transportín en el asiento del coche con el cinturón de seguridad o colócalo en el suelo entre los asientos para que no se desplace en una frenada.',
        warnings: [
          'NUNCA coloques el transportín en el maletero ni en la trayectoria directa de las rejillas de aire acondicionado.',
          'Jamás dejes al ave sola dentro de un coche cerrado al sol: la temperatura en el interior puede alcanzar niveles mortales en pocos minutos.',
        ],
      },
      {
        heading: '3. Preparación para la Cita Veterinaria',
        body: 'No limpies a fondo el fondo del transportín justo antes de entrar a consulta: las heces frescas recién expulsadas sobre papel blanco aportan información diagnóstica valiosísima para el veterinario.',
        warnings: [
          'NUNCA administres sedantes caseros ni medicamentos antes del viaje sin prescripción explícita de un veterinario especialista.',
        ],
      },
    ],
    tips: [
      'Lleva contigo en un bote una pequeña muestra de su mixtura habitual y fotos de su jaula si es la primera visita.',
      'Mantén la calma: las aves perciben el estrés y la tensión de sus cuidadores.',
    ],
    warnings: [
      'Revisa dos veces el cierre de las puertas del transportín antes de salir de casa.',
    ],
    breederNotes:
      'En traslados de ejemplares para exposiciones o concursos, los transportines individuales homologados con ventilación lateral aseguran que el plumaje permanezca impecable.',
    checklist: [
      'Transportín pequeño y seguro con percha baja.',
      'Papel blanco en el fondo para examen veterinario de heces.',
      'Tela transpirable para cubrir el transportín durante el trayecto.',
      'Transportín asegurado con cinturón en el coche.',
    ],
    relatedHealth: [
      {
        title: '¿Cuándo y Cómo Acudir al Veterinario?',
        sectionId: 'veterinario',
        description: 'Protocolos de consulta urgente y toma de muestras.',
      },
    ],
    relatedArticles: ['nueva-ave', 'seguridad', 'manejo'],
    sources: [
      'AAV - Safe Avian Patient Transport Protocols',
      'BSAVA Manual of Avian Practice',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'nueva-ave',
    slug: 'nueva-ave',
    title: 'Llegada de una Nueva Ave y Protocolo de Cuarentena',
    category: 'nueva_ave',
    shortDescription:
      'Cómo incorporar a un nuevo compañero con total seguridad: protocolo de aislamiento preventivo de 30 días, aclimatación y presentación gradual entre jaulas.',
    content:
      'Incorporar un nuevo periquito a casa es un momento emocionante, pero requiere orden y prudencia. Juntar directamente a un ave recién llegada con tus periquitos residentes es el error más frecuente y peligroso: expone a todo el grupo a patógenos latentes (como megabacterias, clamidia o ácaros) y puede desencadenar peleas territoriales violentas.\n\nUn protocolo de cuarentena e integración paulatina garantiza la seguridad sanitaria y una amistad armoniosa.',
    sections: [
      {
        heading: '1. La Regla de Oro: Cuarentena de 30 Días',
        body: 'El nuevo periquito debe alojarse en una jaula individual ubicada en una habitación separada durante un mínimo de 30 días.',
        tips: [
          'El estrés del cambio de hogar deprime temporalmente las defensas, permitiendo que patógenos ocultos den la cara entre los días 10 y 25.',
          'Atiende y limpia primero la jaula de tus aves residentes y, al final, la del ave nueva, lavándote bien las manos entre ambas.',
          'Es el momento ideal para realizar una revisión veterinaria con análisis coprológico de heces.',
        ],
      },
      {
        heading: '2. Presentación Gradual y Adaptación Visual',
        body: 'Tras superar la cuarentena con éxito:',
        tips: [
          'Día 1 a 4: Coloca ambas jaulas en la misma habitación con 1 metro de distancia para que se vean, escuchen y comuniquen mediante trinos.',
          'Día 5 a 7: Junta las jaulas pegadas barrote con barrote para que interactúen con seguridad a través de la rejilla.',
          'Día 8 en adelante: Permite un primer encuentro en territorio neutral durante un vuelo libre supervisado en la habitación.',
        ],
      },
      {
        heading: '3. Unión Definitiva en la Misma Jaula',
        body: 'Antes de alojarlos juntos en la jaula permanente, reorganiza las perchas y comederos para romper la territorialidad previa de los residentes.',
        warnings: [
          'Supervisa las primeras horas. Pequeños toques de pico son normales; si hay persecución agresiva continua o caídas al suelo peleando, sepáralos temporalmente.',
        ],
      },
    ],
    tips: [
      'Coloca dos comederos y bebederos separados en la jaula compartida para evitar disputas.',
      'Asegúrate de que la jaula definitiva sea suficientemente amplia para el número total de aves.',
    ],
    warnings: [
      'NUNCA juntes aves sin haber completado el periodo de aislamiento preventivo.',
    ],
    breederNotes:
      'En aviarios deportivos, las nuevas incorporaciones pasan por cuarentena estricta con desparasitación interna y externa pautada y pruebas PCR de clamidiosis y circovirus (PBFD) antes de entrar a las salas de cría.',
    checklist: [
      'Jaula de cuarentena individual en habitación separada.',
      'Observación diaria de apetito y heces durante 30 días.',
      'Presentación visual gradual de jaula a jaula.',
      'Reorganización de la jaula definitiva antes de la unión.',
    ],
    relatedHealth: [
      {
        title: 'Guía de Prevención y Bioseguridad Aviar',
        sectionId: 'prevencion',
        description: 'La cuarentena como pilar indiscutible de la bioseguridad zootécnica.',
      },
    ],
    relatedArticles: ['socializacion', 'alojamiento', 'higiene'],
    sources: [
      'Association of Avian Veterinarians - Quarantine Protocols for Companion Birds',
      'BSAVA Manual of Avian Practice',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'seguridad',
    slug: 'seguridad',
    title: 'Seguridad en el Hogar y Prevención de Accidentes',
    category: 'seguridad',
    shortDescription:
      'Guía exhaustiva de peligros domésticos: ventanas transparentes, ventiladores, recipientes con agua, cables, plantas de interior y convivencia con otras mascotas.',
    content:
      'Un hogar humano está diseñado para personas, no para aves de 35 gramos con vuelo rápido e instinto explorador permanente. La gran mayoría de los accidentes fatales en periquitos domésticos (colisiones contra cristales, caídas en recipientes con agua, aplastamientos o ataques de otras mascotas) son 100% prevenibles con anticipación y medidas de seguridad sencillas.',
    sections: [
      {
        heading: '1. Cristales, Ventanas y Espejos',
        body: 'Las aves no comprenden el concepto de cristal transparente ni de espejo reflectante. En un vuelo asustado, pueden impactar a 30-40 km/h contra una ventana sufriendo fractura de cráneo o de pico.',
        tips: [
          'Baja siempre las cortinas, visillos o estores antes de abrir la jaula.',
          'Coloca vinilos decorativos o pegatinas en cristales grandes.',
        ],
      },
      {
        heading: '2. Trampas de Agua y Ahogamiento',
        body: 'Un periquito no puede impulsarse ni salir si cae en un recipiente de paredes verticales con agua.',
        warnings: [
          'Mantén siempre cerrada la tapa del inodoro, vacía los fregaderos y no dejes vasos altos con agua, cafeteras o jarras destapadas.',
        ],
      },
      {
        heading: '3. Convivencia con Perros, Gatos y Otras Mascotas',
        body: 'Incluso el perro o gato más dócil y educado conserva su instinto cazador ante el aleteo súbito de un ave pequeña. Además, la saliva de los mamíferos (especialmente felinos) contiene la bacteria *Pasteurella multocida*, que resulta mortal para un periquito en cuestión de horas ante un mínimo rasguño.',
        warnings: [
          'NUNCA permitas el vuelo libre con perros o gatos en la misma estancia.',
        ],
      },
    ],
    tips: [
      'Revisa el suelo y los cojines del sofá antes de sentarte si el periquito está suelto.',
      'Cubre los huecos estrechos detrás de armarios o electrodomésticos.',
    ],
    warnings: [
      'Apaga siempre los ventiladores de techo antes de abrir la jaula.',
    ],
    breederNotes:
      'En instalaciones zootécnicas, las puertas dobles con vestíbulo de seguridad (esclusa) evitan escapes accidentales al exterior al entrar o salir de las voladeras.',
    checklist: [
      'Cortinas corridas en todas las ventanas y espejos cubiertos.',
      'Ventiladores apagados y fuentes de agua tapadas.',
      'Otras mascotas en otra habitación con puerta cerrada.',
      'Cables eléctricos y plantas tóxicas fuera de su alcance.',
    ],
    relatedHealth: [
      {
        title: 'Signos de Alerta Temprana y Traumatismos',
        sectionId: 'signos-de-alerta',
        description: 'Cómo actuar ante un golpe o traumatismo craneal.',
      },
    ],
    relatedArticles: ['seguridad-aire', 'ejercicio', 'alojamiento'],
    sources: [
      'Avian Welfare Coalition - Household Safety Hazard Checklist',
    ],
    verificationStatus: 'verified',
  },
  {
    id: 'seguridad-aire',
    slug: 'seguridad-aire',
    title: 'Calidad del Aire, Humos y Toxinas Volátiles',
    category: 'seguridad_aire',
    shortDescription:
      'La extrema sensibilidad del sistema respiratorio aviar: peligro mortal del teflón/PTFE, humo de tabaco, ambientadores, aerosoles y cómo proteger sus sacos aéreos.',
    content:
      'El sistema respiratorio de las aves es el más eficiente de todos los vertebrados, pero precisamente esa asombrosa capacidad de absorción de oxígeno las convierte en víctimas instantáneas de cualquier gas, humo o químico volátil presente en el aire.\n\nA diferencia de los mamíferos, el aire pasa de forma unidireccional por sus pulmones y nueve sacos aéreos, absorbiendo toxinas microscópicas directamente al torrente sanguíneo en segundos.',
    sections: [
      {
        heading: '1. El Peligro Mortal del PTFE / Teflón (Politetrafluoroetileno)',
        body: 'Cuando las sartenes antiadherentes, planchas de ropa, gofreras o freidoras de aire con recubrimiento de teflón se calientan a más de 240 °C (o se dejan vacías al fuego), liberan gases fluorados incoloros e inodoros para los humanos pero letales en minutos para cualquier ave.',
        warnings: [
          'La intoxicación por teflón produce hemorragia pulmonar fulminante y asfixia sin tiempo para tratamiento. La jaula JAMÁS debe estar en la cocina.',
        ],
      },
      {
        heading: '2. Humo de Tabaco, Vapeo y Monóxido de Carbono',
        body: 'El humo de cigarrillos, puros o cigarrillos electrónicos impregna el plumaje de nicotina (que ingieren al acicalarse) y provoca sinusitis crónica, conjuntivitis y asma aviar.',
      },
      {
        heading: '3. Ambientadores, Velas Aromáticas e Insecticidas',
        body: 'Los difusores de varillas, velas con parafina, inciensos y aerosoles insecticidas contienen compuestos orgánicos volátiles (COVs) altamente irritantes y tóxicos.',
        tips: [
          'Ventila las habitaciones abriendo ventanas protegidas con mosquiteras.',
          'Usa ventilación natural y métodos mecánicos de limpieza en lugar de perfumes químicos.',
        ],
      },
    ],
    tips: [
      'Si se cocina o pinta en casa, traslada la jaula a la habitación más lejana con puerta cerrada y ventana ventilada.',
      'Utiliza sartenes de acero inoxidable, hierro fundido o cerámica sin PTFE.',
    ],
    warnings: [
      'NUNCA uses insecticidas en spray en la misma casa donde vivan aves.',
    ],
    breederNotes:
      'En aviarios interiores cerrados, la instalación de extractores de aire con filtros HEPA y temporizadores asegura una tasa de renovación constante sin corrientes de aire.',
    checklist: [
      'Jaula ubicada fuera de la cocina.',
      'Hogar libre de ambientadores químicos, velas perfumadas e incienso.',
      'Prohibido fumar o vapear en la estancia de las aves.',
      'Sartenes de cocina libres de recubrimientos de teflón sobrecalentados.',
    ],
    relatedHealth: [
      {
        title: 'Salud del Sistema Respiratorio',
        sectionId: 'respiratorio',
        description: 'Fisiología de los 9 sacos aéreos y susceptibilidad a toxinas gaseosas.',
      },
    ],
    relatedArticles: ['seguridad', 'entorno', 'alojamiento'],
    sources: [
      'AAV - Inhalation Toxicoses in Birds: Teflon and Household Hazards',
      'Veterinary Toxicology (Gupta)',
    ],
    verificationStatus: 'verified',
  },
];

import { NUTRITION_FOOD_ITEMS } from './nutrition';

export const FOOD_ITEMS_DATA: FoodItem[] = NUTRITION_FOOD_ITEMS;

export const SAFETY_ITEMS_DATA: SafetyItem[] = [
  {
    id: 'ptfe-teflon',
    name: 'Vapores de Teflón / PTFE sobrecalentado',
    category: 'chemicals',
    description: 'Sartenes antiadherentes, freidoras de aire, planchas de ropa y aparatos de calefacción con politetrafluoroetileno que liberan gases fluorados incoloros al calentarse.',
    riskLevel: 'critical',
    prevention: 'Nunca ubicar la jaula en la cocina ni usar sartenes de teflón sobrecalentadas en casas con aves. Usar sartenes de acero inoxidable o cerámica.',
    emergencyAction: 'Trasladar de inmediato al periquito a una habitación ventilada con aire puro y acudir con oxígeno de urgencia a un veterinario de exóticos.',
    sources: ['Association of Avian Veterinarians', 'Veterinary Clinics of North America - Exotic Animal Practice'],
    verificationStatus: 'verified',
  },
  {
    id: 'ventanas-cristales-espejos',
    name: 'Ventanas transparentes y espejos descubiertos',
    category: 'household',
    description: 'Superficies reflectantes o transparentes invisibles para el ave en vuelo que provocan colisiones a gran velocidad con traumatismos craneales y fracturas de pico o quilla.',
    riskLevel: 'high',
    prevention: 'Bajar siempre cortinas, visillos o estores antes de permitir el vuelo libre. Colocar vinilos visibles.',
    emergencyAction: 'Si ocurre una colisión, mantener al ave en una caja oscura y tibia sin manipularla bruscamente y acudir a urgencias veterinarias.',
    sources: ['Avian Welfare Coalition - Flight Safety'],
    verificationStatus: 'verified',
  },
  {
    id: 'ventiladores-techo',
    name: 'Ventiladores de techo y sobremesa',
    category: 'equipment',
    description: 'Aspas en movimiento giratorio a alta velocidad que provocan amputaciones, traumatismos letales y cortes profundos instantáneos al volar.',
    riskLevel: 'critical',
    prevention: 'Apagar siempre los ventiladores y verificar que las aspas estén completamente inmóviles antes de abrir la puerta de la jaula.',
    sources: ['RSPCA Companion Bird Safety Guidelines'],
    verificationStatus: 'verified',
  },
  {
    id: 'recipientes-agua-abiertos',
    name: 'Recipientes de agua descubiertos (Inodoros, vasos, fregaderos)',
    category: 'household',
    description: 'Vasos altos, jarras, ollas con agua o inodoros abiertos donde el periquito cae atraído por el agua o por accidente y no puede trepar por las paredes lisas, muriendo por ahogamiento.',
    riskLevel: 'critical',
    prevention: 'Bajar siempre la tapa del inodoro, vaciar fregaderos y tapar vasos o jarras antes de soltar al ave.',
    sources: ['BSAVA Manual of Avian Practice'],
    verificationStatus: 'verified',
  },
  {
    id: 'plantas-toxicas',
    name: 'Plantas de interior tóxicas comunes',
    category: 'plants',
    description: 'Especies ornamentales como Dieffenbachia, Filodendro, Flor de Pascua (Poinsettia), Potos (Epipremnum), Azalea, Lirio, Hiedra y Adelfa que contienen oxalatos insolubles o alcaloides tóxicos.',
    riskLevel: 'high',
    prevention: 'Retirar estas plantas de la habitación de vuelo libre. Sustituirlas por plantas seguras como cintas (Chlorophytum comosum) o albahaca.',
    sources: ['Pet Poison Helpline - Avian Toxicity Data', 'Veterinary Clinics: Exotic Practice'],
    verificationStatus: 'verified',
  },
  {
    id: 'humo-tabaco-aerosoles',
    name: 'Humo de tabaco, vapeo, ambientadores e insecticidas',
    category: 'chemicals',
    description: 'Aerosoles de limpieza, velas aromáticas de parafina, ambientadores de varillas, inciensos y humo de cigarrillo que dañan irreversiblemente los sacos aéreos aviares.',
    riskLevel: 'high',
    prevention: 'Hogar 100% libre de humo e insecticidas en spray. Ventilación natural con ventanas protegidas.',
    sources: ['AAV Inhalation Toxicoses Review'],
    verificationStatus: 'verified',
  },
  {
    id: 'perros-gatos-mascotas',
    name: 'Convivencia con gatos, perros y hurones',
    category: 'household',
    description: 'Ataque predatorio instintivo ante movimientos rápidos. La saliva de mamíferos porta Pasteurella multocida, bacteria que causa septicemia mortal en aves ante una mínima herida.',
    riskLevel: 'critical',
    prevention: 'Separar físicamente en habitaciones distintas con puerta cerrada durante los vuelos.',
    sources: ['Clinical Avian Medicine (Harrison & Harrison)'],
    verificationStatus: 'verified',
  },
  {
    id: 'cables-electricos',
    name: 'Cables eléctricos al alcance',
    category: 'household',
    description: 'Cables que el periquito mordisquea con su pico afilado, sufriendo quemaduras bucales severas o electrocución.',
    riskLevel: 'high',
    prevention: 'Ocultar cables en canaletas plásticas o cubrecables protectores.',
    sources: ['RSPCA Safety Standards'],
    verificationStatus: 'verified',
  },
  {
    id: 'espejos-en-jaula',
    name: 'Espejos y muñecos falsos permanentes',
    category: 'equipment',
    description: 'Accesorios que provocan obsesión patológica, regurgitación continua hacia su propio reflejo e inflamación grave del buche (ingluvitis) y frustración sexual.',
    riskLevel: 'medium',
    prevention: 'No colocar nunca espejos dentro de la jaula. Fomentar la interacción con otro periquito real.',
    sources: ['Association of Avian Veterinarians Behavioral Guidelines'],
    verificationStatus: 'verified',
  },
  {
    id: 'lijas-abrasivas-perchas',
    name: 'Fundas de lija abrasiva para perchas',
    category: 'equipment',
    description: 'Fundas de papel de lija que erosionan y ulceran la piel de la almohadilla plantar causando dolorosas infecciones (pododermatitis).',
    riskLevel: 'medium',
    prevention: 'Sustituir por ramas de madera natural de grosores variables.',
    sources: ['BSAVA Manual of Avian Practice'],
    verificationStatus: 'verified',
  },
];

export const CARE_CHECKLISTS_DATA: CareChecklist[] = [
  {
    id: 'checklist-diario',
    title: 'Checklist Diario de Bienestar y Salud (5 minutos)',
    description: 'Tareas rápidas y sistemáticas para mantener a tus periquitos en óptimas condiciones cada día.',
    frequency: 'daily',
    items: [
      {
        id: 'd-1',
        text: 'Agua limpia y bebedero lavado',
        details: 'Tirar el agua del día anterior, enjuagar el bebedero y rellenar con agua fresca a temperatura ambiente.',
      },
      {
        id: 'd-2',
        text: 'Soplar comederos y comprobar semillas',
        details: 'Soplar suavemente para retirar las cascarillas vacías de la superficie y verificar que queda grano real.',
      },
      {
        id: 'd-3',
        text: 'Ración de vegetales frescos lavados',
        details: 'Colocar hojas verdes (espinaca, brócoli, canónigos) lavadas y secas con una pinza.',
      },
      {
        id: 'd-4',
        text: 'Observación visual de actividad y aspecto de las heces',
        details: 'Verificar que están activos, cantan, no están embolados en el fondo y sus heces son consistentes.',
      },
      {
        id: 'd-5',
        text: 'Retirar restos frescos antes del anochecer',
        details: 'Retirar las verduras no consumidas para que no fermenten durante la noche.',
      },
      {
        id: 'd-6',
        text: 'Rutina de sueño protegida (10-12h)',
        details: 'Cubrir la jaula con tela de algodón transpirable y apagar luces a una hora constante.',
      },
    ],
  },
  {
    id: 'checklist-semanal',
    title: 'Checklist Semanal de Limpieza y Mantenimiento',
    description: 'Mantenimiento preventivo para evitar malos olores y proliferación de parásitos o bacterias.',
    frequency: 'weekly',
    items: [
      {
        id: 'w-1',
        text: 'Limpieza profunda de bandejas y rejillas',
        details: 'Lavar la bandeja inferior con agua caliente y jabón neutro o vinagre blanco diluido.',
      },
      {
        id: 'w-2',
        text: 'Desinfección de comederos y bebederos',
        details: 'Frotar con cepillo fino para eliminar biofilm y secar completamente.',
      },
      {
        id: 'w-3',
        text: 'Cepillado y revisión de perchas',
        details: 'Raspar restos fecales secos de las ramas con agua caliente.',
      },
      {
        id: 'w-4',
        text: 'Revisión y rotación de juguetes',
        details: 'Comprobar que no haya cuerdas deshilachadas o astillas y rotar accesorios.',
      },
      {
        id: 'w-5',
        text: 'Comprobación de bloque mineral y sepia',
        details: 'Verificar que el hueso de jibia y bloque de yodo están limpios y accesibles.',
      },
    ],
  },
  {
    id: 'checklist-vuelo',
    title: 'Checklist "Antes de Permitir Vuelo Libre"',
    description: 'Protocolo de seguridad imprescindible antes de abrir la puerta de la jaula en una habitación.',
    frequency: 'flight',
    items: [
      {
        id: 'f-1',
        text: 'Ventanas y puertas exteriores cerradas',
        details: 'Verificar que ninguna ventana quede abierta ni en posición oscilobatiente.',
      },
      {
        id: 'f-2',
        text: 'Cortinas o estores cubriendo cristales y espejos',
        details: 'Bloquear la transparencia y el reflejo para evitar colisiones a gran velocidad.',
      },
      {
        id: 'f-3',
        text: 'Ventiladores de techo y sobremesa apagados',
        details: 'Comprobar que las aspas estén completamente detenidas.',
      },
      {
        id: 'f-4',
        text: 'Fuentes de agua destapadas eliminadas',
        details: 'Tapa del inodoro bajada, vasos altos vacíos y fregaderos tapados.',
      },
      {
        id: 'f-5',
        text: 'Perros, gatos y otras mascotas fuera',
        details: 'Asegurar a otras mascotas en otra habitación con la puerta cerrada.',
      },
      {
        id: 'f-6',
        text: 'Plantas tóxicas y cables protegidos',
        details: 'Retirar Dieffenbachia, potos o cables eléctricos expuestos.',
      },
    ],
  },
  {
    id: 'checklist-cuarentena',
    title: 'Checklist de Llegada de Nueva Ave (Cuarentena)',
    description: 'Pasos de bioseguridad para incorporar a un nuevo miembro con éxito.',
    frequency: 'quarantine',
    items: [
      {
        id: 'q-1',
        text: 'Jaula individual en habitación separada',
        details: 'Aislamiento físico durante un mínimo de 30 días.',
      },
      {
        id: 'q-2',
        text: 'Atención sanitaria en orden inverso',
        details: 'Limpiar y alimentar primero las aves residentes y al final el ave nueva.',
      },
      {
        id: 'q-3',
        text: 'Examen de heces sobre papel blanco',
        details: 'Monitorear consistencia, color y presencia de semillas sin digerir.',
      },
      {
        id: 'q-4',
        text: 'Revisión veterinaria con coprología',
        details: 'Chequeo de parásitos y megabacterias en clínica de exóticos.',
      },
      {
        id: 'q-5',
        text: 'Presentación gradual jaula a jaula tras 30 días',
        details: 'Visual primero, contacto a través de barrotes y vuelo libre neutral.',
      },
    ],
  },
];

export const CARE_STEP_GUIDES_DATA: CareStepGuide[] = [
  {
    id: 'guia-montaje-jaula',
    slug: 'montaje-jaula',
    title: 'Cómo Preparar y Montar la Jaula Ideal',
    category: 'alojamiento',
    summary: 'Guía práctica para equipar una jaula amplia, funcional y segura desde el primer día.',
    steps: [
      {
        stepNumber: 1,
        title: 'Selección y Desinfección Inicial',
        description: 'Elige una jaula horizontal de al menos 60 cm de largo con separación de barrotes de 10-12 mm. Lávala con agua tibia y jabón neutro antes de armarla.',
        tips: ['Comprueba que todas las puertas cierren con firmeza.'],
      },
      {
        stepNumber: 2,
        title: 'Instalación de Perchas Naturales',
        description: 'Coloca 2 o 3 ramas de madera natural de diámetros variables (1.2 a 2.5 cm) en los extremos opuestos de la jaula, dejando el centro despejado.',
        tips: ['Coloca la percha más alta en la esquina más tranquila como zona de descanso.'],
        warnings: ['No uses perchas de plástico lisas ni lijas abrasivas.'],
      },
      {
        stepNumber: 3,
        title: 'Colocación de Comederos y Bebederos',
        description: 'Fija los comederos y bebederos a media altura en zonas accesibles, asegurándote de que ninguna percha superior quede directamente encima para que no caigan heces.',
      },
      {
        stepNumber: 4,
        title: 'Fijación de Minerales y Juguetes',
        description: 'Coloca un hueso de jibia y un bloque mineral con yodo cerca de una percha. Añade 2 juguetes destructibles de madera o mimbre.',
      },
      {
        stepNumber: 5,
        title: 'Acondicionamiento del Fondo y Ubicación',
        description: 'Coloca papel absorbente blanco limpio en la bandeja inferior. Sitúa la jaula a la altura de tus ojos en una habitación tranquila con un lateral pegado a la pared.',
      },
    ],
    verificationStatus: 'verified',
    sources: ['RSPCA Housing Standards', 'BSAVA Manual of Avian Practice'],
  },
  {
    id: 'guia-introducir-frescos',
    slug: 'introducir-alimentos-frescos',
    title: 'Cómo Introducir Nuevos Alimentos Frescos y Verduras',
    category: 'alimentacion',
    summary: 'Paso a paso para acostumbrar a un periquito acostumbrado solo a semillas a comer verduras saludables.',
    steps: [
      {
        stepNumber: 1,
        title: 'Selección y Lavado Riguroso',
        description: 'Comienza con vegetales de sabor suave y muy aceptados como espinacas, canónigos o brócoli. Lávalos meticulosamente con agua abundante y sécalos.',
      },
      {
        stepNumber: 2,
        title: 'Presentación Visual con Pinza',
        description: 'Engancha una hoja entera cerca de su posadero favorito con una pinza de madera. Su curiosidad natural le incitará a mordisquearla para explorar.',
        tips: ['Si le gusta bañarse, coloca hojas verdes húmedas en un plato llano.'],
      },
      {
        stepNumber: 3,
        title: 'Técnica de Espolvoreado con Semillas',
        description: 'Pica finamente la verdura (como brócoli o zanahoria) y espolvorea unas pocas semillas de alpiste o panizo por encima para que al picar las semillas pruebe el vegetal.',
      },
      {
        stepNumber: 4,
        title: 'Constancia Diaria sin Rendirse',
        description: 'Los periquitos son neofóbicos (temen a lo desconocido). Pueden tardar de 1 a 3 semanas en atreverse a probar un nuevo alimento. Ofrécelo a diario con paciencia.',
      },
      {
        stepNumber: 5,
        title: 'Retirada Preventiva a las 4-6 Horas',
        description: 'Retira los restos antes de que se marchiten o fermenten para mantener la higiene perfecta de la jaula.',
      },
    ],
    verificationStatus: 'verified',
    sources: ['The World Parrot Trust Feeding Guide'],
  },
  {
    id: 'guia-limpieza-profunda',
    slug: 'limpieza-jaula-paso-a-paso',
    title: 'Protocolo de Limpieza e Higiene Semanal Profunda',
    category: 'higiene',
    summary: 'Procedimiento metódico para desinfectar la jaula sin usar químicos nocivos ni estresar a tus periquitos.',
    steps: [
      {
        stepNumber: 1,
        title: 'Reubicación Segura o Momento de Vuelo',
        description: 'Aprovecha la sesión de vuelo libre de tus aves en una habitación segura o trasládalas temporalmente a una jaula auxiliar.',
      },
      {
        stepNumber: 2,
        title: 'Retirada de Accesorios y Sustrato',
        description: 'Extrae bebederos, comederos, perchas y el papel sucio del fondo de la bandeja.',
      },
      {
        stepNumber: 3,
        title: 'Lavado con Agua Caliente y Vinagre Blanco',
        description: 'Lava la bandeja, rejilla y perchas con una solución de agua caliente y vinagre blanco de limpieza (1 parte de vinagre por 3 de agua) usando un cepillo duro.',
        tips: ['El vinagre blanco disuelve los depósitos de cal y uratos sin dejar residuos tóxicos.'],
      },
      {
        stepNumber: 4,
        title: 'Enjuague y Secado Completo',
        description: 'Enjuaga con agua limpia y seca muy bien con un paño limpio o deja secar al sol directo (el sol actúa como esterilizador UV natural).',
      },
      {
        stepNumber: 5,
        title: 'Montaje con Fondo Nuevo y Agua Fresca',
        description: 'Coloca papel blanco nuevo en la bandeja, rellena comederos y bebedero con agua fresca y recoloca a las aves.',
      },
    ],
    verificationStatus: 'verified',
    sources: ['BSAVA Manual of Avian Practice'],
  },
];
