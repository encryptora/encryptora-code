import { Heart, Award, UserCheck, Settings, Shield, Zap, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Advantages = () => {
  const advantages = [
    {
      icon: Heart,
      title: 'Confianza Total',
      description: 'Construimos relaciones duraderas basadas en transparencia y resultados medibles.',
      stats: 'Confianza garantizada',
      color: 'text-teal-green'
    },
    {
      icon: Award,
      title: 'Excelencia Técnica',
      description: 'Equipo altamente especializado con certificaciones internacionales en ciberseguridad.',
      stats: 'Expertise certificado',
      color: 'text-electric-blue'
    },
    {
      icon: UserCheck,
      title: 'Máxima Confidencialidad',
      description: 'Protección absoluta de tu información con los más altos estándares de privacidad.',
      stats: '100% confidencial',
      color: 'text-cyan-bright'
    },
    {
      icon: Settings,
      title: 'Soluciones Personalizadas',
      description: 'Cada empresa es única. Desarrollamos estrategias adaptadas a tus necesidades específicas.',
      stats: 'Enfoque personalizado',
      color: 'text-teal-green'
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: 'Enfoque Preventivo',
      description: 'No esperamos a que ocurran los ataques. Identificamos y mitigamos riesgos proactivamente.',
      benefits: ['Detección temprana', 'Prevención automatizada', 'Monitorización continua']
    },
    {
      icon: Zap,
      title: 'Respuesta Inmediata',
      description: 'Tiempo de respuesta garantizado ante incidentes críticos de seguridad.',
      benefits: ['Disponibilidad 24/7', 'Escalado automático', 'Recuperación rápida']
    },
    {
      icon: Target,
      title: 'Precisión Técnica',
      description: 'Utilizamos las herramientas y metodologías más avanzadas del mercado.',
      benefits: ['Tecnología de vanguardia', 'Metodologías probadas', 'Análisis exhaustivo']
    },
    {
      icon: CheckCircle,
      title: 'Cumplimiento Asegurado',
      description: 'Garantizamos el cumplimiento de todas las normativas aplicables a tu sector.',
      benefits: ['RGPD compliant', 'Auditorías exitosas', 'Documentación completa']
    }
  ];

  return (
    <section id="ventajas" className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Encryptora?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos más que consultores en ciberseguridad. Somos tu aliado estratégico en la protección digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:bg-card p-6 rounded-2xl transition-all duration-300 hover:shadow-glow border border-transparent hover:border-metallic-gray"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {advantage.title}
                </h3>

                {/* Stats */}
                <div className={`text-lg font-semibold ${advantage.color} mb-3`}>
                  {advantage.stats}
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Differentiators */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Lo que nos Diferencia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => {
              const IconComponent = diff.icon;
              return (
                <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-all duration-300 hover:shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-foreground" />
                      </div>
                      <CardTitle className="text-xl text-foreground">{diff.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{diff.description}</p>
                    <div className="space-y-2">
                      {diff.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Resultados que Hablan por Sí Solos
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Reducción de Riesgos</h4>
                  <p className="text-muted-foreground">Hasta 95% de reducción en vulnerabilidades críticas tras nuestras intervenciones.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-teal-green rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Tiempo de Respuesta</h4>
                  <p className="text-muted-foreground">Respuesta en menos de 2 horas ante incidentes críticos de seguridad.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-cyan-bright rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Disponibilidad del Servicio</h4>
                  <p className="text-muted-foreground">Soporte especializado disponible cuando lo necesites.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Conoce Nuestros Servicios
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-dark p-8 rounded-2xl border border-metallic-gray">
            <blockquote className="text-xl text-foreground italic mb-6">
              "Encryptora nos proporcionó la tranquilidad que necesitábamos. Su approach profesional y conocimiento técnico superaron nuestras expectativas."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Director TI</div>
                <div className="text-sm text-muted-foreground">Empresa del sector financiero</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;