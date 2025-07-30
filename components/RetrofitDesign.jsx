import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
import { Link as RouterLink } from "react-router-dom";

const RetrofitDesign = () => {
  return (
    <div>
      <TopCompnentHero
        title="Retrofit Design"
        description="Transform your property with our expert retrofit design services. We create customized solutions that maximize energy efficiency while preserving your home's character."
        value1="Get Design Quote"
        value2="Learn More"
        image="/images/retrofit-design.jpg"
      onClick2="#details"
        onClick1="/contact"
      />
      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-4">
        <h1 id="details" className="text-2xl font-bold" data-aos="fade-up">
          About Retrofit Design
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }} data-aos="fade-up" data-aos-delay="100">
          Our retrofit design service combines technical expertise with creative solutions to create energy-efficient homes that are comfortable, sustainable, and beautiful. We work closely with you to understand your needs and develop a design that meets your goals.
        </p>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-xl font-bold" data-aos="fade-up">Design Process</h2>
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-start">
                <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">We discuss your goals, requirements, and budget to understand your vision.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold mb-2">Site Survey</h3>
                  <p className="text-gray-600">We conduct a detailed assessment of your property to identify opportunities.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold mb-2">Design Development</h3>
                  <p className="text-gray-600">We create detailed designs and specifications for your retrofit project.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-xl font-bold" data-aos="fade-up">Design Features</h2>
            <div className="grid grid-cols-1 gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Energy Efficiency</h3>
                <p className="text-gray-600">Optimized thermal performance and reduced energy consumption</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Comfort & Health</h3>
                <p className="text-gray-600">Improved indoor air quality and thermal comfort</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">Reduced carbon footprint and environmental impact</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Design Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-bold mb-2">Building Fabric</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Wall insulation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Roof insulation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Floor insulation
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-bold mb-2">Heating & Ventilation</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Heat pumps
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  MVHR systems
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Smart controls
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-bold mb-2">Renewable Energy</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Solar panels
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Battery storage
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Energy management
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Start Your Design Project</h2>
          <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
            Ready to transform your home with an energy-efficient retrofit design? Contact us to discuss your project.
          </p>
          <RouterLink 
            to="/contact"
            className="inline-block bg-[#FF8C00] text-white px-6 py-3 rounded-lg hover:bg-[#E67E00] transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Design Quote
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default RetrofitDesign; 