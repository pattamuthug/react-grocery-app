import './App.css';
import Header from './components/header/Header';
import Categorylist from './components/category/Categorylist';
import Productlist from './components/category/products/Productlist';
import Cartholder from './components/addCarts/Cartholder';
import Productdetails from './components/details/Productsdetails';
import React,{useEffect, useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
import AddContext from './Context';
import Login from './components/login/login';
  function App() {
    const[cart,setCart]=useState([]);
    const[qty,setQty]=useState(0);
    const addCart=(item)=>{
      
    setCart((preitems)=>{
        return[item,...preitems]
      })
    }
    const [fruit, setFruit] = useState([]);
    const [veg, setVeg] = useState([]);
    const [snacks, setSnacks] = useState([]);
    const [spices,setSpices ] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        
      fetch("http://localhost:3000/fruits").then(res=>res.json())
      .then(data => setFruit(data))

      fetch("http://localhost:3000/vegetables").then(res=>res.json())
      .then(data => setVeg(data))

      fetch("http://localhost:3000/snacks").then(res=>res.json())
      .then(data => setSnacks(data))
      
      fetch("http://localhost:3000/spices").then(res=>res.json())
      .then(data => setSpices(data))
  }, [])
  

  useEffect(()=>{
    setTotal(()=>{
      return [...fruit,...veg,...snacks,...spices];
    })
  },[fruit,veg,snacks,spices])

  return (
    <div className="App">
      <AddContext.Provider value={{addCart,cart,setQty,qty,total}}>
       <Header></Header>
      <Routes>
        <Route index element={<Categorylist></Categorylist>}></Route>
        <Route path='/:category' element={<Productlist/>}></Route>
        <Route path='addcart' element={<Cartholder/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/:details/:id' element={<Productdetails></Productdetails>}></Route>
      </Routes>
      </AddContext.Provider>
    </div>
  );
}

export default App;
