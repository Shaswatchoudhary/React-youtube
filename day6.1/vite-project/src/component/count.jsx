import React, { useReducer } from 'react'

const initialState = 0
const reducer=(state,action)=>{
    switch(action){
        case "Add":
            return state + 1
        case "Sub":
            return state - 1
        default:
            return state
    }
}
const Count = () => {
  const [count,dispatch]=useReducer(reducer , initialState)
  return (
    <>
    <h1>Count is {count}</h1>
    <button onClick={()=>dispatch("Add")}>+</button>
    <button onClick={()=>dispatch("Sub")}>-</button>
    </>
  )
}

export default Count

    