import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Users from './componets/Users/Users';
import Home from './componets/Home/Home';
import Contact from './componets/Contact/Contact';
import Notfound from './componets/Notfound/Notfound';
import Product from './componets/Producto/Producto';
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const routing = (
    <BrowserRouter>
      <div className='' >
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/contactos">Contacto</Link>
            </li>
            <li>
              <Link to="/productos">Producto</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/contactos" element={<Contact />} />
          <Route path="/productos" element={<Product />} />
          <Route  path='*' element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  return (
    <div className='container'>
      {routing}

    </div>
  )
}

export default App
