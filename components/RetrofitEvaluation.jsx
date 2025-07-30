import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
import { Link as RouterLink } from "react-router-dom";

const RetrofitEvaluation = () => {
  return (
    <div>
      <TopCompnentHero
        title="Retrofit Evaluation"
        description="Measure the success of your retrofit project with our comprehensive evaluation services. We help you understand the impact of your energy efficiency improvements."
        value1="Get Evaluation"
        value2="Learn More"
        image="/images/retrofit-evaluation.jpg"
     onClick2="#details"
        onClick1="/contact"
      />
      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-4">
        <h1 id="details" className="text-2xl font-bold" data-aos="fade-up">
          About Retrofit Evaluation
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }} data-aos="fade-up" data-aos-delay="100">
          Our retrofit evaluation service helps you understand the effectiveness of your energy efficiency improvements. We measure performance, identify areas for further improvement, and provide detailed reports on the impact of your retrofit measures.
        </p>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Energy consumption
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Thermal performance
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Air quality
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Evaluation Methods</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Energy monitoring
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Thermal imaging
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Air tightness testing
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4">Outcome Analysis</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Cost savings
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Carbon reduction
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Comfort improvement
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Evaluation Process</h2>
          <div className="space-y-6">
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-2">Pre-Evaluation Assessment</h3>
                <p className="text-gray-600">We establish baseline measurements and identify key performance indicators.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-2">Data Collection</h3>
                <p className="text-gray-600">We gather comprehensive data on energy use, thermal performance, and comfort levels.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-2">Analysis</h3>
                <p className="text-gray-600">We analyze the data to evaluate the effectiveness of retrofit measures.</p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-[#FF8C00] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-2">Recommendations</h3>
                <p className="text-gray-600">We provide detailed recommendations for further improvements.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Get Your Evaluation</h2>
          <p className="text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="100">
            Ready to evaluate the success of your retrofit project? Contact us to schedule your evaluation.
          </p>
          <RouterLink 
            to="/contact"
            className="inline-block bg-[#FF8C00] text-white px-6 py-3 rounded-lg hover:bg-[#E67E00] transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule Evaluation
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default RetrofitEvaluation; 