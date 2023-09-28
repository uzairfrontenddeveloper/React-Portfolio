import React ,{useEffect}from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Counter.css'
function Counter() {
    const Update=()=>{
    let count= document.querySelectorAll(".count");
        count.forEach((counter)=>{
                counter.innerHTML=0;
                var counterup=()=>{
                 let  target  = +counter.getAttribute("data-target");
                 let startnum= Number(counter.innerHTML);
                 let incr = target/100;
                 if(startnum<target){
                    counter.innerHTML=`${startnum+incr}`;
                    setTimeout(counterup,100);
                 }else{
                    counter.innerHTML=target;
                 }
                }
                    let section_observe= document.querySelector(".section-observer");
                    let intersection= new IntersectionObserver(function(entries){
                        if(entries[0].isIntersecting){
                            counterup();
                       }
                    })
                    intersection.observe(section_observe);

        })
    }
    useEffect(()=>{
        Update();
    },[]);
  return (
    <>
    <section className='section-observer mt-5'>     
       <div className="counter-par">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                        <div className="icons">
                            <InstagramIcon className='intstagram'/>

                        </div>
                                
                        <div className="count" data-target="1000"></div>
                    </div>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                    <div className="icons">
                        <FacebookOutlinedIcon className='facebok'/>

                        </div>
                    <div className="count" data-target="2000"></div>

                    </div>
                  
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                    <div className="icons">
                        <YouTubeIcon className='utube'/>
                    </div>
                    <div className="count" data-target="3000"></div>

                    </div>
                    <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12">
                        <div className="icons">
                            <TwitterIcon className='twter'/>
                        </div>
                      
                    <div className="count" data-target="4000"></div>

                    </div>

                </div>
            </div>
        </div>
      
        </section>
    </>
  )
}

export default Counter
