import "./chat.css"
import {
       BsGithub,
} from 'react-icons/bs'
import "../Pages/All.css"

const Clothingbrand = () => {
  return (
      <div>
           <div className="chat">
      <div className="chat">
      <h1>Clothing Brand Site</h1>
      <div  className="img-holder" >
        <img src="./Photos/Cloth-site/dashboard.png" className="img" />
      </div>
     
      <p>
          This was a site that i did as an extra basically, a simple website with a sign in, login and pages for specific 
          clothing,            
          The site can be viewed <a href="https://clothing-site-96961.web.app/" >here</a>
      </p>

      <div  className="img-holder" >
        <img src="./Photos/Cloth-site/login.png" className="img" />
      </div>

      <p>
          A Login page that works with firebase as the backend   
        </p>

      <div  className="img-holder" >
        <img src="./Photos/Cloth-site/Jeans.png" className="img" />
      </div>        
        <p>
          The main design of the site is basic and there was really no difficulty in making the site.
              
          In order to get the code either <a href='https://github.com/usen-bet/clothing-site.git'>click here</a> 
          <br /> or click on the fixed link on the 
          left middle part of the screen 
          you can view the site <a href="https://clothing-site-96961.web.app/" >here</a>
      </p>
      </div>
      <div className="image-holder1">
        <img src="./Photos/Cloth-site/signin.png" className="img-2" />
        <img src="./Photos/Cloth-site/mobile.png" className="img-2" />

      </div>       
      <div className="c-box" style={{ position: 'fixed', top: '40%', }}>
         <a href='https://github.com/usen-bet/clothing-site.git' style={{color:'black'}} > <BsGithub /></a> 
      </div>  
    </div>
    </div>
  )
}

export default Clothingbrand