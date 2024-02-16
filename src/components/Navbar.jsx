import React from 'react'
import "../styles/Navbar.css"
// import data from "../data/data.json"

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
             <a href="/">
                  <img id="logoImage" src="" alt="Not Found" /> 
             </a>
            </div>
            <a className="navlinks" href="/">Join Us</a>
            <a className="navlinks" href="/">Login</a>
        </div>
    )
}

export {Navbar}