import { motion } from 'motion/react';
import { ArrowLeft, ShieldCheck, Zap, Heart, Users, Globe } from 'lucide-react';

interface DetailsPageProps {
  onBack: () => void;
}

export default function DetailsPage({ onBack }: DetailsPageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-background text-foreground py-20 lg:py-32"
    >
      <div className="container-xl">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 lg:mb-20 font-display text-[11px] font-bold tracking-[0.2em] uppercase"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* 1. Hero Section */}
        <header className="max-w-4xl mb-24 lg:mb-32">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-bebas leading-none mb-6"
          >
            THE <span className="text-primary italic">Backroom Lounge</span> STANDARD
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl lg:text-2xl text-muted font-sans font-medium"
          >
            A tranquil, intentional space where hospitality, culture, reflection, and recreation meet in Osogbo.
          </motion.p>
        </header>

        {/* 2. What This Is */}
        <section className="mb-24 lg:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-display font-bold tracking-tight uppercase">Our Foundation</h2>
            <div className="h-1 w-20 bg-primary" />
          </div>
          <div className="text-lg lg:text-2xl text-muted leading-relaxed font-sans italic lg:not-italic">
            The Backroom Lounge in Osogbo is a multipurpose establishment that combines hospitality with cultural and recreational experiences. It is designed as a calm escape from noisy nightlife, with room for refreshments, observation, reflection, and meaningful community.
          </div>
        </section>

        {/* 3. Why It Matters */}
        <section className="mb-24 lg:mb-40 space-y-12">
          <h2 className="text-sm font-display font-bold tracking-[0.5em] text-primary uppercase text-center">The Purpose</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Connection", 
                desc: "We create a welcoming setting for thoughtful hangouts, shared refreshments, and community moments centered around culture and spirituality.",
                icon: Heart
              },
              { 
                title: "Evolution", 
                desc: "We blend cafe-style refreshment, cultural observation, and retreat energy into one contemporary lounge experience.",
                icon: Zap
              },
              { 
                title: "Visibility", 
                desc: "We give local heritage a calm, beautiful space where visitors can learn, appreciate, and reconnect.",
                icon: Globe
              }
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 lg:p-12 bg-surface border border-border rounded-3xl group hover:border-primary/30 transition-all"
              >
                <item.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                <h3 className="text-xl lg:text-2xl font-display font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Highlights */}
        <section className="mb-24 lg:mb-40 bg-surface-soft border border-border rounded-[2rem] lg:rounded-[4rem] p-10 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <h2 className="text-3xl lg:text-5xl font-bebas mb-12 lg:mb-20">THE ELEMENTS OF BACKROOM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {[
              { label: "Cafe & Refreshments", detail: "Drinks and light lounge comforts served in a relaxed setting built for easy conversation and calm." },
              { label: "Cultural Museum", detail: "An observational space for visitors to learn about, appreciate, and sit with local heritage." },
              { label: "Retreat Centre", detail: "A quiet environment for reflection, resetting, and mental calm away from the rush outside." },
              { label: "Event Space", detail: "Occasional themed hangouts and community gatherings centered around culture, spirituality, and connection." }
            ].map(point => (
              <div key={point.label}>
                <h4 className="font-display text-[11px] font-bold tracking-[0.3em] text-primary uppercase mb-3">{point.label}</h4>
                <p className="text-lg lg:text-xl text-muted font-sans leading-snug">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Who It Is For */}
        <section className="mb-24 lg:mb-40 max-w-3xl mx-auto text-center space-y-8">
           <Users className="mx-auto text-muted-foreground" size={48} strokeWidth={1} />
           <h2 className="text-2xl lg:text-4xl font-display font-bold tracking-tight uppercase">Built for the culture.</h2>
           <p className="text-lg lg:text-xl text-muted leading-relaxed">
             Whether you are looking for calm, culture, refreshments, or a more intentional place to gather, Backroom Lounge is built for people who want more than ordinary nightlife.
           </p>
        </section>

        {/* 6. Trust Section */}
        <section className="mb-24 lg:mb-40 border-t border-border pt-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase tracking-wider">Experience Assured</h4>
              <p className="text-sm text-muted">Intentional design, thoughtful hospitality, and a serene atmosphere guide every visit.</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Established 2025</p>
            <p className="text-foreground font-bebas text-2xl tracking-widest">BACKROOM LOUNGE OSOGBO</p>
          </div>
        </section>

        {/* 7. Final Message */}
        <footer className="text-center space-y-10">
          <h2 className="text-3xl lg:text-5xl font-bebas text-muted">Ready when you are.</h2>
          <button 
            onClick={onBack}
            className="inline-block bg-primary hover:bg-primary-dark text-white px-12 py-6 rounded-full font-display text-[13px] font-bold tracking-[0.2em] transition-all hover:scale-105"
          >
            PLAN YOUR VISIT
          </button>
        </footer>
      </div>
    </motion.div>
  );
}

