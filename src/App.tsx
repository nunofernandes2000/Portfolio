import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Home } from './pages/Home';
import { Achievements } from './pages/Achievements';
import { Projects } from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              John Doe
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer | Open Source Enthusiast | Tech Lead
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="https://github.com/yourusername" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex justify-center gap-8 mb-12">
              <NavLink
                to="/"
                className={({ isActive }: { isActive: boolean }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/achievements"
                className={({ isActive }: { isActive: boolean }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                Achievements
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }: { isActive: boolean }) =>
                  `px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                Projects
              </NavLink>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;