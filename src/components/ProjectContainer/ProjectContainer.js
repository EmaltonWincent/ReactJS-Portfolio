import React from 'react'
import { Element } from 'react-scroll';
import Projects from '../Projects/Projects';
import "./ProjectContainer.css";

const ProjectContainer = () => {

    const projects = [
        {
            img:"https://th.bing.com/th/id/OIP.j35ZMswoDbY7it5eu2_TlwHaEo?pid=ImgDet&rs=1",
            title:"Garden APP",
            desc:"The wallpapers displayed on PixelsTalk.Net are copyrighted by their respective authors, and may not be used in personal or commercial projects. Our wallpapers are provided only for personal use for your computer, cell phone, or other electronic devices.",
            link:"www.google.com",
        },
        {
            img:"https://th.bing.com/th/id/OIP.j35ZMswoDbY7it5eu2_TlwHaEo?pid=ImgDet&rs=1",
            title:"Garden APP",
            desc:"The wallpapers displayed on PixelsTalk.Net are copyrighted by their respective authors, and may not be used in personal or commercial projects. Our wallpapers are provided only for personal use for your computer, cell phone, or other electronic devices.",
            link:"www.google.com",
        },
        {
            img:"https://th.bing.com/th/id/OIP.j35ZMswoDbY7it5eu2_TlwHaEo?pid=ImgDet&rs=1",
            title:"Garden APP",
            desc:"The wallpapers displayed on PixelsTalk.Net are copyrighted by their respective authors, and may not be used in personal or commercial projects. Our wallpapers are provided only for personal use for your computer, cell phone, or other electronic devices.",
            link:"www.google.com",
        },
        {
            img:"https://th.bing.com/th/id/OIP.j35ZMswoDbY7it5eu2_TlwHaEo?pid=ImgDet&rs=1",
            title:"Garden APP",
            desc:"The wallpapers displayed on PixelsTalk.Net are copyrighted by their respective authors, and may not be used in personal or commercial projects. Our wallpapers are provided only for personal use for your computer, cell phone, or other electronic devices.",
            link:"www.google.com",
        },
        {
            img:"https://th.bing.com/th/id/OIP.j35ZMswoDbY7it5eu2_TlwHaEo?pid=ImgDet&rs=1",
            title:"Garden APP",
            desc:"The wallpapers displayed on PixelsTalk.Net are copyrighted by their respective authors, and may not be used in personal or commercial projects. Our wallpapers are provided only for personal use for your computer, cell phone, or other electronic devices.",
            link:"www.google.com",
        },
        {
            img:"https://th.bing.com/th/id/OIP.j35ZMswoDbY7it5eu2_TlwHaEo?pid=ImgDet&rs=1",
            title:"Garden APP",
            desc:"The wallpapers displayed on PixelsTalk.Net are copyrighted by their respective authors, and may not be used in personal or commercial projects. Our wallpapers are provided only for personal use for your computer, cell phone, or other electronic devices.",
            link:"www.google.com",
        },
    ];
    return (
        <Element className="projectcontainer" id="projects">
            <h1>Projects</h1>
            <p>Here are some projects which i done for company purpose</p>
            <div className="projectcontainer_projects">

                {
                    projects.map((project,index)=>{
                        return(
                            <Projects 
                            key={index} 
                            img={project.img} 
                            title={project.title} 
                            desc={project.desc} 
                            link={project.link}/>

                        )
                    })
                }
                
            </div>
        </Element>
    );
};

export default ProjectContainer;
