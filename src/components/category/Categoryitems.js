import "./Categoryitems.css"

function Categoryitems(props) {
    return (<>
        
    
        <div className="categoryItems">
            <div><img src={props.image}></img></div>
            <div><p>{props.name}</p></div>
        </div>
        </>)
}
export default Categoryitems;