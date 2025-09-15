import { Heart, Award, UserCheck, Settings } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Heart,
      title: 'Confianza',
      description: 'Más de una década protegiendo empresas con total transparencia y compromiso.',
      stats: '10+ años de experiencia',
      color: 'text-teal-green'
    },
    {
      icon: Award,
      title: 'Experiencia',
      description: 'Equipo certificado con las más altas credenciales en ciberseguridad internacional.',
      stats: '50+ certificaciones',
      color: 'text-electric-blue'
    },
    {
      icon: UserCheck,
      title: 'Discreción',
      description: 'Máxima confidencialidad y protección de datos en todos nuestros procesos.',
      stats: '100% confidencial',
      color: 'text-cyan-bright'
    },
    {
      icon: Settings,
      title: 'Soluciones Personalizadas',
      description: 'Cada empresa es única. Creamos estrategias adaptadas a tus necesidades específicas.',
      stats: 'Soluciones únicas',
      color: 'text-teal-green'
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

        {/* Feature Highlights */}
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
                  <h4 className="text-lg font-semibold text-foreground mb-2">Satisfacción del Cliente</h4>
                  <p className="text-muted-foreground">98% de satisfacción y renovación de contratos año tras año.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-dark p-8 rounded-2xl border border-metallic-gray">
            <blockquote className="text-xl text-foreground italic mb-6">
              "Encryptora transformó completamente nuestra postura de seguridad. Su enfoque profesional y resultados medibles nos dieron la confianza que necesitábamos."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">CEO, Empresa Fortune 500</div>
                <div className="text-sm text-muted-foreground">Cliente desde 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;