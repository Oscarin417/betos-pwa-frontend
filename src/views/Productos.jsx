import { Col, Card } from 'react-bootstrap'
import Button from '../components/Buton'

const Productos = ()=> {
    return(
        <Col className="bg-info">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" alt='' />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>$</Card.Text>
                <Card.Text></Card.Text>
                <Button variante='primary' texto='Agregar al carrito' />
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Productos