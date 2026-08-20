import { ProjectCard } from '../components/ProjectCard';
import Paintphoto from '../assets/paint.jpeg'; //TODO:Ajustar a foto para conseguir ver no portofolio

export function Projects() {
  const projects = [
    {
      title: "Paint",
      description: "Desktop drawing application with primitives, input controls, colors, and real-time collision logic.",
      image: Paintphoto,
      github: "https://github.com/nunofernandes2000/Paint",
      tags: ["C/C++", "FreeGLUT", "OpenGL"]
    },
    {
      title: "Checkpoint Management System",
      description: "Full-stack platform with layered architecture, automated tests, and dashboards for real-time monitoring and evaluation.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Spring Boot", "React", "JPA", "REST"]
    },
    {
      title: "Android School Gest",
      description: "Android application for school administration, including schedules, subjects, and persistent data in a local SQLite database.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Android Studio", "SQLite", "UI/UX"]
    },
    {
      title: "SOD GuessGame",
      description: "Multiplayer system using TCP/IP sockets and multithreading for network communication and synchronized game state.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Sockets", "TCP/IP", "Multithreading"]
    },
    {
      title: "Censos App Android",
      description: "Android application for census data collection, validation, and statistical processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
      tags: ["Java", "Android Studio", "SQLite", "UI/UX"]
    }
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Highlighted Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}