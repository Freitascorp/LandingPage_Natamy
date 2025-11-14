import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Users, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePage.css';

const ConsultoriaPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Auditoria Digital Completa',
      description: 'Análise detalhada de todo seu ecossistema digital com recomendações práticas e priorizadas',
      result: 'Relatório com +50 pontos de melhoria'
    },
    {
      title: 'Sessões Estratégicas',
      description: 'Reuniões personalizadas para discutir desafios específicos e criar planos de ação',
      result: 'Direcionamento claro e acionável'
    },
    {
      title: 'Mentoria Executiva',
      description: 'Acompanhamento próximo para tomada de decisões estratégicas em marketing digital',
      result: 'Decisões baseadas em dados'
    }
  ];

  const benefits = [
    'Auditoria completa de presença digital',
    'Análise de concorrência',
    'Identificação de oportunidades',
    'Priorização de ações',
    'Plano de ação detalhado',
    'Sessões de consultoria 1-a-1',
    'Acesso direto para dúvidas',
    'Suporte estratégico contínuo'
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
            <Users />
          </div>
          <h1 className="service-title">Consultoria Exclusiva</h1>
          <p className="service-subtitle">
            Orientação especializada e personalizada para transformar desafios em oportunidades
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O que é Consultoria Exclusiva?</h2>
          <p className="section-text">
            É um serviço personalizado onde analiso profundamente seu negócio digital, identifico gaps e oportunidades, 
            e forneço orientação estratégica específica para suas necessidades. Através de análise detalhada e sessões 
            dedicadas, você recebe um plano claro e acionável para otimizar seus processos, aumentar conversões e 
            escalar seu negócio de forma sustentável.
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
                    <FileText className="result-icon" />
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
              <h3>Imersão</h3>
              <p>Reunião inicial para entender profundamente seu negócio, objetivos e desafios</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Análise</h3>
              <p>Auditoria completa de todos os aspectos do seu marketing digital</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Apresentação</h3>
              <p>Sessão dedicada para apresentar insights e recomendações priorizadas</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Acompanhamento</h3>
              <p>Suporte contínuo para implementação e ajustes estratégicos</p>
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
          <h2 className="cta-title">Pronto para Transformar seu Negócio?</h2>
          <p className="cta-text">
            Agende uma sessão de consultoria e descubra como levar seu marketing digital ao próximo nível
          </p>
          <Button 
            onClick={() => navigate('/#contato')}
            className="cta-button-service"
            size="lg"
          >
            Agendar Consultoria
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ConsultoriaPage;