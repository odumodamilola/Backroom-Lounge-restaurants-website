import { motion } from 'motion/react';
import { ArrowLeft, Clock, Flame, Utensils, Info, CheckCircle2 } from 'lucide-react';
import { MenuItem } from '../types';
import OptimizedImage from './OptimizedImage';

interface FoodDetailsPageProps {
  item: MenuItem;
  onBack: () => void;
}

export default function FoodDetailsPage({ item, onBack }: FoodDetailsPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* Hero Header */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <OptimizedImage
          src={item.image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80&auto=format&fit=crop'}
          alt={`${item.name} - Premium dish at Choplife Bistro Osogbo`}
          className="w-full h-full grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
          priority
          width={1600}
          height={900}
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute top-6 sm:top-8 md:top-10 left-4 sm:left-6 md:left-12 z-20">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-white bg-black/40 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-primary transition-all font-display text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase border border-white/10 active:scale-95"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Menu
          </button>
        </div>

        <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block px-3 sm:px-4 py-1 bg-primary text-white font-display text-[9px] sm:text-[10px] font-bold tracking-widest uppercase rounded-md mb-4 sm:mb-6">
              {item.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bebas leading-none uppercase mb-3 sm:mb-4 drop-shadow-2xl">
              {item.name.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-primary italic' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container-xl py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
        {/* Left Column: Story & Description */}
        <div className="lg:col-span-2 space-y-8 sm:space-y-10 lg:space-y-12">
          <section>
            <h2 className="font-display text-[10px] sm:text-[11px] font-bold tracking-[0.4em] sm:tracking-[0.5em] text-primary uppercase block mb-6 sm:mb-8">The Story</h2>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted leading-relaxed font-sans italic lg:not-italic drop-shadow-sm">
              {item.description}
            </p>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="p-6 sm:p-8 lg:p-12 bg-surface border border-border rounded-2xl sm:rounded-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Flame className="text-primary" size={24} />
                <h3 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base">Soul Factor</h3>
              </div>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                Prepared with ancestral heat and a focus on depth. Every ingredient is selected for its vibration and history.
              </p>
            </div>
            <div className="p-6 sm:p-8 lg:p-12 bg-surface border border-border rounded-2xl sm:rounded-3xl">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Utensils className="text-primary" size={24} />
                <h3 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base">Kitchen Notes</h3>
              </div>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                We recommend pairing this with our signature palm wine reduction or a crisp local lager to balance the bold spices.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Specs & CTA */}
        <aside className="space-y-8 sm:space-y-10">
          <div className="bg-surface-soft border border-border rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
            <h3 className="font-bebas text-2xl sm:text-3xl">DISH SPECIFICATIONS</h3>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                { icon: Clock, label: "Prep Time", val: "Slow Cooked" },
                { icon: Info, label: "Allergens", val: "Nut-free option available" },
                { icon: CheckCircle2, label: "Availability", val: "Daily Special" }
              ].map((spec, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-3 sm:pb-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-muted">
                    <spec.icon size={18} strokeWidth={1.5} />
                    <span className="font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">{spec.label}</span>
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-medium">{spec.val}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 sm:pt-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bebas text-primary mb-2">
                {'\u20A6'}{item.price.toLocaleString()}
              </div>
              <p className="text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Pricing Subject to Market Fluctuations</p>
            </div>

            <button className="w-full bg-foreground text-background py-4 sm:py-5 rounded-xl font-display text-[11px] sm:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all active:scale-[0.98]">
              REQUEST PRIORITY SEATING
            </button>
          </div>

          <div className="p-6 sm:p-8 border border-border rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-center">
            <p className="text-muted-foreground font-display text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] leading-relaxed">
              CHOPLIFE BISTRO FLAGSHIP · OSOGBO NIGERIA
            </p>
          </div>
        </aside>
      </div>

      {/* Suggested Pairings - Simple placeholder footer */}
      <footer className="bg-surface-soft py-12 sm:py-16 lg:py-20 border-t border-border">
        <div className="container-xl text-center">
          <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12">YOU MIGHT ALSO VIBE WITH</h2>
          <button 
            onClick={onBack}
            className="text-primary font-display text-[10px] sm:text-[11px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase border-b-2 border-primary pb-2 hover:text-primary-dark hover:border-primary-dark transition-all active:scale-95"
          >
            DISCOVER THE FULL MENU
          </button>
        </div>
      </footer>
    </motion.div>
  );
}
