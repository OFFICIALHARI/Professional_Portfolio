import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  bgColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  github,
  demo,
  bgColor,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
      
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <Code className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
          
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;