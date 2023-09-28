import React  from 'react'
import './Todolistapp.css'

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Todolistapp = (props) => {
     
      const {data}= props;
     const Delete_item=(index)=>{
        props.ListsDelete(index);
     }
     const Edititem=(index)=>{
      props.itemedit(index);
     }
   
   
  return (
    <>
        

                

                  <table class=" table table-hover">
  <thead>
    <tr>
    
      <th scope="col">Id</th>
      <th scope="col">Task Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
   
          {data.map((ele,index)=>{
          return(
            <>
              
            <tbody >
    <tr>
    
      <th scope="row">{index}</th>
      <td>{ele.Name}</td>
      <td>
        <BorderColorIcon  fontSize='medium' onClick={()=>Edititem(index)}  className='listedit' />
      </td>
      <td>
        <DeleteForeverIcon fontSize='medium' onClick={()=>Delete_item(index)} className='removelist'/>
      </td>
    </tr>
   
  </tbody>
            </>
          )
          })}
        
       
 
</table>
                
    </>
  )
}

export default Todolistapp
