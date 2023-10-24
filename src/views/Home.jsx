import { Container, Col, Row, Image } from "react-bootstrap"
import Logo from '../betosLogo.jpg'

const Home = ()=> {
    return(
        <Container fluid className='bg-info'>
            <Row className='align-items-center'>
                <Col className="mx-auto">
                    <h2 className="text-center">BETO'S</h2>
                    <h2 className="text-center">Tu aliado, tu solucion</h2>
                </Col>
                <Col>
                    <Image src={Logo} alt="logo" rounded />
                </Col>
            </Row>
        </Container>
    )
}

export default Home