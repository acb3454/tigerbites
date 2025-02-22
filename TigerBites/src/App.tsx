import './App.css'
import NavBar from './components/ui/navbar'
import Home from './components/ui/home'

function App() {

  return (
    <>
      <div className='base'>
        <div className='handle'></div>
        <NavBar></NavBar>
        <Home></Home>
      </div>
    </>
  )
}

export default App
