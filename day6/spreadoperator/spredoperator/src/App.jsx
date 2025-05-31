
function App() {

let arr = {"Shaswat" : "Choudhary"}
let bio = {1 : "Shaswat", ...arr}
console.log(arr)
console.log(bio)




  return (
    <>
    <h1>{bio}</h1>
    </>
  )
}

export default App
