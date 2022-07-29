import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUS'
import Brand from '../Brand/Brand'
import Header from '../Home/Header/Header'
import Home from '../Home/Home'
import SingleBrand from '../SingleBrand/SingleBrand'

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:deviceId' element={<Brand />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/:deviceId/:brandId' element={<SingleBrand />} />
      </Routes>
    </>
  )
}

export default Router
