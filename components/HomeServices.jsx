import React from 'react'

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: 'External Wall Insulation',
      image: 'https://retrosmart.co.uk/images/externalwallinsulation.jpeg',
      description: "We provide external wall insulation which is an effective way to improve your home's energy efficiency and reduce heating bills.",
      link: 'External-Wall-Insulation'
    },
    {
      id: 2,
      title: 'Internal Wall Insulation',
      image: 'https://retrosmart.co.uk/images/internal wall insulation.jpeg',
      description: "We provide insulation to the interior face of external walls in order to improve the thermal performance of the property.",
      link: 'Internal-Wall-Insulation'
    },
    {
      id: 3,
      title: 'Loft Insulation',
      image: 'https://retrosmart.co.uk/images/Loft Insulation.jpeg',
      description: "We provide loft insulation which can cut your energy bills and help keep your home warm, as it prevents heat escaping through the loft. It is an effective way to save your energy.",
      link: 'Loft-Insulation'
    },
    {
      id: 4,
      title: 'Smart Heating Controls',
      image: 'https://retrosmart.co.uk/images/Smart Heating Controls.jpeg',
      description: "We provide smart heating controls which helps keep your home comfortable but can reduce heating and cooling costs.",
      link: 'smart-heating-controls'
    },
    {
      id: 5,
      title: 'Retrofit Assessment',
      image: 'https://retrosmart.co.uk/images/bg_3.jpg',
      description: "We conduct Retrofit Assessments to collect the data to be used by retrofit coordinator.",
      link: 'Retrofit-Assessment'
    },
    {
      id: 6,
      title: 'Retrofit Coordination',
      image: 'https://retrosmart.co.uk/images/bg_icon_2.jpg',
      description: "We provide retrofit coordination services to installers, social landlords and home owners.",
      link: 'Retrofit-Coordination'
    },
    {
      id: 7,
      title: 'Retrofit Design',
      image: 'https://retrosmart.co.uk/images/bg_!.jpg',
      description: "Our retrofit designers use the assessment to design relevant energy efficiency improvements to the dwellings.",
      link: 'Retrofit-Design'
    },
    {
      id: 8,
      title: 'Retrofit Evaluation',
      image: 'https://retrosmart.co.uk/images/bg4.jpg',
      description: "Our Retrofit Evaluation service ensures that all retrofit measures are performing as intended.",
      link: 'Retrofit-Evaluation'
    }
  ]

  return (
    <section className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-emerald-800 mb-4' style={{ fontFamily: 'Lora' }}>
            Our Retrofit Services
          </h2>
          <div className='w-24 h-1 bg-amber-600 mx-auto mb-8'></div>
          <p className='text-gray-600 max-w-2xl mx-auto' style={{ fontFamily: 'Barlow' }}>
            Comprehensive energy efficiency solutions for your home
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-12'>
          {services.map((service) => (
            <div 
              key={service.id} 
              className='group flex flex-col items-center text-center border-2 border-emerald-800/10 rounded-lg p-5 '
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
              <button 
                onClick={() => window.location.href = service.link}
                className='px-6 py-2 bg-transparent text-emerald-800 border border-emerald-800 hover:bg-amber-600 hover:text-white hover:border-amber-600 rounded-full transition-all duration-300'
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServices
