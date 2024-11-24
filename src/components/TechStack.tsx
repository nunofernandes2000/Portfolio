import React from 'react';

export function TechStack() {
  const technologies = [
    { category: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Git"] },
    { category: "Tools", skills: ["VS Code", "Postman", "Figma", "Jest"] }
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