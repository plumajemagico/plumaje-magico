import React from 'react';
import { 
  Share2, 
  Video, 
  Youtube, 
  ExternalLink, 
  MessageCircle, 
  Send, 
  Camera, 
  ShieldCheck, 
  Users,
  MessageSquare
} from 'lucide-react';

export const CommunityView: React.FC = () => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-[#D8E2DC] shadow-xs">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC]">
            <Share2 className="w-3.5 h-3.5" />
            <span>Comunidad y Canales Oficiales</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4332] font-display tracking-tight">
            Conecta con la Comunidad de Plumaje Mágico
          </h1>
          <p className="text-[#52796F] text-sm sm:text-base leading-relaxed">
            Únete a nuestros grupos oficiales de criadores y aficionados, comparte dudas genéticas, sigue nuestros videos educativos y participa en la comunidad.
          </p>
        </div>

        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FDFCFB] p-1.5 border border-[#D8E2DC] shadow-xs flex items-center justify-center shrink-0">
          <img
            src="/logo.jpg"
            alt="Plumaje Mágico"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Featured Instant Chat Groups: WhatsApp & Telegram */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#2D6A4F]" />
          <h2 className="text-xl font-bold text-[#1B4332] font-display">
            Grupos Oficiales de Debate & Asesoría
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* WhatsApp Group Card */}
          <div className="p-7 rounded-3xl bg-white border border-[#D8E2DC] shadow-sm space-y-6 flex flex-col justify-between hover:border-[#2D6A4F] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center font-bold">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/30">
                  Chat Activo
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-[#1B4332]">
                  Grupo de WhatsApp Plumaje Mágico
                </h3>
                <p className="text-xs font-medium text-[#52796F] mt-0.5">
                  Comunidad directa de criadores y aficionados
                </p>
              </div>
              <p className="text-sm text-[#52796F] leading-relaxed">
                Consultas rápidas sobre emparejamientos, identificación de mutaciones en fotos reales, consejos de alimentación y resolución de dudas sobre nidadas en tiempo real.
              </p>
              <ul className="space-y-2 text-xs text-[#1B4332]">
                <li className="flex items-center gap-2">✓ Debate sobre estándares y factores de oscuridad</li>
                <li className="flex items-center gap-2">✓ Asistencia comunitaria en cuidados diarios</li>
                <li className="flex items-center gap-2">✓ Ambiente respetuoso y enfocado en el bienestar aviar</li>
              </ul>
            </div>

            <a
              id="btn-whatsapp-group"
              href="https://chat.whatsapp.com/Gku8Jj03e1n3B4pQEiRks8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:translate-y-[-1px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Unirse al Grupo de WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Telegram Group Card */}
          <div className="p-7 rounded-3xl bg-white border border-[#D8E2DC] shadow-sm space-y-6 flex flex-col justify-between hover:border-[#229ED9] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#229ED9]/15 text-[#229ED9] flex items-center justify-center font-bold">
                  <Send className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#229ED9]/10 text-[#0088cc] border border-[#229ED9]/30">
                  Canal & Comunidad
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-[#1B4332]">
                  Grupo de Telegram Plumaje Mágico
                </h3>
                <p className="text-xs font-medium text-[#52796F] mt-0.5">
                  @PlumajeMagico
                </p>
              </div>
              <p className="text-sm text-[#52796F] leading-relaxed">
                Canal y grupo de discusión con guías descargables, avisos de nuevos artículos de la enciclopedia, archivos técnicos de genética y fotografías en alta resolución.
              </p>
              <ul className="space-y-2 text-xs text-[#1B4332]">
                <li className="flex items-center gap-2">✓ Tablas genéticas en PDF y recursos descargables</li>
                <li className="flex items-center gap-2">✓ Galería de fotos sin compresión de mutaciones raras</li>
                <li className="flex items-center gap-2">✓ Notificaciones de actualizaciones y nuevos artículos</li>
              </ul>
            </div>

            <a
              id="btn-telegram-group"
              href="https://t.me/PlumajeMagico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#229ED9] hover:bg-[#1e8dbf] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm hover:translate-y-[-1px]"
            >
              <Send className="w-4 h-4" />
              <span>Unirse al Grupo de Telegram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Social Media Cards: TikTok & YouTube */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#1B4332] font-display">
          Canales de Video y Divulgación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TikTok Card */}
          <div className="p-8 rounded-3xl bg-[#1B4332] text-white border border-[#2D6A4F] shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] flex items-center justify-center text-white shadow-sm border border-[#40916C]/40">
                <Video className="w-6 h-6 text-[#B7E4C7]" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#B7E4C7]">Videos Cortos y Tips</span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  TikTok Oficial @plumaje_magico
                </h3>
              </div>
              <p className="text-sm text-[#D8E2DC] leading-relaxed">
                Videos diarios sobre comportamiento, trucos de alimentación, identificación rápida de machos y hembras por la cera nasal y comparaciones de mutaciones en vivo.
              </p>
              <ul className="space-y-2 text-xs text-[#D8E2DC]">
                <li className="flex items-center gap-2">• ¿Cómo saber si tu periquito está enfermo en 30 segundos?</li>
                <li className="flex items-center gap-2">• La diferencia visual entre un Perlado SF y un Perlado DF</li>
                <li className="flex items-center gap-2">• Cómo fabricar perchas naturales seguras y papilla</li>
              </ul>
            </div>

            <a
              id="btn-tiktok-channel"
              href="https://www.tiktok.com/@plumaje_magico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#2D6A4F] hover:bg-[#40916C] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 border border-[#40916C]/40 hover:translate-y-[-1px] shadow-sm"
            >
              <span>Seguir en TikTok (@plumaje_magico)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* YouTube Card */}
          <div className="p-8 rounded-3xl bg-[#1B4332] text-white border border-[#2D6A4F] shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-700 flex items-center justify-center text-white shadow-sm">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-red-300">Clases Magistrales y Guías</span>
                <h3 className="text-2xl font-bold font-display text-white mt-1">
                  Canal de YouTube Oficial (@PlumajeMagico)
                </h3>
              </div>
              <p className="text-sm text-[#D8E2DC] leading-relaxed">
                Tutoriales extensos sobre genética avanzada, preparación de parejas reproductoras, seguimiento completo de nidadas desde el huevo hasta el destete y visitas a aviarios.
              </p>
              <ul className="space-y-2 text-xs text-[#D8E2DC]">
                <li className="flex items-center gap-2">• Curso completo de genética mendeliana para criadores</li>
                <li className="flex items-center gap-2">• Protocolo veterinario de prevención de ácaros y megabacterias</li>
                <li className="flex items-center gap-2">• Cómo anillar correctamente a los 7-9 días de vida</li>
              </ul>
            </div>

            <a
              id="btn-youtube-channel"
              href="https://www.youtube.com/@PlumajeMagico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-red-700 hover:bg-red-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] shadow-sm"
            >
              <span>Suscribirse en YouTube (@PlumajeMagico)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Collaboration and Photo Submissions */}
      <section className="bg-white rounded-3xl border border-[#D8E2DC] p-8 sm:p-10 shadow-xs space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F1F3F2] text-[#2D6A4F] border border-[#D8E2DC]">
            <Camera className="w-3.5 h-3.5" />
            <span>Colaboración Abierta para Criadores</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1B4332] font-display">
            ¿Deseas aportar fotografías o revisar contenidos genéticos?
          </h2>
          <p className="text-sm text-[#52796F] leading-relaxed">
            Plumaje Mágico es una plataforma en continuo crecimiento. Si eres criador acreditado o aficionado con fotografías nítidas de mutaciones poco comunes (Blackwing, Fallow, Texas Clearbody, Antracita, etc.), puedes contribuir citando tu nombre o aviario en los créditos oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-[#F1F3F2] border border-[#D8E2DC] space-y-1">
            <span className="font-bold text-[#1B4332] text-sm block">1. Calidad Fotográfica</span>
            <p className="text-xs text-[#52796F]">Fotos con luz natural, sin filtros agresivos, donde se aprecie claramente el patrón dorsal y marcas alares.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#F1F3F2] border border-[#D8E2DC] space-y-1">
            <span className="font-bold text-[#1B4332] text-sm block">2. Genealogía Comprobada</span>
            <p className="text-xs text-[#52796F]">Idealmente conociendo los padres para corroborar si se trata de Factor Simple o Doble Factor.</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#F1F3F2] border border-[#D8E2DC] space-y-1">
            <span className="font-bold text-[#1B4332] text-sm block">3. Reconocimiento Oficial</span>
            <p className="text-xs text-[#52796F]">Tu aviario y nombre aparecerán con mención permanente en la fototeca de la enciclopedia.</p>
          </div>
        </div>
      </section>

    </div>
  );
};
