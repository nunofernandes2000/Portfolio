import { Github, Linkedin, Mail, MapPin, User } from 'lucide-react';
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
          <p className="text-xl text-gray-300 mb-4">
            Full Stack Developer &amp; IT Support Technician
          </p>
          <p className="text-gray-400 mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Alter do Chao, Portugal
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/nunofernandes2000" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/nuno-fernandes-164910238/" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ticnunofernandes@gmail.com" aria-label="Email" className="hover:text-blue-400 transition-colors">
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
                Full Stack Developer with a completed CTeSP in Web and Mobile Application Development and professional experience in IT support, network administration, hardware diagnosis, and internal web applications. I work with JavaScript, TypeScript, PHP, C/C++, Java, React, Node.js, Spring Boot, and SQL, and I enjoy building practical software while continuing to grow technically.
              </p>
            </div>
            <TechStack />
          </div>
        </div>
      </section>
    </>
  );
}