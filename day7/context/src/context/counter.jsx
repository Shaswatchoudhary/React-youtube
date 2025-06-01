import { createContext , useState } from "react";

export const CounterContext= createContext()

export function Counter (props){
  const [count , setcount]=useState(8)

return (
<CounterContext.Provider value={{count , setcount}}>
{props.children}
</CounterContext.Provider>


)

}