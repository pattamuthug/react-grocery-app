import { useContext } from "react";
import AddContext from "../../Context";
import CartItems from "./CartItems";
function Cartholder() {
    const cartHolder = useContext(AddContext);

    return(<><div className="cartHolder">
        <div className="cortContainer">
            <div className="cartWrapper">
            {
                cartHolder.cart.map(()=>{
                    return <CartItems />
                })
            }
            </div>
        </div>
    </div>

    </>)
}