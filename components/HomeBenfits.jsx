import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

const HomeBenfits = () => {
  const benefits = [
    {
      id: 1,
      icon: 'fa-clock',
      title: 'Apply In 60 Sec',
      description: 'To apply for a grant, please click "Apply Now" and complete our online eligibility check form available on our website.',
      cta: 'Explore eligibility check form'
    },
    {
      id: 2,
      icon: 'fa-user-check',
      title: 'Free Assessment',
      description: 'Our qualified surveyor will schedule a convenient day and time to visit your property. During the visit, we will explain the process, take photographs, and measure the property to create a report.',
      cta: 'Schedule a convenient visit'
    },
    {
      id: 3,
      icon: 'fa-tools',
      title: 'Free Installation',
      description: 'Our heating engineers & insulation technicians are professionals who complete jobs quickly and efficiently. We also make sure to clean up after installation, leaving the place as it was before.',
      cta: 'Learn about the installation process'
    },
    {
      id: 4,
      icon: 'fa-thumbs-up',
      title: 'Warranty & Guarantee',
      description: 'We will give you a call to gather your feedback and any concerns you may have. Additionally, we offer heating & insulation installation guarantee & warranty.',
      cta: 'Contact us for more details'
    }
  ]

  return (
    <section className='py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl text-center font-bold text-emerald-800 mb-12' 
            style={{ fontFamily: 'Lora' }}
            data-aos="fade-up">
          See The Benefits
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className='bg-white rounded-xl p-6 border border-gray-200 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className='flex items-center mb-4'>
                <i className={`fas ${benefit.icon} text-4xl text-amber-600 mr-3`}></i>
                <h3 className='text-xl font-bold text-emerald-800' style={{ fontFamily: 'Lora' }}>
                  Step {benefit.id}
                </h3>
              </div>
              <h4 className='text-lg font-semibold text-emerald-800 mb-2' style={{ fontFamily: 'Lora' }}>
                {benefit.title}
              </h4>
              <p className='text-gray-600 mb-4' style={{ fontFamily: 'Barlow' }}>
                {benefit.description}
              </p>
              <p className='text-sm text-amber-600' style={{ fontFamily: 'Barlow' }}>
                {benefit.cta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBenfits
