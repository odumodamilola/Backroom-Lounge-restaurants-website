import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-bebas text-[12rem] lg:text-[16rem] leading-none text-foreground mb-4">
            404
          </div>
          
          <h1 className="font-display text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 uppercase">
            Page Not <span className="text-primary italic">Found</span>
          </h1>
          
          <p className="text-muted text-lg lg:text-xl mb-12 font-sans italic lg:not-italic">
            The flavor you're looking for seems to have been cooked to perfection elsewhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="group flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl font-display text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-foreground/80 transition-all"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="group flex items-center justify-center gap-3 border border-border px-8 py-4 rounded-xl font-display text-[11px] font-bold tracking-[0.2em] uppercase hover:border-primary transition-all text-foreground"
            >
              <Home size={16} />
              Return Home
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="font-display text-[9px] font-bold tracking-[0.3em] text-muted-foreground uppercase">
            CHOPLIFE BISTRO
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Bold West African flavors, beautifully served.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
