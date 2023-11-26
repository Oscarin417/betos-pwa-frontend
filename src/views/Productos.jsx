import { useContext } from 'react'
import { DataContext } from '../components/DataContext'
import { Col, Card, Row, Container } from 'react-bootstrap'
import Button from '../components/Buton'
import '../assets/css/base.css'
import toast, {Toaster} from 'react-hot-toast'

const Productos = () => {
    const {productos, buyProductos} = useContext(DataContext)  

    const handleAddToCart = (product) => {
        buyProductos(product)
        toast.success(`el producto ${product.nombre} fue agregado al carrito`)
    }

    return (
        <Container className="contenedor" fluid>
            <h2 className="text-center mb-4 texto">Nuestros Productos</h2>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
                {productos.map((p)=> (
                    <Col key={p.id}>
                        <Card style={{ width: '18rem' }} className='texto mb-3'>
                            <Card.Img 
                                variant="top" 
                                src={p.imagen} 
                                alt={p.nombre}
                                height={200}
                            />
                            <Card.Body>
                                <Card.Title>{p.nombre}</Card.Title>
                                <Card.Text>${p.precio}</Card.Text>
                                <Card.Text>{p.descripcion}</Card.Text>
                                <Button 
                                    variante='primary' 
                                    texto='Agregar al carrito'
                                    click={()=> handleAddToCart(p)}
                                />
                                <Toaster
                                    position='top-center'
                                    reverseOrder={false}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Productos
