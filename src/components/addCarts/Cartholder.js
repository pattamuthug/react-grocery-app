import { useContext, useState } from "react";
import AddContext from "../../Context";
import CartItems from "./CartItems";
import "./Cartholder.css";
function Cartholder() {
    const [newCart, setnewCart] = useState([]); 
    const cartHolder = useContext(AddContext);
    const cartArr = cartHolder.cart;
    // const count = cartHolder.qty;
    const length = cartHolder.cart.length;
    // const arrayHandler=(arr)=>{
    //     setnewCart((pre)=>{
    //         return [...arr,...pre]
    //     })
    // }
    console.log(newCart);
    return(<><div className="cartHolder">
        <div className="cortContainer">
            <div className="cartWrapper">
                <div className="cartTitle">MY Cart ({length})</div>
                <div className="cartitem">
            {
                cartArr.map((items)=>{
                    return <CartItems value={items.value} key={items.id} name={items.name} image={items.image} price={items.price} offer={items.offer} length={length} 
                    />
                })
            }</div>
            </div>
        </div>
    </div>

    </>)
}
export default Cartholder;