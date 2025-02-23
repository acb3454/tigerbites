import './Home.css'
import NavBar from '../components/navbar'
import InsideFridge from '@/components/inside-fridge'
import FoodForm from '@/components/foodform'

function Form() {
  return (
    <>
      <NavBar></NavBar>
      <InsideFridge>
        <div className="form">
            <FoodForm></FoodForm>
        </div>
     </InsideFridge>
    </>
  )
}

export default Form
