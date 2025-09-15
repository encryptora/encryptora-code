import { Shield, Search, BookOpen, Users, Target, Lock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Auditorías de Seguridad',
      description: 'Evaluación completa de tu infraestructura tecnológica para identificar vulnerabilidades y riesgos de seguridad.',
      features: ['Análisis de vulnerabilidades', 'Evaluación de riesgos', 'Informes detallados', 'Recomendaciones específicas']
    },
    {
      icon: Target,
      title: 'Pentesting',
      description: 'Pruebas de penetración ética para simular ataques reales y fortalecer tus defensas digitales.',
      features: ['Pruebas de intrusión', 'Simulación de ataques', 'Análisis de superficie de ataque', 'Reportes ejecutivos']
    },
    {
      icon: Shield,
      title: 'Cumplimiento Normativo',
      description: 'Te ayudamos a cumplir con regulaciones como GDPR, ISO 27001, y otras normativas de seguridad.',
      features: ['Evaluación de compliance', 'Implementación de controles', 'Documentación legal', 'Auditorías de seguimiento']
    },
    {
      icon: BookOpen,
      title: 'Formación en Ciberseguridad',
      description: 'Capacitación especializada para tu equipo en las mejores prácticas de seguridad digital.',
      features: ['Talleres personalizados', 'Simulacros de phishing', 'Concienciación de seguridad', 'Certificaciones']
    },
    {
      icon: Users,
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento experto para desarrollar una estrategia de ciberseguridad alineada con tus objetivos empresariales.',
      features: ['Estrategia de seguridad', 'Planificación de inversiones', 'Gestión de riesgos', 'Roadmap tecnológico']
    },
    {
      icon: Lock,
      title: 'Respuesta a Incidentes',
      description: 'Soporte 24/7 para la gestión y resolución rápida de incidentes de seguridad.',
      features: ['Respuesta inmediata', 'Análisis forense', 'Contención de amenazas', 'Recuperación de sistemas']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de ciberseguridad diseñadas para proteger y fortalecer tu empresa en el entorno digital actual.
          </p>
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

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas una solución personalizada? Hablemos sobre tus necesidades específicas.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;