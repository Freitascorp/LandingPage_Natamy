import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { TrendingUp, Zap, Target, Users, CheckCircle2, Mail, Phone, ArrowRight, Menu, X } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import '../styles/HomeModern.css';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        toast.success('Mensagem enviada com sucesso! Entrarei em contacto em breve.');
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contacto directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      const headerHeight = 80;
      const elementPosition = contactSection.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: TrendingUp,
      title: 'Mais Clientes, Menos Desperdício',
      description: 'Atraia exactamente quem precisa do seu serviço e pague apenas por resultados reais. Cada euro investido retorna em clientes qualificados que estão prontos para comprar.',
      link: '/trafego-pago'
    },
    {
      icon: Zap,
      title: 'Mais Tempo, Mais Vendas',
      description: 'Liberte-se das tarefas repetitivas e foque-se no que realmente gera receita. Os seus leads são nutridos automaticamente enquanto a sua equipa se dedica a fechar vendas.',
      link: '/automacao'
    },
    {
      icon: Target,
      title: 'Crescimento Previsível',
      description: 'Saiba exactamente o que fazer a seguir para crescer. Um plano claro que transforma visitantes em clientes pagantes de forma consistente e escalável.',
      link: '/estrategia'
    },
    {
      icon: Users,
      title: 'Decisões Certas, Resultados Rápidos',
      description: 'Identifique o que está a travar o seu crescimento e corrija rapidamente. Orientação prática que elimina desperdícios e multiplica os seus resultados.',
      link: '/consultoria'
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO, TechFlow Solutions",
      text: "A Natamy transformou completamente a nossa estratégia de marketing digital. Em 3 meses, triplicámos o nosso ROI e reduzimos o custo por lead em 60%. Resultados incríveis!",
      rating: 5
    },
    {
      name: "Ana Martins",
      role: "Fundadora, BeautyLux",
      text: "Profissionalismo e resultados reais. A automação de processos que a Natamy implementou libertou-me 15 horas por semana. Agora consigo focar-me no crescimento do negócio.",
      rating: 5
    },
    {
      name: "João Pereira",
      role: "Director Comercial, FitLife",
      text: "Os resultados falam por si: aumento de 250% nas conversões e um fluxo constante de clientes qualificados. A Natamy percebe verdadeiramente de tráfego pago e automação.",
      rating: 5
    },
    {
      name: "Maria Costa",
      role: "Proprietária, Casa & Estilo",
      text: "Investimento que vale cada cêntimo. A estratégia de tráfego criada pela Natamy trouxe clientes de alta qualidade e duplicou o nosso faturamento em apenas 4 meses.",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="landing-page">
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger-button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Collapsible Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`} translate="no">
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <h1 className="sidebar-brand-name" translate="no">NATAMY OLIVEIRA</h1>
            <p className="sidebar-brand-tagline" translate="no">Gestão de Tráfego Digital, Marketing e Automação de Negócios</p>
          </div>
          <button 
            className="sidebar-close-button"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="sidebar-nav" translate="no">
          <a 
            href="#home" 
            className="sidebar-link"
            onClick={() => setIsSidebarOpen(false)}
            translate="no"
          >
            Início
          </a>
          <a 
            href="#beneficios" 
            className="sidebar-link"
            onClick={() => setIsSidebarOpen(false)}
            translate="no"
          >
            Benefícios
          </a>
          <a 
            href="#testemunhos" 
            className="sidebar-link"
            onClick={() => setIsSidebarOpen(false)}
            translate="no"
          >
            Testemunhos
          </a>
          <a 
            href="#contato" 
            className="sidebar-link"
            onClick={() => setIsSidebarOpen(false)}
            translate="no"
          >
            Contacto
          </a>
        </nav>
      </aside>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Transforme o Seu Negócio</h2>
            <p className="hero-description">
              Especialista em gestão de tráfego pago e automação de processos para escalar o seu negócio de forma inteligente e lucrativa. Resultados reais e mensuráveis.
            </p>
            <button 
              onClick={scrollToContact}
              className="cta-button-custom"
              type="button"
            >
              Quero Agendar uma Reunião
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
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

      {/* Benefits Section */}
      <section className="services" id="beneficios">
        <div className="container">
          <h2 className="section-title">Benefícios</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                onClick={() => navigate(service.link)}
              >
                <div className="service-icon">
                  <service.icon className="icon" />
                </div>
                <div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </div>
                <div className="learn-more">
                  <span>Ver Mais</span>
                  <ArrowRight className="arrow-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testemunhos">
        <div className="container">
          <h2 className="section-title">O Que Dizem os Nossos Clientes</h2>
          
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <p className="author-role">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Ver testemunho ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contato">
        <div className="container">
          <h2 className="section-title">Vamos Conversar?</h2>
          <p className="contact-subtitle">
            Entre em contacto e descubra como posso transformar o seu negócio digital com estratégias eficazes de tráfego e automação.
          </p>
          
          <div className="contact-content">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle className="form-card-title">Envie a Sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário e responderei em breve
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
                      placeholder="O seu nome"
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
                      placeholder="seuemail@exemplo.com"
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
                      placeholder="Conte-me sobre o seu projecto..."
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
                    {isSubmitting ? 'A Enviar...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2025 Natamy Oliveira - Gestão de Tráfego e Automação</p>
          <p className="footer-rights">Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;