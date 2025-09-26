import { Quote, Star, Shield, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Gracias a Encryptora identificamos todas las vulnerabilidades críticas en nuestro servidor. Ahora nuestros datos están protegidos. Un equipo profesional y altamente recomendable.",
      author: "Director de TI",
      company: "Empresa del sector financiero",
      rating: 5,
      icon: Building
    },
    {
      text: "Con Encryptora tenemos la tranquilidad de que nuestro negocio sigue seguro 24/7. Sus soluciones son claras, efectivas y hechas a medida.",
      author: "CEO",
      company: "Startup tecnológica",
      rating: 5,
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Lo que dicen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              nuestros clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mejor aval
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <Card key={index} className="bg-card border-metallic-gray hover:border-electric-blue transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-electric-blue/30 absolute -top-2 -left-2" />
                    <blockquote className="text-lg text-foreground italic leading-relaxed pl-6">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
            Solicita tu Auditoría Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;