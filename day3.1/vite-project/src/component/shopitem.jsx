import Itemlite from "./itemlite"


function Shopitem({item}){
  return <><ul className="list-group ">
  {item.map(item => <Itemlite key={item} item={item}/>)}
 

</ul></>
}
export default Shopitem