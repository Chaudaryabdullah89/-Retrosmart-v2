import React from "react";
import TopCompnentHero from "./TopCompnentHero";
import Paragarh from "./Paragarh";
const SmartHeatingControls = () => {
  return (
    <div>
      <TopCompnentHero
        title="Smart Heating Controls"
        description="Upgrade your home's heating system with our smart heating controls. Gain precise control over your heating, reduce energy consumption, and enhance comfort."
        value1="Get Free Quote"
        value2="Learn More"
        image="https://starkheatingandgas.com/wp-content/uploads/2023/09/The-Benefits-of-Smart-Heating-Controls-1.jpg"
        onClick2="/Smart-Heating-Controls"
        onClick1="/Contact"
      />
      <div
        id=""
        className="container max-w-5xl mx-auto px-4 py-16 space-y-4 "
      >
        <h1 id="details" className="text-2xl font-bold">
          More about Smart Heating Controls
        </h1>
        <p id="" className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Smart heating controls represent the future of home heating management. These advanced systems allow you to control your heating remotely, create personalized schedules, and optimize energy usage based on your lifestyle and preferences.
          <br />
          <br />
          Our professional installation services ensure that your smart heating system is set up correctly and integrated seamlessly with your existing heating infrastructure.
        </p>
        <hr />
        <div className="w-full h-[400px] rounded-lg mx-auto">
        <iframe className="w-full h-full rounded-lg mx-auto" src="https://www.youtube.com/embed/CihDMcUyXbA" title="Wiser - Smart Heating Controls That Take Care Of Your Home And The Planet | Wiser by Drayton" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          What are smart heating controls?
        </h1>
        <Paragarh text="Smart heating controls are advanced systems that allow you to manage your home's heating remotely using a smartphone app or web interface. They provide precise control over temperature settings, scheduling, and energy usage." />

        <Paragarh text="These systems typically include smart thermostats, smart radiator valves, and sometimes smart boilers. They can learn your heating preferences, adapt to your schedule, and even respond to weather conditions to optimize energy efficiency." />

        <hr className="border-gray-300 mt-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Benefits of Smart Heating Controls
        </h1>

        <p className="pb-4">
          <ul className="list-disc list-inside">
            <li className="text-black font-semibold ml-6 mb-2">Remote control of your heating system from anywhere</li>
            <li className="text-black font-semibold ml-6 mb-2">Energy savings through optimized heating schedules</li>
            <li className="text-black font-semibold ml-6 mb-2">Personalized temperature control for different rooms</li>
            <li className="text-black font-semibold ml-6 mb-2">Integration with other smart home devices</li>
            <li className="text-black font-semibold ml-6 mb-2">Detailed energy usage reports and insights</li>
          </ul>
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Types of Smart Heating Controls
        </h1>
        <p className="pb-4 text-gray-600" style={{ fontFamily: "Barlow" }}>
          We offer various types of smart heating controls:
          <br /><br />
          • Smart Thermostats: Control your entire heating system from one device
          <br />
          • Smart Radiator Valves: Individual room temperature control
          <br />
          • Smart TRVs: Thermostatic Radiator Valves with smart features
          <br />
          • Smart Boiler Controls: Advanced control of your boiler
          <br />
          • Multi-zone Systems: Control different areas of your home independently
        </p>

        <img src="https://www.novismarthome.co.uk/wp-content/uploads/2018/09/Benefits-of-a-Smart-Control-System.jpg" alt="Types of Smart Heating Controls" className="w-[100%] h-[60%] rounded-lg mx-auto" />

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Installation Process
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Our professional installation process includes:
          <br /><br />
          • Initial assessment of your current heating system
          <br />
          • Selection of appropriate smart controls
          <br />
          • Installation of the new system
          <br />
          • Configuration and setup of the smart features
          <br />
          • Testing and demonstration of the system
          <br />
          • Training on how to use the controls effectively
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h1 className="text-2xl  border-gray-300  font-bold pt-6">
          Features and Capabilities
        </h1>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Modern smart heating controls offer a range of features:
          <br /><br />
          • Remote control via smartphone app
          <br />
          • Learning capabilities to adapt to your schedule
          <br />
          • Geofencing to adjust heating based on your location
          <br />
          • Weather compensation to optimize heating
          <br />
          • Energy usage monitoring and reporting
          <br />
          • Integration with voice assistants
        </p>

        <hr className="border-gray-300 mb-10 "  />

        <h2 className="text-lg border-gray-300  font-bold pt-6">
          Energy Savings Potential
        </h2>
        <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
          Smart heating controls can help reduce your energy consumption by up to 30% by ensuring your heating system operates only when needed and at optimal temperatures. The exact savings will depend on your current heating system and usage patterns.
        </p>
      </div>
    </div>
  );
};

export default SmartHeatingControls; 