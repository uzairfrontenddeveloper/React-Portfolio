import React, { useEffect, useState } from 'react'
import './CheckAmount.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const CheckAmount = () => {
    let Navigate= useNavigate();
    const cartproduts=()=>{
        Navigate("/project1")
    }
    const {cart} =useSelector((state)=>state.app);
    const [price,setprice]= useState("");
    const [quantity,setquantity]= useState("");
    const buyproduct=()=>{
        Navigate("/cartproduct");
        
    }
    function total(){
        let price=0;
        let quantity=0;
        cart.map((itemdata)=>{
           price =itemdata.Price*itemdata.qnty+price;
           quantity= itemdata.qnty+quantity;
            setquantity(quantity);
           return price
        })
        setprice(price);

    }
    useEffect(()=>{
        total();
    });
  return (
    <>
            <div className='Amount'>
                <h3 className='text-center'>Check Amount</h3>
                <div className="qunty ">
                    <h5 className='my-4'>Total Quantity : { price < 1 ? "": quantity} </h5>
                    <h5>Total Price : {price < 1 ? "": price} </h5>
                </div>
                <div className="Buyproduct">
                    <div className="buy-btn">
                        <button className='buy' onClick={buyproduct}> Product</button>
                    </div>
                    <div className="cancel">
                    <button className='Cancel' onClick={cartproduts}> Cancel</button>

                    </div>
                </div>
            </div>
    </>
  )
}

export default CheckAmount
