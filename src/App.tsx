import { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DishCard from './components/DishCard';
import DetailsPage from './components/DetailsPage';
import FoodDetailsPage from './components/FoodDetailsPage';
import NotFoundPage from './components/NotFoundPage';
import SearchModal from './components/Search';
import { MENU_CATEGORIES, MENU_ITEMS } from './constants';
import { MenuItem } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, Instagram, Twitter, Facebook, Music, ExternalLink, Mail } from 'lucide-react';
import choplifeVideo from './assets/videos/choplifebistroo (@choplifebistroo).mp4';
import choplifeLogo from './assets/images/Choplife-bistro-logo-04.png';

function Home() {
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Preload critical images
  useEffect(() => {
    const criticalImages = [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=85&auto=format&fit=crop',
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    if (selectedItem) {
      navigate(`/food/${selectedItem.id}`);
    }
  }, [selectedItem, navigate]);

  useEffect(() => {
    if (selectedItem) {
      window.scrollTo(0, 0);
    }
  }, [selectedItem]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveCategory(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    MENU_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="noise-overlay" />
      <Navbar 
        activeCategory={activeCategory} 
        setView={() => navigate('/')} 
        isSearchOpen={isSearchOpen}
        onSearchOpenChange={setIsSearchOpen}
        menuItems={MENU_ITEMS}
        onSelectItem={setSelectedItem}
      />
      
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <FoodDetailsPage 
            key="food-details"
            item={selectedItem} 
            onBack={() => {
              setSelectedItem(null);
              navigate('/');
            }} 
          />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <main>
              <Hero />

              <section className="py-20 lg:py-40">
                <div className="container-xl">
                  {MENU_CATEGORIES.map((cat) => (
                    <div 
                      key={cat.id} 
                      id={cat.id}
                      className="mb-24 lg:mb-48 scroll-mt-24 lg:scroll-mt-32"
                      ref={el => { sectionRefs.current[cat.id] = el; }}
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-border pb-8 lg:pb-12 mb-12 lg:mb-20 gap-8"
                      >
                        <div className="max-w-2xl">
                          <span className="font-display text-[9px] lg:text-[11px] font-bold tracking-[0.5em] text-primary uppercase block mb-4 lg:mb-6">
                            {cat.label}
                          </span>
                          <h2 className="tracking-tight leading-none uppercase text-foreground">
                            {cat.name}
                          </h2>
                        </div>
                        <div className="hidden md:flex flex-col items-end">
                          <span className="font-mono text-[10px] lg:text-xs text-muted-foreground mb-4 tracking-[0.2em]">/ {cat.count.toString().padStart(2, '0')}</span>
                          <div className="h-[2px] w-24 lg:w-40 bg-gradient-to-r from-primary/40 to-transparent" />
                        </div>
                      </motion.div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                        {MENU_ITEMS.filter(item => item.category === cat.id).map(item => (
                          <DishCard key={item.id} item={item} onSelect={setSelectedItem} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Story Section */}
              <section id="about" className="py-20 lg:py-48 bg-surface-soft/20 border-y border-border relative overflow-hidden">
                <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                  <div className="relative perspective-1000 order-2 lg:order-1">
                     <motion.div 
                      initial={{ rotateY: -15, rotateX: 10, opacity: 0 }}
                      whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      className="aspect-square lg:aspect-[4/5] bg-gradient-to-br from-surface to-background border border-border rounded-[2rem] lg:rounded-[4rem] overflow-hidden relative"
                     >
                       <video 
                        src={choplifeVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                     </motion.div>
                  </div>

                  <div className="max-w-2xl order-1 lg:order-2">
                    <span className="font-display text-[11px] lg:text-[13px] font-bold tracking-[0.5em] text-primary uppercase block mb-6 lg:mb-10">Our Roots</span>
                    <h2 className="mb-8 lg:mb-12 text-foreground">MORE THAN A RESTAURANT. <span className="text-primary italic">A CELEBRATION.</span></h2>
                    <p className="text-muted text-lg lg:text-2xl leading-relaxed mb-12 font-sans italic lg:not-italic lg:text-muted/80">
                      At Choplife, food is a love language. We take the bold, smoky, soulful flavors passed down through generations and serve them in a space designed to make you feel like royalty. Every plate is a love letter to West African heritage.
                    </p>
                    
                    <button 
                      onClick={() => navigate('/details')}
                      className="group flex items-center gap-4 text-primary font-display text-[11px] font-bold tracking-[0.2em] uppercase mb-12 hover:gap-6 transition-all"
                    >
                      Our Philosophy
                      <ArrowRight size={14} />
                    </button>

                    <div className="grid grid-cols-2 gap-12 lg:gap-20">
                      {[
                        { label: "Generations of Taste", val: "100+" },
                        { label: "Crafted Dishes", val: "50+" },
                        { label: "Community First", val: "ALWAYS" },
                        { label: "Joy Factor", val: "100%" }
                      ].map((stat, i) => (
                        <motion.div 
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <div className="font-bebas text-5xl lg:text-7xl mb-2 text-foreground">{stat.val}</div>
                          <div className="font-display text-[9px] lg:text-[11px] font-bold tracking-[0.3em] text-muted-foreground uppercase">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Location Section */}
              <section id="location" className="py-12 sm:py-16 md:py-20 lg:py-40 xl:py-48">
                <div className="container-xl">
                   <div className="relative border border-border rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[5rem] overflow-hidden bg-surface shadow-2xl group">
                      {/* Abstract Interactive Glow */}
                      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full hidden lg:block bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
                      
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                        <div className="p-6 sm:p-8 md:p-10 lg:p-24 border-b lg:border-b-0 lg:border-r border-border">
                          <span className="font-display text-[9px] sm:text-[10px] lg:text-[12px] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-accent uppercase block mb-6 sm:mb-8 lg:mb-12">Visit Us</span>
                          <h2 className="mb-8 sm:mb-10 lg:mb-16 md:mb-20 uppercase text-foreground text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">EXPERIENCE <br/> <span className="text-primary italic">.</span></h2>
                          
                          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-16 mb-10 sm:mb-12 lg:mb-16 xl:mb-24">
                             <div>
                                <h4 className="font-display text-[9px] sm:text-[10px] lg:text-[12px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-primary mb-3 sm:mb-4">Our Home</h4>
                                <p className="text-muted font-sans text-base sm:text-xl lg:text-3xl leading-tight">
                                   1, Mandela Freedom Park,<br />
                                   Alekunwodo, Osogbo,<br />
                                   Nigeria
                                </p>
                             </div>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                <div>
                                  <h4 className="font-display text-[8px] sm:text-[9px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-2 sm:mb-3">Service Hours</h4>
                                  <p className="text-muted font-sans text-sm sm:text-base tracking-wide">11:00 — 23:00 DAILY</p>
                                </div>
                                <div>
                                  <h4 className="font-display text-[8px] sm:text-[9px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-2 sm:mb-3">Priority Line</h4>
                                  <p className="text-muted font-sans text-sm sm:text-base tracking-wide">+234 905 306 3345</p>
                                </div>
                             </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
                            <a href="tel:+2349053063345" className="bg-foreground text-background px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl font-display text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-foreground/80 transition-all text-center flex-1 sm:flex-none active:scale-95">VOICE CALL</a>
                            <button className="border border-border px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl font-display text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:border-primary transition-all text-center flex-1 sm:flex-none uppercase text-foreground active:scale-95">Digital Booking</button>
                          </div>
                        </div>

                        <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto relative overflow-hidden">
                           <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.079921880411!2d4.5424794740078855!3d7.78135079223831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787beac10191b%3A0xe98efc513cebbdb7!2sChoplife%20Bistro%20Restaurants%20Osogbo!5e0!3m2!1sen!2sng!4v1778665418796!5m2!1sen!2sng" 
                              className="w-full h-full border-0"
                              allowFullScreen
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                           />
                        </div>
                      </div>
                   </div>
                </div>
              </section>
            </main>

            <footer className="py-12 sm:py-16 lg:py-24 xl:py-32 border-t border-border bg-surface-soft">
               <div className="container-xl">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 sm:gap-12 lg:gap-0 mb-12 sm:mb-16 lg:mb-20 xl:mb-32">
                     <div className="w-full lg:w-auto">
                        <div className="font-bebas text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl leading-none mb-4 sm:mb-6 text-foreground">
                          CHOP<span className="text-primary italic">LIFE.</span>
                        </div>
                        <p className="text-muted-foreground font-display text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">Bold West African flavors, beautifully served.</p>
                     </div>
                     
                     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start sm:items-center w-full lg:w-auto">
                        <a href="mailto:choplifebistrooo@gmail.com" className="font-display text-[8px] sm:text-[9px] lg:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-muted hover:text-primary transition-colors flex items-center gap-2 sm:gap-3 group">
                          <Mail size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="hidden sm:inline">choplifebistrooo@gmail.com</span>
                          <span className="sm:hidden">Email</span>
                        </a>
                        {[
                          { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/choplifebristroo' },
                          { name: 'TikTok', icon: Music, url: 'https://tiktok.com/@choplifebristroo' },
                          { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/choplifebristroo' }
                        ].map(social => (
                          <a key={social.name} href={social.url} className="font-display text-[8px] sm:text-[9px] lg:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-muted hover:text-primary transition-colors flex items-center gap-2 sm:gap-3 group">
                            <social.icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                            {social.name}
                            <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ))}
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center pt-8 sm:pt-10 lg:pt-12 border-t border-border gap-4 sm:gap-6">
                     <div className="text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] sm:tracking-[0.4em] text-center sm:text-left">
                        © 2026 CHOPLIFE BISTRO GROUP · DESIGNED FOR THE FUTURE.
                     </div>
                     <div className="flex gap-4 sm:gap-6 lg:gap-8 text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                        <a href="#" className="hover:text-foreground">Privacy</a>
                        <a href="#" className="hover:text-foreground">Terms</a>
                        <a href="#" className="hover:text-foreground" onClick={(e) => { e.preventDefault(); navigate('/details'); }}>Our Standards</a>
                     </div>
                  </div>
               </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FoodDetailsRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract food ID from pathname like /food/egusi
  const foodId = location.pathname.replace('/food/', '') || '';
  const item = MENU_ITEMS.find(i => i.id === foodId);

  if (!item) {
    navigate('/');
    return null;
  }

  return (
    <FoodDetailsPage 
      key="food-details"
      item={item} 
      onBack={() => navigate('/')} 
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetailsRoute />} />
          <Route path="/details" element={<DetailsPage onBack={() => window.history.back()} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
