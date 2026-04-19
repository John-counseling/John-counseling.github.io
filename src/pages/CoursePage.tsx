import { useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileDown, CheckCircle2, ArrowLeft, Mail } from 'lucide-react';
import { Language, translations } from '../translations';
import { Link } from 'react-router-dom';

interface CoursePageProps {
  lang: Language;
}

const CognitoForm = () => {
  useEffect(() => {
    // Inject the Cognito iframe resizing script
    const scriptId = 'cognito-iframe-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://www.cognitoforms.com/f/iframe.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="cognito-form-wrapper bg-white rounded-[32px] p-2 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-olive-dark/5 overflow-hidden">
      <iframe 
        src="https://www.cognitoforms.com/f/9ANofvpIGUqdeAU3lBORpA/2" 
        allow="payment" 
        className="w-full border-0 transition-all duration-500" 
        height="1269"
        title="John Counseling Certificate Form"
      ></iframe>
    </div>
  );
};

export default function CoursePage({ lang }: CoursePageProps) {
  const t = translations[lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#FDFCF9] text-ink-rich pb-24"
    >
      {/* Course Navigation */}
      <nav className="bg-white border-b border-olive-dark/5 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-olive-muted hover:text-olive-dark transition-colors font-bold text-sm uppercase tracking-widest">
            <ArrowLeft size={16} />
            {lang === 'en' ? 'Back to Site' : '返回首页'}
          </Link>
          <div className="font-serif italic font-bold text-olive-dark">John Counseling</div>
          <div className="w-24"></div> {/* Spacer */}
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-16">
        {/* Header */}
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-serif text-4xl lg:text-5xl text-olive-dark mb-6"
          >
            {t.course.headline}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-ink-rich/60 leading-relaxed max-w-2xl mx-auto"
          >
            {t.course.description}
          </motion.p>
        </header>

        {/* PDF Download Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-terracotta text-white p-8 rounded-[32px] mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-4 rounded-2xl">
              <BookOpen size={32} />
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-1">{t.course.downloadButton}</h3>
              <p className="text-white/70 text-sm">{lang === 'en' ? '6-Module Comprehensive Study Guide (PDF)' : '6模块完整学习指南 (PDF)'}</p>
            </div>
          </div>
          <a 
            href="././public/结婚_完结.pdf" 
            download="婚前课程.pdf" 
            className="bg-white text-terracotta px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-all shadow-lg shrink-0 no-underline"
          >
            <FileDown size={20} />
            {lang === 'en' ? 'Download PDF File' : '下载课程文件'}
          </a>
        </motion.div>

        {/* Modules Grid */}
        <div className="mb-24">
          <h2 className="text-[11px] uppercase tracking-[2px] font-bold text-olive-muted mb-8 border-b border-olive-dark/10 pb-4">
            {t.course.modulesTitle}
          </h2>
          <div className="flex flex-col gap-10">
            {t.course.modules.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-[32px] border border-olive-dark/5 shadow-sm group hover:border-olive-dark/20 transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <div className="w-10 h-10 rounded-full bg-warm-beige flex items-center justify-center mb-6 text-[#B02411] font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="font-serif text-2xl mb-4 text-olive-dark">{m.title}</h4>
                    <p className="text-base text-ink-rich/60 leading-relaxed max-w-lg mb-8">{m.desc}</p>
                  </div>
                  
                  {/* YouTube Placeholder for the module */}
                  <div className="w-full md:w-[320px] aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-black/5 relative shadow-inner">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/placeholder?rel=0`} 
                      title={`${m.title} Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6 text-center pointer-events-none group-hover:opacity-0 transition-opacity">
                      <p className="text-white text-xs font-bold uppercase tracking-widest">{lang === 'en' ? `Replace with Module ${idx + 1} YouTube URL` : `替换为模块 ${idx + 1} 的 YouTube 链接`}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Claim Section */}
        <section id="certificate-form" className="bg-warm-beige/30 rounded-[48px] p-10 lg:p-16 border border-olive-dark/5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-dark/10 text-olive-dark font-bold text-[10px] uppercase tracking-wider mb-6">
              <CheckCircle2 size={12} />
              Final Step
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-olive-dark mb-4">{t.course.formTitle}</h2>
            <p className="text-ink-rich/60 max-w-xl mx-auto">
              {t.course.formSub}
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <CognitoForm />
            
            <div className="mt-8 flex items-center justify-center gap-4 text-[13px] text-olive-muted font-medium italic">
              <Mail size={16} />
              {lang === 'en' ? 'Certificates are usually emailed within 12-24 hours.' : '证书通常在 12-24 小时内通过电子邮件发送。'}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
