import React from 'react'
import style from './container.module.css'
function Container({children}) {
  return (
    <div className={style.box}>
      {children}
     
    </div>
  )
}

export default Container
