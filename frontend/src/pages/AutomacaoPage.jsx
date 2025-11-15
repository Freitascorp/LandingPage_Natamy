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
      title: 'Sistema de atendimento inteligente com IA',
      description: 'A IA assume perguntas repetitivas (horário, morada, condições, financiamento, documentos necessários), envio de informações básicas da viatura, recolha de dados do contacto e pré-qualificação antes de passar para o vendedor.',
      result: 'IA a trabalhar 24/7 pelo stand'
    },
    {
      title: 'Organização automática completa',
      description: 'A IA agenda chamadas, marca visitas ao stand e organiza tudo para a sua equipa chegar apenas para a parte que realmente importa: fechar vendas.',
      result: 'Equipa foca apenas em vendas'
    },
    {
      title: 'Atendimento profissional mesmo em pico',
      description: 'Atendimento mais rápido e profissional, mesmo em horários de pico. Sistema a trabalhar 24/7, mesmo quando o stand está fechado.',
      result: 'Nunca perde uma oportunidade'
    }
  ];

  const benefits = [
    'Menos tempo no telemóvel a responder perguntas',
    'Mais foco em negociações e follow-up quente',
    'Atendimento mais rápido e profissional, mesmo em horários de pico',
    'Sistema a trabalhar 24/7, mesmo quando o stand está fechado'
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
          <h1 className="service-title">Mais Tempo, Mais Vendas</h1>
          <p className="service-subtitle">
            O maior inimigo do seu stand não é a falta de contactos. É a falta de tempo da sua equipa para atender bem quem realmente quer comprar. Muitos vendedores estão presos a tarefas repetitivas enquanto as boas oportunidades vão ficando pelo caminho.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que Implemento no Seu Stand</h2>
          <p className="section-description">
            Sistema completo de atendimento inteligente com IA
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
          <h2 className="section-heading">O Que Muda no Dia a Dia da Sua Equipa</h2>
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
            <h2 className="cta-heading">Ideal Para Stands Onde a Equipa Sente Que Está Sempre a Correr Atrás das Mensagens</h2>
            <p className="cta-text">
              E não consegue dar conta de todas as oportunidades. Entre em contacto e descubra como libertar a sua equipa para focar em vendas.
            </p>
            <Button 
              onClick={() => {
                // Track Contact event in Meta Pixel
                if (window.fbq) {
                  window.fbq('track', 'Contact', {
                    content_name: 'CTA - Automação Page',
                    content_category: 'cta_click'
                  });
                }
                
                navigate('/');
                setTimeout(() => {
                  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
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