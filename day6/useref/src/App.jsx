import React, { useRef , useState} from 'react'

//const refObject = useRef()
function App () {
const [Name , setName] = useState("Shaswat")
  const refObject = useRef()
  console.log(refObject);

  function Reset(){
    setName("")
    refObject.current.focus()
  }
  function Default(){
    refObject.current.value="Shaswat"
    refObject.current.focus()
  }
  return (
    <div>
      <h1>Shaswat</h1>

      <input type='text' value={Name} onChange={(event => setName (event.target.value))} ref={refObject}></input>

      <button onClick={Reset}>Reset</button>

      <button onClick={Default}>Default</button>

    </div>

  )
}

export default App



