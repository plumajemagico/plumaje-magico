import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
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
  }
];

export const GALLERY_DATA = GALLERY_ITEMS;
