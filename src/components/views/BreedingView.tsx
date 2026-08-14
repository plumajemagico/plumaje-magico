import React, { useState } from 'react';
import { BREEDING_ARTICLES_DATA } from '../../data/breeding';
import { BreedingArticle } from '../../types';
import { BreedingHeader } from '../breeding/BreedingHeader';
import { BreedingCategoryGrid } from '../breeding/BreedingCategoryGrid';
import { BreedingArticleDetail } from '../breeding/BreedingArticleDetail';
import { BreedingTimeline } from '../breeding/BreedingTimeline';
import { ChickDevelopmentTimeline } from '../breeding/ChickDevelopmentTimeline';
import { EggGuideView } from '../breeding/EggGuideView';
import { BreedingChecklistsView } from '../breeding/BreedingChecklistsView';
import { BreedingRecordSheet } from '../breeding/BreedingRecordSheet';

interface BreedingViewProps {
  initialSubTab?: string;
  initialArticleSlug?: string;
  onNavigateToHealth?: (sectionId?: string) => void;
  onNavigateToCare?: (sectionId?: string) => void;
  onNavigateToGenetics?: (sectionId?: string) => void;
}

export const BreedingView: React.FC<BreedingViewProps> = ({
  initialSubTab = 'temas',
  initialArticleSlug,
  onNavigateToHealth,
  onNavigateToCare,
  onNavigateToGenetics,
}) => {
  const [audience, setAudience] = useState<'beginner' | 'breeder'>('beginner');
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab);
  const [selectedArticle, setSelectedArticle] = useState<BreedingArticle | null>(() => {
    if (initialArticleSlug) {
      return BREEDING_ARTICLES_DATA.find((a) => a.slug === initialArticleSlug || a.id === initialArticleSlug) || null;
    }
    return null;
  });

  const handleSelectArticle = (article: BreedingArticle) => {
    setSelectedArticle(article);
    setActiveSubTab('temas');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubTabChange = (tab: string) => {
    setActiveSubTab(tab);
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Module Header with Audience Selector */}
      <BreedingHeader
        audience={audience}
        onAudienceChange={setAudience}
        activeSubTab={activeSubTab}
        onSubTabChange={handleSubTabChange}
      />

      {/* SubTab 1: Library of 14 Guides / Detail View */}
      {activeSubTab === 'temas' && (
        <>
          {selectedArticle ? (
            <BreedingArticleDetail
              article={selectedArticle}
              allArticles={BREEDING_ARTICLES_DATA}
              audience={audience}
              onBack={handleBackToGrid}
              onSelectArticle={handleSelectArticle}
              onNavigateToHealth={onNavigateToHealth}
              onNavigateToCare={onNavigateToCare}
              onNavigateToGenetics={onNavigateToGenetics}
            />
          ) : (
            <BreedingCategoryGrid
              articles={BREEDING_ARTICLES_DATA}
              audience={audience}
              onSelectArticle={handleSelectArticle}
              onNavigateToTab={handleSubTabChange}
            />
          )}
        </>
      )}

      {/* SubTab 2: Reproductive Cycle Timeline */}
      {activeSubTab === 'ciclo' && <BreedingTimeline />}

      {/* SubTab 3: Chick Development Timeline */}
      {activeSubTab === 'polluelos' && <ChickDevelopmentTimeline />}

      {/* SubTab 4: Eggs & Candling Guide */}
      {activeSubTab === 'huevos' && <EggGuideView />}

      {/* SubTab 5: Checklists */}
      {activeSubTab === 'checklists' && <BreedingChecklistsView />}

      {/* SubTab 6: Breeding Record Sheet */}
      {activeSubTab === 'registro' && <BreedingRecordSheet />}
    </div>
  );
};
