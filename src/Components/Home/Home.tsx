import * as React from 'react';
import Devices from '../devices/Devices';
import Footer from '../footer/Footer';
import News from '../news/News';
import Offer from '../offer/Offer';
import User from '../userSay/User';
import Vaccinatated from '../vaccinated/Vaccinatated';
import WhyUs from '../whyUs/WhyUs';

interface IHomeProps {
}
const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>  
      <Devices/>
      <WhyUs/>
      <Offer/>
      <User/>
      <Vaccinatated/>
      <News/>
      <Footer/>
    </>
  );
};

export default Home;
