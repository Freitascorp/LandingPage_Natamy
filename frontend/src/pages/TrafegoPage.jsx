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
      title: 'Clientes Quando Precisa Deles',
      description: 'O seu negócio aparece exactamente quando alguém procura pelo que você oferece. Não há desperdício - só pessoas prontas para comprar.',
      result: 'Cada euro retorna 3 a 5 euros em vendas'
    },
    {
      title: 'Alcance Quem Realmente Importa',
      description: 'Chegue às pessoas certas no momento certo. Enquanto os seus concorrentes atiram para todos os lados, você atinge em cheio.',
      result: 'Custo por cliente reduzido em 60%'
    },
    {
      title: 'Recupere Quem Quase Comprou',
      description: 'Reconquiste visitantes que já conhecem o seu negócio. Transforme interesse em vendas e pare de perder oportunidades.',
      result: 'Converta 3x mais visitantes em clientes'
    }
  ];

  const benefits = [
    'Pague apenas por quem realmente está interessado no seu serviço',
    'Saiba exactamente quanto custa cada novo cliente',
    'Veja o seu dinheiro a trabalhar em tempo real',
    'Atraia clientes enquanto dorme - 24 horas por dia',
    'Escale o investimento quando vir resultados - sem riscos',
    'Compare o que funciona e multiplique os melhores resultados',
    'Tenha controlo total - aumente ou pare quando quiser',
    'Cresça mais rápido que a concorrência'
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
          <h1 className="service-title">Mais Clientes, Menos Desperdício</h1>
          <p className="service-subtitle">
            Pare de gastar dinheiro a adivinhar. Invista apenas em publicidade que traz clientes reais, mensuráveis e que pagam. 
            Veja cada euro investido a retornar em vendas concretas.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que Vai Conseguir</h2>
          <p className="section-description">
            Resultados concretos que transformam o seu negócio
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
              Entre em contacto e descubra como podemos transformar o seu investimento em tráfego pago em crescimento real e sustentável.
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