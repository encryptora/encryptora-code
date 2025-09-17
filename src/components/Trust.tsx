import { Award, Shield, Users, Globe, Lock, Eye, Target, CheckCircle, Zap, Database, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Trust = () => {
  const capabilities = [
    {
      icon: Shield,
      title: 'Protección Proactiva',
      description: 'Identificamos y neutralizamos amenazas antes de que impacten en tu negocio',
      features: ['Detección temprana', 'Prevención automatizada', 'Respuesta inmediata']
    },
    {
      icon: Eye,
      title: 'Monitorización Continua',
      description: 'Vigilancia 24/7 de tu infraestructura con tecnología de vanguardia',
      features: ['SOC dedicado', 'Alertas en tiempo real', 'Análisis de comportamiento']
    },
    {
      icon: Target,
      title: 'Evaluaciones Especializadas',
      description: 'Auditorías exhaustivas que revelan vulnerabilidades críticas',
      features: ['Pentesting avanzado', 'Análisis de riesgos', 'Reportes ejecutivos']
    },
    {
      icon: CheckCircle,
      title: 'Cumplimiento Normativo',
      description: 'Garantizamos el cumplimiento de todas las regulaciones aplicables',
      features: ['RGPD/LOPD', 'ISO 27001', 'Sector específico']
    }
  ];

  const methodology = [
    {
      step: '01',
      title: 'Evaluación Inicial',
      description: 'Análisis completo de tu situación actual de seguridad',
      icon: Search,
      details: ['Inventario de activos', 'Identificación de amenazas', 'Análisis de vulnerabilidades', 'Evaluación de riesgos']
    },
    {
      step: '02', 
      title: 'Diseño de Estrategia',
      description: 'Desarrollo de un plan de seguridad personalizado',
      icon: Target,
      details: ['Definición de objetivos', 'Selección de controles', 'Roadmap de implementación', 'Presupuesto optimizado']
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Despliegue de soluciones con mínima interrupción',
      icon: Zap,
      details: ['Configuración de sistemas', 'Integración con infraestructura', 'Migración de datos', 'Testing exhaustivo']
    },
    {
      step: '04',
      title: 'Monitorización',
      description: 'Vigilancia continua y mejora constante',
      icon: Eye,
      details: ['Monitorización 24/7', 'Gestión de incidentes', 'Actualizaciones de seguridad', 'Reporting periódico']
    }
  ];

  const benefits = [
    {
      icon: Database,
      title: 'Protección de Datos',
      stat: '100%',
      description: 'Confidencialidad garantizada de tus activos digitales'
    },
    {
      icon: Zap,
      title: 'Tiempo de Respuesta',
      stat: '<2h',
      description: 'Respuesta inmediata ante incidentes críticos'
    },
    {
      icon: Shield,
      title: 'Disponibilidad',
      stat: '99.9%',
      description: 'Uptime garantizado de sistemas críticos'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      stat: '100%',
      description: 'Cumplimiento normativo asegurado'
    }
  ];

  return (
    <section id="confianza" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Confianza y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Excelencia
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra metodología probada y capacidades avanzadas nos convierten en el socio ideal para proteger tu empresa.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Nuestras Capacidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-all duration-300 hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{capability.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{capability.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {capability.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Nuestra Metodología
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-colors duration-300 text-center">
                  <CardHeader>
                    <div className="text-4xl font-bold text-electric-blue mb-4">{step.step}</div>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4 mx-auto">
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-electric-blue rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Resultados Garantizados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center bg-card p-6 rounded-lg border border-metallic-gray hover:border-electric-blue transition-colors duration-300">
                  <IconComponent className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-electric-blue mb-2">{benefit.stat}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-card p-12 rounded-2xl border border-metallic-gray text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Protege tu negocio hoy mismo 🔒
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            En Encryptora, no solo ofrecemos soluciones, creamos oportunidades para que tu empresa crezca. 
            Nuestro equipo de expertos está listo para llevar tu negocio al siguiente nivel. 🚀
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
              <span className="text-foreground">Optimiza tu gestión</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-teal-green rounded-full"></div>
              <span className="text-foreground">Aumenta tu productividad</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-bright rounded-full"></div>
              <span className="text-foreground">Conéctate con más clientes</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            Quiero contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trust;