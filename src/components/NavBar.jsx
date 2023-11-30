import { useEffect, useState } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../betosLogo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useAuth0 } from "@auth0/auth0-react"
import DataProvider from "./DataContext"
import TotalItems from '../components/TotalItems'
import { useTranslation } from "react-i18next"

const NavBar = ()=> {
    const {t} = useTranslation()

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

    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
    return(
        <DataProvider>
            <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img src={Logo} alt="logo" width="30" className="d-inline-block align-top" />
                    BETO'S
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/qsm'>{t('nav_1')}</Nav.Link>
                        <Nav.Link as={Link} to='/contacto'>{t('nav_2')}</Nav.Link>
                        <Nav.Link as={Link} to='/productos'>{t('nav_3')}</Nav.Link>
                        {isAuthenticated ?(
                            <NavDropdown title={user.name} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={()=> logout()}>{t('nav_4')}</NavDropdown.Item>
                                <NavDropdown.Item href="http://localhost:8000/dashboard/">{t('nav_7')}</NavDropdown.Item>
                                {isReadyForInstall && (
                                    <NavDropdown.Item onClick={downloadApp}>{t('nav_5')}</NavDropdown.Item>
                                )}
                            </NavDropdown>
                                ):
                                <NavDropdown NavDropdown title='Usuario' id="collasible-nav-dropdown">
                                    <NavDropdown.Item onClick={()=> loginWithRedirect()}>{t('nav_6')}</NavDropdown.Item>
                                    <NavDropdown.Item href="http://localhost:8000/dashboard/">{t('nav_7')}</NavDropdown.Item>
                                        {isReadyForInstall && (
                                            <NavDropdown.Item onClick={downloadApp}>{t('nav_5')}</NavDropdown.Item>
                                        )}
                                </NavDropdown>}
                                <Nav.Link as={Link} to='/cart'>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <TotalItems />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </DataProvider>
    )
}

export default NavBar
