import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import '../assets/css/base.css'

const TyC = () => {
  const [isAgreed, setIsAgreed] = useState(false)

  const handleAgree = () => {
    setIsAgreed(true)
  };

  return (
    <Container fluid className="contenedor">
      <Row>
        <Col md={12}>
          <Card>
            <CardBody className="texto">
              <h1>TÉRMINOS Y CONDICIONES</h1>
              <p>
                Estos términos y condiciones rigen el uso de este sitio web  y los servicios ofrecidos en este Sitio por Beto's Cosmetics.
              </p>
              <p>
                Al acceder o utilizar el Sitio, usted acepta estar sujeto a estos Términos. Si no acepta estos Términos, no debe acceder ni utilizar el Sitio.
              </p>
              <p>
                Beto's se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones se publicarán en el Sitio y entrarán en vigor inmediatamente después de su publicación. Su uso continuado del Sitio después de la publicación de cualquier modificación constituye su aceptación de dichos cambios.
              </p>
              <p>
                Usted debe tener al menos 18 años de edad para usar el Sitio.
              </p>
              <p>
                Beto's le otorga una licencia limitada, no exclusiva, no transferible y revocable para acceder y utilizar el Sitio para su uso personal. No puede copiar, modificar, distribuir, vender o alquilar ninguna parte del Sitio.
              </p>
              <p>
                Beto's no garantiza que el Sitio o los servicios ofrecidos en el Sitio estarán disponibles de manera ininterrumpida o libre de errores. Beto's no será responsable por ningún daño que resulte de su uso del Sitio o de los servicios ofrecidos en el Sitio.
              </p>
              <p>
                Beto's puede, en cualquier momento y sin previo aviso, rescindir su acceso al Sitio o a los servicios ofrecidos en el Sitio.
              </p>
              <p>
                Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Mexicana.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TyC
