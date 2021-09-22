import React from 'react'
import "./Skill.scss"

function SkillSection({skill,progress,width}) {
    return (
        <div className="SkillSection">
        <div className="skill-container">
            <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <p className="skill-progress"></p>


                </div>
            


        </div>

        </div>
    
       






    
    )
}

export default SkillSection
