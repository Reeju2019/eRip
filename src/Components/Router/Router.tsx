import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUS'
import Brand from '../Brand/Brand'
import Header from '../Home/Header/Header'
import Home from '../Home/Home'
// import SingleBrand from '../SingleBrand/SingleBrand'
import Model from '../Model/Model'
import MyProfile from '../MyProfile/MyProfile'

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:deviceId' element={<Brand />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/:deviceId/:brandId' element={<Model />} />
        {/* <Route path='/model' element={<Model />} /> */}
        <Route path='/my_profile' element={<MyProfile />} />
      </Routes>
    </>
  )
}

export default Router
