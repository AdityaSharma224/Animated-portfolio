import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import HOC from '../../img/hoc.png'
import Sidebar from '../../img/sidebar.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'


const Portfolio = () => {
  return (
      <div className='portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>


        <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
 
          <SwiperSlide>
            <a href='https://adityasharma224.github.io/myPort/'><img src={Sidebar} alt=" "/></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href=" https://adityasharma224.github.io/animated-web/"><img src={MusicApp} alt=" "/></a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://adityasharma224.github.io/DreamHomes.github.io/"><img src={HOC} alt=" "/></a>
          </SwiperSlide>

        </Swiper>
      </div>
  )
}

export default Portfolio