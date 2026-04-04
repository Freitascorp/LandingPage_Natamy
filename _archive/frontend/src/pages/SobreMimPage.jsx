import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const SobreMimPage = () => {
  const navigate = useNavigate();

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
          <h1 className="service-title">Sobre mim</h1>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '2rem' 
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_0e69878d-98c5-49cc-80d1-50120067f328/artifacts/acu2f83f_foto%20perfil.jpg"
              alt="Natamy Oliveira"
              style={{
                width: 'clamp(200px, 30vw, 350px)',
                height: 'clamp(200px, 30vw, 350px)',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center 35%',
                border: '4px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 10px 40px rgba(212, 175, 55, 0.3), 0 0 80px rgba(212, 175, 55, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="service-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ 
            fontSize: 'clamp(1.05rem, 1.8vw, 1.15rem)', 
            lineHeight: '1.9', 
            color: 'rgba(255, 255, 255, 0.85)',
            fontFamily: 'Sora, sans-serif',
            letterSpacing: '0.01em'
          }}>
            <p style={{ marginBottom: '1.8rem' }}>
              Sou brasileira e cresci no meio das vendas: sou neta de vendedores, filha de vendedor e já passei anos vendendo carros em stand. Foi ali, cara a cara com o cliente, que aprendi a negociar, ouvir objeções, lidar com inseguranças e transformar dúvida em decisão.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              Com o tempo, percebi que podia ir além do espaço físico da loja. Queria alcançar mais pessoas, testar novas estratégias e ter mais liberdade de tempo e de lugar. Foi assim que o marketing digital entrou na minha vida.
            </p>

            <p style={{ marginBottom: '1.8rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.95)' }}>
              Hoje, uso toda a minha experiência em vendas presenciais para criar estratégias online que ajudam pessoas e negócios a venderem com verdade, sem perder a essência. Trabalho especialmente com:
            </p>

            <ul style={{ 
              marginBottom: '1.8rem', 
              paddingLeft: '1.5rem',
              listStyle: 'none'
            }}>
              <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ 
                  content: '•', 
                  position: 'absolute', 
                  left: '0', 
                  color: '#d4af37',
                  fontSize: '1.5rem',
                  lineHeight: '1.9rem'
                }}>•</span>
                quem tem medo de aparecer, mas quer crescer
              </li>
              <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ 
                  content: '•', 
                  position: 'absolute', 
                  left: '0', 
                  color: '#d4af37',
                  fontSize: '1.5rem',
                  lineHeight: '1.9rem'
                }}>•</span>
                quem tem um bom produto, mas não sabe como se posicionar
              </li>
              <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ 
                  content: '•', 
                  position: 'absolute', 
                  left: '0', 
                  color: '#d4af37',
                  fontSize: '1.5rem',
                  lineHeight: '1.9rem'
                }}>•</span>
                quem quer vender mais, sem soar forçado ou "igual a todo mundo"
              </li>
            </ul>

            <p style={{ marginBottom: '1.8rem' }}>
              Sou apaixonada por viagens e por tudo o que elas me lembram: não existe só um caminho para chegar lá. No marketing digital é a mesma coisa — a jornada importa tanto quanto o destino.
            </p>

            <p style={{ 
              marginTop: '2.5rem',
              fontWeight: '500', 
              color: '#d4af37',
              fontSize: 'clamp(1.1rem, 1.9vw, 1.2rem)',
              lineHeight: '1.8'
            }}>
              Se procura alguém que entende de metas, pressão e cliente olhando nos olhos, e ao mesmo tempo de estratégia digital, posicionamento e presença online autêntica, é daqui que a nossa rota pode começar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading">Vamos Conversar?</h2>
            <p className="cta-text">
              Entre em contacto e descubra como posso ajudar o seu negócio a crescer de forma autêntica e estratégica.
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
