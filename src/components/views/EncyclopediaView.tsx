import React, { useState } from 'react';
import { ENCYCLOPEDIA_ARTICLES, GLOSSARY_TERMS } from '../../data/encyclopedia';
import { Article, GlossaryTerm } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  Info, 
  HelpCircle,
  Tag,
  Feather,
  Eye,
  Activity
} from 'lucide-react';

interface Props {
  onOpenArticle: (article: Article) => void;
}

export const EncyclopediaView: React.FC<Props> = ({ onOpenArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [glossaryCategory, setGlossaryCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos los Artículos' },
    { id: 'historia', label: 'Historia y Taxonomía' },
    { id: 'anatomia', label: 'Anatomía y Morfología' },
    { id: 'plumaje', label: 'Física del Plumaje' },
    { id: 'edad_sexo', label: 'Identificación Sexo y Edad' },
    { id: 'comportamiento', label: 'Comportamiento y Etología' },
  ];

  const filteredArticles = selectedCategory === 'all'
    ? ENCYCLOPEDIA_ARTICLES
    : ENCYCLOPEDIA_ARTICLES.filter((a) => a.category === selectedCategory);

  const filteredGlossary = GLOSSARY_TERMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      item.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    const matchesCategory = glossaryCategory === 'all' || item.category === glossaryCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Base de Conocimiento Avícola</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
          Enciclopedia del Periquito Australiano
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Artículos rigurosos sobre taxonomía, historia natural, física del color, anatomía externa, identificación visual de sexo y edad, y glosario técnico.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-purple-700 text-white shadow-sm shadow-purple-700/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => onOpenArticle(article)}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-50 text-purple-800">
                  {article.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTimeMinutes} min</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-800 font-display transition-colors">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <VerificationBadge status={article.verificationStatus} />
              <span className="font-bold text-purple-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Leer artículo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE MORPHOLOGY QUICK GUIDE */}
      <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-lg space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
            Morfología Esencial
          </span>
          <h2 className="text-2xl font-bold font-display mt-2 text-white">
            Puntos Clave de Identificación Anatómica
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-emerald-400 block text-sm">Cera (Cere):</span>
            <p className="text-slate-300">Membrana sobre el pico. Azul en machos adultos, marrón en hembras en celo, rosa en inos y píos recesivos.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-sky-400 block text-sm">Anillo de Iris:</span>
            <p className="text-slate-300">Ojos negros sólidos en menores de 4 meses. Iris blanco nítido en adultos mayores de 8 meses.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-purple-400 block text-sm">Manchas Gulares:</span>
            <p className="text-slate-300">6 manchas negras simétricas en la garganta bajo la máscara. Se reducen o diluyen en mutaciones como píos y alas claras.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="font-bold text-amber-400 block text-sm">Patas Zigodáctilas:</span>
            <p className="text-slate-300">2 dedos hacia adelante y 2 hacia atrás. Adaptación para trepar con gran agilidad y manipular ramas.</p>
          </div>
        </div>
      </section>

      {/* GLOSSARY SECTION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Glosario Técnico y Terminología
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Diccionario de genética mendeliana, morfología aviar y términos de cría
            </p>
          </div>

          {/* Search bar within glossary */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar término (ej: alelo, locus, cera)..."
              value={glossarySearch}
              onChange={(e) => setGlossarySearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Category filters for glossary */}
        <div className="flex gap-2 text-xs">
          {[
            { id: 'all', label: 'Todos los términos' },
            { id: 'genetica', label: 'Genética' },
            { id: 'morfologia', label: 'Morfología' },
            { id: 'cria', label: 'Cría' }
          ].map((gCat) => (
            <button
              key={gCat.id}
              onClick={() => setGlossaryCategory(gCat.id)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                glossaryCategory === gCat.id
                  ? 'bg-purple-100 text-purple-900 font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {gCat.label}
            </button>
          ))}
        </div>

        {/* Glossary terms list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm font-display">
                  {item.term}
                </span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white text-slate-500 border border-slate-200">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
