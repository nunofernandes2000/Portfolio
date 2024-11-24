import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Trophy, Briefcase, User } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { TechStack } from './components/TechStack';
import { Achievement } from './components/Achievement';

function App() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/yourusername/ecommerce",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and message translation",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/yourusername/ai-chat",
      tags: ["React", "Socket.io", "OpenAI", "Node.js"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/yourusername/task-manager",
      tags: ["React", "Redux", "Express", "MongoDB"]
    }
  ];

  const achievements = [
    {
      title: "Open Source Contributor",
      description: "Contributed to major open-source projects with over 1000+ stars",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Hackathon Winner",
      description: "First place in Regional Tech Hackathon 2023",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Tech Lead",
      description: "Led a team of 10 developers in a successful product launch",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Nuno Fernandes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Full Stack Developer | Open Source Enthusiast | Computer Science Student
          </p>
          <div className="flex justify-center gap-4">
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
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User className="w-6 h-6" />
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm a passionate software developer with 5+ years of experience in building scalable web applications.
              I specialize in JavaScript/TypeScript ecosystem, with expertise in React, Node.js, and cloud technologies.
              I love contributing to open-source projects and sharing knowledge with the developer community.
            </p>
            <TechStack />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Achievement key={index} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Nuno Fernandes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;