import "./All.css"
import Intro from './Intro';
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
  return (
      <div className='app'>
      <Intro />
      
      <Skills />

      <Projects />
    </div>
  )
}

export default Home