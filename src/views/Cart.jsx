import CartElement from '../components/CartElements'
import CartTotal from '../components/CartTotal'
import { useContext } from 'react'
import { DataContext } from '../components/DataContext'
import '../assets/css/base.css'
import { Container } from 'react-bootstrap'

const Cart = ()=> {
    const {cart} = useContext(DataContext)

    return cart.length > 0 ? (
        <Container fluid className='contenedor'>
            <CartElement />
            <CartTotal />
        </Container>
    ): (
        <h2 className="text-center texto">El carrito esta vacio</h2>
    )
}

export default Cart