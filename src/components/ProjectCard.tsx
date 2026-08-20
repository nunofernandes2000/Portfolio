import { ExternalLink, Github } from 'lucide-react';

interface ProjectLink {
  label: string;
  href: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  tags: string[];
}

export function ProjectCard({ title, description, image, links, tags }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Github className="h-4 w-4" />
              <span>{link.label}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}