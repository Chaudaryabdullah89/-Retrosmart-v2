import React from 'react';
import TopCompnentHero from '../components/TopCompnentHero';
import PageTitle from '../components/PageTitle';
import Teams from '../components/Team';

const Grant = () => {
  return (
    <div>
      <PageTitle title="ECO4 Grant Application & Information" />
      <TopCompnentHero
        title="ECO4 Grant"
        description="Free Home Energy Grants to improve your home's energy efficiency, covering insulation, boiler, heating systems, and renewable energy systems."
        value1="Apply Now"
        value2="Learn More"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        onClick2="#details"
        onClick1="#application-form"
      />

      <div className="container max-w-5xl mx-auto px-4 py-16 space-y-8">
        {/* Qualifying Benefits Section */}
        <div id="details" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Qualifying Benefits</h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Barlow" }}>
            Somebody living in the household must receive at least one of these benefits:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Income-based Jobseekers Allowance (JSA)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Income-related ESA</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Child Tax Credit</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Pension Credit (Guarantee)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Pension Credit (Savings)</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Working Tax Credit</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Income Support</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Housing Benefit</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Universal Credit</span>
            </li>
          </ul>
        </div>

        {/* ECO4 Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">ECO4: The Energy Company Obligation Scheme</h2>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Barlow" }}>
            ECO4 is a government scheme that aims to reduce carbon emissions and improve energy efficiency in homes across England, Scotland, and Wales. This scheme provides funding for eligible homeowners to make energy-efficient improvements to their homes, such as installing new insulation, heating systems, and renewable energy systems.
          </p>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Barlow" }}>
            If you're struggling with high energy bills and want to make your home more energy-efficient, ECO4 could be a great option for you. Contact us via our online form or email us to find out more about the scheme and how you can apply for the funding.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">What is ECO4?</h3>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Barlow" }}>
            ECO4 is the latest iteration of the Energy Company Obligation scheme, which was first introduced in 2013. Under this scheme, energy companies are obligated to fund energy-efficient improvements in homes across the UK. The ECO4 scheme is specifically designed to help homeowners who are struggling with high energy bills to make their homes more energy efficient.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">What improvements are covered by ECO4?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Insulation</h4>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                ECO4 provides funding for the installation of loft insulation, cavity wall insulation, and solid wall insulation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Boilers</h4>
              <p className="text-gray-600" style={{ fontFamily: "Barlow" }}>
                If your boiler is over 10 years old and inefficient, you may be eligible for a free boiler replacement under ECO4.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4">Who is eligible for ECO4?</h3>
          <p className="text-gray-600 mb-6" style={{ fontFamily: "Barlow" }}>
            To be eligible for ECO4, you must meet certain criteria, including:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Your total household income must be below £31,000.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">You must own your own home or have the permission of your landlord to carry out improvements.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">You must be in receipt of any of the qualifying benefits listed above.</span>
            </li>
          </ul>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Grant Application Form</h2>
          <form className="space-y-6" action="https://formsubmit.co/info@retrosmart.co.uk" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Post code</label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="epc" className="block text-sm font-medium text-gray-700 mb-1">
                Existing Energy performance Certificate (EPC) rating
              </label>
              <input
                type="text"
                id="epc"
                name="epc"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                placeholder="If not known please find here: Find EPC Rating"
              />
            </div>

            <div>
              <label htmlFor="heating" className="block text-sm font-medium text-gray-700 mb-1">Main Heating Source</label>
              <select
                id="heating"
                name="heating"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              >
                <option value="">Select heating source</option>
                <option value="gas">Gas</option>
                <option value="electric">Electric</option>
                <option value="oil">Oil</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Is your household income less than £31,000 per year?
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="income" value="yes" className="text-amber-600" required />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="income" value="no" className="text-amber-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you or does anyone in your household receive a means tested benefit?
              </label>
              <select
                name="benefit"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                required
              >
                <option value="">Select benefit</option>
                <option value="child-tax-credit">Child Tax Credits (CTC)</option>
                <option value="universal-credit">Universal Credit</option>
                <option value="income-support">Income Support</option>
                <option value="pension-credit">Pension Credit</option>
                <option value="working-tax-credit">Working Tax Credit</option>
                <option value="housing-benefit">Housing Benefit</option>
                <option value="jobseekers-allowance">Jobseekers Allowance</option>
                <option value="esa">Employment and Support Allowance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Are you the homeowner?
              </label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="homeowner" value="yes" className="text-amber-600" required />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="homeowner" value="no" className="text-amber-600" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ECO4 requires multiple measures to be installed. What measures are you interested in?
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" name="measures" value="air-source-heat-pump" className="text-amber-600" />
                  <span className="ml-2">Air Source Heat Pump</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="measures" value="insulation" className="text-amber-600" />
                  <span className="ml-2">Insulation</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="measures" value="boiler" className="text-amber-600" />
                  <span className="ml-2">Boiler</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" name="measures" value="heating-controls" className="text-amber-600" />
                  <span className="ml-2">Heating Controls</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors"
            >
              Submit Application
            </button>
          </form>

        </div>
        <Teams />
      </div>
    </div>
  );
};

export default Grant; 