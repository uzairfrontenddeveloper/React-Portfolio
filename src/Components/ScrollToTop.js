import React ,{useEffect,useState}from 'react'
import "./ScrollToTop.css"
function ScrollToTop() {
    const [visible,setvisible] =useState(false);
    const BtnTop=()=>{
        window.scrollTo({top:0,Left:0, behavior:"smooth"});
    }
    const listenTop=()=>{
        const height= 250;
        const scroll= document.body.scrollTop|| document.documentElement.scrollTop;
        console.log(scroll);
        if(scroll>height){
            setvisible(true);
        }else{
                setvisible(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", listenTop);
       return ()=> window.removeEventListener("scroll",listenTop);
    },[])
  return (
   <>
        {visible && <div className="icon" onClick={BtnTop}>
            <i className='fa fa-angle-up'></i>
        </div>
        }
        
   </>
  )
}

export default ScrollToTop
