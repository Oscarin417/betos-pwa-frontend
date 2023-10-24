import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../betosLogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Contacto from '../views/Contacto'
import QSM from "../views/QSM"

const NavBar = ()=> {
    return(
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>
                            <img src={Logo} alt="logo" width="30" className="d-inline-block align-top" />
                            BETO'S
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to='/qsm'>Quines Somos</Nav.Link>
                                <Nav.Link as={Link} to='/contacto'>Contacto</Nav.Link>
                            </Nav>
                            <Nav>
                                <NavDropdown title='Usuario' id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to='/login'>LogIn</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/registro'>Registro</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path='/contacto'>
                        <Contacto />
                    </Route>
                    <Route path='/qsm'>
                        <QSM />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default NavBar