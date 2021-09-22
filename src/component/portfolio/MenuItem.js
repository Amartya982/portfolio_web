import React from 'react'
import "./Portfolio.scss"

const MenuItem = ({menuItem}) => {
    return (
        <div className="portfolis">
        {
            menuItem.map((item) => {
                return <div className="portfolio" key={item.id}>
                <div className="image-data">
                <img src={item.image} alt="" />
            <ul className="hover-items">
                  <li className="tag">
                
                             <a href={item.link1}>{item.icon1}</a>
                               <a href={item.link2}>{item.icon2}</a>   
                </li>
            </ul>
                </div>
                <h5 className="text">{item.title}
                </h5>
                    <p>polaceHolder</p>
                </div>
            })

        }
            
        </div>
    )
}

export default MenuItem
