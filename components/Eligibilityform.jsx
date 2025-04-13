import React from 'react'

const Eligibilityform = () => {
  return (
    
    <section className='py-20 border-t-2 border-gray-200 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <img 
            src="https://eco4grants.co.uk/wp-content/uploads/2024/07/6580d2de5a248f6ff386e2fc-1-1-1-1024x695.png"
            alt="Gov logo" 
            className='w-32 mx-auto mb-6'
          />
          <h2 className='text-3xl font-bold text-emerald-800 mb-4' style={{ fontFamily: 'Lora' }}>
            Check Your Eligibility
          </h2>
          <p className='text-gray-600' style={{ fontFamily: 'Barlow' }}>
            Please complete the form to check your eligibility
          </p>
        </div>

        <form 
          className='relative rounded-xl shadow-lg p-8 overflow-hidden'
          style={{
            backgroundImage: 'url("https://retrosmart.co.uk/images/Mainformbg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          action="https://formsubmit.co/info@retrosmart.co.uk"
          method="POST"
        >
          {/* Overlay */}
          <div className='absolute inset-0 bg-black/30'></div>
          
          <div className='relative z-10'>
            {/* Homeowner Question */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Are you a homeowner?
              </label>
              <div className='flex gap-8'>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="homeowner" 
                    value="yes" 
                    className='w-5 h-5 text-amber-600 border-gray-300 focus:ring-amber-600'
                  />
                  <span className='text-white' style={{ fontFamily: 'Barlow' }}>Yes</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="homeowner" 
                    value="no" 
                    className='w-5 h-5 text-amber-600 border-gray-300 focus:ring-amber-600'
                  />
                  <span className='text-white' style={{ fontFamily: 'Barlow' }}>No</span>
                </label>
              </div>
            </div>

            {/* Boiler Question */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Was your boiler installed before 2005?
              </label>
              <div className='flex gap-8'>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="boiler" 
                    value="yes" 
                    className='w-5 h-5 text-amber-600 border-gray-300 focus:ring-amber-600'
                  />
                  <span className='text-white' style={{ fontFamily: 'Barlow' }}>Yes</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="boiler" 
                    value="no" 
                    className='w-5 h-5 text-amber-600 border-gray-300 focus:ring-amber-600'
                  />
                  <span className='text-white' style={{ fontFamily: 'Barlow' }}>No</span>
                </label>
              </div>
            </div>

            {/* Benefits Question */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Are you or anyone in your household receiving benefits?
              </label>
              <div className='flex gap-8'>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="benefits" 
                    value="yes" 
                    className='w-5 h-5 text-amber-600 border-gray-300 focus:ring-amber-600'
                  />
                  <span className='text-white' style={{ fontFamily: 'Barlow' }}>Yes</span>
                </label>
                <label className='flex items-center space-x-2 cursor-pointer'>
                  <input 
                    type="radio" 
                    name="benefits" 
                    value="no" 
                    className='w-5 h-5 text-amber-600 border-gray-300 focus:ring-amber-600'
                  />
                  <span className='text-white' style={{ fontFamily: 'Barlow' }}>No</span>
                </label>
              </div>
            </div>

            {/* Benefit Type Dropdown */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Identify your benefit?
              </label>
              <select 
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white/90'
                style={{ fontFamily: 'Barlow' }}
              >
                <option value="">Choose...</option>
                <option value="Child Tax Credit">Child Tax Credit</option>
                <option value="Working Tax Credit">Working Tax Credit</option>
                <option value="Universal Credit">Universal Credit</option>
                <option value="Housing Benefit">Housing Benefit</option>
                <option value="Income Support">Income Support</option>
                <option value="Pension Credit Guarantee Credit">Pension Credit Guarantee Credit</option>
                <option value="Pension Credit Saving Credit">Pension Credit Saving Credit</option>
                <option value="Income Based Jobseekers Allowance">Income Based Jobseekers Allowance</option>
                <option value="Employment & Support Allowance">Employment & Support Allowance</option>
                <option value="Child Benefit">Child Benefit</option>
                <option value="None of the above">None of the above</option>
              </select>
            </div>

            {/* Property Type Dropdown */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Select property type?
              </label>
              <select 
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white/90'
                style={{ fontFamily: 'Barlow' }}
              >
                <option value="">Choose...</option>
                <option value="Mid Terraced House">Mid Terraced House</option>
                <option value="End Terraced House / Semi Detached House">End Terraced House / Semi Detached House</option>
                <option value="Detached House">Detached House</option>
                <option value="Semi Detached Bungalow">Semi Detached Bungalow</option>
                <option value="Detached Bungalow">Detached Bungalow</option>
                <option value="Flat/Maisonette">Flat/Maisonette</option>
              </select>
            </div>

            {/* Heating System Dropdown */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                How do you keep your home warm?
              </label>
              <select 
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white/90'
                style={{ fontFamily: 'Barlow' }}
              >
                <option value="">Choose...</option>
                <option value="Electric Room Heaters">Electric Room Heaters</option>
                <option value="Inefficient Electric Storage Heaters">Inefficient Electric Storage Heaters</option>
                <option value="No Heating system present">No Heating system present</option>
                <option value="Back Boiler With Gas Fire">Back Boiler With Gas Fire</option>
                <option value="Gas Back Boiler With Radiators">Gas Back Boiler With Radiators</option>
                <option value="Combi boiler With Radiators">Combi boiler With Radiators</option>
                <option value="Gas Warm Air System">Gas Warm Air System</option>
                <option value="Oil Boiler To Radiators">Oil Boiler To Radiators</option>
                <option value="No Boiler & Radiator">No Boiler & Radiator</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Insulation Measure Dropdown */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Which insulation measure are you interested in?
              </label>
              <select 
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white/90'
                style={{ fontFamily: 'Barlow' }}
              >
                <option value="">Choose...</option>
                <option value="External Wall Insulation">External Wall Insulation</option>
                <option value="Internal Wall Insulation">Internal Wall Insulation</option>
                <option value="Cavity Wall Insulation">Cavity Wall Insulation</option>
                <option value="Loft Insulation">Loft Insulation</option>
                <option value="Room in Roof Insulation">Room in Roof Insulation</option>
                <option value="Flat Roof Insulation">Flat Roof Insulation</option>
              </select>
            </div>

            {/* Contact Time Dropdown */}
            <div className='mb-8'>
              <label className='block text-lg font-semibold text-white mb-4' style={{ fontFamily: 'Lora' }}>
                Best time to contact you?
              </label>
              <select 
                className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all duration-300 bg-white/90'
                style={{ fontFamily: 'Barlow' }}
              >
                <option value="">Choose...</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.retrosmart.co.uk/submit" />

            {/* Submit Button */}
            <div className='text-center'>
              <button 
                type="submit"
                className='px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-emerald-800 transition-all duration-300 transform hover:scale-105'
                style={{ fontFamily: 'Barlow' }}
              >
                Submit Application
              </button>
            </div>
          </div>
        </form>
    </div>
    </section>
  )
}

export default Eligibilityform
