import './Home.css'
import NavBar from '../components/navbar'
import MealContainer from '@/components/meal-containter'

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className='base'>
        <div className='handle'></div>
        <div className='content-container'>
          <MealContainer></MealContainer>
          <button className="fixed-button" onClick={() => window.location.href = '/form'}>Add Meal!</button>
        </div>
      </div>
    </>
  )
}

export default Home
