import React from 'react'
import { Link } from "react-router-dom";

const HomeServices = () => {

  const services = [
    {
      id: 1,
      title: 'External Wall Insulation',
      image: '/images/4-External-Wall-Insulation-Problems-How-to-Solve-Them.jpg',
      description: "We provide external wall insulation which is an effective way to improve your home's energy efficiency and reduce heating bills.",
      link: 'external-wall-insulation'
    },
    {
      id: 2,
      title: 'Internal Wall Insulation',
      image: 'https://www.retrosmart.co.uk/images/PnpUHNe8txt5nea57EPtLW-970-80.jpg.webp',
      description: "We provide insulation to the interior face of external walls in order to improve the thermal performance of the property.",
      link: 'internal-wall-insulation'
    },
    {
      id: 3,
      title: 'Loft Insulation',
      image: 'https://www.retrosmart.co.uk/images/loft-insulation-buying-guide-v2.jpg',
      description: "We provide loft insulation which can cut your energy bills and help keep your home warm, as it prevents heat escaping through the loft. It is an effective way to save your energy.",
      link: 'loft-insulation'
    },
    {
      id: 4,
      title: 'Smart Heating Controls',
      image: 'https://www.retrosmart.co.uk/images/Benefits-of-a-Smart-Control-System.jpg',
      description: "We provide smart heating controls which helps keep your home comfortable but can reduce heating and cooling costs.",
      link: 'smart-heating-controls'
    },
    {
      id: 5,
      title: 'Retrofit Assessment',
      image: '/images/Energize-Your-Home.webp',
      description: "We conduct Retrofit Assessments to collect the data to be used by retrofit coordinator.",
      link: 'retrofit-assessment'
    },
    {
      id: 6,
      title: 'Retrofit Coordination',
      image: '/images/House-Rating-800x450.webp',
      description: "We provide retrofit coordination services to installers, social landlords and home owners.",
      link: 'Retrofit-coordination'
    },
    {
      id: 7,
      title: 'Retrofit Design',
      image: '/images/construction-design.jpg',
      description: "Our retrofit designers use the assessment to design relevant energy efficiency improvements to the dwellings.",
      link: 'retrofit-design'
    },
    {
      id: 8,
      title: 'Retrofit Evaluation',
      image: '/images/Retrofit-Coordination.jpeg',
      description: "Our Retrofit Evaluation service ensures that all retrofit measures are performing as intended.",
      link: 'retrofit-evaluation'
    }
  ]



  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16' data-aos="fade-up">
          <h2 className='text-3xl md:text-4xl font-bold text-emerald-800 mb-4' style={{ fontFamily: 'Lora' }}>
            Our Retrofit Services
          </h2>
          <div className='w-24 h-1 bg-amber-600 mx-auto mb-8'></div>
          <p className='text-gray-600 max-w-2xl mx-auto' style={{ fontFamily: 'Barlow' }}>
            Comprehensive energy efficiency solutions for your home
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className='group flex flex-col items-center text-center border-2 border-emerald-800/10 rounded-lg p-5'
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className='relative mb-6'>
                <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-800/10 group-hover:border-amber-600/20 transition-all duration-300'>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
              </div>
              
              <h3 className='text-xl font-semibold text-emerald-800 mb-3' style={{ fontFamily: 'Lora' }}>
                {service.title}
              </h3>
              <p className='text-gray-600 text-sm mb-6' style={{ fontFamily: 'Barlow' }}>
                {service.description}
              </p>
              <Link 
                to={`/${service.link}`}
                className='px-6 py-2 bg-transparent text-emerald-800 border border-emerald-800 hover:bg-amber-600 hover:text-white hover:border-amber-600 rounded-full transition-all duration-300'
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServices
