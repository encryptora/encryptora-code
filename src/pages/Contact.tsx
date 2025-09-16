import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name,
            email,
            message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto. Gracias por confiar en Encryptora.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contacto@encryptora.es",
      description: "Respuesta en menos de 24h"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+34 900 123 456",
      description: "Lun - Vie, 9:00 - 18:00"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Madrid, España",
      description: "Consultoría remota disponible"
    },
    {
      icon: Clock,
      title: "Horario",
      details: "24/7 Emergencias",
      description: "Soporte crítico disponible"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Contacta con <span className="text-primary">Encryptora</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hablemos sobre la seguridad digital de tu empresa. 
              Análisis inicial gratuito y sin compromiso.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription>
                  Cuéntanos sobre tu proyecto y te ayudaremos a protegerlo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe tu proyecto o necesidades de seguridad..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading}
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje Seguro
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">🎯 Consulta Gratuita</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Primera consulta sin coste para nuevos clientes. 
                    Evaluamos tu situación actual y te proponemos soluciones.
                  </p>
                  <Button variant="outline" className="w-full">
                    Agendar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;