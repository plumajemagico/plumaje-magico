import React, { useState, useMemo } from 'react';
import { ColorItem, ColorImage } from '../../types';
import { COLORS_DATA } from '../../data/colorsData';
import { VerificationBadge } from '../VerificationBadge';
import { 
  Search, 
  Filter, 
  Image as ImageIcon, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  User, 
  FileText,
  Sparkles
} from 'lucide-react';

interface GalleryPhotoItem {
  color: ColorItem;
  image: ColorImage;
}

interface Props {
  onSelectColor: (color: ColorItem) => void;
}

export const ColorGallery: React.FC<Props> = ({ onSelectColor }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLine, setSelectedLine] = useState<string>('all');
  const [onlyVerified, setOnlyVerified] = useState<boolean>(false);
  const [activeLightbox, setActiveLightbox] = useState<GalleryPhotoItem | null>(null);

  // Flatten all photos from COLORS_DATA
  const allPhotos: GalleryPhotoItem[] = useMemo(() => {
    const list: GalleryPhotoItem[] = [];
    COLORS_DATA.forEach((color) => {
      color.images.forEach((img) => {
        list.push({ color, image: img });
      });
    });
    return list;
  }, []);

  const filteredPhotos = useMemo(() => {
    return allPhotos.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.color.name.toLowerCase().includes(q) ||
        item.image.caption.toLowerCase().includes(q) ||
        (item.image.tags && item.image.tags.some((t) => t.toLowerCase().includes(q)));

      const matchesCategory =
        selectedCategory === 'all' || item.color.category === selectedCategory;

      const matchesLine =
        selectedLine === 'all' ||
        (selectedLine === 'verde' && item.color.relatedLines?.includes('linea-verde')) ||
        (selectedLine === 'azul' && item.color.relatedLines?.includes('linea-azul'));

      const matchesVerified = !onlyVerified || item.image.verifiedIdentification;

      return matchesSearch && matchesCategory && matchesLine && matchesVerified;
    });
  }, [allPhotos, searchQuery, selectedCategory, selectedLine, onlyVerified]);

  return (
    <div className="space-y-8">
      {/* Header Info */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#40916C]">
              Archivo Fotográfico Documentado
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1B4332] font-display">
              Galería Visual de Ejemplares y Variedades
            </h3>
            <p className="text-xs sm:text-sm text-[#52796F] mt-1 max-w-3xl leading-relaxed">
              Explora fotografías de periquitos con identificación documentada, fuentes de autoría y licencias transparentes.
            </p>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold shrink-0 self-start sm:self-auto flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-emerald-700" />
            <span>{filteredPhotos.length} Fotografías Documentadas</span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="pt-4 border-t border-[#D8E2DC] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Text Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#52796F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por color, patrón o etiqueta..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs font-medium text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs font-semibold text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            >
              <option value="all">Todas las Categorías</option>
              <option value="green_series">🟢 Serie Verde</option>
              <option value="blue_series">🔵 Serie Azul</option>
              <option value="yellow">🟡 Amarillos & Caras Amarillas</option>
              <option value="white">⚪ Blancos & Inos</option>
              <option value="grey">⚫ Grises & Antracitas</option>
              <option value="violet">🟣 Violetas</option>
              <option value="pattern">🪶 Patrones & Diluciones</option>
            </select>
          </div>

          {/* Line Filter */}
          <div>
            <select
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC] text-xs font-semibold text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]"
            >
              <option value="all">Todas las Líneas Base</option>
              <option value="verde">Línea Verde (Ancestral)</option>
              <option value="azul">Línea Azul (Sin Psitacina)</option>
            </select>
          </div>

          {/* Only Verified Toggle */}
          <div className="flex items-center justify-start sm:justify-center">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#1B4332] select-none">
              <input
                type="checkbox"
                checked={onlyVerified}
                onChange={(e) => setOnlyVerified(e.target.checked)}
                className="w-4 h-4 text-[#2D6A4F] rounded border-[#D8E2DC] focus:ring-[#2D6A4F]"
              />
              <span>Solo Identificación Verificada</span>
            </label>
          </div>
        </div>
      </div>

      {/* Photography Grid */}
      {filteredPhotos.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white border border-[#D8E2DC] space-y-3">
          <ImageIcon className="w-12 h-12 text-[#52796F]/40 mx-auto" />
          <h4 className="text-base font-bold text-[#1B4332]">No se encontraron fotografías</h4>
          <p className="text-xs text-[#52796F]">
            Prueba a cambiar o reiniciar los filtros de búsqueda aplicados.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedLine('all');
              setOnlyVerified(false);
            }}
            className="px-4 py-2 rounded-xl bg-[#1B4332] text-white text-xs font-bold hover:bg-[#2D6A4F] transition-all"
          >
            Limpiar Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map(({ color, image }, idx) => (
            <div
              key={`${color.id}-${image.id || idx}`}
              className="group rounded-3xl bg-white border border-[#D8E2DC] shadow-2xs hover:shadow-md hover:border-[#B7C9C0] transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Photo */}
              <div
                onClick={() => setActiveLightbox({ color, image })}
                className="relative aspect-4/3 overflow-hidden bg-[#F8F9FA] cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-xs text-[#1B4332] shadow-xs">
                    {color.name}
                  </span>
                  {image.verifiedIdentification && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white shadow-xs flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verificado</span>
                    </span>
                  )}
                </div>

                {/* Bottom Tags */}
                {image.tags && image.tags.length > 0 && (
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1 pointer-events-none">
                    {image.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Photo Details */}
              <div className="p-5 space-y-3">
                <p className="text-xs text-[#1B4332] font-medium line-clamp-2 leading-relaxed">
                  {image.caption}
                </p>

                <div className="pt-2 border-t border-[#D8E2DC] flex items-center justify-between text-[11px] text-[#52796F]">
                  <span className="truncate max-w-[150px]">
                    {image.author || 'Plumaje Mágico Archive'}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    {image.license || 'CC-BY-SA'}
                  </span>
                </div>

                <div className="pt-1 flex items-center gap-2">
                  <button
                    onClick={() => setActiveLightbox({ color, image })}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#F1F3F2] text-[#1B4332] text-xs font-bold hover:bg-[#D8E2DC] transition-colors"
                  >
                    Ampliar Foto
                  </button>
                  <button
                    onClick={() => onSelectColor(color)}
                    title="Ver ficha completa de este color"
                    className="p-2 rounded-xl bg-[#1B4332] text-white hover:bg-[#2D6A4F] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all shadow-md"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image viewport */}
            <div className="relative bg-black flex items-center justify-center overflow-hidden max-h-[60vh]">
              <img
                src={activeLightbox.image.url}
                alt={activeLightbox.image.caption}
                className="max-h-[60vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Metadata bar */}
            <div className="p-6 bg-white space-y-4 overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8E2DC] pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#40916C]">
                    {activeLightbox.color.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold text-[#1B4332] font-display">
                    {activeLightbox.color.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <VerificationBadge status={activeLightbox.color.verificationStatus} />
                  <button
                    onClick={() => {
                      const c = activeLightbox.color;
                      setActiveLightbox(null);
                      onSelectColor(c);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#1B4332] text-white text-xs font-bold hover:bg-[#2D6A4F] transition-all flex items-center gap-1.5"
                  >
                    <span>Ver Ficha Completa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#1B4332] font-medium leading-relaxed">
                {activeLightbox.image.caption}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-[#52796F]">
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC]">
                  <div className="font-bold text-[#1B4332] mb-0.5">Autor / Procedencia</div>
                  <div>{activeLightbox.image.author || 'Plumaje Mágico Archive'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC]">
                  <div className="font-bold text-[#1B4332] mb-0.5">Licencia Fotográfica</div>
                  <div className="font-mono">{activeLightbox.image.license || 'CC-BY-SA / Editorial'}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#D8E2DC]">
                  <div className="font-bold text-[#1B4332] mb-0.5">Identificación Fenotípica</div>
                  <div className="text-emerald-800 font-semibold">
                    {activeLightbox.image.verifiedIdentification ? 'Documentada y Verificada' : 'Ejemplar en Revisión'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
