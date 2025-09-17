import { Search, AlertTriangle, Shield, Eye, CheckCircle, Users, Lock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Methodology = () => {
  const steps = [
    {
      icon: Search,
      title: 'Análisis Exhaustivo',
      description: 'Evaluamos tu infraestructura actual, identificamos activos críticos y analizamos tu superficie de ataque.',
      color: 'electric-blue',
      details: ['Inventario de activos', 'Mapeo de red', 'Identificación de servicios', 'Evaluación de procesos']
    },
    {
      icon: AlertTriangle,
      title: 'Detección de Vulnerabilidades',
      description: 'Identificamos vulnerabilidades, amenazas potenciales y puntos débiles en tus sistemas de seguridad.',
      color: 'cyan-bright',
      details: ['Escaneo de vulnerabilidades', 'Análisis de configuraciones', 'Revisión de políticas', 'Assessment de riesgos']
    },
    {
      icon: Shield,
      title: 'Implementación de Controles',
      description: 'Implementamos soluciones específicas para neutralizar riesgos y fortalecer tus defensas digitales.',
      color: 'teal-green',
      details: ['Despliegue de soluciones', 'Configuración de sistemas', 'Integración de herramientas', 'Testing de controles']
    },
    {
      icon: Eye,
      title: 'Monitorización Continua',
      description: 'Establecemos monitoreo continuo y protocolos preventivos para mantener tu seguridad a largo plazo.',
      color: 'electric-blue',
      details: ['Vigilancia 24/7', 'Alertas automáticas', 'Informes periódicos', 'Mejora continua']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Metodología Probada',
      description: 'Procesos validados en múltiples sectores industriales'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Consultores certificados en las principales tecnologías'
    },
    {
      icon: Lock,
      title: 'Seguridad Garantizada',
      description: 'Cumplimiento de los más altos estándares de seguridad'
    },
    {
      icon: Zap,
      title: 'Resultados Rápidos',
      description: 'Implementación eficiente con impacto inmediato'
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestra{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Metodología
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Antes de implementar cualquier solución de ciberseguridad en tu red, llevamos a cabo un análisis exhaustivo 
            de tus necesidades, identificamos posibles vulnerabilidades y diseñamos una estrategia personalizada con las 
            medidas de protección más adecuadas para reforzar tus sistemas.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-colors duration-300 text-center">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-accent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-metallic-gray rounded-full text-foreground font-bold text-lg mb-4 group-hover:bg-electric-blue transition-colors duration-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-${step.color}/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-10 h-10 text-${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-electric-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-0 h-0 border-l-8 border-l-electric-blue border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-metallic-gray">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ¿Listo para fortalecer tu seguridad?
          </h3>
          <p className="text-muted-foreground mb-6">
            Comienza con una auditoría gratuita y descubre cómo podemos proteger tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary hover:opacity-90 text-foreground font-semibold py-3 px-6 rounded-lg shadow-glow transition-opacity duration-300">
              Iniciar Auditoría Gratuita
            </button>
            <button className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;