import React,{useState} from 'react'
import Empty from './component/empty'
import Shopitem from './component/shopitem'
import Container from './component/container'
import Getdata from './component/getdata'
import Inputtext from './component/inputtext'
let Items=[]


//let Items = []
function App(){
  const [textShow, settextstate] = useState('User last enter')
  const [Items, setnewItems] = useState(["Oil","Sugar","Salt"])
  console.log(textShow);


  
  const onKeyDown= (event)=>{
    if(event.key === "Enter"){
      let newItems= event.target.value
      let newShopItem = [...Items,newItems]
      console.log("new item is " + newItems)
      setnewItems(newShopItem)
      settextstate(event.target.value)
      event.target.value="" 
    //this will clear the input field
    }
  }
  
  // if(Items.length === 0 )
  function Alertt(){
    alert("ready to buy")
  }
  //   return <h3>Shop is closed</h3>
return (

<>
<Container>
{/*Fragements */} <center>
<h1 >Shop App</h1>

<Empty item={Items}/>
<Inputtext handleonchange={onKeyDown}></Inputtext>

<p>{`User last enter is ${textShow}`}</p>
<Shopitem item={Items} />
<Getdata data={Alertt} />

</center>
</Container>

  </>
)
}
export default App