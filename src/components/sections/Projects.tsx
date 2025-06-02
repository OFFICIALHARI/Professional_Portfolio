import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: "Secure Banking Portal",
      description: "A full-stack banking application with secure authentication, transaction management, and real-time notifications.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/officialhari/secure-banking",
      demo: "#",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      title: "Eco E-commerce Shopping Assistant",
      description: "Extension for e-commerce websites to provide personalized shopping recommendations and price comparisons based on eco ratings.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/officialhari/eco-shopping-assistant",
      demo: "#",
      bgColor: "from-purple-500 to-pink-500"
    },
    {
      title: "Vulnerability Scanner",
      description: "A web application security scanner that identifies common vulnerabilities like XSS, SQL injection, and CSRF.",
      techStack: ["Python", "Flask", "BeautifulSoup", "JavaScript"],
      github: "https://github.com/officialhari/vulnerability-scanner",
      demo: "#",
      bgColor: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="A showcase of my recent development work and technical capabilities."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;