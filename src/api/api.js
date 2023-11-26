import axios from "axios"

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export const getAllProductos = ()=> {
    return api.get('/productos/api/')
}

export const createContacto = (contacto)=> {
    return api.post('/contactos/api/', contacto)
}
