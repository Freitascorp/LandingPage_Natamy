import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { TrendingUp, Zap, Target, Users, CheckCircle2, Mail, Phone, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import '../styles/Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Por favor, preencha todos os campos');
      setIsSubmitting(false);
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      toast.error('Configuração de email pendente. Consulte EMAILJS_SETUP_GUIDE.md');
      console.error('EmailJS not configured. Please set environment variables in .env file');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'natamy.oliveira13@gmail.com',
        reply_to: formData.email
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: TrendingUp,
      title: 'Gestão de Tráfego Pago',
      description: 'Criação e otimização de campanhas no Google Ads, Facebook Ads e Instagram Ads para gerar resultados reais e mensuráveis. ROI maximizado com estratégias data-driven.'
    },
    {
      icon: Zap,
      title: 'Automação de Negócios',
      description: 'Implementação de sistemas de automação de marketing, vendas e atendimento para aumentar sua produtividade e reduzir custos operacionais em até 70%.'
    },
    {
      icon: Target,
      title: 'Estratégia Digital',
      description: 'Desenvolvimento de estratégias personalizadas para aumentar sua presença online, gerar leads qualificados e maximizar seu ROI com análise aprofundada.'
    },
    {
      icon: Users,
      title: 'Consultoria Exclusiva',
      description: 'Análise completa do seu negócio digital com recomendações práticas para otimizar processos, aumentar conversões e escalar com inteligência.'
    }
  ];

  const benefits = [
    'Resultados Comprovados - Campanhas otimizadas para máximo retorno',
    'Economia de Tempo - Automação inteligente dos processos',
    'Atendimento Personalizado - Estratégias customizadas',
    'Escalabilidade - Crescimento sustentável com dados',
    'Análise Data-Driven - Decisões baseadas em métricas reais',
    'Suporte Contínuo - Acompanhamento e otimização constante'
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_adautomation/artifacts/ayho225a_image.png" 
              alt="Natamy Oliveira Logo" 
              className="logo-full"
            />
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Início</a>
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#beneficios" className="nav-link">Benefícios</a>
            <a href="#contato" className="nav-link">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Transforme seu Negócio Digital</h2>
            <p className="hero-description">
              Especialista em gestão de tráfego pago e automação de processos para escalar seu negócio de forma inteligente e lucrativa. Resultados reais com estratégias premium.
            </p>
            <Button 
              onClick={scrollToContact}
              className="cta-button"
              size="lg"
            >
              Quero Crescer Meu Negócio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <img 
                src="https://customer-assets.emergentagent.com/job_0e69878d-98c5-49cc-80d1-50120067f328/artifacts/acu2f83f_foto%20perfil.jpg" 
                alt="Natamy Oliveira - Especialista em Tráfego Digital" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="servicos">
        <div className="container">
          <h2 className="section-title">Serviços Premium</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader>
                  <div className="service-icon">
                    <service.icon className="icon" />
                  </div>
                  <CardTitle className="service-title">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="service-description">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits" id="beneficios">
        <div className="container">
          <h2 className="section-title">Diferenciais Premium</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <CheckCircle2 className="benefit-icon" />
                <p className="benefit-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contato">
        <div className="container">
          <h2 className="section-title">Vamos Conversar?</h2>
          <p className="contact-subtitle">
            Entre em contato e descubra como posso transformar seu negócio digital com estratégias premium de tráfego e automação.
          </p>
          
          <div className="contact-content">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e retornarei em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+351 915 018 559"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Conte-me sobre seu projeto..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="contact-info">
              <div className="info-card">
                <Mail className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <a href="mailto:natamy.oliveira13@gmail.com">natamy.oliveira13@gmail.com</a>
                </div>
              </div>
              <div className="info-card">
                <Phone className="info-icon" />
                <div>
                  <h3>Telefone</h3>
                  <a href="tel:+351915018559">+351 915 018 559</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2024 Natamy Oliveira - Gestão de Tráfego Digital e Automação Premium</p>
          <p className="footer-rights">Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;