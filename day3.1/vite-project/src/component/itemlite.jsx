import style from './itemlite.module.css'
function Itemlite({item}){

  const Buybtm =(event) =>{
    console.log(event)
    alert(`Thank you for your purchase! Your order has been ${item} confirmed.`)
    console.log(`${item} buy`)
  }
  //let {item} =props
return <> 
<div className={style.divv}>
  <li className="abc list-group-item">
    {item}
    <button onClick={Buybtm} className={`${style.btn} btn btn-info`}>
      Buy
    </button>
  </li>
</div>
</>
}
export default Itemlite