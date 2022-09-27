import "./Fruitslist.css";

import { useState, useEffect } from "react";
import FruitsItems from "./FruitsItems";

function Fruitslist() {
    const [fruitsList,setFruitslist]=useState([]);
    
    useEffect(() => {
        fetch('http://localhost:4000/fruits').then((response) => {
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
                    {
                        fruitsList.map((items)=>{
                            return <FruitsItems key={items.id} items={items} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></FruitsItems>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
};
export default Fruitslist;