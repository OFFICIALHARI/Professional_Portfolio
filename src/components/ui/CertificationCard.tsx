import React from 'react';
import { Award, Calendar, Key } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  description,
  credentialId,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">{issuer}</p>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{description}</p>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm pt-4 border-t border-gray-200 dark:border-gray-700">
          <Key className="w-4 h-4 mr-2" />
          <span>Credential ID: {credentialId}</span>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;