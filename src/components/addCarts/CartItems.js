import { useState } from "react";
import "./CartItems.css";
function CartItems(props) {
    const  save = (props.offer / 100) * (props.price);
           const saveround = Math.round(save);
    const offerprice = (props.price) - (saveround);
    const [count,setCount] = useState(1)
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])

return(<>
    <div className="cartItems">
        <div className="imgcontent">
            <div className="dealsImage">
                <img src={props.image}></img>
            </div>

            <div className="cartContent">
                <span>{props.name}</span> <span>{props.value}</span><br></br>
                <span>₹{offerprice*count}</span>
                <span><s>₹{props.price}</s></span>
                <span>You Save ₹{saveround}</span>
            </div>
            </div>
        
                  <div className="idbtns"><button onClick={()=>{
                        setCount(count+1)
                     }}>+</button> <p>{count}</p>
                     <button onClick={()=>{
                         if(count>1){
                             setCount(count-1)
                         }
                     }
                      
                     }>-</button>
                     </div>
              
          
          
            </div>
    </>)
};
export default CartItems;