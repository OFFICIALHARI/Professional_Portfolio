import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-3 mt-4">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;