import React from 'react'
import TopCompnentHero from '../components/TopCompnentHero'
import HomeBenefits from '../components/HomeBenfits'
import Paragarh from '../components/Paragarh'
import HomeServices from '../components/HomeServices'

const Services = () => {
  return (
    <div>
      <TopCompnentHero
        title="Our Services"
        description="Comprehensive energy efficiency and retrofit solutions tailored to your needs. From initial assessment to final implementation, we provide end-to-end services to make your property more sustainable and energy-efficient."
        value1="Get Free Quote"
        value2="Learn More"
        image="https://www.checkatrade.com/blog/wp-content/uploads/2021/09/retrofit-coordinator-cost.jpeg"
        onClick2="/Services#details"
        onClick1="/contact"
      />

      <div className="container max-w-6xl mx-auto px-4 py-16">
        <h1 id="details" className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://cdn.mos.cms.futurecdn.net/PnpUHNe8txt5nea57EPtLW-970-80.jpg.webp" alt="Wall Insulation" className="w-full h-48 object-cover rounded-lg mb-6"/>
            <h3 className="font-bold text-2xl mb-4">Wall Insulation</h3>
            <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
              External & internal wall insulation solutions for optimal thermal performance, reducing heat loss and improving energy efficiency.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <img src="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3" alt="Smart Heating" className="w-full h-48 object-cover rounded-lg mb-6"/>
            <h3 className="font-bold text-2xl mb-4">Smart Heating Solutions</h3>
            <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
              Advanced heating control systems for efficient temperature management, optimizing energy usage and comfort.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of your property's needs</p>
            </div>

            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Installation</h3>
              <p className="text-gray-600">Expert implementation with minimal disruption</p>
            </div>

            <div className="flex flex-col items-center text-center max-w-sm">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Quality Check</h3>
              <p className="text-gray-600">Thorough testing to ensure optimal performance</p>
            </div>
          </div>
        </div>

      </div>
<HomeServices />
    </div>
  )
}

export default Services
