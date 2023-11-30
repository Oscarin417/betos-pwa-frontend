import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody } from "react-bootstrap"
import '../assets/css/base.css'
import { useTranslation } from "react-i18next";

const TyC = () => {
  const {t} = useTranslation()

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
              <h1>{t('tc_titulo')}</h1>
              <p>
                {t('tc_1')}
              </p>
              <p>
                {t('tc_2')}
              </p>
              <p>
                {t('tc_3')}
              </p>
              <p>
                {t('tc_4')}
              </p>
              <p>
                {t('tc_5')}
              </p>
              <p>
                {t('tc_6')}
              </p>
              <p>
                {t('tc_7')}
              </p>
              <p>
                {t('tc_8')}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TyC
