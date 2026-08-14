import { Article, GlossaryTerm } from '../types';

export const ENCYCLOPEDIA_ARTICLES: Article[] = [
  {
    id: 'historia-taxonomia',
    slug: 'historia-taxonomia',
    title: 'Origen, Historia y Taxonomía del Periquito Australiano',
    subtitle: 'De las sabanas áridas de Australia a los hogares y aviarios de todo el mundo.',
    category: 'historia',
    summary: 'Descubierto formalmente para la ciencia por George Shaw en 1805 y clasificado por John Gould en 1840, el Melopsittacus undulatus es una de las especies de psitácidas más exitosas y estudiadas del planeta.',
    content: `### Origen y Clasificación Científica
El periquito australiano (*Melopsittacus undulatus*) pertenece al orden **Psittaciformes** y a la familia **Psittaculidae**. Su nombre genérico proviene del griego *melos* (canto o melodía) y *psittakos* (loro o perico); mientras que su epíteto específico *undulatus* significa "ondulado", en alusión directa al patrón de líneas negras que recorren su cabeza, nuca y alas.

### Hábitat Natural en Australia
En libertad, habita las extensas llanuras interiores, estepas semiáridas y zonas de pastizales del interior de Australia (el *Outback*). Viven en bandadas nómadas compuestas por docenas o miles de individuos que viajan constantemente siguiendo las lluvias estacionales y la maduración de semillas de gramíneas silvestres (*Spinifex*, *Triodia* y *Astrebla*).

### Llegada a Europa y la Primera Mutación
En 1840, el célebre ornitólogo británico **John Gould** introdujo los primeros ejemplares vivos en Inglaterra. Hacia 1870, en Bélgica apareció la primera mutación documentada en cautiverio: la **Línea Azul**, marcando el inicio de más de un siglo y medio de fascinante selección genética y crianza avícola especializada.`,
    readTimeMinutes: 5,
    tags: ['Historia', 'Taxonomía', 'Australia', 'John Gould', 'Melopsittacus'],
    verificationStatus: 'verified'
  },
  {
    id: 'anatomia-morfologia',
    slug: 'anatomia-morfologia',
    title: 'Anatomía Externa y Morfología del Periquito',
    subtitle: 'Guía detallada de las partes del cuerpo, plumas de vuelo y adaptaciones físicas.',
    category: 'anatomia',
    summary: 'Estructura anatómica externa completa: cera nasal, máscara, manchas gulares, alas, timoneras y patas zigodáctilas adaptadas a la vida arborícola y terrestre.',
    content: `### Partes Principales de la Cabeza
- **Cera (Cere):** Membrana carnosa sin plumas situada en la base superior del pico que rodea los orificios nasales (narinas). Es el indicador principal de sexo y madurez hormonal.
- **Pico:** Estructura córnea queratinizada. El pico superior (rinoteca) es móvil y curvo, mientras que el inferior (gnatoteca) encaja por dentro como una cizalla para pelar semillas con precisión milimétrica.
- **Máscara:** Área frontal de la cara que abarca frente, mejillas y garganta. En ejemplares clásicos silvestres es de color amarillo puro (o blanco en línea azul).
- **Manchas Gulares (Throat spots):** Manchas redondas negras situadas a ambos lados del cuello (típicamente 6 en ejemplares ancestrales y de estándar).
- **Gulares / Manchas de la mejilla (Cheek patches):** Plumas violáceas, azules o plateadas situadas debajo de los ojos.

### Sistema Alar y Plumaje de Vuelo
- **Remeras Primarias (10 plumas):** Insertadas en la mano (metacarpo). Proporcionan el empuje durante el vuelo rápido.
- **Remeras Secundarias (6 plumas):** Insertadas en el antebrazo (cúbito). Proporcionan sustentación.
- **Tectrices o Coberteras:** Plumas de cobertura que recubren y aerodinamizan las alas y el dorso.
- **Timoneras (Plumas de la cola):** 12 plumas rectoras, de las cuales las 2 centrales son notablemente largas y sirven como timón aéreo.

### Patas Zigodáctilas
Las patas presentan disposición **zigodáctila**: dos dedos orientados hacia adelante (dedos II y III) y dos hacia atrás (dedos I y IV). Esta anatomía les confiere un agarre excepcional para trepar por ramas y manipular espigas.`,
    readTimeMinutes: 6,
    tags: ['Anatomía', 'Morfología', 'Pico', 'Cera', 'Alas', 'Zigodáctilo'],
    verificationStatus: 'verified'
  },
  {
    id: 'estructura-del-plumaje',
    slug: 'estructura-del-plumaje',
    title: 'La Física y Química del Color: Estructura del Plumaje',
    subtitle: 'Por qué no existe el pigmento verde en los periquitos y cómo la luz crea sus colores.',
    category: 'plumaje',
    summary: 'El color del periquito no proviene de pigmentos verdes, sino de la combinación óptica entre la dispersión de luz azul (Efecto Rayleigh) y el pigmento amarillo (Psitacina).',
    content: `### Los Dos Pilares del Color
A diferencia de otros animales que sintetizan pigmento verde directamente, el color verde del periquito australiano es un **fenómeno biofísico mixto** compuesto por:

1. **Pigmento Químico:**
   - **Psitacinas (Carotenoides aviares):** Pigmentos amarillos insolubles depositados en la corteza externa de la pluma.
   - **Eumelanina:** Pigmento negro/marrón depositado en el núcleo central de las bárbulas.

2. **Color Estructural (Dispersión de Luz Rayleigh / Tyndall):**
   - La capa celular esponjosa que rodea el núcleo de melanina refleja selectivamente las longitudes de onda corta (azul), mientras que la melanina de fondo absorbe el resto de la luz.

### La Ecuación Visual
- **Luz Azul Estructural + Psitacina Amarilla = Verde Silvestre (Césped)**
- **Luz Azul Estructural + Ausencia de Psitacina = Azul Cielo**
- **Ausencia de Luz Azul (sin melanina) + Psitacina Amarilla = Lutino (Amarillo Puro)**
- **Ausencia de Luz Azul + Ausencia de Psitacina = Albino (Blanco Puro)**`,
    readTimeMinutes: 5,
    tags: ['Plumaje', 'Física del Color', 'Psitacina', 'Melanina', 'Rayleigh'],
    verificationStatus: 'verified'
  },
  {
    id: 'sexo-y-edad',
    slug: 'sexo-y-edad',
    title: 'Guía Definitiva de Identificación de Sexo y Edad',
    subtitle: 'Aprende a diferenciar machos de hembras y jóvenes de adultos con precisión visual.',
    category: 'edad_sexo',
    summary: 'Método visual comprobado para determinar el sexo mediante el color y textura de la cera nasal, y la edad mediante las ondulaciones de la frente y el anillo de iris.',
    content: `### Determinación del Sexo por la Cera Nasal

#### Machos:
- **Adulto clásico:** Cera de color **azul brillante uniforme** e intenso (a partir de los 6-8 meses).
- **Macho joven (menor de 4 meses):** Cera de color **rosa uniforme, lila o violáceo** sin blanco alrededor de los orificios.
- **Machos en mutaciones especiales (Inos, Pío Recesivo, Fallow, Lacewing):** La cera **NUNCA se vuelve azul** en toda su vida; permanece siempre de color **rosa púrpura translúcido brillante**.

#### Hembras:
- **Hembra en celo (actividad reproductora):** Cera de color **marrón oscuro o chocolate rugoso y engrosado**, que puede descamarse al terminar el ciclo hormonal.
- **Hembra fuera de celo (reposo):** Cera **blanquecina, celeste muy pálida o beige claro**, frecuentemente con un halo blanquecino nítido alrededor de las narinas.
- **Hembra joven:** Cera blanquecina o azul muy tenue con **círculos blancos bien definidos alrededor de los orificios nasales**.

### Determinación de la Edad

1. **Ondulaciones de la Frente:**
   - **Jóvenes (< 3-4 meses):** Las líneas negras onduladas bajan hasta la misma base del pico (cera).
   - **Adultos (> 4-5 meses tras primera muda):** La frente se despeja por completo dejando una "gorra" limpia amarilla o blanca.

2. **Anillo de Iris del Ojo:**
   - **Jóvenes (< 4 meses):** Ojo completamente negro sólido ("ojo de botón").
   - **Subadultos (4 a 8 meses):** Comienza a perfilarse un aro grisáceo tenue alrededor de la pupila.
   - **Adultos (> 8-12 meses):** Anillo de iris **blanco nítido o marfil** bien definido alrededor de la pupila (excepto en Píos Recesivos y Fallow Alemán que conservan ojo oscuro).`,
    readTimeMinutes: 7,
    tags: ['Sexo', 'Edad', 'Cera', 'Iris', 'Muda', 'Identificación'],
    verificationStatus: 'verified'
  },
  {
    id: 'comportamiento-comunicacion',
    slug: 'comportamiento-comunicacion',
    title: 'Comportamiento, Etología y Comunicación',
    subtitle: 'Comprende los sonidos, posturas corporales y necesidades sociales del periquito.',
    category: 'comportamiento',
    summary: 'Aprende a interpretar el lenguaje corporal: desde el crujido de pico relajado antes de dormir hasta los graznidos de alarma y el acicalamiento mutuo.',
    content: `### Lenguaje Sonoro y Vocalizaciones
- **Chirrido melodioso continuo (Gorjeo de felicidad):** Indica bienestar, seguridad y relajación dentro del grupo.
- **Chasquido o crujido de pico al anochecer:** Frotamiento rítmico del pico superior contra el inferior antes de dormir; señal inequívoca de relajación profunda y satisfacción.
- **Piar agudo y fuerte repetitivo (Llamada de contacto):** Utilizado para ubicar a su pareja o compañeros de bandada si se pierden de vista.
- **Graznido áspero y estridente (Alarma / Enfado):** Advertencia de peligro inminente, disputa territorial o rechazo a la proximidad de otro congénere.

### Lenguaje Corporal y Posturas
- **Plumaje ligeramente esponjado sobre una sola pata:** Máximo nivel de confort, descanso y tranquilidad térmica.
- **Estiramiento coordinado de ala y pata hacia atrás:** Estiramiento de yoga aviar saludable que realizan tras una siesta.
- **Plumaje pegado al cuerpo, cuello estirado y ojos muy abiertos:** Estado de alerta máxima, miedo o incertidumbre.
- **Embolado constante sobre dos patas con ojos semicerrados:** **SIGNO DE ALARMA DE ENFERMEDAD.** Un ave que permanece inflada todo el día necesita atención veterinaria inmediata.`,
    readTimeMinutes: 6,
    tags: ['Comportamiento', 'Etología', 'Comunicación', 'Lenguaje Corporal', 'Bienestar'],
    verificationStatus: 'verified'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Alelo',
    definition: 'Cada una de las formas alternativas que puede tener un mismo gen en un locus cromosómico.',
    category: 'genetica'
  },
  {
    term: 'Autosómico',
    definition: 'Gen o mutación localizado en cualquiera de los cromosomas no sexuales. Se hereda con la misma probabilidad en machos y hembras.',
    category: 'genetica'
  },
  {
    term: 'Cera (Cere)',
    definition: 'Zona carnosa sin plumas en la base superior del pico donde se ubican las narinas; clave para determinar sexo y estado hormonal.',
    category: 'morfologia'
  },
  {
    term: 'Crossover (Sobrecruzamiento)',
    definition: 'Intercambio de material genético entre cromosomas homólogos durante la meiosis, permitiendo la unión de mutaciones ligadas al sexo como el Lacewing.',
    category: 'genetica'
  },
  {
    term: 'Doble Factor (DF)',
    definition: 'Ejemplar que posee dos copias del mismo alelo mutado dominante o codominante (homocigoto para dicho gen).',
    category: 'genetica'
  },
  {
    term: 'Eumelanina',
    definition: 'Pigmento oscuro granular de color negro o marrón responsable de las marcas alares, ondulaciones y absorción de luz.',
    category: 'genetica'
  },
  {
    term: 'Fenotipo',
    definition: 'La manifestación física y visual de los caracteres genéticos de un individuo (lo que se ve a simple vista).',
    category: 'genetica'
  },
  {
    term: 'Genotipo',
    definition: 'La constitución genética completa de un individuo, incluyendo los genes visibles y los genes portados de forma oculta.',
    category: 'genetica'
  },
  {
    term: 'Heterocigoto (Portador / Split)',
    definition: 'Individuo que posee dos alelos diferentes para un gen determinado. En mutaciones recesivas, porta el gen sin mostrarlo visualmente.',
    category: 'genetica'
  },
  {
    term: 'Homocigoto',
    definition: 'Individuo que posee dos copias idénticas del mismo alelo en un locus específico.',
    category: 'genetica'
  },
  {
    term: 'Ligado al Sexo (Sex-linked)',
    definition: 'Mutaciones localizadas en el cromosoma sexual X. En periquitos, los machos son XX y las hembras XY.',
    category: 'genetica'
  },
  {
    term: 'Locus (plural Loci)',
    definition: 'La posición física fija que ocupa un gen determinado dentro de un cromosoma.',
    category: 'genetica'
  },
  {
    term: 'Manchas Gulares (Throat spots)',
    definition: 'Puntos redondos de plumaje negro situados simétricamente a los lados del cuello debajo de la máscara.',
    category: 'morfologia'
  },
  {
    term: 'Psitacina',
    definition: 'Familia exclusiva de pigmentos biológicos amarillos y rojos sintetizados por las psitácidas.',
    category: 'genetica'
  },
  {
    term: 'Remeras (Remiges)',
    definition: 'Plumas largas y rígidas de las alas especializadas en el vuelo (primarias y secundarias).',
    category: 'morfologia'
  },
  {
    term: 'Simple Factor (SF)',
    definition: 'Ejemplar que posee una sola copia de un gen dominante o codominante (heterocigoto para ese gen).',
    category: 'genetica'
  },
  {
    term: 'Timoneras (Rectrices)',
    definition: 'Plumas rectoras de la cola que actúan como timón de dirección durante el vuelo.',
    category: 'morfologia'
  },
  {
    term: 'Zigodáctilo',
    definition: 'Disposición anatómica de los dedos de las patas con dos dedos hacia adelante y dos hacia atrás.',
    category: 'morfologia'
  }
];
