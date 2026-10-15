import { ProjectCard } from '../components/ProjectCard';
import checkpointsImage from '../assets/projects/checkpoints.jpg';
import pacmanImage from '../assets/projects/pacman.jpg';
import schoolGestImage from '../assets/projects/school-gest.jpg';
import guessGameImage from '../assets/projects/guessgame.jpg';
import censosImage from '../assets/projects/censos.jpg';
import mobileDashboardImage from '../assets/projects/mobile-dashboard.svg';

export function Projects() {
  const projects = [
    {
      title: "UPP Mobile Dashboard",
      description: "Plataforma móvel full-stack para gestão académica da UPP, com API REST e arquitetura BFF, integrando dashboards analíticos e operacionais com serviços académicos.",
      highlights: [
        "Autenticação OAuth 2.0/OpenID Connect, validação de JWT com assinatura RS256 via JWKS e controlo de acessos por papéis (RBAC).",
        "Dashboards de auditoria de irregularidades DTP (2025/26 e histórico 2024/25), inquéritos pedagógicos, tickets de suporte, auditoria de contas de docentes e aniversários.",
        "Ocupação de salas e horários em tempo real, calendário de exames, notificações de unidades curriculares e upload de ficheiros entre web e mobile, com captura pela câmara do smartphone e cache em memória."
      ],
      image: mobileDashboardImage,
      links: [
        { label: "Backend", href: "https://github.com/nunofernandes2000/mobile-dashboard-backend" },
        { label: "Frontend", href: "https://github.com/nunofernandes2000/mobile-dashboard-app" }
      ],
      tags: ["React Native", "Expo", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "Docker", "OAuth 2.0"]
    },
    {
      title: "Pac-Man 3D",
      description: "Jogo inspirado no Pac-Man desenvolvido em ambiente 3D com OpenGL e FreeGLUT, incluindo mapa carregado a partir de ficheiro, movimento do jogador, diferentes comportamentos dos fantasmas, sistema de pontuação e controlo da câmara.",
      image: pacmanImage,
      links: [{ label: "Ver código", href: "https://github.com/nunofernandes2000/PacMan-OPENGL-FreeGLut" }],
      tags: ["C", "OpenGL", "FreeGLUT"]
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
