import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

const QSM = ()=> {
    return(
        <Container fluid className="bg-info">
            <h1 className="text-center">¿Quienes Somos?</h1>
            <Row>
                <Col>
                    <p>
                        BETO'S es tu tienda de cosméticos de confianza. Fundada y establecida en Acámbaro, Guanajuato, BETO'S se enorgullece de ser una empresa 100% mexicana que ha florecido en la industria de la belleza. 
                        Desde nuestra humilde sede en Guanajuato, 
                        hemos estado comprometidos en atender las crecientes necesidades del mercado mexicano en el emocionante mundo de los productos de belleza.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center">Vision</h2>
                    <p>
                        Nuestra visión en BETO'S es convertirnos en la tienda de cosméticos líder a nivel nacional, 
                        reconocida por nuestros clientes como la mejor opción para encontrar los productos más innovadores, 
                        naturales y sostenibles, siempre ofreciendo un servicio excepcional.
                        </p>
                </Col>
                <Col>
                    <h2 className="text-center">Mision</h2>
                    <p>
                        Nuestra misión en BETO'S es brindar a nuestros clientes una amplia gama de productos cosméticos de alta calidad, 
                        promoviendo la belleza y la confianza en sí mismos, mientras cuidamos y respetamos el medio ambiente.
                    </p>
                </Col>
                <Col>
                    <h2 className="text-center">Valores</h2>
                    <ul>
                        <li><b>Calidad:</b> Nos esforzamos por ofrecer solo productos cosméticos de la más alta calidad, seleccionados cuidadosamente para satisfacer las necesidades de nuestros clientes.</li>
                        <li><b>Innovación:</b> Buscamos constantemente nuevas tendencias y avances en la industria de la belleza para brindar a nuestros clientes opciones vanguardistas.</li>
                        <li><b>Sostenibilidad:</b> Nos comprometemos a promover y ofrecer productos respetuosos con el medio ambiente, contribuyendo así a la conservación del planeta.</li>
                        <li><b>Confianza:</b> Trabajamos con honestidad, transparencia y ética, fomentando la confianza mutua con nuestros clientes, proveedores y colaboradores.</li>
                        <li><b>Servicio al cliente:</b> Nuestro objetivo es superar las expectativas de nuestros clientes, brindando un servicio personalizado y amable en cada interacción.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default QSM