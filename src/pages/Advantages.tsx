import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Advantages from '@/components/Advantages';
import Footer from '@/components/Footer';

const AdvantagesPage = () => {
  return (
    <>
      <Helmet>
        <title>Ventajas Competitivas | Encryptora</title>
        <meta name="description" content="Descubre las ventajas que nos convierten en líderes en ciberseguridad empresarial y protección de datos." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Advantages />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AdvantagesPage;