import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Methodology from '@/components/Methodology';
import Footer from '@/components/Footer';

const MethodologyPage = () => {
  return (
    <>
      <Helmet>
        <title>Metodología de Trabajo | Encryptora</title>
        <meta name="description" content="Conoce nuestra metodología probada de 4 pasos para garantizar la máxima seguridad de tu empresa." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Methodology />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MethodologyPage;