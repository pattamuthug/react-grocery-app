import "./Productlist.css";
import { useState, useEffect } from "react";
import ProductItems from "./ProductItems";
import { useParams } from "react-router-dom";

function Fruitslist() {
    const [productsList,setFruitslist]=useState([]);
    const cateparams = useParams()
    
    useEffect(() => {
        fetch('http://localhost:3000/'+cateparams.category).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                setFruitslist(data)
            })
            
    }, []);
    const ascenOrder=(event)=>{
        event.preventDefault();
        // const ascenArr = productsList.sort((a,b)=>{
        //     return (a.offer - b.offer);
        // });
        setFruitslist(...(productsList.sort((a,b)=>{
            return (a.offer - b.offer);
        })) );
    } 
    const descenOrder=(event)=>{
        event.preventDefault()
        const descenArr = productsList.sort((a,b)=>{
            return (b.offer - a.offer);
        });
        setFruitslist(...descenArr);
    } 
   
    

    return (<>
        <div className="products">
            <div className="fcontainer">
                <div className="productsWrapper">
                    <div className="productssort">
                        <h1>{cateparams.category}</h1>
                        <p>sort by:</p>
                        <button onClick={ascenOrder}>Low to High</button>
                        <button onClick={descenOrder}>High to Low</button>
                    </div>
                    <div className="productsitem">
                    {
                        productsList.map((items)=>{
                            return <ProductItems key={items.id} id={items.id} items={items} name={items.name} image={items.image} price={items.price} offer={items.offer} value={items.value} category={items.category}></ProductItems>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    </>)
};
export default Fruitslist;