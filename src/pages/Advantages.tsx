import Header from '@/components/Header';
import Advantages from '@/components/Advantages';
import Footer from '@/components/Footer';

const AdvantagesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};

export default AdvantagesPage;