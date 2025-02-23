import './Home.css'
import NavBar from '../components/navbar'
import InsideFridge from '@/components/inside-fridge'
import Hanna from '../assets/hanna.jpg'
import Peyton from '../assets/Peyton.png'
import Quincy from '../assets/Quincy.jpg'
import Aemilia from '../assets/Aemilia.png'



function About() {
  return (
    <>
      <NavBar></NavBar>
      <InsideFridge>
        <h1 className= "text-center">The Team</h1>
            <div className= "grid grid-cols-1 gap-6 place-items-center">
                <div className="flex flex-col items-center text-center">
                    <img className="h-15 w-12 rounded-full" src={Hanna} alt="" />  
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Hanna Koh</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">BS/MS Computer Science</p>       
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="h-15 w-12 rounded-full" src={Aemilia} alt="" />     
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Aemilia Blais</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">BS Computer Science</p>        
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="h-15 w-12 rounded-full" src={Peyton} alt="" />
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Peyton Wagner</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">BS Software Engineering</p> 
                </div>
                <div className="flex flex-col items-center text-center">
                    <img className="h-15 w-12 rounded-full" src={Quincy} alt="" />
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Quincy Myles Jr.</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">BS Software Engineering | MBA</p> 
                </div>
            </div>
      </InsideFridge>
    </>
  )
}

export default About