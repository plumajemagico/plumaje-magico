import React, { useState } from 'react';
import { CARE_ARTICLES_DATA } from '../../data/care';
import { CareArticle } from '../../types';
import { CareHeader } from '../care/CareHeader';
import { CareCategoryGrid } from '../care/CareCategoryGrid';
import { CareArticleDetail } from '../care/CareArticleDetail';
import { FoodLibrary } from '../care/FoodLibrary';
import { CageDiagramGuide } from '../care/CageDiagramGuide';
import { SafetyHazardDirectory } from '../care/SafetyHazardDirectory';
import { CareChecklistsView } from '../care/CareChecklistsView';
import { CareStepGuidesView } from '../care/CareStepGuidesView';

interface CareViewProps {
  onNavigateToHealth?: (sectionId?: string) => void;
}

export const CareView: React.FC<CareViewProps> = ({ onNavigateToHealth }) => {
  const [audience, setAudience] = useState<'beginner' | 'breeder'>('beginner');
  const [activeSubTab, setActiveSubTab] = useState<string>('temas');
  const [selectedArticle, setSelectedArticle] = useState<CareArticle | null>(null);

  const handleSelectArticle = (article: CareArticle) => {
    setSelectedArticle(article);
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
      {/* Care Module Header */}
      <CareHeader
        audience={audience}
        onAudienceChange={setAudience}
        activeSubTab={activeSubTab}
        onSubTabChange={handleSubTabChange}
      />

      {/* Main SubTab Content */}
      {activeSubTab === 'temas' && (
        <>
          {selectedArticle ? (
            <CareArticleDetail
              article={selectedArticle}
              allArticles={CARE_ARTICLES_DATA}
              audience={audience}
              onBack={handleBackToGrid}
              onSelectArticle={handleSelectArticle}
              onNavigateToHealth={(sectionId) => {
                if (onNavigateToHealth) {
                  onNavigateToHealth(sectionId);
                }
              }}
            />
          ) : (
            <CareCategoryGrid
              articles={CARE_ARTICLES_DATA}
              onSelectArticle={handleSelectArticle}
              audience={audience}
            />
          )}
        </>
      )}

      {activeSubTab === 'alimentos' && <FoodLibrary />}

      {activeSubTab === 'jaula-interactiva' && <CageDiagramGuide />}

      {activeSubTab === 'seguridad' && <SafetyHazardDirectory />}

      {activeSubTab === 'checklists' && <CareChecklistsView />}

      {activeSubTab === 'paso-a-paso' && <CareStepGuidesView />}
    </div>
  );
};
