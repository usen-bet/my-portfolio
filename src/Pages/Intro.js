import "./All.css"

import {
    BsLinkedin, BsGithub,
    BsGoogle, BsWhatsapp
} from 'react-icons/bs'


const Intro = () => {
  return (
      <div className="intro">
          <div className="sidebar">
              <div className="icons">
              <div className="c-box">
                 <a href="https://www.linkedin.com/in/danie-usen-3794ba232" style={{color:'white'}} ><BsLinkedin /></a> 
          </div>  
              <div className="c-box">
                 <a href="https://github.com/usen-bet?tab=repositories" style={{color:'white'}} ><BsGithub /></a> 
          </div>  
              <div className="c-box">
                 <a href='https://wa.me/message/DSUEJVSTOGCFJ1' style={{color:'white'}} ><BsWhatsapp /></a> 
          </div>  
              </div>
           <div className="name">
              <p>
               Good day Mr/Mrs
              </p>
          </div>
          </div>

          

          <div className="top">
              <div className="bullets">
              <h1>MY PORTFOLIO</h1>
              <p>INTRODUCTION</p>
              <p>SKILLS</p>
              <p>PROJECTS</p>
              <p>CONTACT ME</p>
          </div>
          </div>
    </div>
  )
}

export default Intro