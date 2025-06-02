import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievementsData = [
    {
      title: "1st Year Academic Topper",
      description: "Secured the highest CGPA among all students in the Computer Science department during the first year.",
      icon: <Trophy className="h-10 w-10" />
    },
    {
      title: "National Science Day Hackathon Winner",
      description: "Won third place in a national level hackathon with a secure banking solution that addressed common cybersecurity vulnerabilities.",
      icon: <Medal className="h-10 w-10" />
    },
   
    {
      title: "Cybersecurity Challenge Finalist",
      description: "Reached the finals of a regional cybersecurity challenge that tested vulnerability assessment and penetration testing skills.",
      icon: <Award className="h-10 w-10" />
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md flex items-start transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="flex-shrink-0 mr-4 text-blue-600 dark:text-blue-400">
                {achievement.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;