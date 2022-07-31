import React from "react";
import "./Work.css";
import leetcode from '../../img/lc.png';
import CodeChef from '../../img/cc.png';
import CodeForces from '../../img/cf.png';
import GeeksForGeeks from '../../img/gfg.png';
import coding from '../../img/coding.png';

import {motion} from 'framer-motion'

const Work = () => {

  
  return (
    <div className="works">
      <div className="awesome">
        <span>Competitive</span>
        <span>Coding</span>

        <span className="Comp">
          I am a Competitive coder and doing Cp
          <br />° Codechef,
          <br />° leetcode,
          <br />° Codeforces
          
        </span>

        <button className="button s-button"> Hire me</button>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

    <div className="w-right">
        <motion.div 
        initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        className="w-mainCircle">
          <div
           className="w-secCircle">
            <a href="https://leetcode.com/sharmaaditya13064/"><img src={leetcode} alt="" /></a>
          </div>

          <div className="w-secCircle">
            <a href="https://www.codechef.com/users/griffen_dor"><img src={CodeChef} alt="" /></a>
          </div>

          <div className="w-secCircle">
            <img src={coding} alt="" />
          </div>
          
          <div className="w-secCircle">
            <a href="https://codeforces.com/profile/Aaditya_1224"><img src={CodeForces} alt="" /></a>
          </div>

          <div className="w-secCircle">
           <a href="https://auth.geeksforgeeks.org/user/sharmaaditya13064/practice"><img src={GeeksForGeeks} alt="" /></a> 
          </div>
         </motion.div>

         <div className="w-backCircle blueCircle"></div>
         <div className="w-backCircle yellowCircle"></div>



      </div>
    </div>
  );
};

export default Work;
