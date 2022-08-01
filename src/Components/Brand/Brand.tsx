import { useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import UserSay from '../Home/userSay/User'
import WeCare from '../Home/WeCare/WeCare'
import WhyUs from '../Home/whyUs/WhyUs'
import AllAccessories from './AllAccessories/AllAccessoriesCarousel'
import BrandHeader from './BrandHeader/BrandHeader'
import ChooseBrand from './BrandHeader/ChooseBrand/ChooseBrand'
import ChooseBrandCarousel from './ChooseBrandCarousel/ChooseBrandCarousel'
import FAQ from './FAQ/FAQ'
import HowItWorks from './HowItWork/HowItWork'
import NewsAndUpdates from './NewsAndUpdates/NewsAndUpdates'
import ServiceIssue from './ServiceIssue/ServiceIssue'

interface LocationState {
  state: {
    id: number
    product: string
  }
}

const Brand: React.FunctionComponent = () => {
  const { state } = useLocation() as LocationState
  localStorage.setItem('deviceId', JSON.stringify(state.product))

  return (
    <>
      <BrandHeader />
      <ChooseBrand />
      <WeCare />
      <HowItWorks />
      <ServiceIssue />
      <WhyUs />
      <AllAccessories />
      <UserSay />
      <FAQ />
      <ChooseBrandCarousel />
      <NewsAndUpdates />
      <Footer />
    </>
  )
}

export default Brand
