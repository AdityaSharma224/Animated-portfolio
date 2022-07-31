import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import leetcode from '../../img/leetcode.png'
import boy from '../../img/boy.png'


function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span> I Am</span>
                <span>Aditya Sharma</span>
                <span>FullStack Developer with a good level of experience in web designing and development, producting the Quality work </span>
            </div>
 
            <button className='button i-button'>Hire me</button>

            <div className='i-icons'>
           <a href='https://github.com/AdityaSharma224'><img src={Github} alt=""/></a> 
           <a href='https://www.linkedin.com/in/aditya-sharma-45473a1a6/'><img src={LinkedIn}  alt=""/></a> 
           <a href='https://leetcode.com/sharmaaditya13064/'><img className='leet' src={leetcode}  alt=""/></a> 
            </div>
        </div>
        <div className='i-right'>
           <img src={boy}  alt="" />
        </div>


        <div className='blur' style={{background:"rgb(238 210 255)"}}>

        </div>
        <div className='blur' style={{background:'#C1F5FF', top:'17rem',width:'21rem',height:'11rem'}}>

        </div>
    </div>
  );
};

export default Intro