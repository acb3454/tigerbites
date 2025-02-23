import './Home.css'
import NavBar from '../components/navbar'
import InsideFridge from '@/components/inside-fridge'

function GetStarted() {
  return (
    <>
      <NavBar></NavBar>
      <InsideFridge>
        <div className= "mx-20">
            <div>
              <h1>Getting Started with TigerBytes</h1>
              <br></br>
              <h2 >
                Welcome to <b>TigerBytes</b>. 
              </h2>
              <br></br>
              <p className= "text-sm">
                To get started, click the menu in the top corner, and select <b>"Login"</b> to make an account. You'll be prompted to enter your name, email address and a password.
              </p>
              <br></br>
              <p className= "text-sm">
                All of the foods on the homepage are available, so if you see something that looks good, just click it to see more information. 
                Stop by the pickup location during the designated pickup times, and once you get the food, click <b>"Take Food"</b>. 
                If you'd like to post a food to share, click <b>"Add Food"</b> at the bottom of the home page fridge, and fill out the form. 
              </p>
              <br></br>
              <p className= "text-sm">
                Thanks for using TigerBytes and helping to reduce waste, one byte at a time! 
              </p>
            </div>
          </div>
     </InsideFridge>
    </>
  )
}

export default GetStarted