import React from 'react'
import { FaHamburger } from "react-icons/fa";

import'./Header.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Header = () => {
  return (
    <div>
          <Swiper
   
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div className="container">
        <div className="slayder__1">
          <div className="slayder__ong">
    <h1>Mazali. Tez.Sifatli</h1>

    <div className='slayder__icons'> 
       <p><FaHamburger/>
      <FaHamburger/>
      <FaHamburger/> 
      <FaHamburger/> 
      <FaHamburger/> 
      </p>
    </div>
    <br />
    <p>Sevimli taomlar va sharqona mehmondo'slik</p>
    <br />
    <div className="slayder__btn">
      <button>Bizning menyu</button>
      <button> APP Evos </button>
      <button className='slayder__btn1'>Maxsulot tarkibi  </button>
      <button className='slayder__btn2'> Partneram</button>
    </div>
          </div>
          <div className="slayder__chap">
          <img className='slayderImg__1' src="http://admin.evos.uz/uploads/collage1_0859c4cd9c.png" alt="" />
          <img className='slayderImg__2'src="http://admin.evos.uz/uploads/fitter_8a7b9c6c38.png" alt="" />
          <img className='slayderImg__3'src="http://admin.evos.uz/uploads/collage2_5573572481.png" alt="" />
          <img className='slayderImg__4'src="http://admin.evos.uz/uploads/collage3_b891ca091a.png" alt="" />
          </div>
        </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="slayder__1">
        <div className="slayder__ong">
    <h1>Yangilik!</h1>

    <div className='slayder__icons'> 
       <p><FaHamburger/>
      <FaHamburger/>
      <FaHamburger/> 
      <FaHamburger/> 
      <FaHamburger/> 
      </p>
    </div>
    <br />
    <p>Sevimli Muzqaymoq ta'mini tanlang!</p>
    <br />
    <div className="slayder__btn">
      <button>Bizning menyu</button>
      <button> APP Evos </button>
      <button className='slayder__btn1'>Maxsulot tarkibi  </button>
      <button className='slayder__btn2'> Partneram</button>
    </div>
          </div>
          <div className="slayder_img">
            <img src="http://admin.evos.uz/uploads/kids_kvadrich_06cd7a1a9e.jpg" alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slayder__1">
        <div className="slayder__ong">
    <h1>Ishtahaochar formula!</h1>

    <div className='slayder__icons'> 
       <p><FaHamburger/>
      <FaHamburger/>
      <FaHamburger/> 
      <FaHamburger/> 
      <FaHamburger/> 
      </p>
    </div>
    <br />
    <p>Yumshoq tortliyadagi xushboy sous ostida pishloq va pomidor <br /> bilan grill goshti</p>
    <br />
    <div className="slayder__btn">
      <button>Bizning menyu</button>
      <button> APP Evos </button>
      <button className='slayder__btn1'>Maxsulot tarkibi  </button>
      <button className='slayder__btn2'> Partneram</button>
    </div>
          </div>
          <div className="slayder_img">
<img src="http://admin.evos.uz/uploads/baner_na_sajt_ac7adcdb9d.jpg" alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slayder__1">
        <div className="slayder__ong">
  

    <div className='slayder__icons'> 
       <p><FaHamburger/>
      <FaHamburger/>
      <FaHamburger/> 
      <FaHamburger/> 
      <FaHamburger/> 
      </p>
    </div>
  
    
    <br />
    <div className="slayder__btn">
      <button>Bizning menyu</button>
      <button> APP Evos </button>
      <button className='slayder__btn1'>Maxsulot tarkibi  </button>
      <button className='slayder__btn2'> Partneram</button>
    </div>
          </div>
          <div className="slayder_img">
<img src="http://admin.evos.uz/uploads/photo_2023_07_14_16_58_26_b9b636b4c4.jpg" alt="" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
    </div>
  )
}

export default Header


