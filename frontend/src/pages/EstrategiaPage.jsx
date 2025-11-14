import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Target, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePage.css';

const EstrategiaPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Funil de Vendas Otimizado',
      description: 'Estratégia completa desde a atração até conversão, com cada etapa mapeada e otimizada',
      result: 'Conversão 2.5x maior'
    },
    {
      title: 'Posicionamento de Marca',
      description: 'Definição clara de proposta de valor e diferenciação no mercado digital',
      result: 'Aumento de 80% na lembrança de marca'
    },
    {
      title: 'Estratégia de Conteúdo',
      description: 'Planejamento de conteúdo que educa, engaja e converte seu público-alvo',
      result: 'Geração de 3x mais leads qualificados'
    }
  ];

  const benefits = [
    'Análise profunda de mercado',
    'Definição de personas e ICP',
    'Mapeamento de jornada do cliente',
    'Estratégia de conteúdo completa',
    'Plano de marketing digital 360°',
    'Definição de KPIs e métricas',
    'Roadmap de crescimento',
    'Consultoria estratégica contínua'
  ];

  return (
    <div className="service-page">
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

      <section className="service-hero">
        <div className="container">
          <div className="service-icon-large">
            <Target />
          </div>
          <h1 className="service-title">Estratégia Digital</h1>
          <p className="service-subtitle">
            Planejamento estratégico baseado em dados para crescimento sustentável e previsível
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O que é Estratégia Digital?</h2>
          <p className="section-text">
            É o planejamento estruturado de todas as ações digitais do seu negócio, alinhando objetivos, 
            público-alvo, canais e mensagens. Através de análise de dados e pesquisa de mercado, criamos 
            um plano personalizado que guia todas as suas iniciativas digitais rumo ao crescimento consistente 
            e mensurável.
          </p>
        </div>
      </section>

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
                    <TrendingUp className="result-icon" />
                    <span>{example.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Como Funciona</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Diagnóstico</h3>
              <p>Análise completa da situação atual, mercado e oportunidades</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planejamento</h3>
              <p>Criação de estratégia personalizada com objetivos claros e mensuráveis</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execução</h3>
              <p>Implementação do plano com acompanhamento próximo</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Análise & Ajustes</h3>
              <p>Monitoramento de resultados e otimização contínua da estratégia</p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="service-cta">
        <div className="container">
          <h2 className="cta-title">Pronto para Crescer Estrategicamente?</h2>
          <p className="cta-text">
            Vamos criar juntos um plano de crescimento personalizado para seu negócio
          </p>
          <Button 
            onClick={() => navigate('/#contato')}
            className="cta-button-service"
            size="lg"
          >
            Quero uma Estratégia
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EstrategiaPage;