import { GeneticFactor } from '../types';

export const GENETIC_FACTORS_DATA: GeneticFactor[] = [
  {
    id: 'factor-oscuridad',
    name: 'Factor de Oscuridad (Dark Factor - D)',
    slug: 'factor-oscuridad',
    type: 'oscuridad',
    inheritance: 'incomplete_dominant',
    description: 'El factor de oscuridad es un gen codominante (o de dominancia incompleta) autosómico que aumenta la densidad de gránulos de eumelanina en la zona esponjosa de las bárbulas de las plumas, oscureciendo el color corporal del ave en pasos medibles.',
    geneticBehavior: 'Actúa de forma acumulativa y acumulable: 0D (sin factor), 1D (Simple Factor - SF), 2D (Doble Factor - DF). Se transmite de forma independiente a la línea de color de base.',
    visualEffect: 'En línea verde: 0D = Césped, 1D = Laurel, 2D = Oliva. En línea azul: 0D = Cielo, 1D = Cobalto, 2D = Malva.',
    examples: [
      'Césped (0D) x Cobalto (1D) = 50% Césped (0D), 50% Laurel (1D) en línea verde',
      'Cobalto (1D) x Cobalto (1D) = 25% Cielo (0D), 50% Cobalto (1D), 25% Malva (2D)'
    ],
    interactions: 'Interactúa sinérgicamente con el Factor Violeta (produciendo el codiciado Violeta Cobalto visual) y con el Factor Gris (donde el gris tiende a enmascarar la diferencia visual entre 0D, 1D y 2D).',
    verificationStatus: 'verified'
  },
  {
    id: 'factor-gris',
    name: 'Factor Gris (Grey Factor - G)',
    slug: 'factor-gris',
    type: 'gris',
    inheritance: 'dominant',
    description: 'El factor gris es un gen dominante autosómico que altera la estructura reflectante de las bárbulas, eliminando el efecto óptico de dispersión Rayleigh (responsable del color azul) y transformándolo en un tono gris neutro o verde grisáceo.',
    geneticBehavior: 'Es dominante completo. Un solo alelo (Simple Factor G/g) basta para expresar el fenotipo gris visualmente. Visualmente SF y DF son prácticamente idénticos en plumaje normal.',
    visualEffect: 'En línea azul convierte el cuerpo en un tono Gris uniforme (gris ceniza a plomizo) con manchas gulares Gris-Azuladas apagadas (no violetas) y cola negra. En línea verde produce el Verde Gris (Grey Green) con gulares grisáceas.',
    examples: [
      'Gris SF (G/g) x Azul Cielo (g/g) = 50% Gris SF, 50% Azul Cielo',
      'Gris DF (G/G) x Azul Cielo (g/g) = 100% Gris SF'
    ],
    interactions: 'Las manchas gulares del periquito gris cambian de violeta brillante a gris azulado/plomo, lo que permite distinguirlo con certeza de un Malva (que mantiene gulares violetas).',
    verificationStatus: 'verified'
  },
  {
    id: 'factor-violeta',
    name: 'Factor Violeta (Violet Factor - V)',
    slug: 'factor-violeta',
    type: 'violeta',
    inheritance: 'incomplete_dominant',
    description: 'El factor violeta es un modificador de color de dominancia incompleta que intensifica la refracción de luz azul-violeta en la estructura de la pluma. Su expresión visual más nítida y espectacular ocurre cuando se combina con el color Azul Cobalto (1D).',
    geneticBehavior: 'Autosómico de dominancia incompleta. Puede estar en Simple Factor (SF) o Doble Factor (DF). Puede estar presente en línea verde (Verde Violeta) o azul.',
    visualEffect: 'En Azul Cobalto + 1V (o 2V): Produce un color púrpura/violeta visual intenso. En Azul Cielo + 1V: Produce un tono azul eléctrico profundo. En Malva + V: Produce un malva oscuro con matiz violáceo.',
    examples: [
      'Violeta Cobalto SF x Azul Cielo = 25% Violeta Cobalto, 25% Cobalto, 25% Violeta Cielo, 25% Cielo',
      'Verde Laurel Violeta (portador visual de violeta en línea verde con reflejos cálidos)'
    ],
    interactions: 'A menudo confundido con el cobalto intenso. La presencia de manchas gulares violetas ultra saturadas y el matiz morado en la rabadilla ayudan a confirmar su presencia.',
    verificationStatus: 'verified'
  }
];
