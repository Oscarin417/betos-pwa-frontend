import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react"
import { NavLink, Container, Row, Col } from "react-bootstrap"

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [])

    return (
        <Container className='bg-primary'>
            <Row className="justify-content-center">
                <Col col-md-6 col-sm-12>
                    <p className="text-white text-center">
                    BETO'S &#174; {year}
                    </p>
                    <NavLink to="/terminos-y-condiciones" className="text-center text-white">
                        Terminos y Condiciones
                    </NavLink>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer