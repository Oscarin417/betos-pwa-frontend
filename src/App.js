import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Contacto from "./views/Contacto"
import QSM from "./views/QSM"
import Productos from "./views/Productos"
import TyC from "./views/TyC"
import Error404 from "./views/Error404"
import Profile from "./views/Profile"
import Cart from './views/Cart'
import DataProvider from "./components/DataContext"

const App = ()=> {
  return(
    <DataProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/qsm' element={<QSM />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/tyc' element={<TyC />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </DataProvider>
  )
}

export default App
