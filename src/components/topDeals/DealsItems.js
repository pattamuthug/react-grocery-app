import "./DealsItems.css";
import {useNavigate} from "react-router-dom";

function DealsItems(props) {
   const productsTo = useNavigate();
    const  save = (props.offer / 100) * (props.price);
    const saveround = Math.round(save);
    const offerprice = (props.price) - (saveround);
const productsHandler=()=>{
        productsTo("/"+`${props.category}`+"/"+`${props.id}`)
    }

    return (<>
        <div className="dealsItems">

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
        </div>
    </>)
}
export default DealsItems;