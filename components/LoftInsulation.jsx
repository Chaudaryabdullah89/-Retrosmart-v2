import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
const LoftInsulation = () => {
  return (
    <div>
      <TopCompnentHero
        title="Loft Insulation"
        description="Maximize your home's energy efficiency with our professional loft insulation services. Prevent heat loss through your roof and reduce your energy bills significantly."
        value1="Get Free Quote"
        value2="Learn More"
        image="https://www.icecleaning.co.uk/media/images/uploaded/inline/how-does-loft-insulation-work.1707842278.jpg"
        onClick2="/Loft-Insulation#details"
        onClick1="/contact"
      />
      <div
        id=""
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4 "
      >
        <h1 id="details" className="text-2xl font-bold">
          More about Loft Insulation
        </h1>
        <p id="" className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Loft insulation is one of the most cost-effective ways to improve your home's energy efficiency. By adding insulation to your loft space, you can significantly reduce heat loss through the roof, which accounts for up to 25% of a home's total heat loss.
          <br />
          <br />
          Our professional loft insulation services use high-quality materials and expert installation techniques to ensure maximum thermal performance and long-lasting results.
        </p>
        <hr />
        <div className="w-full h-[400px] rounded-lg mx-auto">
        <iframe className="w-full h-full rounded-lg mx-auto" src="https://www.youtube.com/embed/ySc00kho3WE" title="What is roof insulation?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          What is loft insulation?
        </h1>
        <Paragarh text="Loft insulation involves adding a layer of insulating material to the floor of your loft space. This creates a thermal barrier that prevents heat from escaping through the roof, keeping your home warmer in winter and reducing your heating bills." />

        <Paragarh text="The most common types of loft insulation include mineral wool, sheep's wool, and rigid insulation boards. The choice of material depends on various factors including your budget, the type of loft space, and whether you plan to use the loft for storage." />

        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Benefits of Loft Insulation
        </h1>

        <p className="pb-4">
          <ul className="list-disc list-inside">
            <li className="text-black font-semibold ml-6 mb-2">Significant reduction in heating bills</li>
            <li className="text-black font-semibold ml-6 mb-2">Improved thermal comfort throughout the home</li>
            <li className="text-black font-semibold ml-6 mb-2">Reduced carbon footprint</li>
            <li className="text-black font-semibold ml-6 mb-2">Quick return on investment</li>
            <li className="text-black font-semibold ml-6 mb-2">Minimal disruption during installation</li>
          </ul>
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Types of Loft Insulation
        </h1>
        <p className="pb-4 text-gray-600" style={{ fontFamily: "Barlow" }}>
          We offer several types of loft insulation to suit different needs:
          <br /><br />
          • Mineral Wool: The most common and cost-effective option
          <br />
          • Sheep's Wool: Natural, sustainable, and excellent thermal performance
          <br />
          • Rigid Insulation Boards: Ideal for loft conversions or storage areas
          <br />
          • Multi-layer Insulation: Combines different materials for optimal performance
        </p>

        <img src="https://api.content.travisperkins.co.uk/site/binaries/content/gallery/loft-insulation-buying-guide-v2.jpg" alt="Types of Loft Insulation" className="w-[100%] h-[60%] rounded-lg mx-auto" />

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Installation Process
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our professional installation process includes:
          <br /><br />
          • Initial assessment of your loft space
          <br />
          • Removal of any existing insulation if necessary
          <br />
          • Installation of new insulation material
          <br />
          • Ensuring proper ventilation is maintained
          <br />
          • Final inspection and quality checks
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Important Considerations
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Before installing loft insulation, several factors need to be considered:
          <br /><br />
          • The condition of your roof and loft space
          <br />
          • Existing ventilation requirements
          <br />
          • Whether you plan to use the loft for storage
          <br />
          • The presence of any electrical wiring or pipes
          <br />
          • Access to the loft space
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h2 className="text-lg border-gray-300  font-bold pt-6">
          What U-value does it provide?
        </h2>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Properly installed loft insulation can achieve U-values of around 0.16 W/m²K, significantly improving the thermal performance of your roof. The exact U-value achieved will depend on the type and thickness of insulation used.
        </p>
      </div>
    </div>
  );
};

export default LoftInsulation; 