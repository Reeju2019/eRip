import * as React from 'react';
import Devices from '../devices/Devices';
import Header from '../header/Header';
import Offer from '../offer/Offer';
import User from '../userSay/User';
import WhyUs from '../whyUs/WhyUs';

interface IHomeProps {
}
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>  
      {/* <Header/> */}
      <Devices/>
      <WhyUs/>
      <Offer/>
      <User/>
    </>
  );
};

export default Home;
