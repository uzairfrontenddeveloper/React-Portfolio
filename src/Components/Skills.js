import React, { useEffect }  from 'react'
import './Skills.css'
function Skills() {
    // useEffect(()=>{
    //     window.addEventListener("scroll",function(){
    //         if(window.pageYOffset>1300){
    //             Triger();
    //         }
    // })
    // })

   
    function Triger(){
    let html= document.querySelector(".html-item");
    let css= document.querySelector(".css-item");
    let js= document.querySelector(".js-item");
    let jq= document.querySelector(".jq-item");
    let boots= document.querySelector(".boots-item");
    let react= document.querySelector(".react-item");

        html.style.width="100%";
        css.style.width="80%";
        js.style.width="70%";
        jq.style.width="60%";
        boots.style.width="90%";
        react.style.width="70%";

    }
    const Trigerfun=()=>{
        const height=1300;
        const scrol= document.body.scrollTop || document.documentElement.scrollTop;
        if(scrol>height){
            Triger();
        }
    }
   useEffect(()=>{
    window.addEventListener("scroll",Trigerfun);
    return ()=> window.removeEventListener("scroll",Trigerfun);
   })


  return (
  <>
  <section className='trigger'>
        <div className="Skill-item">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>My Skills</h1>
                    </div>
                </div>
            </div>
        </div>
            <div className="skill-wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                            <div className='heading'>HTML
                                <div className="percen">100%</div>
                            </div>
                            <div className="html-wrap">
                                    
                                    <div className="child-html-wrap html-item">

                                    </div>
                            </div>
                            <br />
                        </div>
                        
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                        <div className='heading'>CSS
                                <div className="percen">80%</div>
                            </div>
                            <div className="html-wrap">
                                    
                                    <div className="child-html-wrap css-item">

                                    </div>
                            </div>
                            <br />

                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                        <div className='heading'>Javascript
                                <div className="percen">70%</div>
                            </div>
                            <div className="html-wrap">
                                    
                                    <div className="child-html-wrap js-item">

                                    </div>
                            </div>
                            <br />

                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                        <div className='heading'>JQuery
                                <div className="percen">60%</div>
                            </div>
                            <div className="html-wrap">
                                    
                                    <div className="child-html-wrap jq-item">

                                    </div>
                            </div>
                            <br />

                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                        <div className='heading'>Bootstrap
                                <div className="percen">90%</div>
                            </div>
                            <div className="html-wrap">
                                    
                                    <div className="child-html-wrap boots-item">

                                    </div>
                            </div>
                            <br />

                        </div>
                        <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12">
                        <div className='heading'>React JS
                                <div className="percen">70%</div>
                            </div>
                            <div className="html-wrap">
                                    
                                    <div className="child-html-wrap react-item">

                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </section>
  </>
  )
}

export default Skills
