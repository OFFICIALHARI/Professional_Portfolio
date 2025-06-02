import React from 'react';
import { ChevronDown, FileDown, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center md:text-left">
          <p className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-4 animate-fadeIn">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fadeIn animation-delay-200">
            HARIKRISHNAN S
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-fadeIn animation-delay-400">
            Full Stack Developer | Java | React | Cybersecurity Enthusiast
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto md:mx-0 mb-8 animate-fadeIn animation-delay-600">
            Building robust web applications with modern technologies and a security-focused mindset. Dedicated to continuous learning and professional growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-800">
            <a
              href="/resume.pdf"
              download
              className="button-primary w-full sm:w-auto"
            >
              <FileDown className="w-5 h-5 mr-2 inline-block" />
              Download Resume
            </a>
            <a
              href="https://github.com/officialhari"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary w-full sm:w-auto"
            >
              <Github className="w-5 h-5 mr-2 inline-block" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-8 animate-bounce">
        <a
          href="#about"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;