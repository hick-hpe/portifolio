import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projetos from './pages/Projetos'

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projetos/web' element={<Projetos />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App

