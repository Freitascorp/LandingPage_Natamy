import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrafegoPage from './pages/TrafegoPage';
import AutomacaoPage from './pages/AutomacaoPage';
import EstrategiaPage from './pages/EstrategiaPage';
import ConsultoriaPage from './pages/ConsultoriaPage';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trafego-pago" element={<TrafegoPage />} />
          <Route path="/automacao" element={<AutomacaoPage />} />
          <Route path="/estrategia" element={<EstrategiaPage />} />
          <Route path="/consultoria" element={<ConsultoriaPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;