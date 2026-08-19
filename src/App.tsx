
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Detalhes from './pages/Detalhes'

function App() {
  return (
    <Router>
      <nav className="app-nav">
        <Link to="/">Home</Link> | <Link to="/cursos">Cursos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="*" element={<p>Erro 404 - Página não encontrada</p>} />
      </Routes>
    </Router>
  )
}

export default App
