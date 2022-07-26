import * as React from 'react';
import Devices from '../devices/Devices';
import Header from '../header/Header';

interface IHomeProps {
}
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>  
      {/* <Header/> */}
      <Devices/>
    </>
  );
};

export default Home;
