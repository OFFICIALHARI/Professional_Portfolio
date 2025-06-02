import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  icon,
  isLeft,
}) => {
  return (
    <div className={`relative flex items-start ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Content */}
      <div className="md:w-1/2 relative z-10">
        <div 
          className={`bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400 
          ${isLeft ? 'md:mr-8' : 'md:ml-8'} transform transition-transform duration-500 hover:scale-105`}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
          <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{subtitle}</h4>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
            <span className="inline-flex items-center">
              <span className="mr-2">{React.cloneElement(icon as React.ReactElement, { className: 'h-4 w-4' })}</span>
              {period}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
      
      {/* Icon */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
        <div className="bg-blue-600 dark:bg-blue-400 rounded-full p-2 text-white z-10">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;