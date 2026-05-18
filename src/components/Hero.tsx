import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] min-h-[600px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=85&auto=format&fit=crop"
          alt="Bold West African cuisine at Choplife Bistro"
          className="w-full h-full"
          priority
          width={1920}
          height={1080}
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-xl pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32 pt-24 sm:pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="font-display text-[9px] sm:text-[10px] lg:text-[12px] font-bold tracking-[0.4em] sm:tracking-[0.5em] text-primary uppercase">
              Premium West African Dining
            </span>
          </motion.div>

          <h1 className="text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-2xl">
            WHERE BOLD<br />
            <span className="text-primary italic">FLAVOR</span> MEETS<br />
            BEAUTIFUL DINING<span className="text-primary">.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/70 text-base sm:text-lg lg:text-xl xl:text-2xl font-sans max-w-xl mb-8 sm:mb-10 lg:mb-14 leading-relaxed"
          >
            West Africa's finest dishes, crafted with ancestral fire and modern soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6"
          >
            <a
              href="#african-dishes"
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-display text-[10px] sm:text-[11px] lg:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all hover:scale-105 shadow-lg shadow-primary/20 text-center active:scale-95"
            >
              Explore Menu
            </a>
            <a
              href="#location"
              className="border border-white/20 hover:border-white/50 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full font-display text-[10px] sm:text-[11px] lg:text-[12px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all hover:bg-white/5 backdrop-blur-sm text-center active:scale-95"
            >
              Book a Table
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-12 hidden md:flex flex-col items-center gap-2 sm:gap-3"
        >
          <span className="font-mono text-[8px] sm:text-[9px] text-white/40 uppercase tracking-[0.25em] sm:tracking-[0.3em] vertical-text">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
