import { IconButton } from '@material-ui/core'
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css";

const Contact = () => {
    return (
       <Element className="contact" id='contact'>
           <h1>Contact</h1>
           <div className="contact_container"> 
               <p>
                   Email : <span>Dan.dancen40@gmail.com</span>
               </p>
               <p>
                   Github Username :  <span>Danis1996</span>
               </p>
               <div className="contact_icons">
                   <a href="www.google.com">
                   <IconButton>
                    <LinkedIn></LinkedIn>
                   </IconButton>
                   </a>
                   <a href="www.google.com">
                   <IconButton>
                    <Facebook></Facebook>
                   </IconButton>
                   </a>
                   <a href="www.google.com">
                   <IconButton>
                    <Instagram></Instagram>
                   </IconButton>
                   </a>

               </div>
           </div>

       </Element>
    )
}

export default Contact
