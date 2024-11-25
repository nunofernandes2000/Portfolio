import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Achievements } from './pages/Achievements';
import { Projects } from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          <NavLink to="/" className="hover:text-blue-400">Home</NavLink>
          <NavLink to="/achievements" className="hover:text-blue-400">Key Achievements</NavLink>
          <NavLink to="/projects" className="hover:text-blue-400">Featured Projects</NavLink>
        </nav>

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
          <p>© 2024 Nuno Fernandes. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;