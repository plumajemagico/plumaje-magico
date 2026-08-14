import React, { useState } from 'react';
import {
  Apple,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Sparkles,
  ShieldAlert,
  Info,
} from 'lucide-react';
import { FOOD_ITEMS_DATA } from '../../data/care';
import { FoodCategory, FoodItem, FoodSafetyStatus } from '../../types';
import { VerificationBadge } from '../VerificationBadge';

export const FoodLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSafety, setSelectedSafety] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'Todos los Alimentos' },
    { id: 'semillas', label: 'Semillas y Granos' },
    { id: 'cereales', label: 'Cereales y Germinados' },
    { id: 'verduras', label: 'Verduras y Hortalizas' },
    { id: 'frutas', label: 'Frutas' },
    { id: 'hierbas', label: 'Hierbas Aromáticas' },
    { id: 'ocasionales', label: 'Ocasionales / Cría' },
    { id: 'evitar', label: '🚫 Tóxicos / Prohibidos' },
  ];

  const safetyFilters: { id: string; label: string }[] = [
    { id: 'all', label: 'Cualquier Estado' },
    { id: 'safe', label: 'Seguro y Apto' },
    { id: 'moderate', label: 'Moderación / Ocasional' },
    { id: 'avoid', label: 'Prohibido / Tóxico' },
  ];

  const getSafetyBadge = (status: FoodSafetyStatus) => {
    switch (status) {
      case 'safe':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Apto y Seguro</span>
          </span>
        );
      case 'moderate':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>Moderación / Ocasional</span>
          </span>
        );
      case 'avoid':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-red-100 text-red-900 border border-red-300">
            <XCircle className="w-3.5 h-3.5 text-red-700" />
            <span>Tóxico / Prohibido</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>En Revisión</span>
          </span>
        );
    }
  };

  const filteredFoods = FOOD_ITEMS_DATA.filter((food) => {
    const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
    const matchesSafety = selectedSafety === 'all' || food.safetyStatus === selectedSafety;
    const matchesSearch =
      searchTerm.trim() === '' ||
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (food.scientificName && food.scientificName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      food.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSafety && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
          <Apple className="w-3.5 h-3.5" />
          <span>Diccionario Zootécnico de Alimentos</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
          Biblioteca de Alimentos para Periquitos
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-4xl leading-relaxed">
          Consulta qué alimentos son saludables, cuáles deben administrarse con moderación y cuáles resultan estrictamente tóxicos o mortales. No existe una dieta única universal, pero la variedad equilibrada entre semillas limpias y verduras frescas diarias es el pilar de la longevidad aviar.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="food-search-input"
            type="text"
            placeholder="Buscar alimento (ej. brócoli, aguacate, espinaca, panizo, manzana)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Category filters */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            <span>Filtrar por Categoría de Alimento:</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`food-cat-${cat.id}-btn`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-2xs font-bold'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Safety filters */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <ShieldAlert className="w-3 h-3" />
            <span>Filtrar por Estado de Seguridad Toxicológica:</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {safetyFilters.map((s) => (
              <button
                key={s.id}
                id={`food-safety-${s.id}-btn`}
                onClick={() => setSelectedSafety(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedSafety === s.id
                    ? 'bg-slate-800 text-white shadow-2xs font-bold'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Food Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredFoods.map((food) => {
          const isAvoid = food.safetyStatus === 'avoid';
          const isModerate = food.safetyStatus === 'moderate';

          return (
            <div
              key={food.id}
              id={`food-card-${food.id}`}
              className={`rounded-2xl border p-5 space-y-4 flex flex-col justify-between transition-all ${
                isAvoid
                  ? 'bg-red-50/40 border-red-200 shadow-2xs'
                  : isModerate
                  ? 'bg-amber-50/30 border-amber-200 shadow-2xs'
                  : 'bg-white border-slate-200 shadow-2xs hover:border-emerald-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {food.name}
                    </h3>
                    {food.scientificName && (
                      <span className="text-[11px] italic text-slate-500 block">
                        {food.scientificName}
                      </span>
                    )}
                  </div>
                  {getSafetyBadge(food.safetyStatus)}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {food.description}
                </p>

                {/* Feeding Notes */}
                <div
                  className={`p-3 rounded-xl text-xs space-y-1 ${
                    isAvoid
                      ? 'bg-red-100/70 text-red-950 border border-red-200'
                      : isModerate
                      ? 'bg-amber-100/70 text-amber-950 border border-amber-200'
                      : 'bg-emerald-50/80 text-emerald-950 border border-emerald-200/70'
                  }`}
                >
                  <span className="font-bold block uppercase tracking-wider text-[10px]">
                    {isAvoid ? '⚠️ Motivo de toxicidad:' : '💡 Modo de administración y frecuencia:'}
                  </span>
                  <p className="leading-relaxed">{food.feedingNotes}</p>
                </div>

                {/* Nutritional Highlights */}
                {food.nutritionalHighlights && food.nutritionalHighlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {food.nutritionalHighlights.map((hl, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Sources */}
              {food.sources && food.sources.length > 0 && (
                <div className="pt-3 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="truncate max-w-[200px]">Fuente: {food.sources[0]}</span>
                  <VerificationBadge status={food.verificationStatus} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredFoods.length === 0 && (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 text-center space-y-2">
          <p className="text-sm font-semibold text-slate-700">
            No se encontraron alimentos con los filtros actuales.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedSafety('all');
            }}
            className="text-xs font-bold text-emerald-800 hover:underline"
          >
            Restablecer todos los filtros
          </button>
        </div>
      )}
    </div>
  );
};
