
const Inputtext = ({ handleonchange }) => {
  return (
    <>
      <input 
        type="text" 
        placeholder="Enter Item" 
        onKeyDown={handleonchange}
      />
    </>
  )
}




export default Inputtext