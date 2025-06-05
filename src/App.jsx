import { useState } from 'react'
import { Route, Routes} from 'react-router-dom'
import {Home, PlaceOrder, Menu, Catering} from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {



  return (
    <div>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/menu" element={<Menu />} />
            <Route path="PlaceOrder" element={<PlaceOrder />} />
            <Route path="Catering" element={<Catering />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
