import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import Paintphoto from '../assets/paint.jpeg'; //TODO:Ajustar a foto para conseguir ver no portofolio

export function Projects() {
  const projects = [
    {
      title: "Paint",
      description: "Paint is a drawing app that lets you create art with various tools, figures and colors",
      image: Paintphoto,
      github: "https://github.com/nunofernandes2000/Paint",
      tags: ["C", "FreeGlut", "OpenGL"]
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and message translation",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/yourusername/ai-chat",
      tags: ["React", "Socket.io", "OpenAI", "Node.js"]
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
      github: "https://github.com/yourusername/task-manager",
      tags: ["React", "Redux", "Express", "MongoDB"]
    }
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}