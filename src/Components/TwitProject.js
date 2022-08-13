import {
       BsGithub,
} from 'react-icons/bs'
import "../Pages/All.css"
import { Link } from 'react-router-dom'

const TwitProject = () => {
  return (
       <div className="chat2">
      <div className="chat">
      <h1>Twitter Dashboard Project</h1>
      <div  className="img-holder" >
        <img src="./Photos/Twitter-clone-pics/twitter-dash.png" className="img" />
      </div>
     
      <p>
          This is yet another project of mine, i used Next.js and Sanity on this one and
          i had to learn a couple of things and practice on a dummy before using it onthis project
          the difficulty of this was on a high because of the amount of new things i had to learn
          on this one the way you render things on sanity is different
          from how you do with firebase, and the syntax did not make it any easier 
          eventually i got a hang of it and rendered the side feed/widgets
          with twitter provider 
          and i also got to render the middle from sanity itself,
          to get the code either <a href='https://github.com/usen-bet/twit-clone.git'>click here</a> or click on the fixed code on the 
        left middle part of the screen 
        </p>

      <div className="image-holder1">
        <img src="./Photos/Twitter-clone-pics/resp1.png" className="img-2" />
        <img src="./Photos/Twitter-clone-pics/resp2.png" className="img-2" />

      </div> 
        
      <div className="c-box" style={{position:'fixed', top:'40%'}}>
          
          <a href='https://github.com/usen-bet/twit-clone.git' style={{color:'white'}}> <BsGithub /></a> 
          
      </div>  
    </div>
    </div>
  )
}

export default TwitProject