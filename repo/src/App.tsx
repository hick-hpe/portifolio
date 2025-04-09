import './App.css'
import Navbar from './components/Navbar'
import SobreMim from './components/SobreMim';
import Content from './components/Content'
import Contato from './components/Contato'
import Footer from './components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
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

export default App
