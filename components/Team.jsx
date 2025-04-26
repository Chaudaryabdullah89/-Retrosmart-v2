import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../public/images/trust-mark.png'
// import img1 from '..
const Team = () => {
  const navigate = useNavigate()

  const teamMembers = [
    {
      id: 1,
      image: img1,
      alt: 'Team Member 1'
    },
    {
      id: 2,
      image: '../public/images/2nd.jpg',
      alt: 'Team Member 2'
    },
    {
      id: 3,
      image: '../public/images/3rd.jpg',
      alt: 'Team Member 3'
    },
    {
      id: 4,
      image: '../public/images/4th.jpg',
      alt: 'Team Member 4'
    },
    {
      id: 5,
      image: '../public/images/5th.jpg',
      alt: 'Team Member 5'
    }
  ]

  return (
    <section className="py-20 border-t-2 border-gray-300">
      <div className="container  mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group flex flex-col items-center"
              onClick={() => navigate('/about')}
            >
              {/* Circular Image Container */}
              <div className="relative w-36 h-36 mb-4 cursor-pointer">
                {/* Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-sm" style={{ fontFamily: 'Barlow' }}>
                      Click to learn more
                    </p>
                  </div>
                </div>

                {/* Decorative Ring */}
                <div className="absolute -inset-1 rounded-full border-2 border-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="text-center">
               
                <div className="w-12 h-1 bg-amber-600 mx-auto rounded-full mb-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
