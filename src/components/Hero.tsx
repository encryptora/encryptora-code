import { Shield, ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCybersecurity from '@/assets/hero-cybersecurity.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCybersecurity} 
          alt="Ciberseguridad Profesional" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-electric-blue/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-teal-green/40 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-electric-blue/10 rotate-45"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-12 shadow-glow">
            <Shield className="w-10 h-10 text-foreground" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Protegemos tu negocio
            </span>
            <br />
            frente a ciberamenazas
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Blindamos tus datos más valiosos y garantizamos la continuidad de tu empresa con 
            <strong className="text-electric-blue"> soluciones de ciberseguridad a medida</strong>.
          </p>


          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-foreground">
              <Lock className="w-5 h-5 text-electric-blue" />
              <span className="text-sm font-medium">Protección Integral</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground">
              <Shield className="w-5 h-5 text-teal-green" />
              <span className="text-sm font-medium">Soluciones Personalizadas</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground">
              <ArrowRight className="w-5 h-5 text-cyan-bright" />
              <span className="text-sm font-medium">Confiabilidad Garantizada</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6 group"
            >
              Solicita tu Auditoría Gratuita Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-foreground text-lg px-8 py-6"
            >
              Conoce nuestros Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-metallic-gray">
            <p className="text-sm text-muted-foreground mb-4">Nos especializamos en implementar soluciones que se adaptan a cada cliente</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-12 h-12 bg-metallic-gray rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-electric-blue" />
              </div>
              <div className="w-12 h-12 bg-metallic-gray rounded-lg flex items-center justify-center">
                <Lock className="w-6 h-6 text-teal-green" />
              </div>
              <div className="w-12 h-12 bg-metallic-gray rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-cyan-bright" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;