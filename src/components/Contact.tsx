import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contacto@encryptora.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+34 900 123 456',
      description: 'Soporte 24/7 para emergencias'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'Madrid, España',
      description: 'Servicios en toda Europa'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: 'Lun - Vie: 9:00 - 18:00',
      description: 'Emergencias: 24/7'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hablemos de tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Seguridad
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para fortalecer la ciberseguridad de tu empresa? Contáctanos para una consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-metallic-gray">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <Send className="w-6 h-6 text-electric-blue mr-3" />
                Solicita tu Auditoría Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre *
                  </label>
                  <Input
                    placeholder="Tu nombre completo"
                    className="bg-input border-metallic-gray focus:border-electric-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Empresa *
                  </label>
                  <Input
                    placeholder="Nombre de tu empresa"
                    className="bg-input border-metallic-gray focus:border-electric-blue"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@empresa.com"
                    className="bg-input border-metallic-gray focus:border-electric-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    placeholder="+34 600 000 000"
                    className="bg-input border-metallic-gray focus:border-electric-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Sector de Actividad
                </label>
                <select className="w-full p-3 bg-input border border-metallic-gray rounded-md focus:border-electric-blue focus:outline-none text-foreground">
                  <option value="">Selecciona tu sector</option>
                  <option value="financiero">Financiero</option>
                  <option value="salud">Salud</option>
                  <option value="tecnologia">Tecnología</option>
                  <option value="industrial">Industrial</option>
                  <option value="comercio">Comercio</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cuéntanos sobre tu situación actual
                </label>
                <Textarea
                  placeholder="Describe brevemente tus necesidades de ciberseguridad, inquietudes actuales o el tipo de servicios que te interesan..."
                  rows={4}
                  className="bg-input border-metallic-gray focus:border-electric-blue"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 text-electric-blue bg-input border-metallic-gray rounded focus:ring-electric-blue"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Acepto la política de privacidad y el tratamiento de mis datos para contacto comercial.
                </label>
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90 shadow-glow text-lg py-6">
                Solicitar Auditoría Gratuita
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  📞 <strong>¿Emergencia de seguridad?</strong> Llama al +34 900 123 456
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-electric-blue font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Special Offers */}
            <Card className="bg-gradient-dark border-electric-blue">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  💎 Oferta Especial para Nuevos Clientes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <span className="text-foreground">Auditoría de seguridad inicial gratuita</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-green rounded-full"></div>
                  <span className="text-foreground">Consulta estratégica sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-bright rounded-full"></div>
                  <span className="text-foreground">Informe ejecutivo de vulnerabilidades</span>
                </div>
                <div className="pt-4 border-t border-metallic-gray">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-electric-blue">Valor €2,500</strong> - Completamente gratuito durante este mes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card border-metallic-gray">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Preguntas Frecuentes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">¿Cuánto tiempo toma una auditoría?</h5>
                  <p className="text-sm text-muted-foreground">Entre 1-3 semanas dependiendo del alcance y complejidad de tu infraestructura.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">¿Trabajan con empresas de cualquier tamaño?</h5>
                  <p className="text-sm text-muted-foreground">Sí, desde startups hasta grandes corporaciones. Adaptamos nuestros servicios a tus necesidades.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-2">¿Ofrecen soporte continuo?</h5>
                  <p className="text-sm text-muted-foreground">Absolutamente. Disponemos de planes de soporte 24/7 y monitorización continua.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;