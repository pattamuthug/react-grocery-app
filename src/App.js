import './App.css';
import Header from './components/header/Header';
import Categorylist from './components/category/Categorylist';
// import Topdeals from './components/topDeals/Topdeals';
import Productlist from './components/category/products/Productlist';
import Cartholder from './components/addCarts/Cartholder';
// import Fooddetails from './components/details/productsdetails';
import React,{useEffect, useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
import AddContext from './Context';
  function App() {
    const[cart,setCart]=useState([]);
    const[qty,setQty]=useState(0);
    // console.log(qty);
    const addCart=(item)=>{
      
    setCart((preitems)=>{
        return[item,...preitems]
      })
    }

  return (
    <div className="App">
      <AddContext.Provider value={{addCart,cart,setQty,qty}}>
       <Header></Header>
      <Routes>
        <Route index element={<Categorylist></Categorylist>}></Route>
        <Route path='/:category' element={<Productlist/>}></Route>
        <Route path='addcart' element={<Cartholder/>}></Route>
        {/* <Route path='products/:id' element={<Fooddetails></Fooddetails>}></Route> */}
      </Routes>
     
      
      {/* <Topdeals></Topdeals> */}
      </AddContext.Provider>
    </div>
  );
}

export default App;
