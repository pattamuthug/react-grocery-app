import { useState } from "react";
import "./Header.css";

function Header() {
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
                        JioMart
                    </div>

                    <div className={navBar}>
                        <div className="searchBox">
                            <input type='search' />
                            <i className="fa fa-search" aria-hidden="true"></i>

                        </div>
                        <div>
                            <a>Home</a>
                            <a>login</a>
                            <a>sign up</a>
                        </div>
                        <span>
                            <i className="fa fa-cart-plus"></i>
                            <span>0</span>
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