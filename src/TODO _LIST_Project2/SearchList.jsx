import React, { useState } from 'react'
import './SearchList.css'
import Todolistapp from './Todolistapp'
import Swal from 'sweetalert2'
const SearchList = () => {
  const [value,setvalue]= useState("");
const [btn,setbtn]= useState(true);

    const [indx,setindx]= useState();
  const [data,setdata]= useState([{
        
      Name:"HTML"
  },
  {
   
    Name: "CSS3"
},{
 
  Name: "JS"
},{
 
  Name: "React JS"
},
])
  const HandleList=()=>{
      if(value===""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill out this field!',
          footer: 'Why do I have this issue'
        })
      }
      else{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'List Add successfully'
    })
       
         
          setdata([...data,{
            
           Name:value
         }
       ]);
        
         
          setvalue("");
         
  }
}
  const Deletewrap=(index)=>{
Swal.fire(
  'List Deleted!',
  'success'
)
          let remove= data.filter((ele,id)=>{
            return index!==id
          })
          setdata(remove);
  }
  const editList=(index)=>{
  
          setbtn(false);
        let updatelist= data.filter((cur,id)=>{
          
            return index===id
        })
          setindx(index);
        console.log(updatelist)
         setvalue(updatelist[0].Name);

  }
  const addtask=(indx)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Edit List  successfully'
    })
        setdata(
                data.map((ele,index)=>{
                  if(index===indx){
                      return {...ele, Name:value}
                  }
                  else{
                    return ele
                  }
          })
        )

      setbtn(true);
      setvalue("");
  }
  return (
    <>
     <div className="par-todo">
     <h1 className='text-center text-white'>TODO LIST APP</h1>
      <div className="container">
       
        <div className="row">
          <div className="col-12">
            <div className="List-wrap">
            <h3 className='text-center'>TODO LIST</h3>
            <div className="inputfield">
                <input type="Task" name="" value={value} autoFocus onChange={(e)=>setvalue(e.target.value)}  placeholder='Task Name'/>
                <div className="listbtn">
                  {btn ? <button className='task' onClick={()=>HandleList(value)}>Add Task</button>
                  :<button className='task' onClick={()=>addtask(indx)}>Edit Task</button> }
                </div>
            </div>
                <div className="col-12">
                  <Todolistapp data={data} ListsDelete={Deletewrap} itemedit={editList}/>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SearchList
