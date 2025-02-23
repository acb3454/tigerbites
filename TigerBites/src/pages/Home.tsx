import './Home.css'
import { useState } from 'react';
import NavBar from '../components/navbar'
import MealContainer from '@/components/meal-containter'
import MealDetails from '@/components/meal-details.tsx'

function Home() {
  const [selectedMealId, setSelectedMealId] = useState<string | null>(null);

  return (
    <>
      <div className='base'>
        <div className='handle'></div>
        <NavBar></NavBar>
        <div className="formlink">
          <div className="linktext" onClick={() => window.location.href = '/form'}>
            Click here if you have meals avaliable!
          </div>
        </div>
        {!selectedMealId ? (
          <MealContainer onMealClick={(id: string) => setSelectedMealId(id)} />
        ) : (
          <MealDetails/>
        )}
      </div>
    </>
  )
}

export default Home
