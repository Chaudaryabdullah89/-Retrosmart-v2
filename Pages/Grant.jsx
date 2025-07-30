import React from 'react';
import TopCompnentHero from '../components/TopCompnentHero';
import PageTitle from '../components/PageTitle';
import Teams from '../components/Team';

const Grant = () => {
  return (
    <div className="bg-gray-50">
      <PageTitle title="ECO4 Grant Application & Information" />
 
   <div>
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ECO4 Grant Application & Information
            </h1>
          <p className="text-md md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          Make your home more energy-efficient and reduce your carbon footprint with government-backed funding. The ECO4 scheme provides grants for eligible homeowners to improve their property's energy performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
           
            {/* <Link to={props.onClick2} className="bg-transparent border-2 border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-green-600 transition duration-300 text-md font-semibold">
              {props.value2}
            </Link> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
    </div>
      <div className="container max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
      

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {[
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Free Improvements",
              description: "Get your home upgraded with insulation, heating systems, and renewable energy solutions at no cost."
            },
            {
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Lower Bills",
              description: "Reduce your monthly energy costs with improved efficiency and modern heating systems."
            },
            {
              icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Eco-Friendly",
              description: "Contribute to a greener future by reducing your home's carbon emissions."
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "Barlow" }}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Qualifying Benefits Section */}
        <div id="details" className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Qualifying Benefits</h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Barlow" }}>
            Somebody living in the household must receive at least one of these benefits:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Income-based Jobseekers Allowance (JSA)",
              "Income-related ESA",
              "Child Tax Credit",
              "Pension Credit (Guarantee)",
              "Pension Credit (Savings)",
              "Working Tax Credit",
              "Income Support",
              "Housing Benefit",
              "Universal Credit"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg" data-aos="fade-up" data-aos-delay={index * 50}>
                <svg className="h-5 w-5 text-amber-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: "Barlow" }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ECO4 Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">About ECO4 Scheme</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">What is ECO4?</h3>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                ECO4 is the latest iteration of the Energy Company Obligation scheme, which was first introduced in 2013. 
                Under this scheme, energy companies are obligated to fund energy-efficient improvements in homes across the UK.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Who is Eligible?</h3>
              <ul className="space-y-2">
                {[
                  "Your total household income must be below £31,000",
                  "You must own your own home or have landlord permission",
                  "You must receive qualifying benefits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600" style={{ fontFamily: "Barlow" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Covered Improvements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    title: "Wall Insulation",
                    description: "External, Internal, and Cavity Wall Insulation"
                  },
                  {
                    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                    title: "Loft & Roof Insulation",
                    description: "Comprehensive Roof and Loft Insulation Solutions"
                  },
                  {
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    title: "Boiler Replacement",
                    description: "Modern, Energy-Efficient Boiler Systems"
                  },
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    title: "Heating Controls",
                    description: "Smart Heating Control Systems"
                  }
                ].map((improvement, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <svg className="h-5 w-5 text-amber-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={improvement.icon} />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">{improvement.title}</h4>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "Barlow" }}>{improvement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-white p-8 rounded-lg shadow-sm" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Apply for ECO4 Grant</h2>
          <form className="space-y-6" action="https://formsubmit.co/info@retrosmart.co.uk" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="town" className="block text-sm font-medium text-gray-700 mb-1">Town</label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Post code</label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="epc" className="block text-sm font-medium text-gray-700 mb-1">
                Existing Energy Performance Certificate (EPC) rating
              </label>
              <input
                type="text"
                id="epc"
                name="epc"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                placeholder="If not known please find here: Find EPC Rating"
              />
            </div>

            <div>
              <label htmlFor="heating" className="block text-sm font-medium text-gray-700 mb-1">Main Heating Source</label>
              <select
                id="heating"
                name="heating"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                required
              >
                <option value="">Select heating source</option>
                <option value="gas">Gas</option>
                <option value="electric">Electric</option>
                <option value="oil">Oil</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <Teams />
    </div>
  );
};

export default Grant; 