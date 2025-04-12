import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import SobreMim from '../components/SobreMim';
import Experiencias from '../components/Experiencias';
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.hash) {
      const section = document.querySelector(location.hash);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <SobreMim />
      <Experiencias />
      <Contato />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Home