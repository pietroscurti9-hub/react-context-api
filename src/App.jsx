import { useState } from 'react'
import Homepage from './Pages/Homepage'
import Prodotti from "./Pages/Prodotti"
import ChiSiamo from './Pages/Chisiamo'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './Layaouts/AppLayout'
import DettagliProdotti from './Pages/DettagliProdotti'
import BudgetContextProvider from './Context.jsx/BudgetContext'

function App() {

  return (
    <BudgetContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/' element={<Homepage />} />
              <Route path='/ChiSiamo' element={<ChiSiamo />} />
              <Route path='/Prodotti' element={<Prodotti />} />
              <Route path='/Prodotti/:id' element={<DettagliProdotti />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContextProvider>
  )
}

export default App
