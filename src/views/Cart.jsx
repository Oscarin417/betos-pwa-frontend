import CartElement from '../components/CartElements'
import CartTotal from '../components/CartTotal'
import { useContext } from 'react'
import { DataContext } from '../components/DataContext'
import '../assets/css/base.css'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Cart = ()=> {
    const {t} = useTranslation()
    const {cart} = useContext(DataContext)

    return cart.length > 0 ? (
        <Container fluid className='contenedor'>
            <CartElement />
            <CartTotal />
        </Container>
    ): (
        <h2 className="text-center texto">{t('carrito_texto')}</h2>
    )
}

export default Cart