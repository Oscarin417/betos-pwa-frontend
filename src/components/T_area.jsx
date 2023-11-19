import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

const T_area = ( {rows, placeholder, register, name, required} )=> {
    return(
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                    as="textarea" 
                    rows={rows} 
                    placeholder={placeholder}
                    {...register(name, {required: required})} 
                />
            </Form.Group>
        </>
    )
}

export default T_area