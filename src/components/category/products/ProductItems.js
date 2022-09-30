import { useEffect, useState } from "react";
import "./ProductItems.css";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../../Context";

function ProdcutItems(props) {
    const [cartBtn,setCartbtn]=useState(true);
    const cart = useContext(AddContext);
    const productsTo = useNavigate();
    const  save = (props.offer / 100) * (props.price);
    const saveround = Math.round(save);
    const offerprice = (props.price) - (saveround);

    const cartHandler=(event)=>{
        event.preventDefault()
        cart.addCart(props.items)
        setCartbtn(false)
    }
    
    const productsHandler=()=>{
        productsTo("/"+`${props.category}`+"/"+`${props.id}`)
    }
    return (<>
        <div className="productsItems">

            <span className="offer">
                <span>{props.offer}</span><span>%</span><br/>
                <p className="offertag">off</p>
            </span>
            <div className="dealsImage" onClick={productsHandler}>
                <img src={props.image}></img>
            </div>

            <div className="content">
                <span>{props.name}</span><span> </span><span>{props.value}</span>
                <p>₹ {offerprice}.00</p>
               <p>M.R.P: <s>₹{props.price}.00</s></p>
                <p>Save: ₹{saveround}.00</p>
            </div>
            <div className="cartBtn">
                {
                    cartBtn==true ? <div onClick={cartHandler}><button>Add to Cart</button><span>+</span></div>: <p>Added to the Cart</p>
            
                }
            </div>
        </div>
       
        </>)
}
export default  ProdcutItems;