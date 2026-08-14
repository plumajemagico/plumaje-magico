import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBarModal } from './components/SearchBar';
import { MutationDetailModal } from './components/MutationDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { HealthDetailModal } from './components/HealthDetailModal';

// Views
import { HomeView } from './components/views/HomeView';
import { EncyclopediaView } from './components/views/EncyclopediaView';
import { ColorsView, ColorSubTab } from './components/views/ColorsView';
import { GeneticsView } from './components/views/GeneticsView';
import { MutationsView } from './components/views/MutationsView';
import { CareView } from './components/views/CareView';
import { FeedingView } from './components/views/FeedingView';
import { HealthView } from './components/views/HealthView';
import { BreedingView } from './components/views/BreedingView';
import { CalculatorView } from './components/views/CalculatorView';
import { GalleryView } from './components/views/GalleryView';
import { CommunityView } from './components/views/CommunityView';

// Data
import { MUTATIONS_DATA } from './data/mutations';
import { ENCYCLOPEDIA_ARTICLES } from './data/encyclopedia';
import { HEALTH_CONDITIONS_DATA } from './data/health';
import { MutationItem, Article, HealthCondition } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Modals and selection state
  const [selectedMutation, setSelectedMutation] = useState<MutationItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedHealthCondition, setSelectedHealthCondition] = useState<HealthCondition | null>(null);
  const [feedingSubTab, setFeedingSubTab] = useState<string>('todos');
  const [feedingFoodSlug, setFeedingFoodSlug] = useState<string | undefined>(undefined);
  const [geneticsSubTab, setGeneticsSubTab] = useState<string>('inicio');
  const [colorSubTab, setColorSubTab] = useState<ColorSubTab>('inicio');
  const [selectedColorSlug, setSelectedColorSlug] = useState<string | null>(null);

  const handleOpenMutationBySlug = (slug: string) => {
    const found = MUTATIONS_DATA.find((m) => m.slug === slug || m.id === slug);
    if (found) {
      setSelectedMutation(found);
    }
  };

  const handleSearchResultSelect = (type: string, id: string) => {
    if (type === 'mutation') {
      const found = MUTATIONS_DATA.find((m) => m.id === id);
      if (found) setSelectedMutation(found);
    } else if (type === 'color') {
      setSelectedColorSlug(id);
      setActiveTab('colores');
    } else if (type === 'article') {
      const found = ENCYCLOPEDIA_ARTICLES.find((a) => a.id === id);
      if (found) setSelectedArticle(found);
    } else if (type === 'health') {
      const found = HEALTH_CONDITIONS_DATA.find((h) => h.id === id);
      if (found) setSelectedHealthCondition(found);
    } else if (type === 'factor') {
      setGeneticsSubTab('factores-color');
      setActiveTab('genetica');
    } else if (type === 'genetics') {
      setGeneticsSubTab(id || 'inicio');
      setActiveTab('genetica');
    } else if (type === 'care') {
      setActiveTab('cuidados');
    } else if (type === 'breeding') {
      setActiveTab('cria');
    } else if (type === 'food') {
      setFeedingFoodSlug(id);
      setFeedingSubTab('todos');
      setActiveTab('alimentacion');
    } else if (type === 'feeding_guide') {
      setFeedingFoodSlug(undefined);
      setFeedingSubTab(id);
      setActiveTab('alimentacion');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#1B4332] selection:bg-[#2D6A4F] selection:text-white font-sans antialiased">
      
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {activeTab === 'inicio' && (
          <HomeView
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenMutation={handleOpenMutationBySlug}
          />
        )}

        {activeTab === 'enciclopedia' && (
          <EncyclopediaView onOpenArticle={(article) => setSelectedArticle(article)} />
        )}

        {activeTab === 'colores' && (
          <ColorsView
            subTab={colorSubTab}
            onSubTabChange={(tab) => setColorSubTab(tab)}
            onOpenMutation={handleOpenMutationBySlug}
            onNavigateGenetics={(sub) => {
              if (sub) setGeneticsSubTab(sub);
              setActiveTab('genetica');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            selectedColorSlug={selectedColorSlug}
            onSelectColorSlug={(slug) => setSelectedColorSlug(slug)}
          />
        )}

        {activeTab === 'genetica' && (
          <GeneticsView
            initialSubTab={geneticsSubTab}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectMutation={(mutation) => setSelectedMutation(mutation)}
          />
        )}

        {activeTab === 'mutaciones' && (
          <MutationsView onSelectMutation={(mutation) => setSelectedMutation(mutation)} />
        )}

        {activeTab === 'cuidados' && (
          <CareView
            onNavigateToHealth={() => {
              setActiveTab('salud');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'alimentacion' && (
          <FeedingView
            initialSubTab={feedingSubTab}
            initialFoodSlug={feedingFoodSlug}
            onNavigateToHealth={(sectionId) => {
              setActiveTab('salud');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCare={(category) => {
              setActiveTab('cuidados');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToBreeding={(sectionId) => {
              setActiveTab('cria');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'salud' && (
          <HealthView onOpenCondition={(condition) => setSelectedHealthCondition(condition)} />
        )}

        {activeTab === 'cria' && (
          <BreedingView
            onNavigateToHealth={() => {
              setActiveTab('salud');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCare={() => {
              setActiveTab('cuidados');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToGenetics={() => {
              setActiveTab('genetica');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'calculadora' && (
          <CalculatorView />
        )}

        {activeTab === 'galeria' && (
          <GalleryView />
        )}

        {activeTab === 'comunidad' && (
          <CommunityView />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={handleSearchResultSelect}
      />

      {/* Detail Modals */}
      <MutationDetailModal
        mutation={selectedMutation}
        onClose={() => setSelectedMutation(null)}
        onSelectRelated={(slug) => handleOpenMutationBySlug(slug)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <HealthDetailModal
        condition={selectedHealthCondition}
        onClose={() => setSelectedHealthCondition(null)}
      />

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
