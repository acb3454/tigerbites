import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Auth from './pages/Auth'
import MealDetails from './components/meal-details'
import About from './pages/About'
import NewUser from './pages/NewUser'
import Impact from './pages/Impact'
import GetStarted from './pages/GetStarted'
import Team from './pages/Team'

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
          <Route path="/team" element={<Team/>} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
