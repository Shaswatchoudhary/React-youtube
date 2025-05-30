import React,{useState} from 'react'
import Empty from './component/empty'
import Shopitem from './component/shopitem'
import Container from './component/container'
import Getdata from './component/getdata'
import Inputtext from './component/inputtext'
import Head from './component/head'


//let Items = []
function App(){
  const [textShow, settextstate] = useState('User last enter') //textShow is a state variable and settextstate is a function to update the state of textShow 
  // mean jab ham input dalege usme toha vo update kar dega 
  const [Items, setnewItems] = useState([]) //Items is an array of items and setnewItems is a function to update the state of items
  console.log(textShow);


  
  const onKeyDown= (event)=>{ //onkeydown is a function that will be called when the user presses a key
    if(event.key === "Shift"){ //if the user presses the shift key
      let newItems= event.target.value //this will store the value of input field
      let newShopItem = [...Items,newItems] //this will add the new item to the array
      console.log("new item is " + newItems) //this will print the new item
      setnewItems(newShopItem) //this will update the state
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
<Container> { /*this will pass the items to the container component  , hammne yaha child props ka use karke children ko pass kar diya*/ 
 }
{/*Fragements */} <center>
<Head item={Items}/> 
{/*this will pass the items to the head component*/}
<Empty item={Items}/>
<Inputtext handleonchange={onKeyDown}></Inputtext>

<p>{`User last enter is ${textShow}`}</p> { /*this will print the last entered item*/ }
<Shopitem item={Items} /> { /*this will pass the items to the shopitem component*/ }
<Getdata data={Alertt} /> { /*this will pass the alert function to the getdata component*/ }

</center>
</Container>

  </>
)
}
export default App