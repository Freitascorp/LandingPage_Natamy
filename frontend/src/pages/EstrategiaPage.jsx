import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const EstrategiaPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Análise de Mercado',
      description: 'Estudo profundo do seu mercado, concorrência e oportunidades para posicionamento estratégico',
      result: 'Identificação de nichos inexplorados'
    },
    {
      title: 'Funil de Conversão',
      description: 'Mapeamento e otimização completa do seu funil de vendas para maximizar conversões em cada etapa',
      result: 'Aumento de 40% nas conversões'
    },
    {
      title: 'Posicionamento Digital',
      description: 'Desenvolvimento de identidade e presença digital forte que diferencia sua marca no mercado',
      result: 'Brand awareness 3x maior'
    }
  ];

  const benefits = [
    'Análise competitiva detalhada',
    'Definição de personas e ICP',
    'Planejamento de conteúdo',
    'Estratégia de canais digitais',
    'Métricas e KPIs personalizados',
    'Roadmap de crescimento',
    'Otimização de conversão',
    'Consultoria estratégica mensal'
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
            <Target />
          </div>
          <h1 className="service-title">Estratégia Digital</h1>
          <p className="service-subtitle">
            Planejamento estratégico completo para dominar seu mercado digital. 
            Da análise à execução, construímos o caminho para o sucesso do seu negócio online.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Nossa Abordagem Estratégica</h2>
          <p className="section-description">
            Metodologia comprovada para criar e executar estratégias digitais vencedoras
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
                    <Lightbulb className="w-4 h-4" />
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
            <h2 className="cta-heading">Vamos Criar Sua Estratégia?</h2>
            <p className="cta-text">
              Entre em contato para uma análise inicial gratuita e descubra como podemos impulsionar seu negócio digital.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="cta-button-large"
              size="lg"
            >
              Solicitar Análise Gratuita
              <ArrowLeft className="rotate-180" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstrategiaPage;