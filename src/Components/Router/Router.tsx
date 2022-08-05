import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUS'
import Brand from '../Brand/Brand'
import Home from '../Home/Home'
import Model from '../Model/Model'
import MyProfile from '../MyProfile/MyProfile'
import Issue from '../Issue/Issue'

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/my_profile' element={<MyProfile />} />
        <Route path='/:deviceId' element={<Brand />} />
        <Route path='/:deviceId/:brandId' element={<Model />} />
        <Route path='/:deviceId/:brandId/:modelId' element={<Issue />} />
      </Routes>
    </>
  )
}

export default Router
