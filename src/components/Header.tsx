import { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import encryptoraLogo from '@/assets/encryptora-logo-new.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Metodología', href: '/metodologia' },
    { name: 'Ventajas', href: '/ventajas' },
    { name: 'Confianza', href: '/confianza' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carbon/95 backdrop-blur-sm border-b border-metallic-gray">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <img src={encryptoraLogo} alt="Encryptora Logo" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Encryptora</h1>
              <p className="text-xs text-muted-foreground">Consultoría en Ciberseguridad</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-electric-blue transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="outline" size="sm" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-foreground">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/contacto">
              <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                Auditoría Gratuita
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-electric-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-metallic-gray">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-electric-blue transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-metallic-gray">
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-foreground w-full">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90 w-full">
                    Auditoría Gratuita
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;