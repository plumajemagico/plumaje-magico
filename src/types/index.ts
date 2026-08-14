export type VerificationStatus = 'verified' | 'pending_review' | 'draft';

export type InheritanceType = 
  | 'dominant' 
  | 'recessive' 
  | 'sex_linked' 
  | 'incomplete_dominant' 
  | 'co_dominant' 
  | 'polygenic' 
  | 'autosomal_dominant'
  | 'autosomal_recessive'
  | 'other'
  | 'unknown';

export type AlleleDominance = 
  | 'dominant' 
  | 'recessive' 
  | 'co_dominant' 
  | 'incomplete_dominant' 
  | 'wild_type';

export interface GeneticValidation {
  status: 'verified' | 'pending_review' | 'conflicting_sources' | 'unknown';
  notes?: string;
  sources?: string[];
}

export interface Allele {
  id: string;
  symbol: string;
  name: string;
  locus: string;
  dominance: AlleleDominance;
  description: string;
  wildTypeComparison: string;
  mutationId?: string;
  notes?: string;
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface InheritanceRule {
  id: string;
  slug: string;
  type: InheritanceType;
  name: string;
  description: string;
  chromosomeType: 'autosomal' | 'sex_linked' | 'polygenic';
  canMaleCarry: boolean;
  canFemaleCarry: boolean;
  sfExpression: string;
  dfExpression?: string;
  malePossibleGenotypes?: string[];
  femalePossibleGenotypes?: string[];
  breedingOutcomesSummary: string[];
  rules: string[];
  examples: string[];
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface Combination {
  id: string;
  slug: string;
  name: string;
  alternativeNames?: string[];
  mutationIds: string[];
  description: string;
  phenotype: string;
  genotypeFormula?: string;
  breedingAdvice?: string;
  difficulty?: 'baja' | 'media' | 'alta' | 'experto';
  image?: string;
  visualChecklist?: string[];
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface GeneticsTerm {
  id: string;
  slug: string;
  term: string;
  shortDefinition: string;
  longDefinition: string;
  category: 'fundamentos' | 'herencia' | 'factores' | 'morfologia' | 'nomenclatura';
  beginnerExplanation?: string;
  expertExplanation?: string;
  examplesInBudgies: string[];
  relatedTerms: string[];
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface PunnettSquareData {
  id: string;
  title: string;
  category: string;
  description?: string;
  p1Name: string;
  p1Genotype: string;
  p1Phenotype: string;
  p2Name: string;
  p2Genotype: string;
  p2Phenotype: string;
  gametesTop: [string, string];
  gametesSide: [string, string];
  cells: [
    [string, string],
    [string, string]
  ];
  cellPhenotypes: [
    [string, string],
    [string, string]
  ];
  cellSexNotes?: [
    [string, string],
    [string, string]
  ];
  probabilities: {
    genotype: string;
    phenotype: string;
    percentage: number;
    isCarrier?: boolean;
    sex?: 'male' | 'female' | 'both';
    explanation?: string;
  }[];
  breederNotes?: string;
  verificationStatus: VerificationStatus;
}

export type ColorLineType = 'green' | 'blue';

export type DarkFactorLevel = 0 | 1 | 2; // 0 = Césped/Cielo, 1 = Laurel/Cobalto, 2 = Oliva/Malva

export type MutationCategory =
  | 'dominante'
  | 'recesiva'
  | 'ligada_sexo'
  | 'factores'
  | 'patrones'
  | 'otras'
  | 'estructural'
  | 'combinada';

export interface GalleryImage {
  id?: string;
  url: string;
  caption: string;
  author?: string;
  isVerified: boolean;
  tags?: string[];
}

export interface MutationItem {
  id: string;
  name: string;
  alternativeNames?: string[];
  slug: string;
  category: MutationCategory;
  inheritance: InheritanceType;
  shortDescription: string;
  description: string;
  phenotype: {
    bodyColor: string;
    wingMarkings: string;
    headAndMask: string;
    cereAndLegs: string;
    tailAndEyes: string;
  };
  geneticsExplanation: string;
  expressionSF_DF?: {
    singleFactor: string;
    doubleFactor: string;
  };
  carriersExplanation: string;
  breedingTips: string;
  combinationsSummary: string[];
  images: GalleryImage[];
  tags: string[];
  relatedMutations: string[];
  relatedFactors?: string[];
  relatedLines?: ('linea-verde' | 'linea-azul')[];
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
  sources?: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export interface DarkFactorVariation {
  factor: DarkFactorLevel;
  name: string;
  symbol: string;
  description: string;
  hexColor: string;
  visualCharacteristics: string[];
}

export interface ColorLine {
  id: string;
  name: string;
  baseColor: string;
  description: string;
  geneticsExplanation: string;
  darkFactorLevels: DarkFactorVariation[];
  verificationStatus: VerificationStatus;
}

export type ColorCategory =
  | 'green_series'
  | 'blue_series'
  | 'yellow'
  | 'white'
  | 'grey'
  | 'violet'
  | 'dark_factor'
  | 'color_factor'
  | 'pattern'
  | 'other';

export interface VisualProfile {
  bodyColor: string;
  mask: string;
  cheekPatches?: string;
  wingMarkings: string;
  wings: string;
  tail: string;
  eyes: string;
  cere: string;
  legs: string;
}

export interface VisualFeature {
  part: 'cuerpo' | 'mascara' | 'ondulaciones' | 'alas' | 'cola' | 'ojos' | 'cera' | 'patas' | 'gulares';
  title: string;
  description: string;
  color?: string;
  notes?: string;
}

export interface ColorImage {
  id: string;
  url: string;
  caption: string;
  author?: string;
  license?: string;
  verifiedIdentification: boolean;
  tags?: string[];
}

export interface ColorVariation {
  id: string;
  name: string;
  description: string;
  visualDifferences: string[];
  geneticsContext?: string;
}

export interface ColorItem {
  id: string;
  slug: string;
  name: string;
  category: ColorCategory;
  categoryLabel: string;
  baseColor: string;
  hexColor?: string;
  shortDescription: string;
  description: string;
  visualCharacteristics: string[];
  visualProfile: VisualProfile;
  relatedMutations: string[]; // references MutationItem IDs or slugs
  relatedFactors: string[];   // references GeneticFactor IDs or slugs
  relatedLines?: ('linea-verde' | 'linea-azul')[];
  examples?: string[];
  images: ColorImage[];
  variations?: ColorVariation[];
  sources?: string[];
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
  };
}

export interface ColorCompareItem {
  colorAId: string;
  colorBId: string;
  similarities: string[];
  differences: string[];
  differentiationKeys: string[];
}

// Architecture types prepared for future visual identification
export interface VisualIdentificationInput {
  imageUrl?: string;
  imageFile?: any;
  observedFeatures?: Partial<VisualProfile>;
}

export interface PossiblePhenotypeMatch {
  colorId: string;
  colorName: string;
  confidence: number;
  notes: string;
}

export interface PossibleMutationMatch {
  mutationId: string;
  mutationName: string;
  probabilityCategory: 'alta' | 'media' | 'posible';
}

export interface VisualIdentificationResult {
  possiblePhenotypes: PossiblePhenotypeMatch[];
  possibleMutations: PossibleMutationMatch[];
  confidence: number;
  needsExpertReview: boolean;
  disclaimer: string;
}

export interface GeneticFactor {
  id: string;
  name: string;
  slug: string;
  type: 'oscuridad' | 'gris' | 'violeta' | 'otro';
  inheritance: InheritanceType;
  description: string;
  geneticBehavior: string;
  visualEffect: string;
  examples: string[];
  interactions: string;
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'historia' | 'anatomia' | 'plumaje' | 'comportamiento' | 'comunicacion' | 'edad_sexo' | 'glosario';
  summary: string;
  content: string;
  readTimeMinutes: number;
  tags: string[];
  image?: string;
  verificationStatus: VerificationStatus;
}

export interface CareSection {
  heading: string;
  body: string;
  tips?: string[];
  warnings?: string[];
}

export type CareCategory =
  | 'alimentacion'
  | 'alojamiento'
  | 'perchas'
  | 'enriquecimiento'
  | 'juguetes'
  | 'ejercicio'
  | 'seguridad'
  | 'seguridad_aire'
  | 'higiene'
  | 'agua'
  | 'descanso'
  | 'entorno'
  | 'socializacion'
  | 'manejo'
  | 'transporte'
  | 'nueva_ave';

export interface CareArticle {
  id: string;
  slug: string;
  title: string;
  category: CareCategory;
  shortDescription: string;
  content: string;
  sections?: CareSection[];
  tips: string[];
  warnings?: string[];
  breederNotes?: string;
  checklist?: string[];
  relatedHealth?: {
    title: string;
    sectionId: string;
    description?: string;
  }[];
  relatedNutrition?: string[];
  relatedArticles?: string[];
  image?: string;
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export type FoodCategory =
  | 'semillas'
  | 'cereales'
  | 'verduras'
  | 'frutas'
  | 'hierbas'
  | 'brotes'
  | 'ocasionales'
  | 'evitar';

export type FoodSafetyStatus = 'safe' | 'moderate' | 'avoid' | 'pending_review';

export interface FoodSource {
  title: string;
  author?: string;
  organization?: string;
  url?: string;
  date?: string;
}

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  scientificName?: string;
  alternativeNames?: string[];
  category: FoodCategory;
  shortDescription: string;
  description: string;
  forParakeet?: string;
  preparation?: string[];
  feedingNotes?: string;
  precautions?: string[];
  nutrition?: {
    highlights?: string[];
    details?: string;
  };
  safetyStatus: FoodSafetyStatus;
  safetyReason?: string;
  tags?: string[];
  image?: string;
  icon?: string;
  relatedFoods?: string[];
  relatedCare?: {
    id: string;
    title: string;
    description?: string;
  }[];
  relatedHealth?: {
    id: string;
    title: string;
    description?: string;
  }[];
  relatedBreeding?: {
    id: string;
    title: string;
    description?: string;
  }[];
  sources?: (string | FoodSource)[];
  verificationStatus: VerificationStatus;
  breederNotes?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  nutritionalHighlights?: string[];
}

export interface FeedingGuideArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'nutricion' | 'semillas' | 'agua' | 'cria' | 'polluelos' | 'nuevos-alimentos' | 'problemas';
  summary: string;
  content: string;
  sections?: {
    heading: string;
    body: string;
    tips?: string[];
    warnings?: string[];
  }[];
  tips?: string[];
  warnings?: string[];
  breederNotes?: string;
  relatedFoods?: string[];
  relatedCare?: {
    id: string;
    title: string;
    description?: string;
  }[];
  relatedHealth?: {
    id: string;
    title: string;
    description?: string;
  }[];
  relatedBreeding?: {
    id: string;
    title: string;
    description?: string;
  }[];
  sources?: (string | FoodSource)[];
  verificationStatus: VerificationStatus;
}

export type SafetyCategory =
  | 'household'
  | 'food'
  | 'plants'
  | 'chemicals'
  | 'environment'
  | 'equipment'
  | 'other';

export type SafetyRiskLevel = 'critical' | 'high' | 'medium' | 'low';

export interface SafetyItem {
  id: string;
  name: string;
  category: SafetyCategory;
  description: string;
  riskLevel: SafetyRiskLevel;
  prevention: string;
  emergencyAction?: string;
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface CareChecklistItem {
  id: string;
  text: string;
  details?: string;
}

export interface CareChecklist {
  id: string;
  title: string;
  description: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'flight' | 'quarantine';
  items: CareChecklistItem[];
}

export interface CareStep {
  stepNumber: number;
  title: string;
  description: string;
  tips?: string[];
  warnings?: string[];
}

export interface CareStepGuide {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  steps: CareStep[];
  verificationStatus: VerificationStatus;
  sources?: string[];
}

export interface CareGuide {
  id: string;
  slug: string;
  title: string;
  category: 'alimentacion' | 'jaula_higiene' | 'agua_bano' | 'sueno' | 'juguetes' | 'seguridad' | 'ambiente' | 'socializacion';
  summary: string;
  iconName: string;
  sections: CareSection[];
  doList: string[];
  dontList: string[];
  verificationStatus: VerificationStatus;
}

export type HealthCategory =
  | 'respiratory'
  | 'digestive'
  | 'parasitic'
  | 'plumage'
  | 'skin'
  | 'feet_beak'
  | 'nutrition'
  | 'infectious'
  | 'reproductive'
  | 'other';

export interface HealthCondition {
  id: string;
  slug: string;
  name: string;
  scientificOrAlternativeName?: string;
  category: HealthCategory;
  shortDescription: string;
  description: string;
  signs: string[];
  riskFactors?: string[];
  prevention: string[];
  diagnosis: string;
  treatment: string;
  whenToSeeVet: string;
  image?: string;
  sources?: string[];
  relatedConditions?: string[];
  relatedTopics?: {
    title: string;
    sectionId: string;
    description?: string;
  }[];
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
  isEmergency: boolean;
  tags: string[];
  technicalDetails?: {
    pathogen?: string;
    transmission?: string;
    incubation?: string;
    clinicalDifferential?: string[];
  };
}

export type BreedingCategory =
  | 'preparacion'
  | 'seleccion'
  | 'parejas'
  | 'nido'
  | 'puesta'
  | 'huevos'
  | 'incubacion'
  | 'nacimiento'
  | 'polluelos'
  | 'alimentacion-polluelos'
  | 'destete'
  | 'problemas'
  | 'genetica'
  | 'registro';

export interface BreedingArticleSection {
  heading: string;
  body: string;
  tips?: string[];
  warnings?: string[];
}

export interface BreedingRelatedItem {
  id: string;
  title: string;
  type: 'health' | 'care' | 'genetics' | 'breeding';
  targetId?: string;
  description?: string;
}

export interface BreedingArticle {
  id: string;
  slug: string;
  title: string;
  category: BreedingCategory;
  shortDescription: string;
  content: string;
  icon?: string;
  sections?: BreedingArticleSection[];
  tips?: string[];
  warnings?: string[];
  breederNotes?: string;
  checklist?: string[];
  relatedArticles?: string[];
  relatedHealth?: BreedingRelatedItem[];
  relatedCare?: BreedingRelatedItem[];
  relatedGenetics?: BreedingRelatedItem[];
  sources?: string[];
  verificationStatus: VerificationStatus;
  verificationNotes?: string;
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface BreedingStage {
  id: string;
  slug: string;
  name?: string;
  title: string;
  order: number;
  summary: string;
  description?: string;
  duration?: string;
  estimatedDuration?: string;
  timeline?: string;
  details: string[];
  requirements?: string[];
  tips: string[];
  precautions?: string[];
  criticalWarnings?: string[];
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface BreedingChecklistItem {
  id: string;
  text: string;
  details?: string;
  phase: 'preparacion' | 'cria' | 'post-nacimiento' | 'destete' | 'general';
}

export interface BreedingChecklist {
  id: string;
  title: string;
  phase: 'preparacion' | 'cria' | 'post-nacimiento' | 'destete' | 'general';
  description: string;
  items: BreedingChecklistItem[];
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface EggGuide {
  id: string;
  title: string;
  status: 'fertil' | 'infertil' | 'interrumpido' | 'aberrante' | 'eclosion';
  statusLabel: string;
  description: string;
  visualDescription: string;
  dayRange: string;
  actionGuidance: string;
  precautions: string[];
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface ChickDevelopmentStage {
  id: string;
  slug: string;
  dayRange: string;
  title: string;
  physicalMilestones: string[];
  parentalCare: string;
  breederTasks: string[];
  precautions: string[];
  nutritionNotes?: string;
  sources?: string[];
  verificationStatus: VerificationStatus;
}

export interface BreedingRecordEntry {
  id: string;
  pairName: string;
  maleRing: string;
  femaleRing: string;
  maleGenetics: string;
  femaleGenetics: string;
  pairingDate: string;
  nestInstalledDate: string;
  firstEggDate?: string;
  clutchSize: number;
  fertileEggs: number;
  hatchedCount: number;
  weanedCount: number;
  eggsData: {
    eggNumber: number;
    layDate: string;
    isFertile?: boolean;
    hatchDate?: string;
    bandNumber?: string;
    mutationResult?: string;
    notes?: string;
  }[];
  observations: string;
}

export interface RegisteredBird {
  id: string;
  bandNumber: string;
  name: string;
  sex: 'macho' | 'hembra' | 'indeterminado';
  birthDate?: string;
  colorLine: 'green' | 'blue';
  darkFactors: DarkFactorLevel;
  greyFactor: boolean;
  violetFactor: boolean;
  mutationIds: string[];
  carrierMutationIds: string[];
  fatherId?: string;
  fatherBand?: string;
  motherId?: string;
  motherBand?: string;
  photoUrl?: string;
  notes?: string;
  acquisitionDate?: string;
  status: 'activo' | 'reproduccion' | 'descanso' | 'juvenil' | 'retirado' | 'cedido';
  createdAt: string;
}

export interface BirdRecord {
  id: string;
  name: string;
  ringNumber?: string;
  sex: 'male' | 'female' | 'unknown';
  colorLine: string;
  mutations: string[];
  birthDate?: string;
  fatherId?: string;
  motherId?: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'verde' | 'azul' | 'mutaciones' | 'factores' | 'combinaciones' | 'polluelos' | 'adultos' | 'lineas_color' | 'anatomia' | 'cria';
  mutationName?: string;
  colorLine?: string;
  factorName?: string;
  mutations?: string[];
  credit?: string;
  tags?: string[];
  verificationStatus?: VerificationStatus;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'genetica' | 'morfologia' | 'cria' | 'colores';
}

export interface CalculatedOffspring {
  colorLine: 'green' | 'blue';
  colorName: string;
  darkFactors: DarkFactorLevel;
  mutationsVisual: string[];
  mutationsSplit: string[];
  sexPossibilities: 'ambos' | 'solo_machos' | 'solo_hembras';
  probabilityPercentage: number;
  description: string;
}

export interface ParentGenotype {
  sex?: 'macho' | 'hembra';
  colorLine: 'verde' | 'azul' | 'green' | 'blue';
  isSplitBlue?: boolean;
  splitsBlue?: boolean;
  darkFactor?: DarkFactorLevel;
  darkFactors?: DarkFactorLevel;
  greyFactor: 'none' | 'single' | 'double' | boolean;
  violetFactor: 'none' | 'single' | 'double' | boolean;
  sexLinkedVisual: 'none' | 'opalino' | 'canela' | 'ino' | string[];
  sexLinkedSplit?: 'none' | 'opalino' | 'canela' | 'ino';
  sexLinkedCarriers?: string[];
  dominantMutations?: string[];
  recessiveVisual?: string[];
  recessiveCarriers?: string[];
}

export interface DistributionItem {
  outcome: string;
  percentage: number;
  description?: string;
}

export interface GeneticSimulationResult {
  offspringList: CalculatedOffspring[];
  baseColorDistribution: DistributionItem[];
  darkFactorDistribution: DistributionItem[];
  sexLinkedDistribution: {
    males: DistributionItem[];
    females: DistributionItem[];
  };
  summaryNotes: string[];
  rulesApplied: string[];
  sexLinkedObservations: string[];
  scientificDisclaimer: string;
  verificationStatus: VerificationStatus;
}
