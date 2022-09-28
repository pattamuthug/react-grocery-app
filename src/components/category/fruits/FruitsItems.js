import { useEffect, useState } from "react";
import "./FruitsItems.css";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../../Context";

function FruitsItems(props) {
    const [cartBtn,setCartbtn]=useState(true);
    const cart = useContext(AddContext);
    const fruitsTo = useNavigate();
    // const[qty,setQty]=useState(0);
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)

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
    const fruitsHandler=()=>{
        fruitsTo(`${props.id}`)
    }
    return (<>
        <div className="fruitsItems">

            <span>
                <span>{props.offer}<span>%</span></span><br/>
                <span>offer</span>
            </span>
            <div className="dealsImage">
                <img src={props.image}></img>
            </div>

            <div>
                <h4 onClick={fruitsHandler}>{props.name}</h4><span>{props.qty}</span>
                <h3>{save}</h3>
                <p>M.R.P:<s>₹{props.price}</s></p>
                <p>Save ₹{originalPrice}</p>
            </div>
            <div>
                {
                    cartBtn==true ? <button onClick={cartHandler}>Add to Cart</button>: <p>added to the cart</p>
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
export default FruitsItems;