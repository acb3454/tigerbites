import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Auth from './pages/Auth'
import MealDetails from './components/meal-details'
import About from './pages/About'
import NewUser from './pages/NewUser'
import GetStarted from './pages/GetStarted'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/start" element={<GetStarted/>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/meal/:mealId" element={<MealDetails/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
