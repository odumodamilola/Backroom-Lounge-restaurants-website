import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Search as SearchIcon, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';
import DishCard from './DishCard';

interface SearchProps {
  menuItems: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchModal({ menuItems, onSelectItem, isOpen, onOpenChange }: SearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenChange(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onOpenChange(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpenChange]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Reset query when closed
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  // Optimized search logic with memoization
  const results = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
    
    return menuItems.filter(item => {
      const name = item.name.toLowerCase();
      const description = item.description.toLowerCase();
      const category = item.category.toLowerCase();

      return searchTerms.every(term => 
        name.includes(term) || 
        description.includes(term) || 
        category.includes(term)
      );
    });
  }, [query, menuItems]);

  const handleSelect = useCallback((item: MenuItem) => {
    onSelectItem(item);
    onOpenChange(false);
  }, [onSelectItem, onOpenChange]);

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleClear = () => {
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      {/* Search Trigger Button - Desktop */}
      <button
        onClick={() => onOpenChange(true)}
        className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 bg-surface border border-border rounded-full hover:border-primary transition-all group"
      >
        <SearchIcon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors hidden sm:inline">Search menu...</span>
        <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-background border border-border rounded">
          ⌘K
        </kbd>
      </button>

      {/* Mobile Search Button */}
      <button
        onClick={() => onOpenChange(true)}
        className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
        aria-label="Search"
      >
        <SearchIcon size={20} />
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-20 sm:pt-32 px-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Search Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border">
                <SearchIcon size={18} className="text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search dishes, ingredients, or categories..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base sm:text-lg min-w-0"
                  aria-label="Search menu items"
                />
                {query && (
                  <button
                    onClick={handleClear}
                    className="p-1 sm:p-2 hover:bg-surface rounded-full transition-colors flex-shrink-0"
                    aria-label="Clear search"
                  >
                    <X size={14} className="text-muted-foreground" />
                  </button>
                )}
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-surface border border-border rounded flex-shrink-0">
                  ESC
                </kbd>
              </div>

              {/* Search Results */}
              <div className="max-h-[50vh] sm:max-h-[60vh] overflow-y-auto" ref={resultsContainerRef}>
                {!query && (
                  <div className="p-6 sm:p-8 text-center">
                    <SearchIcon size={36} className="mx-auto text-muted-foreground/30 mb-3 sm:mb-4" />
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Start typing to search our menu
                    </p>
                    <p className="text-muted-foreground/60 text-xs mt-2">
                      Try: "Jollof", "Chicken", "Spicy", "Drinks"
                    </p>
                  </div>
                )}

                {query && results.length === 0 && (
                  <div className="p-6 sm:p-8 text-center">
                    <X size={36} className="mx-auto text-muted-foreground/30 mb-3 sm:mb-4" />
                    <p className="text-muted-foreground text-sm sm:text-base">
                      No menu items found for "{query}"
                    </p>
                    <p className="text-muted-foreground/60 text-xs mt-2">
                      Try a different search term
                    </p>
                  </div>
                )}

                {query && results.length > 0 && (
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4 px-1 sm:px-2">
                      <span className="text-[10px] sm:text-xs font-display font-bold tracking-[0.2em] text-muted-foreground uppercase">
                        {results.length} result{results.length !== 1 ? 's' : ''} found
                      </span>
                      <button
                        onClick={handleClear}
                        className="text-xs text-primary hover:text-primary-dark transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {results.map((item) => (
                        <DishCard
                          key={item.id}
                          item={item}
                          onSelect={handleSelect}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
