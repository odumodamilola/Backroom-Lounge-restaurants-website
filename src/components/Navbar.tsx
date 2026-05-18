import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { MENU_CATEGORIES } from '../constants';
import { MenuItem } from '../types';
import ThemeToggle from './ThemeToggle';
import SearchModal from './Search';
import choplifeLogo from '../assets/images/Choplife-bistro-logo-04.png';

interface NavbarProps {
  activeCategory: string;
  setView: (view: 'home' | 'details') => void;
  isSearchOpen?: boolean;
  onSearchOpenChange?: (open: boolean) => void;
  menuItems?: MenuItem[];
  onSelectItem?: (item: MenuItem) => void;
}

export default function Navbar({ activeCategory, setView, isSearchOpen = false, onSearchOpenChange, menuItems = [], onSelectItem }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className={`backdrop-blur-2xl border-b border-border h-14 sm:h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-12 transition-colors duration-500 ${isScrolled ? 'bg-background/95' : 'bg-background/80'}`}>
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group"
          >
            <img src={choplifeLogo} alt="Choplife Bistro" className="h-12 sm:h-14 md:h-16 lg:h-[4.5rem] w-auto object-contain" />
          </a>

          {/* Desktop Category Navigation */}
          <div className="hidden xl:flex items-center gap-1 overflow-x-auto no-scrollbar max-w-2xl px-4 translate-y-[1px]">
            <button
              onClick={() => setView('details')}
              className="px-4 py-2 font-display text-[10px] uppercase font-bold tracking-[0.2em] text-muted hover:text-primary transition-all whitespace-nowrap border-b-2 border-transparent"
            >
              Our Story
            </button>
            <div className="w-[1px] h-4 bg-border mx-2" />
            {MENU_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={`
                  relative px-4 py-2 font-display text-[10px] uppercase font-bold tracking-[0.2em] transition-all whitespace-nowrap border-b-2
                  ${activeCategory === cat.id 
                    ? 'text-primary border-primary' 
                    : 'text-muted border-transparent hover:text-foreground hover:border-border'}
                `}
              >
                {cat.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {/* Search Trigger - Desktop */}
            {onSearchOpenChange && (
              <button
                onClick={() => onSearchOpenChange(true)}
                className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 bg-surface border border-border rounded-full hover:border-primary transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground group-hover:text-primary transition-colors"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">Search menu...</span>
                <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-background border border-border rounded">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Search Trigger - Mobile */}
            {onSearchOpenChange && (
              <button
                onClick={() => onSearchOpenChange(true)}
                className="md:hidden p-2 text-muted hover:text-foreground transition-colors active:scale-95"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            )}

            <a 
              href="tel:+2349053063345"
              className="hidden md:flex items-center gap-2 font-display text-[10px] sm:text-[11px] font-bold tracking-widest text-muted hover:text-primary transition-colors group"
            >
              <Phone size={13} className="group-hover:text-primary transition-colors" />
              <span className="hidden lg:inline">CALL US</span>
            </a>
            
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 sm:p-3 text-muted hover:text-foreground transition-colors active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] xl:hidden"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] sm:w-3/4 max-w-sm bg-background border-l border-border p-6 sm:p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 sm:mb-12">
                <span className="font-bebas text-2xl sm:text-3xl text-foreground">MENU</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors active:scale-95" aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-2 sm:gap-4 pb-8 sm:pb-12">
                <button
                  onClick={() => { setView('details'); setIsOpen(false); }}
                  className="group flex items-center justify-between py-3 sm:py-4 border-b border-border active:bg-surface-soft transition-colors"
                >
                  <span className="font-bebas text-2xl sm:text-3xl text-primary uppercase tracking-tight">Our Story</span>
                  <ArrowRight size={18} className="text-primary" />
                </button>
                
                {MENU_CATEGORIES.map((cat, i) => (
                  <motion.a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`
                      group flex items-center justify-between py-2 sm:py-3 border-b border-border/50 active:bg-surface-soft transition-colors
                      ${activeCategory === cat.id ? 'border-primary/30' : ''}
                    `}
                  >
                    <span className={`font-bebas text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight transition-colors ${activeCategory === cat.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {cat.name}
                    </span>
                    <ArrowRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-6 sm:pt-8 border-t border-border flex flex-col gap-3 sm:gap-4">
                <a href="tel:+2349053063345" className="w-full py-3 sm:py-4 bg-primary text-white font-display text-[10px] sm:text-[11px] font-bold tracking-widest uppercase rounded-xl hover:bg-primary-dark transition-colors text-center block active:scale-[0.98]">
                  BOOK A TABLE
                </a>
                <p className="text-center text-muted-foreground font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">
                  Mandela Freedom Park, Osogbo
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      {onSearchOpenChange && onSelectItem && (
        <SearchModal
          menuItems={menuItems}
          onSelectItem={onSelectItem}
          isOpen={isSearchOpen}
          onOpenChange={onSearchOpenChange}
        />
      )}
    </>
  );
}
