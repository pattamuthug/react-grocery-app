import { useState } from "react";
import { Routes, Route, Link} from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../Context";
import "./Header.css";

function Header() {
    const cartLength = useContext(AddContext).cart;
    const[navBar ,setNavbar]= useState("navItems")
    const barHandler=()=>{
        if (navBar=="navItems") {
            setNavbar("navItems1")
        }
        else{
            setNavbar("navItems")
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
                            <Link>login</Link>
                            <Link>sign up</Link>
                        </div>
                        <span>
                            <i className="fa fa-cart-plus"></i>
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