import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: '',
    privacy: false
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info.encryptora@gmail.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+34 665484577',
      description: 'Consultas y emergencias'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      details: 'España',
      description: 'Servicios remotos y presenciales'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: 'Lun - Vie: 9:00 - 18:00',
      description: 'Consultas: Horario comercial'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            sector: formData.sector,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        sector: '',
        message: '',
        privacy: false
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error al enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="bg-input border-metallic-gray focus:border-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa *
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                      className="bg-input border-metallic-gray focus:border-electric-blue"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@empresa.com"
                      className="bg-input border-metallic-gray focus:border-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+34 600 000 000"
                      className="bg-input border-metallic-gray focus:border-electric-blue"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sector de Actividad
                  </label>
                  <select 
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-input border border-metallic-gray rounded-md focus:border-electric-blue focus:outline-none text-foreground"
                  >
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe brevemente tus necesidades de ciberseguridad, inquietudes actuales o el tipo de servicios que te interesan..."
                    rows={4}
                    className="bg-input border-metallic-gray focus:border-electric-blue"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-electric-blue bg-input border-metallic-gray rounded focus:ring-electric-blue"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Acepto la política de privacidad y el tratamiento de mis datos para contacto comercial.
                  </label>
                </div>

                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-glow text-lg py-6"
                >
                  {isLoading ? 'Enviando...' : 'Solicitar Auditoría Gratuita'}
                </Button>
              </form>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  📞 <strong>¿Necesitas ayuda urgente?</strong> Escríbenos a info.encryptora@gmail.com
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
                    <strong className="text-electric-blue">Consulta gratuita</strong> - Sin compromiso, evaluamos tus necesidades.
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