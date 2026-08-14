import { ColorLine } from '../types';

export const COLOR_LINES_DATA: ColorLine[] = [
  {
    id: 'verde',
    name: 'Línea Verde (Silvestre / Ancestral)',
    baseColor: 'Verde (Psitacina amarilla + Estructura azul)',
    description: 'La línea verde es la forma silvestre original de Melopsittacus undulatus nativa de Australia. Presenta pigmento amarillo (psitacina) combinado con el reflejo estructural azul de las células del plumaje.',
    geneticsExplanation: 'El alelo verde (F+) es genéticamente dominante sobre el alelo azul (f). Un periquito verde puede ser homocigoto (puro) o heterocigoto portador de azul (Verde / azul).',
    verificationStatus: 'verified',
    darkFactorLevels: [
      {
        factor: 0,
        name: 'Verde Césped (Light Green)',
        symbol: 'D/0 (Verde sin factor)',
        description: 'Color verde brillante y vivo, correspondiente al fenotipo silvestre ancestral puro.',
        hexColor: '#65a30d', // vibrant grass green
        visualCharacteristics: [
          'Cuerpo: Verde manzana brillante y uniforme',
          'Máscara: Amarillo intenso con 6 manchas gulares negras bien definidas',
          'Gulares: Azul violeta brillante',
          'Plumas de vuelo (remeras): Negras con borde amarillo',
          'Timoneras centrales (cola): Azul oscuro brillante'
        ]
      },
      {
        factor: 1,
        name: 'Verde Laurel (Dark Green)',
        symbol: '1D (Verde con 1 factor de oscuridad)',
        description: 'Tonalidad verde más oscura y profunda, con mayor densidad de melanina en la capa de esponja de las bárbulas.',
        hexColor: '#15803d', // laurel dark green
        visualCharacteristics: [
          'Cuerpo: Verde bosque oscuro y saturado',
          'Máscara: Amarillo intenso',
          'Gulares: Azul violeta oscuro',
          'Cola: Azul más oscuro con reflejos casi negros'
        ]
      },
      {
        factor: 2,
        name: 'Verde Oliva (Olive Green)',
        symbol: '2D (Verde con 2 factores de oscuridad)',
        description: 'Tonalidad verde muy oscura, apagada y con matiz oliva terroso debido al doble factor de oscuridad.',
        hexColor: '#3f6212', // olive green
        visualCharacteristics: [
          'Cuerpo: Verde oliva profundo y mate',
          'Máscara: Amarillo cálido',
          'Gulares: Violeta opaco oscuro',
          'Cola: Azul marino casi negro'
        ]
      }
    ]
  },
  {
    id: 'azul',
    name: 'Línea Azul (Mutación de Pérdida de Psitacina)',
    baseColor: 'Azul (Ausencia de psitacina amarilla)',
    description: 'La línea azul surge por una mutación recesiva autosómica que inhibe total o parcialmente la síntesis de psitacina (pigmento amarillo). Al quedar solo la estructura física de la pluma y la melanina, la luz dispersada se percibe azul.',
    geneticsExplanation: 'El alelo azul (f) es recesivo autosómico. Para manifestarse visualmente requiere dos copias del gen (homocigoto recesivo f/f). Un periquito de línea azul nunca puede portar verde, pero sí factores de oscuridad y otras mutaciones.',
    verificationStatus: 'verified',
    darkFactorLevels: [
      {
        factor: 0,
        name: 'Azul Cielo (Sky Blue)',
        symbol: 'D/0 (Azul sin factor de oscuridad)',
        description: 'Color azul claro, luminoso y brillante, equivalente al verde césped pero sin psitacina.',
        hexColor: '#38bdf8', // sky blue
        visualCharacteristics: [
          'Cuerpo: Azul celeste puro y radiante',
          'Máscara: Blanco puro con manchas gulares negras',
          'Gulares: Azul violeta brillante',
          'Cola: Azul profundo con brillo marino'
        ]
      },
      {
        factor: 1,
        name: 'Azul Cobalto (Cobalt)',
        symbol: '1D (Azul con 1 factor de oscuridad)',
        description: 'Color azul intenso, rico y saturado, con un factor de oscuridad.',
        hexColor: '#1d4ed8', // deep cobalt blue
        visualCharacteristics: [
          'Cuerpo: Azul cobalto intenso y vibrante',
          'Máscara: Blanco nítido',
          'Gulares: Violeta profundo',
          'Cola: Azul medianoche muy oscuro'
        ]
      },
      {
        factor: 2,
        name: 'Azul Malva (Mauve)',
        symbol: '2D (Azul con 2 factores de oscuridad)',
        description: 'Color azul grisáceo oscuro con reflejos plomizos o violáceos tenues por el doble factor de oscuridad.',
        hexColor: '#475569', // mauve slate
        visualCharacteristics: [
          'Cuerpo: Gris azulado plomizo oscuro con reflejos violáceos apagados',
          'Máscara: Blanco puro',
          'Gulares: Violeta oscuro mate',
          'Cola: Negro azulado'
        ]
      }
    ]
  }
];
