import React from 'react'
import {Link} from 'react-router-dom'
const TopCompnentHero = (props) => {
  return (
    <div>
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
           {props.title}
          </h1>
          <p className="text-md md:text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          {props.description} 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {  (props.onClick1 && props.value1) && (
            <Link to={props.onClick1} className="bg-green-600 text-white px-8 py-2 rounded-full hover:bg-green-700 transition duration-300 text-md font-semibold">
              {props.value1}
            </Link>
            )}

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
  )
}

export default TopCompnentHero
