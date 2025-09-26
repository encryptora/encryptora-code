import { Shield, Database, FileX, AlertTriangle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PainPoints = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Protección contra ransomware',
      description: 'Evita que tu empresa sea víctima de ataques que cifren tus datos y paralicen tus operaciones.',
      color: 'text-red-500'
    },
    {
      icon: Database,
      title: 'Prevención de fuga de datos',
      description: 'Protege la información confidencial de clientes y evita sanciones económicas millonarias.',
      color: 'text-electric-blue'
    },
    {
      icon: FileX,
      title: 'Cumplimiento normativo',
      description: 'Garantiza el cumplimiento de RGPD, LOPD y otras regulaciones específicas de tu sector.',
      color: 'text-teal-green'
    },
    {
      icon: Shield,
      title: 'Seguridad 24/7',
      description: 'Monitorización continua para detectar y neutralizar amenazas antes de que impacten.',
      color: 'text-cyan-bright'
    },
    {
      icon: Clock,
      title: 'Continuidad de negocio sin interrupciones',
      description: 'Asegura que tu empresa siga operando incluso ante incidentes de seguridad críticos.',
      color: 'text-electric-blue'
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Problemas que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Resolvemos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protege tu empresa de las amenazas más críticas que pueden paralizar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-all duration-300 hover:shadow-glow text-center group">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${problem.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-electric-blue transition-colors duration-300">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            Habla con un experto en ciberseguridad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;