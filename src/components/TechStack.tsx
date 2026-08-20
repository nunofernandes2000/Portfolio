export function TechStack() {
  const technologies = [
    { category: "Languages", skills: ["JavaScript", "TypeScript", "PHP", "Python", "C/C++", "Java", "SQL"] },
    { category: "Frameworks", skills: ["React", "React Native", "Node.js", "Spring Boot", "Angular", "Expo", "OpenGL"] },
    { category: "Tools & Concepts", skills: ["Git", "GitHub", "Docker", "Linux", "REST APIs", "TCP/IP", "SQL Server"] },
    { category: "Databases", skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
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