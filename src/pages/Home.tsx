import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import { TechStack } from '../components/TechStack';
import myPhoto from '../assets/my-photo.jpeg'; // Ajuste o caminho conforme necessário

export function Home() {
  return (
    <>
      {/* Seção Hero */}
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

      {/* Seção Sobre */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User className="w-6 h-6" />
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img src={myPhoto} alt="Nuno Fernandes" className="w-32 h-32 rounded-full object-cover" />
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate software developer with 5+ years of experience in building scalable web applications.
                I specialize in JavaScript/TypeScript ecosystem, with expertise in React, Node.js, and cloud technologies.
                I love contributing to open-source projects and sharing knowledge with the developer community.
              </p>
            </div>
            <TechStack />
          </div>
        </div>
      </section>
    </>
  );
}