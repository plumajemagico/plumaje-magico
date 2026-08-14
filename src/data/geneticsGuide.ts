export interface BasicConceptItem {
  id: string;
  name: string;
  scientificTerm?: string;
  beginnerExplanation: string;
  beginnerAnalogy: string;
  expertExplanation: string;
  notationExample?: string;
  examplesInBudgies: string[];
  keyRules: string[];
}

export interface GeneticSectionData {
  introduction: {
    beginner: {
      title: string;
      summary: string;
      pillars: {
        title: string;
        description: string;
        color: string;
      }[];
    };
    expert: {
      title: string;
      summary: string;
      genomicBasis: string;
      keyPrinciples: {
        title: string;
        detail: string;
      }[];
    };
  };
  basicConcepts: BasicConceptItem[];
  simpleDoubleFactor: {
    summary: string;
    differences: {
      mutation: string;
      type: string;
      sfEffect: string;
      dfEffect: string;
      breedingImpact: string;
    }[];
  };
  carriersGuide: {
    summary: string;
    notationGuide: string;
    matrix: {
      category: string;
      canMaleCarry: boolean;
      canFemaleCarry: boolean;
      explanation: string;
      example: string;
    }[];
    goldenRules: string[];
  };
}

export const GENETICS_GUIDE_DATA: GeneticSectionData = {
  introduction: {
    beginner: {
      title: "¿Cómo se forman los colores en un periquito?",
      summary: "El periquito australiano silvestre original es de color Verde Césped. Todos los maravillosos colores y patrones que vemos hoy en día provienen de la combinación de 3 ingredientes naturales en sus plumas:",
      pillars: [
        {
          title: "1. Pigmento Amarillo (Psitacina)",
          description: "Es un colorante químico amarillo brillante que el ave deposita en la corteza exterior de sus plumas.",
          color: "from-amber-400 to-yellow-500"
        },
        {
          title: "2. Reflejo Estructural Azul",
          description: "La estructura microscópica de la pluma desvía y refleja la luz en longitud de onda azul (como el cielo). ¡Amarillo + Azul = Verde!",
          color: "from-sky-400 to-blue-600"
        },
        {
          title: "3. Pigmento Negro/Marrón (Melanina)",
          description: "Crea las características ondulaciones negras de la cabeza, espalda, alas y manchas gulares.",
          color: "from-slate-700 to-slate-900"
        }
      ]
    },
    expert: {
      title: "Bases Genómicas y Sistema Cromosómico en Melopsittacus undulatus",
      summary: "La herencia en el periquito australiano sigue leyes mendelianas clásicas a través de cromosomas autosómicos y cromosomas sexuales (sistema homogamético/heterogamético ZW).",
      genomicBasis: "Cariotipo aviar típico con macrocromosomas y microcromosomas. Los machos son homogaméticos (ZZ), portando dos cromosomas sexuales idénticos. Las hembras son heterogaméticas (ZW), con un único cromosoma Z funcional y un cromosoma W inerte para la mayoría de loci de color.",
      keyPrinciples: [
        {
          title: "Loci Autosómicos",
          detail: "Genes situados en cromosomas no sexuales. Cada ejemplar (macho o hembra) posee 2 alelos obligatorios para cada locus."
        },
        {
          title: "Loci Ligados al Sexo (Cromosoma Z)",
          detail: "Genes alojados en el cromosoma Z. Machos poseen 2 alelos (Z/Z); hembras poseen 1 único alelo (Z/- o Z/W), expresando fenotípicamente cualquier mutación que reciban."
        },
        {
          title: "Epistasia e Interacción Génica",
          detail: "Ciertas mutaciones enmascaran u ocultan la expresión de otros genes independientes (por ejemplo, el gen Ino suprime la eumelanina enmascarando el patrón opalino o canela subyacente)."
        }
      ]
    }
  },
  basicConcepts: [
    {
      id: 'gen',
      name: 'Gen',
      scientificTerm: 'Unidad de Información Hereditaria',
      beginnerExplanation: 'Es una instrucción o "receta biológica" dentro del cuerpo del ave que le dice de qué color debe ser la pluma, qué dibujo debe tener o cómo debe crecer.',
      beginnerAnalogy: 'Imagina que es un renglón en el libro de recetas del periquito.',
      expertExplanation: 'Secuencia ordenada de nucleótidos en una posición cromosómica fija (locus) que codifica una molécula funcional (proteína o ARN) responsable de una ruta bioquímica, como la tirosinasa o enzimas de la síntesis de psitacina.',
      notationExample: 'Locus B (Base de color), Locus D (Factor de oscuridad)',
      examplesInBudgies: [
        'Gen responsable de producir el pigmento amarillo (psitacina).',
        'Gen responsable de la distribución de las ondulaciones alares (Opalino).'
      ],
      keyRules: [
        'Se transmiten de padres a hijos durante la reproducción.',
        'Se encuentran por duplicado en células somáticas (uno de origen paterno y uno materno).'
      ]
    },
    {
      id: 'alelo',
      name: 'Alelo',
      scientificTerm: 'Variante Alélica',
      beginnerExplanation: 'Son las diferentes versiones posibles que puede tener un mismo gen. Por ejemplo, para el color base existe la versión "verde" y la versión "azul".',
      beginnerAnalogy: 'Si el gen es "helado", los alelos son los sabores: vainilla, chocolate o fresa.',
      expertExplanation: 'Cada una de las formas alternativas que puede adoptar un mismo gen en un locus homólogo. Pueden diferir por una o varias sustituciones de bases en la secuencia de ADN.',
      notationExample: 'B+ (Verde silvestre ancestral) vs b (Azul mutado)',
      examplesInBudgies: [
        'Alelo Verde ancestral (dominante) frente a Alelo Azul (recesivo).',
        'Alelo Común frente a Alelo Opalino en el cromosoma Z.'
      ],
      keyRules: [
        'Un individuo diploide hereda exactamente un alelo de su padre y un alelo de su madre para cada locus autosómico.'
      ]
    },
    {
      id: 'genotipo',
      name: 'Genotipo',
      scientificTerm: 'Constitución Genética Alélica',
      beginnerExplanation: 'Es el conjunto de genes que el periquito lleva en su interior. Incluye tanto lo que se ve a simple vista como los genes ocultos que puede heredar a sus crías.',
      beginnerAnalogy: 'Es la lista de ingredientes exacta que viene escrita dentro del paquete.',
      expertExplanation: 'La dotación alélica completa de un organismo en uno o múltiples loci genéticos. Se representa mediante símbolos estándar de letras y barras de portador.',
      notationExample: 'B+/b D/+ (Genotipo de un Verde Laurel portador de azul)',
      examplesInBudgies: [
        'Un periquito verde puede tener genotipo puro (Verde/Verde) o genotipo portador (Verde/Azul).',
        'Un macho con genotipo Z^op / Z+ (Macho clásico portador de opalino).'
      ],
      keyRules: [
        'El genotipo permanece constante durante toda la vida del ejemplar.',
        'Solo se transmite la mitad del genotipo (un alelo por locus) a cada gameto (óvulo o espermatozoide).'
      ]
    },
    {
      id: 'fenotipo',
      name: 'Fenotipo',
      scientificTerm: 'Expresión Fenotípica Observable',
      beginnerExplanation: 'Es el aspecto físico exterior del periquito: todo lo que puedes ver con tus ojos (el color de su cuerpo, la máscara, las manchas de la mejilla, el color de la cera y patas).',
      beginnerAnalogy: 'Es la apariencia final del pastel una vez horneado y decorado.',
      expertExplanation: 'Cualquier característica observable o mensurable de un individuo (morfológica, bioquímica o conductual) resultante de la interacción del genotipo con el ambiente.',
      notationExample: 'Fenotipo: Azul Cobalto Opalino',
      examplesInBudgies: [
        'Plumaje azul cobalto con manto en "V" limpia.',
        'Máscara amarilla con 6 manchas gulares negras y ojos oscuros.'
      ],
      keyRules: [
        'Dos periquitos con el mismo fenotipo pueden tener genotipos diferentes (ej. Verde puro vs Verde portador de azul).',
        'Un periquito no puede mostrar fenotípicamente un gen recesivo si solo tiene una copia.'
      ]
    },
    {
      id: 'homocigoto',
      name: 'Homocigoto',
      scientificTerm: 'Cigosidad Idéntica',
      beginnerExplanation: 'Significa que el periquito recibió exactamente la misma versión del gen de su padre y de su madre.',
      beginnerAnalogy: 'Tener dos zapatos exactamente del mismo color y talla.',
      expertExplanation: 'Individuo que posee dos alelos idénticos en un locus específico en ambos cromosomas homólogos.',
      notationExample: 'b/b (Homocigoto azul) o D/D (Homocigoto doble factor de oscuridad)',
      examplesInBudgies: [
        'Azul Cielo puro (b/b): homocigoto para el gen azul.',
        'Verde Oliva (D/D): homocigoto para el factor de oscuridad.'
      ],
      keyRules: [
        'Un ejemplar homocigoto siempre transmite ese alelo específico al 100% de sus descendientes.',
        'Las mutaciones recesivas autosómicas siempre deben ser homocigotas para verse en el plumaje.'
      ]
    },
    {
      id: 'heterocigoto',
      name: 'Heterocigoto',
      scientificTerm: 'Cigosidad Disímil',
      beginnerExplanation: 'Significa que el periquito tiene dos versiones diferentes del mismo gen: una versión de su padre y otra distinta de su madre.',
      beginnerAnalogy: 'Llevar un zapato verde en un pie y un zapato azul en el otro.',
      expertExplanation: 'Individuo que posee dos alelos distintos en un locus génico en sus cromosomas homólogos.',
      notationExample: 'B+/b (Heterocigoto verde/azul) o D/+ (Heterocigoto simple factor)',
      examplesInBudgies: [
        'Verde portador de azul (B+/b).',
        'Azul Cobalto (D/+) con un factor de oscuridad.',
        'Perlado Factor Simple (Sp/+) con un alelo perlado y uno común.'
      ],
      keyRules: [
        'Un heterocigoto transmite cada uno de sus dos alelos al 50% de sus gametos de manera aleatoria.',
        'Si uno de los alelos es dominante, el ave mostrará el rasgo dominante pero conservará el recesivo oculto.'
      ]
    },
    {
      id: 'portador',
      name: 'Portador (Split)',
      scientificTerm: 'Heterocigoto para Alelo Recesivo no Expresado',
      beginnerExplanation: 'Es un periquito que tiene un gen "escondido" en su interior. Él no lo muestra en sus plumas, pero puede heredárselo a sus hijos.',
      beginnerAnalogy: 'Llevar una moneda en el bolsillo: no se ve desde afuera, pero la tienes contigo.',
      expertExplanation: 'Individuo heterocigoto que posee un alelo recesivo (autosómico o ligado al sexo en machos) cuyo fenotipo está enmascarado por el alelo dominante homólogo o alelo silvestre.',
      notationExample: 'Notación estándar con barra: "Verde / azul" o "Macho Común / opalino"',
      examplesInBudgies: [
        'Periquito Verde / azul (visualmente es verde, pero porta el gen azul).',
        'Macho Verde / pío recesivo / canela (porta dos mutaciones recesivas distintas).'
      ],
      keyRules: [
        'Solo se pueden portar genes recesivos (autosómicos o ligados al sexo).',
        'Las hembras NUNCA pueden ser portadoras de mutaciones ligadas al sexo (Opalino, Canela, Ino).',
        'Los genes dominantes NO se pueden portar: o se ven en el plumaje, o no existen en el ave.'
      ]
    },
    {
      id: 'mutacion',
      name: 'Mutación',
      scientificTerm: 'Variación Genética Espontánea',
      beginnerExplanation: 'Es un cambio natural y espontáneo en el ADN que da origen a un nuevo color, dibujo o tipo de pluma diferente al periquito silvestre original.',
      beginnerAnalogy: 'Un cambio accidental en una palabra de la receta que crea un postre nuevo e interesante.',
      expertExplanation: 'Cualquier cambio heredable en la secuencia de nucleótidos o estructura cromosómica que altera la función génica normal, modificando la melanogénesis, la deposición de psitacinas o la ultraestructura de queratina en las bárbulas.',
      notationExample: 'Aparición de mutaciones históricas: Azul (1878), Opalino (1933), Perlado (1974)',
      examplesInBudgies: [
        'Mutación Ino: inhibe la producción de toda melanina.',
        'Mutación Perlado: invierte la distribución de melanina en el borde de las plumas.',
        'Mutación Crestado: altera la dirección del crecimiento folicular en la cabeza.'
      ],
      keyRules: [
        'Una vez que una mutación se fija en el genoma, se transmite de forma estable según las leyes de la genética.',
        'Las mutaciones no surgen por voluntad o deseo del criador; aparecen de forma espontánea y luego se seleccionan y fijan mediante cruces controlados.'
      ]
    }
  ],
  simpleDoubleFactor: {
    summary: "En avicultura se utiliza el término Factor Simple (SF) y Doble Factor (DF) para describir si un periquito tiene una sola copia (1 dosis) o dos copias (2 dosis) de una mutación dominante o semidominante.",
    differences: [
      {
        mutation: "Factor de Oscuridad (D)",
        type: "Semidominante Autosómico",
        sfEffect: "1D: Verde Laurel en línea verde / Azul Cobalto en línea azul.",
        dfEffect: "2D: Verde Oliva en línea verde / Azul Malva en línea azul.",
        breedingImpact: "El SF transmite el factor al 50% de las crías; el DF lo transmite obligatoriamente al 100% de las crías."
      },
      {
        mutation: "Perlado (Spangle)",
        type: "Semidominante Autosómico",
        sfEffect: "Perlado SF: Dibujo de ribete negro fino en el borde de cada pluma alar, centro claro.",
        dfEffect: "Perlado DF: Supresión total de marcas; periquito completamente amarillo puro o blanco puro con ojos negros normales.",
        breedingImpact: "Perlado DF x Común produce 100% hijos Perlados SF de primera generación."
      },
      {
        mutation: "Factor Violeta (V)",
        type: "Semidominante Autosómico",
        sfEffect: "Violeta SF: En cobalto produce el violeta visual. En cielo intensifica a azul profundo.",
        dfEffect: "Violeta DF: Máxima saturación e intensidad violeta aún más homogénea.",
        breedingImpact: "El DF asegura que el 100% de la descendencia herede al menos un factor violeta."
      },
      {
        mutation: "Factor Gris (G)",
        type: "Dominante Autosómico Completo",
        sfEffect: "Gris SF: Plumaje gris ceniza / verde grisáceo. Gulares gris plomizo.",
        dfEffect: "Gris DF: Visualmente idéntico al Gris SF.",
        breedingImpact: "Gris DF x Normal produce 100% hijos Gris SF. Gris SF x Normal produce 50% Gris y 50% Normal."
      },
      {
        mutation: "Pío Dominante Australiano",
        type: "Dominante Autosómico",
        sfEffect: "Pío SF: Parches claros en cuerpo y alas, banda clara en el pecho, ojos con iris normal.",
        dfEffect: "Pío DF: Mayor extensión de zonas claras sin dibujo melánico.",
        breedingImpact: "El Pío DF transmite el patrón pío al 100% de la descendencia."
      }
    ]
  },
  carriersGuide: {
    summary: "Aprender qué mutaciones se pueden portar y cuáles no es el secreto principal para comprender la genética del periquito y planificar emparejamientos con éxito.",
    notationGuide: 'En genética aviar internacional, la barra diagonal "/" se lee como "portador de". Lo que está a la izquierda de la barra es lo que el periquito muestra en sus plumas (fenotipo); lo que está a la derecha es lo que lleva oculto en sus genes.',
    matrix: [
      {
        category: "Mutaciones Recesivas Autosómicas (Azul, Pío Recesivo, Fallow, Diluido, Alas Claras, Alas Grises, Blackwing)",
        canMaleCarry: true,
        canFemaleCarry: true,
        explanation: "Al estar en cromosomas no sexuales, tanto machos como hembras tienen 2 alelos y pueden ser portadores no visuales si tienen solo 1 copia del gen recesivo.",
        example: "Macho Verde / azul / pío recesivo | Hembra Verde / azul"
      },
      {
        category: "Mutaciones Ligadas al Sexo (Opalino, Canela, Inos -Lutino/Albino-, Lacewing, Texas Clearbody, Slate)",
        canMaleCarry: true,
        canFemaleCarry: false,
        explanation: "Los machos tienen 2 cromosomas Z (ZZ) y pueden llevar el gen en un solo cromosoma sin mostrarlo. Las hembras tienen solo 1 cromosoma Z (ZW); si tienen el gen son visuales inmediatamente; si no, están libres.",
        example: "Macho Clásico / opalino / canela (posible) | Hembra Clásica / opalina (BIOLÓGICAMENTE IMPOSIBLE)"
      },
      {
        category: "Mutaciones Dominantes y Semidominantes (Factor Gris, Factor de Oscuridad, Factor Violeta, Perlado, Pío Dominante)",
        canMaleCarry: false,
        canFemaleCarry: false,
        explanation: "Los genes dominantes requieren solo una copia para verse en el plumaje. No existe el concepto de 'portador de dominante': o el periquito muestra la mutación en sus plumas, o no posee el gen.",
        example: "Un periquito NO puede ser 'Verde / gris' ni 'Azul / perlado'."
      }
    ],
    goldenRules: [
      "Regla de Oro 1: Las hembras NUNCA pueden ser portadoras de mutaciones ligadas al sexo (Opalino, Canela, Ino).",
      "Regla de Oro 2: Nadie puede ser portador de un gen dominante (Gris, Perlado, Pío Dominante, Oscuridad). Si tienen el gen, se ve.",
      "Regla de Oro 3: Para obtener crías visuales de una mutación recesiva autosómica, AMBOS padres deben ser al menos portadores o visuales.",
      "Regla de Oro 4: Un macho portador de una mutación ligada al sexo cruzado con una hembra clásica dará un 50% de sus hijas hembras visuales de esa mutación."
    ]
  }
};
