import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import CompetitiveAdvantages from '@/components/CompetitiveAdvantages';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Encryptora | Protegemos tu negocio frente a ciberamenazas</title>
        <meta name="description" content="Blindamos tus datos más valiosos y garantizamos la continuidad de tu empresa con soluciones de ciberseguridad a medida. Auditoría gratuita." />
        <meta name="keywords" content="ciberseguridad, consultoría, protección datos, ransomware, RGPD, auditoría seguridad, pentesting" />
        <link rel="canonical" href="https://encryptora.com" />
        <meta property="og:title" content="Encryptora | Protegemos tu negocio frente a ciberamenazas" />
        <meta property="og:description" content="Blindamos tus datos más valiosos y garantizamos la continuidad de tu empresa con soluciones de ciberseguridad a medida." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <CompetitiveAdvantages />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
