import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Fooddetails() {
    const[foodDetails, setDetails]=useState([])
    const params = useParams();
    // console.log(params.id);
    useEffect(()=>{
        fetch('http://localhost:3000/fruits/'+params.id).then((response)=>{
            if (response.ok) {
                return response.json()
            } else {
                return false
            }
        })
        .then((details)=>{
            setDetails(details)
        })
        
    },[])
    
    
    return(<>
        <div className="details">
            <div className="container">
            <img src={foodDetails.result}></img>
            <div className="detailsContent">
            <p>{foodDetails.name}</p>
            <p>hdljkhfh</p>
            </div>
            </div>
        </div>
     </>)
};
export default Fooddetails;