<<<<<<< HEAD
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
=======
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Brand from '../Home/Get-fix/Brand/Brand'
import Header from '../Home/Header/Header'
import Home from '../Home/Home'
>>>>>>> 66a5ca7bfd3568e5ecc59b9a30b614cb91cb651d

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brand' element={<Brand />} />
      </Routes>
    </>
  )
}

export default Router
