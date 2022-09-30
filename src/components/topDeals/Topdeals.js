import "./Topdeals.css";
import DealsItems from "./DealsItems";
// import amul from "../../images/topdeals/amul.jpg";
// import colgate from "../../images/topdeals/colgate.jpg";
// import excel from "../../images/topdeals/excel.jpg";
// import maggi from "../../images/topdeals/maggi.jpg";
// import refinedOil from "../../images/topdeals/refinedOil.jpg";
// import sugar from "../../images/topdeals/sugar.jpg";
import { useContext } from "react";
import AddContext from "../../Context.js"


function Topdeals() {
    const topdeals = useContext(AddContext);
    const dealsArr = topdeals.total;
    const dealsSort = dealsArr.sort((a,b)=>{
       return (b.offer - a.offer); 
    })
    return (<>
    <div className="topdeals">
        <div className="tcontainer">
            <h2>Top Deals</h2>
            <div className="dealsWrapper">
                {
                dealsSort.map((deals,i)=>{
                  if (i<10) {
                    return <DealsItems key={deals.id} name={deals.name} image={deals.image} price={deals.price} offer={deals.offer} id={deals.id} category={deals.category}></DealsItems> 
                  }    
                })
                }
            </div>
        </div>
    </div>
    </>)
}
export default Topdeals;