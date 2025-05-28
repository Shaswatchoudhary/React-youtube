import React from 'react'
import Empty from './component/empty'
import Shopitem from './component/shopitem'
let Items=["Oil","Sugar","Salt"]
//let Items = []
function App(){
  // if(Items.length === 0 )
  //   return <h3>Shop is closed</h3>
return (

<>
{/*Fragements */} <center>
<h1>Shop App</h1>

<Empty item={Items}/>
<Shopitem item={Items} />

</center>
  </>
)
}
export default App