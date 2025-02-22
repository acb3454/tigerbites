import './App.css'
import NavBar from './components/ui/navbar'
import Db_form from './components/ui/db_form'

function App() {

  return (
    <>
      <div className='base'>
        <div className='handle'></div>
        <NavBar></NavBar>
        <Db_form></Db_form>
      </div>
    </>
  )
}

export default App
