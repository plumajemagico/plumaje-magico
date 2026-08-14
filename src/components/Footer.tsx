import React from 'react';
import { Feather, ShieldCheck, Heart, Youtube, ExternalLink, Video, MessageCircle, Send } from 'lucide-react';

interface Props {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1B4332] text-[#D8E2DC] pt-16 pb-12 border-t border-[#2D6A4F]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2D6A4F]/60">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 border border-[#40916C]/40 flex items-center justify-center overflow-hidden shadow-md shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Logo Plumaje Mágico"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-display tracking-tight uppercase block">
                  PLUMAJE <span className="text-[#74C69D]">MÁGICO</span>
                </span>
                <span className="text-xs text-[#B7E4C7] font-medium">Melopsittacus undulatus</span>
              </div>
            </div>
            <p className="text-sm text-[#B7E4C7]/90 leading-relaxed max-w-md">
              Plataforma especializada en el periquito australiano (*Melopsittacus undulatus*). 
              Enciclopedia digital, catálogo de mutaciones, genética mendeliana, guía de cuidados y herramientas para criadores responsables.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#B7E4C7] bg-[#2D6A4F]/40 border border-[#2D6A4F] px-3 py-2 rounded-xl max-w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#74C69D]" />
              <span>Compromiso de rigor científico y estándares WBO/COM</span>
            </div>
          </div>

          {/* Col 3: Secciones Principales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Conocimiento
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8E2DC]">
              <li>
                <button
                  onClick={() => onNavigate('enciclopedia')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Enciclopedia y Anatomía
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('genetica')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Genética y Factores
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mutaciones')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Catálogo de Mutaciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Galería Fotográfica
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Cuidados y Cría */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Bienestar & Cría
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8E2DC]">
              <li>
                <button
                  onClick={() => onNavigate('cuidados')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Cuidados y Alojamiento
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('alimentacion')}
                  className="hover:text-[#74C69D] transition-colors font-medium text-emerald-300"
                >
                  Alimentación y Nutrición
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('salud')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Signos de Alarma y Salud
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cria')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Cría Responsable
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculadora')}
                  className="hover:text-[#74C69D] transition-colors"
                >
                  Calculadora Genética
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Comunidad & Redes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-display">
              Comunidad & Canales
            </h4>
            <p className="text-xs text-[#B7E4C7]/80 mb-3">
              Únete a nuestros chats y sigue nuestros canales oficiales:
            </p>
            <div className="space-y-2">
              <a
                href="https://chat.whatsapp.com/Gku8Jj03e1n3B4pQEiRks8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#B7E4C7] hover:text-white rounded-xl text-xs font-medium w-full transition-colors border border-[#25D366]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Grupo WhatsApp</span>
                <ExternalLink className="w-3 h-3 ml-auto text-[#B7E4C7]/70" />
              </a>
              <a
                href="https://t.me/PlumajeMagico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-[#B7E4C7] hover:text-white rounded-xl text-xs font-medium w-full transition-colors border border-[#229ED9]/40"
              >
                <Send className="w-4 h-4 text-[#229ED9]" />
                <span>Grupo Telegram</span>
                <ExternalLink className="w-3 h-3 ml-auto text-[#B7E4C7]/70" />
              </a>
              <a
                href="https://www.tiktok.com/@plumaje_magico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-[#2D6A4F]/60 hover:bg-[#2D6A4F] text-white rounded-xl text-xs font-medium w-full transition-colors border border-[#40916C]/40"
              >
                <Video className="w-4 h-4 text-[#B7E4C7]" />
                <span>TikTok Oficial</span>
                <ExternalLink className="w-3 h-3 ml-auto text-[#B7E4C7]/70" />
              </a>
              <a
                href="https://www.youtube.com/@PlumajeMagico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 bg-[#2D6A4F]/60 hover:bg-[#2D6A4F] text-white rounded-xl text-xs font-medium w-full transition-colors border border-[#40916C]/40"
              >
                <Youtube className="w-4 h-4 text-red-400" />
                <span>Canal de YouTube</span>
                <ExternalLink className="w-3 h-3 ml-auto text-[#B7E4C7]/70" />
              </a>
            </div>
          </div>

        </div>

        {/* Veterinary disclaimer & copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B7E4C7]">
          <div className="max-w-2xl text-center md:text-left">
            <span className="font-semibold text-white">Aviso Veterinario:</span> La información de este sitio tiene propósitos exclusivamente educativos y divulgativos. Ante cualquier síntoma clínico, consulta a un veterinario acreditado en medicina aviar.
          </div>
          <div className="text-[#B7E4C7]/90 text-center md:text-right shrink-0">
            © {new Date().getFullYear()} Plumaje Mágico. Hecho con <Heart className="w-3.5 h-3.5 inline text-[#74C69D] fill-[#74C69D]" /> para los amantes de los periquitos.
          </div>
        </div>

      </div>
    </footer>
  );
};
