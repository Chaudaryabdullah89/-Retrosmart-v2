import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
import { Link as RouterLink } from "react-router-dom";

const RetrofitCoordination = () => {
  return (
    <div>
      <TopCompnentHero
        title="Retrofit Coordination"
        description="Let us manage your entire retrofit project from start to finish. Our expert coordination services ensure smooth implementation of energy efficiency measures."
        value1="Get Started"
        value2="Learn More"
        image="/images/team-member-2.jpg"
     onClick2="#details"
        onClick1="/contact"
      />
      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-4">
        <h1 id="details" className="text-2xl font-bold" data-aos="fade-up">
          About Retrofit Coordination
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }} data-aos="fade-up" data-aos-delay="100">
          Our retrofit coordination service takes the stress out of managing your energy efficiency improvements. We handle all aspects of your project, from initial planning to final completion, ensuring everything runs smoothly and efficiently.
        </p>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">Project Planning</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Timeline development
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Resource allocation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Budget management
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Contractor Management</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Contractor selection
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Quality control
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Progress monitoring
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4">Project Delivery</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Schedule management
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Issue resolution
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Final inspection
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Our Coordination Process</h2>
          <div className="space-y-6">
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-2">Initial Consultation</h3>
                <p className="text-gray-600">We discuss your goals and requirements, assess your property, and develop a comprehensive plan.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-2">Contractor Selection</h3>
                <p className="text-gray-600">We carefully select and vet contractors who specialize in the required retrofit measures.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-2">Project Management</h3>
                <p className="text-gray-600">We oversee the entire project, ensuring work is completed to the highest standards.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">We conduct thorough inspections to ensure all work meets our high standards.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Start Your Project</h2>
          <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
            Ready to improve your home's energy efficiency? Let us coordinate your retrofit project for a stress-free experience.
          </p>
          <RouterLink 
            to="/contact"
            className="inline-block bg-[#FF8C00] text-white px-6 py-3 rounded-lg hover:bg-[#E67E00] transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default RetrofitCoordination; 