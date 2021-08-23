import React from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () => {
    return (
        <div className="topcontent">
            <div className="topcontent_Container">
                <h1>Mr.Emelton Vincent</h1>
                <p>A professional Web and APP Developer</p>
                <a href="www.google.com">
                    <button className="topContent_downloadButton">
                        Download CV
                    </button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent_workButton">My Work</button>
                </Link>
            </div>
            
        </div>
    )
}

export default TopContent
