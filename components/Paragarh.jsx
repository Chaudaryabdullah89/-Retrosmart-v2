import React from 'react'

const Paragarh = (props) => {
  return (
    <div>
      <p className={`text-gray-600 ${props.className || ''}`} style={ {fontFamily: 'Barlow'}} >
        {props.text}
      </p>
    </div>
  )
}

export default Paragarh
