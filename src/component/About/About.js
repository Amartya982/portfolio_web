import React from 'react'
import a from "../../assets/b.mp4"
import "./About.scss"
import Resume from "../../assets/Resume.pdf"


const About =(props) => {
    return (
        <div className="container">
            <video src={a} 
            autoPlay
            loop
            muted
            style={{
            position:"absolute",
            left:"0",
            top:"0",
              width: "100%",
              height:"110%",
              objectFit: "cover",
              padding: "0px",
              margin: "0px",
              zIndex:"-1",}}
            
            />
           <p className="head">About</p> 
           <div className ="about-details">
            <div className="left-section">
            <p>FullName</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Language</p>
            <p>Address</p>
            
        
            </div>
           <div className="right-section">
               <p>Amartya Kumar</p>
               <p>22</p>
               <p>Indian</p>
               <p>Hindi,English</p>
               <p>New Colony Tungri,Near Commissioner Residence,Chaibasa</p>


           </div>
           </div>
           <a href={Resume} download="Resume" target='_blank'>
   <button className="btn">Download CV</button>
</a>
        
        </div>
    )
}

export default About
