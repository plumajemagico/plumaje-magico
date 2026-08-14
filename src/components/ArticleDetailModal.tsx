import React from 'react';
import { Article } from '../types';
import { VerificationBadge } from './VerificationBadge';
import { X, BookOpen, Clock, Tag } from 'lucide-react';

interface Props {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<Props> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="article-modal-content"
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-slate-900 to-teal-950 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTimeMinutes} min de lectura</span>
            </div>
            <VerificationBadge status={article.verificationStatus} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            {article.title}
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-900 mt-6 mb-3 font-display border-b border-slate-100 pb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={idx} className="text-base font-bold text-slate-800 mt-4 mb-2">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1.5 text-slate-700">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item.replace(/^- \*\*(.*?)\*\*:/, '').trim() ? (
                          <>
                            <strong className="text-slate-900">
                              {item.match(/^- \*\*(.*?)\*\*:/)?.[1]}:
                            </strong>{' '}
                            {item.replace(/^- \*\*(.*?)\*\*:\s*/, '')}
                          </>
                        ) : (
                          item.replace(/^- /, '')
                        )}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\. /)) {
                return (
                  <ol key={idx} className="list-decimal pl-5 space-y-2 text-slate-700">
                    {paragraph.split('\n').map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={idx} className="mb-4">{paragraph}</p>;
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            Cerrar Artículo
          </button>
        </div>
      </div>
    </div>
  );
};
