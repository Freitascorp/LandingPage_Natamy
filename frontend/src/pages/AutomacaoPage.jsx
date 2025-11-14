import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Zap, Bot, Workflow, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const AutomacaoPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Automação de Marketing',
      description: 'Sequências de e-mail, SMS e notificações automatizadas baseadas no comportamento do usuário',
      result: 'Economia de 30+ horas/mês'
    },
    {
      title: 'CRM & Pipeline de Vendas',
      description: 'Gestão automatizada de leads, follow-ups inteligentes e scoring automático de prospects',
      result: 'Aumento de 50% nas vendas'
    },
    {
      title: 'Chatbots & Atendimento',
      description: 'Atendimento 24/7 com chatbots inteligentes que qualificam e direcionam leads automaticamente',
      result: 'Redução de 70% no tempo de resposta'
    }
  ];

  const benefits = [
    'Automação de e-mail marketing',
    'Integração com CRM e ferramentas',
    'Chatbots inteligentes',
    'Automação de redes sociais',
    'Workflows personalizados',
    'Relatórios automatizados',
    'Lead scoring automático',
    'Segmentação inteligente'
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
            <Zap />
          </div>
          <h1 className="service-title">Automação de Negócios</h1>
          <p className="service-subtitle">
            Elimine tarefas repetitivas e foque no crescimento do seu negócio. 
            Implementação de sistemas inteligentes que trabalham 24/7 para você.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Soluções de Automação</h2>
          <p className="section-description">
            Processos automatizados que aumentam produtividade e reduzem custos operacionais
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
                    <Workflow className="w-4 h-4" />
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
            <h2 className="cta-heading">Automatize Seu Negócio Agora</h2>
            <p className="cta-text">
              Descubra como a automação pode economizar tempo, reduzir custos e aumentar suas vendas significativamente.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="cta-button-large"
              size="lg"
            >
              Começar Automação
              <ArrowLeft className="rotate-180" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomacaoPage;