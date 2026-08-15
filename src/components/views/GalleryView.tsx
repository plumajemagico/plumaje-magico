import React, { useState } from 'react';
import { GALLERY_DATA } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { VerificationBadge } from '../VerificationBadge';
import {
  Image as ImageIcon,
  X,
  ZoomIn,
} from 'lucide-react';

export const GalleryView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todas las Fotografías' },
    { id: 'mutaciones', label: 'Mutaciones & Variedades' },
    { id: 'lineas_color', label: 'Líneas de Color & Factores' },
    { id: 'anatomia', label: 'Morfología & Sexado' },
    { id: 'cria', label: 'Nidos & Pichones' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-10 pb-16">

      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Fototeca Ornitológica</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
          Galería Visual de Ejemplares y Variedades
        </h1>

        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Catálogo fotográfico de referencia para la identificación visual de
          fenotipos, tonalidades, marcas alares, nidadas y detalles morfológicos.
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
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
          >

            {/* IMAGE — STANDARD 3:4 VERTICAL */}
            <div className="relative overflow-hidden aspect-[3/4] bg-slate-100 flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              <div className="absolute top-3 right-3">
                <VerificationBadge
                  status={item.verificationStatus}
                  showText={false}
                />
              </div>
            </div>

            {/* CARD INFORMATION */}
            <div className="p-5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {item.category.replace('_', ' ')}
                </span>

                {item.colorLine && (
                  <span className="text-xs text-slate-400 font-medium">
                    {item.colorLine}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-slate-900 text-base font-display group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {item.description}
              </p>

              {item.tags.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {activeItem && (
        <div
          id="gallery-lightbox-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveItem(null)}
        >
          <div
            id="gallery-lightbox-content"
            className="w-full max-w-4xl bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Image section */}
            <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-w-full max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info panel */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                    {activeItem.category}
                  </span>

                  <button
                    onClick={() => setActiveItem(null)}
                    className="p-1 text-slate-400 hover:text-white rounded"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeItem.description}
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-300">

                  {activeItem.colorLine && (
                    <div>
                      <strong className="text-white">
                        Línea de color:
                      </strong>{' '}
                      {activeItem.colorLine}
                    </div>
                  )}

                  {activeItem.mutations.length > 0 && (
                    <div>
                      <strong className="text-white">
                        Mutaciones:
                      </strong>{' '}
                      {activeItem.mutations.join(', ')}
                    </div>
                  )}

                  {activeItem.credit && (
                    <div>
                      <strong className="text-white">
                        Crédito / Aviario:
                      </strong>{' '}
                      {activeItem.credit}
                    </div>
                  )}

                </div>

                <div className="pt-2">
                  <VerificationBadge
                    status={activeItem.verificationStatus}
                  />
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Cerrar Vista
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
