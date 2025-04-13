import React from 'react'

const button = (props) => {
  return (
    <div>
      <button className='bg-transparent text-emerald-800 border border-emerald-800 hover:text-white hover:bg-amber-600 px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:border-amber-600 hover:shadow-lg transform hover:scale-105'>
        {props.value}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-8 inline ml-2 mb-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default button
