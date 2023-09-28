import React, { useEffect } from 'react'
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Servicedata from './ServicesData';
function Services() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
   <>
   <section id='sect'>
    <div className="container">
      <div className="row">
        <div className="col-12">
            <h1 className='service-main'>Services</h1>
        </div>
      </div>
    </div>
        <div className="service-wrap">
          <div className="container">
            <div className="row">
            {Servicedata.map((data)=>{
             return  <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12">
                  <div data-aos="fade-up">
                  <div className="services-item">
                    <div className="service-img">
                    <i class="fa-brands fa-servicestack"></i>
                    </div>
                      <div className="services-heading">
                        <h3>{data.Title}</h3>
                        <p>{data.Content}</p>
                      </div>
                  </div>
                  </div>
              </div>
            })}
             
            </div>
          </div>
        </div>
        </section>
   </>
  )
}

export default Services
