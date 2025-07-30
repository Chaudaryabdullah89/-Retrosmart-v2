import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
import { Link as RouterLink } from "react-router-dom";

const SmartHeatingControls = () => {
  return (
    <div>
      <TopCompnentHero
        title="Smart Heating Controls"
        description="Take control of your home's heating with our advanced smart heating control systems. Save energy and enhance comfort with intelligent temperature management."
        value1="Get Quote"
        value2="Learn More"
        image="/images/The-Benefits-of-Smart-Heating-Controls-1.jpg"
     onClick2="#details"
        onClick1="/contact"
      />
      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-4">
        <h1 id="details" className="text-2xl font-bold" data-aos="fade-up">
          About Smart Heating Controls
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }} data-aos="fade-up" data-aos-delay="100">
          Our smart heating control systems give you complete control over your home's temperature, allowing you to manage your heating efficiently and reduce energy consumption. With features like remote control, scheduling, and energy monitoring, you can optimize your heating system for maximum comfort and savings.
        </p>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Remote control
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Smart scheduling
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Energy monitoring
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Benefits</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Energy savings
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Enhanced comfort
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Easy control
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4">System Types</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Smart thermostats
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Zone controls
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Learning systems
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-2">System Assessment</h3>
                <p className="text-gray-600">We evaluate your current heating system and recommend the best smart control solution.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-2">Installation</h3>
                <p className="text-gray-600">Our experts install your new smart heating controls with minimal disruption.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-2">Setup & Training</h3>
                <p className="text-gray-600">We configure your system and show you how to use all its features.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-600">We provide continuous support to ensure your system performs optimally.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Get Smart Heating Controls</h2>
          <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
            Ready to upgrade your heating system with smart controls? Contact us to discuss your requirements.
          </p>
          <RouterLink 
            to="/contact"
            className="inline-block bg-[#FF8C00] text-white px-6 py-3 rounded-lg hover:bg-[#E67E00] transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Quote
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default SmartHeatingControls; 