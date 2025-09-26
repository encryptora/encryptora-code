import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import encryptoraLogo from '@/assets/encryptora-logo-new.png';

const Footer = () => {
  return (
    <footer className="bg-carbon border-t border-metallic-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1 - Marca */}
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Protegemos a las empresas frente a amenazas digitales con 
              soluciones innovadoras, confiables y a medida.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2 - Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Auditorías de Seguridad
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Pentesting
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Cumplimiento Normativo
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Formación en Ciberseguridad
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Consultoría Estratégica
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Respuesta a Incidentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Empresa */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ventajas" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/confianza" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link to="/confianza" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Blog de Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-electric-blue flex-shrink-0" />
                <a 
                  href="mailto:contacto@encryptora.com" 
                  className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                >
                  contacto@encryptora.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-electric-blue flex-shrink-0" />
                <a 
                  href="tel:+34665484577" 
                  className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                >
                  +34 665 48 45 77
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Barcelona, España
                </span>
              </div>
            </div>

            {/* Emergencias 24/7 */}
            <div className="mt-6 p-4 bg-red-500/10 border-2 border-red-500/50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="text-sm font-bold text-red-500">Emergencias 24/7</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Respuesta inmediata a incidentes críticos
              </p>
              <Button 
                size="sm" 
                className="w-full bg-red-500 hover:bg-red-600 text-white shadow-lg"
                asChild
              >
                <a href="tel:+34665484577">
                  Llamar ahora
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-metallic-gray mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                Política de Cookies
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground">
                © 2024 Encryptora. Todos los derechos reservados.
              </span>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-electric-blue" />
                <span className="text-xs text-electric-blue">ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;