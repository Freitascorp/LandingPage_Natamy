import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, TrendingUp, Target, DollarSign, BarChart3, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const TrafegoPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Google Ads - Pesquisa',
      description: 'Campanhas de busca otimizadas para aparecer quando seu cliente procura por seus serviços',
      result: 'ROI médio de 300-500%'
    },
    {
      title: 'Facebook & Instagram Ads',
      description: 'Anúncios segmentados por interesse, comportamento e demografia para atingir seu público ideal',
      result: 'CPL reduzido em até 60%'
    },
    {
      title: 'Remarketing Inteligente',
      description: 'Reimpacte visitantes que já demonstraram interesse, aumentando as conversões',
      result: 'Taxa de conversão 3x maior'
    }
  ];

  const benefits = [
    'Análise de mercado e concorrência',
    'Segmentação precisa do público-alvo',
    'Criação de anúncios de alta conversão',
    'Otimização contínua de campanhas',
    'Relatórios detalhados de performance',
    'Testes A/B constantes',
    'Gestão de orçamento inteligente',
    'Maximização do ROI'
  ];

  return (
    <div className="service-page">
      {/* Header */}
      <header className="service-header">
        <div className="container">
          <Button 
            onClick={() => navigate('/')}
            variant="ghost"
            className="back-button"
          >
            <ArrowLeft className="mr-2" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="service-hero">
        <div className="container">
          <div className="service-icon-large">
            <TrendingUp />
          </div>
          <h1 className="service-title">Gestão de Tráfego Pago</h1>
          <p className="service-subtitle">
            Transforme investimento em publicidade online em resultados mensuráveis e escaláveis. 
            Estratégias data-driven para maximizar seu ROI em todas as plataformas digitais.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Como Funciona</h2>
          <p className="section-description">
            Campanhas personalizadas nas principais plataformas de anúncios online
          </p>
          <div className="example-grid">
            {examples.map((example, index) => (
              <Card key={index} className="example-card">
                <CardHeader>
                  <CardTitle className="example-title">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="example-description">{example.description}</p>
                  <div className="example-result">
                    <Target className="w-4 h-4" />
                    {example.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que Está Incluído</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item-service">
                <CheckCircle2 />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Pronto para Escalar?</h2>
            <p className="cta-text">
              Entre em contato e descubra como podemos transformar seu investimento em tráfego pago em crescimento real e sustentável.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="cta-button-large"
              size="lg"
            >
              Falar com Especialista
              <ArrowLeft className="rotate-180" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrafegoPage;