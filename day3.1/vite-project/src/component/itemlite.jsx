import style from "./itemlite.module.css"
function Itemlite({item}){
  const Buybtn = (event)=>{
    console.log(`${item} is bought`)
    console.log(event.target.value)
    alert(`You have successfully purchased ${item}!`);
  
  }
  //let {item} =props
return <>
<div className={style.divv}>
<li className=" abc list-group-item">{item}
<button onClick={Buybtn} className={`${style.btn} btn btn-info`}>
      Buy
    </button>
</li>
</div>
</>
}
export default Itemlite