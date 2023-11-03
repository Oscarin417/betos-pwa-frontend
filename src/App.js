import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Contacto from "./views/Contacto"
import QSM from "./views/QSM"
import Registro from "./views/Registro"
import LogIn from "./views/LogIn"
import Productos from "./views/Productos"
import TyC from "./views/TyC"
import Error404 from "./views/Error404"

const App = ()=> {
  return(
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/qsm' element={<QSM />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/tyc' element={<TyC />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
