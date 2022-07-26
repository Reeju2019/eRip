import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';

interface IRouterProps {
}

const Router: React.FunctionComponent<IRouterProps> = (props) => {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </>
  );
};

export default Router;
