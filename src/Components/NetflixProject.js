import "./chat.css"
import {
       BsGithub,
} from 'react-icons/bs'
import "../Pages/All.css"

const NetflixProject = () => {
  return (
   <div className="chat1">
      <div className="chat">
      <h1>Netflix dashboard Project</h1>
      <div  className="img-holder" >
        <img src="./Photos/Netflix-clone/Screenshot 2022-08-11 145611.png" className="img" />
      </div>
     
      <p>
          This was my first ever go at something that has been
          produced before, the aim was to textmy css skills mainly
          and has no very difficult functionality in it
          The site can be viewed <a href=" https://net-clone-tau.vercel.app/" >here</a>
      </p>

      <div  className="img-holder" >
        <img src="./Photos/Netflix-clone/netflix-dashboard.png" className="img" />
      </div>

      <p>
          The movies on display came from an API and if you click on any
          of the movies the computer will look forthe trailer of said movie 
          and play it 
        </p>

      <div  className="img-holder" >
        <img src="./Photos/Netflix-clone/dash2.png" className="img" />
      </div>        
        <p>
          Another trait you may find interesting is the dashboard
          picture and story changes on reloadand the background of the
          navbar becomes transparent when you scroll to the picture area
          but becomes dark when the scroll has passed that area,
          to get the code either <a href='https://github.com/usen-bet/Net-clone.git'>click here</a>
          or click on the fixed link on the 
          left middle part of the screen 
          you can view the site <a href=" https://net-clone-tau.vercel.app/" >here</a>
      </p>
      </div>
      <div className="image-holder1">
        <img src="./Photos/Netflix-clone/resp1.png" className="img-2" />
        <img src="./Photos/Netflix-clone/resp2.png" className="img-2" />

      </div>       
      <div className="c-box" style={{ position: 'fixed', top: '40%', backgroundColor: 'white' }}>
         <a href='https://github.com/usen-bet/Net-clone.git' style={{color:'black'}} > <BsGithub /></a> 
      </div>  
    </div>
  )
}

export default NetflixProject