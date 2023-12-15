import React, {useState} from "react";
import './nav.css';



const Nav = () => {
    const [isOpen, setIsOpen] = useState('false');
    console.log(isOpen);

    return (
    <header>
        <div>
            <p>Logo</p>
        </div>
            <button
            id="menu-button-toggle" 
            className="menu-button-toggle"
            aria-label="Menu Button" 
            aria-controls="main-navigation"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
            >
                <span className="sr-only">Menu</span>
                <span aria-hidden="true">
                &#9776; 
                </span>
            </button>
            <nav>

                <ul id="main-navigation" className={`main-navigation ${isOpen ? "main-navigation-open" : "main-navigation-closed"}`} >
                    <div className="icon-logo-mobile">
                        <h4>Logo</h4>
                    </div>
                    <li>
                       <a href="/">Home<span className="icon-mobile">&#62;</span></a> 
                    </li>
                    <li>
                    <a href="/">About<span  className="icon-mobile">&#62;</span></a> 
                    </li>
                    <li>
                    <a href="/">Vehicles<span  className="icon-mobile">&#62;</span></a> 
                    </li>
                    <li>
                    <a href="/">Discover<span  className="icon-mobile">&#62;</span></a> 
                    </li>
                    <li>
                    <a href="/">Shop<span  className="icon-mobile">&#62;</span></a> 
                    </li>
                </ul>
            </nav>
    </header>
    );
    };


export default Nav;