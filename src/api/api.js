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

export const logIn = async (credentials) => {
    try {
        const response = await api.post('/usuarios/api/login/', credentials);
        return response;
    } catch (error) {
        throw error;
    }
};


export const createUsuario = (usuario)=> {
    return api.post('/usuarios/api/', usuario)
}