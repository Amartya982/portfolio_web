import React from 'react'
import "./Navbar.css"
import {
  BrowserRouter as Router,
  Link,NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import { motion } from 'framer-motion';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Portfolio from "../portfolio/Portfolio"
const Navbar = () => {
    return (
     
      
        <div className="navbar">
        <Link className="nav" to="/About">ABOUT</Link>{' '}
        <Link className="nav1"  to="/Portfolio" >PORTFOLIO</Link>{' '}
        <Link className="nav2" to="/Contact">CONTACT</Link>
        <div className="icon">
        <a href="https://www.facebook.com/Amarakzq"
        className="fb">
        <FacebookIcon style={{ color: "white ", fontSize:"30" }}/>
      </a>
      <a href="https://www.instagram.com/amar_akz/"
        className="insta">
        <InstagramIcon   style={{ color: "WHITE ", fontSize:"30" }}/>
      </a>
      <a href="https://github.com/Amartya982"
      className="github">
      <GitHubIcon   style={{ color: "white", fontSize:"30" }}/>
    </a>
    <a href="mailto: amarkumargta@gmail.com"
    className="gmail">
    <EmailIcon   style={{ color: "white", fontSize:"30" }}/>
  </a>

        
        
        
       
        </div>  
      </div>
     
     
    )
}

export default Navbar
