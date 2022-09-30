import { useState } from "react";
import { Routes, Route, Link,useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectUser} from '../../features/userslice';
import { useContext } from "react";
import AddContext from "../../Context";
import "./Header.css";

function Header() {
    const parent = useSelector(selectUser)
    const cartLength = useContext(AddContext).cart;
    // const first = parent.name.split("");
    // console.log(first);
    const[navBar ,setNavbar]= useState("navItems")
    const addCartto = useNavigate()
    const barHandler=()=>{
        if (navBar=="navItems") {
            setNavbar("navItems1")
        }
        else{
            setNavbar("navItems")
        }
    }

    const cartHandler=()=>{
        if (parent.login==true) {
            addCartto("/addcart")
        }else{
            alert("Please Login")
            addCartto("/login")
        }
            
    }
    
    return (<>
        <header>
            <div className="container">
                <div className="headerWrapper">
                    <div className="logo">
                        <p>Pearl</p><span>Mart</span>
                    </div>

                    <div className={navBar}>
                        <div className="searchBox">
                            <input type='search' />
                            <i className="fa fa-search" aria-hidden="true"></i>

                        </div>
                        <div>
                            <Link to="/">Home</Link>
                            {
                            parent.login==true ?  <Link to="/login">logout</Link>: <Link to="/login">login</Link>
                            }
                           
                            <span>p</span>
                        </div>
                        <span>
                            <i className="fa fa-cart-plus" onClick={cartHandler}></i>
                            <span>{cartLength.length}</span>
                        </span>
                       
                    </div>
                    <div className="bars" onClick={barHandler}>
                            <i className="fa fa-bars"></i>
                        </div>
                </div>
            </div>
        </header>


    </>)
};
export default Header;