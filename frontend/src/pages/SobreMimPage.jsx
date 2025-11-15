import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Heart } from 'lucide-react';
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
          <div className="service-icon-large">
            <Heart />
          </div>
          <h1 className="service-title">Sobre mim</h1>
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
              Neta de vendedores, filha de vendedor e, por muitos anos, vendedora de carros.
              A minha trajetória sempre teve o cliente na frente, uma meta na cabeça e a fé de que o próximo passo seria ainda melhor.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              Dentro de um stand, aprendi na prática o que é negociar, ouvir objeções, driblar inseguranças e transformar dúvida em decisão. Vender um carro nunca foi só falar de motor, ano e modelo. Era falar de sonhos: a primeira conquista, a viagem em família, a liberdade de ir e vir.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              A venda sempre correu nas minhas veias, mas, em algum momento, senti que podia ir além do stand. Queria alcançar mais pessoas, testar novas estratégias, ter mais liberdade de tempo e de lugar. Foi aí que o marketing digital entrou na minha vida.
            </p>

            <p style={{ marginBottom: '1.8rem' }}>
              No digital, encontrei aquilo que faltava: a conexão entre propósito e resultado, entre estratégia e emoção.
              Descobri um novo jeito de vender, sem depender de um ponto físico ou de horário de loja, com a mesma intensidade, verdade e foco em pessoas que sempre fizeram parte da minha trajetória.
            </p>

            <p style={{ marginBottom: '1.8rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.95)' }}>
              Hoje, uso tudo o que vivi no mundo das vendas presenciais para criar estratégias online que conversem com gente de verdade:
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
                com quem tem medo de aparecer, mas quer crescer
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
                com quem tem um bom produto, mas não sabe como se posicionar
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
                com quem quer vender mais, sem perder a própria essência
              </li>
            </ul>

            <p style={{ marginBottom: '1.8rem' }}>
              Sou brasileira, tenho 32 anos e sou apaixonada por viagens. Cada lugar que conheço reforça a minha maior certeza: não existe só um caminho para chegar lá. Assim como na estrada, no marketing digital a jornada importa tanto quanto o destino.
            </p>

            <p style={{ 
              marginTop: '2.5rem',
              fontWeight: '500', 
              color: '#d4af37',
              fontSize: 'clamp(1.1rem, 1.9vw, 1.2rem)',
              lineHeight: '1.8'
            }}>
              Se procura alguém que entende de metas, pressão, cliente olhando nos olhos e, ao mesmo tempo, de estratégia digital, posicionamento e presença online com verdade — é daqui que a nossa rota pode começar. 🚀
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
