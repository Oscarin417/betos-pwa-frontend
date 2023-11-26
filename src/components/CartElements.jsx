import { useContext } from "react"
import { DataContext } from "./DataContext"
import { Col, Card, Row } from "react-bootstrap"
import CartItemCounter from "./CartItemCounter"
import Buton from './Buton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

const CartElements = () => {
    const { cart, setCart } = useContext(DataContext)

    const deleteProducto = (id) => {
        const newCart = cart.filter((e) => e.id !== id)
        setCart(newCart)
    };

    return (
        <div className="cart-container"> {/* Clase personalizada para ajustar márgenes */}
            <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
                {cart.map((pro)=> (
                    <Col key={pro.id}>
                        <Card style={{ width: '18rem' }} className='texto mb-3'>
                        <Card.Img 
                            variant="top" 
                            src={pro.imagen} 
                            alt={pro.nombre}
                            height={200}
                        />
                        <Card.Body>
                            <Card.Title>{pro.nombre}</Card.Title>
                            <Card.Text>{pro.precio * pro.quanty}</Card.Text>
                            <CartItemCounter pro={pro}/>
                            <Buton 
                                variante='danger'
                                click={()=> deleteProducto(pro.id)}
                            >
                                <FontAwesomeIcon icon={faX} />
                            </Buton>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default CartElements
