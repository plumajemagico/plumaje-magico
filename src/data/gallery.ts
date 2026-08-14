import { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-verde-cesped',
    title: 'Periquito Australiano Silvestre (Verde Césped)',
    description: 'Fenotipo ancestral característico de las bandadas silvestres del interior australiano, con máscara amarilla intensa y seis manchas gulares negras.',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80',
    category: 'verde',
    colorLine: 'Línea Verde (0D Césped)',
    tags: ['ancestral', 'silvestre', 'verde', 'cesped'],
    credit: 'Plumaje Mágico / Archivo de Especies',
    verificationStatus: 'verified'
  },
  {
    id: 'gal-azul-cobalto',
    title: 'Azul Cobalto Clásico (1D)',
    description: 'Ejemplar de línea azul con 1 factor de oscuridad, mostrando un tono azul marino intenso y máscara blanca nítida.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    category: 'azul',
    colorLine: 'Línea Azul (1D Cobalto)',
    tags: ['cobalto', 'azul', '1d', 'linea_azul'],
    credit: 'Plumaje Mágico',
    verificationStatus: 'verified'
  },
  {
    id: 'gal-lutino',
    title: 'Lutino Clásico de Ojos Rojos',
    description: 'Supresión total de eumelanina con retención de psitacina amarilla botón de oro y cera rosa brillante.',
    imageUrl: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=1000&q=80',
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
    description: 'Color celeste luminoso sin factor de oscuridad, con ribeteado alar nítido y máscara blanca inmaculada.',
    imageUrl: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1000&q=80',
    category: 'azul',
    colorLine: 'Línea Azul (0D Cielo)',
    tags: ['cielo', 'sky_blue', '0d', 'azul'],
    credit: 'Archivo Fotográfico',
    verificationStatus: 'verified'
  },
  {
    id: 'gal-pareja-reproductora',
    title: 'Pareja Reproductora en Acondicionamiento',
    description: 'Macho y hembra adultos mostrando la coloración nítida de la cera (azul y marrón) y plumaje en óptima condición.',
    imageUrl: 'https://images.unsplash.com/photo-1518992028580-6d97bdca06c3?auto=format&fit=crop&w=1000&q=80',
    category: 'adultos',
    tags: ['pareja', 'cria', 'macho', 'hembra', 'celo'],
    credit: 'Guía de Cría',
    verificationStatus: 'verified'
  },
  {
    id: 'gal-polluelos-nido',
    title: 'Polluelos en Nido Cóncavo a los 12 Días',
    description: 'Desarrollo de los primeros cañones de pluma en nido de madera limpio con concavidad preventiva.',
    imageUrl: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=1000&q=80',
    category: 'polluelos',
    tags: ['nido', 'polluelos', 'pichones', 'desarrollo'],
    credit: 'Seguimiento de Nidadas',
    verificationStatus: 'verified'
  },
  {
    id: 'gal-spangle-perlado',
    title: 'Perlado Simple Factor (Spangle SF)',
    description: 'Ribete alar negro fino invertido con centro blanco sobre cuerpo azul cobalto.',
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80',
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
    description: 'Sinergia del factor de oscuridad 1D con el factor modificador violeta, produciendo un púrpura visual profundo.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    category: 'combinaciones',
    factorName: 'Factor Violeta + Cobalto',
    tags: ['violeta', 'cobalto', 'purpura', 'factor_violeta'],
    credit: 'Línea de Color y Factores',
    verificationStatus: 'verified'
  }
];

export const GALLERY_DATA = GALLERY_ITEMS;
