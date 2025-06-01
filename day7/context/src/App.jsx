
import './App.css'
import Countbtn from './component/countbtn'
import { useContext } from 'react'
import { CounterContext } from './context/counter'
function App() {

  const {count}= useContext(CounterContext)

  return (
    <>
      <h1>Count is {count}</h1>
      <Countbtn/>
    </>
  )
}

export default App
