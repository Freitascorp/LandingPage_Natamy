import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Zap, Clock, TrendingDown, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePage.css';

const AutomacaoPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Email Marketing Automatizado',
      description: 'Sequências de emails personalizados que nutrem leads e convertem automaticamente',
      result: 'Economize 20h/semana'
    },
    {
      title: 'Chatbots Inteligentes',
      description: 'Atendimento 24/7 que qualifica leads e agenda reuniões sem intervenção manual',
      result: 'Resposta em menos de 1 minuto'
    },
    {
      title: 'CRM & Pipeline Automatizado',
      description: 'Sistema que move leads automaticamente pelo funil e notifica a equipe no momento certo',
      result: 'Aumento de 40% em conversões'
    }
  ];

  const benefits = [
    'Automação de follow-ups de vendas',
    'Integração entre ferramentas',
    'Nutrição automática de leads',
    'Agendamento inteligente',
    'Segmentação automática de contatos',
    'Relatórios automáticos',
    'Workflows personalizados',
    'Redução de tarefas manuais em 70%'
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
            <Zap />
          </div>
          <h1 className="service-title">Automação de Negócios</h1>
          <p className="service-subtitle">
            Liberte seu tempo e escale seu negócio com sistemas inteligentes que trabalham 24/7
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O que é Automação de Negócios?</h2>
          <p className="section-text">
            É a implementação de sistemas e ferramentas que executam tarefas repetitivas automaticamente, 
            permitindo que você foque no que realmente importa: crescer seu negócio. Através de integrações 
            inteligentes, seus processos de marketing, vendas e atendimento funcionam sozinhos, sem perder 
            a personalização e eficiência.
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
                    <Clock className="result-icon" />
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
              <h3>Mapeamento</h3>
              <p>Identificamos todos os processos manuais que podem ser automatizados no seu negócio</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Implementação</h3>
              <p>Configuramos ferramentas e criamos workflows inteligentes personalizados</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Integração</h3>
              <p>Conectamos todas as suas ferramentas para trabalharem em harmonia</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Otimização</h3>
              <p>Monitoramos e melhoramos constantemente os processos automatizados</p>
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
          <h2 className="cta-title">Pronto para Automatizar seu Negócio?</h2>
          <p className="cta-text">
            Economize tempo e aumente sua produtividade com automações inteligentes
          </p>
          <Button 
            onClick={() => navigate('/#contato')}
            className="cta-button-service"
            size="lg"
          >
            Quero Automatizar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AutomacaoPage;