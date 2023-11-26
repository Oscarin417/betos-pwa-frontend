import Buton from './Buton'
import { useContext } from "react"
import { DataContext } from "./DataContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const CartItemCounter = ({pro}) => {
    const {cart, setCart, buyProductos} = useContext(DataContext)

    const decrese = ()=> {
        const productorepeat = cart.find((item)=> item.id === pro.id)

        productorepeat.quanty !==1 && 
            setCart(cart.map((item)=> (item.id === pro.id ? {...pro, quanty: 
            productorepeat.quanty - 1} : item)))
    }
    return (
        <>
            <Buton
                variante='success'
                click={()=> buyProductos(pro)}
            >
                <FontAwesomeIcon icon={faPlus} />
            </Buton>
            <Buton
                variante='warning'
                click={()=> decrese(pro)}
            >
                <FontAwesomeIcon icon={faMinus} />
            </Buton>
            <p>{pro.quanty}</p>
        </>
    )
}

export default CartItemCounter