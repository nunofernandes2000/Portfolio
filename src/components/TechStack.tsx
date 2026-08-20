export function TechStack() {
  const technologies = [
    { category: "Linguagens", skills: ["JavaScript", "TypeScript", "Java", "PHP", "Python", "C/C++", "SQL"] },
    { category: "Frameworks e tecnologias", skills: ["React", "React Native", "Node.js", "Spring Boot", "Spring Security", "JPA/Hibernate", "Laravel", "Expo", "Android SDK", "OpenGL"] },
    { category: "Conceitos e ferramentas", skills: ["Arquitetura de software", "Programação funcional", "Git", "GitHub", "Docker", "Linux", "Sockets TCP/IP", "REST APIs"] },
    { category: "Bases de dados e idiomas", skills: ["MySQL", "PostgreSQL", "SQLite", "Português (Nativo)", "Inglês (Profissional)", "Espanhol (Básico)", "Francês (Elementar)"] }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Competências técnicas</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold mb-3 text-blue-400">{tech.category}</h4>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-700/50 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}