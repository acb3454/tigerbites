import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Auth from './pages/Auth'
import MealDetails from './components/meal-details'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/meal/:mealId" element={<MealDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
