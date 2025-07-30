import React from 'react'
import TopCompnentHero from './TopCompnentHero'
import viedo from '../src/assets/heroviedo.mp4'
import Paragarh from './Paragarh'
import Team from './Team'

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <TopCompnentHero
        title="About Us"
        description="We are experts in energy efficiency and retrofit solutions, helping homeowners and businesses reduce their energy consumption and carbon footprint."
        value1="Get Free Quote" 
        value2="Learn More"
        image="/images/team-member-2.jpg"
        onClick2="/About-Us#details"
        onClick1="/contact"
      />
      
      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6" data-aos="fade-right" data-aos-delay="100">
              <h2 id="details" className="text-3xl font-bold text-gray-900 flex items-center">
                <span className="w-12 h-1 bg-amber-600 mr-4"></span>
                Who We Are
              </h2>
              <Paragarh text="We are a leading provider of energy efficiency and retrofit solutions, dedicated to helping properties become more sustainable and energy efficient. Our team of experts specializes in a comprehensive range of services including insulation, smart heating controls, and professional retrofit coordination." />
              <Paragarh text="With years of experience in the industry, we take pride in delivering high-quality solutions that help reduce energy consumption, lower utility bills, and improve comfort for our clients." />
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-left" data-aos-delay="200">
              <video 
                src={viedo} 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center" data-aos="fade-up">
            <span className="w-12 h-1 bg-amber-600 mr-4"></span>
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                 data-aos="fade-up" 
                 data-aos-delay="100">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wall Insulation</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                External & internal wall insulation solutions for optimal thermal performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                 data-aos="fade-up" 
                 data-aos-delay="200">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Heating</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                Advanced heating control systems for efficient temperature management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                 data-aos="fade-up" 
                 data-aos-delay="300">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retrofit Services</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                Comprehensive assessment, design and coordination services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center" data-aos="fade-up">
            <span className="w-12 h-1 bg-amber-600 mr-4"></span>
            Our Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50 transition-colors duration-300" 
                   data-aos="fade-right" 
                   data-aos-delay="100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Assessment</h3>
                </div>
                <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                  Comprehensive property evaluation to identify energy efficiency opportunities.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50 transition-colors duration-300" 
                   data-aos="fade-right" 
                   data-aos-delay="200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Design</h3>
                </div>
                <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                  Tailored solutions designed specifically for your property's unique requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-amber-50 transition-colors duration-300" 
                   data-aos="fade-right" 
                   data-aos-delay="300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Installation</h3>
                </div>
                <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                  Expert implementation by our certified professionals with minimal disruption.
                </p>
              </div>
            </div>

            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <img 
                src="/images/EPC-Video_93_layer1.jpeg"
                alt="Retrofit Process"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center" data-aos="fade-up">
            <span className="w-12 h-1 bg-amber-600 mr-4"></span>
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
                 data-aos="zoom-in" 
                 data-aos-delay="100">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Professionals</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                Our team consists of fully qualified and experienced retrofit specialists.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
                 data-aos="zoom-in" 
                 data-aos-delay="200">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                We maintain the highest standards in all our installations and services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
                 data-aos="zoom-in" 
                 data-aos-delay="300">
              <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                Excellent value for money without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center" data-aos="fade-up">
            <span className="w-12 h-1 bg-amber-600 mr-4"></span>
            Our Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" data-aos="flip-left" data-aos-delay="100">
              <img 
                src="/images/team-member-2.jpg" 
                alt="Our Credentials" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="space-y-6" data-aos="fade-left" data-aos-delay="200">
              <p className="text-gray-600 text-lg" style={{ fontFamily: "Barlow" }}>
                In addition to our extensive qualifications in energy efficiency and retrofit, we are accredited with Elmhurst and TrustMark. We hold comprehensive retrofit insurance coverage and collaborate with a wide range of clients, including installers, Local Authorities, Housing Associations, private landlords, and individual homeowners across the UK.
              </p>
              <p className="text-gray-600 text-lg" style={{ fontFamily: "Barlow" }}>
                We identify the most suitable and cost-effective energy efficiency packages for each unique building, providing end-to-end support from initial assessment to post-installation monitoring and evaluation to ensure intended outcomes are achieved.
              </p>
              <p className="text-gray-600 text-lg" style={{ fontFamily: "Barlow" }}>
                We are all affected by daily rise of energy pricing which leads to fuel poverty. To deal with this issue, now and in the future, we need to make sure that our houses are as energy efficient as possible. We can do this by adding insulation, improving heating system and by relying on renewable energy sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <Team />
        </div>
      </section>
    </div>
  )
}

export default AboutUs
