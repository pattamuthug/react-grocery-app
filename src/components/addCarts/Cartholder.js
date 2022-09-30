import { useContext } from "react";
import AddContext from "../../Context";
import CartItems from "./CartItems";
import "./Cartholder.css";
function Cartholder() {
    const cartHolder = useContext(AddContext);
    // const count = cartHolder.qty;
    const length = cartHolder.cart.length;
    return(<><div className="cartHolder">
        <div className="cortContainer">
            <div className="cartWrapper">
                <div className="cartTitle">MY Cart ({length})</div>
                <div className="cartitem">
            {
                cartHolder.cart.map((items)=>{
                    return <CartItems value={items.value} key={items.id} name={items.name} image={items.image} price={items.price} offer={items.offer} length={length}/>
                })
            }</div>
            </div>
        </div>
    </div>

    </>)
}
export default Cartholder;