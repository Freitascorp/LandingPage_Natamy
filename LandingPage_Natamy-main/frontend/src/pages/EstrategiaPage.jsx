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
      title: 'Saiba Onde Está o Seu Dinheiro',
      description: 'Descubra exactamente onde investir e onde cortar. Identifique oportunidades que os seus concorrentes não vêem e deixe de desperdiçar recursos.',
      result: 'Encontre o seu próximo grande crescimento'
    },
    {
      title: 'Transforme Curiosos em Compradores',
      description: 'Cada visitante segue um caminho claro até se tornar cliente. Elimine os furos no seu funil e converta muito mais com o mesmo tráfego.',
      result: 'Converta 40% mais sem gastar mais'
    },
    {
      title: 'Destaque-se da Concorrência',
      description: 'Seja a escolha óbvia no seu mercado. Construa uma presença que faz os clientes escolherem-no antes mesmo de ver o preço.',
      result: 'Triplique o reconhecimento da sua marca'
    }
  ];

  const benefits = [
    'Saiba exactamente onde investir e quanto esperar de retorno',
    'Conheça profundamente quem são os seus melhores clientes',
    'Atraia a atenção certa com conteúdo que vende',
    'Esteja presente onde os seus clientes realmente estão',
    'Meça o que importa e ignore o resto',
    'Tenha um plano claro de crescimento para os próximos meses',
    'Aumente conversões sem aumentar tráfego',
    'Decisões baseadas em dados, não achismos'
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
          <h1 className="service-title">Crescimento Previsível</h1>
          <p className="service-subtitle">
            Chega de adivinhar o próximo passo. Tenha um plano claro que transforma visitantes em clientes pagantes de forma consistente. 
            Saiba exactamente o que fazer para crescer mês após mês.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que Vai Alcançar</h2>
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
            <h2 className="cta-heading">Quer Crescer de Forma Previsível?</h2>
            <p className="cta-text">
              Entre em contacto e descubra o plano exacto para transformar o seu negócio num sistema de crescimento consistente.
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