import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import SobreMim from '../components/SobreMim';
import Experiencias from '../components/Experiencias';
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop';

function Home() {
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