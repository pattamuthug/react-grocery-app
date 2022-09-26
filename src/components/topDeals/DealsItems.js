import "./DealsItems.css";

function DealsItems(props) {
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)
    return (<>
        <div className="dealsItems">
            <span>
                <span>{props.offer}<span>%</span></span><br/>
                <span>offer</span>
            </span>
            <div>
                <img src={props.image}></img>
            </div>

            <div>
                <h4>{props.name}</h4><span>{props.qty}</span>
                <h3>{save}</h3>
                <p>M.R.P: ₹{props.price}</p>
                <p>Save ₹{originalPrice}</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    </>)
}
export default DealsItems;