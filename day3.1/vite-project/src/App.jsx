import React from 'react'
import Empty from './component/empty'
import Shopitem from './component/shopitem'
import Container from './component/container'
import Getdata from './component/getdata'
let Items=["Oil","Sugar","Salt"]
//let Items = []
function App(){

  // if(Items.length === 0 )
  //   return <h3>Shop is closed</h3>
  function alertt(){
    alert("Thank you for your purchase! Your order has been confirmed.")
  }
return (

<>
<Container>
{/*Fragements */} <center>
<h1 style={{color:"red"}}>Shop Status</h1>

<Empty item={Items}/>
<input onChange ={(event)=>console.log(event.target.value)}
type="text" placeholder='Search items'/>
<Shopitem item={Items} />
<Getdata data={alertt}/>
</center>
</Container>
  </>
)
}
export default App