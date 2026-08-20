import { ProjectCard } from '../components/ProjectCard';
import checkpointsImage from '../assets/projects/checkpoints.jpg';
import pacmanImage from '../assets/projects/pacman.jpg';
import schoolGestImage from '../assets/projects/school-gest.jpg';
import guessGameImage from '../assets/projects/guessgame.jpg';
import censosImage from '../assets/projects/censos.jpg';

export function Projects() {
  const projects = [
    {
      title: "Pac-Man 2D",
      description: "Recriação do arcade Pac-Man em 2D, com desenho de primitivas em OpenGL, controlo de inputs e lógica de colisão em tempo real.",
      image: pacmanImage,
      links: [{ label: "Ver código", href: "https://github.com/nunofernandes2000/PacMan-OPENGL-FreeGLut" }],
      tags: ["C/C++", "OpenGL", "FreeGLUT"]
    },
    {
      title: "Sistema de Gestão por Checkpoints",
      description: "Plataforma web full-stack com arquitetura em camadas, testes automatizados e dashboards interativos em React para monitorização letiva e avaliação.",
      image: checkpointsImage,
      links: [
        { label: "Backend", href: "https://github.com/nunofernandes2000/spring" },
        { label: "Frontend", href: "https://github.com/nunofernandes2000/react" }
      ],
      tags: ["Java", "Spring Boot", "React", "JPA", "REST"]
    },
    {
      title: "Android School Gest",
      description: "Aplicação móvel para administração escolar, com gestão de alunos, turmas e disciplinas e persistência de dados numa base SQLite local.",
      image: schoolGestImage,
      links: [{ label: "Ver código", href: "https://github.com/nunofernandes2000/Android_School_Gest" }],
      tags: ["Java", "Android Studio", "SQLite", "UI/UX"]
    },
    {
      title: "SOD GuessGame",
      description: "Sistema cliente-servidor distribuído, com sockets TCP/IP, tratamento concorrente de ligações e sincronização de estados multijogador.",
      image: guessGameImage,
      links: [{ label: "Ver código", href: "https://github.com/nunofernandes2000/SOD_GUESSGAME_PROJETO" }],
      tags: ["Java", "Sockets", "TCP/IP", "Multithreading"]
    },
    {
      title: "Censos App Android",
      description: "Aplicação nativa Android para recolha, validação e tratamento estatístico de dados de inquéritos censitários.",
      image: censosImage,
      links: [{ label: "Ver código", href: "https://github.com/nunofernandes2000/Censos_App-Android-Studio" }],
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