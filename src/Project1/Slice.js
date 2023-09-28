import { createSlice } from "@reduxjs/toolkit";
import Shopingdata from "./Cartdata";
const initialState={
    cart: [],
    item : Shopingdata,
    qnty:0
}

const Slice= createSlice({
    name: 'cart',
    initialState,
    reducers:{
        Addtocart:(state,action)=>{
            const  itemIndex= state.cart.findIndex((iteam)=>iteam.id  === action.payload.id);
            if(itemIndex >=0){
             state.cart[itemIndex].qnty +=1;
            }else{
                state.cart.push(action.payload)
            }
            
           
        },
      
        
        Decrese:(state,action)=>{
            const  itemIndex= state.cart.findIndex((iteam)=>iteam.id  === action.payload.id);
            if(state.cart[itemIndex].qnty>=1){
                state.cart[itemIndex].qnty-=1;
            }
        },
        Removeitem:(state,action)=>{
            const remove =state.cart.filter((cur)=>cur.id!==action.payload);
            state.cart=remove;
        }
    },
});
export const {Addtocart, Decrese,Removeitem} = Slice.actions
export default Slice.reducer