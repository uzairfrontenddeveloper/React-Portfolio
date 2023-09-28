import React, { useEffect } from 'react'
import './Resume.css'
import data from './ResumeData'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Resume() {

    useEffect(()=>{
        AOS.init();
      },[])
  return (
    <>
        




            <section id='resume-ite'>
        <div className="container my-3">
            <div className="row">
                <div className="col-12">
                
                    <div className="resume-item">
                    <div data-aos="fade-right">
                        <h1>Resume</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container">
                <div className="row">
                {data.map((ele)=>{
                return  <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                        <h1 style={{color:"#121455",fontSize:"30px", paddingLeft:"30px"}}>{ele.Heading}</h1>
                        <div data-aos="zoom-in-up">
                        <div className="time-line">
                            <div className="child-time-line">
                                <h4 style={{color:"#7045a6"}}>{ele.date}</h4>
                            <div className="degree-item pt-2">
                                <h3>{ele.name}</h3>
                                <br />
                              <p>{ele.content}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                })};
                   
                    

                </div>
            </div>
            </section>
            
    </>
  )
}

export default Resume
