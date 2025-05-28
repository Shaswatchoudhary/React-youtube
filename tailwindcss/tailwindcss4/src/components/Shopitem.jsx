import Itemlite from "./itemlite"

function Shopitem({item}){
    return(
        <>
        <ul className="list-group list-group-flash">
            {item.map((item, index) => (
                <Itemlite key={index} item={item} />
            ))}
        </ul>
        </>
    )
}
export default Shopitem
