import React from 'react';
import TopCompnentHero from '../components/TopCompnentHero';
import Teams from '../components/Team';
import Eligibilityform from '../components/Eligibilityform';
import PageTitle from '../components/PageTitle';

const Eligibility = () => {
  return (
    <div className="bg-gray-50">
      <PageTitle title="ECO4 Grant Eligibility Checker" />
    

      <div className="container max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Eligibility Form Section */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <Eligibilityform />
        </div>

        {/* Eligibility Criteria Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-2xl font-bold mb-6 text-center">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                title: "Property Requirements",
                items: [
                  "Must own your home or have landlord permission",
                  "Property must be in England, Scotland, or Wales",
                  "Must have an inefficient heating system"
                ]
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Income Requirements",
                items: [
                  "Household income below £31,000",
                  "Must receive qualifying benefits",
                  "No minimum income requirement for benefit recipients"
                ]
              }
            ].map((section, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600" style={{ fontFamily: "Barlow" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <Teams />
        </div>
      </div>
    </div>
  );
};

export default Eligibility; 