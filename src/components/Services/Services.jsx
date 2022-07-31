import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import {motion} from 'framer-motion'
import Resume from './resume.pdf'

const Services = () => {
  const transition = {duration:1,type:'spring'}
  return (
    <div className='services'>
        <div className='awesome'>
            <span>My</span>
            <span>Skills</span>
            <span>
            
            <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </span>
            <a href={Resume} download>

           <button className='button s-button'> Download CV</button>
           </a>

          <div className='blur s-blurl' style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className='cards'>
            <motion.div 
            whileInView={{left:'25rem'}}
             initial={{left:'25%'}}
             transition={{transition}}
            style={{left:'14rem'}}>
              <Card
                emoji = {HeartEmoji}
                heading = {'Competitive Coding'}
                details = {"CodeForces,Codechef,Leetcode"}
              />
            </motion.div>

            <motion.div 
            whileInView={{left:'0rem'}}
             initial={{left:'25%'}}
             transition={{transition}}
            style={{top:'12rem',left:'-4rem'}}>
              <Card
                emoji = {Glasses}
                heading = {'Developer'}
                details = {"html, Css, javaScript, React"}
              />
            </motion.div>

            <motion.div 
            whileInView={{left:'25rem'}}
             initial={{left:'25%'}}
             transition={{transition}}
            style={{top:'19rem',left:'12rem'}}>
              <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                details = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
              />
            </motion.div>
        </div>
    </div>
  )
}

export default Services