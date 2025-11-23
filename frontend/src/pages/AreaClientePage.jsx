import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ArrowLeft, Lock, LogOut, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import '../styles/ServicePageModern.css';

const AreaClientePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [agentId, setAgentId] = useState('');
  const [currentAgentId, setCurrentAgentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [widgetKey, setWidgetKey] = useState(0);
  const widgetContainerRef = useRef(null);

  // Check if user is already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem('areaClienteAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Script is now loaded globally in index.html - no need to load here

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (password === 'Automation_2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('areaClienteAuth', 'true');
      toast.success('Acesso concedido! Bem-vindo à Área Cliente.');
      setPassword('');
    } else {
      toast.error('Password incorreta. Tente novamente.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('areaClienteAuth');
    setCurrentAgentId('');
    setAgentId('');
    toast.info('Sessão terminada.');
  };

  const handleLoadAgent = () => {
    if (!agentId.trim()) {
      toast.error('Por favor, insira um Agent ID válido.');
      return;
    }

    setIsLoading(true);
    setCurrentAgentId(agentId.trim());
    
    // Force re-render of widget by changing key
    setWidgetKey(prev => prev + 1);
    
    // Small delay to ensure script is loaded
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Bot carregado com sucesso!');
    }, 1000);
  };

  // Login Screen
  if (!isAuthenticated) {
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
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              minHeight: '60vh'
            }}>
              <Card style={{ 
                maxWidth: '450px', 
                width: '100%',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <CardHeader>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginBottom: '1rem' 
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Lock style={{ color: '#d4af37', width: '30px', height: '30px' }} />
                    </div>
                  </div>
                  <CardTitle style={{ 
                    textAlign: 'center',
                    color: '#d4af37',
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    Área Cliente
                  </CardTitle>
                  <CardDescription style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.6)' }}>
                    Acesso restrito. Insira a password para continuar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <Label htmlFor="password" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Digite a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                          marginTop: '0.5rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(212, 175, 55, 0.3)',
                          color: '#ffffff'
                        }}
                      />
                    </div>
                    <Button 
                      type="submit"
                      style={{
                        width: '100%',
                        background: '#d4af37',
                        color: '#000',
                        fontWeight: '600'
                      }}
                    >
                      Entrar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Authenticated Area
  return (
    <div className="service-page">
      <header className="service-header">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button 
              onClick={() => navigate('/')}
              variant="ghost"
              className="back-button"
            >
              <ArrowLeft className="mr-2" />
              Voltar
            </Button>
            <Button 
              onClick={handleLogout}
              variant="ghost"
              style={{ color: '#d4af37' }}
            >
              <LogOut className="mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <section className="service-hero">
        <div className="container">
          <h1 className="service-title">Área Cliente - Teste IA</h1>
          <p className="service-subtitle">
            Configure o Agent ID para testar o assistente de IA conversacional
          </p>
        </div>
      </section>

      <section className="service-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Agent ID Configuration */}
          <Card style={{ 
            marginBottom: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardHeader>
              <CardTitle style={{ color: '#d4af37', fontSize: '1.3rem' }}>
                <Bot className="inline-block mr-2" style={{ width: '24px', height: '24px' }} />
                Configuração do Assistente
              </CardTitle>
              <CardDescription style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                Insira o Agent ID e clique em "Carregar Bot"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'end' }}>
                <div style={{ flex: 1 }}>
                  <Label htmlFor="agentId" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    Agent ID
                  </Label>
                  <Input
                    id="agentId"
                    type="text"
                    placeholder="Ex: agent_3901kanwqks2ep6rf1zx5b883cqt"
                    value={agentId}
                    onChange={(e) => setAgentId(e.target.value)}
                    style={{
                      marginTop: '0.5rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: '#ffffff',
                      fontFamily: 'monospace'
                    }}
                  />
                </div>
                <Button 
                  onClick={handleLoadAgent}
                  disabled={isLoading}
                  style={{
                    background: '#d4af37',
                    color: '#000',
                    fontWeight: '600',
                    minWidth: '150px'
                  }}
                >
                  {isLoading ? 'Carregando...' : 'Carregar Bot'}
                </Button>
              </div>
              
              {currentAgentId && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '8px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.9rem'
                }}>
                  <strong>Bot Ativo:</strong> <code style={{ color: '#d4af37' }}>{currentAgentId}</code>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Widget Container */}
          <div 
            ref={widgetContainerRef}
            style={{ 
              minHeight: currentAgentId ? '200px' : '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              border: '2px dashed rgba(212, 175, 55, 0.2)',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.02)'
            }}
          >
            {currentAgentId ? (
              <elevenlabs-convai 
                key={widgetKey}
                agent-id={currentAgentId}
              ></elevenlabs-convai>
            ) : (
              <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.5)' }}>
                <Bot style={{ width: '48px', height: '48px', margin: '0 auto 1rem' }} />
                <p>Insira um Agent ID e clique em "Carregar Bot" para começar</p>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div style={{ 
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(212, 175, 55, 0.1)',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#d4af37', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Como usar:
            </h3>
            <ol style={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.8',
              paddingLeft: '1.5rem'
            }}>
              <li>Copie o Agent ID do dashboard</li>
              <li>Cole no campo acima</li>
              <li>Clique em "Carregar Bot"</li>
              <li>Aguarde o widget aparecer e interaja com o assistente</li>
              <li>Para testar outro agente, insira um novo ID e clique novamente</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaClientePage;
