import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, TrendingUp, Target, DollarSign, BarChart3, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePage.css';

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
            Transforme cliques em clientes com campanhas estratégicas e otimizadas para máximo ROI
          </p>
        </div>
      </section>

      {/* O que é */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O que é Gestão de Tráfego Pago?</h2>
          <p className="section-text">
            É o processo estratégico de criar, gerenciar e otimizar campanhas de anúncios pagos nas principais plataformas digitais. 
            Através de análise de dados, segmentação precisa e testes constantes, direcionamos o público certo para o seu negócio, 
            transformando investimento em anúncios em resultados reais e mensuráveis.
          </p>
        </div>
      </section>

      {/* Exemplos */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Exemplos Práticos</h2>
          <div className="examples-grid">
            {examples.map((example, index) => (
              <Card key={index} className="example-card">
                <CardHeader>
                  <CardTitle className="example-title">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="example-description">{example.description}</p>
                  <div className="example-result">
                    <BarChart3 className="result-icon" />
                    <span>{example.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Como Funciona</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Análise & Estratégia</h3>
              <p>Estudo do seu negócio, público-alvo e concorrência para criar uma estratégia personalizada</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Configuração</h3>
              <p>Criação de campanhas segmentadas com anúncios de alta conversão em múltiplas plataformas</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Monitoramento</h3>
              <p>Acompanhamento diário das métricas e performance para garantir resultados</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Otimização</h3>
              <p>Ajustes contínuos baseados em dados para maximizar ROI e reduzir custos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O que está Incluído</h2>
          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item-detailed">
                <CheckCircle2 className="benefit-check" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <h2 className="cta-title">Pronto para Aumentar suas Vendas?</h2>
          <p className="cta-text">
            Entre em contato e descubra como posso impulsionar seu negócio com tráfego qualificado
          </p>
          <Button 
            onClick={() => navigate('/#contato')}
            className="cta-button-service"
            size="lg"
          >
            Quero Conversar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TrafegoPage;