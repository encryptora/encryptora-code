import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto | Encryptora</title>
        <meta name="description" content="Ponte en contacto con Encryptora para una consulta gratuita sobre ciberseguridad empresarial." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;