import React from 'react';
import { Code2, Trophy, Briefcase } from 'lucide-react';
import { Achievement } from '../components/Achievement';

export function Achievements() {
  const achievements = [
    {
      title: "Open Source Contributor",
      description: "Contributed to major open-source projects with over 1000+ stars",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Hackathon Winner",
      description: "First place in Regional Tech Hackathon 2023",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Tech Lead",
      description: "Led a team of 10 developers in a successful product launch",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}