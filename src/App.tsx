import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Language } from './translations';
import LandingPage from './pages/LandingPage';
import CoursePage from './pages/CoursePage';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'zh' : 'en'));
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage lang={lang} toggleLanguage={toggleLanguage} />} 
        />
        <Route 
          path="/course" 
          element={<CoursePage lang={lang} />} 
        />
      </Routes>
    </Router>
  );
}
