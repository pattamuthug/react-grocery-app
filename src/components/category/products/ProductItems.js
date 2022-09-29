import { useEffect, useState } from "react";
import "./ProductItems.css";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../../Context";

function ProdcutItems(props) {
    const [cartBtn,setCartbtn]=useState(true);
    const cart = useContext(AddContext);
    const productsTo = useNavigate();
    // const[qty,setQty]=useState(0);
    const  save = (props.offer / 100) * (props.price);
           const saveround = Math.round(save);
    const offerprice = (props.price) - (saveround)

    const cartHandler=(event)=>{
        event.preventDefault()
        cart.addCart(props.items)
        setCartbtn(false)
        // setQty(qty+1)
    }
    // useEffect(()=>{
    //     if (qty==0) {
    //         setCartbtn(true)
    //     }else{
    //         setCartbtn(false)
    //     }
    //     cart.setQty(qty)
    // },[qty])
    const productsHandler=()=>{
        productsTo(`${props.id}`)
    }
    return (<>
        <div className="productsItems">

            <span className="offer">
                <span>{props.offer}</span><span>%</span><br/>
                <p className="offertag">off</p>
            </span>
            <div className="dealsImage">
                <img src={props.image}></img>
            </div>

            <div className="content">
                <span onClick={productsHandler}>{props.name}</span><span> </span><span>{props.value}</span>
                <p>₹ {offerprice}.00</p>
               <p>M.R.P: <s>₹{props.price}.00</s></p>
                {/* <p>M.R.P: <s>₹{props.price}</s></p> */}
                <p>Save: ₹{saveround}.00</p>
            </div>
            <div className="cartBtn">
                {
                    cartBtn==true ? <div onClick={cartHandler}><button>Add to Cart</button><span>+</span></div>: <p>Added to the Cart</p>
                    //  <div><button onClick={()=>{
                    //     setQty(qty+1)
                        
                    //  }}>+</button> <p>{qty}</p>
                    //  <button onClick={()=>{
                    //      if(qty>0){
                    //          setQty(qty-1)
                    //      }
                    //  }
                      
                    //  }>-</button></div>
                }
            </div>
        </div>
       
        </>)
}
export default  ProdcutItems;