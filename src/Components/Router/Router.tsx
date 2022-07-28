import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUS'
import Brand from '../Home/Get-fix/Brand/Brand'
import Header from '../Home/Header/Header'
import Home from '../Home/Home'

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default Router
