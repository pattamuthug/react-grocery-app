import './App.css';
import Header from './components/header/Header';
import Categorylist from './components/category/Categorylist';
// import Topdeals from './components/topDeals/Topdeals';
import Fruitslist from './components/category/fruits/Fruitslist';
import Cartholder from './components/addCarts/Cartholder';
import Fooddetails from './components/details/Fruitsdetails';
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
        <Route path='/fruits' element={<Fruitslist/>}></Route>
        <Route path='addcart' element={<Cartholder/>}></Route>
        <Route path='fruits/:id' element={<Fooddetails></Fooddetails>}></Route>
      </Routes>
     
      
      {/* <Topdeals></Topdeals> */}
      </AddContext.Provider>
    </div>
  );
}

export default App;
