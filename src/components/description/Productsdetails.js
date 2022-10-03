import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import { useContext } from "react";
import AddContext from "../../Context.js";
// import ProdcutItems from "../category/products/ProductItems";    
function Productdetails(props) {
    const [detail, setDetails] = useState([])
    const cart = useContext(AddContext);
    const [cartbtn, setCartbtn] = useState(true)
    const params = useParams();
    const save = (detail.offer / 100) * (detail.price);
    const saveround = Math.round(save);
    const offerprice = (detail.price) - (saveround);
    const cartHandler = (event) => {
        event.preventDefault()
        cart.addCart(detail)
        setCartbtn(false)
    }

    useEffect(() => {
        fetch('http://localhost:3000/' + params.details + "/" + params.id).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false
            }
        })
            .then((details) => {
                setDetails(details)
            })

    }, [])

    console.log(detail);
    return (
        <div className="details">
            <div className="dcontainer">
                <div className="detailsWrapper">
                    <div className="detailleft">
                        <span className="detoffer">
                            <span>{detail.offer}</span><span>%</span><br />
                            <p className="offertag">off</p>
                        </span>
                        <div className="detimg">
                            <img src={detail.image} />
                        </div>
                    </div>
                    <div className="detcontent">
                        <span>{detail.name}</span><span> </span><span>{detail.value}</span>
                        <p>₹ {offerprice}.00</p>
                        <p>M.R.P: <s>₹{detail.price}.00</s></p>
                        <p>Save: ₹{saveround}.00</p>
                        <div className="detBtn">
                        {
                             cartbtn==true ? <div onClick={cartHandler} className="cartBtn"><button>Add to Cart</button><span>+</span></div>:<p>Added to the Cart</p>
                        }
                    
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>)
};
export default Productdetails;