import { Search, AlertTriangle, Shield, Eye } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      icon: Search,
      title: 'Análisis',
      description: 'Evaluamos tu infraestructura actual, identificamos activos críticos y analizamos tu superficie de ataque.',
      color: 'electric-blue'
    },
    {
      icon: AlertTriangle,
      title: 'Detección',
      description: 'Identificamos vulnerabilidades, amenazas potenciales y puntos débiles en tus sistemas de seguridad.',
      color: 'cyan-bright'
    },
    {
      icon: Shield,
      title: 'Mitigación',
      description: 'Implementamos soluciones específicas para neutralizar riesgos y fortalecer tus defensas digitales.',
      color: 'teal-green'
    },
    {
      icon: Eye,
      title: 'Prevención',
      description: 'Establecemos monitoreo continuo y protocolos preventivos para mantener tu seguridad a largo plazo.',
      color: 'electric-blue'
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cómo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Trabajamos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra metodología probada garantiza resultados efectivos y duraderos para la protección de tu empresa.
          </p>
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