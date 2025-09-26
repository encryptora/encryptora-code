import { Award, Settings, Shield, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CompetitiveAdvantages = () => {
  const advantages = [
    {
      icon: Award,
      title: 'Experiencia comprobada',
      description: 'Detectamos y resolvemos vulnerabilidades críticas con metodologías probadas en miles de auditorías.',
      color: 'text-electric-blue'
    },
    {
      icon: Settings,
      title: 'Soluciones personalizadas',
      description: 'Adaptadas a cada sector y empresa. No hay dos organizaciones iguales, tampoco sus soluciones de seguridad.',
      color: 'text-teal-green'
    },
    {
      icon: Shield,
      title: 'Protección integral',
      description: 'Seguridad activa en todos los niveles: red, sistemas, datos, usuarios y procesos empresariales.',
      color: 'text-cyan-bright'
    },
    {
      icon: Heart,
      title: 'Confianza garantizada',
      description: 'Acompañamos en cada paso del proceso. Tu tranquilidad es nuestro compromiso más importante.',
      color: 'text-electric-blue'
    }
  ];

  return (
    <section className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestras{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Ventajas Competitivas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lo que nos convierte en la mejor opción para proteger tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-all duration-300 hover:shadow-glow text-center group">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;