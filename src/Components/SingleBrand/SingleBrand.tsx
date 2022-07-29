// interface ISingleBrandProps {
//   props : any
// }
import { useParams } from 'react-router-dom'

const SingleBrand: React.FunctionComponent = () => {
  const id = useParams()
  const brand = localStorage.getItem('deviceId')
  localStorage.setItem('brandId', JSON.stringify(id.brandId))
  console.log(id.brandId, brand)
  console.log(id)

  return <></>
}

export default SingleBrand
