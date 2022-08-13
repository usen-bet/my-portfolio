import "./Project.css"
import { Link } from "react-router-dom"

const Projects = () => {

  return (
    
    <div className="project">
      <h1>MY PROJECTS</h1>
          <div className="project-photo">
        <Link to="/chat">
        <div className="grid-images" >
        <img
          src="/Photos/kari-shea-1SAnrIxw5OY-unsplash.jpg"
          alt="Chat app Photos"
          className="Photos"
            />
            
        <p>A Chat Application made with React js, firebase(for Auth, storage and provider purposes ) </p>
      </div> 
        </Link>      
        <Link to="/flix">
        <div className="grid-images" >
          
        <img
          src="/Photos/burst-kUqqaRjJuw0-unsplash.jpg"
          alt="Chat app Photos"
          className="Photos"
            />
            
        <p>A Netflix dashboard clone made with react.js and a regular Movie API</p>
      </div> 
        </Link>   
        <Link to="twit">
          <div className="grid-images num3" >
         <img
          src="/Photos/christin-hume-mfB1B1s4sMc-unsplash.jpg"
          alt="Chat app Photos"
          className="Photos"
            /> 
            
            <p>A clone of Twitter home page UI made with Next.js, sanity(for backend)</p>
           
      </div> 
        </Link>   
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