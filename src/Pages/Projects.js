import "./Project.css"
import { Link } from "react-router-dom"

const Projects = () => {

  return (
    
    <div className="project">
      <h1 className="head">MY PROJECTS</h1>
          <div className="project-photo">
        <div>
        <Link to="/chat" className="link">

        <img
          src="/Photos/Project.jpg"
          alt="Chat app Photos"
          className="Photos"
            />
            
          </Link> 
       <p  className="text">Chat Application</p>   
        </div> 
        
        <div>
        <Link to="/flix" className="link">

        <img
          src="/Photos/Project.jpg"
          alt="Chat app Photos"
          className="Photos"
            />

          </Link>
        <p className="text">Nextflix Dashboard </p>  
        </div>

        <div>
        <Link to="/Weather" className="link">

        <img
          src="/Photos/Project.jpg"
          alt="Chat app Photos"
          className="Photos"
            />

          </Link> 
          <p className="text">Weather App </p>
        </div> 
        
        <div>
        <Link to="/cloth" className="link">

        <img
          src="/Photos/Project.jpg"
          alt="Chat app Photos"
          className="Photos"
        />
        
        </Link>
        <p className="text">Clothing Brand Site</p>
        </div>            
      </div>
      <div className="footer">
        <div className="foot">
          <h1>CONTACT ME</h1>
        <div style={{textAlign:'center'}}>
          <p>Usenekongbetseobong@gmail.com</p><p>08081955876, 07047011172</p>
        </div>
        </div>
      </div>
  </div>
  )
}

export default Projects