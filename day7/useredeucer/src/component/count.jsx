import React, { useReducer } from 'react'



const initialstate = 6

const reducer = (currstate , action)=>{
  switch(action){
    case "ADD":
      return currstate + 1
    case "SUB":
      return currstate - 1
    default:
      return currstate
  }
}
const Count = () => {

  const [state, dispatch] = useReducer(reducer , initialstate)

  return (
    <>
    <h1>Count is {state}</h1>
    <button onClick={()=>dispatch("ADD")}>+</button>
    <button onClick={()=>dispatch("SUB")}>-</button>
    </>
  )
}

export default Count