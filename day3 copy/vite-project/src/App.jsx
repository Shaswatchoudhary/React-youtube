import React from 'react'
import Empty from './component/empty'
import Shopitem from './component/shopitem'
import Container from './component/container'
import Getdata from './component/getdata'
let Items=["Oil","Sugar","Salt","books","pen","pencil","notebook","eraser"]
//let Items = []
function App(){

  function Alertt(){
    alert("ready to buy")
  }
  // if(Items.length === 0 )
  //   return <h3>Shop is closed</h3>
return (

<>
<Container>
{/*Fragements */} <center>
<h1>Shop App</h1>

<Empty item={Items}/>
<input onChange={(event)=> console.log(event.target.value)  }

type="text" placeholder="Search items"></input>
<Shopitem item={Items} />
<Getdata data={Alertt} />

</center>
</Container>

  </>
)
}
export default App