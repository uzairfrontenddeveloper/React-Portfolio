import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const SeeNotes = (props) => {
    const {title,des,index}= props;
    const Delete=(index)=>{
    
        props.Deleteitem(index);
    }
    const Edit=(index)=>{
      props.edititem(index);
    }
  return (
    <>
        <div className="container">
     
      
      
                         
                         <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5"  component="div" gutterBottom>
                        {title}
        </Typography>
      
        <Typography variant="body5">
            {des}
          <br />
        
        </Typography>
      </CardContent>
            <div className='notes-btn'>
                <i className='fa fa-edit' onClick={()=>Edit(index)} ></i>
                <i className='fa fa-trash' onClick={()=>Delete(index)}></i>
            </div>
    </Card>
                        
                       
        
       
                    </div>
                    
    </>
  )
}

export default SeeNotes
