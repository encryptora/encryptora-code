import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Encryptora | Consultoría en Ciberseguridad Empresarial</title>
        <meta name="description" content="Protege tu empresa con Encryptora, expertos en ciberseguridad empresarial. Auditorías, consultoría y soluciones personalizadas." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
