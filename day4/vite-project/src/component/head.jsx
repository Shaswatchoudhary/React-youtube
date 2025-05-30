import React from 'react'
import style from "./head.module.css"
const Head = ({item}) => {
  return (
    <div >
      <h1 className={style.btn}>Shop App</h1>

      <h4>{item.length === 0 ? "Shop is closed" : "Shop is open"}</h4>
    </div>
  )
}

export default Head
