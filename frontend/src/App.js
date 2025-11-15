import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import TrafegoPage from './pages/TrafegoPage';
import AutomacaoPage from './pages/AutomacaoPage';
import EstrategiaPage from './pages/EstrategiaPage';
import ConsultoriaPage from './pages/ConsultoriaPage';
import SobreMimPage from './pages/SobreMimPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

// Meta Pixel Page Tracking Component
function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
      
      // Track specific page views as ViewContent events
      const pageNames = {
        '/': 'Home',
        '/trafego-pago': 'Tráfego Pago',
        '/automacao': 'Automação',
        '/estrategia': 'Estratégia',
        '/consultoria': 'Consultoria',
        '/sobre-mim': 'Sobre Mim',
        '/politica-privacidade': 'Política de Privacidade'
      };

      const pageName = pageNames[location.pathname] || 'Unknown Page';
      
      window.fbq('track', 'ViewContent', {
        content_name: pageName,
        content_type: 'page',
        content_category: 'navigation'
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MetaPixelTracker />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trafego-pago" element={<TrafegoPage />} />
          <Route path="/automacao" element={<AutomacaoPage />} />
          <Route path="/estrategia" element={<EstrategiaPage />} />
          <Route path="/consultoria" element={<ConsultoriaPage />} />
          <Route path="/sobre-mim" element={<SobreMimPage />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;