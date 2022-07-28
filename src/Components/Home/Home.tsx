import Getfix from './Get-fix/Get-fix'
import HeaderCarousel from './Header/HeaderCarousel'
import Offer from './OfferCarousel/Offer'

const Home: React.FunctionComponent = () => {
  return (
    <>
      <HeaderCarousel />
      <Getfix />
      <Offer/>
    </>
  )
}

export default Home
