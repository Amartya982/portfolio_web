import React from 'react'
import "./Navbar.css"
import {
  BrowserRouter as Router,
  Link, NavLink,
  Route,
  Switch,
} from 'react-router-dom';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-black">
      <div class="container-fluid">
        <button class="navbar-toggler" style={{backgroundColor:"white",opacity:"2"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          
          <ul class="navbar-nav  ms-auto">
            <li class="nav-item me-5"  >
              <a class="nav-link active " style={{ color: "white" }} aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" style={{ color: "white" }} href="/portfolio">Portfolio</a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link " style={{ color: "white" }} href="/about">About</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>




  )
}

export default Navbar
