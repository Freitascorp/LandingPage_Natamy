import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ServicePageModern.css';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

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
          <h1 className="service-title">Política de Privacidade</h1>
        </div>
      </section>

      <section className="service-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ 
            fontSize: 'clamp(1rem, 1.6vw, 1.1rem)', 
            lineHeight: '1.8', 
            color: 'rgba(255, 255, 255, 0.85)',
            fontFamily: 'Sora, sans-serif'
          }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>1. Informações que Recolhemos</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Quando utiliza o nosso website e formulário de contacto, podemos recolher as seguintes informações:
            </p>
            
            <ul style={{ 
              marginBottom: '2rem',
              marginLeft: '1.5rem',
              listStyle: 'disc'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Nome completo</li>
              <li style={{ marginBottom: '0.5rem' }}>Endereço de e-mail</li>
              <li style={{ marginBottom: '0.5rem' }}>Número de telefone</li>
              <li style={{ marginBottom: '0.5rem' }}>Mensagem e informações fornecidas voluntariamente</li>
            </ul>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>2. Como Utilizamos as Suas Informações</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              As informações recolhidas são utilizadas exclusivamente para:
            </p>
            
            <ul style={{ 
              marginBottom: '2rem',
              marginLeft: '1.5rem',
              listStyle: 'disc'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Responder às suas solicitações de contacto</li>
              <li style={{ marginBottom: '0.5rem' }}>Fornecer informações sobre os nossos serviços</li>
              <li style={{ marginBottom: '0.5rem' }}>Agendar reuniões e consultas</li>
              <li style={{ marginBottom: '0.5rem' }}>Comunicação relacionada com os serviços solicitados</li>
            </ul>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>3. Partilha de Informações</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros, exceto quando necessário para fornecer os serviços solicitados ou quando exigido por lei.
            </p>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>4. Segurança dos Dados</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Implementamos medidas de segurança adequadas para proteger as suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>5. Cookies</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              O nosso website pode utilizar cookies para melhorar a sua experiência de navegação. Pode configurar o seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
            </p>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>6. Os Seus Direitos</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              De acordo com o RGPD (Regulamento Geral de Proteção de Dados), tem o direito de:
            </p>
            
            <ul style={{ 
              marginBottom: '2rem',
              marginLeft: '1.5rem',
              listStyle: 'disc'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>Aceder aos seus dados pessoais</li>
              <li style={{ marginBottom: '0.5rem' }}>Solicitar a correção de dados incorretos</li>
              <li style={{ marginBottom: '0.5rem' }}>Solicitar a eliminação dos seus dados</li>
              <li style={{ marginBottom: '0.5rem' }}>Retirar o consentimento a qualquer momento</li>
            </ul>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>7. Contacto</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Para questões sobre esta Política de Privacidade ou para exercer os seus direitos, entre em contacto através do formulário disponível no website.
            </p>

            <h2 style={{ 
              fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', 
              color: '#d4af37',
              marginTop: '2.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>8. Alterações a Esta Política</h2>
            
            <p style={{ marginBottom: '3rem' }}>
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que reveja esta página regularmente para se manter informado sobre como protegemos as suas informações.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
