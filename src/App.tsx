import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Achievements } from './pages/Achievements';
import { Projects } from './pages/Projects';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          <NavLink to="/" className="hover:text-blue-400">Início</NavLink>
          <NavLink to="/achievements" className="hover:text-blue-400">Percurso</NavLink>
          <NavLink to="/projects" className="hover:text-blue-400">Projetos</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <footer className="py-8 text-center text-gray-400">
          <p>© 2024-{currentYear} Nuno da Costa Fernandes. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;