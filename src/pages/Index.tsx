import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import Advantages from '@/components/Advantages';
import Trust from '@/components/Trust';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <Advantages />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
