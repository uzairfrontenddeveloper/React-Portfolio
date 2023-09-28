import React,{useState}  from 'react'
import './FooterPart.css';
function FooterPart() {
   const [name,setname] = useState("");
   const Trigger=()=>{
    
      if(name===""){
        
      alert(`The username is empty Please fill out this field Thank you!`);
        
      }else{
  alert(`The username is ${name} and the Subcribe is Successfully Thank you!`);
      setname("");
      }
   }
  return (
    <>
        <div className="footer-wrap">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-8 col-sm-12">
                <div className="footer-logo">
                    <label htmlFor="">Uzair Port<span>folio</span></label>

                    </div>
                </div>
                   <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-4 col-sm-12">
                    <div className="social-icons">
                      <i className='fa-brands fa-twitter'></i>
                      <i className='fa-brands fa-facebook'></i>
                      <i className='fa-brands fa-instagram'></i>
                      <i className='fa-brands fa-youtube'></i>

                    </div>
                   </div>
                   <hr  className='line'/>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                      <div className="course-item">
                        <h1>Courses</h1>
                        <ul>
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>Javascript</li>
                          <li>Bootstrap</li>
                          <li>React JS</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                    <div className="course-item">
                        <h1>Services</h1>
                        <ul>
                          <li>Web Development</li>
                          <li>Responsive Design</li>
                          <li>Dynamic Design</li>
                          <li>Custom Design</li>
                          <li>Static Design</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                    <div className="course-item">
                        <h1>Company</h1>
                        <ul>
                          <li>Home</li>
                          <li>Portfolio</li>
                          <li>Resume</li>
                          <li>Testimonial</li>
                          <li>Contact</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                      <div className="course-item">
                        <h2 className='subs'>Subscribe us</h2>
                      </div>
                      <div className="input">
                      <input type="subcribe" name="" value={name} className='subscribe' required onChange={(e)=>setname(e.target.value)}  placeholder='Username' />
                      </div>
                      <div className="btn">
                      <button type='btn' className='btn' onClick={Trigger}  id='btn'>Click Here</button>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="last-item">
          <p>&copy; copyright 2024 Portfolio,All Right Reserved</p>
        </div>
      
    </>
  )
}

export default FooterPart
