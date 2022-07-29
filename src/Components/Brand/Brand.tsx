import { useLocation } from 'react-router-dom'
import BrandHeader from './BrandHeader/BrandHeader'
import ChooseBrand from './BrandHeader/ChooseBrand/ChooseBrand'

// interface IBrandProps {}
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
    </>
  )
}

export default Brand
