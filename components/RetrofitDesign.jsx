import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
const RetrofitDesign = () => {
  return (
    <div>
      <TopCompnentHero
        title="Retrofit Design"
        description="Get a comprehensive retrofit design that optimizes your property's energy efficiency while maintaining its character and functionality."
        value1="Get Free Quote"
        value2="Learn More"
        image="https://ecotarget.co.uk/wp-content/uploads/2023/02/retrofit-design.jpg"
        onClick2="/Retrofit-Design#details"
        onClick1="/contact"
      />
      <div
        id=""
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4 "
      >
        <h1 id="details" className="text-2xl font-bold">
          More about Retrofit Design
        </h1>
        <p id="" className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Retrofit design is a crucial step in the energy efficiency improvement process. Our expert designers create detailed plans that specify how energy efficiency measures should be implemented in your property, ensuring optimal performance while maintaining the building's character and functionality.
          <br />
          <br />
          We take into account the unique characteristics of your property, local building regulations, and your specific requirements to create a design that delivers maximum energy efficiency improvements.
        </p>
        <hr />
        <img
          src="https://i0.wp.com/eco4gurus.co.uk/wp-content/uploads/2023/08/construction-design.jpg?fit=346%2C346&ssl=1"
          className="w-[100%] h-[60%] rounded-lg mx-auto"
          alt="Retrofit Design Process"
        />
        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          What is Retrofit Design?
        </h1>
        <Paragarh text="Retrofit design involves creating detailed specifications for energy efficiency improvements to existing buildings. This includes selecting appropriate materials, specifying installation methods, and ensuring that all measures work together effectively." />

        <Paragarh text="The design process considers the building's existing structure, materials, and systems, as well as the local climate and building regulations. It aims to achieve the best possible energy performance while maintaining the building's character and functionality." />

        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Benefits of Professional Retrofit Design
        </h1>

        <p className="pb-4">
          <ul className="list-disc list-inside">
            <li className="text-black font-semibold ml-6 mb-2">Optimized energy performance</li>
            <li className="text-black font-semibold ml-6 mb-2">Preserved building character</li>
            <li className="text-black font-semibold ml-6 mb-2">Compliance with regulations</li>
            <li className="text-black font-semibold ml-6 mb-2">Cost-effective solutions</li>
            <li className="text-black font-semibold ml-6 mb-2">Minimized disruption during implementation</li>
          </ul>
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Design Process
        </h1>
        <p className="pb-4 text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our design process includes:
          <br /><br />
          • Detailed property assessment
          <br />
          • Energy performance analysis
          <br />
          • Material and system selection
          <br />
          • Technical specification development
          <br />
          • Construction detailing
          <br />
          • Regulatory compliance checking
        </p>

        <img src="https://sanrachana.in/wp-content/uploads/2024/08/Retrofit-design-1-1024x702.jpg" alt="Retrofit Design Tools" className="w-[100%] h-[60%] rounded-lg mx-auto" />

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Key Design Considerations
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our designs consider:
          <br /><br />
          • Building fabric improvements
          <br />
          • Heating and ventilation systems
          <br />
          • Renewable energy integration
          <br />
          • Moisture management
          <br />
          • Thermal bridging
          <br />
          • Air tightness
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Design Deliverables
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our design package includes:
          <br /><br />
          • Detailed technical specifications
          <br />
          • Construction drawings
          <br />
          • Material schedules
          <br />
          • Installation instructions
          <br />
          • Performance calculations
          <br />
          • Regulatory compliance documentation
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h2 className="text-lg border-gray-300  font-bold pt-6">
          Why Choose Our Design Service?
        </h2>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our retrofit design service offers:
          <br /><br />
          • Experienced and qualified designers
          <br />
          • Comprehensive design solutions
          <br />
          • Attention to building character
          <br />
          • Regulatory compliance expertise
          <br />
          • Practical and cost-effective solutions
        </p>
      </div>
    </div>
  );
};

export default RetrofitDesign; 