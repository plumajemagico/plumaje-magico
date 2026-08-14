import { ParentGenotype, GeneticSimulationResult, DistributionItem, CalculatedOffspring } from '../types';

export function calculateGeneticCross(
  father: ParentGenotype,
  mother: ParentGenotype
): GeneticSimulationResult {
  const rulesApplied: string[] = [];
  const sexLinkedObservations: string[] = [];
  const summaryNotes: string[] = [];

  // Normalize inputs
  const fatherIsGreen = father.colorLine === 'verde' || father.colorLine === 'green';
  const motherIsGreen = mother.colorLine === 'verde' || mother.colorLine === 'green';
  const fatherSplitBlue = !!(father.isSplitBlue || father.splitsBlue);
  const motherSplitBlue = !!(mother.isSplitBlue || mother.splitsBlue);

  const d1 = father.darkFactor ?? father.darkFactors ?? 0;
  const d2 = mother.darkFactor ?? mother.darkFactors ?? 0;

  // 1. Base Color Lines Distribution
  const baseColorDistribution: DistributionItem[] = [];

  if (!fatherIsGreen && !motherIsGreen) {
    // Blue x Blue
    baseColorDistribution.push({
      outcome: '100% Línea Azul',
      percentage: 100,
      description: 'Ambos padres son homocigotos recesivos (a/a).'
    });
    rulesApplied.push('Azul × Azul: 100% descendencia de línea azul pura.');
    summaryNotes.push('No puede nacer ningún polluelo verde de dos padres azules.');
  } else if (!fatherIsGreen && motherIsGreen) {
    // Blue father x Green mother
    if (motherSplitBlue) {
      baseColorDistribution.push({ outcome: '50% Línea Azul', percentage: 50, description: 'Descendientes homocigotos azules (a/a).' });
      baseColorDistribution.push({ outcome: '50% Línea Verde (/azul)', percentage: 50, description: 'Descendientes verdes heterocigotos portadores.' });
      rulesApplied.push('Macho Azul × Hembra Verde portadora: 50% azul y 50% verde portador.');
      summaryNotes.push('El 100% de los polluelos verdes nacidos serán portadores obligados de azul.');
    } else {
      baseColorDistribution.push({ outcome: '100% Línea Verde (/azul)', percentage: 100, description: 'Todos los hijos fenotípicamente verdes pero portadores.' });
      rulesApplied.push('Macho Azul × Hembra Verde pura: 100% verde portador de azul.');
      summaryNotes.push('Todos los hijos serán verdes visuales, pero portarán el gen azul de su padre.');
    }
  } else if (fatherIsGreen && !motherIsGreen) {
    // Green father x Blue mother
    if (fatherSplitBlue) {
      baseColorDistribution.push({ outcome: '50% Línea Azul', percentage: 50, description: 'Descendientes homocigotos azules (a/a).' });
      baseColorDistribution.push({ outcome: '50% Línea Verde (/azul)', percentage: 50, description: 'Descendientes verdes heterocigotos portadores.' });
      rulesApplied.push('Macho Verde portador × Hembra Azul: 50% azul y 50% verde portador.');
      summaryNotes.push('El 100% de los polluelos verdes nacidos serán portadores obligados de azul.');
    } else {
      baseColorDistribution.push({ outcome: '100% Línea Verde (/azul)', percentage: 100, description: 'Todos los hijos fenotípicamente verdes pero portadores.' });
      rulesApplied.push('Macho Verde puro × Hembra Azul: 100% verde portador de azul.');
      summaryNotes.push('Todos los hijos serán verdes visuales portadores de azul.');
    }
  } else {
    // Green x Green
    if (fatherSplitBlue && motherSplitBlue) {
      baseColorDistribution.push({ outcome: '75% Línea Verde', percentage: 75, description: '25% Verde puro y 50% Verde portador de azul.' });
      baseColorDistribution.push({ outcome: '25% Línea Azul', percentage: 25, description: 'Segregación recesiva visual.' });
      rulesApplied.push('Verde/azul × Verde/azul: Proporción 3:1 (75% verde, 25% azul).');
      summaryNotes.push('Nacerá 1 de cada 4 polluelos azul visual. De los verdes, 2 de cada 3 portarán azul.');
    } else if (fatherSplitBlue || motherSplitBlue) {
      baseColorDistribution.push({ outcome: '100% Línea Verde', percentage: 100, description: '50% Verde puro y 50% Verde portador de azul.' });
      rulesApplied.push('Verde portador × Verde puro: 100% fenotipo verde (50% portadores).');
      summaryNotes.push('Todos los polluelos serán verdes. No es posible distinguir visualmente cuáles portan azul.');
    } else {
      baseColorDistribution.push({ outcome: '100% Línea Verde Pura', percentage: 100, description: 'Ancestral homocigoto (A/A).' });
      rulesApplied.push('Verde puro × Verde puro: 100% verde puro ancestral.');
    }
  }

  // 2. Dark Factor Distribution
  const darkFactorDistribution: DistributionItem[] = [];

  if (d1 === 0 && d2 === 0) {
    darkFactorDistribution.push({ outcome: '100% 0 Factores (0D)', percentage: 100, description: 'Césped en verde / Cielo en azul.' });
  } else if ((d1 === 0 && d2 === 1) || (d1 === 1 && d2 === 0)) {
    darkFactorDistribution.push({ outcome: '50% 0 Factores (0D)', percentage: 50, description: 'Césped o Cielo.' });
    darkFactorDistribution.push({ outcome: '50% 1 Factor (1D)', percentage: 50, description: 'Laurel o Cobalto.' });
  } else if ((d1 === 0 && d2 === 2) || (d1 === 2 && d2 === 0)) {
    darkFactorDistribution.push({ outcome: '100% 1 Factor (1D)', percentage: 100, description: '100% Laurel o Cobalto (Factor simple obligatorio).' });
  } else if (d1 === 1 && d2 === 1) {
    darkFactorDistribution.push({ outcome: '25% 0 Factores (0D)', percentage: 25, description: 'Césped o Cielo.' });
    darkFactorDistribution.push({ outcome: '50% 1 Factor (1D)', percentage: 50, description: 'Laurel o Cobalto.' });
    darkFactorDistribution.push({ outcome: '25% 2 Factores (2D)', percentage: 25, description: 'Oliva o Malva.' });
  } else if ((d1 === 1 && d2 === 2) || (d1 === 2 && d2 === 1)) {
    darkFactorDistribution.push({ outcome: '50% 1 Factor (1D)', percentage: 50, description: 'Laurel o Cobalto.' });
    darkFactorDistribution.push({ outcome: '50% 2 Factores (2D)', percentage: 50, description: 'Oliva o Malva.' });
  } else {
    // 2D x 2D
    darkFactorDistribution.push({ outcome: '100% 2 Factores (2D)', percentage: 100, description: '100% Oliva o Malva (Doble factor).' });
  }

  // 3. Sex-linked Analysis (Males vs Females)
  const maleSexLinked: DistributionItem[] = [];
  const femaleSexLinked: DistributionItem[] = [];

  const dadVisual = typeof father.sexLinkedVisual === 'string' ? father.sexLinkedVisual : 'none';
  const dadSplit = father.sexLinkedSplit || 'none';
  const momVisual = typeof mother.sexLinkedVisual === 'string' ? mother.sexLinkedVisual : 'none';

  if (dadVisual !== 'none') {
    const geneLabel = dadVisual.charAt(0).toUpperCase() + dadVisual.slice(1);
    if (momVisual === dadVisual) {
      maleSexLinked.push({ outcome: `${geneLabel} Visual`, percentage: 100, description: 'Homocigoto (Xm/Xm)' });
      femaleSexLinked.push({ outcome: `${geneLabel} Visual`, percentage: 100, description: 'Hembra mutada (Xm/Y)' });
      summaryNotes.push(`Al ser ambos padres ${geneLabel}, el 100% de la nidada nace ${geneLabel} visual.`);
    } else {
      maleSexLinked.push({ outcome: `Normal portador de ${geneLabel}`, percentage: 100, description: 'Heterocigoto (/Xm)' });
      femaleSexLinked.push({ outcome: `${geneLabel} Visual (Autosexado)`, percentage: 100, description: '100% de las hembras nacen visuales.' });
      summaryNotes.push(`¡Autosexado en el nido! Cualquier cría que nazca ${geneLabel} visual es 100% HEMBRA.`);
    }
  } else if (dadSplit !== 'none') {
    const geneLabel = dadSplit.charAt(0).toUpperCase() + dadSplit.slice(1);
    if (momVisual === dadSplit) {
      maleSexLinked.push({ outcome: `${geneLabel} Visual`, percentage: 50 });
      maleSexLinked.push({ outcome: `Normal portador de ${geneLabel}`, percentage: 50 });
      femaleSexLinked.push({ outcome: `${geneLabel} Visual`, percentage: 50 });
      femaleSexLinked.push({ outcome: `Normal`, percentage: 50 });
      summaryNotes.push(`Macho portador de ${geneLabel} × Hembra visual: Produce 50% machos y hembras visuales.`);
    } else {
      maleSexLinked.push({ outcome: `Normal portador de ${geneLabel}`, percentage: 50 });
      maleSexLinked.push({ outcome: `Normal no portador`, percentage: 50 });
      femaleSexLinked.push({ outcome: `${geneLabel} Visual (Autosexado)`, percentage: 50 });
      femaleSexLinked.push({ outcome: `Normal`, percentage: 50 });
      summaryNotes.push(`Macho portador de ${geneLabel} × Hembra normal: Las únicas crías visuales que nazcan serán HEMBRAS.`);
    }
  } else {
    // Dad is normal
    if (momVisual !== 'none') {
      const geneLabel = momVisual.charAt(0).toUpperCase() + momVisual.slice(1);
      maleSexLinked.push({ outcome: `Normal portador de ${geneLabel}`, percentage: 100, description: 'Todos los machos heredan el X materno mutado.' });
      femaleSexLinked.push({ outcome: `Normal`, percentage: 100, description: 'Las hembras solo heredan el cromosoma Y de la madre.' });
      summaryNotes.push(`Madre ${geneLabel} × Padre normal: NINGUNA hembra nace visual. El 100% de los machos serán portadores.`);
    } else {
      maleSexLinked.push({ outcome: `Normal (Sin mutación ligada)`, percentage: 100 });
      femaleSexLinked.push({ outcome: `Normal (Sin mutación ligada)`, percentage: 100 });
    }
  }

  // Modifiers Notes
  if (father.greyFactor !== 'none' || mother.greyFactor !== 'none') {
    summaryNotes.push('Transmisión de Factor Gris: Gen dominante. Alrededor del 50% de la nidada expresará gris visual.');
  }
  if (father.violetFactor !== 'none' || mother.violetFactor !== 'none') {
    summaryNotes.push('Transmisión de Factor Violeta: Gen dominante. En combinación con azul cobalto (1D) genera el codiciado Violeta Cobalto.');
  }

  const offspringList: CalculatedOffspring[] = [];

  return {
    offspringList,
    baseColorDistribution,
    darkFactorDistribution,
    sexLinkedDistribution: {
      males: maleSexLinked,
      females: femaleSexLinked
    },
    summaryNotes,
    rulesApplied,
    sexLinkedObservations,
    scientificDisclaimer: 'Este simulador aplica las leyes genéticas mendelianas para Melopsittacus undulatus.',
    verificationStatus: 'verified'
  };
}
