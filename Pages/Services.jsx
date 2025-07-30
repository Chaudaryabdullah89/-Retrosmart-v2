import React from 'react'
import TopCompnentHero from '../components/TopCompnentHero'
import HomeBenefits from '../components/HomeBenfits'
import Paragarh from '../components/Paragarh'
import HomeServices from '../components/HomeServices'
import PageTitle from '../components/PageTitle'

const Services = () => {
  return (
    <div className="bg-gray-50">
      <PageTitle title="Our Services" />
      <TopCompnentHero
        title="Our Services"
        description="Explore our comprehensive range of energy efficiency services, from insulation and heating upgrades to ECO4 grant applications and property assessments."
        value1="View Services"
        value2="Get Quote"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        onClick2="#services-list"
        onClick1="#quote-form"
      />

      <div className="container max-w-7xl mx-auto px-4 py-16">
        {/* Service Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Fast Installation",
              value: "24-48 Hours",
              description: "Quick and efficient service delivery"
            },
            {
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Cost Savings",
              value: "Up to 40%",
              description: "Reduced energy bills after installation"
            },
            {
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "Quality Guarantee",
              value: "10 Years",
              description: "Extended warranty on all installations"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-amber-600 font-semibold mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <h1 id="details" 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent"
            data-aos="fade-up">
          Our Core Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
               data-aos="fade-right"
               data-aos-duration="1000"
               data-aos-delay="100">
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg group">
              <img src="/images/PnpUHNe8txt5nea57EPtLW-970-80.jpg.webp" 
                   alt="Wall Insulation" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-bold text-2xl mb-4">Wall Insulation</h3>
            <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
              External & internal wall insulation solutions for optimal thermal performance, reducing heat loss and improving energy efficiency.
            </p>
            <button className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
               data-aos="fade-left"
               data-aos-duration="1000"
               data-aos-delay="200">
            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg group">
              <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3" 
                   alt="Smart Heating" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-bold text-2xl mb-4">Smart Heating Solutions</h3>
            <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
              Advanced heating control systems for efficient temperature management, optimizing energy usage and comfort.
            </p>
            <button className="mt-6 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="300">
            Our Process
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {[
              {
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                title: "Assessment",
                description: "Comprehensive evaluation of your property's needs"
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                title: "Installation",
                description: "Expert implementation with minimal disruption"
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Quality Check",
                description: "Thorough testing to ensure optimal performance"
              }
            ].map((step, index) => (
              <div key={index}
                   className="flex flex-col items-center text-center max-w-sm bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                   data-aos="fade-up"
                   data-aos-delay={400 + (index * 100)}>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-full mb-6 transform hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HomeServices />
    </div>
  )
}

export default Services
