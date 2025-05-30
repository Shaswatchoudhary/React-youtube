import React from 'react'
import style from './container.module.css'

const Getdata = ({data}) => {
  return (
    <div className={style.buttonContainer}> 
      <button 
        onClick={data} 
        className={`${style.buyButton} btn btn-info`}
      >
      Confirm
      </button>
    </div>
  )
}

export default Getdata
