import { Award, Shield, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Trust = () => {
  const certifications = [
    { name: 'ISO 27001', description: 'Gestión de Seguridad de la Información' },
    { name: 'CISSP', description: 'Profesional Certificado en Seguridad' },
    { name: 'CEH', description: 'Hacker Ético Certificado' },
    { name: 'CISM', description: 'Gestión de Seguridad de la Información' }
  ];

  const partnerships = [
    { name: 'Microsoft Security', type: 'Partner Gold' },
    { name: 'Cisco Security', type: 'Premier Partner' },
    { name: 'Palo Alto Networks', type: 'Authorized Partner' },
    { name: 'CrowdStrike', type: 'Elite Partner' }
  ];

  const successCases = [
    {
      sector: 'Sector Financiero',
      challenge: 'Implementación de framework de seguridad PCI DSS',
      result: 'Certificación exitosa y 0 incidentes en 24 meses',
      impact: '€2M ahorrados en multas potenciales'
    },
    {
      sector: 'Sector Salud',
      challenge: 'Cumplimiento GDPR y protección de datos médicos',
      result: 'Sistema compliant implementado en 3 meses',
      impact: '100% conformidad en auditorías'
    },
    {
      sector: 'Sector Industrial',
      challenge: 'Seguridad OT/IT en infraestructura crítica',
      result: 'Red segmentada y monitorizada 24/7',
      impact: '95% reducción en vectores de ataque'
    }
  ];

  return (
    <section id="confianza" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Confianza y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Seguridad
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestras certificaciones, alianzas estratégicas y casos de éxito respaldan nuestro compromiso con la excelencia.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Certificaciones Profesionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-colors duration-300 text-center">
                <CardHeader className="pb-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-4">
                    <Award className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Alianzas Estratégicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-metallic-gray hover:border-teal-green transition-colors duration-300 text-center">
                <Shield className="w-12 h-12 text-teal-green mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{partner.name}</h4>
                <p className="text-sm text-electric-blue font-medium">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Cases */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-10">
            Casos de Éxito
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <Card key={index} className="bg-card border-metallic-gray hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-electric-blue" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{case_.sector}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Desafío:</h5>
                    <p className="text-sm text-muted-foreground">{case_.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Resultado:</h5>
                    <p className="text-sm text-muted-foreground">{case_.result}</p>
                  </div>
                  <div className="pt-2 border-t border-metallic-gray">
                    <h5 className="font-semibold text-electric-blue mb-2">Impacto:</h5>
                    <p className="text-sm text-electric-blue font-medium">{case_.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-card p-8 rounded-2xl border border-metallic-gray">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-electric-blue mb-2">150+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-green mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-bright mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte Disponible</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-electric-blue mb-2">0</div>
              <div className="text-muted-foreground">Brechas de Seguridad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;