import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
import { Link as RouterLink } from "react-router-dom";

const RetrofitAssessment = () => {
  return (
    <div>
      <TopCompnentHero
        title="Retrofit Assessment"
        description="Get a comprehensive assessment of your property's energy performance and identify opportunities for improvement with our expert retrofit assessment services."
        value1="Book Assessment"
        value2="Learn More"
        image="/images/team-member-4.jpg"
       onClick2="#details"
        onClick1="/contact"
      />
      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-4">
        <h1 id="details" className="text-2xl font-bold" data-aos="fade-up">
          About Retrofit Assessment
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }} data-aos="fade-up" data-aos-delay="100">
          A retrofit assessment is a detailed evaluation of your property's current energy performance and potential for improvement. Our expert assessors use advanced tools and techniques to identify the most effective energy-saving measures for your home.
        </p>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4" data-aos="fade-right">
            <h2 className="text-xl font-bold" data-aos="fade-up">What We Assess</h2>
            <ul className="space-y-2" data-aos="fade-up" data-aos-delay="100">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Building fabric and insulation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Heating and ventilation systems
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Energy consumption patterns
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Potential for renewable energy
              </li>
            </ul>
          </div>

          <div className="space-y-4" data-aos="fade-left">
            <h2 className="text-xl font-bold" data-aos="fade-up">Assessment Process</h2>
            <ul className="space-y-2" data-aos="fade-up" data-aos-delay="100">
              <li className="flex items-center">
                <span className="text-[#FF8C00] mr-2">1.</span>
                Initial property survey
              </li>
              <li className="flex items-center">
                <span className="text-[#FF8C00] mr-2">2.</span>
                Energy performance analysis
              </li>
              <li className="flex items-center">
                <span className="text-[#FF8C00] mr-2">3.</span>
                Detailed recommendations
              </li>
              <li className="flex items-center">
                <span className="text-[#FF8C00] mr-2">4.</span>
                Cost-benefit analysis
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Assessment Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <h3 className="font-bold mb-2">Energy Savings</h3>
              <p className="text-gray-600">Identify opportunities to reduce energy consumption and lower bills</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-bold mb-2">Comfort Improvement</h3>
              <p className="text-gray-600">Enhance thermal comfort and indoor air quality</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-bold mb-2">Property Value</h3>
              <p className="text-gray-600">Increase your property's value and marketability</p>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Book Your Assessment</h2>
          <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
            Ready to improve your home's energy performance? Book a comprehensive retrofit assessment with our experts today.
          </p>
          <RouterLink 
            to="/contact"
            className="inline-block bg-[#FF8C00] text-white px-6 py-3 rounded-lg hover:bg-[#E67E00] transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule Assessment
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default RetrofitAssessment; 