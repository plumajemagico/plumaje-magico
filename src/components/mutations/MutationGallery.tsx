import React, { useState } from 'react';
import { GalleryImage } from '../../types';
import { Image as ImageIcon, CheckCircle2, ShieldAlert, Sparkles, ZoomIn, X, Info } from 'lucide-react';

interface Props {
  images: GalleryImage[];
  mutationName: string;
}

export const MutationGallery: React.FC<Props> = ({ images, mutationName }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="bg-slate-50/80 rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-slate-400 mx-auto flex items-center justify-center">
          <ImageIcon className="w-6 h-6" />
        </div>
        <div className="space-y-1 max-w-md mx-auto">
          <h4 className="text-sm font-bold text-slate-800">
            Galería en Proceso de Curación Técnica
          </h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Las fotografías para <strong>{mutationName}</strong> se encuentran actualmente en proceso de verificación morfológica y cesión de derechos por criadores certificados.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={img.id || idx}
            onClick={() => setSelectedImage(img)}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs cursor-pointer aspect-4/3 flex flex-col justify-end"
          >
            <img
              src={img.url}
              alt={img.caption || mutationName}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Top verification badge */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              {img.isVerified ? (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-600/90 text-white backdrop-blur-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Foto Verificada
                </span>
              ) : (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/90 text-white backdrop-blur-xs flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3" />
                  Foto de Referencia
                </span>
              )}
              <div className="p-1.5 rounded-full bg-white/20 text-white group-hover:bg-white/40 transition-colors">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Caption bottom */}
            <div className="relative p-3.5 text-white space-y-1 pointer-events-none">
              <p className="text-xs font-semibold leading-snug line-clamp-2">
                {img.caption}
              </p>
              {img.author && (
                <p className="text-[10px] text-slate-300">
                  Foto: {img.author}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-150"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white transition-colors"
              aria-label="Cerrar vista previa"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex-1 overflow-hidden flex items-center justify-center bg-black/40 p-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400">
                    {mutationName}
                  </span>
                  {selectedImage.isVerified && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Verificado WBO
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-200">
                  {selectedImage.caption}
                </p>
              </div>

              {selectedImage.author && (
                <div className="text-xs text-slate-400 whitespace-nowrap">
                  Crédito: <span className="text-slate-200 font-medium">{selectedImage.author}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
