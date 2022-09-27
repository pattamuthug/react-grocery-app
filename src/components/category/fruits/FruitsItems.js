import { useState } from "react";
import "./FruitsItems.css";
import { useContext } from "react";
import AddContext from "../../../Context";

function FruitsItems(props) {
    const cart = useContext(AddContext);
    const[qty,setQty]=useState(1);
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)

    const cartHandler=()=>{
        cart.addCart(props.items)
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
                <h4>{props.name}</h4><span>{props.qty}</span>
                <h3>{save}</h3>
                <p>M.R.P: ₹{props.price}</p>
                <p>Save ₹{originalPrice}</p>
            </div>
            <div>
                <button onClick={cartHandler}>Add to Cart</button>
                <p>{qty}</p>
                <button onClick={()=>{
                   setQty(qty+1)
                }}>+</button>
                <button onClick={()=>{
                    if(qty>1){
                        setQty(qty-1)
                    }
                }
                 
                }>-</button>
            </div>
        </div>
       
        </>)
}
export default FruitsItems;