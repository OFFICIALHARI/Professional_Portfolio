import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import CertificationCard from '../ui/CertificationCard';

const Certifications = () => {
  const certificationsData = [
    {
      title: "Postman API Fundamentals",
      issuer: "Postman",
      date: "January 2023",
      description: "Comprehensive understanding of API testing, documentation, and integration using Postman.",
      credentialId: "CERT-API-123"
    },
    {
      title: "Java Programming",
      issuer: "Infosys",
      date: "March 2023",
      description: "Proficiency in Java programming concepts, data structures, and object-oriented programming principles.",
      credentialId: "CERT-JAVA-456"
    },
    {
      title: "Crypto 101",
      issuer: "Blockchain Council",
      date: "May 2023",
      description: "Understanding of blockchain technology, cryptocurrencies, and their applications in modern systems.",
      credentialId: "CERT-CRYPTO-789"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <CertificationCard 
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              credentialId={cert.credentialId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications