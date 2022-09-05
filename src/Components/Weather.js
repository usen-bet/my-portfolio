import {
       BsGithub,
} from 'react-icons/bs'
import "../Pages/All.css"
import { Link } from 'react-router-dom'

const Weather = () => {
  return (
    <div className="chat2">
      <div className="chat">
      <h1>Weather Api Project</h1>
      <div  className="img-holder" >
        <img src="./Photos/Weather App/dashboard.png" className="img" />
      </div>
     
      <p>
                  This is a project i made with html css and vanilla js 
                  i made a webste thet tracks your location and gives your
                  weather forecast at the moment, the information is gotten 
                  from an api.<br></br>

                  The project can be viewed <a href="https://weather-app-bay-omega.vercel.app/Untitled-1.html">here</a>
        </p>

     
      <div className="c-box" style={{position:'fixed', top:'40%'}}>
          
          <a href='https://github.com/usen-bet/twit-clone.git' style={{color:'white'}}> <BsGithub /></a> 
          
      </div>  
    </div>
    </div>
  )
}

export default Weather