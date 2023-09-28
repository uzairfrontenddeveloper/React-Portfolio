import React, { useEffect } from 'react'
import './Projects.css'
import todolist from '../Todo-list/todolist.jpg'
import { useNavigate } from 'react-router-dom'
import onlinestore from '../Shirtsimg/onlinestore.png'
import keep from '../Todo-list/keep-notes.avif'
import AOS from 'aos';
import 'aos/dist/aos.css'
function Projects() {
    const navigate= useNavigate();
    function chang(){
        navigate("/project1");
    }
    function List(){
        navigate("/todolistapp");

    }
    function Notes(){
        navigate("/notes");
    }
    useEffect(()=>{
        AOS.init();
      },[])
  return (
   <>
   <section className='pro'>
        <div className="project-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div data-aos="fade-right">
                        <h1 className='project-heading'>See Projects</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="container">
                <div className="row">
                        <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 my-2">
                        <div data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card" onClick={chang}>
        <img src={onlinestore} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Shoping Cart</h5>
        <p class="card-text" >https:// E-Commrence Add to Cart website.org</p>
            
                       
        </div>
        </div>
        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 my-2">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card" onClick={List}>
        <img src={todolist}  width="100%" height="196px" class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title" >TODO List</h5>
        <p class="card-text">https://TODO LIST App website/List APP/website.org</p>
            
                       
        </div>
        </div>
        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 my-2">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card" onClick={Notes}>
        <img src={keep} class="card-img-top" alt="..."   width="100%" height="196px" />
        <div class="card-body">
        <h5 class="card-title">Google Keep Notes</h5>
        <p class="card-text">https://Google Keep Notes.com/ Keep/website.org</p>
            
                       
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

export default Projects
