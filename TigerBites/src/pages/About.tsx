import './Home.css'
import NavBar from '../components/navbar'
import InsideFridge from '@/components/inside-fridge'
import Goal2 from '../assets/Goal2.png'
import Goal3 from '../assets/Goal3.png'
import Goal11 from '../assets/Goal11.png'



function About() {
  return (
    <>
      <NavBar></NavBar>
      <InsideFridge>
        <div className= "mx-20">
            <div>
              <h1>About TigerBytes</h1>

              <p className= "text-sm">
                TigerBytes is an innovative app designed to combat food waste on RIT’s campus 
                while promoting sustainability and student well-being. TigerBytes connects students 
                with leftover prepared meals from events, gatherings, and campus activities—ensuring that 
                good food doesn’t go to waste. By reducing food-related trash, the app contributes to RIT’s 
                sustainability goals, aligning with SDGs Zero Hunger (2), Good Health and Well-Being (3), and
                Sustainable Cities and Communities (11). TigerBytes also supports students who may not have meal 
                plans or are on a tight budget by providing access to free, ready-to-eat meals. While Foodshare
                is a valuable resource for non-perishable groceries, it does not currently offer prepared meals. 
                TigerBytes could complement Foodshare by expanding its offerings, providing real-time notifications
                when fresh meals are available.
              </p>
            </div>
          </div>
          <div>
            <div className='flex flex-row'> 
              <div className= "hover:bg-gray-300">
                  <div className='scale-[0.85]'>
                    <a href="https://sdgs.un.org/goals/goal2">
                      <img src= {Goal2}></img>
                    </a>
                  </div>
              </div>
              <div className= "hover:bg-gray-300">
                <div className='scale-[0.85]'>
                  <a href='https://sdgs.un.org/goals/goal3'>
                    <img src= {Goal3}></img>
                  </a>
                </div>
              </div>
              <div className= "hover:bg-gray-300">
                <div className='scale-[0.85]'>
                  <a href = 'https://sdgs.un.org/goals/goal11'>
                    <img src= {Goal11}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
     </InsideFridge>
    </>
  )
}

export default About