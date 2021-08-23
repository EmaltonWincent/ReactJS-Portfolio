import React from 'react'
import { Element } from 'react-scroll';
import skillImage from "../../assets/1.jpg";
import  LinearProgress  from '@material-ui/core/LinearProgress';
import "./SkillContainer.css";

const SkillContainer = () => {
    return (
        
            <Element className="skillcontainer" id="skills">
                <div className="skillContainer_image">
                    <img src={skillImage} alt=""/>

                </div>
                <div className="skillContainer_text">
                    <h2>SKILLSSET</h2>
                    <div className="skillContainer_skkillSet">
                        <h5>React</h5>
                    <div className="skillContainer__slider skillContainer_slider1">
                        <LinearProgress variant="determinate" value={90}/>

                    </div>
                    </div>

                    <div className="skillContainer_skkillSet">
                        <h5>Node.js</h5>
                    <div className="skillContainer__slider skillContainer_slider2">
                        <LinearProgress variant="determinate" value={50}/>

                    </div>
                    </div>

                    <div className="skillContainer_skkillSet">
                        <h5>React Native</h5>
                    <div className="skillContainer__slider skillContainer_slider3">
                        <LinearProgress variant="determinate" value={20}/>

                    </div>
                    </div>

                    <div className="skillContainer_skkillSet">
                        <h5>JAVA</h5>
                    <div className="skillContainer__slider skillContainer_slider4">
                        <LinearProgress variant="determinate" value={80}/>

                    </div>
                    </div>

                    <div className="skillContainer_skkillSet">
                        <h5>GraphQL</h5>
                    <div className="skillContainer__slider skillContainer_slider5">
                        <LinearProgress variant="determinate" value={40}/>

                    </div>
                    </div>

                </div>

            </Element>
            
        
    )
}

export default SkillContainer
