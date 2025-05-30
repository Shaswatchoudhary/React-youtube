import Itemlite from "./itemlite"

function Shopitem({ item }) {  // Change from {item} to {items}
  return (
    <ul className="list-group">
      {item.map((item, index) => (  // Added index for key to avoid potential issues
        <Itemlite key={`${item}-${index}`} item={item} />
      ))}
    </ul>
  )
}

export default Shopitem