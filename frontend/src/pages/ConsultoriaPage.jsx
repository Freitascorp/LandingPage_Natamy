import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Users, MessageSquare, BarChart, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const ConsultoriaPage = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Descubra O Que Está a Travar-lhe',
      description: 'Identifique exactamente onde está a perder dinheiro e oportunidades. Veja claramente o que mudar para desbloquear o crescimento.',
      result: 'Plano claro do que fazer a seguir'
    },
    {
      title: 'Resolva Problemas Rapidamente',
      description: 'Tenha alguém ao seu lado para tomar decisões difíceis com confiança. Evite erros caros e acelere os resultados.',
      result: 'Decisões certas quando importa'
    },
    {
      title: 'Cresça Sem Tropeços',
      description: 'Ajustes contínuos baseados no que realmente está a acontecer no seu negócio. Corrija o rumo antes de desperdiçar recursos.',
      result: 'Crescimento sem erros caros'
    }
  ];

  const benefits = [
    'Veja exactamente onde está a desperdiçar dinheiro',
    'Tenha um especialista disponível quando precisar',
    'Entenda o que os números realmente significam',
    'Saiba os próximos passos exactos a dar',
    'Tire dúvidas rapidamente sem esperar',
    'Elimine processos que não servem de nada',
    'Capacite a sua equipa a executar melhor',
    'Acompanhe o progresso real, não vanity metrics'
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
            <Users />
          </div>
          <h1 className="service-title">Decisões Certas, Resultados Rápidos</h1>
          <p className="service-subtitle">
            Pare de desperdiçar tempo e dinheiro com tentativa e erro. Tenha um especialista ao seu lado para identificar problemas e implementar soluções que funcionam. 
            Cresça mais rápido evitando os erros caros.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que Isto Lhe Traz</h2>
          <p className="section-description">
            Benefícios reais de ter orientação especializada
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
                    <MessageSquare className="w-4 h-4" />
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
            <h2 className="cta-heading">Vamos Trabalhar Juntos?</h2>
            <p className="cta-text">
              Agende uma sessão de consultoria e descubra como podemos levar o seu negócio digital ao próximo nível.
            </p>
            <Button 
              onClick={() => navigate('/')}
              className="cta-button-large"
              size="lg"
            >
              Agendar Consultoria
              <ArrowLeft className="rotate-180" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultoriaPage;