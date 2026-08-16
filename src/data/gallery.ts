import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  // =========================================================
  // SERIE 1 — EJEMPLARES DOCUMENTADOS
  // =========================================================

  {
    id: 'gal-perlado-df-verde-01',
    title: 'Perlados DF — Línea Verde',
    description:
      'Pareja de ejemplares perlados doble factor de línea verde. Fotografía documentada por Plumaje Mágico.',
    imageUrl: '/ejemplares/pareja-perlado-df-linea-verde-01.jpg',
    category: 'mutaciones',
    mutationName: 'Perlado Doble Factor (Spangle DF)',
    mutations: ['Perlado Doble Factor (Spangle DF)'],
    colorLine: 'Línea Verde (Doble Factor)',
    tags: ['perlado', 'doble_factor', 'linea_verde', 'df', 'pareja'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-verde-cesped',
    title: 'Periquito Australiano Silvestre (Verde Césped)',
    description:
      'Fenotipo ancestral característico de las bandadas silvestres del interior australiano, con máscara amarilla intensa y seis manchas gulares negras.',
    imageUrl: '/ejemplares/verde-cesped.jpg',
    category: 'verde',
    colorLine: 'Línea Verde (0D Césped)',
    tags: ['ancestral', 'silvestre', 'verde', 'cesped'],
    credit: 'Plumaje Mágico / Archivo de Especies',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-azul-cobalto',
    title: 'Azul Cobalto Clásico (1D)',
    description:
      'Ejemplar de línea azul con 1 factor de oscuridad, mostrando un tono azul marino intenso y máscara blanca nítida.',
    imageUrl: '/ejemplares/azul-cobalto.jpg',
    category: 'azul',
    colorLine: 'Línea Azul (1D Cobalto)',
    tags: ['cobalto', 'azul', '1d', 'linea_azul'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-lutino',
    title: 'Lutino Clásico de Ojos Rojos',
    description:
      'Supresión total de eumelanina con retención de psitacina amarilla botón de oro y cera rosa brillante.',
    imageUrl: '/ejemplares/lutino.jpg',
    category: 'mutaciones',
    mutationName: 'Lutino (Ino en Línea Verde)',
    mutations: ['Ino (Lutino)'],
    tags: ['ino', 'lutino', 'ojos_rojos', 'amarillo'],
    credit: 'Aviario Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-azul-cielo',
    title: 'Azul Cielo (Sky Blue 0D)',
    description:
      'Color celeste luminoso sin factor de oscuridad, con ribeteado alar nítido y máscara blanca inmaculada.',
    imageUrl: '/ejemplares/azul-cielo.jpg',
    category: 'azul',
    colorLine: 'Línea Azul (0D Cielo)',
    tags: ['cielo', 'sky_blue', '0d', 'azul'],
    credit: 'Archivo Fotográfico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-pareja-reproductora',
    title: 'Pareja Reproductora en Acondicionamiento',
    description:
      'Macho y hembra adultos mostrando la coloración nítida de la cera (azul y marrón) y plumaje en óptima condición.',
    imageUrl: '/ejemplares/pareja-reproductora.jpg',
    category: 'adultos',
    tags: ['pareja', 'cria', 'macho', 'hembra', 'celo'],
    credit: 'Guía de Cría',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-polluelos-nido',
    title: 'Polluelos en Nido Cóncavo a los 12 Días',
    description:
      'Desarrollo de los primeros cañones de pluma en nido de madera limpio con concavidad preventiva.',
    imageUrl: '/ejemplares/polluelos.jpg',
    category: 'polluelos',
    tags: ['nido', 'polluelos', 'pichones', 'desarrollo'],
    credit: 'Seguimiento de Nidadas',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-spangle-perlado',
    title: 'Perlado Simple Factor (Spangle SF)',
    description:
      'Ribete alar negro fino invertido con centro blanco sobre cuerpo azul cobalto.',
    imageUrl: '/ejemplares/perlado-sf.jpg',
    category: 'mutaciones',
    mutationName: 'Perlado (Spangle SF)',
    mutations: ['Perlado (Spangle SF)'],
    tags: ['perlado', 'spangle', 'sf', 'alas'],
    credit: 'Colección de Mutaciones',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-violeta-cobalto',
    title: 'Combinación Violeta Cobalto',
    description:
      'Sinergia del factor de oscuridad 1D con el factor modificador violeta, produciendo un púrpura visual profundo.',
    imageUrl: '/ejemplares/violeta-cobalto.jpg',
    category: 'combinaciones',
    factorName: 'Factor Violeta + Cobalto',
    tags: ['violeta', 'cobalto', 'purpura', 'factor_violeta'],
    credit: 'Línea de Color y Factores',
    verificationStatus: 'verified'
  },

  // =========================================================
  // SERIE 2 — NUEVOS EJEMPLARES
  // =========================================================

  {
    id: 'gal-opalino-verde',
    title: 'Opalino Línea Verde',
    description:
      'Ejemplar opalino de línea verde, mostrando la modificación característica del patrón alar y dorsal asociada a esta mutación.',
    imageUrl: '/ejemplares/opalino-verde.jpg',
    category: 'mutaciones',
    mutationName: 'Opalino',
    mutations: ['Opalino'],
    colorLine: 'Línea Verde',
    tags: ['opalino', 'verde', 'mutacion', 'linea_verde'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-opalino-azul',
    title: 'Opalino Línea Azul',
    description:
      'Ejemplar opalino de línea azul, utilizado como referencia visual para comparar la expresión de la mutación en la serie azul.',
    imageUrl: '/ejemplares/opalino-azul.jpg',
    category: 'mutaciones',
    mutationName: 'Opalino',
    mutations: ['Opalino'],
    colorLine: 'Línea Azul',
    tags: ['opalino', 'azul', 'mutacion', 'linea_azul'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-canela-verde',
    title: 'Canela Línea Verde',
    description:
      'Ejemplar canela de línea verde, con la característica reducción de la intensidad de las marcas oscuras producida por esta mutación.',
    imageUrl: '/ejemplares/canela-verde.jpg',
    category: 'mutaciones',
    mutationName: 'Canela',
    mutations: ['Canela'],
    colorLine: 'Línea Verde',
    tags: ['canela', 'verde', 'mutacion', 'linea_verde'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-canela-azul',
    title: 'Canela Línea Azul',
    description:
      'Ejemplar canela de línea azul, mostrando la combinación visual del factor de color azul con la mutación canela.',
    imageUrl: '/ejemplares/canela-azul.jpg',
    category: 'mutaciones',
    mutationName: 'Canela',
    mutations: ['Canela'],
    colorLine: 'Línea Azul',
    tags: ['canela', 'azul', 'mutacion', 'linea_azul'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-alas-claras',
    title: 'Alas Claras',
    description:
      'Ejemplar que presenta el patrón característico de Alas Claras, con reducción de melanina en las marcas alares.',
    imageUrl: '/ejemplares/alas-claras.jpg',
    category: 'mutaciones',
    mutationName: 'Alas Claras',
    mutations: ['Alas Claras'],
    tags: ['alas_claras', 'clearwing', 'mutacion'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-alas-grises',
    title: 'Alas Grises',
    description:
      'Ejemplar de Alas Grises, caracterizado por una reducción de la intensidad de las marcas alares y corporales.',
    imageUrl: '/ejemplares/alas-grises.jpg',
    category: 'mutaciones',
    mutationName: 'Alas Grises',
    mutations: ['Alas Grises'],
    tags: ['alas_grises', 'greywing', 'mutacion'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-blackwing',
    title: 'Blackwing — Alas Negras',
    description:
      'Ejemplar de referencia para la expresión Blackwing, caracterizada por una concentración marcada de pigmentación oscura en las alas.',
    imageUrl: '/ejemplares/blackwing.jpg',
    category: 'mutaciones',
    mutationName: 'Blackwing',
    mutations: ['Blackwing'],
    tags: ['blackwing', 'alas_negras', 'mutacion'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-fallow',
    title: 'Fallow',
    description:
      'Ejemplar Fallow utilizado como referencia visual de esta mutación, incluyendo sus características particulares de pigmentación y coloración ocular.',
    imageUrl: '/ejemplares/fallow.jpg',
    category: 'mutaciones',
    mutationName: 'Fallow',
    mutations: ['Fallow'],
    tags: ['fallow', 'mutacion', 'pigmentacion'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-albino',
    title: 'Albino',
    description:
      'Ejemplar albino de referencia visual, caracterizado por la ausencia de melanina visible y la expresión de la serie azul junto con la mutación Ino.',
    imageUrl: '/ejemplares/albino.jpg',
    category: 'mutaciones',
    mutationName: 'Albino',
    mutations: ['Ino (Albino)'],
    colorLine: 'Línea Azul',
    tags: ['albino', 'ino', 'azul', 'ojos_rojos'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },

  {
    id: 'gal-cremino',
    title: 'Cremino',
    description:
      'Ejemplar Cremino de referencia, correspondiente a una combinación visual de la mutación Ino con características de la serie azul.',
    imageUrl: '/ejemplares/cremino.jpg',
    category: 'mutaciones',
    mutationName: 'Cremino',
    mutations: ['Ino'],
    colorLine: 'Línea Azul',
    tags: ['cremino', 'ino', 'azul', 'amarillo'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  }
];

export const GALLERY_DATA = GALLERY_ITEMS;
