import React from 'react'
import './navbar.css'
import '../Experience/Experience'

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'>
            <div className='n-name'>Aditya</div>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyleType:'none'}}>
                    <li href='experience'>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    

                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar