import './Home.css'
import NavBar from '../components/navbar'
import MealContainer from '@/components/meal-containter'

function Home() {
  return (
    <>
<NavBar></NavBar>
      <div className='base'>
      {/* <NavBar></NavBar> */}
        <div className='handle'></div>
        {/* <NavBar></NavBar> */}
        <div className="formlink">
          <div className="linktext" onClick={() => window.location.href = '/form'}>
            Click here if you have meals avaliable!
          </div>
        </div>
        <MealContainer></MealContainer>
      </div>
    </>
  )
}

export default Home
