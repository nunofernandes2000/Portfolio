import React from 'react';

interface AchievementProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Achievement({ title, description, icon }: AchievementProps) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg text-center hover:bg-gray-800 transition-colors">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}