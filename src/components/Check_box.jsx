import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/base.css'

const Check_box = ( {mensaje, register, name, required} )=> {
    return(
        <>
            <Form.Check
                className="texto"
                type="checkbox"
                label={mensaje}
                {...register(name, {required: required})} 
            />
        </>
    )
}

export default Check_box