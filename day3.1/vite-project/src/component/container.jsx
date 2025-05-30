import React from 'react'
import style from './container.module.css'
function Container(props) {
  return (
    <div className={style.box}>
      {props.children}
     
    </div>
  )
}

export default Container
