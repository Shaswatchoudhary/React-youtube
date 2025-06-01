import { useContext } from "react"
import { CounterContext } from "../context/counter"

const Countbtn = () => {

  const {count , setcount}= useContext(CounterContext)

    return (
        <>
        <button onClick={()=>setcount(count+1)}>+</button>
        <button onClick={()=>setcount(count-1)}  >-</button>
        </>
    )
}
export default Countbtn
