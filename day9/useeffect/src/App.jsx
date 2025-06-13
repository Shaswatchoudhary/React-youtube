import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data , setdata] = useState("Shaswat")

  useEffect(()=>{
console.log("abcd");

  },[data])

  function update() {
    setdata("Smile")
  }

 
  

  return (
    <>
     
   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={update}>Update Data</button>
       </div>
    </>
  )
}

export default App
