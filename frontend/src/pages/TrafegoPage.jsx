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
      title: 'Funil de venda pensado para o seu stand',
      description: 'Criamos o caminho completo do potencial cliente: anúncio → página → conversa → agendamento. Cada passo é desenhado para atrair quem tem interesse real em comprar uma viatura.',
      result: 'Anúncios que atraem compradores reais'
    },
    {
      title: 'IA que responde e qualifica automaticamente',
      description: 'A IA fala com o contacto, faz perguntas-chave (tipo de viatura, orçamento, prazo, forma de pagamento, retoma, etc.) e identifica se é um lead quente ou apenas alguém a "dar uma olhadinha".',
      result: 'Apenas leads qualificados chegam à equipa'
    },
    {
      title: 'Só os qualificados chegam à sua equipa',
      description: 'Apenas os contactos com perfil de comprador são encaminhados para os vendedores, já com contexto da conversa e informação necessária para avançar.',
      result: 'Vendedores focados em quem compra'
    }
  ];

  const benefits = [
    'Menos tempo perdido com curiosos',
    'Vendedores focados apenas em quem tem forte intenção de compra',
    'Mais propostas, test-drives e vendas com o mesmo orçamento',
    'Custo por venda mais baixo e retorno real em cada euro investido'
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
            Chega de encher a agenda com curiosos que não vão comprar. O seu stand precisa de contactos certos, não de "likes" e mensagens vazias. Sistema de funis de venda com IA que separa curiosos de compradores reais antes de chegar ao vendedor.
          </p>
        </div>
      </section>

      {/* Examples Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Como Funciona na Prática</h2>
          <p className="section-description">
            Sistema completo que filtra e qualifica leads automaticamente
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
          <h2 className="section-heading">Benefícios para o Seu Stand</h2>
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
            <h2 className="cta-heading">Ideal Para Stands Que Já Recebem Muitos Contactos</h2>
            <p className="cta-text">
              Mas sentem que "quase ninguém está realmente pronto para comprar". Entre em contacto e descubra como filtrar e qualificar leads automaticamente.
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