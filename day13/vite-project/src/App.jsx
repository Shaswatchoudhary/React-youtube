import React, { useEffect, useState } from 'react'


const App = () => {

  const [width , setwidth ] = useState(window.screen.width)


  function actualWidth(){
    console.log(window.innerWidth);
    setwidth(window.innerWidth)
    
    
  }

  useEffect(()=>{
window.addEventListener("resize" ,actualWidth)


return ()=>{
  window.removeEventListener("resize" ,actualWidth)
}
  })

  
  

  
  return (
    <>
    <h1>Screen size {width}</h1>
    </>
  )
}

export default App