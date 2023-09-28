import React,{useState,useEffect} from 'react'
import './Portfoliolink.css'
import image from './Portfoliodata'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Portfoliolink() {
    const [data,setdata]= useState(image);
    const Check=(cate)=>{
            let Updateitems= image.filter((curentvalue)=>{
                return curentvalue.category===cate
            });
            setdata(Updateitems);
    }
    useEffect(()=>{
        AOS.init();
      },[])
  return (
    <>
    <section className='port'>
                <div className="port-item">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className='portfolio'>Portfolio</h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="portfolio-par">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12">
                            <div className="links-wrap">
                                <ul>
                                    <li onClick={()=>setdata(image)}>All</li>
                                    <li onClick={()=>Check('design')}>Responsive Design</li>
                                    <li onClick={()=>Check('portfolio')}> Portfolio Design</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

                <div className="container">
                    <div className="row">
                        {data.map((ele)=>{
                            
                            return  <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 my-3">
                            <div data-aos="fade-left">
                            <div className="port-img">
                                <img src={ele.imagesrc} width="100%" height="200px" alt="" />
                            </div>
                            </div>
                        </div>
                            
                        })}
                       
                    </div>
                </div>
                </section>
    </>
  )
}

export default Portfoliolink
