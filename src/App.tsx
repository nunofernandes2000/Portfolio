import { FileText } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Achievements } from './pages/Achievements';
import { Projects } from './pages/Projects';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-gray-900/85 backdrop-blur-md" aria-label="Navegação principal">
          <div className="container mx-auto flex min-h-16 items-center justify-between gap-4 px-4">
            <NavLink to="/" className="flex shrink-0 items-center gap-2 text-sm font-bold tracking-wide text-white transition-colors hover:text-blue-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-sm text-white shadow-lg shadow-blue-500/20">NF</span>
              <span className="hidden sm:inline">Nuno Fernandes</span>
            </NavLink>
            <div className="flex items-center gap-1 rounded-lg border border-slate-700/80 bg-slate-900/70 p-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                Início
              </NavLink>
              <NavLink
                to="/achievements"
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                Percurso
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
              >
                Projetos
              </NavLink>
            </div>
            <a
              href="/cv/CV_Nuno_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-400 sm:inline-flex"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
          </div>
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