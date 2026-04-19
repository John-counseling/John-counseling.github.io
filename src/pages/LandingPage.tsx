import { motion } from 'motion/react';
import { Heart, MessageCircle, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, Star, Users, Languages, MapPin } from 'lucide-react';
import { translations, Language } from '../translations';
import { Link } from 'react-router-dom';

const TwogetherLogo = () => (
  <div className="inline-flex flex-col items-start leading-none pointer-events-none select-none">
    <div className="flex items-baseline">
      <span className="font-serif text-2xl font-medium text-[#B02411]">two</span>
      <span className="font-serif text-2xl font-medium text-[#7D7D7D]">gether</span>
    </div>
    <div className="w-full flex justify-end">
      <span className="text-[9px] font-sans tracking-[0.3em] font-bold text-[#9D9D9D] -mt-0.5">IN TEXAS</span>
    </div>
  </div>
);

interface LandingPageProps {
  lang: Language;
  toggleLanguage: () => void;
}

export default function LandingPage({ lang, toggleLanguage }: LandingPageProps) {
  const t = translations[lang];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-warm-beige text-ink-rich font-sans selection:bg-olive-dark selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-beige/80 backdrop-blur-md border-b border-olive-dark/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-olive-dark fill-olive-dark" size={20} />
            <span className="font-serif text-xl font-bold italic text-olive-dark">{t.nav.logo}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-olive-muted hover:text-olive-dark transition-colors px-3 py-1.5 rounded-lg hover:bg-olive-dark/5"
            >
              <Languages size={18} />
              {lang === 'en' ? '中文' : 'English'}
            </button>
            <Link to="/course" className="bg-olive-dark text-white px-6 py-2.5 rounded-full font-semibold hover:bg-olive-dark/90 transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(90,90,64,0.2)] hidden sm:flex items-center">
              {t.nav.startCourse}
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6">
                <TwogetherLogo />
              </div>
              <span className="text-[11px] uppercase tracking-[2px] font-bold text-olive-muted block mb-3">{t.hero.label}</span>
              <h1 className="font-serif text-5xl lg:text-[58px] leading-[1.1] mb-6 text-olive-dark font-normal">
                {t.hero.headline}
              </h1>
              <p className="text-[18px] text-ink-rich/70 mb-8 max-w-[460px] leading-relaxed">
                {t.hero.tagline}
              </p>

              {/* Texas Bonus Card - Refined "Normal but Obvious" Design */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="max-w-[420px] mb-8 p-5 rounded-2xl bg-white border border-olive-dark/5 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden group"
              >
                {/* Shimmer Sweep Effect - Subtle */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    repeatDelay: 3
                  }}
                  className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-terracotta/5 to-transparent skew-x-[-20deg] z-0 pointer-events-none"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-terracotta/10 p-1.5 rounded-lg">
                      <Sparkles size={14} className="text-terracotta" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-terracotta">{t.hero.texasBonus.title}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl text-olive-dark leading-none">$60</span>
                        <span className="font-serif text-xl text-olive-dark/60 italic leading-none">off</span>
                      </div>
                      <span className="text-[11px] text-olive-muted mt-2 font-bold uppercase tracking-wider leading-none">
                        {lang === 'en' ? 'License Fee' : '婚姻登记费'}
                      </span>
                    </div>
                    
                    <div className="flex flex-col border-l border-olive-dark/10 pl-6">
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-3xl text-olive-dark leading-none">Skip</span>
                        <span className="font-serif text-xl text-olive-dark/60 italic leading-none">72h</span>
                      </div>
                      <span className="text-[11px] text-olive-muted mt-2 font-bold uppercase tracking-wider leading-none">
                        {lang === 'en' ? 'No Waiting Period' : '无需领证等待'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link to="/course" className="bg-olive-dark text-white px-9 py-4.5 rounded-full text-base font-semibold hover:bg-olive-dark/90 transition-all flex items-center justify-center gap-2 group shadow-[0_10px_20px_rgba(90,90,64,0.2)] w-full sm:w-auto">
                  {t.hero.enrollCta}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="text-[13px] text-olive-muted italic font-medium">
                  {t.hero.noCreditCard}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[320/440] w-full max-w-[320px] mx-auto rounded-[200px] overflow-hidden border border-black/5 relative z-10 bg-[#e2e2d8] flex items-center justify-center group">
                <img 
                  src="https://picsum.photos/seed/nature-calm/800/1000" 
                  alt="Couple sharing a quiet moment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Terracotta Decorative Inner Ring */}
                <div className="absolute inset-4 border border-terracotta/30 rounded-[200px] pointer-events-none" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/40 to-transparent flex flex-col justify-center items-center text-center p-10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-5xl mb-4">🌿</div>
                   <p className="font-serif italic text-xl leading-snug">{lang === 'en' ? '"True connection is built in the quiet spaces between questions."' : '"真正的连接，建立在提问之间的静谧时刻。"'}</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-olive-dark/5">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-ink-rich">"{t.hero.quote}"</p>
                <p className="text-xs uppercase tracking-widest mt-2 text-ink-rich/40">— {t.hero.author}</p>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-olive-dark/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* 3-Step Texas Path - MOVED TO PAGE 2 */}
        <section className="bg-white py-24 px-6 border-y border-olive-dark/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.span 
                {...fadeIn}
                className="text-[11px] uppercase tracking-[2px] font-bold text-terracotta block mb-4"
              >
                Texas Wedding Bonus
              </motion.span>
              <motion.h2 
                {...fadeIn}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl lg:text-5xl text-olive-dark max-w-3xl mx-auto"
              >
                {t.texasPath.headline}
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-olive-dark/10 z-0" />
              
              {t.texasPath.steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-warm-beige rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-md text-2xl font-serif text-olive-dark italic">
                    {step.idx}
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-olive-dark">{step.title}</h3>
                  <p className="text-base text-ink-rich/60 leading-relaxed max-w-xs">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awareness Section (Pain Points) */}
        <section className="bg-warm-beige py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.span 
              {...fadeIn}
              className="text-[11px] uppercase tracking-[2px] font-bold text-olive-muted block mb-4"
            >
              {t.awareness.label}
            </motion.span>
            <motion.h2 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl lg:text-5xl mb-8 text-olive-dark"
            >
              {t.awareness.headline}
            </motion.h2>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-lg text-ink-rich/60 leading-relaxed mb-16 max-w-3xl mx-auto"
            >
              {t.awareness.description}
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.modules.map((item, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="p-8 rounded-[24px] bg-white/50 border border-black/5 hover:border-olive-dark/20 transition-all hover:-translate-y-1 text-left"
                >
                  <div className="w-8 h-8 bg-warm-beige rounded-full flex items-center justify-center mb-6 text-sm font-bold text-terracotta border border-terracotta/20">
                    {item.idx}
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-olive-dark">{item.title}</h3>
                  <p className="text-[13px] text-ink-rich/60 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Overview (The Solution) */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://picsum.photos/seed/trust/400/500" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" alt="Nature Trust" />
                  <img src="https://picsum.photos/seed/love/400/400" className="rounded-2xl shadow-lg w-full h-48 object-cover" referrerPolicy="no-referrer" alt="Nature Love" />
                </div>
                <div className="space-y-4 pt-12">
                  <img src="https://picsum.photos/seed/future/400/400" className="rounded-2xl shadow-lg w-full h-48 object-cover" referrerPolicy="no-referrer" alt="Nature Future" />
                  <img src="https://picsum.photos/seed/home/400/500" className="rounded-2xl shadow-lg w-full h-64 object-cover" referrerPolicy="no-referrer" alt="Nature Home" />
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-[2px] font-bold text-olive-muted block mb-4">{t.solution.label}</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8 text-olive-dark">{t.solution.headline}</h2>
              <div className="space-y-6">
                {t.solution.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-terracotta shrink-0" size={20} />
                    <span className="text-lg text-ink-rich/80">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/course" className="inline-block mt-12 bg-olive-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-olive-dark/90 transition-all shadow-[0_10px_20px_rgba(90,90,64,0.2)]">
                {t.solution.viewCurriculum}
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-olive-dark text-warm-beige py-24 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="font-serif text-5xl lg:text-6xl mb-8"
            >
              {t.finalCta.headline}
            </motion.h2>
            <p className="text-lg lg:text-xl text-warm-beige/60 mb-12 max-w-2xl mx-auto">
              {t.finalCta.description}
            </p>
            <Link to="/course" className="inline-block bg-warm-beige text-olive-dark px-10 py-5 rounded-full text-xl font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl">
              {t.finalCta.enrollCta}
            </Link>
          </div>
          
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[120px] -ml-48 -mb-48" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-warm-beige py-12 px-6 border-t border-olive-dark/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[13px] font-medium opacity-80">
          <div className="flex items-center gap-2 grayscale text-olive-dark">
            <Heart size={18} />
            <span className="font-serif text-lg font-bold italic">{t.nav.logo}</span>
          </div>
          <div className="text-olive-muted">
            {t.footer.copyright}
          </div>
          <div className="flex gap-8 uppercase tracking-widest text-[#9A9A8A]">
            <a href="#" className="hover:text-olive-dark">{t.nav.overview}</a>
            <a href="#" className="hover:text-olive-dark">{t.nav.syllabus}</a>
            <a href="#" className="hover:text-olive-dark">{t.nav.guide}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
