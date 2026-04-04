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
      title: 'Registo de todas as interações',
      description: 'Com a IA integrada nos funis e no atendimento, registamos todas as interações com o cliente e identificamos padrões de perguntas, objeções e respostas.',
      result: 'Dados reais do seu stand'
    },
    {
      title: 'Análise de pontos de travagem',
      description: 'Perceber onde os leads travam (preço, prazo, financiamento, confiança, etc.) e medir quais campanhas e abordagens geram mais vendas, não só mais cliques.',
      result: 'Saber onde estão os problemas'
    },
    {
      title: 'Ajustes rápidos e precisos',
      description: 'Com os dados em mãos, ajustamos rapidamente mensagens, criativos, ofertas e sequência de follow up para maximizar resultados.',
      result: 'Melhoria contínua garantida'
    }
  ];

  const benefits = [
    'Menos desperdício em campanhas que só trazem curiosos',
    'Mais investimento no que gera vendas reais',
    'Melhoria contínua no atendimento e no funil',
    'Decisões baseadas em dados do seu próprio stand, não em "achismos"'
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
            Muitos stands investem em anúncios, mas não sabem responder: Quais campanhas trazem leads que realmente compram? Em que etapa os contactos "morrem"? Que mensagens fazem o cliente avançar ou desistir? Sem estes dados, todas as decisões são um tiro no escuro.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">O Que a IA Faz Pelos Seus Números</h2>
          <p className="section-description">
            Sistema completo de análise e otimização baseada em dados
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
          <h2 className="section-heading">Benefícios Para o Seu Stand</h2>
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
            <h2 className="cta-heading">Ideal Para Stands Que Já Investem em Marketing</h2>
            <p className="cta-text">
              Mas sentem que não sabem exactamente onde está o retorno – e onde está o desperdício. Entre em contacto e descubra como tomar decisões baseadas em dados reais.
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