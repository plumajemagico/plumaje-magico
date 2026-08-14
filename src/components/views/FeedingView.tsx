import React, { useState, useEffect } from 'react';
import { NUTRITION_FOOD_ITEMS, FEEDING_GUIDE_ARTICLES, FEEDING_CATEGORIES_CONFIG } from '../../data/nutrition';
import { FoodItem, FeedingGuideArticle } from '../../types';
import { FeedingHeader } from '../feeding/FeedingHeader';
import { FoodGrid } from '../feeding/FoodGrid';
import { FoodDetailView } from '../feeding/FoodDetailView';
import { FeedingGuideDetail } from '../feeding/FeedingGuideDetail';

interface FeedingViewProps {
  initialSubTab?: string;
  initialFoodSlug?: string;
  onNavigateToHealth?: (sectionId?: string) => void;
  onNavigateToCare?: (category?: string) => void;
  onNavigateToBreeding?: (sectionId?: string) => void;
}

export const FeedingView: React.FC<FeedingViewProps> = ({
  initialSubTab = 'todos',
  initialFoodSlug,
  onNavigateToHealth,
  onNavigateToCare,
  onNavigateToBreeding,
}) => {
  const [audience, setAudience] = useState<'beginner' | 'breeder'>('beginner');
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  // If initialFoodSlug is passed, select that food immediately
  useEffect(() => {
    if (initialFoodSlug) {
      const found = NUTRITION_FOOD_ITEMS.find(
        (f) => f.slug === initialFoodSlug || f.id === initialFoodSlug
      );
      if (found) {
        setSelectedFood(found);
      }
    }
  }, [initialFoodSlug]);

  // Handle food selection
  const handleSelectFood = (food: FoodItem) => {
    setSelectedFood(food);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to grid/catalog
  const handleBack = () => {
    setSelectedFood(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle subTab change
  const handleSubTabChange = (tabId: string) => {
    setActiveSubTab(tabId);
    setSelectedFood(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find guide article if activeSubTab is a guide
  const activeGuideArticle = FEEDING_GUIDE_ARTICLES.find(
    (g) => g.slug === activeSubTab || g.category === activeSubTab
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Feeding Module Header */}
      <FeedingHeader
        activeSubTab={activeSubTab}
        onSubTabChange={handleSubTabChange}
        audience={audience}
        onAudienceChange={setAudience}
      />

      {/* Main Content Area */}
      {selectedFood ? (
        /* 1. Detail Sheet for an Individual Food */
        <FoodDetailView
          food={selectedFood}
          allFoods={NUTRITION_FOOD_ITEMS}
          audience={audience}
          onBack={handleBack}
          onSelectFood={handleSelectFood}
          onNavigateToHealth={onNavigateToHealth}
          onNavigateToCare={onNavigateToCare}
          onNavigateToBreeding={onNavigateToBreeding}
        />
      ) : activeGuideArticle ? (
        /* 2. Specialized Feeding Guide Article (Nutrición, Agua, Cría, Polluelos, Nuevos Alimentos, Problemas, etc.) */
        <FeedingGuideDetail
          article={activeGuideArticle}
          allFoods={NUTRITION_FOOD_ITEMS}
          audience={audience}
          onBack={() => handleSubTabChange('todos')}
          onSelectFood={handleSelectFood}
          onNavigateToHealth={onNavigateToHealth}
          onNavigateToCare={onNavigateToCare}
          onNavigateToBreeding={onNavigateToBreeding}
        />
      ) : (
        /* 3. Catalog / Food Grid for Food Categories */
        <FoodGrid
          key={activeSubTab}
          foods={NUTRITION_FOOD_ITEMS}
          onSelectFood={handleSelectFood}
          audience={audience}
          initialCategory={
            activeSubTab === 'todos' || activeSubTab === 'evitar' ? 'all' : activeSubTab
          }
          initialSafety={activeSubTab === 'evitar' ? 'avoid' : 'all'}
        />
      )}
    </div>
  );
};
