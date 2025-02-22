import { useState } from 'react'
import './App.css'
import NavBar from './components/ui/navbar'
import Home from './components/ui/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='base'>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    </>
  )
}

export default App
