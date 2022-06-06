/*
  Este archivo sera el encargado de controlar los Router para la navegacion entre paginas
*/

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* Layouts */
import Layout from './layouts/Layout'
/* Pages */
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/books' element={<Layout />}>  {/* Asignacion de navegacion */}
          <Route index element={<Home />} /> {/* Asignacion de la pagina Index */}
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App