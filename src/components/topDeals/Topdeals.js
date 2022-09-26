import "./Topdeals.css";
import DealsItems from "./DealsItems";
import amul from "../../images/topdeals/amul.jpg";
import colgate from "../../images/topdeals/colgate.jpg";
import excel from "../../images/topdeals/excel.jpg";
import maggi from "../../images/topdeals/maggi.jpg";
import refinedOil from "../../images/topdeals/refinedOil.jpg";
import sugar from "../../images/topdeals/sugar.jpg";


function Topdeals() {
    const topdeals =[
        {
            id:1,
            name: "Saffola Gold Refined Oil",
            image: refinedOil,
            price: 1310,
            offer: 31

          },
          {
            id:2,
            name: "Sugar",
            image: sugar,
            qty:"2 kg",
            price: 100,
            offer: 17
          },
          {
          id:3,
          name: "Colgate Strong Teeth",
          image: colgate,
          qty:"200 g",
          price: 253,
          offer: 29
        },
        {
            id:4,
            name: "Surf Excel",
            image: excel,
            price: 1425,
            qty:"6 kg",
            offer: 21
          },
          {
            id:5,
            name: "Maggi 2-Minute Masala",
            image: maggi,
            price: 109,
            qty:"560 g",
            offer: 12
          },
          {
            id:6,
            name: "Amul Butter",
            image: amul,
            qty:"500 g",
            price: 255,
            offer: 3
          }
     
    ];
    return (<>
    <div className="topdeals">
        <div className="tcontainer">
            <h2>Top Deals</h2>
            <div className="dealsWrapper">
                {
                topdeals.map((deals)=>{
                    return <DealsItems key={deals.id} name={deals.name} image={deals.image} price={deals.price} offer={deals.offer} qty={deals.qty}></DealsItems>
                })
                }
            </div>
        </div>
    </div>
    </>)
}
export default Topdeals;