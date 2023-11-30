import { useContext, useCallback, useMemo } from 'react'
import { DataContext } from '../components/DataContext'
import { Col, Card, Row, Container } from 'react-bootstrap'
import Button from '../components/Buton'
import '../assets/css/base.css'
import toast, { Toaster } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const Productos = () => {
    const { t } = useTranslation()
    const { productos, buyProductos } = useContext(DataContext)

    const handleAddToCart = useCallback(
        (product) => {
            buyProductos(product)
            toast.success(`${t('producto_mensaje_1')} ${product.nombre} ${t('producto_mensaje_2')}`)
        },
        [buyProductos, t]
    );

    const memoizedProductos = useMemo(() => {
        // Memoizar la lista de productos si es estática
        return productos
    }, [productos])

    return (
        <Container className="contenedor" fluid>
            <h2 className="text-center mb-4 texto">{t('producto_titulo')}</h2>
            <Row xs={1} md={2} lg={3} xl={4} xxl={5}>
                {memoizedProductos.map((p) => (
                    <Col key={p.id}>
                        <Card style={{ width: '18rem' }} className="texto mb-3">
                            {/* Lazy loading de imágenes */}
                            <Card.Img variant="top" src={p.imagen} alt={p.nombre} height={200} loading="lazy" />
                            <Card.Body>
                                <Card.Title>{p.nombre}</Card.Title>
                                <Card.Text>${p.precio}</Card.Text>
                                <Card.Text>{p.descripcion}</Card.Text>
                                <Button variante="primary" texto="Agregar al carrito" click={() => handleAddToCart(p)} />
                                <Toaster position="top-center" reverseOrder={false} />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Productos
