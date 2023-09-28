import React  from 'react'
import { useNavigate } from 'react-router-dom'

import './Cartproduct.css';
import { useDispatch, useSelector } from 'react-redux';

import { Addtocart, Decrese,Removeitem } from './Slice';

const Cartproduct = () => {
      let   Navigate = useNavigate();
  
        const {cart} =useSelector((state)=>state.app);
        const dispatch= useDispatch();

      

        const removefun=(id)=>{
            dispatch(Removeitem(id))
        }
        const navigate=useNavigate();
        const backhandle=()=>{
            navigate("/project1");
        }
        // const [top,settop]= useState(false);
        function Check(){
            Navigate("/checkamount");
        }
        // function Closefun(){
        //   settop(false);
        // }
  return (
    <>
    
      <div className="check-amount mx-2">
         <input type="submit" className='product-wrap' id='mx' onClick={backhandle} value="Back Product" />
        
      <input type="submit" className='product-wrap bg-danger' onClick={Check} id='mx' value="Check Amount" />

      </div>
    <br /><br /><br /><br />
        <div className="container ">
            <div className="row">
            {cart.map((ele,index)=>{
                return(
                    <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-sm-12" key={index}>
                <div class="card header mb-3">
  <div class="row g-0">
    <div class="col-md-4">
    <div className="img-wrap">
      <img src={ele.srcimg} class="img-fluid rounded-start" alt="..."/>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title center">{ele.Shirtname}</h5>
        <p class="card-text center">Price : {ele.Price*ele.qnty}</p>
        <div className="flx">
        <input type="submit" value="+" name="" id="incres" onClick={()=>dispatch(Addtocart(ele))} />
        <input type="text" value={ele.qnty} />
        <input type="submit" value="-" name="" id="decres" onClick={ele.qnty < 2 ? ()=>removefun(ele.id): ()=>dispatch(Decrese(ele))} />
        </div>
                <div className="flex-wrap">
        <div className="removebtn">
            <input type="submit" value="Remove" className='remove' onClick={()=>removefun(ele.id)} />
        </div>
        </div>

      
      </div>
    </div>
  </div>
</div>
                </div>
                )
            })}
         
            </div>
        </div>
          
      
    </>
  )
}

export default Cartproduct
