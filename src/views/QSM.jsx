import { useMemo } from "react"
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/base.css'
import { useTranslation } from "react-i18next"

const QSM = ()=> {
    const {t} = useTranslation()
    const translatedText = useMemo(()=> ({
        titulo1: t('c_titulo_1'),
        titulo2: t('c_titulo_2'),
        titulo3: t('c_titulo_3'),
        titulo4: t('c_titulo_4'),
        texto1: t('c_texto_1'),
        texto2: t('c_texto_2'),
        texto3: t('c_texto_3'),
        b1: t('c_b_1'),
        b2: t('c_b_2'),
        b3: t('c_b_3'),
        b4: t('c_b_4'),
        b5: t('c_b_5'),
        p1: t('c_texto_p_1'),
        p2: t('c_texto_p_2'),
        p3: t('c_texto_p_3'),
        p4: t('c_texto_p_4'),
        p5: t('c_texto_p_5')
    }), [t])
    return(
        <Container fluid className="contenedor">
            <h1 className="text-center texto">{translatedText.titulo1}</h1>
            <Row>
                <Col>
                    <p className="texto">
                        {translatedText.texto1}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center texto">{translatedText.titulo2}</h2>
                    <p className="texto">
                        {translatedText.texto2}
                    </p>
                </Col>
                <Col>
                    <h2 className="text-center texto">{translatedText.titulo3}</h2>
                    <p className="texto">
                        {translatedText.texto3}
                    </p>
                </Col>
                <Col>
                    <h2 className="text-center texto">{translatedText.titulo4}</h2>
                    <ul className="texto">
                        <li><b>{translatedText.b1}:</b> {translatedText.p1}</li>
                        <li><b>{translatedText.b2}:</b> {translatedText.p2}</li>
                        <li><b>{translatedText.b3}:</b> {translatedText.p3}</li>
                        <li><b>{translatedText.b4}:</b> {translatedText.p4}</li>
                        <li><b>{translatedText.b5}:</b> {translatedText.p5}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default QSM