import "./Skill.css"

const Skills = () => {
  return (
      <div className="page">
          <div className='intros'>
              <div>
              <h1 className="head">
                  INTRODUCTION
              </h1>
              <p className='texts'>
                  My name is Betse Usenekong ,<br />
                  and i am a self taught front-end<br />
                  developer, i am passionate <br />
                  about my work and i would love <br />
                  to work with you, below are my <br />
                  Projects
              </p>
              </div> 
          </div>  
          <div className="skill">
              <div>
              <h1>
                MY SKILLS  
              </h1>
              <p>
                  below are the frameworks and tools <br />
                  i can use
              </p>
              <ul>
                  <li><p>React.js</p></li>
                  <li><p>Tailwind.css/CSS</p></li>
                  <li><p>HTML</p></li>
                  <li><p>Vanilla Js</p></li>
                  <li><p>Github</p></li>
                  <li><p>Firebase</p></li>
              </ul>
             </div>
          </div>
    </div>
  )
}

export default Skills
