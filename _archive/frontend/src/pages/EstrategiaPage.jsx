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
      title: 'Funis de venda sempre a trabalhar',
      description: 'Anúncios e campanhas levam potenciais compradores para páginas e conversas pensadas para transformar visitas em contactos.',
      result: 'Fluxo contínuo de leads'
    },
    {
      title: 'IA a nutrir e acompanhar cada lead',
      description: 'Nem toda a pessoa compra no primeiro contacto. A IA mantém o relacionamento, envia mensagens estratégicas e continua a conversa até haver uma resposta clara.',
      result: 'Nenhum lead é esquecido'
    },
    {
      title: 'Follow up que não se esquece de ninguém',
      description: 'Em vez de depender da memória do vendedor, o sistema faz lembretes, reenvia mensagens e faz perguntas-chave para reativar o interesse.',
      result: 'Mais contactos reaproveitados'
    }
  ];

  const benefits = [
    'Menos "buracos" no processo comercial',
    'Mais contactos reaproveitados (e não esquecidos)',
    'Vendas mais constantes, sem depender de picos',
    'Capacidade de prever melhor o stock e o investimento em campanhas'
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
            Se o seu stand vive no ciclo "mês bom / mês fraco", não é por acaso. Sem sistema, as vendas dependem de sorte, indicação e esforço manual da equipa. Combinando funis de venda + IA + follow up automático, criamos um modelo de crescimento previsível.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Sistema Por Trás do Crescimento</h2>
          <p className="section-description">
            Três pilares que garantem crescimento consistente
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
          <h2 className="section-heading">O Resultado Para o Seu Stand</h2>
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
            <h2 className="cta-heading">Ideal Para Stands Que Já Vendem Bem</h2>
            <p className="cta-text">
              Mas querem sair do "vai-se vendo" e passar a crescer com números e previsões claras. Entre em contacto e descubra como ter crescimento previsível.
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