import './Home.css'
import { useState } from 'react';
import NavBar from '../components/navbar'
import MealContainer from '@/components/meal-containter'
import MealDetails from '@/components/meal-details.tsx'

function Home() {
  const [selectedMealId, setSelectedMealId] = useState<string | null>(null);

  return (
    <>
      <NavBar></NavBar>
      <div className='base'>
        <div className='handle'></div>
        <div className='content-container'>
          <button className="fixed-button" onClick={() => window.location.href = '/form'}>Add Meal!</button>
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
