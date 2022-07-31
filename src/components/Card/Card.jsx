import React from 'react'
import './Card.css'

const Card = ({emoji, heading,details}) => {
  return (
    <div className='card'>
        <img src={emoji} alt=""></img>
        <span>{heading}</span>
        <span>{details}</span>
    </div>
  )
}

export default Card