import Input from '../components/Input'
import T_area from '../components/T_area'
import Check_box from '../components/Check_box'
import Boton from '../components/Buton'
import { Container, Row, Col } from 'react-bootstrap'

const Contacto = ()=> {
    return(
        <Container fluid className='bg-info'>
            <h1 className='text-center'>¡Contactanos!</h1>
            <Row>
                <Col xs={12} sm={6}>
                    <Input type='text' placeholder='Nombre' />
                    <Input type='email' placeholder='Correo' />
                    <Input type='text' placeholder='Telefono' />
                    <T_area rows={6} placeholder='Mensaje' />
                    <Check_box mensaje='Acepto Aviso de Privacidad' />
                    <Boton variante='success' texto='Enviar' tamaño='lg' />
                </Col>
                <Col xs={12} sm={6}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.4531255642155!2d-100.72049779999999!3d20.0314545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cd6727a8d4543%3A0x8fe06edff1b781d1!2sMelchor%20Ocampo%2048%2C%20Zona%20Centro%2C%2038600%20Ac%C3%A1mbaro%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1698086868571!5m2!1ses-419!2smx" 
                    style={{border: 0, width: 600, height: 450}} 
                    allowfullscreen={true} 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacto