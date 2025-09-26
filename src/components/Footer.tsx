import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import encryptoraLogo from '@/assets/encryptora-logo.png';

const Footer = () => {
  const services = [
    'Auditorías de Seguridad',
    'Pentesting',
    'Cumplimiento Normativo',
    'Formación en Ciberseguridad',
    'Consultoría Estratégica',
    'Respuesta a Incidentes'
  ];

  const company = [
    'Sobre Nosotros',
    'Nuestro Equipo',
    'Certificaciones',
    'Casos de Éxito',
    'Blog de Seguridad',
    'Carreras'
  ];

  const legal = [
    'Política de Privacidad',
    'Términos de Servicio',
    'Política de Cookies',
    'Aviso Legal',
    'Código de Ética',
    'Compliance'
  ];

  return (
    <footer className="bg-carbon border-t border-metallic-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <img src={encryptoraLogo} alt="Encryptora Logo" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Encryptora</h3>
                <p className="text-xs text-muted-foreground">Consultoría en Ciberseguridad</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Protegemos a las empresas contra amenazas digitales con soluciones innovadoras, 
              confiables y personalizadas.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-metallic-gray rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-metallic-gray rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-metallic-gray rounded-lg flex items-center justify-center hover:bg-electric-blue transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#servicios" 
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Empresa</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-muted-foreground">contacto@encryptora.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-muted-foreground">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-electric-blue" />
                <span className="text-sm text-muted-foreground">Madrid, España</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-card rounded-lg border border-metallic-gray">
              <h5 className="text-sm font-semibold text-foreground mb-2">🚨 Emergencias 24/7</h5>
              <p className="text-xs text-muted-foreground mb-2">Respuesta inmediata a incidentes críticos</p>
              <p className="text-electric-blue font-medium text-sm">+34 900 123 456</p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="pt-8 border-t border-metallic-gray">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
            {legal.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-xs text-muted-foreground hover:text-electric-blue transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-metallic-gray">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Encryptora. Todos los derechos reservados.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Consultoría profesional en ciberseguridad | Madrid, España
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4 text-electric-blue" />
              <span>Certificado ISO 27001 | SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;