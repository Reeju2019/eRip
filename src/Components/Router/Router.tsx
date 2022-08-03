import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUS'
import Brand from '../Brand/Brand'
import Home from '../Home/Home'
import Model from '../Model/Model'
import MyProfile from '../MyProfile/MyProfile'
import ModelIssue from '../issue/Model_issue'

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/my_profile' element={<MyProfile />} />
        <Route path='/:deviceId' element={<Brand />} />
        <Route path='/:deviceId/:brandId' element={<Model />} />
        <Route path='/issue' element={<ModelIssue />} />
      </Routes>
    </>
  )
}

export default Router
