import React, { useEffect }   from 'react'
import './Navbar.css';
import {useNavigate} from 'react-router-dom';

import { Link } from 'react-scroll';
// import {Link} from 'react-scroll';
   
    function Navbar(){
     const  navigate= useNavigate();

      
    
        function change(){
            navigate("/contact");
        }
       
        function Home(){
            navigate("/");
        }
      
            const Project1=()=>{
                navigate('/project1')
            }
 
                const Project2=()=>{
                    navigate("/todolistapp")
                }
                const Project3=()=>{
                 navigate("/notes");
                }
               const open=()=>{
                   let nav =document.querySelector('.opennav');
                   nav.style.left="0";

               }
               const close=()=>{
                let navclose =document.querySelector('.opennav');
                navclose.style.left="-100%";
               }
               function scrolfun(){
                let height= 200;
                let scroll= document.body.scrollTop|| document.documentElement.scrollTop;
                if(scroll > height){
                let addevent=document.querySelector(".add");

                        addevent.classList.add("add-wrap");
                }else{
                    let addevent=document.querySelector(".add");

                    addevent.classList.remove("add-wrap");
                }
               }
               useEffect(()=>{
                window.addEventListener("scroll",scrolfun);
                return ()=> window.removeEventListener("scroll",scrolfun);
               });
          
    return (
     <>
            <section className='add'>
                <nav>
                        <i className='fa fa-bars Bar' onClick={open}></i>
                    <label htmlFor="">Uzair Port<span>folio</span></label>
                    <ul className='opennav'>
                    <i className='fa fa-xmark Mark' onClick={close}></i>
                      <li><Link to="/" onClick={Home}>Home</Link></li>
                      <li><Link to="resume-ite" smooth={true}>Resume</Link></li>
                      <li><Link to="sect" smooth={true}>Services</Link></li>
                      <li><Link to="port" smooth={true}>Portfolio</Link></li>
                      <li><Link to="pro" smooth={true}>Projects</Link>
                        <ul>
                            <li onClick={Project1}>Add to Cart</li>
                            <li onClick={Project2}>TODO LIST APP</li>
                            <li onClick={Project3}>Google Keep Notes</li>

                        </ul>
                      </li>
                      <li><Link to="textimo" smooth={true}>Testimonial</Link></li>
                      <li><Link to="/contact" onClick={change}>Contact</Link></li>

                    </ul>
                </nav>
            </section>
     </>
    )
  
}

export default Navbar
