import React from 'react'
import './Textimonial.css'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import txtimonial from './Textimonialdata';
function Textimonial() {
  return (
   <>
   <section className='textimo'>
        <div className="monial-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='txtimonial'>Testimonial</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="textimonial-par">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12">
                    <div className="slider-par">
                            <Swiper
              modules={[ Autoplay]}
                spaceBetween={50}
                    autoplay= {{delay:2500}}
    
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                    {txtimonial.map((data)=>{
                        return(
                            <SwiperSlide>
                        <div className="slider-img">
                            <img src={data.src} alt="" />
                        </div>
                        <div className="textimonial-heading">
                            <h3>{data.name}</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum nemo nulla vel adipisci alias <br /> reiciendis iusto veniam beatae? Voluptas iusto quod delectus cum maxime quas laboriosam officia commodi <br /> tenetur non quibusdam debitis tempore autem, aperiam pariatur. Fuga, aut magnam.</p>
                        </div>
                  </SwiperSlide>
                        )
                    })}
              
                 
                    
               
              
            
            </Swiper>
            </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
   </>
  )
}

export default Textimonial
