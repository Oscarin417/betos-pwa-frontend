import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

const Input = ( {type, placeholder} )=> {
    return(
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type={type} placeholder={placeholder} />
            </Form.Group>
        </>
    )
}

export default Input