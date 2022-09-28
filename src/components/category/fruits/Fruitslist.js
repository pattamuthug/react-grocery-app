import "./Fruitslist.css";
import { useState, useEffect } from "react";
import FruitsItems from "./FruitsItems";

function Fruitslist() {
    const [fruitsList,setFruitslist]=useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/fruits').then((response) => {
            // console.log(response.json());
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                setFruitslist(data)
            })
            
    }, []);
   
    

    return (<>
        <div className="fruits">
            <div className="fcontainer">
                <div className="fruitsWrapper">
                    <div className="fruitssort">
                        <h1>Fruits</h1>
                        <p>sort by:</p>
                        <button>Low to High</button>
                        <button>High to Low</button>
                    </div>
                    <div>
                    {
                        fruitsList.map((items)=>{
                            return <FruitsItems key={items.id} id={items.id} items={items} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></FruitsItems>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    </>)
};
export default Fruitslist;