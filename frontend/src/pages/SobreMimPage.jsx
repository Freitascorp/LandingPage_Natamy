import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Target, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const SobreMimPage = () => {
  const navigate = useNavigate();

  const expertise = [
    {
      title: 'Especialista em Automação com IA',
      description: 'Implemento sistemas de inteligência artificial que qualificam leads, automatizam atendimento e libertam a sua equipa para focar em vendas. Cada contacto é tratado profissionalmente, mesmo quando o stand está fechado.',
      result: 'Sistemas que trabalham 24/7'
    },
    {
      title: 'Gestão de Tráfego Pago para Stands',
      description: 'Criação de funis de venda completos que atraem compradores reais, não apenas curiosos. Anúncios pensados para gerar leads qualificados e prontos para comprar.',
      result: 'Menos desperdício, mais vendas'
    },
    {
      title: 'Análise e Otimização Contínua',
      description: 'Registo e análise de todas as interações para identificar padrões, objeções e oportunidades. Ajustes baseados em dados reais do seu stand, não em "achismos".',
      result: 'Decisões baseadas em dados'
    }
  ];

  const values = [
    'Foco total em resultados reais, não em métricas vazias',
    'Transparência absoluta sobre investimento e retorno',
    'Automação que liberta tempo, não que complica processos',
    'Crescimento previsível baseado em sistemas, não em sorte',
    'Atendimento profissional que valoriza cada oportunidade',
    'Melhoria contínua com base em dados do seu negócio'
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
            <Award />
          </div>
          <h1 className="service-title">Natamy Oliveira</h1>
          <p className="service-subtitle">
            Especialista em gestão de tráfego digital, marketing e automação de processos com foco em stands de automóveis. 
            Ajudo negócios a crescerem de forma inteligente, combinando funis de venda, inteligência artificial e análise de dados 
            para gerar resultados reais e mensuráveis.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Áreas de Especialização</h2>
          <p className="section-description">
            Soluções completas para stands que querem crescer de forma previsível
          </p>
          <div className="example-grid">
            {expertise.map((item, index) => (
              <Card key={index} className="example-card">
                <CardHeader>
                  <CardTitle className="example-title">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="example-description">{item.description}</p>
                  <div className="example-result">
                    <Target className="w-4 h-4" />
                    {item.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="service-section">
        <div className="container">
          <h2 className="section-heading">Como Trabalho</h2>
          <div className="benefits-list">
            {values.map((value, index) => (
              <div key={index} className="benefit-item-service">
                <CheckCircle2 />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="service-section">
        <div className="container">
          <Card className="example-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <CardHeader>
              <CardTitle className="example-title">A Minha Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="example-description" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Acredito que cada stand de automóveis merece ter acesso às mesmas ferramentas de automação 
                e inteligência artificial que as grandes marcas usam. O meu trabalho é transformar processos 
                que consomem tempo em sistemas automáticos, permitindo que os vendedores se concentrem no que 
                realmente importa: construir relações e fechar vendas.
                <br /><br />
                Não vendo "likes", "visualizações" ou "impressões". Vendo mais tempo livre para a sua equipa, 
                leads melhor qualificados e um processo de vendas que funciona enquanto dorme.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Vamos Conversar?</h2>
            <p className="cta-text">
              Entre em contacto e descubra como posso ajudar o seu stand a crescer de forma inteligente e previsível.
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
              Agendar Reunião
              <ArrowLeft className="rotate-180" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreMimPage;
