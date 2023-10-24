import { Container, Row, Col, Form } from "react-bootstrap"
import Input from "../components/Input"
import Boton from "../components/Buton"
import Check_box from "../components/Check_box"

const Registro = ()=> {
    return(
        <Container fluid className="bg-info">
            <h1 className='text-center'>Registro</h1>
            <Row className='align-items-center'>
                <Col md={6} className="mx-auto">
                    <Form>
                        <Input type='text' placeholder='Usuario' />
                        <Input type='text' placeholder='Nombre(s)' />
                        <Input type='text' placeholder='Apellido Paterno' />
                        <Input type='text' placeholder='Apellido Materno' />
                        <Input type='email' placeholder='Correo' />
                        <Input type='password' placeholder='Contraseña' />
                        <Check_box mensaje='Acepto Terminos y Condiciones' />
                        <Boton variante='success' texto='Registrarse' />
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Registro