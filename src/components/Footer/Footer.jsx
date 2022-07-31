import React from 'react'
import './Footer.css'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import wave from '../../img/wave.png'



export const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt="" style={{width:'100%'}}/>
        <div className='f-content'>
            <span>sharmaaditya13064@gmail.com</span>
            <div className='f-icons'>
                <LinkedIn color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
                 
            </div>
        </div>
    </div>
  )
};

export default Footer
