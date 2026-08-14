import React, { useState, useRef, useEffect } from 'react';
import { 
  Feather, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Dna, 
  BookOpen, 
  HeartHandshake, 
  ShieldAlert, 
  Egg, 
  Calculator, 
  Image as ImageIcon,
  Share2,
  Apple,
  Palette,
  ChevronDown,
  Activity,
  Layers
} from 'lucide-react';

interface SubNavItem {
  id: string;
  label: string;
  shortDesc?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface NavGroup {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: SubNavItem[];
}

type NavEntry = 
  | { type: 'single'; id: string; label: string; icon: React.ComponentType<{ className?: string }> }
  | { type: 'group'; id: string; label: string; icon: React.ComponentType<{ className?: string }>; items: SubNavItem[] };

interface Props {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<Props> = ({ activeTab, onTabChange, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navStructure: NavEntry[] = [
    { 
      type: 'single', 
      id: 'inicio', 
      label: 'Inicio', 
      icon: Sparkles 
    },
    {
      type: 'single',
      id: 'enciclopedia',
      label: 'Enciclopedia',
      icon: BookOpen
    },
    {
      type: 'group',
      id: 'group-genetica-color',
      label: 'Genética & Variedades',
      icon: Dna,
      items: [
        {
          id: 'colores',
          label: 'Colores & Variedades',
          shortDesc: 'Catálogo visual, series y comparador fenotípico',
          icon: Palette,
          badge: 'Nuevo'
        },
        {
          id: 'genetica',
          label: 'Genética Teórica',
          shortDesc: 'Leyes de herencia, factores y alelos',
          icon: Dna
        },
        {
          id: 'mutaciones',
          label: 'Catálogo de Mutaciones',
          shortDesc: 'Fichas exhaustivas de todas las mutaciones',
          icon: Feather
        },
        {
          id: 'calculadora',
          label: 'Calculadora Genética',
          shortDesc: 'Predicción de descendencia y cruces',
          icon: Calculator,
          badge: 'Herramienta'
        },
      ]
    },
    {
      type: 'group',
      id: 'group-cuidados-salud',
      label: 'Cuidados & Bienestar',
      icon: HeartHandshake,
      items: [
        {
          id: 'cuidados',
          label: 'Cuidados Generales',
          shortDesc: 'Alojamiento, jaulas, higiene y rutinas',
          icon: HeartHandshake
        },
        {
          id: 'alimentacion',
          label: 'Alimentación & Dieta',
          shortDesc: 'Semillas, frutas, verduras y toxicidad',
          icon: Apple
        },
        {
          id: 'salud',
          label: 'Salud & Botiquín',
          shortDesc: 'Enfermedades, prevención y primeros auxilios',
          icon: ShieldAlert
        },
        {
          id: 'comportamiento',
          label: 'Comportamiento',
          shortDesc: 'Lenguaje corporal, vocalizaciones y adiestramiento',
          icon: Activity
        },
        {
          id: 'cria',
          label: 'Cría Responsable',
          shortDesc: 'Nidadas, incubación, anillamiento y polluelos',
          icon: Egg
        },
      ]
    },
    {
      type: 'single',
      id: 'galeria',
      label: 'Galería',
      icon: ImageIcon
    },
    {
      type: 'single',
      id: 'comunidad',
      label: 'Comunidad',
      icon: Share2
    },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isGroupActive = (group: NavGroup) => {
    return group.items.some((item) => item.id === activeTab);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D8E2DC] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Brand / Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white p-0.5 border border-[#D8E2DC] shadow-xs flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo.jpg"
                alt="Logo Plumaje Mágico"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight uppercase text-[#1B4332] font-display whitespace-nowrap">
                  PLUMAJE <span className="text-[#40916C]">MÁGICO</span>
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded bg-[#F1F3F2] text-[#40916C] border border-[#D8E2DC]">
                  Melopsittacus
                </span>
              </div>
              <p className="text-[11px] text-[#52796F] hidden sm:block font-medium line-clamp-1">
                El mundo del periquito australiano
              </p>
            </div>
          </button>

          {/* Desktop Streamlined Navigation */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1 relative">
            {navStructure.map((entry) => {
              if (entry.type === 'single') {
                const Icon = entry.icon;
                const isActive = activeTab === entry.id;
                return (
                  <button
                    key={entry.id}
                    id={`nav-link-${entry.id}`}
                    onClick={() => handleNavClick(entry.id)}
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'bg-[#2D6A4F] text-white shadow-sm shadow-[#2D6A4F]/20'
                        : 'text-[#1B4332] hover:text-[#40916C] hover:bg-[#F1F3F2]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#52796F]'}`} />
                    <span>{entry.label}</span>
                  </button>
                );
              }

              // Group with Submenu Dropdown
              const Icon = entry.icon;
              const groupActive = isGroupActive(entry);
              const isOpen = openDropdown === entry.id;

              return (
                <div 
                  key={entry.id} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(entry.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    id={`nav-group-btn-${entry.id}`}
                    onClick={() => setOpenDropdown(isOpen ? null : entry.id)}
                    aria-expanded={isOpen}
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                      groupActive
                        ? 'bg-[#2D6A4F]/10 text-[#1B4332] border border-[#2D6A4F]/30 font-bold'
                        : 'text-[#1B4332] hover:text-[#40916C] hover:bg-[#F1F3F2]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${groupActive ? 'text-[#2D6A4F]' : 'text-[#52796F]'}`} />
                    <span>{entry.label}</span>
                    <ChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2D6A4F]' : 'text-[#52796F]'
                      }`} 
                    />
                    {groupActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] ml-0.5" />
                    )}
                  </button>

                  {/* Dropdown Menu Panel */}
                  {isOpen && (
                    <div
                      id={`dropdown-menu-${entry.id}`}
                      className="absolute top-full left-0 mt-1.5 w-72 rounded-2xl bg-white border border-[#D8E2DC] shadow-xl p-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                    >
                      <div className="px-2.5 py-1.5 mb-1 border-b border-[#D8E2DC]/60 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#52796F]">
                          {entry.label}
                        </span>
                        <Layers className="w-3 h-3 text-[#52796F]" />
                      </div>

                      <div className="space-y-0.5">
                        {entry.items.map((subItem) => {
                          const SubIcon = subItem.icon;
                          const isSubActive = activeTab === subItem.id;

                          return (
                            <button
                              key={subItem.id}
                              id={`dropdown-link-${subItem.id}`}
                              onClick={() => handleNavClick(subItem.id)}
                              className={`w-full text-left p-2.5 rounded-xl transition-all flex items-start gap-3 group ${
                                isSubActive
                                  ? 'bg-[#2D6A4F] text-white shadow-xs'
                                  : 'hover:bg-[#F1F3F2] text-[#1B4332]'
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  isSubActive
                                    ? 'bg-white/20 text-white'
                                    : 'bg-[#F1F3F2] text-[#2D6A4F] group-hover:bg-white group-hover:shadow-2xs'
                                }`}
                              >
                                <SubIcon className="w-4 h-4" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span
                                    className={`text-xs font-bold truncate ${
                                      isSubActive ? 'text-white' : 'text-[#1B4332] group-hover:text-[#2D6A4F]'
                                    }`}
                                  >
                                    {subItem.label}
                                  </span>
                                  {subItem.badge && (
                                    <span
                                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 ${
                                        isSubActive
                                          ? 'bg-white/20 text-white'
                                          : 'bg-emerald-100 text-emerald-800'
                                      }`}
                                    >
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                {subItem.shortDesc && (
                                  <p
                                    className={`text-[11px] line-clamp-1 mt-0.5 leading-tight ${
                                      isSubActive ? 'text-white/80' : 'text-[#52796F]'
                                    }`}
                                  >
                                    {subItem.shortDesc}
                                  </p>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search Trigger */}
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#F1F3F2] hover:bg-[#e7ece9] text-[#52796F] text-xs sm:text-sm font-medium transition-colors border border-[#D8E2DC]"
              title="Buscar en toda la plataforma (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#52796F]" />
              <span className="hidden sm:inline">Buscar</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#52796F] bg-white border border-[#D8E2DC] rounded-full">
                ⌘K
              </kbd>
            </button>

            {/* Quick Calculator Action on tablet/desktop */}
            <button
              id="quick-calc-btn"
              onClick={() => handleNavClick('calculadora')}
              className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xs transition-all ${
                activeTab === 'calculadora'
                  ? 'bg-[#1B4332] text-white ring-2 ring-[#40916C]/40'
                  : 'bg-[#2D6A4F] hover:bg-[#1B4332] text-white'
              }`}
              title="Ir a Calculadora Genética"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculadora</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1B4332] hover:text-[#2D6A4F] hover:bg-[#F1F3F2] transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Categorized Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-white border-b border-[#D8E2DC] px-4 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-4">
            {navStructure.map((entry) => {
              if (entry.type === 'single') {
                const Icon = entry.icon;
                const isActive = activeTab === entry.id;
                return (
                  <button
                    key={entry.id}
                    id={`mobile-nav-link-${entry.id}`}
                    onClick={() => handleNavClick(entry.id)}
                    className={`w-full p-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-[#2D6A4F] text-white shadow-xs'
                        : 'text-[#1B4332] bg-[#F8F9FA] hover:bg-[#F1F3F2] border border-[#D8E2DC]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2D6A4F]'}`} />
                      <span>{entry.label}</span>
                    </div>
                    {isActive && <span className="text-xs">Activo</span>}
                  </button>
                );
              }

              const GroupIcon = entry.icon;
              return (
                <div key={entry.id} className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 px-1 text-xs font-bold uppercase tracking-wider text-[#52796F]">
                    <GroupIcon className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>{entry.label}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {entry.items.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeTab === subItem.id;
                      return (
                        <button
                          key={subItem.id}
                          id={`mobile-subnav-link-${subItem.id}`}
                          onClick={() => handleNavClick(subItem.id)}
                          className={`p-2.5 rounded-xl text-left transition-all flex items-center justify-between ${
                            isSubActive
                              ? 'bg-[#2D6A4F] text-white shadow-xs'
                              : 'bg-[#F8F9FA] text-[#1B4332] hover:bg-[#F1F3F2] border border-[#D8E2DC]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <SubIcon
                              className={`w-4 h-4 shrink-0 ${
                                isSubActive ? 'text-white' : 'text-[#40916C]'
                              }`}
                            />
                            <div className="min-w-0">
                              <div className="text-xs font-semibold truncate">{subItem.label}</div>
                            </div>
                          </div>
                          {subItem.badge && (
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded ml-2 shrink-0 ${
                                isSubActive
                                  ? 'bg-white/20 text-white'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {subItem.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
