import { useState } from "react"
import  Alert  from "react-bootstrap/Alert"

const Alerta = ({variante, mensaje})=> {
    const [show, setShow] = useState(true)
    return (
        <>
            <Alert variant={variante} onClose={()=> setShow(false)} dismissible>
                <Alert.Heading>{mensaje}</Alert.Heading>
            </Alert>
        </>
    )
}

export default Alerta