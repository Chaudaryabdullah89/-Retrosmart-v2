import React from 'react'
import Button from './button'
import video from '../src/assets/heroviedo.mp4'
import Paragarh from './Paragarh'
const Hero = () => {
  return (
    <div className='grid max-w-7xl  mx-auto grid-cols-1 md:grid-cols-2 gap-8 px-4 my-4 md:my-32 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'>
     <div className='flex flex-col text-left space-y-3 sm:space-y-4 md:space-y-5 justify-center order-2 md:order-1 mt-6 md:mt-0'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold w-full sm:w-[90%] md:w-[80%]'>Providing Affordable and Sustainable Solutions.</h1>
        <div className='flex flex-row gap-2 items-center'>
          <hr className='w-12 sm:w-16 md:w-20 h-1 bg-amber-600' />
         <span className="text-amber-600 font-semibold text-sm sm:text-base" style={{ fontFamily: 'Barlow' }}>Trusted by homeowners & businesses</span>
        </div>
      <Paragarh className='w-full' text='Retro Smart is an independent retrofit consultancy providing PAS2035 compliant retrofit assessment, design and retrofit coordination. Retro Smart provides these retrofit services to Housing Associations, Local Authorities and to other businesses providing energy efficient measures through publicly funded projects such as Energy Company Obligation.' />
        <div className='mt-2 sm:mt-4'>
          <Button value='Get Started' />
        </div>
     </div>
     <div className='order-1 md:order-2 h-[250px] sm:h-[350px] md:h-auto '>
      <video src={video} autoPlay muted loop className='w-full h-full rounded-lg object-cover shadow-lg border-2 border-amber-600 rounded-lg' />
     </div>
    </div>
  )
}

export default Hero
