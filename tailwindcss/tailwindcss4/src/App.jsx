import Empty from "./components/Empty"
import Shopitem from "./components/Shopitem"
let Items=["oil","pen","pencil", "notebook", "cake","notebook"]
//let Items =[]
function App(){
    // if(Items.length === 0){
    //     return <h3>Shop is empty</h3>
    // }
    return(
        <>
        <center>
        <h2>Shop Status</h2>
        {/* {Items.length === 0 ? <h2>Shop is Empty </h2> :null} */}
      <Empty item={Items}/>
       <Shopitem item={Items}/>

        </center>
        </>
    )
}
export default App