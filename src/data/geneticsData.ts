import {
  Allele,
  InheritanceRule,
  Combination,
  GeneticsTerm,
  PunnettSquareData,
  VerificationStatus
} from '../types';

// ==========================================
// 1. DATASET DE ALELOS (ALLELES)
// ==========================================
export const ALLELES_DATA: Allele[] = [
  {
    id: 'wild_base_green',
    symbol: 'B+',
    name: 'Verde Ancestral (Silvestre)',
    locus: 'Locus B (Base de Color)',
    dominance: 'wild_type',
    description: 'Alelo silvestre responsable de la producción y depósito normal de psitacina (pigmento amarillo lipocromo) en la corteza de la pluma. Combinado con el azul estructural produce el verde.',
    wildTypeComparison: 'Es el alelo ancestral dominante sobre todas las mutaciones del locus B.',
    notes: 'Dominante completo sobre el alelo azul (b) y codominante/complejo frente a variedades de cara amarilla.',
    sources: ['WBO Standard of Perfection', 'Vriends, M. (1992). The Budgerigar Handbook.'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_base_blue',
    symbol: 'b',
    name: 'Azul (Blue 1)',
    locus: 'Locus B (Base de Color)',
    dominance: 'recessive',
    description: 'Mutación recesiva que inhibe por completo la síntesis y depósito de psitacinas amarillas. Al quedar únicamente la dispersión Rayleigh de la zona esponjosa y la melanina interna, el ave se observa de color azul.',
    wildTypeComparison: 'Recesivo frente al alelo silvestre B+.',
    notes: 'Requiere homocigosis (b/b) para manifestarse en el fenotipo.',
    sources: ['Taylor & Warner (1986). Genetics for Bird Breeders.'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_base_yellowface_1',
    symbol: 'b^yf1',
    name: 'Cara Amarilla Tipo I (Mutación II / Creamface)',
    locus: 'Locus B (Base de Color)',
    dominance: 'recessive',
    description: 'Alelo alélico al azul que permite una deposición mínima y restringida de psitacina exclusivamente en la máscara facial y rectrices en ejemplares de línea azul.',
    wildTypeComparison: 'Recesivo frente a B+, codominante frente a b.',
    notes: 'En doble factor (b^yf1 / b^yf1) la cara amarilla puede desaparecer o aclararse (mutación de tipo supresión).',
    sources: ['Daniels, T. (1981). The Yellow-faced Blue Budgerigar.'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_base_yellowface_2',
    symbol: 'b^yf2',
    name: 'Cara Amarilla Tipo II (Goldenface / Cara Dorada)',
    locus: 'Locus B (Base de Color)',
    dominance: 'recessive',
    description: 'Alelo que restaura la psitacina amarilla intensamente en la máscara y, tras la primera muda, se difunde por todo el cuerpo azul produciendo un tono turquesa o verde marino brillante.',
    wildTypeComparison: 'Recesivo frente a B+, dominante incompleto frente a b.',
    notes: 'En heterocigosis con azul (b^yf2 / b) la difusión es máxima; en homocigosis (b^yf2 / b^yf2) el cuerpo suele retener más azul puro.',
    sources: ['WBO Colour Standards', 'Rutgers, A. (1976). Budgerigar Breeding.'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_dark_factor',
    symbol: 'D',
    name: 'Factor de Oscuridad',
    locus: 'Locus D (Densidad Melánica)',
    dominance: 'incomplete_dominant',
    description: 'Alelo semidominante autosómico que aumenta el grosor de la capa esponjosa y la densidad de gránulos de eumelanina, absorbiendo más luz y oscureciendo el tono corporal.',
    wildTypeComparison: 'Semidominante sobre el alelo silvestre d+ (sin oscuridad).',
    notes: '1 dosis (D/d+) = Factor Simple (Laurel / Cobalto); 2 dosis (D/D) = Doble Factor (Oliva / Malva).',
    sources: ['Taylor & Warner (1986)', 'WBO Guidelines'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_grey_factor',
    symbol: 'G',
    name: 'Factor Gris Inglés / Australiano',
    locus: 'Locus G (Estructura de Bárbula)',
    dominance: 'dominant',
    description: 'Alelo dominante autosómico que modifica la refracción óptica de la queratina en la zona medular de las bárbulas, suprimiendo la dispersión Rayleigh del azul y volviendo el plumaje gris o verde grisáceo.',
    wildTypeComparison: 'Dominante completo sobre el alelo silvestre g+.',
    notes: 'Un solo factor (G/g+) basta para la expresión visual completa. Convierte las manchas gulares en gris plomo.',
    sources: ['WBO Colour Standards'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_violet_factor',
    symbol: 'V',
    name: 'Factor Violeta',
    locus: 'Locus V (Modificador Óptico)',
    dominance: 'incomplete_dominant',
    description: 'Alelo semidominante autosómico que desplaza la longitud de onda reflejada hacia el espectro ultravioleta/violeta. Su máxima expresión ocurre en combinación con 1 factor de oscuridad (Azul Cobalto Violeta).',
    wildTypeComparison: 'Semidominante sobre v+.',
    notes: 'Produce violetas visuales intensos en combinación Cobalt + Violeta.',
    sources: ['Daniels, T. (1983). The Violet Budgerigar.'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_sex_opalino',
    symbol: 'Z^op',
    name: 'Opalino (Opaline)',
    locus: 'Cromosoma Z (Locus Op)',
    dominance: 'recessive',
    description: 'Mutación recesiva ligada al sexo que redistribuye la melanina de las alas dejando una "V" dorsal limpia del color del cuerpo y transfiere el color corporal al fondo de las cobertoras alares.',
    wildTypeComparison: 'Recesivo ligado al sexo frente al alelo silvestre Z+.',
    notes: 'Machos requieren dos alelos (Z^op/Z^op) para ser visuales; hembras requieren uno solo (Z^op/W).',
    sources: ['WBO Standard of Perfection'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_sex_cinnamon',
    symbol: 'Z^cin',
    name: 'Canela (Cinnamon)',
    locus: 'Cromosoma Z (Locus Cin)',
    dominance: 'recessive',
    description: 'Mutación recesiva ligada al sexo que detiene la síntesis de melanina en fase marrón (feomelanina/eumelanina oxidada incompleta), tornando el dibujo negro en marrón canela cálido y las patas y pico más claros.',
    wildTypeComparison: 'Recesivo ligado al sexo frente a Z+.',
    notes: 'Los polluelos nacen con ojos de color ciruela oscuro visible en los primeros días.',
    sources: ['Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_sex_ino',
    symbol: 'Z^ino',
    name: 'Ino (Lutino / Albino)',
    locus: 'Cromosoma Z (Locus Ino)',
    dominance: 'recessive',
    description: 'Mutación recesiva ligada al sexo que bloquea por completo la síntesis de eumelanina en plumas, ojos y piel. En línea verde produce el Lutino (amarillo puro con ojos rojos); en línea azul produce el Albino (blanco puro con ojos rojos).',
    wildTypeComparison: 'Recesivo ligado al sexo frente a Z+; epistático sobre la mayoría de patrones melánicos.',
    notes: 'Ojos rojos brillantes con iris blanco en adultos; cera de machos adultos permanece rosa violácea.',
    sources: ['WBO Colour Standards'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_autosomal_spangle',
    symbol: 'Sp',
    name: 'Perlado (Spangle)',
    locus: 'Locus Sp (Distribución Melánica Alar)',
    dominance: 'incomplete_dominant',
    description: 'Mutación autosómica semidominante que invierte el patrón melánico en las plumas alares, concentrando el pigmento oscuro únicamente en un ribete exterior fino y dejando el centro claro.',
    wildTypeComparison: 'Semidominante sobre el alelo silvestre sp+.',
    notes: 'Perlado SF (Sp/sp+) muestra el diseño perlado; Perlado DF (Sp/Sp) suprime totalmente las marcas, produciendo un periquito blanco o amarillo monocromático con ojos negros.',
    sources: ['WBO Standard of Perfection (1990)'],
    verificationStatus: 'verified'
  },
  {
    id: 'mut_autosomal_recessive_pied',
    symbol: 's',
    name: 'Pío Recesivo (Danés / Harlequin)',
    locus: 'Locus S (Manchado Simétrico)',
    dominance: 'recessive',
    description: 'Mutación autosómica recesiva que produce un veteado irregular de manchas melánicas y lipocrómicas, conservando ojos oscuros sin anillo de iris en la adultez y cera rosa carnosa en machos.',
    wildTypeComparison: 'Recesivo frente al alelo silvestre s+.',
    notes: 'Ambos progenitores deben portar el alelo para obtener ejemplares visuales.',
    sources: ['Dunstan, M. (1985). Pied Budgerigars.'],
    verificationStatus: 'verified'
  }
];

// ==========================================
// 2. DATASET DE REGLAS DE HERENCIA
// ==========================================
export const INHERITANCE_RULES_DATA: InheritanceRule[] = [
  {
    id: 'rule_autosomal_dominant',
    slug: 'autosomica-dominante',
    type: 'autosomal_dominant',
    name: 'Herencia Autosómica Dominante Completa',
    chromosomeType: 'autosomal',
    description: 'El gen mutado se encuentra en un cromosoma no sexual (autosómico) y solo requiere UNA sola copia (1 alelo) para expresarse visualmente al 100% en el fenotipo.',
    canMaleCarry: false,
    canFemaleCarry: false,
    sfExpression: 'Expresión visual completa (Factor Simple). Visualmente idéntico o muy similar al Doble Factor.',
    dfExpression: 'Expresión visual completa (Doble Factor). Transmite el gen al 100% de toda su descendencia.',
    malePossibleGenotypes: ['G/G (Gris DF)', 'G/g+ (Gris SF)', 'g+/g+ (No gris / Común)'],
    femalePossibleGenotypes: ['G/G (Gris DF)', 'G/g+ (Gris SF)', 'g+/g+ (No gris / Común)'],
    breedingOutcomesSummary: [
      'Dominante SF × Común → 50% Dominante SF, 50% Comunes (sin importar el sexo).',
      'Dominante DF × Común → 100% Dominante SF (todos los hijos heredan el gen).',
      'Dominante SF × Dominante SF → 25% Dominante DF, 50% Dominante SF, 25% Comunes.'
    ],
    rules: [
      'No existen ejemplares portadores de una mutación dominante: si tienen el gen, se ve.',
      'Al menos uno de los progenitores debe ser visualmente dominante para que nazca descendencia dominante.',
      'La herencia es exactamente igual en machos y hembras.'
    ],
    examples: ['Factor Gris (G)', 'Pío Dominante Australiano (bandado)', 'Pío Dominante Continental (clearflight)'],
    sources: ['WBO Breeding Rules', 'Genetics for Budgerigar Breeders (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'rule_autosomal_recessive',
    slug: 'autosomica-recesiva',
    type: 'autosomal_recessive',
    name: 'Herencia Autosómica Recesiva',
    chromosomeType: 'autosomal',
    description: 'El gen mutado se encuentra en un autosoma y requiere DOS copias (homocigosis) para manifestarse en el plumaje. Si el ave posee solo 1 copia, el alelo silvestre lo oculta, convirtiendo al ave en portador.',
    canMaleCarry: true,
    canFemaleCarry: true,
    sfExpression: 'No se expresa visualmente (Portador / Split). El ave tiene aspecto silvestre o normal.',
    dfExpression: 'Expresión visual completa de la mutación.',
    malePossibleGenotypes: ['b/b (Azul visual)', 'B+/b (Verde portador de azul)', 'B+/B+ (Verde puro)'],
    femalePossibleGenotypes: ['b/b (Azul visual)', 'B+/b (Verde portadora de azul)', 'B+/B+ (Verde pura)'],
    breedingOutcomesSummary: [
      'Visual × Visual → 100% Visuales.',
      'Visual × Portador → 50% Visuales, 50% Portadores.',
      'Portador × Portador → 25% Visuales, 50% Portadores, 25% Puros no portadores.',
      'Visual × Puro → 100% Portadores obligados (ninguno visual).',
      'Portador × Puro → 50% Portadores (no identificables a simple vista), 50% Puros.'
    ],
    rules: [
      'Tanto machos como hembras pueden ser portadores no visuales.',
      'Para que nazca un polluelo visual, es matemáticamente indispensable que AMBOS progenitores aporten el alelo (ambos portadores o visuales).',
      'Las mutaciones recesivas pueden permanecer ocultas durante generaciones enteras.'
    ],
    examples: ['Azul (Línea Azul)', 'Pío Recesivo (Danés)', 'Fallow (Ojos Rojos Plumaje Oscuro)', 'Diluido', 'Alas Claras', 'Alas Grises', 'Blackwing'],
    sources: ['WBO Colour Standards', 'Budgerigar Genetics Manual'],
    verificationStatus: 'verified'
  },
  {
    id: 'rule_sex_linked',
    slug: 'ligada-al-sexo',
    type: 'sex_linked',
    name: 'Herencia Recesiva Ligada al Sexo (Cromosoma Z)',
    chromosomeType: 'sex_linked',
    description: 'El gen mutado se aloja exclusivamente en el cromosoma sexual Z. En aves, los machos son homogaméticos (ZZ) y las hembras son heterogaméticas (ZW). Como el cromosoma W no porta información de color, una hembra expresa cualquier gen presente en su único cromosoma Z.',
    canMaleCarry: true,
    canFemaleCarry: false,
    sfExpression: 'En machos: Portador no visual (Z^mut / Z+). En hembras: NO existe el estado portador (Z^mut / W es SIEMPRE visual).',
    dfExpression: 'Macho visual homocigoto (Z^mut / Z^mut).',
    malePossibleGenotypes: ['Z^op / Z^op (Macho Opalino visual)', 'Z^op / Z+ (Macho portador de opalino)', 'Z+ / Z+ (Macho clásico puro)'],
    femalePossibleGenotypes: ['Z^op / W (Hembra Opalina visual)', 'Z+ / W (Hembra clásica pura)'],
    breedingOutcomesSummary: [
      'Macho Visual × Hembra Clásica → 100% Hijas Hembras VISUALES, 100% Hijos Machos PORTADORES.',
      'Macho Portador × Hembra Clásica → 50% Hijas Hembras Visuales, 50% Hijas Hembras Clásicas; 50% Hijos Machos Portadores, 50% Machos Clásicos.',
      'Macho Clásico × Hembra Visual → 100% Hijas Hembras CLÁSICAS (no portan nada), 100% Hijos Machos PORTADORES.',
      'Macho Portador × Hembra Visual → 50% Hembras Visuales, 50% Hembras Clásicas; 50% Machos Visuales, 50% Machos Portadores.',
      'Macho Visual × Hembra Visual → 100% Descendencia Visual (machos y hembras).'
    ],
    rules: [
      'REGLA DE ORO 1: Las hembras NUNCA pueden ser portadoras de mutaciones ligadas al sexo. Son visuales o no tienen el gen.',
      'REGLA DE ORO 2: Una hembra visual SIEMPRE recibe su gen de su PADRE. Si ves una hembra mutada, su padre era visual o portador.',
      'REGLA DE ORO 3: Para que nazca un macho visual, su MADRE debe ser obligatoriamente visual y su PADRE visual o portador.'
    ],
    examples: ['Opalino', 'Canela (Cinnamon)', 'Ino (Lutino y Albino)', 'Lacewing (Opalino + Canela / Ino)', 'Texas Clearbody (Cuerpo Claro)', 'Slate (Pizarra)'],
    sources: ['WBO Standard of Perfection', 'Vriends, M. (1992)', 'Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'rule_incomplete_dominant',
    slug: 'dominancia-incompleta',
    type: 'incomplete_dominant',
    name: 'Herencia de Dominancia Incompleta (Semidominante)',
    chromosomeType: 'autosomal',
    description: 'Mutaciones autosómicas donde un solo alelo (SF) produce un efecto intermedio visible, y dos alelos (DF) producen una manifestación visual claramente diferenciable y más intensa o transformada.',
    canMaleCarry: false,
    canFemaleCarry: false,
    sfExpression: 'Fenotipo intermedio característico (ej. Verde Laurel, Azul Cobalto, Perlado SF).',
    dfExpression: 'Fenotipo de máxima dosis (ej. Verde Oliva, Azul Malva, Perlado DF doble dosis blanco/amarillo).',
    malePossibleGenotypes: ['D/D (Doble Factor)', 'D/d+ (Simple Factor)', 'd+/d+ (Sin factor)'],
    femalePossibleGenotypes: ['D/D (Doble Factor)', 'D/d+ (Simple Factor)', 'd+/d+ (Sin factor)'],
    breedingOutcomesSummary: [
      'SF × Sin Factor → 50% SF, 50% Sin Factor.',
      'SF × SF → 25% DF, 50% SF, 25% Sin Factor.',
      'DF × Sin Factor → 100% SF obligatorio.',
      'DF × SF → 50% DF, 50% SF.',
      'DF × DF → 100% DF.'
    ],
    rules: [
      'No hay portadores: un ave con 0 dosis no tiene el factor, con 1 dosis es SF y con 2 dosis es DF.',
      'Un ejemplar DF cruzado con cualquier pareja libre garantiza que el 100% de los hijos nacerán con al menos 1 factor (SF).'
    ],
    examples: ['Factor de Oscuridad (D)', 'Perlado (Spangle - Sp)', 'Factor Violeta (V)'],
    sources: ['WBO Breeding Regulations', 'Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  }
];

// ==========================================
// 3. DATASET DE COMBINACIONES GENÉTICAS
// ==========================================
export const COMBINATIONS_DATA: Combination[] = [
  {
    id: 'comb_rainbow',
    slug: 'arcoiris-rainbow',
    name: 'Arcoíris (Rainbow)',
    alternativeNames: ['Periquito Arco Iris', 'Rainbow Budgerigar'],
    mutationIds: ['azul', 'opalino', 'alas-claras', 'cara-amarilla-tipo-ii'],
    description: 'Una de las combinaciones más emblemáticas y admiradas de la avicultura. Reúne cuatro mutaciones específicas en perfecta armonía.',
    phenotype: 'Base de color azul (con 1 factor de oscuridad cobalto o factor violeta preferentemente) + Cara Amarilla Tipo II (Goldenface) que difunde el amarillo sobre el manto turquesa + Dibujo Opalino + Alas Claras (marcas gris humo muy suave en alas).',
    genotypeFormula: 'b/b (Azul) + b^yf2 (Goldenface) + Z^op (Opalino) + cw/cw (Alas Claras)',
    breedingAdvice: 'Cruzar ejemplares puros de alas claras con opalinos cara dorada. Se deben evitar portadores de alas grises o diluidos para no perder el contraste intenso del manto con las alas traslúcidas.',
    difficulty: 'experto',
    visualChecklist: [
      'Línea Azul (Cielo, Cobalto o Violeta).',
      'Máscara Cara Amarilla Tipo II o Cara Dorada con difusión sobre el pecho.',
      'Patrón Opalino nítido en dorso.',
      'Alas Claras auténticas (no alas grises ni diluidos).'
    ],
    sources: ['WBO Standards for Composite Varieties', 'The Rainbow Budgerigar Society'],
    verificationStatus: 'verified'
  },
  {
    id: 'comb_collar_pied',
    slug: 'pio-de-collar',
    name: 'Pío de Collar (Harlequin / Dutch Pied)',
    alternativeNames: ['Pío Holandés', 'Band-tailed Pied', 'Pío Mixto'],
    mutationIds: ['pio-dominante', 'pio-recesivo'],
    description: 'Combinación genética simultánea de Pío Dominante y Pío Recesivo. Visualmente crea un collar limpio de color claro en el cuello y pecho superior con un parcheo irregular muy vistoso.',
    phenotype: 'Cuerpo con amplia extensión de manchas claras, collar perimetral nítido en el cuello, ojos que pueden retener o perder parcialmente el anillo de iris según la dominancia celular.',
    genotypeFormula: 'Pd/pd+ (Pío Dominante SF) + s/s (Pío Recesivo Homocigoto)',
    breedingAdvice: 'Se obtiene cruzando un Pío Dominante portador de Pío Recesivo con un Pío Recesivo (o entre dos Píos Dominantes portadores de recesivo).',
    difficulty: 'alta',
    visualChecklist: [
      'Collar perimetral continuo en la nuca y pecho superior.',
      'Veteado simétrico de fondo lipocrómico.',
      'Cera de tonalidad mixta o rosa azulada en machos.'
    ],
    sources: ['Dunstan, M. (1985). Pied Varieties in Budgerigars.'],
    verificationStatus: 'verified'
  },
  {
    id: 'comb_cremino',
    slug: 'cremino',
    name: 'Cremino (Creamino)',
    alternativeNames: ['Albino Cara Amarilla', 'Yellow-faced Albino'],
    mutationIds: ['azul', 'ino', 'cara-amarilla-tipo-i'],
    description: 'Resultado de la combinación de la mutación Albino (Línea Azul + Ino) con el gen Cara Amarilla Tipo I o Tipo II.',
    phenotype: 'Cuerpo de un tono crema pastel muy suave o marfil cálido, máscara amarilla brillante, ojos rojos con iris blanco y patas rosadas.',
    genotypeFormula: 'b/b (Azul) + Z^ino (Ino) + b^yf1 o b^yf2 (Cara Amarilla)',
    breedingAdvice: 'Emparejar machos albinos portadores de cara amarilla con hembras creminas, o machos comunes portadores de ino y cara amarilla con hembras albinas.',
    difficulty: 'media',
    visualChecklist: [
      'Ausencia total de melanina (cero marcas alares).',
      'Color crema pálido uniforme en el tronco.',
      'Máscara amarilla.',
      'Ojos rojos con anillo de iris.'
    ],
    sources: ['WBO Colour Standards'],
    verificationStatus: 'verified'
  },
  {
    id: 'comb_spangle_df',
    slug: 'perlado-doble-factor',
    name: 'Perlado Doble Factor (Spangle Double Factor)',
    alternativeNames: ['Spangle DF', 'Monocromático de ojos negros'],
    mutationIds: ['perlado'],
    description: 'Ejemplar homocigoto para la mutación Perlado (Sp/Sp). La doble dosis inhibe completamente el depósito de melanina en el plumaje sin afectar la retina.',
    phenotype: 'Completamente amarillo puro e intenso (en línea verde) o blanco puro inmaculado (en línea azul), pero conservando ojos negros normales con anillo de iris blanco y cera azul brillante en machos adultos.',
    genotypeFormula: 'Sp/Sp (Perlado Homocigoto)',
    breedingAdvice: 'Un Perlado DF cruzado con CUALQUIER periquito común garantiza que el 100% de los hijos nacerán Perlados SF de primera generación.',
    difficulty: 'baja',
    visualChecklist: [
      'Plumaje 100% monocromático sin ninguna marca alar.',
      'Ojos negros normales con anillo de iris (no rojos).',
      'Cera azul en machos adultos (a diferencia de los Inos que tienen cera rosa).'
    ],
    sources: ['WBO Standard of Perfection'],
    verificationStatus: 'verified'
  },
  {
    id: 'comb_lacewing',
    slug: 'lacewing',
    name: 'Lacewing (Alas de Encaje)',
    alternativeNames: ['Opalino Canela Ino Crossover'],
    mutationIds: ['ino', 'canela'],
    description: 'Combinación genética especial ligada al sexo producida por sobrecruzamiento (crossing-over) entre los loci del gen Ino y el gen Canela en el mismo cromosoma Z.',
    phenotype: 'Fondo corporal amarillo brillante (en verde) o blanco inmaculado (en azul), con marcas alares y gulares de un color marrón canela muy fino y suave ("encaje") y ojos rojos.',
    genotypeFormula: 'Z^(ino-cin) / Z^(ino-cin) en machos; Z^(ino-cin) / W en hembras',
    breedingAdvice: 'Criar con ejemplares de línea pura Lacewing para fijar el ligamiento cromosómico y evitar separaciones durante la meiosis.',
    difficulty: 'alta',
    visualChecklist: [
      'Cuerpo amarillo o blanco puro.',
      'Diseño alar de color canela pálido nítido.',
      'Ojos rojos con iris visible en adultos.'
    ],
    sources: ['Taylor & Warner (1986)', 'WBO Guidelines'],
    verificationStatus: 'verified'
  },
  {
    id: 'comb_violet_cobalt',
    slug: 'violeta-cobalto-visual',
    name: 'Violeta Cobalto Visual',
    alternativeNames: ['Visual Violet', 'Violeta Intenso'],
    mutationIds: ['azul', 'factor-oscuridad', 'factor-violeta'],
    description: 'La combinación cumbre para apreciar la verdadera belleza del Factor Violeta en su plenitud cromática.',
    phenotype: 'Color corporal púrpura/violeta profundo y homogéneo, manchas gulares violetas ultra saturadas, rabadilla con destellos morados eléctricos y cola azul noche.',
    genotypeFormula: 'b/b (Azul) + D/d+ (1 Factor de Oscuridad Cobalto) + V/v+ (Factor Violeta)',
    breedingAdvice: 'Cruzar Violeta Cielo con Cobalto o Violeta Cobalto con Azul Cielo para mantener la pureza de color y evitar tonos excesivamente oscuros (malvas violeta).',
    difficulty: 'media',
    visualChecklist: [
      'Tono púrpura/violeta homogéneo en pecho y abdomen.',
      'Manchas gulares de un violeta excepcionalmente brillante.',
      'Línea Azul con 1 Factor de Oscuridad.'
    ],
    sources: ['Daniels, T. (1983). The Violet Budgerigar.'],
    verificationStatus: 'verified'
  }
];

// ==========================================
// 4. DATASET DE GLOSARIO GENÉTICO
// ==========================================
export const GENETICS_GLOSSARY_DATA: GeneticsTerm[] = [
  {
    id: 'term_alelo',
    slug: 'alelo',
    term: 'Alelo',
    category: 'fundamentos',
    shortDefinition: 'Cada una de las formas o versiones alternativas que puede tener un mismo gen en una posición cromosómica.',
    longDefinition: 'Variante específica de la secuencia de ADN que ocupa un locus particular en un cromosoma homólogo. Por ejemplo, en el locus de color base existen alelos para verde ancestral (B+) y azul (b).',
    beginnerExplanation: 'Es como los diferentes sabores que puede tener un mismo tipo de helado.',
    expertExplanation: 'Formas polimórficas de una secuencia nucleotídica fija que segregan durante la meiosis gametogénica mendeliana.',
    examplesInBudgies: ['Alelo silvestre Verde (B+) frente al alelo mutado Azul (b).', 'Alelos del factor de oscuridad D y d+.'],
    relatedTerms: ['gen', 'locus', 'genotipo', 'homocigoto'],
    sources: ['WBO Glossary', 'Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_genotipo',
    slug: 'genotipo',
    term: 'Genotipo',
    category: 'fundamentos',
    shortDefinition: 'La fórmula y composición genética completa que un periquito lleva en su ADN.',
    longDefinition: 'Conjunto de genes y alelos heredados de los progenitores, tanto los que se manifiestan a simple vista en el plumaje como los que permanecen ocultos en estado recesivo (portadores).',
    beginnerExplanation: 'Es la lista secreta de ingredientes que el ave lleva en su interior.',
    expertExplanation: 'La constitución alélica específica en uno o múltiples loci génicos de un individuo diploide.',
    examplesInBudgies: ['B+/b D/+ Z^op/Z+ (Macho Verde Laurel portador de azul y portador de opalino).'],
    relatedTerms: ['fenotipo', 'portador', 'alelo', 'homocigoto'],
    sources: ['WBO Breeding Manual'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_fenotipo',
    slug: 'fenotipo',
    term: 'Fenotipo',
    category: 'fundamentos',
    shortDefinition: 'La apariencia física observable y medible del periquito.',
    longDefinition: 'Manifestación física externa resultante de la expresión del genotipo en interacción con factores ambientales y nutricionales: color del cuerpo, diseño alar, color de cera, ojos y patas.',
    beginnerExplanation: 'Es todo lo que puedes ver con tus propios ojos al mirar al periquito.',
    expertExplanation: 'Conjunto de caracteres morfológicos, fisiológicos y bioquímicos observables producidos por la expresión génica.',
    examplesInBudgies: ['Azul Cobalto Opalino de máscara blanca con 6 manchas gulares negras.'],
    relatedTerms: ['genotipo', 'expresion', 'dominancia'],
    sources: ['WBO Standard of Perfection'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_homocigoto',
    slug: 'homocigoto',
    term: 'Homocigoto (Puro)',
    category: 'fundamentos',
    shortDefinition: 'Individuo que posee dos copias idénticas del mismo alelo en un locus.',
    longDefinition: 'Condición genética en la que un organismo diploide ha recibido el mismo alelo de su padre y de su madre para un gen específico. Siempre transmite ese alelo al 100% de sus gametos.',
    beginnerExplanation: 'Significa tener dos copias exactamente iguales del mismo gen.',
    expertExplanation: 'Cigosidad donde ambos loci homólogos portan secuencias alélicas idénticas (ej. b/b o D/D).',
    examplesInBudgies: ['Azul Cielo puro (b/b): homocigoto para azul.', 'Verde Oliva (D/D): homocigoto para factor de oscuridad.'],
    relatedTerms: ['heterocigoto', 'alelo', 'genotipo'],
    sources: ['Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_heterocigoto',
    slug: 'heterocigoto',
    term: 'Heterocigoto',
    category: 'fundamentos',
    shortDefinition: 'Individuo que posee dos alelos diferentes para un mismo gen.',
    longDefinition: 'Condición genética en la que un organismo posee dos variantes alélicas distintas en sus cromosomas homólogos (uno de origen paterno y otro materno). Transmite cada alelo al 50% de sus crías.',
    beginnerExplanation: 'Tener dos versiones diferentes del gen: una de papá y otra de mamá.',
    expertExplanation: 'Cigosidad con alelos disímiles en un locus (ej. B+/b o D/d+).',
    examplesInBudgies: ['Verde portador de azul (B+/b).', 'Perlado Factor Simple (Sp/sp+).'],
    relatedTerms: ['homocigoto', 'portador', 'alelo'],
    sources: ['WBO Genetics Manual'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_portador',
    slug: 'portador',
    term: 'Portador (Split /)',
    category: 'herencia',
    shortDefinition: 'Ejemplar que lleva un gen recesivo oculto en su ADN y lo transmite a sus hijos sin mostrarlo en sus plumas.',
    longDefinition: 'Individuo heterocigoto para un alelo recesivo enmascarado por un alelo dominante o silvestre. En notación aviar se representa con una barra diagonal "/".',
    beginnerExplanation: 'Llevar un gen en el bolsillo: no se ve por fuera, pero se lo puedes dar a tus crías.',
    expertExplanation: 'Heterocigoto fenotípicamente silvestre o dominante que porta un alelo recesivo autosómico o ligado al sexo (machos).',
    examplesInBudgies: ['Macho Verde / azul / opalino (Fenotipo Verde común, pero transmite azul y opalino).'],
    relatedTerms: ['recesivo', 'ligada-al-sexo', 'genotipo'],
    sources: ['WBO Guidelines', 'Budgerigar World'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_locus',
    slug: 'locus',
    term: 'Locus (Plural: Loci)',
    category: 'fundamentos',
    shortDefinition: 'Posición fija y exacta que ocupa un gen dentro de un cromosoma.',
    longDefinition: 'Coordenada física precisa dentro de la cadena cromosómica donde reside una unidad genética funcional específica.',
    beginnerExplanation: 'Es como la dirección de la casa donde vive un gen.',
    expertExplanation: 'Ubicación cromosómica específica de un gen o marcador genético.',
    examplesInBudgies: ['El locus del gen azul en un autosoma frente al locus del gen opalino en el cromosoma Z.'],
    relatedTerms: ['gen', 'alelo', 'cromosoma'],
    sources: ['Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_cromosoma_z',
    slug: 'cromosoma-z',
    term: 'Cromosomas Sexuales Z y W',
    category: 'herencia',
    shortDefinition: 'El sistema genético que determina el sexo en las aves (Machos = ZZ, Hembras = ZW).',
    longDefinition: 'En aves, a diferencia de los mamíferos (XX/XY), el macho posee dos cromosomas sexuales idénticos (ZZ) y la hembra uno Z y uno W inerte (ZW). Las mutaciones ligadas al sexo residen en el cromosoma Z.',
    beginnerExplanation: 'En periquitos los machos tienen dos cromosomas Z y las hembras solo uno. Por eso las hembras nunca pueden guardar genes ocultos en el Z.',
    expertExplanation: 'Sistema de determinación sexual heterogamético femenino ZW en Aves.',
    examplesInBudgies: ['Macho: ZZ | Hembra: ZW.'],
    relatedTerms: ['ligada-al-sexo', 'portador', 'opalino', 'canela', 'ino'],
    sources: ['WBO Breeding Regulations'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_epistasia',
    slug: 'epistasia',
    term: 'Epistasia (Gen Epistático)',
    category: 'herencia',
    shortDefinition: 'Fenómeno donde un gen enmascara o bloquea la expresión de otro gen totalmente independiente.',
    longDefinition: 'Interacción entre diferentes genes no alélicos donde la presencia de una mutación inhibe o modifica la manifestación fenotípica de otro gen situado en un locus distinto.',
    beginnerExplanation: 'Como una capa de pintura que cubre el dibujo que estaba debajo.',
    expertExplanation: 'Supresión fenotípica inter-loci producida por genes epistáticos sobre genes hipostáticos.',
    examplesInBudgies: ['El gen Ino (Albino/Lutino) bloquea toda la melanina, impidiendo ver si el ave tiene dibujo Opalino o Canela debajo.'],
    relatedTerms: ['ino', 'fenotipo', 'genotipo'],
    sources: ['Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_factor_simple_doble',
    slug: 'factor-simple-doble',
    term: 'Factor Simple (SF) y Factor Doble (DF)',
    category: 'factores',
    shortDefinition: 'Términos avícolas que indican si un ave tiene 1 copia (SF) o 2 copias (DF) de un gen dominante o semidominante.',
    longDefinition: 'SF (Single Factor / Heterocigoto): Posee 1 alelo mutado y 1 alelo silvestre. DF (Double Factor / Homocigoto): Posee 2 alelos mutados.',
    beginnerExplanation: 'SF = una dosis del ingrediente; DF = dos dosis completas.',
    expertExplanation: 'Estado heterocigoto (SF) u homocigoto (DF) para loci de herencia dominante o semidominante.',
    examplesInBudgies: ['Cobalto = 1 Factor de Oscuridad (SF) | Malva = 2 Factores de Oscuridad (DF).', 'Perlado SF vs Perlado DF.'],
    relatedTerms: ['dominancia-incompleta', 'factor-oscuridad', 'perlado'],
    sources: ['WBO Standard of Perfection'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_crossing_over',
    slug: 'crossing-over',
    term: 'Sobrecruzamiento (Crossing-over / Recombinación)',
    category: 'herencia',
    shortDefinition: 'Intercambio físico de fragmentos de ADN entre cromosomas homólogos durante la formación de gametos.',
    longDefinition: 'Proceso meiótico donde cromátidas no hermanas se entrecruzan e intercambian segmentos alélicos, permitiendo que dos genes ligados al sexo en el cromosoma Z se unan o se separen.',
    beginnerExplanation: 'Como barajar dos cartas para juntar dos poderes especiales en una sola carta.',
    expertExplanation: 'Recombinación homóloga meiótica que altera las frecuencias de ligamiento entre loci sinténicos.',
    examplesInBudgies: ['Creación de la variedad Lacewing mediante el sobrecruzamiento del gen Ino y Canela en machos.'],
    relatedTerms: ['ligada-al-sexo', 'lacewing', 'locus'],
    sources: ['Taylor & Warner (1986)'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_psitacina',
    slug: 'psitacina',
    term: 'Psitacina (Lipocromo Amarillo/Rojo)',
    category: 'morfologia',
    shortDefinition: 'Pigmento orgánico exclusivo de los loros responsable de los colores amarillos, rojos y anaranjados.',
    longDefinition: 'Colorante lipocrómico sintetizado metabólicamente por el periquito en la corteza exterior de la pluma. La mutación azul destruye la capacidad de producir psitacina.',
    beginnerExplanation: 'El tinte amarillo natural que tienen los periquitos en sus plumas.',
    expertExplanation: 'Polién pigmentario no derivado de carotenoides dietéticos característico de Psittaciformes.',
    examplesInBudgies: ['Color amarillo de la máscara del periquito verde ancestral y de los ejemplares cara amarilla.'],
    relatedTerms: ['melanina', 'fenotipo', 'alelo'],
    sources: ['Stradi, R. et al. Pigments in Psittacines.'],
    verificationStatus: 'verified'
  },
  {
    id: 'term_eumelanina',
    slug: 'eumelanina',
    term: 'Eumelanina',
    category: 'morfologia',
    shortDefinition: 'Pigmento oscuro granular responsable de las ondulaciones negras y marcas gulares.',
    longDefinition: 'Polímero insoluble de tirosina depositado en forma de gránulos microscópicos en la médula y bárbulas de las plumas, creando dibujos negros, marrones y oscureciendo el fondo.',
    beginnerExplanation: 'El color negro que forma las rayitas de la cabeza, alas y espalda del periquito.',
    expertExplanation: 'Polímero denso derivado de L-DOPA responsable de la pigmentación melánica oscura.',
    examplesInBudgies: ['Ondulaciones de las alas y manchas gulares violetas/negras.'],
    relatedTerms: ['psitacina', 'canela', 'ino', 'fallow'],
    sources: ['Avian Biology Handbook'],
    verificationStatus: 'verified'
  }
];

// ==========================================
// 5. DATASET DE CUADROS DE PUNNETT (DEMOSTRACIONES EDUCATIVAS)
// ==========================================
export const PUNNETT_DEMOS_DATA: PunnettSquareData[] = [
  {
    id: 'punnett_blue_carriers',
    title: 'Verde portador de azul × Verde portador de azul (Autosómica Recesiva)',
    category: 'Autosómica Recesiva',
    description: 'El clásico cruce mendeliano monohíbrido 3:1. Ambos progenitores son visualmente verdes, pero ambos portan el gen azul recesivo (B+/b).',
    p1Name: 'Macho Verde / azul',
    p1Genotype: 'B+ / b',
    p1Phenotype: 'Verde Césped Visual (Portador)',
    p2Name: 'Hembra Verde / azul',
    p2Genotype: 'B+ / b',
    p2Phenotype: 'Verde Césped Visual (Portadora)',
    gametesTop: ['B+', 'b'],
    gametesSide: ['B+', 'b'],
    cells: [
      ['B+ B+', 'B+ b'],
      ['B+ b', 'b b']
    ],
    cellPhenotypes: [
      ['Verde Puro (Homocigoto)', 'Verde / azul (Portador)'],
      ['Verde / azul (Portador)', 'Azul Cielo (Visual)']
    ],
    probabilities: [
      { genotype: 'B+ / B+', phenotype: 'Verde Puro (No portador)', percentage: 25, isCarrier: false, sex: 'both', explanation: '1 de cada 4 crías. Fenotípicamente verde e incapaz de dar hijos azules.' },
      { genotype: 'B+ / b', phenotype: 'Verde / azul (Portador)', percentage: 50, isCarrier: true, sex: 'both', explanation: '2 de cada 4 crías. Fenotípicamente verdes idénticos al verde puro, pero portan el gen azul.' },
      { genotype: 'b / b', phenotype: 'Azul Cielo (Visual)', percentage: 25, isCarrier: false, sex: 'both', explanation: '1 de cada 4 crías. Expresión recesiva visual por doble dosis homocigota.' }
    ],
    breederNotes: 'De todos los polluelos verdes nacidos (75%), el 66% (2 de cada 3) son portadores de azul, pero es imposible saber cuáles son sin probarlos en cría.',
    verificationStatus: 'verified'
  },
  {
    id: 'punnett_sex_linked_male_carrier',
    title: 'Macho Clásico / opalino × Hembra Clásica (Ligada al Sexo)',
    category: 'Ligada al Sexo (Cromosoma Z)',
    description: 'Demuestra por qué un macho portador transmite la mutación ligada al sexo al 50% de sus hijas hembras sin necesidad de que la madre sea mutada.',
    p1Name: 'Macho Clásico / opalino',
    p1Genotype: 'Z^op / Z+',
    p1Phenotype: 'Verde Común (Portador de Opalino)',
    p2Name: 'Hembra Clásica',
    p2Genotype: 'Z+ / W',
    p2Phenotype: 'Verde Común Pura',
    gametesTop: ['Z^op (Papá)', 'Z+ (Papá)'],
    gametesSide: ['Z+ (Mamá)', 'W (Mamá)'],
    cells: [
      ['Z^op Z+', 'Z+ Z+'],
      ['Z^op W', 'Z+ W']
    ],
    cellPhenotypes: [
      ['Macho Verde / opalino (Portador)', 'Macho Verde Puro'],
      ['Hembra Verde OPALINA (Visual)', 'Hembra Verde Clásica']
    ],
    cellSexNotes: [
      ['Macho (50% de machos)', 'Macho (50% de machos)'],
      ['Hembra VISUAL (50% de hembras)', 'Hembra Normal (50% de hembras)']
    ],
    probabilities: [
      { genotype: 'Z^op / Z+', phenotype: 'Macho Clásico / opalino', percentage: 25, isCarrier: true, sex: 'male', explanation: '50% de los hijos machos nacidos portarán el gen opalino.' },
      { genotype: 'Z+ / Z+', phenotype: 'Macho Clásico puro', percentage: 25, isCarrier: false, sex: 'male', explanation: '50% de los hijos machos nacidos libres de la mutación.' },
      { genotype: 'Z^op / W', phenotype: 'Hembra OPALINA (Visual)', percentage: 25, isCarrier: false, sex: 'female', explanation: '50% de las hijas hembras nacidas serán opalinas visuales directas.' },
      { genotype: 'Z+ / W', phenotype: 'Hembra Clásica pura', percentage: 25, isCarrier: false, sex: 'female', explanation: '50% de las hijas hembras nacidas serán normales.' }
    ],
    breederNotes: '¡Autosexado en el nido! Cualquier polluelo opalino visual que nazca de este cruce es GARANTIZADAMENTE una HEMBRA.',
    verificationStatus: 'verified'
  },
  {
    id: 'punnett_dark_factor_cobalt',
    title: 'Azul Cobalto (1D) × Azul Cobalto (1D) (Semidominante Autosómico)',
    category: 'Dominancia Incompleta / Factor de Oscuridad',
    description: 'Cruce entre dos ejemplares de Factor Simple (SF). Muestra la segregación 1:2:1 característica de los genes de dosis acumulativa.',
    p1Name: 'Macho Azul Cobalto (1D)',
    p1Genotype: 'D / d+',
    p1Phenotype: 'Azul Cobalto (1 Factor)',
    p2Name: 'Hembra Azul Cobalto (1D)',
    p2Genotype: 'D / d+',
    p2Phenotype: 'Azul Cobalto (1 Factor)',
    gametesTop: ['D', 'd+'],
    gametesSide: ['D', 'd+'],
    cells: [
      ['D D', 'D d+'],
      ['D d+', 'd+ d+']
    ],
    cellPhenotypes: [
      ['Azul Malva (Doble Factor 2D)', 'Azul Cobalto (Simple Factor 1D)'],
      ['Azul Cobalto (Simple Factor 1D)', 'Azul Cielo (Sin Factor 0D)']
    ],
    probabilities: [
      { genotype: 'D / D', phenotype: 'Azul Malva (2 Factores / DF)', percentage: 25, isCarrier: false, sex: 'both', explanation: 'Tono grisáceo oscuro profundo.' },
      { genotype: 'D / d+', phenotype: 'Azul Cobalto (1 Factor / SF)', percentage: 50, isCarrier: false, sex: 'both', explanation: 'Tono azul medio azul marino intenso.' },
      { genotype: 'd+ / d+', phenotype: 'Azul Cielo (0 Factores / 0D)', percentage: 25, isCarrier: false, sex: 'both', explanation: 'Tono azul celeste brillante original.' }
    ],
    breederNotes: 'No hay portadores de factor de oscuridad: 0D = Cielo, 1D = Cobalto, 2D = Malva.',
    verificationStatus: 'verified'
  },
  {
    id: 'punnett_spangle_sf_normal',
    title: 'Perlado SF × Común Normal (Semidominante Autosómico)',
    category: 'Semidominante Autosómico',
    description: 'Cruce fundamental para criadores de Perlado. Muestra cómo un solo progenitor Perlado SF transmite el diseño al 50% exacto de la nidada.',
    p1Name: 'Macho Perlado SF',
    p1Genotype: 'Sp / sp+',
    p1Phenotype: 'Perlado Factor Simple',
    p2Name: 'Hembra Normal Clásica',
    p2Genotype: 'sp+ / sp+',
    p2Phenotype: 'Normal Clásica',
    gametesTop: ['Sp', 'sp+'],
    gametesSide: ['sp+', 'sp+'],
    cells: [
      ['Sp sp+', 'sp+ sp+'],
      ['Sp sp+', 'sp+ sp+']
    ],
    cellPhenotypes: [
      ['Perlado SF (Visual)', 'Normal Clásico'],
      ['Perlado SF (Visual)', 'Normal Clásico']
    ],
    probabilities: [
      { genotype: 'Sp / sp+', phenotype: 'Perlado SF (Visual)', percentage: 50, isCarrier: false, sex: 'both', explanation: '50% de la nidada será Perlado SF idéntico al padre.' },
      { genotype: 'sp+ / sp+', phenotype: 'Normal Clásico (No perlado)', percentage: 50, isCarrier: false, sex: 'both', explanation: '50% de la nidada será común y no transmitirá el gen perlado.' }
    ],
    breederNotes: 'Los ejemplares normales nacidos de este cruce NO portan perlado. Si se desea 100% hijos perlados, se debe utilizar un progenitor Perlado Doble Factor (DF).',
    verificationStatus: 'verified'
  }
];

// ==========================================
// 6. GUÍA DE NOMENCLATURA INTERNACIONAL (WBO)
// ==========================================
export const NOMENCLATURA_GUIDE = {
  title: "Guía de Nomenclatura y Notación Genética Aviar",
  standardOrganization: "World Budgerigar Organisation (WBO)",
  principles: [
    {
      symbol: "/",
      title: "La Barra Diagonal (Portador / Split)",
      description: "Indica que el periquito porta un gen recesivo no visible. A la izquierda se escribe el fenotipo observable; a la derecha de la barra se listan las mutaciones portadas.",
      example: "Verde Laurel / azul / opalino = Fenotipo Verde Laurel, portador de gen azul y de gen opalino."
    },
    {
      symbol: "+",
      title: "El Signo Más (Alelo Silvestre / Wild Type)",
      description: "Representa el alelo ancestral salvaje original de la naturaleza australiana frente a una mutación doméstica.",
      example: "B+ (Verde silvestre) frente a b (Azul); Z+ (Cromosoma sexual silvestre) frente a Z^op (Opalino)."
    },
    {
      symbol: "SF / DF",
      title: "Factor Simple (SF) y Factor Doble (DF)",
      description: "Identifica la dosis alélica en mutaciones dominantes y semidominantes. SF = 1 alelo (heterocigoto); DF = 2 alelos (homocigoto).",
      example: "Perlado SF (Sp/sp+) vs Perlado DF (Sp/Sp); Violeta SF vs Violeta DF."
    },
    {
      symbol: "Z / W",
      title: "Cromosomas Sexuales",
      description: "Notación cromosómica aviar. Z^mut representa el alelo mutado en el cromosoma sexual.",
      example: "Z^ino / Z^ino (Macho Ino homocigoto visual) | Z^ino / W (Hembra Ino visual) | Z^ino / Z+ (Macho portador)."
    }
  ],
  standardOrderOfNames: [
    "1. Factor de Línea Base (Verde / Azul)",
    "2. Factor de Oscuridad (Césped / Laurel / Oliva o Cielo / Cobalto / Malva)",
    "3. Factores Adicionales (Gris, Violeta)",
    "4. Mutaciones de Patrón y Color (Opalino, Canela, Perlado, Pío)",
    "5. Factores de Máscara (Cara Amarilla Tipo I, Tipo II, Cara Dorada)",
    "6. Portadores (/ azul, / ino, / pío recesivo)"
  ],
  regionalWarnings: [
    "En algunos países hispanohablantes se llama erróneamente 'pasteles' a los diluidos, alas claras o alas grises.",
    "El término 'Arcoíris' solo debe aplicarse a ejemplares que cumplan estrictamente: Línea Azul + Cara Amarilla Tipo II + Opalino + Alas Claras.",
    "No utilizar la palabra 'portador' para genes dominantes (no existe 'Verde / gris')."
  ]
};

// ==========================================
// 7. GUÍA DE PROBABILIDADES VS REALIDAD
// ==========================================
export const PROBABILITY_REALITY_GUIDE = {
  title: "Probabilidades Genéticas Teóricas vs Realidad en Nidada",
  goldenRule: "Una probabilidad teórica del 25% NO significa que en una nidada de 4 huevos nacerá exactamente 1 polluelo de ese tipo.",
  keyPoints: [
    {
      title: "Eventos Independientes en Cada Huevo",
      description: "Cada fecundación es un suceso probabilístico 100% independiente. La genética no 'recuerda' qué nació en el huevo anterior. En cada huevo de dos padres Verde/azul x Verde/azul, la probabilidad de ser azul es exactamente 25%, igual que tirar un dado de 4 caras en cada ocasión."
    },
    {
      title: "Variabilidad Estadística en Muestras Pequeñas",
      description: "Una nidada promedio consta de 4 a 6 huevos. En un tamaño de muestra tan reducido, las fluctuaciones aleatorias son enormes: es perfectamente normal tener una nidada con 4 polluelos azules o 4 polluelos verdes seguidos."
    },
    {
      title: "La Ley de los Grandes Números",
      description: "Las proporciones mendelianas teóricas (75%-25%, 50%-50%) solo se observan con precisión matemática cuando se analizan cientos de nacimientos a lo largo de varias temporadas de cría."
    },
    {
      title: "Mortalidad Embrionaria y Fertilidad",
      description: "Huevos infértiles, embriones muertos antes de la eclosión o polluelos no viables alteran el porcentaje final observado respecto a las predicciones teóricas ideales."
    }
  ]
};
