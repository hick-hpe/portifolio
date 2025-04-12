import BackToTop from "../components/BackToTop"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProjetosList from "../components/ProjetosList"

function Projetos() {
  return (
    <>
      <Navbar />
      <ProjetosList />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Projetos