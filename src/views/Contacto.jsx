import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import T_area from '../components/T_area'
import Check_box from '../components/Check_box'
import Boton from '../components/Buton'
import Alerta from '../components/Alerta'
import '../assets/css/base.css'
import { Container, Row, Col } from 'react-bootstrap'
import { createContacto } from '../api/api'
import toast, {Toaster} from 'react-hot-toast'

const Contacto = ()=> {
    const {register, handleSubmit, reset, formState: {
        errors
    }} = useForm()

    const enviarDatos = handleSubmit(async data => {
        const res = await createContacto(data)
        console.log(res)
        toast.success('Su mensaje fue enviado con éxito')
        reset()
})

    return(
        <Container fluid className='contenedor'>
            <h2 className='text-center texto'>¡CONTACTANOS!</h2>
            <Row>
                <Col xs={12} sm={6} texto>
                    <form onSubmit={enviarDatos}>
                        <Input 
                            type='text' 
                            placeholder='Nombre'
                            register={register}
                            name='nombre'
                            required={true}
                        />
                        {errors.nombre && <Alerta variante='danger' mensaje='Este campo es requerido' />}
                        <Input 
                            type='email' 
                            placeholder='Correo'
                            register={register}
                            name='correo'
                            required={true}
                        />
                        {errors.correo && <Alerta variante='danger' mensaje='Este campo es requerido' />}
                        <Input 
                            type='text' 
                            placeholder='Telefono'
                            register={register}
                            name='telefono'
                            required={true}
                        />
                        {errors.telefono && <Alerta variante='danger' mensaje='Este campo es requerido' />}
                        <T_area 
                            rows={6} 
                            placeholder='Mensaje' 
                            register={register}
                            name='mensaje'
                            required={true}
                        />
                        {errors.mensaje && <Alerta variante='danger' mensaje='Este campo es requerido' />}
                        <Check_box 
                            mensaje='Acepto Aviso de Privacidad'
                            register={register}
                            name='condicones'
                            required={true}
                        />
                        {errors.condiciones && <Alerta variante='danger' mensaje='Este campo es requerido' />}
                        <Boton variante='success' texto='Enviar' />
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </form>
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