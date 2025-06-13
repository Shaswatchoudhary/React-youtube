import React , {useState , useMemo} from 'react'

const App = () => {
const [sum, setsum] = useState(0)
const [minus, setminus] = useState
(1000)

const multi = useMemo(function(){
  console.log("helo im shaswat");
  
  return sum * 5;
}, [sum])
  return (
  <>
  <h1>Shaswat </h1>
  {multi} 
  <button onClick={()=> setsum(sum+1)}>+</button>
  <span>{sum}</span>
  <button onClick={()=> setminus(minus-1)}>-</button>
  <span>{minus}</span>
  </>
  )
}

export default App