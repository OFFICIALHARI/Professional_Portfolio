import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      role: "Web Development Intern",
      company: "Bharat Intern",
      period: "June 2023 - August 2023",
      description: "Developed responsive web applications using React.js, Node.js, and Express.js. Implemented RESTful APIs and worked on database integration with MongoDB.",
    },
    {
      role: "Finance & Stock Market Intern",
      company: "Focus Wise Solution (Remote)",
      period: "May 2025 - July 2025",
      description: "Worked remotely on finance and stock market analysis, gaining practical exposure to financial tools and market research.",
    },
    // Add more experience items as needed
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4 text-blue-600 dark:text-blue-400">
                <Briefcase className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.role}</h3>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{item.company}</h4>
              <div className="text-gray-600 dark:text-gray-400 mb-2">{item.period}</div>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;