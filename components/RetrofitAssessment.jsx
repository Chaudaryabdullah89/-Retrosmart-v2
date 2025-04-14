import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
const RetrofitAssessment = () => {
  return (
    <div>
      <TopCompnentHero
        title="Retrofit Assessment"
        description="Get a comprehensive assessment of your property's energy efficiency and identify the best retrofit solutions to improve its performance."
        value1="Get Free Quote"
        value2="Learn More"
        image="/images/team-member-4.jpg"
        onClick2="/Retrofit-Assessment"
        onClick1="/Contact"
      />
      <div
        id=""
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4 "
      >
        <h1 id="details" className="text-2xl font-bold">
          More about Retrofit Assessment
        </h1>
        <p id="" className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          A retrofit assessment is a comprehensive evaluation of your property's current energy performance and potential for improvement. This detailed analysis helps identify the most effective measures to enhance your home's energy efficiency and reduce carbon emissions.
          <br />
          <br />
          Our expert assessors use advanced tools and techniques to provide you with a clear understanding of your property's energy performance and recommend the most suitable retrofit solutions.
        </p>
        <hr />
        <img
          src="/images/team-member-5.jpg"
          className="w-[100%] h-[60%] rounded-lg mx-auto"
          alt="Retrofit Assessment Process"
        />
        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          What is a Retrofit Assessment?
        </h1>
        <Paragarh text="A retrofit assessment is a detailed evaluation of your property's energy performance, identifying areas where energy efficiency can be improved. It considers factors such as building fabric, heating systems, ventilation, and renewable energy potential." />

        <Paragarh text="The assessment provides a roadmap for improving your property's energy efficiency, helping you make informed decisions about which retrofit measures to implement and in what order." />

        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Benefits of Retrofit Assessment
        </h1>

        <p className="pb-4">
          <ul className="list-disc list-inside">
            <li className="text-black font-semibold ml-6 mb-2">Identifies the most cost-effective energy efficiency measures</li>
            <li className="text-black font-semibold ml-6 mb-2">Provides a clear roadmap for property improvements</li>
            <li className="text-black font-semibold ml-6 mb-2">Helps prioritize retrofit measures based on impact and cost</li>
            <li className="text-black font-semibold ml-6 mb-2">Supports access to funding and grants</li>
            <li className="text-black font-semibold ml-6 mb-2">Ensures compliance with building regulations</li>
          </ul>
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Assessment Process
        </h1>
        <p className="pb-4 text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our comprehensive assessment process includes:
          <br /><br />
          • Detailed property survey and measurements
          <br />
          • Thermal imaging and air tightness testing
          <br />
          • Analysis of current heating and ventilation systems
          <br />
          • Assessment of building fabric and insulation
          <br />
          • Evaluation of renewable energy potential
          <br />
          • Production of detailed report and recommendations
        </p>

        <img src="/images/Energize-Your-Home.webp" alt="Retrofit Assessment Tools" className="w-[100%] h-[60%] rounded-lg mx-auto" />

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Key Areas Assessed
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our assessment covers all critical aspects of your property:
          <br /><br />
          • Building fabric and thermal performance
          <br />
          • Heating and hot water systems
          <br />
          • Ventilation and air quality
          <br />
          • Lighting and electrical systems
          <br />
          • Renewable energy potential
          <br />
          • Water efficiency
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Assessment Report
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Following the assessment, you'll receive a detailed report that includes:
          <br /><br />
          • Current energy performance rating
          <br />
          • Identified improvement opportunities
          <br />
          • Prioritized list of recommended measures
          <br />
          • Estimated costs and potential savings
          <br />
          • Available funding and grant options
          <br />
          • Implementation timeline and phasing recommendations
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h2 className="text-lg border-gray-300  font-bold pt-6">
          Next Steps After Assessment
        </h2>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          After receiving your assessment report, we can help you:
          <br /><br />
          • Develop a detailed retrofit plan
          <br />
          • Access available funding and grants
          <br />
          • Coordinate with contractors and specialists
          <br />
          • Monitor and verify the effectiveness of implemented measures
        </p>
      </div>
    </div>
  );
};

export default RetrofitAssessment; 