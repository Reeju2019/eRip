import Footer from '../footer/Footer'
import AllModels from './AllModels/AllModels'
import ModelCarousel from './ModelCarousel/ModelCarousel'
import ModelFaq from './ModelFaq/ModelFaq'
import ModelHeader from './ModelHeader/ModelHeader'
import ModelWhyUs from './ModelWhyUS/ModelWhyUs'

const Model: React.FunctionComponent = () => {
  return (
    <>
      <ModelHeader />
      <AllModels />
      <ModelWhyUs />
      <ModelCarousel />
      <ModelFaq />
      <Footer />
    </>
  )
}

export default Model
