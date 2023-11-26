import { useContext } from "react"
import { DataContext } from "./DataContext"

const TotalItems = () => {
    const {cart} = useContext(DataContext)

    const itemsQuanty = cart.reduce((acc, el)=> acc + el.quanty, 0)

    console.log(itemsQuanty)

    if (itemsQuanty === 0) {
        return null; // No muestra nada si no hay elementos en el carrito
    }else{
        return <span>{itemsQuanty}</span>
    }
}

export default TotalItems