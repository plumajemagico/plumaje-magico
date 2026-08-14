import React, { useState, useMemo } from 'react';
import { FoodItem } from '../../types';
import { FoodCard } from './FoodCard';
import { FoodSearch } from './FoodSearch';
import { FoodFilters } from './FoodFilters';
import { Apple, SearchX, RotateCcw } from 'lucide-react';

interface FoodGridProps {
  foods: FoodItem[];
  onSelectFood: (food: FoodItem) => void;
  audience?: 'beginner' | 'breeder';
  initialCategory?: string;
  initialSafety?: string;
}

export const FoodGrid: React.FC<FoodGridProps> = ({
  foods,
  onSelectFood,
  audience = 'beginner',
  initialCategory = 'all',
  initialSafety = 'all',
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSafety, setSelectedSafety] = useState<string>(initialSafety);
  const [sortBy, setSortBy] = useState<'name' | 'category' | 'safety'>('name');

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSafety('all');
    setSortBy('name');
  };

  const hasActiveFilters =
    searchTerm.trim() !== '' || selectedCategory !== 'all' || selectedSafety !== 'all';

  const filteredFoods = useMemo(() => {
    return foods
      .filter((food) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'all' || food.category === selectedCategory;

        // Safety filter
        const matchesSafety =
          selectedSafety === 'all' || food.safetyStatus === selectedSafety;

        // Search term filter
        const q = searchTerm.toLowerCase().trim();
        const matchesSearch =
          q === '' ||
          food.name.toLowerCase().includes(q) ||
          (food.scientificName && food.scientificName.toLowerCase().includes(q)) ||
          (food.alternativeNames &&
            food.alternativeNames.some((alt) => alt.toLowerCase().includes(q))) ||
          food.description.toLowerCase().includes(q) ||
          (food.shortDescription && food.shortDescription.toLowerCase().includes(q)) ||
          (food.tags && food.tags.some((t) => t.toLowerCase().includes(q))) ||
          (food.nutrition?.highlights &&
            food.nutrition.highlights.some((h) => h.toLowerCase().includes(q)));

        return matchesCategory && matchesSafety && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name, 'es');
        }
        if (sortBy === 'category') {
          return a.category.localeCompare(b.category, 'es');
        }
        if (sortBy === 'safety') {
          const priority = { avoid: 0, moderate: 1, safe: 2, pending_review: 3 };
          return (priority[a.safetyStatus] ?? 4) - (priority[b.safetyStatus] ?? 4);
        }
        return 0;
      });
  }, [foods, selectedCategory, selectedSafety, searchTerm, sortBy]);

  return (
    <div className="space-y-6">
      {/* Search & Filters Controls */}
      <div className="space-y-4">
        <FoodSearch
          query={searchTerm}
          onQueryChange={setSearchTerm}
          resultCount={filteredFoods.length}
          totalCount={foods.length}
        />

        <FoodFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedSafety={selectedSafety}
          onSelectSafety={setSelectedSafety}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Grid of Food Cards */}
      {filteredFoods.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              onSelect={onSelectFood}
              audience={audience}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            No se encontraron alimentos con los filtros actuales
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Prueba a buscar con otro término o limpia los filtros para ver la biblioteca completa.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-[#2D6A4F] text-white hover:bg-[#1B4332] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restablecer búsqueda y filtros</span>
          </button>
        </div>
      )}
    </div>
  );
};
