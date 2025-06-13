import React , {useCallback, useState} from 'react'
import Child from './child'
const App = () => {
  const [add , setadd] = useState(0)
  const [minus , setminus] = useState(0)
  const print=useCallback(()=>{
    //console.log("helo im shaswat");
  },[add])
  return (
   <>
   <Child print={print} sum={add}/>
   <h1>{add}</h1>
   <button onClick={()=> setadd(add+1)}>ADD 1</button>
   <h1>{minus}</h1>
   <button onClick={()=> setminus(minus-1)}>SuB 1</button>
   </>
  )
}

export default App