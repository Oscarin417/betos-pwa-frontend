import { createContext, useState, useEffect } from "react"
import { getAllProductos } from "../api/api"

export const DataContext = createContext()

const DataProvider = ({children})=> {
    const[productos, setProductos] = useState([])
    const[cart, setCart] = useState([])

    useEffect(()=> {
        async function loadProductos() {
            const res = await getAllProductos()
            setProductos(res.data)
        }
        loadProductos()
    }, [])

    const buyProductos = (p)=> {
        const productorepeat = cart.find((item)=> item.id === p.id)

        if(productorepeat){
            setCart(cart.map((item)=> (item.id === p.id ? {...p, quanty: 
            productorepeat.quanty + 1} : item)))
        }else{
            setCart([...cart, p])
        }
    }

    return(
        <DataContext.Provider value={{productos, cart, setCart, buyProductos}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider