import React, { useState } from 'react'
import './KeepNotes.css'
import { TextField } from '@mui/material'
import SeeNotes from './SeeNotes';
import Swal from 'sweetalert2';
import logo from '../Keepnoteslogo/keepnoteslogo.png'
const KeepNotes = () => {
    const [name,setname]= useState("")
    const [note,setnote]= useState(false);
    const [title,settitle]= useState("")
    const [des,setdis]= useState("");
    const [icon,seticon]= useState(false);
    const [indx,setindx]= useState();
    const [data,setdata]= useState([
        {
            Title: "HTML",
            Description: "HTML Stand for Hyper Text Markup Language and ,It is a client side languaage. The Website Content ready in html"
        },{
            Title: "CSS",
            Description: "CSS Stand for  Cascading Style Sheets. CSS is a computer language for laying out and structuring web pages"
        }
    ]);
        let findnotes= data.filter((ele)=>{
                if(name===""){
                    return ele
                
                }else if(ele.Title.toLowerCase().includes(name.toLowerCase())){
                    return ele
                }else{
                return ""
                }
        })
    const Focus=()=>{
            setnote(true);
    }
    const AddNotes=()=>{
        if(title===""|| des===""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out this field!',
                footer: 'Why do I have this issue'
              })
        }else{
            setdata([...data,{
                Title: title,
                Description: des
            }]);
        setnote(false);
        seticon(false);

        settitle("");
        setdis("");
}
    }
    const DeleteList=(index)=>{
        
            let Remove= data.filter((curele,id)=>{
                    return index!==id
            });
            setdata(Remove);
       

    }
    const ListEdit=(index)=>{
        seticon(true);
        setnote(true);
            let Update= data.filter((ele,id)=>{
                    return id===index
            })
                settitle(Update[0].Title);
                setdis(Update[0].Description);
                setindx(index);
                
    }
  const updateitem=(id)=>{
    
   
    setdata(
        data.map((ele,index)=>{
          if(index===id){
              return { ...ele, Title: title , Description: des}
          }
          else{
            return ele
          }
  })
        )
        setnote(false);
        seticon(false);
        settitle("");
        setdis("");
  }
        function Searchbar(){
        let select= document.querySelector(".searching");
        select.classList.add("activeadd");
  }
        function Removeclass(){
            let select= document.querySelector(".searching");
            select.classList.remove("activeadd");
        }

  
  return (
   <>
       <main onBlur={Removeclass}>
     
        <div className="notes-logo">
            <img src={logo} alt="" width="50px" height="50px" />
        </div>
        <div className="notescontent">
            <label htmlFor="">Keep<span className='span'>Notes</span></label>
        </div>
        <div className="note-search">
        <i className='fa fa-search' id='bar' onClick={Searchbar}> </i>
            <input type="note"  name="" autoFocus className="searching" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Search.....'/>
        </div>
        
       </main>

              <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="Notes">
                        <TextField id="standard-basic" className='Field' value={title} label="Title"  onChange={(e)=>settitle(e.target.value)}  onFocus={Focus} variant="standard" />
                        { note &&  <div>
                     <TextField id="standard-basic" className='Field' value={des} onChange={(e)=>setdis(e.target.value)} label="Take a note..." variant="standard" />
                            <div className="plus-icon">
                             {icon ?   <i className='fa fa-edit' onClick={()=>updateitem(indx)}></i> : <i className='fa fa-plus' onClick={AddNotes}></i>}
                            </div>
                            </div>
                            }

                        </div>
                    </div>
                </div>
              </div>
                            <div className="container">
                                <div className="row">
                              
                                    {findnotes.map((ele,index)=>{
                                        return(
                                            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-4 col-sm-12 my-3" key={ele}>
                                            <SeeNotes Deleteitem={DeleteList} edititem={ListEdit} title={ele.Title} des={ele.Description} index={index} />
                                    
                                          </div>
                                        )
                                    })}
                                </div>
                            </div>

                              
                

                 
   </>
  )
}

export default KeepNotes
