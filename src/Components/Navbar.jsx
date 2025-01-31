import React from 'react'
import './Navbar.css'


export const Navbar = () => {
  return (
 <div style={{height:"10vh",backgroundColor:"gray"}}>
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="brand">
          <img className='logo' src="https://www.svgrepo.com/show/530673/bacteria.svg" alt="" />
          <h1 className='brand-text'>Brand</h1>
        </a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" id="hamburger">
          &#9776;
        </div>
      </div>
    </nav>
 </div>
)
}