import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Boton = ( {variante, tamaño, valor, alias, tipo, texto} )=> {
    return(
        <>
            <Button 
                variant={variante} 
                size={tamaño}
                value={valor}
                as={alias}
                type={tipo}
            >
                {texto}
            </Button>
        </>
    )
}

export default Boton