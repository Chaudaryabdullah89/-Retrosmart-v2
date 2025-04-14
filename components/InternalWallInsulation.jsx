import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
const InternalWallInsulation = () => {
  return (
    <div>
      <TopCompnentHero
        title="Internal Wall Insulation"
        description="Enhance your home's energy efficiency with our professional internal wall insulation services. Reduce heat loss and create a more comfortable living environment."
        value1="Get Free Quote"
        value2="Learn More"
        image="https://cdn.prod.website-files.com/63f506047d103546cf06bf03/640512ac8128be10a7f99cf3_internal-wall-insulation-1.jpg"
        onClick2="/Internal-Wall-Insulation"
        onClick1="/Contact"
      />
      <div
        id=""
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4 "
      >
        <h1 id="details" className="text-2xl font-bold">
          More about Internal Wall Insulation
        </h1>
        <p id="" className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Internal wall insulation is a method of insulating the interior surfaces of external walls to improve thermal efficiency. This approach is particularly useful for properties where external insulation isn't suitable or desirable. It involves adding insulation material to the inside of external walls, which is then covered with plasterboard or other finishes.
          <br />
          <br />
          This method is often chosen for properties in conservation areas, listed buildings, or where the external appearance needs to be preserved. While it does reduce internal space slightly, it can be a more cost-effective solution in many cases.
        </p>
        <hr />
        <img
          src="https://cdn.mos.cms.futurecdn.net/rfUFcAgdeAcpW9NN9bQrqQ-650-80.jpg.webp"
          className="w-[100%] h-[60%] rounded-lg mx-auto"
          alt="Internal Wall Insulation Installation"
        />
        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          What is internal wall insulation?
        </h1>
        <Paragarh text="Internal wall insulation involves adding a layer of insulation material to the inside of external walls. This can be done using various methods, including rigid insulation boards, insulated plasterboard, or stud walls with insulation between them." />

        <Paragarh text="The choice of insulation method depends on several factors, including the type of property, the condition of the walls, and the desired level of thermal performance. Each method has its advantages and considerations, which our experts can help you navigate." />

        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Advantages of Internal Wall Insulation
        </h1>

        <p className="pb-4">
          <ul className="list-disc list-inside">
            <li className="text-black font-semibold ml-6 mb-2">Preserves the external appearance of the building</li>
            <li className="text-black font-semibold ml-6 mb-2">Can be installed room by room, allowing for phased implementation</li>
            <li className="text-black font-semibold ml-6 mb-2">Generally more cost-effective than external insulation</li>
            <li className="text-black font-semibold ml-6 mb-2">Suitable for properties where external changes are restricted</li>
          </ul>
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Considerations for Internal Wall Insulation
        </h1>
        <p className="pb-4 text-gray-600" style={{ fontFamily: "Barlow" }}>
          Before installing internal wall insulation, several important factors need to be considered:
          <br /><br />
          • The condition of existing walls and any damp issues
          <br />
          • The need to relocate electrical sockets and switches
          <br />
          • The impact on room sizes (typically reduces by 100mm per wall)
          <br />
          • The need to maintain adequate ventilation
          <br />
          • The importance of proper detailing around windows and doors
        </p>

        <img src="https://cdn.mos.cms.futurecdn.net/fs6zFLVUwZ3tAHtpFANMcR-970-80.jpg.webp" alt="Internal Wall Insulation Detail" className="w-[100%] h-[60%] rounded-lg mx-auto" />

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Types of Internal Wall Insulation
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          There are several methods of installing internal wall insulation:
          <br /><br />
          1. Insulated Plasterboard: A quick and effective solution that combines insulation with a finished surface
          <br />
          2. Stud Wall with Insulation: Creates a cavity that can be filled with various insulation materials
          <br />
          3. Rigid Insulation Boards: Applied directly to the wall surface
          <br />
          4. Flexible Insulation: Suitable for irregular wall surfaces
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Installation Process
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our professional installation process includes:
          <br /><br />
          • Initial assessment and survey
          <br />
          • Preparation of walls and removal of existing fixtures
          <br />
          • Installation of insulation materials
          <br />
          • Finishing with plasterboard and plaster
          <br />
          • Reinstallation of electrical fittings
          <br />
          • Final inspection and quality checks
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h2 className="text-lg border-gray-300  font-bold pt-6">
          What U-value does it provide?
        </h2>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Internal wall insulation can achieve U-values of around 0.30 W/m²K, significantly improving the thermal performance of your walls. The exact U-value achieved will depend on the type of insulation used and the thickness of the material.
        </p>
      </div>
    </div>
  );
};

export default InternalWallInsulation; 