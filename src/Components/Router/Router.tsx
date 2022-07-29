import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import Header from '../Home/Header/Header'
import Home from '../Home/Home'
import Profile from '../auth/Profile'

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default Router
