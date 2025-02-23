import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Auth from './pages/Auth'
import About from './pages/About'
import NewUser from './pages/NewUser'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/login" element={<Auth />} />
          <Route path="/about" element={<About/>} />
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
