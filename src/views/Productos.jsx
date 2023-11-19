import { useEffect, useState } from 'react'
import { getAllProductos } from '../api/api'
import { Col, Card, Row, Container } from 'react-bootstrap'
import Button from '../components/Buton'
import '../assets/css/base.css'

const Productos = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        async function loadProductos() {
            const res = await getAllProductos()
            setProductos(res.data)
        }
        loadProductos()
    }, [])

    return (
        <Container className="contenedor" fluid>
            <h2 className="text-center mb-4 texto">Nuestros Productos</h2>
            <Row xs={1} sm={2} md={3} lg={4}>
                {productos.map(p => (
                    <Col key={p.id} className="mb-4">
                        <Card style={{ width: '18rem' }} className='texto'>
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
                            <Button variante='primary' texto='Agregar al carrito' />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Productos;
