import { Shield, Search, BookOpen, Users, Target, Lock, AlertTriangle, Wifi, Database, Server, Eye, FileCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Análisis de Vulnerabilidades',
      description: 'Detectamos puntos débiles en su infraestructura antes que los cibercriminales, ayudándole a anticiparse a posibles ataques.',
      features: ['Escaneo exhaustivo de sistemas', 'Identificación de vulnerabilidades críticas', 'Análisis de configuraciones', 'Reportes detallados con priorización']
    },
    {
      icon: AlertTriangle,
      title: 'Gestión de Incidentes',
      description: 'Proporcionamos una respuesta rápida y eficiente ante cualquier incidente, minimizando el impacto en sus operaciones.',
      features: ['Respuesta inmediata 24/7', 'Contención de amenazas', 'Análisis forense digital', 'Plan de recuperación']
    },
    {
      icon: Users,
      title: 'Consultoría de Ciberseguridad',
      description: 'Nuestros expertos le asesorarán sobre las mejores prácticas y estrategias de ciberseguridad para fortalecer su negocio.',
      features: ['Evaluación de riesgos', 'Diseño de arquitectura segura', 'Políticas de seguridad', 'Roadmap estratégico']
    },
    {
      icon: FileCheck,
      title: 'Protección de Datos y Cumplimiento',
      description: 'Ayudamos a cumplir normativas como el RGPD, garantizando que los datos de sus clientes estén protegidos y su empresa en regla.',
      features: ['Auditoría RGPD/LOPD', 'Implementación de controles', 'Documentación legal', 'Formación en compliance']
    },
    {
      icon: Target,
      title: 'Pentesting y Ethical Hacking',
      description: 'Pruebas de penetración para evaluar la seguridad real de sus sistemas desde la perspectiva de un atacante.',
      features: ['Pentesting web y móvil', 'Ingeniería social', 'Red team exercises', 'Simulación de ataques APT']
    },
    {
      icon: Eye,
      title: 'Monitorización y SOC',
      description: 'Vigilancia continua de su infraestructura para detectar y responder a amenazas en tiempo real.',
      features: ['Monitorización 24/7', 'SIEM/SOAR', 'Threat hunting', 'Inteligencia de amenazas']
    }
  ];

  const threats = [
    {
      icon: Wifi,
      title: 'Ransomware',
      description: 'Ataques que cifran datos para pedir rescate, paralizando operaciones empresariales.',
      impact: 'Pérdidas promedio de €4.5M por incidente'
    },
    {
      icon: Database,
      title: 'Robo de Datos',
      description: 'Exfiltración de información confidencial, datos de clientes y secretos empresariales.',
      impact: 'Multas RGPD hasta €20M o 4% facturación'
    },
    {
      icon: Server,
      title: 'Ataques DDoS',
      description: 'Saturación de servicios online causando indisponibilidad y pérdida de ingresos.',
      impact: 'Caída promedio de 3.5 horas'
    },
    {
      icon: AlertTriangle,
      title: 'Ingeniería Social',
      description: 'Manipulación de empleados para obtener accesos no autorizados.',
      impact: '95% de ataques exitosos incluyen factor humano'
    }
  ];

  const securityAreas = [
    { name: 'Gestión de Identidades', icon: Users },
    { name: 'Protección de Red', icon: Wifi },
    { name: 'Seguridad de Endpoints', icon: Shield },
    { name: 'Backup y Recuperación', icon: Database },
    { name: 'Monitorización SOC', icon: Eye },
    { name: 'Cumplimiento Normativo', icon: FileCheck }
  ];

  return (
    <section id="servicios" className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Consultoría en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Ciberseguridad
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-electric-blue font-semibold mb-6">
            Protegemos lo que más te importa
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            En Encryptora, ofrecemos un servicio de ciberseguridad integral diseñado para proteger tu organización 
            de amenazas digitales, garantizar la continuidad de tu negocio y salvaguardar tus datos más valiosos. 
            Nos especializamos en la implementación de soluciones personalizadas que se adaptan a las necesidades 
            de cada cliente, brindando protección completa y confiabilidad en cada proceso.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Solicitar más información
            </Button>
          </div>
        </div>

        {/* Why Cybersecurity is Crucial */}
        <div className="mb-20 bg-gradient-dark p-12 rounded-2xl border border-metallic-gray">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Por qué la Ciberseguridad es crucial para su empresa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Vivimos en un mundo interconectado donde los ataques cibernéticos son cada vez más frecuentes y sofisticados. 
              Desde pequeñas empresas hasta grandes corporaciones, todas las organizaciones son vulnerables a ataques que 
              pueden comprometer datos confidenciales, interrumpir operaciones y causar pérdidas económicas significativas.
            </p>
            <p className="text-lg text-electric-blue font-semibold mt-4">
              En Encryptora, entendemos estos riesgos y nos comprometemos a ofrecer soluciones que no solo previenen 
              los ataques, sino que también detectan y mitigan las amenazas antes de que puedan causar daño.
            </p>
          </div>
        </div>

        {/* Main Threats */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Principales amenazas de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                seguridad digital
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threats.map((threat, index) => {
              const IconComponent = threat.icon;
              return (
                <Card key={index} className="bg-card border-metallic-gray hover:border-red-500 transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-lg mb-4 mx-auto">
                      <IconComponent className="w-8 h-8 text-red-500" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{threat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{threat.description}</p>
                    <div className="text-xs text-red-500 font-semibold bg-red-500/10 p-2 rounded">
                      {threat.impact}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              Solicitar más información
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Servicios de ciberseguridad
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card border-metallic-gray hover:border-electric-blue transition-all duration-300 hover:shadow-glow group"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-foreground">
                          <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-foreground"
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 360° Security Cycle */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Trabajamos el ciclo completo de la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                seguridad informática 360º
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Nuestro amplio catálogo de soluciones de ciberseguridad empresarial abarca todas las áreas críticas, 
              desde la gestión de accesos de los usuarios hasta la protección integral de la red, los datos y los dispositivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-card p-6 rounded-lg border border-metallic-gray hover:border-electric-blue transition-colors duration-300 text-center">
                  <IconComponent className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground">{area.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Plans */}
        <div className="bg-gradient-dark p-12 rounded-2xl border border-metallic-gray text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Diseñamos planes a medida de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Ciberseguridad para tu empresa
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Antes de implementar cualquier solución de ciberseguridad en tu red, llevamos a cabo un análisis exhaustivo 
            de tus necesidades, identificamos posibles vulnerabilidades y diseñamos una estrategia personalizada con las 
            medidas de protección más adecuadas para reforzar tus sistemas. Contamos con un equipo de expertos altamente 
            cualificados y con amplia experiencia en seguridad informática.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-electric-blue font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-foreground">Análisis inicial</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-teal-green font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-foreground">Estrategia de seguridad</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-bright/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-cyan-bright font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-foreground">Implantación de medidas</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-electric-blue font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-foreground">Vigilancia activa</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground">Empresa segura</h4>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            Solicitar Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;