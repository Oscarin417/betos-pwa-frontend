import { Container, Col, Row, Form } from 'react-bootstrap'
import Input from '../components/Input'
import Button from '../components/Buton'

const LogIn = ()=> {
    return(
        <Container fluid className="bg-info">
            <h1 className='text-center'>LogIn</h1>
            <Row className='align-items-center'>
                <Col md={6} className="mx-auto">
                    <Form>
                        <Input type='text' placeholder='Usuario' />
                        <Input type='password' placeholder='Password' />
                        <Row>
                            <Button variante='success' texto='Iniciar Sesion' />
                            <Button variante='danger' texto='Iniciar Sesion con google' />
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LogIn