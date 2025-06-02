import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Linkedin, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />
        
        <div className="mt-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src="/GOAT.jpg"
                alt="Profile"
                className="w-64 h-64 object-cover rounded-full border-4 border-blue-600 shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
              I'm a pre-final year Computer Science Engineering student with hands-on experience in <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Development</span> and a foundational understanding of <span className="font-semibold text-blue-600 dark:text-blue-400">blockchain technology</span>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
              Recently, I've shifted my focus toward <span className="font-semibold text-blue-600 dark:text-blue-400">cybersecurity</span>, exploring how to build secure and efficient web applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
              I'm passionate about the intersection of development and security, aiming to bridge both fields.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
              Alongside academics, I'm honing my problem-solving skills by actively practicing <span className="font-semibold text-blue-600 dark:text-blue-400">DSA on LeetCode</span>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
              I also work on internships and personal projects to gain real-world exposure.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <a href="https://www.linkedin.com/in/harikrishnan2006/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-700 dark:text-blue-400 font-bold text-lg hover:underline">
                <Linkedin className="w-7 h-7 mr-2 font-bold" /> Connect with me on LinkedIn
              </a>
              <a href="https://leetcode.com/s_harikrishnan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-600 dark:text-orange-400 font-bold text-lg hover:underline">
                <ExternalLink className="w-7 h-7 mr-2 font-bold" /> View my LeetCode profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;