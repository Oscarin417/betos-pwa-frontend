import { Form, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Check_box = ( {mensaje} )=> {
    return(
        <>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Form.Label>{mensaje}</Form.Label>
            </InputGroup>
        </>
    )
}

export default Check_box