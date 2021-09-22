import React from 'react'
import { motion } from "framer-motion";
import MenuItem from './MenuItem'
import { useState } from 'react'
import "./Portfolio.scss"
import portfolios from "../portfolio/Allportfolio"


const Portfolio = () => {
    const [categories,setCategories] = useState(null);
    const [menuItems,setMenuItems] = useState(portfolios);

 
    return (
        <div className="PortfolioPage">
        <div className="title">
        <motion.h2 
        initial={{y:250}}
        animate={{ x:7,y:3}}
        transition={{type:"spring",stiffness:120 }}>
        <p className="text">
              PortFolio
             </p>
             </motion.h2> 
        </div>
        <div className="portfolios-data">
     
        <MenuItem  menuItem={menuItems} />
        </div>
        </div>
    )
}

export default Portfolio
