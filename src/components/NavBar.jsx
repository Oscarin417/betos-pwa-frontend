import { useEffect, useState } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../betosLogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import Button from './Buton'

const NavBar = ()=> {
    const [isReadyForInstall, setIsReadyForInstall] = useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
        // Prevent the mini-infobar from appearing on mobile.
        event.preventDefault();
        console.log("👍", "beforeinstallprompt", event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        // Remove the 'hidden' class from the install button container.
        setIsReadyForInstall(true);
        });
    }, []);

    async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
        // The deferred prompt isn't available.
        console.log("oops, no prompt event guardado en window");
        return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
    }
    return(
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
                        <Nav.Link as={Link} to='/productos'>Productos</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title='Usuario' id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/login'>LogIn</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/registro'>Registro</NavDropdown.Item>
                                {isReadyForInstall && (
                                    <Button variante='primary' texto='Descargar App' onClick={downloadApp} />
                                )}
                        </NavDropdown>
                        <Nav.Link as={Link} to='/cart'>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar