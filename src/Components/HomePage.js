import React  from 'react'
import './HomePage.css'
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar'
import web from '../images/coding-img.png'
import TypeWriter from './TypeWriter'
import Btn from './Btn'
import Resume from './Resume'
import Counter from './Counter'
import Skills from './Skills'
import Services from './Services'
import Portfoliolink from './Portfoliolink'
import Textimonial from './Textimonial'
import Projects from './Projects'
import FooterPart from './FooterPart'
import {motion,useScroll} from 'framer-motion'
import 'animate.css';



function HomePage() {
      const {scrollYProgress}= useScroll();
     
  return (
    <>
         <motion.div
      style={{
          scaleX:scrollYProgress,
           position:"fixed",
          top:0,
          left:0,
          right:0,
          height: 5,
          background: "#1a237e",
         zIndex:99999,
          transformOrigin: "0%",
       
      }}
      >
  </motion.div>
        <Navbar/>
      
      <div className="par-item">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-7 col-xxl-7 col-md-7 col-sm-12">
            
            <div className="side-content">
            <div class="animate__animated animate__slideInLeft">
              <p>Hi, My name is <span>Uzair</span> <br /> and I am a passionate <br /> </p>
              </div>
                <TypeWriter/>
            
                   <Btn/>
               

            </div>
            
          </div>
          <div className="col-lg-5 col-xl-5 col-xxl-5 col-md-5 col-sm-12">
          <div class="animate__animated animate__slideInRight">
            <div className="side-img">
              <img src={web} alt="" />
            </div>
            </div>
          </div>

        </div>
      </div>
   
      <ScrollToTop/>
      
        <Resume/>
        <Counter/>
        <Skills/>
        <Services/>
        <Portfoliolink/>
        <Projects/>
        <Textimonial/>
      <FooterPart/>


      </div>
      

    </>
  )
}

export default HomePage


 