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
      title: 'Nunca Perca Um Lead',
      description: 'Os seus contactos recebem a mensagem certa no momento certo, sem que você mova um dedo. Cada lead é nutrido até estar pronto para comprar.',
      result: 'Recupere 30+ horas por mês'
    },
    {
      title: 'Vendas Sem Esforço Extra',
      description: 'Os seus leads são organizados, contactados e aquecidos automaticamente. A sua equipa foca apenas em fechar as vendas mais quentes.',
      result: 'Aumente as vendas em 50% sem contratar'
    },
    {
      title: 'Atendimento Que Nunca Dorme',
      description: 'Responda a clientes 24/7, qualifique leads e agende reuniões enquanto dorme. O seu negócio trabalha mesmo quando você não está.',
      result: 'Responda 70% mais rápido que a concorrência'
    }
  ];

  const benefits = [
    'Liberte-se das tarefas repetitivas que consomem o seu dia',
    'Nutra cada lead sem esforço manual',
    'Responda instantaneamente a qualquer hora',
    'Mantenha os clientes envolvidos sem trabalho extra',
    'Identifique automaticamente os melhores leads',
    'Acompanhe tudo sem olhar para planilhas',
    'Descubra quem está pronto para comprar',
    'Personalize comunicação em massa'
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
            Pare de perder tempo com tarefas repetitivas. Dedique-se a fazer crescer o negócio enquanto os processos rodam sozinhos. 
            Mais vendas, menos esforço, zero esquecimentos.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que Isto Significa Para Si</h2>
          <p className="section-description">
            Benefícios reais que sente no dia-a-dia do seu negócio
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
            <h2 className="cta-heading">Quer Recuperar o Seu Tempo?</h2>
            <p className="cta-text">
              Entre em contacto e descubra quantas horas por mês pode recuperar enquanto vende ainda mais.
            </p>
            <Button 
              onClick={() => {
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