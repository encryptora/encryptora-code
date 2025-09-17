import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Servicios de Ciberseguridad | Encryptora</title>
        <meta name="description" content="Descubre nuestros servicios especializados en ciberseguridad empresarial: auditorías, consultoría, pentesting y más." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;