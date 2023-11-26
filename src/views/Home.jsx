import { Container, Col, Row, Image } from "react-bootstrap"
import Logo from '../betosLogo.jpg'
import '../assets/css/base.css'

const Home = ()=> {
    return(
        <Container fluid className='contenedor'>
            <Row className='align-items-center'>
                <Col className="mx-auto texto">
                    <h2 className="text-center">BETO'S</h2>
                    <h2 className="text-center">Tu aliado, tu solución</h2>
                </Col>
                <Col>
                    <Image 
                        src={Logo} 
                        alt="logo" 
                        rounded 
                        className="img-fluid object-fit=cover" 
                        loading="lazy"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home