import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import SkillCategory from '../ui/SkillCategory';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming",
      skills: ["Java", "JavaScript", "C++", "Python"],
    },
    {
      category: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Postman"],
    },
    {
      category: "OS & Cybersecurity",
      skills: ["Kali Linux", "Windows", "OWASP Top 10", "Network Security"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills" 
          subtitle="A comprehensive overview of my technical expertise and capabilities."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;