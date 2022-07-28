import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Home/Header/Header';

const Router: React.FunctionComponent = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default Router
