import Navbar from '../components/Navbar'
import SobreMim from '../components/SobreMim';
import Content from '../components/Content'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <SobreMim />
      <Content />
      <Contato />
      <Footer />
    </>
  )
}

export default Home