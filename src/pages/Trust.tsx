import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Trust from '@/components/Trust';
import Footer from '@/components/Footer';

const TrustPage = () => {
  return (
    <>
      <Helmet>
        <title>Confianza y Seguridad | Encryptora</title>
        <meta name="description" content="Conoce por qué las empresas confían en Encryptora para proteger sus activos digitales más valiosos." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Trust />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TrustPage;