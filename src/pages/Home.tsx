import { Github, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react';
import { TechStack } from '../components/TechStack';
import myPhoto from '../assets/my-photo.jpeg'; // Ajuste o caminho conforme necessário

export function Home() {
  return (
    <>
      {/* Seção Hero */}
      <header className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Nuno da Costa Fernandes
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Estudante de Engenharia Informática · Full-Stack Developer
          </p>
          <p className="text-gray-400 mb-8 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Alter do Chão, Portalegre, Portugal
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/nunofernandes2000" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/nuno-fernandes-164910238/" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:ticnunofernandes@gmail.com" aria-label="Email" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+351961448430" aria-label="Telefone" className="hover:text-blue-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400">ticnunofernandes@gmail.com · +351 961 448 430</p>
        </div>
      </header>

      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <User className="w-6 h-6" />
              Sobre mim
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img src={myPhoto} alt="Nuno Fernandes" className="w-32 h-32 rounded-full object-cover" />
              <p className="text-gray-300 leading-relaxed">
                Sou estudante finalista da Licenciatura em Engenharia Informática no Instituto Politécnico de Portalegre, com projeto final em curso. Tenho formação anterior em Desenvolvimento para a Web e Dispositivos Móveis, experiência em desenvolvimento full-stack e suporte técnico, e interesse por arquitetura de software, aplicações web, sistemas móveis e redes.
              </p>
            </div>
            <TechStack />
          </div>
        </div>
      </section>
    </>
  );
}