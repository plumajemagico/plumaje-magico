import { HealthCondition, HealthCategory } from '../types';

export const MEDICAL_DISCLAIMER_TEXT =
  'Esta información tiene fines estrictamente educativos y de divulgación zoológica. No sustituye en ningún caso la consulta, diagnóstico clínico ni tratamiento prescrito por un médico veterinario especialista en aves o animales exóticos. Si tu periquito muestra cualquier señal de malestar o cambio de conducta, acude de inmediato a un centro veterinario cualificado.';

export const HEALTH_CATEGORIES_CONFIG: {
  id: HealthCategory | 'all';
  label: string;
  shortLabel: string;
  description: string;
  iconName: string;
}[] = [
  {
    id: 'all',
    label: 'Todas las Condiciones',
    shortLabel: 'Todas',
    description: 'Catálogo enciclopédico integral de patologías y afecciones documentadas en periquitos australianos.',
    iconName: 'Activity',
  },
  {
    id: 'respiratory',
    label: 'Problemas Respiratorios',
    shortLabel: 'Respiratorio',
    description: 'Afecciones de sacos aéreos, tráquea, pulmones y siringe por bacterias, ácaros o irritantes ambientales.',
    iconName: 'Wind',
  },
  {
    id: 'digestivo' as any, // fallback key for safety
    label: 'Problemas Digestivos',
    shortLabel: 'Digestivo',
    description: 'Trastornos del buche, proventrículo, ventrículo e intestinos, absorción y consistencia de las deyecciones.',
    iconName: 'Layers',
  },
  {
    id: 'digestive',
    label: 'Problemas Digestivos',
    shortLabel: 'Digestivo',
    description: 'Trastornos del buche, proventrículo, ventrículo e intestinos, absorción y consistencia de las deyecciones.',
    iconName: 'Layers',
  },
  {
    id: 'parasitic',
    label: 'Parásitos Internos y Externos',
    shortLabel: 'Parásitos',
    description: 'Ácaros microscópicos de la piel, ácaros respiratorios, protozoos y parásitos intestinales.',
    iconName: 'Bug',
  },
  {
    id: 'plumage',
    label: 'Plumaje y Muda Anormal',
    shortLabel: 'Plumaje',
    description: 'Trastornos de la queratina, mudas patológicas, picaje psicogénico o quistes de pluma.',
    iconName: 'Feather',
  },
  {
    id: 'skin',
    label: 'Piel y Tejidos',
    shortLabel: 'Piel',
    description: 'Afecciones cutáneas, dermatitis, irritaciones y heridas superficiales.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'feet_beak',
    label: 'Patas, Pico y Uñas',
    shortLabel: 'Patas y Pico',
    description: 'Sobrecrecimiento de la ranfoteca, pododermatitis (clavos plantares) y descamaciones.',
    iconName: 'Scissors',
  },
  {
    id: 'nutrition',
    label: 'Nutrición y Carencias',
    shortLabel: 'Nutrición',
    description: 'Deficiencias de yodo, hipovitaminosis A, problemas de asimilación de calcio y lipomas por semillas grasas.',
    iconName: 'Apple',
  },
  {
    id: 'infectious',
    label: 'Infecciosas y Zoonosis',
    shortLabel: 'Infecciosas',
    description: 'Enfermedades bacterianas, víricas y fúngicas sistémicas con potencial contagio entre aves o zoonosis.',
    iconName: 'Stethoscope',
  },
  {
    id: 'reproductive',
    label: 'Afecciones Reproductivas',
    shortLabel: 'Reproducción',
    description: 'Urgencias asociadas a la puesta, distocias, retención de huevos y peritonitis celómica.',
    iconName: 'Egg',
  },
  {
    id: 'other',
    label: 'Otras Patologías / Miscelánea',
    shortLabel: 'Otras',
    description: 'Traumatismos, lipomas benignos, estrés ambiental e intoxicaciones domésticas agudas.',
    iconName: 'AlertCircle',
  },
];

export const HEALTH_CONDITIONS_DATA: HealthCondition[] = [
  {
    id: 'acaros-cera-sarna',
    slug: 'acaros-cera-sarna',
    name: 'Ácaros de la Cera y Patas (Sarna Knemidocóptica)',
    scientificOrAlternativeName: 'Knemidokoptes pilae / Cnemodocoptes pilae',
    category: 'parasitic',
    shortDescription:
      'Infestación por ácaros microscópicos excavadores que originan costras blanquecinas porosas en la cera, comisuras del pico, patas y contorno ocular.',
    description:
      'La sarna knemidocóptica es una de las parasitosis externas más comunes en el periquito australiano. Está provocada por el ácaro microscópico Knemidokoptes pilae, el cual excava diminutos túneles en las capas queratinizadas de la epidermis desprovista de plumas (cera, ranfoteca del pico, párpados y piel de los tarsos). Las lesiones tienen un aspecto característico similar a una esponja, tiza o panal de abejas. Afecta especialmente a aves jóvenes, ejemplares con bajas defensas o con predisposición genética.',
    signs: [
      'Puede presentar costras blanquecinas, rugosas y de aspecto poroso en la base de la cera y alrededor del pico.',
      'Entre los signos descritos se encuentran engrosamiento, callosidades y escamas gruesas blanquecinas en patas y dedos.',
      'Puede observarse crecimiento irregular, fisuras o deformaciones progresivas de la ranfoteca del pico.',
      'En fases avanzadas puede haber prurito, descamación periocular y dificultad para asir perchas.',
    ],
    riskFactors: [
      'Inmunodeficiencias congénitas o estrés ambiental prolongado.',
      'Falta de cuarentena al ingresar aves nuevas al aviario.',
      'Hacinamiento y ventilación insuficiente.',
      'Deficiencias vitamínicas (especialmente hipovitaminosis A) que debilitan la barrera epitelial.',
    ],
    prevention: [
      'Realizar cuarentena estricta de 30 días a cualquier periquito nuevo antes de mezclarlo con otros ejemplares.',
      'Mantener perchas, barrotes y bandejas de la jaula limpios y desinfectados periódicamente.',
      'Proporcionar una dieta variada con hortalizas ricas en vitamina A para favorecer la salud de los epitelios.',
      'Observar con regularidad el aspecto de la cera y las patas durante la rutina de limpieza.',
    ],
    diagnosis:
      'El diagnóstico definitivo lo realiza un médico veterinario mediante examen visual clínico minucioso y, cuando es preciso, raspado superficial de las costras y observación microscópica de los ácaros en fresco.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Clínicamente se suelen emplear antiparasitarios específicos en solución tópica sobre la nuca (spot-on) bajo pauta profesional estricta. Nunca deben aplicarse aceites o ungüentos caseros en los orificios nasales por riesgo de asfixia.',
    whenToSeeVet:
      'Conviene consultar al veterinario ante la primera sospecha de rugosidad, polvo blanquecino o costras esponjosas en la cera o las patas, antes de que el ácaro dañe la matriz de crecimiento del pico.',
    verificationStatus: 'verified',
    verificationNotes:
      'Patología ampliamente descrita y tipificada en la literatura ornitológica y de animales exóticos (BSAVA / Ritchie et al.).',
    isEmergency: false,
    tags: ['ácaros', 'cera', 'pico', 'sarna', 'patas', 'knemidokoptes', 'parásitos externos'],
    sources: [
      'BSAVA Manual of Psittacine Birds (2nd Edition)',
      'Avian Medicine: Principles and Application (Ritchie, Harrison & Harrison)',
      'Association of Avian Veterinarians (AAV) - Budgerigar Health Guidelines',
    ],
    relatedConditions: ['crecimiento-anormal-pico', 'pododermatitis-clavo'],
    relatedTopics: [
      {
        title: 'Higiene y Desinfección del Entorno',
        sectionId: 'prevencion',
        description: 'Medidas de bioseguridad preventiva para jaulas y accesorios.',
      },
      {
        title: 'Protocolo de Cuarentena',
        sectionId: 'prevencion',
        description: 'Cómo aislar adecuadamente ejemplares recién llegados.',
      },
    ],
    technicalDetails: {
      pathogen: 'Knemidokoptes pilae (Acarina: Knemidokoptidae)',
      transmission: 'Contacto directo prolongado (frecuente transmisión de progenitores a polluelos en el nido)',
      incubation: 'Variable; el parásito puede permanecer latente durante meses hasta un episodio de estrés',
      clinicalDifferential: ['Hipertrofia marrón senil de la cera en hembras', 'Candidiasis cutánea', 'Papilomatosis'],
    },
  },
  {
    id: 'megabacteriosis-agy',
    slug: 'megabacteriosis-agy',
    name: 'Megabacteriosis / Levadura Gástrica Aviar (AGY)',
    scientificOrAlternativeName: 'Macrorhabdus ornithogaster / Avian Gastric Yeast',
    category: 'digestive',
    shortDescription:
      'Infección micótica en el proventrículo causada por una levadura de gran tamaño que provoca pérdida de peso progresiva a pesar de un apetito voraz ("falso apetito").',
    description:
      'La megabacteriosis, antes clasificada erróneamente como una gran bacteria y hoy reconocida como la levadura filamentosa Macrorhabdus ornithogaster, coloniza el istmo entre el proventrículo y el ventrículo (molleja) del periquito. Al alterar la producción de ácido clorhídrico y enzimas digestivas, la mucosa gástrica se inflama y el ave pierde la capacidad de digerir y asimilar los nutrientes ingeridos.',
    signs: [
      'Puede presentar adelgazamiento severo con esternón en quilla afilada ("quillado") a pesar de pasar mucho tiempo en los comederos picoteando semillas.',
      'Entre los signos descritos se encuentran semillas enteras o mal digeridas visibles en los excrementos.',
      'Puede observarse regurgitación frecuente de moco viscoso o restos alimenticios con movimientos espasmódicos del cuello.',
      'Apatía, plumaje erizado/embolado continuo y heces oscuras o diarreicas.',
    ],
    riskFactors: [
      'Inmunosupresión por cambios bruscos de temperatura, traslados o periodos de cría excesivos.',
      'Alimentación deficiente y estrés social por hacinamiento.',
      'Consumo de agua estancada o comederos contaminados con deyecciones.',
    ],
    prevention: [
      'Mantener bebederos y comederos escrupulosamente secos y limpios.',
      'Evitar situaciones de estrés crónico y no someter a las aves a reproducciones consecutivas sin descanso.',
      'Realizar revisiones coprológicas preventivas en criaderos y antes de la temporada de cría.',
    ],
    diagnosis:
      'El diagnóstico lo establece el veterinario examinando heces frescas al microscopio óptico o frotis de buche, donde se visualizan estructuras en forma de bastón largo características de Macrorhabdus ornithogaster.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Se emplean antifúngicos específicos por vía oral y pautas de soporte nutricional y acidificación pautada del agua. Jamás deben administrarse antibióticos antibacterianos, ya que pueden empeorar la proliferación fúngica.',
    whenToSeeVet:
      'Se debe acudir de urgencia veterinaria si el periquito come con ansiedad pero adelgaza, o si aparecen granos enteros sin digerir en el fondo de la jaula.',
    verificationStatus: 'verified',
    verificationNotes:
      'Agente patógeno ampliamente caracterizado en medicina aviar contemporánea (Harcourt-Brown & Chitty).',
    isEmergency: true,
    tags: ['megabacterias', 'macrorhabdus', 'digestivo', 'quillado', 'adelgazamiento', 'falso apetito'],
    sources: [
      'Clinical Avian Medicine (Harrison & Lightfoot)',
      'Avian Histopathology (Samson et al.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    relatedConditions: ['candidiasis-buche', 'coccidiosis-aviar'],
    relatedTopics: [
      {
        title: 'Signos de Alerta Temprana',
        sectionId: 'signos-de-alerta',
        description: 'Cómo detectar a tiempo el adelgazamiento y el embolamiento.',
      },
      {
        title: 'Nutrición y Salud Digestiva',
        sectionId: 'nutricion',
        description: 'Dieta equilibrada y cuidado del tracto digestivo.',
      },
    ],
    technicalDetails: {
      pathogen: 'Macrorhabdus ornithogaster (Ascomycota / Levadura gástrica aviar)',
      transmission: 'Vía fecal-oral y por regurgitación entre progenitores y pichones',
      incubation: 'Variable; puede permanecer subclínico hasta un periodo de bajada inmunitaria',
      clinicalDifferential: ['Proventriculitis viral', 'Candidiasis sistémica', 'Cuerpo extraño gastrointestinal'],
    },
  },
  {
    id: 'psitacosis-clamidiosis',
    slug: 'psitacosis-clamidiosis',
    name: 'Psitacosis / Clamidiosis Aviar',
    scientificOrAlternativeName: 'Chlamydia psittaci / Fiebre del loro',
    category: 'respiratory',
    shortDescription:
      'Enfermedad infecciosa bacteriana sistémica de gran relevancia biológica, con afectación respiratoria, ocular y hepática, clasificada como zoonosis.',
    description:
      'La psitacosis es una enfermedad infecciosa provocada por la bacteria intracelular Chlamydia psittaci. Puede afectar a una amplia variedad de psitácidas, incluido el periquito común. Se trata de una zoonosis (puede transmitirse a los seres humanos mediante la inhalación de partículas de polvo procedentes de heces secas o secreciones oculonasales de aves infectadas). En los periquitos puede cursar de forma asintomática latente o desencadenar cuadros respiratorios y digestivos graves.',
    signs: [
      'Puede presentar secreción nasal y ocular serosa o mucopurulenta con hinchazón de párpados y conjuntivitis.',
      'Entre los signos descritos se encuentran ruidos respiratorios, estornudos y respiración forzada.',
      'Diarrea llamativa de color verde brillante o amarillenta (por compromiso hepático).',
      'Letargo marcado, inapetencia, plumas desaliñadas y pérdida brusca de energía.',
    ],
    riskFactors: [
      'Hacinamiento en aviarios y mala ventilación que favorece la inhalación de aerosoles con polvo fecal.',
      'Estrés por transporte, desnutrición o coexistencia con aves portadoras no testadas.',
      'Falta de medidas de aislamiento higiénico ante aves enfermas.',
    ],
    prevention: [
      'Cuarentena obligatoria y rigurosa para toda nueva ave antes de entrar en contacto con el grupo.',
      'Ventilación continua del recinto para evitar la concentración de polvo de plumas y partículas secas.',
      'Limpieza húmeda de bandejas para no levantar polvo al barrer.',
      'Manejo con guantes y mascarilla ante aves sospechosas de cuadro respiratorio u ocular.',
    ],
    diagnosis:
      'El diagnóstico veterinario se confirma mediante pruebas laboratoriales específicas como PCR (reacción en cadena de la polimerasa), serología o frotis específicos de exudado cloacal y coanal.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Generalmente se requiere terapia antibiótica específica prolongada bajo prescripción facultativa y medidas de aislamiento estricto.',
    whenToSeeVet:
      'Requiere atención veterinaria urgente ante secreciones nasales/oculares combinadas con heces verdes brillantes o letargo.',
    verificationStatus: 'verified',
    verificationNotes: 'Enfermedad de declaración y vigilancia zoológica internacional respaldada por la OMS y la OIE.',
    isEmergency: true,
    tags: ['psitacosis', 'clamidia', 'respiratorio', 'zoonosis', 'conjuntivitis', 'infecciosas'],
    sources: [
      'World Organisation for Animal Health (WOAH / OIE) - Terrestrial Manual',
      'Avian Medicine: Principles and Application (Ritchie et al.)',
      'Center for Disease Control and Prevention (CDC) - Psittacosis Guidelines',
    ],
    relatedConditions: ['acaros-traqueales', 'deficiencia-yodo-bocio'],
    relatedTopics: [
      {
        title: 'Problemas del Sistema Respiratorio',
        sectionId: 'respiratorio',
        description: 'Anatomía de los sacos aéreos y factores de riesgo ambiental.',
      },
      {
        title: 'Cuarentena y Bioseguridad',
        sectionId: 'prevencion',
        description: 'Cómo proteger a la colonia frente a agentes infecciosos.',
      },
    ],
    technicalDetails: {
      pathogen: 'Chlamydia psittaci (Bacteria intracelular obligada)',
      transmission: 'Inhalación de aerosoles con polvo de deyecciones secas o secreciones respiratorias',
      incubation: 'Desde varios días hasta varias semanas o meses en portadores asintomáticos',
      clinicalDifferential: ['Micoplasmosis aviar', 'Pasteurelosis', 'Infección por herpesvirus (Pacheco)'],
    },
  },
  {
    id: 'deficiencia-yodo-bocio',
    slug: 'deficiencia-yodo-bocio',
    name: 'Deficiencia de Yodo e Hiperplasia Tiroidea (Bocio)',
    scientificOrAlternativeName: 'Bocio tiroideo aviar / Hipotiroidismo nutricional',
    category: 'nutrition',
    shortDescription:
      'Aumento de volumen de la glándula tiroides debido al déficit continuado de yodo en dietas basadas exclusivamente en semillas simples, comprimiendo tráquea y esófago.',
    description:
      'Históricamente, los periquitos australianos mantenidos con dietas de semillas de baja calidad o cultivadas en suelos deficientes en yodo presentan una alta predisposición a desarrollar hiperplasia e hipertrofia de las glándulas tiroideas. Al agrandarse la glándula en la base del cuello, comprime mecánicamente la siringe, la tráquea y el esófago, provocando sonidos respiratorios audibles y dificultad para tragar.',
    signs: [
      'Puede presentar chasquidos respiratorios agudos, siseos o "pitidos" audibles en cada respiración (sonido tipo "pi-pi").',
      'Entre los signos descritos se encuentra el balanceo rítmico de la cola arriba y abajo ("tail bobbing") sincrónico con la respiración.',
      'Regurgitación de semillas enteras por compresión esofágica / dilatación del buche.',
      'Pérdida de la capacidad de vocalizar normalmente o afonía en el canto.',
    ],
    riskFactors: [
      'Alimentación monótona basada únicamente en mijo blanco y alpiste sin suplementos minerales.',
      'Ausencia de bloque mineral, hueso de sepia (jibión) o grit mineral enriquecido en la jaula.',
      'Uso prolongado de agua destilada o desmineralizada sin aportes traza.',
    ],
    prevention: [
      'Mantener siempre accesible en la jaula un bloque mineral o piedra de calcio que contenga yodo y oligoelementos.',
      'Enriquecer la dieta con verduras frescas de hoja verde oscura y hortalizas variadas.',
      'Utilizar mixturas y piensos balanceados formulados con minerales esenciales.',
    ],
    diagnosis:
      'El diagnóstico clínico lo establece el veterinario evaluando el historial dietético, la auscultación traqueal, la respuesta al tratamiento de prueba y, de ser necesario, radiografías digitales contrastadas.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Suele basarse en la administración dosificada de soluciones con sales de yodo o yoduro potásico y corrección dietética inmediata.',
    whenToSeeVet:
      'Se debe acudir al veterinario si el periquito emite ruidos al respirar, balancea la cola para tomar aire o parece tener dificultad para deglutir semillas.',
    verificationStatus: 'verified',
    verificationNotes:
      'Trastorno metabólico y nutricional clásico en Melopsittacus undulatus documentado en manuales veterinarios de referencia.',
    isEmergency: false,
    tags: ['yodo', 'bocio', 'tiroides', 'nutrición', 'respiratorio', 'pitidos', 'tail bobbing'],
    sources: [
      'Avian Medicine: Principles and Application (Ritchie, Harrison & Harrison)',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
      'BSAVA Manual of Psittacine Birds',
    ],
    relatedConditions: ['psitacosis-clamidiosis', 'acaros-traqueales'],
    relatedTopics: [
      {
        title: 'Nutrición y Salud Aviar',
        sectionId: 'nutricion',
        description: 'Minerales, vitaminas y equilibrio alimentario para periquitos.',
      },
      {
        title: 'Signos Respiratorios de Alerta',
        sectionId: 'signos-de-alerta',
        description: 'Cómo diferenciar ruidos respiratorios mecánicos de infecciones.',
      },
    ],
    technicalDetails: {
      pathogen: 'Déficit nutricional / Trastorno metabólico no infeccioso',
      transmission: 'No aplicable (trastorno carencial)',
      incubation: 'Desarrollo insidioso y progresivo a lo largo de meses con dieta carente',
      clinicalDifferential: ['Ácaros traqueales', 'Aspergilosis', 'Cuerpo extraño en siringe', 'Aerosaculitis'],
    },
  },
  {
    id: 'retencion-huevo-distocia',
    slug: 'retencion-huevo-distocia',
    name: 'Retención de Huevo / Distocia Cloacal',
    scientificOrAlternativeName: 'Distocia aviar / Egg Binding',
    category: 'reproductive',
    shortDescription:
      'Imposibilidad de la hembra para expulsar un huevo alojado en la porción caudal del oviducto o en la cloaca; constituye una emergencia veterinaria vital.',
    description:
      'La distocia o retención de huevo es una urgencia médica crítica que compromete la vida de la periquita reproductora en cuestión de pocas horas. Ocurre cuando el huevo queda atascado en el oviducto distal, útero o cloaca, comprimiendo los vasos sanguíneos renales e ilíacos y bloqueando la defecación. Las causas más comunes incluyen hipocalcemia (falta de calcio para la contracción muscular), huevos con cáscara blanda, cría con hembras inmaduras o frío ambiental.',
    signs: [
      'Puede presentar a la hembra postrada en el fondo de la jaula, con incapacidad o desgana para subir a las perchas.',
      'Entre los signos descritos se encuentra el abdomen marcadamente distendido, duro y sensible al tacto.',
      'Esfuerzos repetidos e infructuosos de pujo con plumas cloacales abiertas o sucias.',
      'Respiración agitada con pico entreabierto y cola inclinada hacia abajo.',
      'Letargo profundo, ojos semicerrados y colapso circulatorio progresivo.',
    ],
    riskFactors: [
      'Hembras menores de 10-12 meses que inician puesta sin madurez esquelética completa.',
      'Puestas sucesivas y continuas sin descanso nutricional ni reposición de calcio óseo.',
      'Deficiencias en calcio asimilable y vitamina D3 (falta de luz natural/UVB).',
      'Sedentarismo, obesidad y bajas temperaturas ambientales en la zona de cría.',
    ],
    prevention: [
      'No poner a criar a hembras jóvenes que no alcancen el año de edad ni a ejemplares agotados.',
      'Asegurar suplementos de calcio iónico, bloque mineral y vitamina D3 meses antes del inicio de la cría.',
      'Limitar estrictamente el número de nidadas (máximo 2 al año por hembra).',
      'Mantener el aviario a temperatura controlada y confortable durante el periodo reproductor.',
    ],
    diagnosis:
      'El veterinario diagnostica la retención mediante palpación abdominal delicada, examen cloacal directo y radiografía digital para evaluar la localización, integridad y calcificación del huevo.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Requiere atención clínica de emergencia con fluidoterapia templada, aporte de calcio parenteral, analgesia, lubricación cloacal o descompresión / extracción quirúrgica si el huevo no progresa de forma natural. NUNCA se debe apretar fuertemente el abdomen en casa, ya que romper el huevo en el interior causaría peritonitis ovárica fulminante.',
    whenToSeeVet:
      'EMERGENCIA VETERINARIA INMEDIATA: Acudir de inmediato al hospital de exóticos en cuanto se observe a una hembra en el fondo con abdomen abultado y signos de pujo.',
    verificationStatus: 'verified',
    verificationNotes: 'Cuadro clínico crítico de primer orden en la patología reproductiva de psitácidas.',
    isEmergency: true,
    tags: ['huevo retenido', 'distocia', 'reproducción', 'hembras', 'urgencia', 'calcio', 'puesta'],
    sources: [
      'Manual of Avian Practice (Rupley)',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
      'BSAVA Manual of Psittacine Birds',
    ],
    relatedConditions: ['deficiencia-yodo-bocio'],
    relatedTopics: [
      {
        title: 'Signos de Emergencia Médica',
        sectionId: 'signos-de-alerta',
        description: 'Cómo actuar ante situaciones que ponen en peligro la vida en pocas horas.',
      },
      {
        title: 'Nutrición del Calcio y Vitaminas',
        sectionId: 'nutricion',
        description: 'La importancia del calcio y la vitamina D3 en la reproducción.',
      },
    ],
    technicalDetails: {
      pathogen: 'Trastorno reproductivo multifactorial / Metabólico y mecánico',
      transmission: 'No aplicable',
      incubation: 'Desencadenamiento agudo durante el tránsito final del huevo (24-48 horas tras ovulación)',
      clinicalDifferential: ['Peritonitis celómica por yema de huevo', 'Hernia celómica', 'Neoplasia ovárica/renal'],
    },
  },
  {
    id: 'acaros-traqueales',
    slug: 'acaros-traqueales',
    name: 'Ácaros Traqueales y de Sacos Aéreos (Esternostomiasis)',
    scientificOrAlternativeName: 'Sternostoma tracheacolum',
    category: 'parasitic',
    shortDescription:
      'Infestación parasitaria de la tráquea, siringe, bronquios y sacos aéreos por el ácaro Sternostoma tracheacolum, provocando estornudos, chasquidos y tos.',
    description:
      'Sternostoma tracheacolum es un ácaro hematófago microscópico que coloniza todo el tracto respiratorio de aves canoras y psitácidas pequeñas. Al alimentarse de sangre en la mucosa de la tráquea y los sacos aéreos, provoca inflamación, exceso de mucosidad y obstrucción de la siringe, lo que produce sonidos secos característicos y pérdida del canto.',
    signs: [
      'Puede presentar ruidos respiratorios secos, chasquidos continuos ("clic-clic") o sonidos semejantes a un estornudo o tos.',
      'Entre los signos descritos se encuentran movimientos bruscos de la cabeza hacia delante como intentando despejar la garganta.',
      'Respiración con pico abierto tras vuelos cortos o esfuerzos leves.',
      'Pérdida de vocalizaciones normales, gorgoteo o afonía.',
    ],
    riskFactors: [
      'Contacto con ejemplares portadores en pajareras comunitarias o jaulas compartidas.',
      'Alta densidad de aves en recintos cerrados con escasa renovación de aire.',
      'Falta de desparasitación preventiva reglada en aves procedentes de otros criaderos.',
    ],
    prevention: [
      'Aislar en cuarentena a cualquier periquito con síntomas de respiración ruidosa.',
      'Mantener una ventilación adecuada y evitar corrientes directas y exceso de humedad.',
      'Control antiparasitario preventivo periódico pautado por el veterinario especialista.',
    ],
    diagnosis:
      'El diagnóstico lo realiza el veterinario mediante transiluminación traqueal (en aves dóciles puede observarse la sombra de los ácaros en la tráquea con luz focal potente), frotis coanal o respuesta clínica al tratamiento acaricida.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Suele emplearse un antiparasitario sistémico específico aplicado con precisión clínica en la piel descubierta.',
    whenToSeeVet:
      'Consultar al veterinario si el periquito emite chasquidos al respirar, tose con frecuencia o parece fatigarse tras vuelos cortos.',
    verificationStatus: 'verified',
    verificationNotes: 'Ectoparásito respiratorio descrito exhaustivamente en medicina aviar.',
    isEmergency: false,
    tags: ['ácaros traqueales', 'esternostoma', 'respiratorio', 'chasquidos', 'sacos aéreos', 'tos'],
    sources: [
      'Avian Medicine: Principles and Application (Ritchie et al.)',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
    ],
    relatedConditions: ['psitacosis-clamidiosis', 'deficiencia-yodo-bocio'],
    relatedTopics: [
      {
        title: 'Salud Respiratoria',
        sectionId: 'respiratorio',
        description: 'Factores que inciden en los pulmones y sacos aéreos.',
      },
    ],
    technicalDetails: {
      pathogen: 'Sternostoma tracheacolum (Acarina: Rhinonyssidae)',
      transmission: 'Contacto directo (alimentación pico a pico, regurgitación, aerosoles cercanos)',
      incubation: 'Ciclo biológico de aproximadamente 6 a 9 días; síntomas manifiestos en semanas',
      clinicalDifferential: ['Bocio por deficiencia de yodo', 'Aspergilosis traqueal', 'Micoplasmosis'],
    },
  },
  {
    id: 'pododermatitis-clavo',
    slug: 'pododermatitis-clavo',
    name: 'Pododermatitis Plantar / Lesiones en Patas',
    scientificOrAlternativeName: 'Bumblefoot aviar / Pododermatitis erosiva y ulcerativa',
    category: 'feet_beak',
    shortDescription:
      'Inflamación y ulceración progresiva de la piel plantar de las patas provocada por el uso continuado de perchas inadecuadas, lija abrasiva o exceso de peso.',
    description:
      'La pododermatitis en periquitos se produce por una presión constante y homogénea sobre los mismos puntos de la almohadilla plantar. El uso exclusivo de perchas cilíndricas de plástico liso, perchas forradas con fundas de lija abrasiva o el sobrepeso impiden que el pie cambie de puntos de apoyo. Inicialmente se genera un enrojecimiento (grado 1) que puede avanzar hacia úlceras, infecciones bacterianas y callosidades dolorosas.',
    signs: [
      'Puede presentar zonas rojizas, brillantes o sin escamas en la superficie de apoyo plantar de los dedos.',
      'Entre los signos descritos se encuentran pequeñas costras oscuras o úlceras en la base de la almohadilla.',
      'El ave descansa con frecuencia sobre una sola pata alternando el peso o pasa tiempo tumbada en el suelo/percha.',
      'Reticencia a desplazarse por los barrotes o debilidad en el agarre.',
    ],
    riskFactors: [
      'Perchas de plástico uniforme o perchas abrasivas de papel de lija ("cortaúñas").',
      'Falta de ramas naturales de grosores variados y maderas no tratadas.',
      'Obesidad, sedentarismo y jaulas con espacio insuficiente de vuelo.',
      'Falta de higiene en las superficies de apoyo donde se acumulan heces secas.',
    ],
    prevention: [
      'Sustituir de inmediato todas las perchas de plástico por ramas naturales de madera no tóxica (manzano, peral, olivo, sauce) de diámetros variables.',
      'Eliminar por completo las fundas de papel de lija de los barrotes (son perjudiciales para la piel plantar).',
      'Mantener a los periquitos en un peso saludable con vuelos libres diarios y dieta sin exceso de grasas.',
      'Limpiar y raspar las perchas con regularidad.',
    ],
    diagnosis:
      'Diagnóstico clínico mediante inspección dermatológica directa del pie bajo aumento, clasificando el grado de severidad y descartando infección por Knemidokoptes o traumatismos.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. En fases tempranas se corrige el hábitat y se aplican desinfectantes y pomadas regeneradoras pautadas; casos avanzados pueden requerir vendajes protectores especiales.',
    whenToSeeVet:
      'Consultar al veterinario si se detectan costras oscuras, hinchazón o si el periquito evita apoyar una de sus patas.',
    verificationStatus: 'verified',
    verificationNotes: 'Patología podal ampliamente documentada en la avicultura de compañía y zoológica.',
    isEmergency: false,
    tags: ['patas', 'pododermatitis', 'perchas', 'clavos', 'almohadilla', 'uñas'],
    sources: [
      'BSAVA Manual of Psittacine Birds',
      'Avian Medicine: Principles and Application',
    ],
    relatedConditions: ['acaros-cera-sarna', 'crecimiento-anormal-pico'],
    relatedTopics: [
      {
        title: 'Patas, Pico y Apoyos Seguros',
        sectionId: 'patas-pico',
        description: 'Cómo elegir perchas ergonómicas y mantener uñas saludables.',
      },
    ],
    technicalDetails: {
      pathogen: 'Presión mecánica repetitiva con sobreinfección bacteriana secundaria (ej. Staphylococcus spp.)',
      transmission: 'No infecciosa en origen (traumático-ambiental)',
      incubation: 'Desarrollo paulatino a lo largo de semanas o meses con mal soporte',
      clinicalDifferential: ['Gota articular/visceral', 'Fractura/luxación de falange', 'Sarna knemidocóptica'],
    },
  },
  {
    id: 'candidiasis-buche',
    slug: 'candidiasis-buche',
    name: 'Candidiasis / Infección Micótica del Buche',
    scientificOrAlternativeName: 'Candida albicans / Infección por hongos en tracto superior',
    category: 'digestive',
    shortDescription:
      'Proliferación oportunista de la levadura Candida albicans en la cavidad oral, esófago y buche, provocando buche engrosado, regurgitación y lentitud en el vaciado.',
    description:
      'Candida albicans es una levadura que puede formar parte de la flora habitual en proporciones insignificantes. Cuando el sistema inmunitario del periquito se deprime o tras un uso incorrecto de antibióticos que destruyen la flora bacteriana normal, la levadura prolifera sin freno en la mucosa del buche, formando placas blanquecinas y provocando vaciado digestivo anormalmente lento.',
    signs: [
      'Puede presentar regurgitación de contenido mucoso y semillas con olor ácido o fermentado.',
      'Entre los signos descritos se encuentran movimientos continuos de deglución y estiramiento del cuello.',
      'Plumas de la cabeza y frente pegajosas por la expulsión de vómito.',
      'Vaciado del buche muy lento o buche blando y lleno de líquido/gas ("buche agrio").',
    ],
    riskFactors: [
      'Uso indiscriminado de antibióticos sin supervisión veterinaria.',
      'Dietas deficientes en vitamina A o con exceso de azúcares simples.',
      'Falta de higiene estricta en papillas de cría manual o agua de bebida sucia.',
    ],
    prevention: [
      'No automedicar jamás con antibióticos sin receta ni diagnóstico previo.',
      'Limpiar diariamente bebederos para evitar biopelículas bacterianas y fúngicas.',
      'Proporcionar alimentos frescos ricos en betacarotenos.',
    ],
    diagnosis:
      'El veterinario diagnostica la candidiasis mediante citología de frotis de buche con tinción Gram o azul de metileno, observando levaduras gemantes y pseudohifas.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Requiere antifúngicos orales específicos dosificados y corrección de la causa inmunitaria subyacente.',
    whenToSeeVet:
      'Acudir al veterinario si el periquito regurgita con insistencia o si el buche no se vacía transcurridas varias horas.',
    verificationStatus: 'verified',
    verificationNotes: 'Infección micótica de referencia en patología del buche aviar.',
    isEmergency: false,
    tags: ['cándida', 'buche', 'regurgitación', 'digestivo', 'hongos', 'vómito'],
    sources: [
      'Clinical Avian Medicine (Harrison & Lightfoot)',
      'BSAVA Manual of Psittacine Birds',
    ],
    relatedConditions: ['megabacteriosis-agy'],
    relatedTopics: [
      {
        title: 'Problemas Digestivos',
        sectionId: 'digestivo',
        description: 'Diferencias entre regurgitación fisiológica y vómito patológico.',
      },
    ],
    technicalDetails: {
      pathogen: 'Candida albicans (Hongo levaduriforme dimórfico)',
      transmission: 'Oportunista / Vía fecal-oral o papillas contaminadas',
      incubation: 'Horas a días tras el factor inmunodepresor o disbiosis bacteriana',
      clinicalDifferential: ['Megabacteriosis', 'Tricomoniasis', 'Cuerpo extraño en buche'],
    },
  },
  {
    id: 'intoxicacion-humos-teflon',
    slug: 'intoxicacion-humos-teflon',
    name: 'Toxicosis por Vapores de PTFE / Teflón (Intoxicación Aguda)',
    scientificOrAlternativeName: 'Politetrafluoroetileno (PTFE) toxicosis / Fume fever',
    category: 'respiratory',
    shortDescription:
      'Urgencia respiratoria fulminante causada por la inhalación de gases tóxicos desprendidos por sartenes y utensilios de cocina con revestimiento antiadherente sobrecalentado.',
    description:
      'El sistema respiratorio de las aves es extraordinariamente eficiente gracias a sus pulmones no expansibles y a su sistema de nueve sacos aéreos. Esta misma anatomía las hace extremadamente vulnerables a toxinas inhaladas. Cuando el teflón o recubrimientos antiadherentes con PTFE se calientan en exceso (común al dejar una sartén al fuego), se liberan gases microscópicos inodoros e invisibles que provocan edema pulmonar agudo y hemorragia en cuestión de minutos.',
    signs: [
      'Puede presentar disnea severa súbita con respiración con pico abierto al máximo y asfixia rápida.',
      'Entre los signos descritos se encuentran aleteo desesperado, pérdida de equilibrio y caída del posadero.',
      'Aparición fulminante minutos después de cocinar cerca de la jaula o usar aparatos con teflón nuevo.',
      'Muerte hiperaguda si la concentración de gas en la estancia es elevada.',
    ],
    riskFactors: [
      'Ubicar la jaula del periquito en la cocina o en habitaciones contiguas sin aislamiento.',
      'Uso de planchas, sartenes antiadherentes, hornos pirolíticos autolimpiables o tostadoras cerca de las aves.',
      'Uso de aerosoles, ambientadores, inciensos o humo de tabaco en el hogar.',
    ],
    prevention: [
      'NUNCA colocar la jaula de un periquito en la cocina ni en zonas donde se cocine.',
      'Sustituir sartenes y cazuelas de teflón por menaje de acero inoxidable, hierro fundido o cerámica.',
      'Ventilar intensamente la vivienda y no usar ambientadores químicos ni velas aromáticas cerca de las aves.',
    ],
    diagnosis:
      'Diagnóstico clínico basado en el cuadro de colapso respiratorio súbito y el antecedente de uso de menaje antiadherente o sobrecalentamiento en el hogar.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Requiere oxígeno al 100% en cámara templada, antiinflamatorios urgentes y diuréticos pautados. La mejor medida es la evacuación inmediata del ave al aire fresco limpio.',
    whenToSeeVet:
      'URGENCIA MÉDICA EXTREMA: Retirar al ave inmediatamente a un lugar con aire puro no contaminado y acudir sin dilación al veterinario de urgencias.',
    verificationStatus: 'verified',
    verificationNotes: 'Urgencia toxicológica mayor documentada en toda la literatura de medicina aviar doméstica.',
    isEmergency: true,
    tags: ['teflón', 'ptfe', 'humos', 'cocina', 'intoxicación', 'respiratorio', 'urgencia'],
    sources: [
      'Association of Avian Veterinarians (AAV) - Household Hazards for Birds',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
    ],
    relatedConditions: ['psitacosis-clamidiosis'],
    relatedTopics: [
      {
        title: 'Seguridad en el Hogar y Calidad de Aire',
        sectionId: 'respiratorio',
        description: 'Lista de tóxicos ambientales domésticos y cómo proteger a tu periquito.',
      },
    ],
    technicalDetails: {
      pathogen: 'Gases pirolíticos de politetrafluoroetileno (PTFE) y partículas ultrafinas',
      transmission: 'Inhalatoria aerógena',
      incubation: 'Minutos (hiperagudo)',
      clinicalDifferential: ['Intoxicación por monóxido de carbono', 'Aerosol químico directo', 'Traumatismo craneal'],
    },
  },
  {
    id: 'picaje-trastornos-plumaje',
    slug: 'picaje-trastornos-plumaje',
    name: 'Alteraciones del Plumaje y Picaje (Conductual / Multifactorial)',
    scientificOrAlternativeName: 'Feather plucking / Trastornos de la conducta de acicalamiento',
    category: 'plumage',
    shortDescription:
      'Arranque o deterioro patológico de las plumas por factores ambientales, estrés social, aburrimiento, parásitos o desequilibrios nutricionales.',
    description:
      'Aunque el picaje grave es más común en grandes loros, los periquitos pueden manifestar conductas de sobreacicalamiento, corte de barbas de las plumas o arrancamiento focal en pecho y flancos. Se trata de un síndrome multifactorial donde coexisten desencadenantes médicos (alergias, ácaros, dolor articular, déficit de zinc) y factores etológicos (falta de enriquecimiento, soledad, estrés por fotoperiodo irregular).',
    signs: [
      'Puede presentar zonas corporales desplumadas con piel intacta (el plumaje de la cabeza permanece intacto, ya que el ave no puede alcanzárselo con el propio pico).',
      'Entre los signos descritos se encuentran cañones masticados, plumas rotas o arrancadas en la bandeja.',
      'Acicalamiento compulsivo y nerviosismo.',
      'Falta de brillo y aspecto áspero general de la cobertura alar.',
    ],
    riskFactors: [
      'Jaulas pequeñas sin juguetes forrajeros ni ramas naturales para masticar.',
      'Aislamiento social (los periquitos son aves gregarias que precisan compañía de su misma especie).',
      'Fotoperiodos caóticos con menos de 10-12 horas de sueño en oscuridad.',
      'Dieta pobre en aminoácidos azufrados (metionina, lisina) necesarios para la queratina.',
    ],
    prevention: [
      'Proporcionar compañía de otro periquito compatible.',
      'Añadir juguetes de forrajeo, ramas de eucalipto o sauce para descortezar y estimular la mente.',
      'Garantizar entre 10 y 12 horas de descanso nocturno ininterrumpido en penumbra.',
      'Alimentación variada con aportes proteicos balanceados durante las mudas.',
    ],
    diagnosis:
      'El veterinario debe descartar en primer lugar causas médicas orgánicas (análisis coprológico, raspados cutáneos, bioquímica) antes de diagnosticar una causa etológica o psicogénica.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Implica corregir las carencias del entorno, enriquecimiento ambiental y, si hay lesión cutánea, tratamiento dérmico específico.',
    whenToSeeVet:
      'Consultar al veterinario si la pérdida de plumas deja zonas calvas extensas o si se observa picoteo compulsivo que llega a producir sangrado.',
    verificationStatus: 'pending_review',
    verificationNotes:
      'El picaje en periquitos australianos suele requerir evaluación diferencial exhaustiva debido a su naturaleza etiológica múltiple.',
    isEmergency: false,
    tags: ['picaje', 'plumaje', 'plumas', 'estrés', 'comportamiento', 'muda'],
    sources: [
      'Avian Behavioral Medicine (Echols et al.)',
      'BSAVA Manual of Psittacine Birds',
    ],
    relatedConditions: ['acaros-cera-sarna'],
    relatedTopics: [
      {
        title: 'Salud del Plumaje y Muda',
        sectionId: 'plumaje',
        description: 'Cómo distinguir una muda normal de una patología dérmica.',
      },
    ],
    technicalDetails: {
      pathogen: 'Síndrome multifactorial (orgánico, nutricional y comportamental)',
      transmission: 'No transmisible',
      incubation: 'Crónico y progresivo',
      clinicalDifferential: ['Muda francesa (Poliomavirus)', 'Circovirus (PBFD)', 'Foliculitis bacteriana'],
    },
  },
  {
    id: 'crecimiento-anormal-pico',
    slug: 'crecimiento-anormal-pico',
    name: 'Sobrecrecimiento y Maloclusión del Pico',
    scientificOrAlternativeName: 'Beak overgrowth / Ranfoteca anómala',
    category: 'feet_beak',
    shortDescription:
      'Crecimiento desmedido o desviación de la mandíbula superior o inferior que dificulta o impide la aprehensión y pelado de semillas.',
    description:
      'El pico del periquito está formado por una base ósea recubierta de una capa córnea de queratina viva llamada ranfoteca, la cual crece de forma continua a lo largo de toda su vida. En condiciones normales se desgasta armónicamente por el frotamiento mutuo de ambas mandíbulas y la masticación de ramas. Si existe una maloclusión congénita, daño de la matriz por ácaros Knemidokoptes o problemas hepáticos subyacentes, la queratina crece de forma anómala en longitud o grosor.',
    signs: [
      'Puede presentar el pico superior curvado en exceso hacia el cuello o el inferior ensanchado hacia arriba ("pico en tijera").',
      'Entre los signos descritos se encuentra dificultad visible para pelar semillas o semillas que se caen de la boca.',
      'Hambre continua e intentos fallidos de alimentarse en el comedero.',
      'Acumulación de alimento reblandecido en los laterales del pico.',
    ],
    riskFactors: [
      'Secuela de sarna knemidocóptica que dañó la matriz germinativa de la cera.',
      'Enfermedad hepática crónica que altera el metabolismo de la queratina.',
      'Ausencia de elementos de desgaste natural (ramas, hueso de sepia, perchas naturales).',
      'Traumatismos previos en el pico por golpes o peleas.',
    ],
    prevention: [
      'Tratar precozmente cualquier infestación por ácaros de la cera.',
      'Disponer permanentemente en la jaula de ramas naturales no tratadas y hueso de sepia.',
      'Cuidar la salud del hígado evitando semillas excesivamente grasas.',
    ],
    diagnosis:
      'Evaluación veterinaria morfológica de la oclusión mandibular y pruebas de función hepática si se sospecha causa metabólica interna.',
    treatment:
      'El tratamiento debe establecerlo un veterinario según la causa y condición del ave. Requiere limado y recorte anatómico profesional con instrumental rotatorio específico. NUNCA se debe cortar el pico en casa con alicates o tijeras comunes, ya que existe un gran riesgo de fractura del hueso mandibular o hemorragia profusa.',
    whenToSeeVet:
      'Acudir al veterinario para un limado técnico en cuanto se aprecie que el pico superior o inferior sobrepasa la longitud habitual y entorpece la ingestión de comida.',
    verificationStatus: 'verified',
    verificationNotes: 'Manejo ortopédico y podal básico de la clínica aviar especializada.',
    isEmergency: false,
    tags: ['pico', 'ranfoteca', 'sobrecrecimiento', 'limado', 'maloclusión', 'patas y pico'],
    sources: [
      'BSAVA Manual of Psittacine Birds',
      'Clinical Avian Medicine (Harrison & Lightfoot)',
    ],
    relatedConditions: ['acaros-cera-sarna', 'pododermatitis-clavo'],
    relatedTopics: [
      {
        title: 'Cuidado de Patas y Pico',
        sectionId: 'patas-pico',
        description: 'Anatomía y desgaste natural de la ranfoteca.',
      },
    ],
    technicalDetails: {
      pathogen: 'Mecánico / Metabólico hepático / Secuela post-parasitaria',
      transmission: 'No infeccioso directo',
      incubation: 'Crónico y continuo',
      clinicalDifferential: ['PBFD (Circovirus)', 'Neoplasia de la ranfoteca', 'Traumatismo con luxación del cuadrado'],
    },
  },
];

export const WARNING_SIGNS_DATA = [
  {
    id: 'embolamiento-continuo',
    title: 'Plumaje Inflado / Embolamiento Continuo',
    severity: 'urgente',
    description:
      'El ave mantiene las plumas ahuecadas para atrapar una capa de aire caliente y no perder temperatura corporal. En aves es el signo cardinal de malestar, dolor, fiebre o debilidad sistémica.',
    whatToLookFor:
      'Periquito con forma de "bola", que apenas se mueve, con los ojos entrecerrados y colocado en una zona tranquila de la jaula fuera de las horas normales de sueño.',
    actionRequired: 'Aislar en jaula hospital con calor suave y acudir al veterinario sin demora.',
  },
  {
    id: 'balanceo-cola',
    title: 'Balanceo Rítmico de la Cola ("Tail Bobbing")',
    severity: 'urgente',
    description:
      'La cola sube y baja de manera sincronizada con cada inspiración y espiración. Denota un sobreesfuerzo importante de los músculos abdominales para ventilar los sacos aéreos.',
    whatToLookFor:
      'Movimiento oscilante continuo de la cola acompañado a veces de chasquidos respiratorios o alas ligeramente separadas.',
    actionRequired: 'Signo claro de dificultad respiratoria. Mantener reposo absoluto y consulta veterinaria inmediata.',
  },
  {
    id: 'fondo-jaula',
    title: 'Permanencia en el Suelo de la Jaula',
    severity: 'emergencia',
    description:
      'Por instinto de supervivencia como presas, los periquitos hacen todo lo posible por mantenerse en lo alto. Si el ave baja al fondo y no sube a las perchas, su estado de debilidad es muy avanzado.',
    whatToLookFor: 'Periquito postrado sobre la rejilla o bandeja, con poca fuerza de agarre en patas.',
    actionRequired: 'EMERGENCIA MÉDICA VITAL. Proteger de corrientes, calor suave y traslado urgente al veterinario.',
  },
  {
    id: 'cambio-heces',
    title: 'Alteraciones Drásticas en las Heces',
    severity: 'alta',
    description:
      'Las deyecciones normales se componen de 3 partes: hez sólida redondeada verde/marrón, uratos blancos pastosos y orina líquida transparente. La mezcla homogénea líquida o semillas enteras revelan enfermedad.',
    whatToLookFor:
      'Semillas enteras sin digerir (megabacterias), heces verde brillante fluorescente (compromiso hepático/psitacosis) o diarrea líquida continua.',
    actionRequired: 'Recoger muestras de heces frescas en papel vegetal y llevarlas a la consulta veterinaria.',
  },
  {
    id: 'regurgitacion-vomito',
    title: 'Vómitos o Mucosidad en la Cabeza',
    severity: 'alta',
    description:
      'Diferente de la regurgitación afectiva (en la que el ave ofrece granos limpios a su pareja o espejo), el vómito patológico va acompañado de sacudidas laterales de cabeza que esparcen mucosidad viscosa sobre las plumas de la frente.',
    whatToLookFor: 'Plumas de la coronilla y frente endurecidas, pegadas o manchadas de comida regurgitada.',
    actionRequired: 'Indica irritación del buche, proventrículo o infección por cándidas/megabacterias.',
  },
  {
    id: 'secreciones-ojos-narina',
    title: 'Secreciones Oculonasales y Estornudos con Líquido',
    severity: 'alta',
    description:
      'Los periquitos estornudan ocasionalmente durante el acicalamiento para limpiar el polvo de pluma. Sin embargo, estornudos con moco húmedo o fosas nasales taponadas son señal de infección respiratoria.',
    whatToLookFor: 'Cera húmeda, plumas sobre la cera de color marrón sucio, párpados hinchados o legañas.',
    actionRequired: 'No aplicar colirios humanos. Evaluación veterinaria para tratamiento específico.',
  },
  {
    id: 'cambio-peso-quillado',
    title: 'Pérdida Rápida de Peso / Esternón Afilado',
    severity: 'urgente',
    description:
      'Bajo el plumaje inflado suele ocultarse un cuerpo extremadamente delgado. Al palpar el pecho, el hueso del esternón (quilla) se siente cortante como un cuchillo.',
    whatToLookFor:
      'Pérdida de masa muscular pectoral (músculos de vuelo atrofiados) a pesar de ver al ave muchas horas en el comedero.',
    actionRequired: 'Pesar semanalmente al periquito con báscula de cocina digital en gramos para monitorización precoz.',
  },
  {
    id: 'cambio-comportamiento',
    title: 'Apatía y Cese de Vocalizaciones',
    severity: 'media',
    description:
      'Un periquito sano es curioso, activo, parlanchín y sociable. El silencio repentino, desinterés por el entorno y somnolencia durante el día indican malestar inicial.',
    whatToLookFor: 'Falta de respuesta a la voz de su cuidador, sin trinos mañaneros ni vuelos habituales.',
    actionRequired: 'Observar durante 24 horas y revisar si existen otros signos tempranos asociados.',
  },
];

export const PREVENTION_PILLARS_DATA = [
  {
    id: 'higiene',
    title: '1. Higiene Rigurosa y Bioseguridad',
    icon: 'Sparkles',
    summary: 'La desinfección metódica reduce en un 80% las patologías bacterianas y parasitarias.',
    points: [
      'Limpiar y cambiar el papel de la bandeja inferior cada 2 o 3 días para evitar la proliferación de hongos en heces húmedas.',
      'Lavar los bebederos a diario con agua tibia y cepillo exclusivo antes de renovar el agua.',
      'Desinfectar perchas y barrotes mensualmente con productos seguros para aves y dejar secar por completo al sol.',
    ],
  },
  {
    id: 'alimentacion',
    title: '2. Alimentación Balanceada y Micronutrientes',
    icon: 'Apple',
    summary: 'La base de una fuerte inmunidad reside en una dieta que supere la simple mezcla de semillas.',
    points: [
      'Combinar mixtura de semillas de calidad o pienso extrusionado específico con hortalizas frescas diarias (acelga, espinaca, zanahoria, brócoli).',
      'Garantizar acceso constante a fuentes de minerales asimilables: bloque mineral con yodo y hueso de jibia.',
      'Eliminar de la dieta azúcares, barritas industriales con miel procesada y grasas excesivas.',
    ],
  },
  {
    id: 'agua',
    title: '3. Calidad del Agua y Baño',
    icon: 'Droplets',
    summary: 'El agua es el principal vector de microorganismos si no se controla adecuadamente.',
    points: [
      'Utilizar agua potable de mineralización débil o del grifo de buena calidad, renovándola cada 24 horas.',
      'Ofrecer bañera con agua fresca 2 o 3 veces por semana para favorecer la limpieza de la pluma y retirar la bañera tras 1 hora para evitar que beban de ella si está sucia.',
      'Evitar medicar en el agua sin prescripción; altera el sabor y puede provocar deshidratación severa.',
    ],
  },
  {
    id: 'cuarentena',
    title: '4. Protocolo Estricto de Cuarentena (30 Días)',
    icon: 'ShieldCheck',
    summary: 'Aislar aves nuevas previene la entrada de patógenos silenciosos al aviario familiar.',
    points: [
      'Mantener a cualquier periquito recién llegado en una jaula independiente en una habitación diferente durante un mínimo de 30 días.',
      'Manipular y alimentar en último lugar a las aves en cuarentena para no transportar fómites.',
      'Observar durante este tiempo la calidad de sus excrementos, respiración y plumaje.',
    ],
  },
  {
    id: 'entorno',
    title: '5. Entorno Seguro y Calidad del Aire',
    icon: 'Wind',
    summary: 'Los sacos aéreos de los periquitos son hipersensibles a toxinas y corrientes.',
    points: [
      'Jaula ubicada lejos de corrientes de aire directas y de fuentes de calor o aire acondicionado.',
      'Prohibición absoluta de fumar, encender velas aromáticas, inciensos o cocinar con teflón cerca del ave.',
      'Asegurar entre 10 y 12 horas diarias de oscuridad y silencio nocturno para un descanso reparador.',
    ],
  },
  {
    id: 'parasitos-control',
    title: '6. Control y Vigilancia Parasitaria',
    icon: 'Bug',
    summary: 'Revisión periódica de puntos anatómicos clave donde proliferan ácaros.',
    points: [
      'Inspeccionar semanalmente el estado de la cera, ranfoteca del pico y las escamas de las patas.',
      'Comprobar la ausencia de costras o porosidades blanquecinas sospechosas de Knemidokoptes.',
      'Consultar al veterinario sobre protocolos preventivos antiparasitarios semestrales.',
    ],
  },
  {
    id: 'observacion',
    title: '7. Observación Diaria Rutinaria',
    icon: 'Eye',
    summary: '5 minutos de observación diaria permiten detectar enfermedades antes de que sea tarde.',
    points: [
      'Fijarse en la vivacidad de la mirada, la postura erguida sobre la percha y el tono muscular.',
      'Comprobar que coma y beba con normalidad sin derrochar compulsivamente las semillas.',
      'Escuchar posibles ruidos o chasquidos durante los momentos de descanso.',
    ],
  },
  {
    id: 'veterinario-revision',
    title: '8. Revisiones Veterinarias Preventivas',
    icon: 'Stethoscope',
    summary: 'El chequeo profesional periódico es la mejor herramienta de medicina preventiva.',
    points: [
      'Realizar un chequeo inicial de bienvenida con un veterinario especialista en animales exóticos.',
      'Efectuar análisis coprológico preventivo anual para descartar parásitos microscópicos o megabacterias.',
      'Tener localizadas de antemano las clínicas veterinarias de urgencia con servicio de aves 24h.',
    ],
  },
];
