import { ProjectCard } from '../components/ProjectCard';
import Paintphoto from '../assets/paint.jpeg'; //TODO:Ajustar a foto para conseguir ver no portofolio

export function Projects() {
  const projects = [
    {
      title: "Pac-Man 2D",
      description: "Recriação do arcade Pac-Man em 2D, com desenho de primitivas em OpenGL, controlo de inputs e lógica de colisão em tempo real.",
      image: Paintphoto,
      github: "https://github.com/nunofernandes2000/Paint",
      tags: ["C/C++", "OpenGL", "FreeGLUT"]
    },
    {
      title: "Sistema de Gestão por Checkpoints",
      description: "Plataforma web full-stack com arquitetura em camadas, testes automatizados e dashboards interativos em React para monitorização letiva e avaliação.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Spring Boot", "React", "JPA", "REST"]
    },
    {
      title: "Android School Gest",
      description: "Aplicação móvel para administração escolar, com gestão de alunos, turmas e disciplinas e persistência de dados numa base SQLite local.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Android Studio", "SQLite", "UI/UX"]
    },
    {
      title: "SOD GuessGame",
      description: "Sistema cliente-servidor distribuído, com sockets TCP/IP, tratamento concorrente de ligações e sincronização de estados multijogador.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Sockets", "TCP/IP", "Multithreading"]
    },
    {
      title: "Censos App Android",
      description: "Aplicação nativa Android para recolha, validação e tratamento estatístico de dados de inquéritos censitários.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Android Studio", "SQLite", "UI/UX"]
    }
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos em destaque</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}