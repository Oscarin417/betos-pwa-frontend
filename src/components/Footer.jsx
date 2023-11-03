import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react"
import { Container, Row, Col, NavLink } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [])

    return (
        <Container fluid className='bg-dark'>
                <Row className="justify-content-center">
                    <Col col-md-6 col-sm-12>
                        <p className="text-white text-center">
                            BETO'S &#174; {year}
                        </p>
                        <NavLink as={Link} to="/tyc" className="text-center text-white">
                            Terminos y Condiciones
                        </NavLink>
                    </Col>
                </Row>
        </Container>
    )
}

export default Footer