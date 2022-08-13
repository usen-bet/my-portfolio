import "./chat.css"
import {
       BsGithub,
} from 'react-icons/bs'
import "../Pages/All.css"
import { Link } from "react-router-dom"

const ChatProject = () => {
  return (
    <div>
      <div className="chat">
      <h1>Chat Application Project</h1>
      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/chat-dashboard.png" className="img" />
      </div>
     
      <p>
        This project is a chat appplication that has a login functionality,
        that i used firebase to make and it has storage and database, also
        done with firebase, The hardest part of this project was learning about
        forebase and how it
        works and i used and read about other react related things that i didnt 
        know about in the project 
      </p>

      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/Screenshot 2022-08-11 145258.png" className="img" />
      </div>

      <p>
        The login functionality signs you into the chat and also registers that you 
        are online to the firebase backend which is shown at the side of the chat and 
        will update as "offline" when you log out
      </p>

      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/Screenshot 2022-08-11 145501.png" className="img" />
      </div>    
      
      <p>
        Pictures and chats may be sent from one user to another and the
        chat box clears after send is clicked or enter is tapped
      </p>

      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/profile.png" className="img" />
      </div> 
      
      <p>
        It has a profile component that can change and update the firebase when
        the picture is changed
          and also delete the picture from the database,
          to get the code either <a href='https://github.com/usen-bet/Chat-Application.git'>click here</a> or click on the fixed code on the 
        left middle part of the screen  
      </p>

      </div>
      <div className="image-holder1">
        <img src="./Photos/Chat-app-photos/resp1.png" className="img-2" />
        <img src="./Photos/Chat-app-photos/resp2.png" className="img-2" />
        <img src="./Photos/Chat-app-photos/resp3.png" className="img-2" />
      </div>
      <div className="c-box" style={{position:'fixed', top:'40%'}}>
  <a href='https://github.com/usen-bet/Chat-Application.git' style={{color:'white'}} > <BsGithub /></a> 
      </div>  
    </div>
  )
}

export default ChatProject