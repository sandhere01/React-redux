import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./redux/reducer/counter"

function App () {
    const counter = useSelector((e) => e.newCounter.item)

    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleReset = () => {
        dispatch(reset())
    }
    
  

    return <>
     <div>
        <h1>{counter}</h1>
    </div>

    
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>x</button>

    </>
   
    
}
export default App 