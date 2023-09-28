import React, { useState }   from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderNavbar from './HeaderNavbar';
import { Addtocart } from './Slice'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import './Shopingcart.css'
import Swal from 'sweetalert2';

const Shopingcart = () => {
 
      
  const data= useSelector((state)=>state.app.item);
  const dispatch= useDispatch();
  const [input,setinput]= useState("");

  const Connect=(event)=>{
    setinput(event.target.value);
}
  

    const searchitem= data.filter((ele)=>{
          if(input===""){
            return ele
          }else if(ele.LaptopName.toLowerCase().includes(input.toLowerCase())){
              return ele
          } else{
            return ""
          }
    })
      const cartadd=(curele)=>{
        let timerInterval
        Swal.fire({
          title: 'Product Selected alert!',
          html: 'I will close in <b></b> milliseconds.',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
          }
        })
        dispatch(Addtocart(curele));
      }
      
  return (
   <>
   
    <HeaderNavbar Changevalue={Connect}/>

    <br /><br /><br />
         
          
      <div className="container">
        <div className="row">
        {searchitem.map((curele)=>{
          return(
            <div className="col-lg-3 c0l-xl-3 colxxl-3 col-md-6 col-sm-12  my-3" key={curele}>
           
            <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          sx={{ height: 160 }}
          image={curele.srcimg}
          alt="green iguana"
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            $ {curele.Price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {curele.LaptopDetails}
          </Typography>
            <div className='rating'>
            <div className='star-rate'>
            <i class="fa fa-star" id='star'></i>{curele.Rating}</div>
          
            <div className='bag-item' onClick={()=>cartadd(curele)}>
            <Tooltip title="Add to cart">
            <ShoppingBagIcon/>

            </Tooltip>

            </div>
            </div>
           
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          )
        })}
          
        </div>
      </div>
     
   </>
  )
}

export default Shopingcart
