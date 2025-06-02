import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { GraduationCap, Calendar } from 'lucide-react';
import TimelineItem from '../ui/TimelineItem';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "RMKCET",
      period: "2023 - 2027",
      description: "Currently pursuing a B.E. degree with focus on computer science fundamentals, software engineering, and cybersecurity.
       CGPA: 8.75/10.",
    },
    {
      degree: "Computer Science",
      institution: "Isha Vidhya Matric Higher Secondary School",
      period: "School Education",
      description: "Percentage: 87%",
    },
    // Add more education items as needed
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4 text-blue-600 dark:text-blue-400">
                <GraduationCap className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{item.institution}</h4>
              <div className="text-gray-600 dark:text-gray-400 mb-2">{item.period}</div>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
