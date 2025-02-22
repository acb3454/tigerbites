import { useState } from 'react'
import './App.css'
import NavBar from './components/ui/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='base'>
        <NavBar></NavBar>
      </div>
    </>
  )
}

export default App
